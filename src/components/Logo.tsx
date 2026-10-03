/* eslint-disable @next/next/no-img-element */
// El ícono viene del archivo vectorial de marca; el nombre se escribe como texto
// para que se vea nítido a cualquier tamaño.
export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <img
        src={light ? "/brand/icon-light.svg" : "/brand/icon-full.svg"}
        alt=""
        className="h-11 w-auto"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-brand text-[1.15rem] tracking-[0.28em] ${light ? "text-white" : "text-ink"}`}
        >
          HORIZONTE
        </span>
        <span className="mt-1 text-[0.58rem] font-semibold tracking-[0.42em] text-brand">
          CONSTRUCTORA SAS
        </span>
      </span>
    </span>
  );
}
