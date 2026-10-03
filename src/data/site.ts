// Datos centrales del sitio: edita aquí teléfonos, servicios y proyectos.

export const contact = {
  phone: "317 853 8039",
  phoneHref: "tel:+573178538039",
  whatsapp: "310 489 0618",
  whatsappHref: "https://wa.me/573104890618",
  address: "Calle 51 # 47F-27",
  city: "Cali, Valle del Cauca",
};

export const whatsappLink = (text: string) =>
  `${contact.whatsappHref}?text=${encodeURIComponent(text)}`;

export type IconName =
  | "crane"
  | "blueprint"
  | "hammer"
  | "clipboard"
  | "chart"
  | "tools"
  | "roller"
  | "pipe"
  | "bulb"
  | "bricks"
  | "wrench"
  | "shield"
  | "badge"
  | "clock"
  | "home";

export const services: {
  icon: IconName;
  title: string;
  text: string;
  points: string[];
}[] = [
  {
    icon: "crane",
    title: "Construcción",
    text: "Ejecutamos estructuras de concreto con calidad y cumplimiento, desde la cimentación hasta la obra terminada.",
    points: ["Pilotes y cimentaciones", "Estructuras en concreto", "Sistema semi industrializado"],
  },
  {
    icon: "blueprint",
    title: "Arquitectura y Diseño",
    text: "Transformamos ideas en proyectos funcionales, estéticos y técnicamente viables, optimizando cada espacio para generar valor y bienestar.",
    points: ["Diseño arquitectónico", "Diseño de interiores", "Modelado BIM y renders"],
  },
  {
    icon: "hammer",
    title: "Remodelación",
    text: "Renovamos viviendas, oficinas y locales comerciales con acabados de calidad y tiempos de entrega claros.",
    points: ["Viviendas y apartamentos", "Oficinas y locales", "Cocinas, baños y cielos"],
  },
  {
    icon: "clipboard",
    title: "Interventoría",
    text: "Supervisamos técnica, administrativa y financieramente su obra para que se ejecute según lo planeado.",
    points: ["Control de calidad", "Seguimiento de presupuesto", "Control de cronograma"],
  },
  {
    icon: "chart",
    title: "Gerencia y Dirección de Proyectos",
    text: "Administramos integralmente el desarrollo de proyectos para asegurar el cumplimiento de los objetivos técnicos, financieros y comerciales.",
    points: ["Planeación y programación", "Dirección de obra", "Gestión de contratistas"],
  },
  {
    icon: "tools",
    title: "Mantenimiento Locativo y Residencial",
    text: "Soluciones integrales para cuidar, renovar y mantener tus espacios en perfecto estado.",
    points: ["Hogares y conjuntos", "Oficinas y negocios", "Atención oportuna"],
  },
];

export const maintenance: { icon: IconName; title: string }[] = [
  { icon: "roller", title: "Pintura" },
  { icon: "pipe", title: "Plomería" },
  { icon: "bulb", title: "Eléctrico" },
  { icon: "bricks", title: "Reparaciones generales" },
  { icon: "wrench", title: "Acabados" },
];

export const methodology = [
  { title: "Planeación", text: "Entendemos tu necesidad, definimos alcance, presupuesto y cronograma." },
  { title: "Diseño", text: "Desarrollamos el proyecto arquitectónico y técnico a la medida." },
  { title: "BIM", text: "Modelamos y coordinamos cada especialidad antes de construir." },
  { title: "Construcción", text: "Ejecutamos con personal calificado y control de calidad permanente." },
  { title: "Entrega", text: "Entregamos a tiempo y te acompañamos después de la entrega." },
];

export const values: { icon: IconName; title: string }[] = [
  { icon: "shield", title: "Personal calificado" },
  { icon: "badge", title: "Materiales de calidad" },
  { icon: "clock", title: "Cumplimiento y puntualidad" },
  { icon: "home", title: "Soluciones a la medida de tu hogar o negocio" },
];

/**
 * Proyectos. Cada proyecto agrupa sus fotos por etapa de obra.
 * Para agregar uno nuevo: copia las fotos en /public/proyectos/<carpeta>/full (grandes)
 * y /public/proyectos/<carpeta>/thumb (miniaturas), y agrega un objeto a `projects`.
 */
export type Stage = { id: string; label: string };

export type Media = {
  file: string;
  stage: string;
  date: string; // AAAA-MM-DD, vacío si la foto no tiene fecha
  caption: string;
  portrait?: boolean;
};

export type Project = {
  slug: string;
  name: string;
  type: string;
  location: string;
  architect: string;
  status: string;
  coordinates: { lat: number; lng: number };
  cover: string;
  summary: string;
  systems: string[];
  stages: Stage[];
  timeline: { date: string; label: string }[];
  video?: { file: string; poster: string; date: string; caption: string };
  media: Media[];
};

export const projects: Project[] = [
  {
    slug: "palmaseca",
    name: "Bodega industrial y oficinas Vía Palmaseca",
    type: "Bodega industrial con bloque de oficinas de dos pisos",
    location: "Vía Palmaseca – Rozo, Palmira, Valle del Cauca",
    architect: "Arq. James Sinisterra A.",
    status: "En ejecución",
    coordinates: { lat: 3.561919, lng: -76.414181 },
    cover: "38-avance.jpg",
    summary:
      "Construcción de una nave industrial en estructura metálica con un bloque de oficinas de dos pisos. Ejecutamos cimentación, estructura, cubierta, mampostería y fachadas, con registro fotográfico verificado de cada avance.",
    systems: [
      "Estructura metálica en pórticos y cerchas",
      "Cubierta en lámina metálica con tejas traslúcidas",
      "Piso industrial en concreto",
      "Mampostería en bloque de concreto",
      "Fachadas en sistema liviano y lámina metálica",
    ],
    stages: [
      { id: "estructura", label: "Estructura metálica" },
      { id: "nave", label: "Nave industrial" },
      { id: "cubierta", label: "Cubierta" },
      { id: "fachadas", label: "Oficinas y fachadas" },
      { id: "exteriores", label: "Exteriores" },
      { id: "avance", label: "Avance actual" },
    ],
    timeline: [
      { date: "2026-09-02", label: "Vaciado del piso de la nave" },
      { date: "2026-09-11", label: "Estructura metálica de oficinas" },
      { date: "2026-09-21", label: "Fachadas en sistema liviano" },
      { date: "2026-09-23", label: "Cubierta y cerramientos" },
      { date: "2026-09-29", label: "Vía de acceso y avance general" },
    ],
    video: {
      file: "vaciado-piso.mp4",
      poster: "vaciado-piso.jpg",
      date: "2026-09-02",
      caption: "Vaciado del piso en concreto dentro de la nave industrial",
    },
    media: [
      { file: "01-estructura.jpg", stage: "estructura", date: "2026-09-11", caption: "Estructura metálica de cubierta y muros en bloque del bloque de oficinas" },
      { file: "02-estructura.jpg", stage: "estructura", date: "", caption: "Montaje de pórticos metálicos sobre pedestales de concreto" },
      { file: "03-estructura.jpg", stage: "estructura", date: "2026-09-23", caption: "Estructura metálica del entrepiso de oficinas" },
      { file: "04-estructura.jpg", stage: "estructura", date: "2026-09-23", caption: "Entrepiso metálico visto desde la nave" },
      { file: "05-estructura.jpg", stage: "estructura", date: "2026-09-23", caption: "Placa sobre lámina colaborante y redes en el primer piso" },
      { file: "06-nave.jpg", stage: "nave", date: "2026-09-23", caption: "Nave industrial: cerchas metálicas y cubierta con tejas traslúcidas" },
      { file: "07-nave.jpg", stage: "nave", date: "2026-09-23", caption: "Interior de la nave con piso en concreto terminado" },
      { file: "08-nave.jpg", stage: "nave", date: "2026-09-23", caption: "Muros de cerramiento en bloque y estructura arriostrada" },
      { file: "09-nave.jpg", stage: "nave", date: "2026-09-23", caption: "Vista general del interior de la bodega" },
      { file: "10-nave.jpg", stage: "nave", date: "2026-09-23", caption: "Materiales y equipos en obra" },
      { file: "11-nave.jpg", stage: "nave", date: "2026-09-23", caption: "Tubería y acero de refuerzo en acopio" },
      { file: "12-nave.jpg", stage: "nave", date: "2026-09-23", caption: "Muro divisorio en bloque dentro de la nave" },
      { file: "13-nave.jpg", stage: "nave", date: "2026-09-23", caption: "Muros en bloque de concreto en ejecución" },
      { file: "14-cubierta.jpg", stage: "cubierta", date: "2026-09-23", caption: "Instalación de cubierta metálica" },
      { file: "15-cubierta.jpg", stage: "cubierta", date: "2026-09-23", caption: "Cubierta en lámina metálica con canal perimetral" },
      { file: "16-cubierta.jpg", stage: "cubierta", date: "2026-09-23", caption: "Cuadrilla trabajando en la cubierta" },
      { file: "17-cubierta.jpg", stage: "cubierta", date: "2026-09-23", caption: "Remates de cubierta y muro de cierre" },
      { file: "18-fachadas.jpg", stage: "fachadas", date: "2026-09-21", caption: "Bloque de oficinas de dos pisos con fachada en sistema liviano" },
      { file: "19-fachadas.jpg", stage: "fachadas", date: "2026-09-21", caption: "Fachada lateral del bloque de oficinas" },
      { file: "20-fachadas.jpg", stage: "fachadas", date: "2026-09-21", caption: "Avance de fachadas con andamios" },
      { file: "21-fachadas.jpg", stage: "fachadas", date: "2026-09-21", caption: "Instalación de placas de fachada en altura", portrait: true },
      { file: "22-fachadas.jpg", stage: "fachadas", date: "2026-09-21", caption: "Fachada principal y mampostería en bloque" },
      { file: "23-fachadas.jpg", stage: "fachadas", date: "2026-09-23", caption: "Volumen de oficinas con estructura metálica a la vista" },
      { file: "24-fachadas.jpg", stage: "fachadas", date: "2026-09-23", caption: "Esquina del bloque de oficinas" },
      { file: "25-fachadas.jpg", stage: "fachadas", date: "2026-09-23", caption: "Fachada de oficinas con vanos para ventanería" },
      { file: "26-fachadas.jpg", stage: "fachadas", date: "2026-09-26", caption: "Encuentro entre oficinas y nave industrial" },
      { file: "27-fachadas.jpg", stage: "fachadas", date: "2026-09-26", caption: "Fachadas en placa y bloque en ejecución" },
      { file: "28-fachadas.jpg", stage: "fachadas", date: "2026-09-26", caption: "Vista del conjunto de oficinas" },
      { file: "29-exteriores.jpg", stage: "exteriores", date: "2026-09-23", caption: "Conjunto: oficinas y nave con fachada en lámina negra" },
      { file: "30-exteriores.jpg", stage: "exteriores", date: "2026-09-21", caption: "Vista general del proyecto" },
      { file: "31-exteriores.jpg", stage: "exteriores", date: "2026-09-23", caption: "Fachada de la nave con cortinas metálicas" },
      { file: "32-exteriores.jpg", stage: "exteriores", date: "2026-09-23", caption: "Costado de la bodega y cerramiento del lote" },
      { file: "33-exteriores.jpg", stage: "exteriores", date: "2026-09-23", caption: "Patio de maniobras en adecuación" },
      { file: "34-exteriores.jpg", stage: "exteriores", date: "2026-09-23", caption: "Volúmenes de oficinas y nave", portrait: true },
      { file: "35-exteriores.jpg", stage: "exteriores", date: "2026-09-23", caption: "Acceso de servicio de la bodega" },
      { file: "36-exteriores.jpg", stage: "exteriores", date: "2026-09-23", caption: "Fachada posterior en lámina metálica negra" },
      { file: "37-exteriores.jpg", stage: "exteriores", date: "2026-09-23", caption: "Zona de servicios y contenedor de obra" },
      { file: "38-avance.jpg", stage: "avance", date: "2026-09-29", caption: "Estado de la obra con vía de acceso pavimentada" },
      { file: "39-avance.jpg", stage: "avance", date: "2026-09-29", caption: "Fachada principal desde la vía" },
      { file: "40-avance.jpg", stage: "avance", date: "2026-09-29", caption: "Vista desde el acceso al lote" }
    ],
  },
];

const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

/** "2026-09-23" → "23 sep 2026" */
export const formatDate = (iso: string) => {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${months[m - 1]} ${y}`;
};
