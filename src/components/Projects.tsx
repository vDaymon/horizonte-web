"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { projectCategories, projects } from "@/data/site";

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("Todos");
  const visible = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        {projectCategories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition ${
              filter === c ? "bg-brand text-white" : "bg-white text-ink/70 hover:text-brand"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <article key={p.title} className="group overflow-hidden bg-white shadow-sm">
            <div className="relative aspect-[4/3] overflow-hidden bg-mist">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="blueprint flex h-full w-full flex-col items-center justify-center gap-3 border-2 border-dashed border-ink/15 text-ink/40">
                  <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth={2}>
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
            </div>
            <div className="border-b-4 border-transparent p-5 transition group-hover:border-brand">
              <h3 className="text-lg font-bold text-ink">{p.title}</h3>
              <p className="mt-1 text-sm text-ink/60">{p.description}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
