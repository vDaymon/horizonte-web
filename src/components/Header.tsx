"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open ? "bg-white/95 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" aria-label="Horizonte Constructora SAS — inicio">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-wide text-ink/80 transition hover:text-brand"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink("Hola Horizonte, quiero cotizar un proyecto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-dark"
          >
            Cotizar
          </a>
        </nav>

        <button
          className="flex h-11 w-11 items-center justify-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-ink" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? <path d="M5 5l14 14M19 5 5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink/10 bg-white px-4 pb-6 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-ink/5 py-4 font-semibold uppercase tracking-wide text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink("Hola Horizonte, quiero cotizar un proyecto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block bg-brand py-4 text-center font-bold uppercase tracking-wide text-white"
          >
            Cotizar por WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
