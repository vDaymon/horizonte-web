"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ease } from "./motion";
import { whatsappLink } from "@/data/site";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#metodologia", label: "Metodología 360°" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Se oculta al bajar y reaparece al subir.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 10);
    setHidden(y > 300 && y > prev && !open);
  });

  // Navegación suave a la sección (cierra el menú primero para que el scroll no se interrumpa).
  const go = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    const target = href?.startsWith("#") ? document.querySelector(href) : null;
    if (!target) return;
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
      history.replaceState(null, "", href);
    }, 60);
  };

  // Cerrar con Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.45, ease }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? "bg-white/95 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" aria-label="Horizonte Constructora SAS — inicio" onClick={go}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={go}
              className="group relative py-2 text-sm font-semibold uppercase tracking-wide text-ink/80 transition-colors hover:text-brand"
            >
              {l.label}
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
          <a
            href={whatsappLink("Hola Horizonte, quiero cotizar un proyecto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine bg-brand px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            Cotizar
          </a>
        </nav>

        <button
          type="button"
          className="relative z-10 flex h-11 w-11 items-center justify-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-movil"
        >
          <span className="relative block h-4 w-7">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="absolute left-0 block h-0.5 w-7 bg-ink"
                style={{ top: i * 7 }}
                animate={
                  open
                    ? i === 1
                      ? { opacity: 0, x: 12 }
                      : { y: i === 0 ? 7 : -7, rotate: i === 0 ? 45 : -45, backgroundColor: "#a8101b" }
                    : { y: 0, rotate: 0, opacity: 1, x: 0, backgroundColor: "#1d1f22" }
                }
                transition={{ duration: 0.35, ease }}
              />
            ))}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-movil"
            key="menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease }}
            className="overflow-hidden border-t border-ink/10 bg-white lg:hidden"
          >
            <motion.div
              className="px-4 pb-6"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
            >
              {links.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={go}
                  variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.4, ease }}
                  className="flex items-center justify-between border-b border-ink/5 py-4 font-semibold uppercase tracking-wide text-ink active:text-brand"
                >
                  {l.label}
                  <span className="text-brand">→</span>
                </motion.a>
              ))}
              <motion.a
                href={whatsappLink("Hola Horizonte, quiero cotizar un proyecto.")}
                target="_blank"
                rel="noopener noreferrer"
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4, ease }}
                className="mt-5 block bg-brand py-4 text-center font-bold uppercase tracking-wide text-white"
              >
                Cotizar por WhatsApp
              </motion.a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
