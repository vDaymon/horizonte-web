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
 * Proyectos. Para mostrar una foto, copia la imagen en /public/proyectos/
 * y pon su ruta en `image` (por ejemplo "/proyectos/torres-cali.jpg").
 * Mientras `image` esté vacío se muestra un espacio reservado.
 */
export const projectCategories = [
  "Todos",
  "Construcción",
  "Arquitectura y Diseño",
  "Remodelación",
  "Mantenimiento",
] as const;

export type Project = {
  title: string;
  category: (typeof projectCategories)[number];
  description: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Cimentación para 3 torres de 26 pisos",
    category: "Construcción",
    description: "Cimentación de tanque y de tres torres residenciales.",
  },
  {
    title: "Urban Coliving Club — Chipichape",
    category: "Construcción",
    description: "Muros de contención y estructura en concreto. Cali, Valle del Cauca.",
  },
  {
    title: "Sistema semi industrializado",
    category: "Construcción",
    description: "Edificación en altura con sistema semi industrializado.",
  },
  {
    title: "Vivienda campestre con piscina",
    category: "Arquitectura y Diseño",
    description: "Diseño arquitectónico y construcción de vivienda unifamiliar.",
  },
  {
    title: "Diseño interior residencial",
    category: "Arquitectura y Diseño",
    description: "Cocina abierta, cielos con iluminación indirecta y mobiliario a medida.",
  },
  {
    title: "Remodelación de oficina",
    category: "Remodelación",
    description: "Divisiones en vidrio, pisos, iluminación y mobiliario.",
  },
  {
    title: "Pintura interior y exterior",
    category: "Mantenimiento",
    description: "Acabados profesionales para hogares y negocios.",
  },
  {
    title: "Mantenimiento locativo",
    category: "Mantenimiento",
    description: "Plomería, electricidad y reparaciones generales.",
  },
];
