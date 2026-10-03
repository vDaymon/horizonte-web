/* eslint-disable @next/next/no-img-element */
import { asset } from "@/lib/asset";
// Ícono y palabra HORIZONTE salen del archivo vectorial de marca (Horizonte.pdf).
// "CONSTRUCTORA SAS" va como texto porque en el archivo original dice "CONSTRCTORA".
export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <img src={asset(light ? "/brand/icon-light.svg" : "/brand/icon-full.svg")} alt="" className="h-11 w-auto" />
      <span className="flex flex-col">
        <img
          src={asset(light ? "/brand/wordmark-light.svg" : "/brand/wordmark.svg")}
          alt="Horizonte"
          className="h-[0.95rem] w-auto"
        />
        <span className="mt-1.5 text-[0.58rem] font-semibold tracking-[0.42em] text-brand">
          CONSTRUCTORA SAS
        </span>
      </span>
    </span>
  );
}
