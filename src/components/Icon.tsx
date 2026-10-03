import type { IconName } from "@/data/site";

// Íconos de línea en el estilo de los flyers (trazo simple, esquinas rectas).
const paths: Record<IconName, React.ReactNode> = {
  crane: (
    <>
      <path d="M6 44V14M12 44V14M6 20h6M6 28h6M6 36h6" />
      <path d="M4 14h40M12 14 9 6h3l2 8M38 14v8" />
      <path d="M35 22h6v5h-6zM18 44V30h10v14M22 34h2M22 38h2M30 44V34h8v10M2 44h44" />
    </>
  ),
  blueprint: (
    <>
      <path d="M6 42V10l12-4v32L6 42ZM18 6l12 4v32l-12-4M30 10l12-4v32l-12 4" />
      <path d="M22 16h4M22 22h4M34 18h4v6h-4z" />
    </>
  ),
  hammer: (
    <>
      <path d="M20 8h14l6 6-4 4-4-4h-4v6L10 42l-4-4 18-18v-6h-4z" />
      <path d="M30 30l12 12M36 30l6 6" />
    </>
  ),
  clipboard: (
    <>
      <path d="M16 8h-6v36h28V8h-6M16 6h16v6H16z" />
      <path d="M16 22l4 4 8-8M16 34h16M16 39h10" />
    </>
  ),
  chart: (
    <>
      <path d="M6 42h36M10 42V30h6v12M21 42V22h6v20M32 42V12h6v30" />
      <path d="M8 24 18 14l8 6 14-14M34 6h6v6" />
    </>
  ),
  tools: (
    <>
      <path d="M30 6a8 8 0 0 0-7 11L7 33a4 4 0 0 0 6 6l16-16a8 8 0 0 0 11-7l-5 3-4-1-1-4 5-3Z" />
      <path d="M8 8l4-2 10 10-4 4L8 10zM28 30l10 10a3 3 0 0 1-4 4L24 34" />
    </>
  ),
  roller: (
    <>
      <path d="M8 6h28v10H8zM36 11h4v10H22v6" />
      <path d="M19 27h6v15h-6z" />
    </>
  ),
  pipe: (
    <>
      <path d="M8 8h18v8H16v6H8zM8 22h8M26 8v8" />
      <path d="M22 26h14v8h4v8H28v-8h-6zM12 30a6 6 0 0 0 6 6M14 42c-3 0-4-2-4-3s1-3 4-3h2" />
    </>
  ),
  bulb: (
    <>
      <path d="M24 10a11 11 0 0 0-6 20v6h12v-6a11 11 0 0 0-6-20ZM18 40h12M20 44h8" />
      <path d="M24 2v4M8 18H4M44 18h-4M11 7l3 3M37 7l-3 3M24 36v-8l-3-4M24 28l3-4" />
    </>
  ),
  bricks: (
    <>
      <path d="M4 10h40v28H4zM4 17h40M4 24h40M4 31h40" />
      <path d="M16 10v7M32 10v7M10 17v7M24 17v7M38 17v7M16 24v7M32 24v7M10 31v7M24 31v7M38 31v7" />
    </>
  ),
  wrench: (
    <>
      <path d="M32 4a9 9 0 0 0-8 12L6 34a4 4 0 1 0 6 6l18-18A9 9 0 0 0 42 12l-6 4-4-4 4-6" />
      <path d="M6 6l6-2 12 12-4 4L8 10zM26 30l10 10 4-4-10-10" />
    </>
  ),
  shield: (
    <>
      <path d="M24 4 8 10v12c0 10 7 18 16 22 9-4 16-12 16-22V10z" />
      <path d="m17 24 5 5 9-10" />
    </>
  ),
  badge: (
    <>
      <path d="M24 4l5 4 6-1 2 6 6 3-2 6 2 6-6 3-2 6-6-1-5 4-5-4-6 1-2-6-6-3 2-6-2-6 6-3 2-6 6 1z" />
      <path d="m17 24 5 5 9-10" />
    </>
  ),
  clock: (
    <>
      <circle cx="24" cy="24" r="18" />
      <path d="M24 12v12l8 6" />
    </>
  ),
  home: (
    <>
      <path d="M4 22 24 6l20 16M10 18v24h28V18" />
      <path d="M20 42V30h8v12" />
    </>
  ),
};

export function Icon({ name, className = "h-10 w-10" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
