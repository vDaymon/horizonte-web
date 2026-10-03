/* eslint-disable @next/next/no-img-element */
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { Methodology } from "@/components/Methodology";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Projects } from "@/components/Projects";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { contact, maintenance, services, values, whatsappLink } from "@/data/site";
import { asset } from "@/lib/asset";

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-3 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] ${light ? "text-brand-light" : "text-brand"}`}>
      <span className="h-0.5 w-10 bg-current" />
      {children}
    </p>
  );
}

function PhoneIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* NOSOTROS */}
        <section id="nosotros" className="overflow-hidden py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
            <Reveal x={-60} y={0}>
              <div className="group relative flex items-center justify-center border border-ink/10 bg-white p-10 shadow-sm sm:p-16">
                <div className="absolute inset-y-0 left-0 w-2 origin-top bg-brand transition-all duration-700 group-hover:w-3" />
                <div className="absolute -right-3 -top-3 h-16 w-16 border-r-4 border-t-4 border-brand transition-all duration-700 group-hover:-right-5 group-hover:-top-5" />
                <div className="absolute -bottom-3 -left-3 h-16 w-16 border-b-4 border-l-4 border-ink transition-all duration-700 group-hover:-bottom-5 group-hover:-left-5" />
                <img
                  src={asset("/brand/logo.svg")}
                  alt="Horizonte Constructora SAS"
                  className="float-slow w-full max-w-md"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <Eyebrow>Nuestra empresa</Eyebrow>
                <h2 className="text-3xl font-extrabold uppercase text-ink sm:text-4xl">
                  Un aliado estratégico <span className="text-brand">para tu proyecto</span>
                </h2>
                <p className="mt-6 text-lg text-ink/70">
                  Somos una empresa joven, dinámica y creativa que cuenta con profesionales con amplio conocimiento y
                  experiencia, brindando alternativas que permitan prestar un excelente servicio, contribuyendo de esta
                  manera al adecuado manejo de los recursos económicos.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 border-l-4 border-brand bg-mist p-6">
                  <h3 className="font-bold uppercase tracking-wide text-ink">Nuestro objetivo</h3>
                  <p className="mt-2 text-ink/70">
                    Ser el aliado estratégico que ejecuta estructuras de concreto con calidad y cumplimiento.
                  </p>
                </div>
              </Reveal>
              <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
                {values.map((v) => (
                  <StaggerItem key={v.title} className="group flex items-center gap-3 font-semibold text-ink">
                    <Icon
                      name={v.icon}
                      className="h-9 w-9 shrink-0 text-brand transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110"
                    />
                    {v.title}
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="blueprint py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal className="max-w-2xl">
              <Eyebrow>Servicios</Eyebrow>
              <h2 className="text-3xl font-extrabold uppercase text-ink sm:text-4xl">
                Construcción, diseño, remodelación <span className="text-brand">e interventoría</span>
              </h2>
              <p className="mt-4 text-lg text-ink/70">
                Un modelo de gestión integral para hogares, empresas y proyectos de gran escala.
              </p>
            </Reveal>

            <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <StaggerItem key={s.title} className="h-full">
                  <article className="group relative flex h-full flex-col overflow-hidden bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <span className="absolute -right-24 -top-24 h-48 w-48 rotate-45 bg-brand/0 transition-colors duration-700 group-hover:bg-brand/5" />
                    <span className="absolute right-6 top-6 font-brand text-3xl text-ink/5 transition-colors duration-500 group-hover:text-brand/15">
                      0{i + 1}
                    </span>
                    <div className="relative flex h-16 w-16 items-center justify-center bg-ink text-white transition-all duration-500 group-hover:rotate-[-6deg] group-hover:bg-brand">
                      <Icon name={s.icon} className="h-10 w-10 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <h3 className="relative mt-6 text-xl font-bold uppercase text-ink">{s.title}</h3>
                    <p className="relative mt-3 text-ink/70">{s.text}</p>
                    <ul className="relative mt-5 space-y-2 border-t border-ink/10 pt-5 text-sm font-medium text-ink/80">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                          <span className="h-1.5 w-1.5 bg-brand" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* MANTENIMIENTO */}
        <section id="mantenimiento" className="relative overflow-hidden bg-ink text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
            <div>
              <Reveal>
                <Eyebrow light>Mantenimiento locativo y residencial</Eyebrow>
                <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">
                  Cuidamos, renovamos y mantenemos <span className="text-brand-light">tus espacios</span>
                </h2>
                <p className="mt-4 text-lg text-white/70">
                  Pintura interior y exterior, plomería, electricidad, reparaciones generales y acabados. Dale nueva vida
                  a tu hogar o negocio con acabados profesionales.
                </p>
              </Reveal>
              <Stagger className="mt-10 grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-5">
                {maintenance.map((m) => (
                  <StaggerItem key={m.title} className="h-full">
                    <div className="group flex h-full flex-col items-center gap-3 bg-ink px-2 py-6 text-center transition-colors duration-500 hover:bg-brand">
                      <Icon
                        name={m.icon}
                        className="h-11 w-11 text-white transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
                      />
                      <span className="text-xs font-bold uppercase tracking-wide">{m.title}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.2}>
                <a
                  href={whatsappLink("Hola Horizonte, necesito un servicio de mantenimiento.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine mt-10 inline-flex items-center gap-2 bg-brand px-7 py-4 font-bold uppercase tracking-wide transition hover:-translate-y-0.5 hover:bg-brand-light"
                >
                  <WhatsAppIcon /> Solicitar visita
                </a>
              </Reveal>
            </div>
            <Reveal x={60} y={0} delay={0.1}>
              <div className="group relative">
                <div className="absolute -left-4 -top-4 h-24 w-24 border-l-4 border-t-4 border-brand transition-all duration-700 group-hover:-left-6 group-hover:-top-6" />
                <div className="relative overflow-hidden">
                  <img
                    src={asset("/img/pintura.jpg")}
                    alt="Pintura interior realizada por Horizonte Constructora"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-6 right-6 bg-brand px-6 py-4 shadow-xl transition-transform duration-500 group-hover:-translate-y-2">
                  <p className="text-2xl font-extrabold uppercase">Pintura</p>
                  <p className="text-sm uppercase tracking-wider text-white/80">Interior y exterior</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* METODOLOGÍA */}
        <section id="metodologia" className="overflow-hidden py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <div className="relative mx-auto flex h-36 w-36 items-center justify-center">
                <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full" aria-hidden="true">
                  <circle cx="50" cy="50" r="46" fill="none" stroke="var(--color-brand)" strokeWidth="3" strokeDasharray="200 90" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="var(--color-ink)" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="60 40" />
                </svg>
                <p className="text-4xl font-extrabold text-brand">360°</p>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold uppercase text-ink sm:text-4xl">Metodología 360°</h2>
              <p className="mt-4 text-lg text-ink/70">
                Nos integramos desde la planeación, aportando experiencia técnica para optimizar cada etapa.
              </p>
            </Reveal>
            <Methodology />
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="blueprint py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal className="mb-10 max-w-2xl">
              <Eyebrow>Proyectos</Eyebrow>
              <h2 className="text-3xl font-extrabold uppercase text-ink sm:text-4xl">
                Obras que hablan <span className="text-brand">por nosotros</span>
              </h2>
              <p className="mt-4 text-lg text-ink/70">
                Desde cimentaciones para torres de gran altura hasta remodelaciones de vivienda y oficina.
              </p>
            </Reveal>
            <Projects />
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-brand text-white">
          <img
            src={asset("/brand/icon-light.svg")}
            alt=""
            className="float-slow pointer-events-none absolute -right-20 -top-10 h-[130%] opacity-10"
          />
          <Reveal className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">¿Tienes un proyecto en mente?</h2>
              <p className="mt-2 text-lg text-white/85">Calidad, compromiso y atención en cada detalle.</p>
            </div>
            <a
              href={contact.phoneHref}
              className="group flex items-center gap-3 bg-white px-7 py-4 text-xl font-extrabold text-brand shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <PhoneIcon className="h-6 w-6 group-hover:animate-[ring_0.6s_ease-in-out]" />
              {contact.phone}
            </a>
          </Reveal>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="overflow-hidden bg-ink-soft py-20 text-white lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <Reveal>
                <Eyebrow light>Contáctanos</Eyebrow>
                <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">Hablemos de tu proyecto</h2>
                <p className="mt-4 text-lg text-white/70">
                  Escríbenos y te respondemos lo antes posible con una propuesta a la medida.
                </p>
              </Reveal>
              <Stagger className="mt-10 space-y-6">
                <StaggerItem>
                  <a href={contact.phoneHref} className="group flex items-center gap-4 transition-colors hover:text-brand-light">
                    <span className="flex h-14 w-14 items-center justify-center bg-brand transition-transform duration-500 group-hover:rotate-[-8deg]">
                      <PhoneIcon />
                    </span>
                    <span>
                      <span className="block text-sm uppercase tracking-wider text-white/50">Llámanos</span>
                      <span className="text-2xl font-bold">{contact.phone}</span>
                    </span>
                  </a>
                </StaggerItem>
                <StaggerItem>
                  <a
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 transition-colors hover:text-brand-light"
                  >
                    <span className="flex h-14 w-14 items-center justify-center bg-[#25d366] transition-transform duration-500 group-hover:rotate-[-8deg]">
                      <WhatsAppIcon className="h-7 w-7" />
                    </span>
                    <span>
                      <span className="block text-sm uppercase tracking-wider text-white/50">WhatsApp</span>
                      <span className="text-2xl font-bold">{contact.whatsapp}</span>
                    </span>
                  </a>
                </StaggerItem>
                <StaggerItem className="flex items-center gap-4">
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
                </StaggerItem>
              </Stagger>
            </div>
            <Reveal x={60} y={0} delay={0.1}>
              <div className="bg-ink p-6 sm:p-10">
                <h3 className="mb-6 text-xl font-bold uppercase">Solicita tu cotización</h3>
                <ContactForm />
              </div>
            </Reveal>
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
        className="pop-in fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl transition hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-30 motion-reduce:hidden" />
        <WhatsAppIcon className="relative h-8 w-8" />
      </a>
    </>
  );
}
