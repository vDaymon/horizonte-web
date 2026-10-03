"use client";

/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { formatDate, projects, type Project } from "@/data/site";
import { asset } from "@/lib/asset";
import { ease, Reveal } from "./motion";

type Item = {
  kind: "image" | "video";
  src: string;
  thumb: string;
  caption: string;
  date: string;
  stage: string;
  portrait?: boolean;
};

// 11 + el video (que ocupa dos celdas) llenan filas completas en 2, 3 y 4 columnas.
const INITIAL = 11;

function useItems(project: Project) {
  return useMemo(() => {
    const base = `/proyectos/${project.slug}`;
    const items: Item[] = project.media.map((m) => ({
      kind: "image",
      src: asset(`${base}/full/${m.file}`),
      thumb: asset(`${base}/thumb/${m.file}`),
      caption: m.caption,
      date: m.date,
      stage: m.stage,
      portrait: m.portrait,
    }));
    if (project.video) {
      // El video va al inicio de la etapa "nave", que es donde se grabó.
      const at = items.findIndex((i) => i.stage === "nave");
      items.splice(at < 0 ? 0 : at, 0, {
        kind: "video",
        src: asset(`${base}/${project.video.file}`),
        thumb: asset(`${base}/${project.video.poster}`),
        caption: project.video.caption,
        date: project.video.date,
        stage: "nave",
        portrait: true,
      });
    }
    return items;
  }, [project]);
}

function PlayIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M8 5.5v13l11-6.5z" />
    </svg>
  );
}

function Lightbox({
  items,
  index,
  stageLabel,
  onClose,
  onIndex,
}: {
  items: Item[];
  index: number;
  stageLabel: (id: string) => string;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const [dir, setDir] = useState(0);
  const item = items[index];
  const go = useCallback(
    (d: number) => {
      setDir(d);
      onIndex((index + d + items.length) % items.length);
    },
    [index, items.length, onIndex],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [go, onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex flex-col bg-ink/95 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      role="dialog"
      aria-modal="true"
      aria-label="Galería del proyecto"
    >
      <div className="flex items-center justify-between px-4 py-3 text-white sm:px-6">
        <span className="text-sm font-semibold tabular-nums tracking-widest text-white/60">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <button
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center transition hover:rotate-90 hover:text-brand-light"
          aria-label="Cerrar galería"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M5 5l14 14M19 5 5 19" />
          </svg>
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-2 sm:px-16">
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.div
            key={item.src}
            custom={dir}
            variants={{
              enter: (d: number) => ({ x: d >= 0 ? 120 : -120, opacity: 0, scale: 0.96 }),
              center: { x: 0, opacity: 1, scale: 1 },
              exit: (d: number) => ({ x: d >= 0 ? -120 : 120, opacity: 0, scale: 0.96 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease }}
            drag={item.kind === "image" ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) go(1);
              else if (info.offset.x > 80) go(-1);
            }}
            className="flex h-full w-full items-center justify-center"
          >
            {item.kind === "video" ? (
              <video
                src={item.src}
                poster={item.thumb}
                controls
                autoPlay
                playsInline
                className="max-h-full max-w-full bg-black shadow-2xl"
              />
            ) : (
              <img
                src={item.src}
                alt={item.caption}
                draggable={false}
                className="max-h-full max-w-full select-none object-contain shadow-2xl"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {[-1, 1].map((d) => (
          <button
            key={d}
            onClick={() => go(d)}
            aria-label={d < 0 ? "Foto anterior" : "Foto siguiente"}
            className={`absolute top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center bg-white/10 text-white transition hover:bg-brand sm:flex ${
              d < 0 ? "left-3" : "right-3"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d={d < 0 ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
            </svg>
          </button>
        ))}
      </div>

      <div className="flex items-end justify-between gap-4 px-4 py-4 text-white sm:px-6">
        <motion.div key={item.src} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light">
            {stageLabel(item.stage)}
            {item.date && <span className="text-white/50"> · {formatDate(item.date)}</span>}
          </p>
          <p className="mt-1 text-base font-semibold sm:text-lg">{item.caption}</p>
        </motion.div>
        <div className="flex shrink-0 gap-2 sm:hidden">
          {[-1, 1].map((d) => (
            <button
              key={d}
              onClick={() => go(d)}
              aria-label={d < 0 ? "Foto anterior" : "Foto siguiente"}
              className="flex h-11 w-11 items-center justify-center bg-white/10 active:bg-brand"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d={d < 0 ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Timeline({ project }: { project: Project }) {
  const n = project.timeline.length;
  return (
    <motion.ol
      className="relative mt-10 grid gap-6 sm:grid-cols-5 sm:gap-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <span className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-ink/10 sm:left-0 sm:right-0 sm:top-[7px] sm:bottom-auto sm:h-0.5 sm:w-auto" />
      <motion.span
        className="absolute left-[7px] top-2 bottom-2 w-0.5 origin-top bg-brand sm:left-0 sm:right-0 sm:top-[7px] sm:bottom-auto sm:h-0.5 sm:w-auto sm:origin-left"
        variants={{ hidden: { scale: 0 }, show: { scale: 1 } }}
        transition={{ duration: 0.3 * n, ease: "linear", delay: 0.2 }}
      />
      {project.timeline.map((t, i) => (
        <motion.li
          key={t.date}
          className="relative flex gap-4 sm:block"
          variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.3, ease }}
        >
          <span
            className={`relative z-10 mt-0.5 block h-4 w-4 shrink-0 border-2 border-brand ${
              i === n - 1 ? "bg-brand" : "bg-white"
            }`}
          >
            {i === n - 1 && <span className="absolute inset-0 animate-ping bg-brand/60" />}
          </span>
          <div className="sm:mt-3">
            <p className="text-xs font-bold uppercase tracking-wider text-brand">{formatDate(t.date)}</p>
            <p className="mt-0.5 text-sm font-semibold text-ink">{t.label}</p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}

function ProjectShowcase({ project }: { project: Project }) {
  const items = useItems(project);
  const [stage, setStage] = useState("todas");
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

  const filtered = stage === "todas" ? items : items.filter((i) => i.stage === stage);
  const visible = stage === "todas" && !expanded ? filtered.slice(0, INITIAL) : filtered;
  const stageLabel = (id: string) => project.stages.find((s) => s.id === id)?.label ?? "";
  const photoCount = project.media.length;
  const cover = asset(`/proyectos/${project.slug}/full/${project.cover}`);
  const mapUrl = `https://www.google.com/maps?q=${project.coordinates.lat},${project.coordinates.lng}`;

  const tabs = [{ id: "todas", label: "Todas", count: items.length }].concat(
    project.stages.map((s) => ({ ...s, count: items.filter((i) => i.stage === s.id).length })),
  );

  return (
    <div>
      {/* Ficha del proyecto */}
      <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-stretch">
        <Reveal x={-50} y={0}>
          <button
            onClick={() => {
              setStage("todas");
              setOpen(items.findIndex((i) => i.thumb.endsWith(project.cover)));
            }}
            className="group relative block aspect-[4/3] w-full sm:aspect-[16/10] overflow-hidden bg-ink text-left lg:aspect-auto lg:h-full"
            aria-label={`Ver fotos de ${project.name}`}
          >
            <img
              src={cover}
              alt={project.name}
              className="h-full w-full object-cover object-[75%_center] transition duration-[1.5s] ease-out group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <span className="absolute left-4 top-4 flex items-center gap-2 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-ink shadow">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-brand" />
              </span>
              {project.status}
            </span>
            <span className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-white">
              <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-white/80 sm:text-sm">
                {photoCount} fotos{project.video ? " · 1 video" : ""}
              </span>
              <span className="flex items-center gap-2 whitespace-nowrap bg-brand px-3 py-2 text-xs font-bold uppercase tracking-wide transition group-hover:bg-brand-light sm:px-4 sm:text-sm">
                Ver galería
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </span>
          </button>
        </Reveal>

        <Reveal x={50} y={0} delay={0.1}>
          <div className="flex h-full flex-col bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">Proyecto destacado</p>
            <h3 className="mt-2 text-2xl font-extrabold uppercase leading-tight text-ink sm:text-3xl">{project.name}</h3>
            <p className="mt-3 text-ink/70">{project.summary}</p>
            <dl className="mt-6 grid gap-4 border-t border-ink/10 pt-6 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-ink/45">Ubicación</dt>
                <dd className="mt-1 font-semibold text-ink">
                  <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-brand/40 underline-offset-4 transition hover:text-brand">
                    {project.location}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-ink/45">Arquitectura</dt>
                <dd className="mt-1 font-semibold text-ink">{project.architect}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-ink/45">Tipo de obra</dt>
                <dd className="mt-1 font-semibold text-ink">{project.type}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-ink/45">Coordenadas</dt>
                <dd className="mt-1 font-semibold tabular-nums text-ink">
                  {project.coordinates.lat.toFixed(4)}° N, {Math.abs(project.coordinates.lng).toFixed(4)}° O
                </dd>
              </div>
            </dl>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.systems.map((s) => (
                <li key={s} className="border border-ink/15 px-3 py-1.5 text-xs font-semibold text-ink/75">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Timeline project={project} />

      {/* Filtros por etapa */}
      <LayoutGroup>
        <div className="-mx-4 mt-12 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setStage(t.id);
                  setExpanded(false);
                }}
                className={`relative flex items-center gap-2 whitespace-nowrap px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  stage === t.id ? "text-white" : "bg-white text-ink/70 hover:text-brand"
                }`}
              >
                {stage === t.id && (
                  <motion.span
                    layoutId="etapa-activa"
                    className="absolute inset-0 bg-brand"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="relative">{t.label}</span>
                <span className={`relative text-xs tabular-nums ${stage === t.id ? "text-white/70" : "text-ink/35"}`}>{t.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Galería */}
        <motion.div layout className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((item, i) => (
              <motion.button
                layout
                key={item.src}
                onClick={() => setOpen(filtered.indexOf(item))}
                initial={{ opacity: 0, y: 30, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.55, delay: Math.min(i, 12) * 0.04, ease }}
                className={`group relative overflow-hidden bg-ink text-left ${
                  item.kind === "video" ? "row-span-2" : ""
                }`}
                aria-label={item.caption}
              >
                <img
                  src={item.thumb}
                  alt={item.caption}
                  loading="lazy"
                  className={`w-full object-cover transition duration-700 ease-out group-hover:scale-110 ${
                    item.kind === "video" ? "h-full min-h-full" : "aspect-[4/3]"
                  }`}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {item.kind === "video" && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white shadow-xl transition group-hover:scale-110">
                      <span className="absolute inset-0 animate-ping rounded-full bg-brand/50" />
                      <PlayIcon className="relative h-7 w-7 translate-x-0.5" />
                    </span>
                  </span>
                )}
                <span className="absolute inset-x-0 bottom-0 translate-y-3 p-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="block text-[0.65rem] font-bold uppercase tracking-widest text-brand-light">
                    {stageLabel(item.stage)}
                    {item.date && ` · ${formatDate(item.date)}`}
                  </span>
                  <span className="mt-0.5 block text-sm font-semibold leading-snug text-white">{item.caption}</span>
                </span>
                {item.kind === "video" && (
                  <span className="absolute left-0 top-3 bg-brand px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white">
                    Video
                  </span>
                )}
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {stage === "todas" && filtered.length > INITIAL && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="group relative overflow-hidden border-2 border-ink px-7 py-3.5 font-bold uppercase tracking-wide text-ink transition-colors duration-300 hover:text-white"
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
            <span className="relative">
              {expanded ? "Ver menos" : `Ver las ${filtered.length} fotos y video`}
            </span>
          </button>
        </div>
      )}

      <AnimatePresence>
        {open !== null && open >= 0 && (
          <Lightbox
            items={filtered}
            index={open}
            stageLabel={stageLabel}
            onClose={() => setOpen(null)}
            onIndex={setOpen}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export function Projects() {
  return (
    <div className="space-y-24">
      {projects.map((p) => (
        <ProjectShowcase key={p.slug} project={p} />
      ))}
    </div>
  );
}
