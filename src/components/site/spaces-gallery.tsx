"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiArrowDown, FiArrowLeft, FiArrowRight, FiMaximize2, FiX } from "react-icons/fi";

import { Container } from "@/components/ui/container";
import { catalogLinks } from "@/lib/catalogs";
import { lambiriCopy } from "@/lib/lambiri";
import type { Locale } from "@/lib/locales";
import { spaceCategories, spaceCopy, spaceModels, type SpaceCategory } from "@/lib/spaces";

export function SpacesGallery({ locale }: { locale: Locale }) {
  const copy = lambiriCopy[locale];
  const [category, setCategory] = useState<SpaceCategory | "all">("all");
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLAnchorElement | null>(null);
  const visible = spaceModels.filter((model) => category === "all" || model.category === category);
  const active = selected === null ? null : spaceModels.find((model) => model.id === selected);
  const open = selected !== null;

  useEffect(() => {
    if (!open) return;
    const panel = dialog.current;
    const previousOverflow = document.body.style.overflow;
    panel?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      panel?.close();
      document.body.style.overflow = previousOverflow;
      returnFocus.current?.focus({ preventScroll: true });
    };
  }, [open]);

  const changeSpace = (direction: number) => {
    setSelected((current) => {
      if (current === null) return null;
      const index = visible.findIndex((model) => model.id === current);
      return visible[(index + direction + visible.length) % visible.length].id;
    });
  };

  return (
    <section className="bg-[#fafaf8] pb-14 pt-7 text-pine-deep sm:pb-20 sm:pt-10">
      <Container className="max-w-[1440px]">
        <div className="flex flex-wrap items-center justify-between gap-5 border-b border-pine/15 pb-6">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">{spaceCopy.title[locale]}</h1>
          <a href={catalogLinks.sectors} download className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline">
            {spaceCopy.catalog[locale]}<FiArrowDown aria-hidden="true" />
          </a>
        </div>
        <div className="my-6 flex flex-wrap items-center justify-between gap-4">
          <label className="flex flex-wrap items-center gap-3 text-sm font-medium">
            {spaceCopy.filter[locale]}
            <select value={category} onChange={(event) => setCategory(event.target.value as SpaceCategory | "all")} className="min-h-11 max-w-full rounded-full border border-pine/20 bg-white px-4 py-2 text-pine-deep">
              <option value="all">{spaceCopy.all[locale]}</option>
              {Object.entries(spaceCategories).map(([key, name]) => <option key={key} value={key}>{name[locale]}</option>)}
            </select>
          </label>
        </div>
        <div className="grid gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-9">
          {visible.map((model, index) => (
            <a
              key={model.id}
              href={model.image}
              className="space-card group block min-w-0"
              data-model={model.id}
              aria-label={`${model.sector[locale]} · ${copy.model} ${model.id} — ${copy.view}`}
              aria-haspopup="dialog"
              onClick={(event) => {
                if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                event.preventDefault();
                returnFocus.current = event.currentTarget;
                setSelected(model.id);
              }}
            >
              <div className="relative overflow-hidden rounded-lg bg-sand">
                <Image src={model.preview} alt={`${model.sector[locale]} · i-WALL ${copy.model} ${model.id}`} width={model.imageWidth} height={model.imageHeight} unoptimized loading={index < 3 ? "eager" : "lazy"} className="aspect-[3/4] h-auto w-full object-contain transition duration-300 group-hover:brightness-105" />
                <span className="absolute end-3 top-3 rounded-full bg-white/95 p-2.5 text-pine shadow-sm" aria-hidden="true"><FiMaximize2 className="h-4 w-4" /></span>
              </div>
              <div className="flex flex-wrap items-start justify-between gap-2 px-1 pt-3">
                <h2 className="text-lg font-semibold">{model.sector[locale]}</h2>
                <p className="text-end text-sm font-semibold leading-6 text-neutral-700">{copy.model} {String(model.id).padStart(2, "0")}<span className="block text-xs font-medium text-neutral-500" dir="ltr">{model.widthCm} × {model.lengthCm} cm</span></p>
              </div>
            </a>
          ))}
        </div>
      </Container>
      <dialog
        ref={dialog}
        className="space-dialog m-auto h-[94dvh] max-h-[1100px] w-[calc(100%-24px)] max-w-4xl overflow-hidden rounded-lg bg-[#fafaf8] p-0 text-pine-deep backdrop:bg-[#031b14]/85 backdrop:backdrop-blur-sm"
        aria-labelledby="space-dialog-title"
        onCancel={() => setSelected(null)}
        onClose={() => setSelected(null)}
        onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            const direction = event.key === "ArrowRight" ? 1 : -1;
            changeSpace(locale === "ar" ? -direction : direction);
          }
        }}
      >
        {active && (
          <div className="flex h-full flex-col">
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-black/5 px-4 py-2">
              <div aria-live="polite">
                <h2 id="space-dialog-title" className="font-semibold">{active.sector[locale]} · {copy.model} {String(active.id).padStart(2, "0")}</h2>
                <p className="text-xs text-neutral-600" dir="ltr">{active.widthCm} × {active.lengthCm} cm</p>
              </div>
              <button type="button" autoFocus className="gallery-control" onClick={() => setSelected(null)} aria-label={copy.close}><FiX /></button>
            </div>
            <div className="relative min-h-0 flex-1">
              <Image key={active.id} src={active.image} alt={`${active.sector[locale]} · ${copy.model} ${active.id}`} fill unoptimized className="object-contain" />
            </div>
            <div className="flex shrink-0 items-center justify-between gap-2 border-t border-black/5 px-2 py-2 sm:px-4">
              <button type="button" className="gallery-control" onClick={() => changeSpace(-1)} aria-label={copy.previous}><FiArrowLeft className="rtl:rotate-180" /></button>
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                <a href={active.image} download={`iwall-${active.id}.webp`} className="inline-flex min-h-11 items-center gap-2 text-xs font-medium sm:text-sm">{spaceCopy.downloadImage[locale]}<FiArrowDown aria-hidden="true" /></a>
                <a href={`https://wa.me/905052967473?text=${encodeURIComponent(`${copy.greeting} ${copy.model} ${active.id} (${active.widthCm} × ${active.lengthCm} cm), ${active.sector[locale]}.`)}`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-pine px-4 py-3 text-xs font-medium text-white hover:bg-pine-deep sm:text-sm">{copy.inquiry}</a>
              </div>
              <button type="button" className="gallery-control" onClick={() => changeSpace(1)} aria-label={copy.next}><FiArrowRight className="rtl:rotate-180" /></button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
