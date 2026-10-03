"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { asset } from "@/lib/asset";
import { whatsappLink } from "@/data/site";
import { Counter, ease } from "./motion";
import { WhatsAppIcon } from "./WhatsAppIcon";

// Silueta de ciudad en línea de plano que se "dibuja" al cargar.
// [x, ancho, alto, ¿rojo?]
const buildings: [number, number, number, boolean?][] = [
  [20, 70, 120],
  [100, 50, 190],
  [160, 90, 140],
  [262, 46, 250, true],
  [318, 80, 170],
  [520, 60, 110],
  [590, 40, 160],
  [880, 70, 150],
  [960, 44, 230],
  [1014, 90, 120],
  [1150, 52, 280, true],
  [1212, 76, 180],
  [1300, 60, 130],
  [1370, 50, 200],
];

const BASE = 330;

function Skyline() {
  return (
    <svg
      viewBox="0 0 1440 360"
      preserveAspectRatio="xMidYMax slice"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] w-full"
      fill="none"
      aria-hidden="true"
    >
      {buildings.map(([x, w, h, red], i) => (
        <motion.path
          key={x}
          d={`M${x} ${BASE}V${BASE - h}H${x + w}V${BASE}`}
          stroke={red ? "var(--color-brand)" : "var(--color-ink)"}
          strokeOpacity={red ? 0.35 : 0.12}
          strokeWidth={1.5}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, delay: 0.3 + i * 0.08, ease }}
        />
      ))}
      {/* Pisos de las dos torres rojas */}
      {[262, 1150].map((x, t) =>
        Array.from({ length: 8 }, (_, i) => (
          <motion.path
            key={`${x}-${i}`}
            d={`M${x + 8} ${BASE - 26 - i * 28}H${x + (t ? 44 : 38)}`}
            stroke="var(--color-brand)"
            strokeOpacity={0.25}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1.4 + i * 0.07, ease }}
          />
        )),
      )}
      {/* Línea de horizonte */}
      <motion.path
        d={`M0 ${BASE + 14}Q720 ${BASE - 18} 1440 ${BASE + 14}`}
        stroke="var(--color-ink)"
        strokeOpacity={0.3}
        strokeWidth={2}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.1, ease }}
      />
      {/* Cota de dimensión sobre la torre más alta */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        stroke="var(--color-brand)"
        strokeOpacity={0.5}
      >
        <path
          d={`M1140 ${BASE - 280}V${BASE}M1135 ${BASE - 280}h10M1135 ${BASE}h10`}
        />
        <text
          x={1128}
          y={BASE - 140}
          fill="var(--color-brand)"
          fillOpacity={0.6}
          stroke="none"
          fontSize={11}
          letterSpacing={2}
          textAnchor="middle"
          transform={`rotate(-90 1128 ${BASE - 140})`}
        >
          26 PISOS
        </text>
      </motion.g>
    </svg>
  );
}

const lines = ["Construcción,", "diseño y", "mantenimiento"];

export function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, 90]);
  const frameY = useTransform(scrollY, [0, 700], [0, 40]);
  const textY = useTransform(scrollY, [0, 700], [0, -40]);

  return (
    <section
      id="inicio"
      className="blueprint blueprint-drift relative overflow-hidden pt-20"
    >
      <div className="relative">
        <Skyline />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:py-24">
          <motion.div style={{ y: textY }} className="relative z-10">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="mb-3 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-brand"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease }}
                className="h-0.5 w-10 origin-left bg-current"
              />
              Construimos hoy, transformamos mañana
            </motion.p>

            <h1 className="text-4xl font-extrabold uppercase leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              {lines.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <motion.span
                    className={`block ${i === 2 ? "text-brand" : ""}`}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.25 + i * 0.12, ease }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease }}
              className="mt-6 max-w-xl text-lg text-ink/70"
            >
              Reunimos arquitectura, ingeniería, construcción y gerencia de
              proyectos bajo un mismo equipo. Te acompañamos desde la concepción
              de la idea hasta la entrega final.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href={whatsappLink(
                  "Hola Horizonte, quiero cotizar un proyecto.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine flex items-center gap-2 bg-brand px-7 py-4 font-bold uppercase tracking-wide text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/40"
              >
                <WhatsAppIcon /> Cotiza tu proyecto
              </a>
              <a
                href="#servicios"
                className="group relative overflow-hidden border-2 border-ink px-7 py-4 font-bold uppercase tracking-wide text-ink transition-colors duration-300 hover:text-white"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span className="relative">Ver servicios</span>
              </a>
            </motion.div>
          </motion.div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <motion.div
              style={{ y: frameY }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease }}
              className="clip-diagonal absolute -inset-2 origin-right translate-x-2 bg-brand sm:-inset-3 sm:translate-x-4"
            />
            <motion.div
              initial={{
                clipPath:
                  "polygon(100% 0, 100% 0, 100% 100%, 100% 100%, 100% 50%)",
              }}
              animate={{
                clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%, 8% 50%)",
              }}
              transition={{ duration: 1.3, delay: 0.5, ease }}
              className="relative overflow-hidden"
            >
              <motion.img
                style={{ y: imageY, scale: 1.12 }}
                initial={{ scale: 1.3 }}
                animate={{ scale: 1.12 }}
                transition={{ duration: 2, delay: 0.5, ease }}
                src={asset("/img/mantenimiento-hero.jpg")}
                alt="Técnico de Horizonte Constructora pintando un muro"
                className="aspect-[4/5] w-full object-cover object-top lg:aspect-[5/6]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Cifras */}
      <div className="relative bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/10 sm:grid-cols-3">
          {[
            {
              n: <Counter value={700000} prefix="+" suffix=" kg" />,
              t: "de acero instalados en pilotes y cimentación",
            },
            {
              n: <Counter value={26} suffix=" pisos" />,
              t: "por torre: cimentación de 3 torres ejecutada",
            },
            {
              n: <Counter value={360} suffix="°" />,
              t: "gestión integral: de la idea a la entrega",
            },
          ].map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease }}
              className="bg-ink px-6 py-7 sm:px-8"
            >
              <p className="text-3xl font-extrabold tabular-nums text-brand-light">
                {s.n}
              </p>
              <p className="mt-1 text-sm text-white/70">{s.t}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cinta de servicios en movimiento */}
      <div className="relative overflow-hidden bg-brand py-4 text-white">
        <div className="marquee flex w-max gap-10 whitespace-nowrap text-sm font-bold uppercase tracking-[0.3em]">
          {Array.from({ length: 2 }, (_, k) => (
            <div key={k} className="flex gap-10" aria-hidden={k === 1}>
              {[
                "Construcción",
                "Arquitectura y diseño",
                "Remodelación",
                "Interventoría",
                "Gerencia de proyectos",
                "Mantenimiento",
                "Pintura",
                "Plomería",
                "Eléctrico",
                "Acabados",
              ].map((t) => (
                <span key={t} className="flex items-center gap-10">
                  {t}
                  <span className="h-1.5 w-1.5 rotate-45 bg-white/60" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
