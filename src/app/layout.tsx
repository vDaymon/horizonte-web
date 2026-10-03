import type { Metadata } from "next";
import { Michroma, Montserrat } from "next/font/google";
import { MotionProvider, ScrollProgress } from "@/components/motion";
import { asset } from "@/lib/asset";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const michroma = Michroma({ subsets: ["latin"], weight: "400", variable: "--font-michroma" });

export const metadata: Metadata = {
  title: "Horizonte Constructora SAS | Construcción, Diseño y Mantenimiento",
  description:
    "Construcción, arquitectura y diseño, remodelación, interventoría, gerencia de proyectos y mantenimiento locativo y residencial en Cali. Construimos hoy, transformamos mañana.",
  icons: { icon: asset("/brand/icon-full.svg") },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${michroma.variable}`}>
      <body className="font-sans antialiased">
        <MotionProvider>
          <ScrollProgress />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
