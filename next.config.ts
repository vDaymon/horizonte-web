import type { NextConfig } from "next";

// STATIC_EXPORT=1 genera un sitio estático en /out (para hosting sin servidor).
// NEXT_PUBLIC_BASE_PATH=/horizonte-web lo prepara para servirse en una subcarpeta (GitHub Pages).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = process.env.STATIC_EXPORT
  ? { output: "export", basePath, trailingSlash: true, images: { unoptimized: true } }
  : {};

export default nextConfig;
