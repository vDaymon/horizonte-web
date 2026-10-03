/* eslint-disable @next/next/no-img-element */
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { Projects } from "@/components/Projects";
import { contact, maintenance, methodology, services, values, whatsappLink } from "@/data/site";

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-3 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] ${light ? "text-brand-light" : "text-brand"}`}>
      <span className="h-0.5 w-10 bg-current" />
      {children}
    </p>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.4-.2Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section id="inicio" className="blueprint relative overflow-hidden pt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:py-24">
            <div className="relative z-10">
              <Eyebrow>Construimos hoy, transformamos mañana</Eyebrow>
              <h1 className="text-4xl font-extrabold uppercase leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
                Construcción,
                <br />
                diseño y <span className="text-brand">mantenimiento</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-ink/70">
                Reunimos arquitectura, ingeniería, construcción y gerencia de proyectos bajo un mismo equipo. Te
                acompañamos desde la concepción de la idea hasta la entrega final.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={whatsappLink("Hola Horizonte, quiero cotizar un proyecto.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-brand px-7 py-4 font-bold uppercase tracking-wide text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
                >
                  <WhatsAppIcon /> Cotiza tu proyecto
                </a>
                <a
                  href="#servicios"
                  className="border-2 border-ink px-7 py-4 font-bold uppercase tracking-wide text-ink transition hover:bg-ink hover:text-white"
                >
                  Ver servicios
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-2 translate-x-2 bg-brand sm:-inset-3 sm:translate-x-4 clip-diagonal" />
              <img
                src="/img/mantenimiento-hero.jpg"
                alt="Técnico de Horizonte Constructora pintando un muro"
                className="clip-diagonal relative aspect-[4/5] w-full object-cover object-top lg:aspect-[5/6]"
              />
            </div>
          </div>

          {/* Cifras */}
          <div className="relative bg-ink text-white">
            <div className="mx-auto grid max-w-7xl gap-px bg-white/10 sm:grid-cols-3">
              {[
                { n: "+700.000 kg", t: "de acero instalados en pilotes y cimentación" },
                { n: "3 torres", t: "de 26 pisos: cimentación ejecutada" },
                { n: "360°", t: "gestión integral: de la idea a la entrega" },
              ].map((s) => (
                <div key={s.n} className="bg-ink px-6 py-7 sm:px-8">
                  <p className="text-3xl font-extrabold text-brand-light">{s.n}</p>
                  <p className="mt-1 text-sm text-white/70">{s.t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
            <div className="relative flex items-center justify-center border border-ink/10 bg-white p-10 shadow-sm sm:p-16">
              <div className="absolute inset-y-0 left-0 w-2 bg-brand" />
              <img src="/brand/logo.svg" alt="Horizonte Constructora SAS" className="w-full max-w-md" />
            </div>
            <div>
              <Eyebrow>Nuestra empresa</Eyebrow>
              <h2 className="text-3xl font-extrabold uppercase text-ink sm:text-4xl">
                Un aliado estratégico <span className="text-brand">para tu proyecto</span>
              </h2>
              <p className="mt-6 text-lg text-ink/70">
                Somos una empresa joven, dinámica y creativa que cuenta con profesionales con amplio conocimiento y
                experiencia, brindando alternativas que permitan prestar un excelente servicio, contribuyendo de esta
                manera al adecuado manejo de los recursos económicos.
              </p>
              <div className="mt-8 border-l-4 border-brand bg-mist p-6">
                <h3 className="font-bold uppercase tracking-wide text-ink">Nuestro objetivo</h3>
                <p className="mt-2 text-ink/70">
                  Ser el aliado estratégico que ejecuta estructuras de concreto con calidad y cumplimiento.
                </p>
              </div>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {values.map((v) => (
                  <li key={v.title} className="flex items-center gap-3 font-semibold text-ink">
                    <Icon name={v.icon} className="h-9 w-9 shrink-0 text-brand" />
                    {v.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="blueprint py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <Eyebrow>Servicios</Eyebrow>
              <h2 className="text-3xl font-extrabold uppercase text-ink sm:text-4xl">
                Construcción, diseño, remodelación <span className="text-brand">e interventoría</span>
              </h2>
              <p className="mt-4 text-lg text-ink/70">
                Un modelo de gestión integral para hogares, empresas y proyectos de gran escala.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <article
                  key={s.title}
                  className="group relative flex flex-col bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="absolute right-6 top-6 font-brand text-3xl text-ink/5">0{i + 1}</span>
                  <div className="flex h-16 w-16 items-center justify-center bg-ink text-white transition group-hover:bg-brand">
                    <Icon name={s.icon} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold uppercase text-ink">{s.title}</h3>
                  <p className="mt-3 text-ink/70">{s.text}</p>
                  <ul className="mt-5 space-y-2 border-t border-ink/10 pt-5 text-sm font-medium text-ink/80">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-brand" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand transition group-hover:scale-x-100" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MANTENIMIENTO */}
        <section id="mantenimiento" className="relative overflow-hidden bg-ink text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
            <div>
              <Eyebrow light>Mantenimiento locativo y residencial</Eyebrow>
              <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">
                Cuidamos, renovamos y mantenemos <span className="text-brand-light">tus espacios</span>
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Pintura interior y exterior, plomería, electricidad, reparaciones generales y acabados. Dale nueva vida a
                tu hogar o negocio con acabados profesionales.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-5">
                {maintenance.map((m) => (
                  <div key={m.title} className="flex flex-col items-center gap-3 bg-ink px-2 py-6 text-center">
                    <Icon name={m.icon} className="h-11 w-11 text-white" />
                    <span className="text-xs font-bold uppercase tracking-wide">{m.title}</span>
                  </div>
                ))}
              </div>
              <a
                href={whatsappLink("Hola Horizonte, necesito un servicio de mantenimiento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 bg-brand px-7 py-4 font-bold uppercase tracking-wide transition hover:bg-brand-light"
              >
                <WhatsAppIcon /> Solicitar visita
              </a>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 border-l-4 border-t-4 border-brand" />
              <img
                src="/img/pintura.jpg"
                alt="Pintura interior realizada por Horizonte Constructora"
                className="relative aspect-[16/10] w-full object-cover"
              />
              <div className="absolute -bottom-6 right-6 bg-brand px-6 py-4 shadow-xl">
                <p className="text-2xl font-extrabold uppercase">Pintura</p>
                <p className="text-sm uppercase tracking-wider text-white/80">Interior y exterior</p>
              </div>
            </div>
          </div>
        </section>

        {/* METODOLOGÍA */}
        <section id="metodologia" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-6xl font-extrabold text-brand sm:text-7xl">360°</p>
              <h2 className="mt-2 text-3xl font-extrabold uppercase text-ink sm:text-4xl">Metodología 360°</h2>
              <p className="mt-4 text-lg text-ink/70">
                Nos integramos desde la planeación, aportando experiencia técnica para optimizar cada etapa.
              </p>
            </div>
            <ol className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
              <span className="absolute left-0 right-0 top-8 hidden h-0.5 bg-ink/10 md:block" />
              {methodology.map((m, i) => (
                <li key={m.title} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
                  <span
                    className={`relative z-10 flex h-16 w-16 shrink-0 items-center justify-center font-brand text-lg text-white ${
                      i % 2 ? "bg-ink" : "bg-brand"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold uppercase text-ink md:mt-5">{m.title}</h3>
                    <p className="mt-2 text-sm text-ink/65">{m.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="blueprint py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-10 max-w-2xl">
              <Eyebrow>Proyectos</Eyebrow>
              <h2 className="text-3xl font-extrabold uppercase text-ink sm:text-4xl">
                Obras que hablan <span className="text-brand">por nosotros</span>
              </h2>
              <p className="mt-4 text-lg text-ink/70">
                Desde cimentaciones para torres de gran altura hasta remodelaciones de vivienda y oficina.
              </p>
            </div>
            <Projects />
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-brand text-white">
          <img
            src="/brand/icon-light.svg"
            alt=""
            className="pointer-events-none absolute -right-20 -top-10 h-[130%] opacity-10"
          />
          <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">¿Tienes un proyecto en mente?</h2>
              <p className="mt-2 text-lg text-white/85">Calidad, compromiso y atención en cada detalle.</p>
            </div>
            <a
              href={contact.phoneHref}
              className="flex items-center gap-3 bg-white px-7 py-4 text-xl font-extrabold text-brand shadow-lg transition hover:bg-mist"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" />
              </svg>
              {contact.phone}
            </a>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="bg-ink-soft py-20 text-white lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <Eyebrow light>Contáctanos</Eyebrow>
              <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">Hablemos de tu proyecto</h2>
              <p className="mt-4 text-lg text-white/70">
                Escríbenos y te respondemos lo antes posible con una propuesta a la medida.
              </p>
              <ul className="mt-10 space-y-6">
                <li>
                  <a href={contact.phoneHref} className="flex items-center gap-4 transition hover:text-brand-light">
                    <span className="flex h-14 w-14 items-center justify-center bg-brand">
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                        <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" />
                      </svg>
                    </span>
                    <span>
                      <span className="block text-sm uppercase tracking-wider text-white/50">Llámanos</span>
                      <span className="text-2xl font-bold">{contact.phone}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 transition hover:text-brand-light"
                  >
                    <span className="flex h-14 w-14 items-center justify-center bg-[#25d366]">
                      <WhatsAppIcon className="h-7 w-7" />
                    </span>
                    <span>
                      <span className="block text-sm uppercase tracking-wider text-white/50">WhatsApp</span>
                      <span className="text-2xl font-bold">{contact.whatsapp}</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center bg-white/10">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-sm uppercase tracking-wider text-white/50">Dirección</span>
                    <span className="text-lg font-semibold">
                      {contact.address} · {contact.city}
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-ink p-6 sm:p-10">
              <h3 className="mb-6 text-xl font-bold uppercase">Solicita tu cotización</h3>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-white/10 px-4 py-10 sm:px-6 md:flex-row">
          <Logo light />
          <p className="text-center text-sm uppercase tracking-[0.2em] text-white/60">
            Construimos hoy, transformamos <span className="text-brand-light">mañana</span>.
          </p>
          <p className="text-sm text-white/40">© {new Date().getFullYear()} Horizonte Constructora SAS</p>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a
        href={whatsappLink("Hola Horizonte, quiero más información.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl transition hover:scale-110"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
    </>
  );
}
