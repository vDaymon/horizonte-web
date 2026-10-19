import driveMedia from "./projects-drive.json";

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
    points: ["Residencial", "Institucional", "Comercial"],
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
  { icon: "clock", title: "Cumplimiento" },
];

/**
 * Proyectos. Cada proyecto agrupa sus fotos y videos por etapa de obra.
 * Archivos: /public/proyectos/<slug>/full (fotos grandes), /thumb (miniaturas y portadas de video)
 * y los videos .mp4 directamente en /public/proyectos/<slug>/.
 * Las fotos de los proyectos de Drive se listan en projects-drive.json.
 */
export type Stage = { id: string; label: string };

export type Media = {
  file: string;
  stage: string;
  caption: string;
  date?: string; // AAAA-MM-DD
  video?: boolean;
  poster?: string;
  portrait?: boolean;
};

export const projectCategories = ["Construcción", "Remodelación", "Arquitectura y Diseño", "Estructuras metálicas"] as const;

export type Project = {
  slug: string;
  name: string;
  category: (typeof projectCategories)[number];
  type: string;
  location?: string;
  architect?: string;
  status: string;
  coordinates?: { lat: number; lng: number };
  cover: string;
  summary: string;
  systems: string[];
  stages: Stage[];
  timeline?: { date: string; label: string }[];
  media: Media[];
};

const drive = driveMedia as Record<string, Media[]>;

export const projects: Project[] = [
  {
    slug: "palmaseca",
    name: "Bodega industrial y oficinas Vía Palmaseca",
    category: "Construcción",
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
    media: [
      { file: "vaciado-piso.mp4", poster: "vaciado-piso.jpg", video: true, stage: "nave", date: "2026-09-02", caption: "Vaciado del piso en concreto dentro de la nave industrial" },
      { file: "01-estructura.jpg", stage: "estructura", date: "2026-09-11", caption: "Estructura metálica de cubierta y muros en bloque del bloque de oficinas" },
      { file: "02-estructura.jpg", stage: "estructura", caption: "Montaje de pórticos metálicos sobre pedestales de concreto" },
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
  {
    slug: "studio-rozo",
    name: "Casa campestre y estudio de grabación Rozo",
    category: "Remodelación",
    type: "Remodelación, ampliación y estudio de grabación en vivienda campestre",
    location: "Rozo, Palmira, Valle del Cauca",
    status: "Entregado",
    cover: "21-fachadas.jpg",
    summary:
      "Intervención integral de una vivienda campestre: ampliación en estructura metálica, renovación de fachadas, interiores, baños y escaleras, y la construcción de una sala de grabación con tratamiento acústico.",
    systems: [
      "Ampliación en estructura metálica",
      "Muros y cielos en drywall",
      "Escaleras en concreto y metálicas",
      "Tratamiento acústico",
      "Iluminación LED arquitectónica",
    ],
    stages: [
      { id: "estructura", label: "Ampliación" },
      { id: "fachadas", label: "Fachadas" },
      { id: "interiores", label: "Interiores" },
      { id: "banos", label: "Baños" },
      { id: "escaleras", label: "Escaleras" },
      { id: "estudio", label: "Sala de grabación" },
    ],
    media: drive["studio-rozo"],
  },
  {
    slug: "oficinas-d1",
    name: "Oficinas D1",
    category: "Construcción",
    type: "Construcción y adecuación de oficinas corporativas",
    status: "Entregado",
    cover: "14-acabados.jpg",
    summary:
      "Construcción del edificio de oficinas desde la cimentación hasta los acabados: recepción, puestos de trabajo, salas de juntas, zonas colaborativas y comedor para empleados.",
    systems: ["Estructura en concreto", "Red contra incendio", "Cielos y divisiones en vidrio", "Mobiliario e iluminación"],
    stages: [
      { id: "obra", label: "Obra gris" },
      { id: "acabados", label: "Acabados" },
    ],
    media: drive["oficinas-d1"],
  },
  {
    slug: "reforzamiento",
    name: "Reforzamiento, ampliación y acabados de vivienda",
    category: "Remodelación",
    type: "Reforzamiento estructural y remodelación residencial",
    status: "Entregado",
    cover: "07-acabados.jpg",
    summary:
      "Reforzamiento estructural con perfiles metálicos, ampliación de espacios y remodelación completa de cocina, baños, sala y comedor.",
    systems: ["Reforzamiento con perfiles metálicos", "Cocina integral", "Baños con enchape y vidrio", "Cielos iluminados"],
    stages: [
      { id: "reforzamiento", label: "Reforzamiento" },
      { id: "acabados", label: "Acabados" },
    ],
    media: drive["reforzamiento"],
  },
  {
    slug: "estructuras-concreto",
    name: "Estructuras en concreto con armado de acero",
    category: "Construcción",
    type: "Pilotes y cimentación para edificio en altura",
    status: "Ejecutado",
    cover: "01-cimentacion.jpg",
    summary:
      "Excavación, armado e instalación de canastas de acero para pilotes y vigas de cimentación, junto a edificaciones existentes.",
    systems: ["Pilotes en concreto", "Canastas de acero de refuerzo", "Vigas de cimentación"],
    stages: [{ id: "cimentacion", label: "Cimentación" }],
    media: drive["estructuras-concreto"],
  },
  {
    slug: "pasamanos",
    name: "Pasamanos y barandas",
    category: "Estructuras metálicas",
    type: "Fabricación e instalación de pasamanos",
    status: "Ejecutado",
    cover: "01-vidrio.jpg",
    summary:
      "Pasamanos en acero inoxidable y vidrio para centros comerciales, y barandas metálicas fabricadas en taller e instaladas en obra.",
    systems: ["Acero inoxidable", "Vidrio templado", "Tubería metálica"],
    stages: [
      { id: "vidrio", label: "Acero y vidrio" },
      { id: "metalicas", label: "Barandas metálicas" },
    ],
    media: drive["pasamanos"],
  },
];

const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

/** "2026-09-23" → "23 sep 2026" */
export const formatDate = (iso?: string) => {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${months[m - 1]} ${y}`;
};
