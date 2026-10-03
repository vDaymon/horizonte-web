import type { NextConfig } from "next";

// STATIC_EXPORT=1 genera un sitio estático en /out (para hosting sin servidor).
const nextConfig: NextConfig = process.env.STATIC_EXPORT ? { output: "export" } : {};

export default nextConfig;
