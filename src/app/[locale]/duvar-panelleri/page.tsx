import type { Metadata } from "next";

import { PanelGallery } from "@/components/site/panel-gallery";
import { Container } from "@/components/ui/container";
import { panelCopy, type PanelSeries } from "@/lib/panels";
import type { Locale } from "@/lib/locales";
import { createPageMetadata } from "@/lib/seo";
import { productCopy } from "@/lib/storefront";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata(locale, productCopy.panels[locale], panelCopy.description[locale], "duvar-panelleri");
}

export default async function WallPanelsPage({ params, searchParams }: { params: Promise<{ locale: Locale }>; searchParams: Promise<{ seri?: string }> }) {
  const { locale } = await params;
  const { seri } = await searchParams;
  const initialSeries = seri && ["DY", "S", "KL"].includes(seri) ? seri as PanelSeries : "all";
  return (
    <section className="min-h-[55vh] bg-[#fafaf8] py-10 text-pine-deep sm:py-14">
      <Container className="max-w-[1440px]">
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">{productCopy.panels[locale]}</h1>
        <p className="mb-6 mt-4 text-base leading-7 text-neutral-600">{panelCopy.description[locale]}</p>
        <PanelGallery locale={locale} initialSeries={initialSeries} />
      </Container>
    </section>
  );
}
