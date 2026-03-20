import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/site/cards";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { DetailList } from "@/components/ui/detail-list";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { getMessages } from "@/lib/messages";
import type { Locale } from "@/lib/locales";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/products";
import { buildAlternates, buildCanonical } from "@/lib/routes";

type ProductPageProps = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export async function generateStaticParams() {
  return products.flatMap((product) => ["tr", "en", "ar", "de", "fr"].map((locale) => ({ locale, slug: product.slug })));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.title[locale],
    description: product.summary[locale],
    alternates: {
      canonical: buildCanonical(locale, `products/${slug}`),
      languages: buildAlternates(`products/${slug}`)
    },
    openGraph: {
      title: product.title[locale],
      description: product.summary[locale],
      url: buildCanonical(locale, `products/${slug}`)
    }
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { locale, slug } = await params;
  const messages = getMessages(locale);
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.slug, product.category);

  return (
    <section className="py-20">
      <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-5">
          <MediaPlaceholder label={product.imageLabel} imageSrc={product.imageSrc} altText={product.imageAlt} className="h-[26rem]" />
          <div className="grid gap-5 sm:grid-cols-2">
            <MediaPlaceholder label={`${product.imageLabel} Detail A`} className="h-48" />
            <MediaPlaceholder label={`${product.imageLabel} Detail B`} className="h-48" />
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-bronze">{product.imageLabel}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink">{product.title[locale]}</h1>
          <p className="mt-5 text-base leading-8 text-neutral-600">{product.intro[locale]}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={`/${locale}/catalogs`}>{messages.cta.downloadCatalog}</ButtonLink>
            <ButtonLink href={`/${locale}/contact`} variant="secondary">
              {messages.cta.whatsapp}
            </ButtonLink>
            <ButtonLink href={`/${locale}/contact`} variant="ghost">
              {messages.cta.contactSales}
            </ButtonLink>
          </div>
          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-ink">{messages.products.highlightsTitle}</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {product.highlights[locale].map((item) => (
                  <li key={item} className="rounded-[1.5rem] border border-black/10 bg-white px-5 py-4 text-sm text-neutral-700 shadow-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-ink">{messages.products.technicalTitle}</h2>
              <div className="mt-4">
                <DetailList items={product.technicalSpecs[locale]} />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-ink">{messages.products.dimensionsTitle}</h3>
                <p className="mt-4 text-sm text-neutral-600">{product.dimensions}</p>
              </div>
              <div className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-ink">{messages.products.finishesTitle}</h3>
                <p className="mt-4 text-sm text-neutral-600">{product.finishes.join(" / ")}</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-ink">{messages.products.usageTitle}</h2>
              <ul className="mt-4 flex flex-wrap gap-3">
                {product.usageAreas[locale].map((item) => (
                  <li key={item} className="rounded-full border border-black/10 bg-[#ece4d7] px-4 py-2 text-sm font-medium text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      <Container className="mt-20">
        <h2 className="text-3xl font-semibold text-ink">{messages.products.relatedTitle}</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {related.map((item) => (
            <ProductCard
              key={item.slug}
              href={`/${locale}/products/${item.slug}`}
              title={item.title[locale]}
              description={item.summary[locale]}
              label={item.imageLabel}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              action={messages.cta.viewDetails}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
