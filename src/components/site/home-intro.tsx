import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { Container } from "@/components/ui/container";
import { homeCopy } from "@/lib/home";
import { lambiriCopy, lambiriModels } from "@/lib/lambiri";
import type { Locale } from "@/lib/locales";
import { getMessages } from "@/lib/messages";
import { spaceCopy, spaceModels } from "@/lib/spaces";

const previewModels = lambiriModels.filter((model) => [1, 7, 19, 28].includes(model.id));
const previewSpaces = spaceModels.filter((model) => [1, 14, 28].includes(model.id));

export function HomeIntro({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale];
  const galleryCopy = lambiriCopy[locale];
  const messages = getMessages(locale);
  const collectionHref = `/${locale}/lambiriler`;

  return (
    <div className="home-intro bg-[#fafaf8] text-pine-deep">
      <section className="py-8 sm:py-12 lg:py-16">
        <Container className="grid max-w-[1440px] items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="max-w-xl">
            <p className="mb-5 text-xs font-semibold tracking-[0.28em] text-pine/65">i-WALL</p>
            <h1 className="max-w-lg text-4xl font-medium leading-[1.15] tracking-tight sm:text-5xl">{copy.title}</h1>
            <p className="mt-5 max-w-md text-base leading-7 text-neutral-600">{copy.description}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href={collectionHref} className="home-collection-link inline-flex min-h-12 items-center gap-3 rounded-full bg-pine px-6 py-3 text-sm font-medium text-white transition hover:bg-pine-deep">
                {copy.explore}<FiArrowRight aria-hidden="true" className="rtl:rotate-180" />
              </Link>
              <Link href={`/${locale}/contact`} className="inline-flex min-h-12 items-center text-sm font-medium underline underline-offset-4 hover:text-pine-soft">{messages.nav.contact}</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-sand">
            <Image
              src="/images/iwall-surface-lambrie-hero-02.jpg"
              alt={copy.imageAlt}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 55vw, 740px"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="pb-12 sm:pb-16" aria-labelledby="home-collection-title">
        <Container className="max-w-[1440px]">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-t border-pine/15 pt-7">
            <div className="flex flex-wrap items-baseline gap-3">
              <h2 id="home-collection-title" className="text-xl font-medium sm:text-2xl">{copy.collection}</h2>
              <span className="text-xs text-neutral-500">{galleryCopy.collection}</span>
            </div>
            <Link href={collectionHref} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium hover:underline hover:underline-offset-4">
              {copy.viewAll}<FiArrowRight aria-hidden="true" className="rtl:rotate-180" />
            </Link>
          </div>
          <Link href={collectionHref} aria-label={copy.viewAll} className="home-collection-preview grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
            {previewModels.map((model) => (
              <Image
                key={model.id}
                src={model.preview}
                alt={`${galleryCopy.model} ${model.id} · ${model.widthCm} × ${model.lengthCm} cm`}
                width={model.imageWidth}
                height={model.imageHeight}
                unoptimized
                className="aspect-[4/5] h-auto w-full border border-black/[0.07] bg-white object-contain"
              />
            ))}
          </Link>
        </Container>
      </section>
      <section className="pb-12 sm:pb-16" aria-labelledby="home-spaces-title">
        <Container className="max-w-[1440px]">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-t border-pine/15 pt-7">
            <h2 id="home-spaces-title" className="text-xl font-medium sm:text-2xl">{spaceCopy.homeTitle[locale]}</h2>
            <Link href={`/${locale}/mekanlar`} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium hover:underline hover:underline-offset-4">
              {spaceCopy.explore[locale]}<FiArrowRight className="rtl:rotate-180" aria-hidden="true" />
            </Link>
          </div>
          <div className="home-spaces-preview grid gap-5 sm:grid-cols-3">
            {previewSpaces.map((model) => (
              <Link key={model.id} href={`/${locale}/mekanlar`} className="group">
                <Image src={model.preview} alt={`${model.sector[locale]} · i-WALL ${galleryCopy.model} ${model.id}`} width={model.imageWidth} height={model.imageHeight} unoptimized className="aspect-[4/3] h-auto w-full rounded-lg object-cover transition duration-300 group-hover:brightness-105" />
                <p className="mt-3 text-sm font-semibold">{model.sector[locale]}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
