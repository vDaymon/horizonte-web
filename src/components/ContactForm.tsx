"use client";

import { useState } from "react";
import { whatsappLink } from "@/data/site";

const serviceOptions = [
  "Construcción",
  "Arquitectura y Diseño",
  "Remodelación",
  "Interventoría",
  "Gerencia de Proyectos",
  "Mantenimiento",
];

// Sin servidor: el formulario arma el mensaje y lo abre en WhatsApp.
export function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: serviceOptions[0], message: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "Hola Horizonte, quiero solicitar una cotización.",
      `Nombre: ${form.name}`,
      `Teléfono: ${form.phone}`,
      `Servicio: ${form.service}`,
      form.message && `Mensaje: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-brand-light";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input required placeholder="Nombre" value={form.name} onChange={set("name")} className={field} />
        <input required type="tel" placeholder="Teléfono" value={form.phone} onChange={set("phone")} className={field} />
      </div>
      <select value={form.service} onChange={set("service")} className={`${field} [&>option]:text-ink`}>
        {serviceOptions.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>
      <textarea
        rows={4}
        placeholder="Cuéntanos sobre tu proyecto"
        value={form.message}
        onChange={set("message")}
        className={field}
      />
      <button
        type="submit"
        className="bg-brand px-6 py-4 font-bold uppercase tracking-wide text-white transition hover:bg-brand-light"
      >
        Enviar por WhatsApp
      </button>
    </form>
  );
}
