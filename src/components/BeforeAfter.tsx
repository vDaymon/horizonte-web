"use client";

/* eslint-disable @next/next/no-img-element */
import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { beforeAfter } from "@/data/site";
import { asset } from "@/lib/asset";
import { ease } from "./motion";

// Comparador: arrastra la línea para ver el antes (izquierda) y el después (derecha).
function Compare({ item, index }: { item: (typeof beforeAfter)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const pos = useMotionValue(50);
  const clip = useTransform(pos, (p) => `inset(0 ${100 - p}% 0 0)`);
  const left = useTransform(pos, (p) => `${p}%`);

  // Al entrar en pantalla, la línea se mueve sola para mostrar que se puede arrastrar.
  useEffect(() => {
    if (!inView) return;
    const c = animate(pos, [50, 82, 18, 50], { duration: 2.4, delay: 0.3 + index * 0.15, ease: "easeInOut" });
    return () => c.stop();
  }, [inView, pos, index]);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
      className={item.wide ? "md:col-span-6" : "md:col-span-2"}
    >
      <div
        ref={ref}
        className={`group relative select-none overflow-hidden bg-ink ${item.wide ? "aspect-[3/2] lg:aspect-[2/1]" : "aspect-[16/10]"}`}
      >
        <img src={asset(item.after)} alt={`${item.title}: después`} draggable={false} className="absolute inset-0 h-full w-full object-cover" />
        <motion.img
          src={asset(item.before)}
          alt={`${item.title}: antes`}
          draggable={false}
          style={{ clipPath: clip }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute left-0 top-4 bg-ink px-3 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white">Antes</span>
        <span className="absolute right-0 top-4 bg-brand px-3 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white">Después</span>
        <motion.div style={{ left }} className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)]">
          <span
            className={`absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-brand text-white shadow-xl transition-transform group-active:scale-110 group-has-[:focus-visible]:ring-4 group-has-[:focus-visible]:ring-brand/40`}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
            </svg>
          </span>
        </motion.div>
        <input
          type="range"
          min={0}
          max={100}
          defaultValue={50}
          aria-label={`Comparar antes y después: ${item.title}`}
          onChange={(e) => pos.set(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 focus-visible:opacity-0"
        />
      </div>
      <figcaption className="mt-4">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{item.service}</p>
        <h3 className="mt-1 text-lg font-bold text-ink">{item.title}</h3>
        <p className="mt-1 text-sm text-ink/60">{item.text}</p>
      </figcaption>
    </motion.figure>
  );
}

export function BeforeAfter() {
  return (
    <div className="grid gap-x-6 gap-y-12 md:grid-cols-6">
      {beforeAfter.map((item, i) => (
        <Compare key={item.title} item={item} index={i} />
      ))}
    </div>
  );
}
