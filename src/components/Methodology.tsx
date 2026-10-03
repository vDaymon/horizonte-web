"use client";

import { motion } from "motion/react";
import { methodology } from "@/data/site";
import { ease } from "./motion";

// Línea de tiempo: la línea roja avanza y cada etapa se enciende a su paso.
export function Methodology() {
  const step = 0.35;
  return (
    <motion.ol
      className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
    >
      <span className="absolute left-8 top-8 hidden h-0.5 w-[calc(100%-4rem)] bg-ink/10 md:block" />
      <motion.span
        className="absolute left-8 top-8 hidden h-0.5 w-[calc(100%-4rem)] origin-left bg-brand md:block"
        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
        transition={{ duration: step * methodology.length, ease: "linear", delay: 0.2 }}
      />
      {/* Línea vertical en móvil */}
      <motion.span
        className="absolute bottom-8 left-8 top-8 w-0.5 origin-top bg-brand/30 md:hidden"
        variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1 } }}
        transition={{ duration: step * methodology.length, ease: "linear", delay: 0.2 }}
      />
      {methodology.map((m, i) => (
        <li key={m.title} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
          <motion.span
            variants={{
              hidden: { scale: 0.4, opacity: 0, rotate: -45 },
              show: { scale: 1, opacity: 1, rotate: 0 },
            }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.2 + i * step }}
            className={`relative z-10 flex h-16 w-16 shrink-0 items-center justify-center font-brand text-lg text-white shadow-lg ${
              i % 2 ? "bg-ink" : "bg-brand"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </motion.span>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease, delay: 0.35 + i * step }}
          >
            <h3 className="text-lg font-bold uppercase text-ink md:mt-5">{m.title}</h3>
            <p className="mt-2 text-sm text-ink/65">{m.text}</p>
          </motion.div>
        </li>
      ))}
    </motion.ol>
  );
}
