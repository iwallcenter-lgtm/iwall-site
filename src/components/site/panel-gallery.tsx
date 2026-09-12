"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiArrowDown, FiArrowLeft, FiArrowRight, FiMaximize2, FiX } from "react-icons/fi";

import { lambiriCopy } from "@/lib/lambiri";
import type { Locale } from "@/lib/locales";
import { panelCatalogs, panelCopy, panelModels, type PanelSeries } from "@/lib/panels";
import { siteConfig } from "@/lib/site-config";
import { spaceCopy } from "@/lib/spaces";

export function PanelGallery({ locale, initialSeries = "all" }: { locale: Locale; initialSeries?: PanelSeries | "all" }) {
  const copy = lambiriCopy[locale];
  const [series, setSeries] = useState(initialSeries);
  const [selected, setSelected] = useState<string | null>(null);
  const [view, setView] = useState<"room" | "texture">("room");
  const dialog = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLButtonElement | null>(null);
  const visible = panelModels.filter(model => series === "all" || model.series === series);
  const active = panelModels.find(model => model.code === selected);
  const open = Boolean(active);

  useEffect(() => { setSeries(initialSeries); setSelected(null); }, [initialSeries]);
  useEffect(() => {
    if (!open) return;
    const panel = dialog.current;
    const previous = document.body.style.overflow;
    panel?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      panel?.close();
      document.body.style.overflow = previous;
      returnFocus.current?.focus({ preventScroll: true });
    };
  }, [open]);
  function changeModel(direction: number) {
    setSelected(current => {
      const index = visible.findIndex(model => model.code === current);
      return visible[(index + direction + visible.length) % visible.length].code;
    });
  }

  return (
    <>
      <div className="panel-downloads mb-8 flex flex-wrap gap-3">
        {(["DY", "S", "KL"] as const).map(key => <a key={key} href={panelCatalogs[key]} download className="inline-flex min-h-11 items-center gap-2 rounded-full border border-pine/20 bg-white px-4 py-2 text-sm font-semibold hover:bg-fog">{key} · {panelCopy.catalog[locale]}<FiArrowDown aria-hidden="true" /></a>)}
      </div>
      <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label={panelCopy.texture[locale]}>
        {(["all", "DY", "S", "KL"] as const).map(key => <button key={key} type="button" aria-pressed={series === key} data-series={key} onClick={() => setSeries(key)} className={`min-h-11 rounded-full border px-5 py-2 text-sm font-semibold transition ${series === key ? "border-pine bg-pine text-white" : "border-pine/20 bg-white hover:bg-fog"}`}>{key === "all" ? panelCopy.all[locale] : key}</button>)}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((model, index) => (
          <button key={model.code} type="button" className="panel-card group overflow-hidden rounded-xl border border-pine/15 bg-white text-start transition hover:border-pine/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine" data-code={model.code} aria-haspopup="dialog" aria-label={`${model.code} · ${model.name} · ${copy.view}`} onClick={event => { returnFocus.current = event.currentTarget; setView("room"); setSelected(model.code); }}>
            <div className="relative bg-[#f4f4ef]">
              <Image src={model.room} alt={`${model.code} · ${panelCopy.room[locale]}`} width={model.roomWidth} height={model.roomHeight} unoptimized loading={index < 3 ? "eager" : "lazy"} className="aspect-[4/3] h-auto w-full object-contain" />
              <span className="absolute end-3 top-3 rounded-full bg-white/95 p-2.5 text-pine shadow-sm"><FiMaximize2 aria-hidden="true" /></span>
            </div>
            <div className="flex items-center gap-5 p-5">
              <Image src={model.texture} alt={`${model.code} · ${panelCopy.texture[locale]}`} width={model.textureWidth} height={model.textureHeight} unoptimized className="h-24 w-12 shrink-0 object-contain" />
              <div>
                <h2 className="text-xl font-semibold" dir="ltr">{model.code}</h2>
                <p className="mt-1 text-sm text-neutral-600">{model.name}</p>
                <p className="mt-3 text-xs font-semibold text-neutral-700" dir="ltr">{model.widthMm} × {model.lengthMm} mm</p>
              </div>
            </div>
          </button>
        ))}
      </div>
      <dialog ref={dialog} aria-labelledby="panel-dialog-title" className="panel-dialog m-auto h-[94dvh] max-h-[1100px] w-[calc(100%-24px)] max-w-6xl overflow-hidden rounded-xl bg-white p-0 text-pine-deep backdrop:bg-[#031b14]/85 backdrop:backdrop-blur-sm" onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) setSelected(null); }} onKeyDown={event => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          changeModel((event.key === "ArrowRight" ? 1 : -1) * (locale === "ar" ? -1 : 1));
        }
      }}>
        {active && <div className="flex h-full flex-col">
          <div className="flex shrink-0 items-start justify-between gap-3 border-b border-pine/10 px-4 py-3 sm:px-6">
            <div>
              <h2 id="panel-dialog-title" className="text-lg font-semibold" dir="ltr">{active.code} · {active.name}</h2>
              <p className="mt-1 text-xs font-semibold text-neutral-600" dir="ltr">{active.widthMm} × {active.lengthMm} mm</p>
            </div>
            <button type="button" autoFocus className="gallery-control shrink-0" onClick={() => setSelected(null)} aria-label={copy.close}><FiX /></button>
          </div>
          <div className="flex shrink-0 justify-center gap-2 px-3 py-3">
            {(["room", "texture"] as const).map(key => <button type="button" key={key} aria-pressed={view === key} data-view={key} onClick={() => setView(key)} className={`min-h-10 rounded-full px-4 py-2 text-sm font-semibold ${view === key ? "bg-pine text-white" : "bg-fog text-pine"}`}>{panelCopy[key][locale]}</button>)}
          </div>
          <div className="relative min-h-0 flex-1 bg-[#fafaf8]">
            <Image key={`${active.code}-${view}`} src={active[view]} alt={`${active.code} · ${panelCopy[view][locale]}`} fill unoptimized className="object-contain p-2 sm:p-4" />
          </div>
          <div className="flex shrink-0 items-center justify-between gap-2 px-3 py-3 sm:px-6">
            <button type="button" className="gallery-control" onClick={() => changeModel(-1)} aria-label={copy.previous}><FiArrowLeft className="rtl:rotate-180" /></button>
            <div className="flex flex-wrap justify-center gap-2">
              <a href={active[view]} download className="rounded-full border border-pine/20 px-3 py-2 text-xs font-semibold sm:text-sm">{spaceCopy.downloadImage[locale]}</a>
              <a href={`${siteConfig.company.whatsappUrl}?text=${encodeURIComponent(`${panelCopy.inquiry[locale]} ${active.code} - ${active.name} (${active.widthMm} × ${active.lengthMm} mm).`)}`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-pine px-4 py-2 text-xs font-semibold text-white sm:text-sm">{copy.inquiry}</a>
            </div>
            <button type="button" className="gallery-control" onClick={() => changeModel(1)} aria-label={copy.next}><FiArrowRight className="rtl:rotate-180" /></button>
          </div>
        </div>}
      </dialog>
    </>
  );
}
