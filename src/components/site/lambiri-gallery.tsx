"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiArrowDown, FiArrowLeft, FiArrowRight, FiMaximize2, FiX } from "react-icons/fi";

import { Container } from "@/components/ui/container";
import { lambiriCatalog, lambiriCopy, lambiriModels } from "@/lib/lambiri";
import type { Locale } from "@/lib/locales";
import { spaceCopy } from "@/lib/spaces";

export function LambiriGallery({ locale }: { locale: Locale }) {
  const copy = lambiriCopy[locale];
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLAnchorElement | null>(null);
  const active = selected === null ? null : lambiriModels[selected];
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

  const changeModel = (direction: number) => {
    setSelected((current) => current === null ? null : (current + direction + lambiriModels.length) % lambiriModels.length);
  };

  return (
    <section id="lambiriler" className="lambiri-collection scroll-mt-24 bg-[#fafaf8] pb-12 pt-7 sm:pb-20 sm:pt-10">
      <Container className="max-w-[1440px]">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-pine/15 pb-5 sm:mb-9 sm:pb-6">
          <div className="flex items-baseline gap-3 sm:gap-5">
            <h1 className="text-3xl font-medium tracking-tight text-pine-deep sm:text-4xl">{copy.title}</h1>
            <span className="text-xs text-neutral-500 sm:text-sm">{copy.collection}</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href={`/${locale}/mekanlar`} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-pine underline-offset-4 hover:underline">{spaceCopy.explore[locale]}<FiArrowRight className="rtl:rotate-180" aria-hidden="true" /></Link>
            <a href={lambiriCatalog} download className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-pine underline-offset-4 hover:underline">
              {copy.catalog}<FiArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {lambiriModels.map((model, index) => (
            <a
              key={model.id}
              href={model.image}
              className="lambiri-card group relative block overflow-hidden border border-black/[0.07] bg-white transition-colors hover:border-pine/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine"
              aria-label={`${copy.model} ${model.id}, ${model.widthCm} × ${model.lengthCm} cm — ${copy.view}`}
              aria-haspopup="dialog"
              data-model={model.id}
              onClick={(event) => {
                if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                event.preventDefault();
                returnFocus.current = event.currentTarget;
                setSelected(index);
              }}
            >
              <Image
                src={model.preview}
                alt={`${copy.model} ${model.id} · ${model.widthCm} × ${model.lengthCm} cm`}
                width={model.imageWidth}
                height={model.imageHeight}
                unoptimized
                loading={index < 4 ? "eager" : "lazy"}
                className="aspect-[4/5] h-auto w-full object-contain"
              />
              <span className="absolute end-2 top-2 rounded-full border border-black/5 bg-white/95 p-2 text-pine opacity-75 transition-opacity group-hover:opacity-100 sm:end-3 sm:top-3" aria-hidden="true">
                <FiMaximize2 className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </Container>

      <dialog
        ref={dialog}
        className="lambiri-dialog m-auto h-[94dvh] max-h-[1000px] w-[calc(100%-24px)] max-w-4xl overflow-hidden rounded-lg bg-white p-0 text-pine-deep backdrop:bg-[#031b14]/80 backdrop:backdrop-blur-sm"
        aria-label={active ? `${copy.model} ${active.id}` : copy.title}
        onCancel={() => setSelected(null)}
        onClose={() => setSelected(null)}
        onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            const direction = event.key === "ArrowRight" ? 1 : -1;
            changeModel(locale === "ar" ? -direction : direction);
          }
        }}
      >
        {active && (
          <div className="flex h-full flex-col">
            <div className="flex shrink-0 items-center justify-between border-b border-black/5 px-4 py-2">
              <span className="text-sm" aria-live="polite">{copy.model} {active.id} <span className="mx-2 text-neutral-300">/</span> 29</span>
              <button type="button" autoFocus className="gallery-control" onClick={() => setSelected(null)} aria-label={copy.close}><FiX /></button>
            </div>
            <div className="relative min-h-0 flex-1 bg-white">
              <Image key={active.id} src={active.image} alt={`${copy.model} ${active.id} · ${active.widthCm} × ${active.lengthCm} cm`} fill unoptimized className="object-contain p-2" />
            </div>
            <div className="flex shrink-0 items-center justify-between border-t border-black/5 px-4 py-2">
              <button type="button" className="gallery-control" onClick={() => changeModel(-1)} aria-label={copy.previous}><FiArrowLeft className="rtl:rotate-180" /></button>
              <a
                href={`https://wa.me/905052967473?text=${encodeURIComponent(`${copy.greeting} ${copy.model} ${active.id} (${active.widthCm} × ${active.lengthCm} cm).`)}`}
                target="_blank" rel="noopener noreferrer"
                className="rounded-full bg-pine px-6 py-3 text-sm font-medium text-white hover:bg-pine-deep"
              >{copy.inquiry}</a>
              <button type="button" className="gallery-control" onClick={() => changeModel(1)} aria-label={copy.next}><FiArrowRight className="rtl:rotate-180" /></button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
