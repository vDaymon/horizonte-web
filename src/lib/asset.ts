// Prefijo para archivos de /public cuando el sitio vive en una subcarpeta
// (por ejemplo GitHub Pages: usuario.github.io/horizonte-web).
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${basePath}${path}`;
