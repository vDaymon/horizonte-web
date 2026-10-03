"use client";

/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useState } from "react";
import { projectCategories, projects } from "@/data/site";
import { asset } from "@/lib/asset";
import { ease } from "./motion";

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("Todos");
  const visible = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <LayoutGroup>
      <div className="mb-10 flex flex-wrap gap-2">
        {projectCategories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`relative px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
              filter === c ? "text-white" : "bg-white text-ink/70 hover:text-brand"
            }`}
          >
            {filter === c && (
              <motion.span
                layoutId="filtro-activo"
                className="absolute inset-0 bg-brand"
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
              />
            )}
            <span className="relative">{c}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.article
              layout
              key={p.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
              transition={{ duration: 0.6, delay: i * 0.05, ease }}
              className="group overflow-hidden bg-white shadow-sm transition-shadow duration-500 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                {p.image ? (
                  <img
                    src={asset(p.image)}
                    alt={p.title}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                  />
                ) : (
                  <div className="blueprint flex h-full w-full flex-col items-center justify-center gap-3 border-2 border-dashed border-ink/15 text-ink/40 transition-colors duration-500 group-hover:border-brand/40 group-hover:text-brand/60">
                    <svg
                      viewBox="0 0 48 48"
                      className="h-12 w-12 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <rect x="5" y="9" width="38" height="30" />
                      <circle cx="17" cy="20" r="4" />
                      <path d="m5 35 12-10 8 7 6-5 12 9" />
                    </svg>
                    <span className="text-xs font-semibold uppercase tracking-widest">Foto del proyecto</span>
                  </div>
                )}
                <span className="absolute left-0 top-4 bg-brand px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-white">
                  {p.category}
                </span>
                <span className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="relative p-5">
                <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-brand">{p.title}</h3>
                <p className="mt-1 text-sm text-ink/60">{p.description}</p>
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  );
}
