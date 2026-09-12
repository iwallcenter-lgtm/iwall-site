import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { PanelCatalogs } from "@/components/site/panel-catalogs";
import { Container } from "@/components/ui/container";
import { lambiriCopy, lambiriModels } from "@/lib/lambiri";
import { getMessages } from "@/lib/messages";
import type { Locale } from "@/lib/locales";
import { createPageMetadata } from "@/lib/seo";
import { productCopy } from "@/lib/storefront";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata(locale, getMessages(locale).nav.products, productCopy.description[locale], "products");
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getMessages(locale);
  const previewModels = lambiriModels.filter((model) => [1, 5, 7, 10].includes(model.id));

  return (
    <section className="bg-[#fafaf8] pb-14 pt-8 text-pine-deep sm:pb-20 sm:pt-10">
      <Container className="max-w-[1440px]">
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">{messages.nav.products}</h1>
        <Link href={`/${locale}/lambiriler`} className="product-lambiri-link mt-8 block rounded-xl border border-pine/15 bg-white p-5 transition hover:border-pine/50 sm:p-7">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold">{lambiriCopy[locale].title}</h2>
            <FiArrowRight className="rtl:rotate-180" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {previewModels.map((model) => <Image key={model.id} src={model.preview} alt={`${lambiriCopy[locale].model} ${model.id}`} width={model.imageWidth} height={model.imageHeight} unoptimized className="aspect-[4/5] h-auto w-full object-contain" />)}
          </div>
        </Link>
        <div className="mt-10 border-t border-pine/15 pt-8">
          <Link href={`/${locale}/duvar-panelleri`} className="product-panels-link mb-6 flex min-h-12 items-center justify-between gap-4 hover:underline hover:underline-offset-4">
            <h2 className="text-2xl font-semibold">{productCopy.panels[locale]}</h2>
            <FiArrowRight className="rtl:rotate-180" aria-hidden="true" />
          </Link>
          <PanelCatalogs locale={locale} />
        </div>
      </Container>
    </section>
  );
}
