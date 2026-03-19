import type { Metadata } from "next";

import { ProductCard } from "@/components/site/cards";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { productCategories, products } from "@/lib/products";
import { getMessages } from "@/lib/messages";
import type { Locale } from "@/lib/locales";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = getMessages(locale);
  return createPageMetadata(locale, messages.nav.products, messages.products.heroText, "products");
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <>
      <PageHero title={messages.products.heroTitle} description={messages.products.heroText} />
      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-semibold text-ink">{messages.products.categoriesTitle}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {Object.entries(productCategories).map(([key, category]) => (
              <div key={key} className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-bronze">{messages.products.filtersLabel}</p>
                <h3 className="mt-3 text-xl font-semibold text-ink">{category.title[locale]}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{category.description[locale]}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-fog py-20">
        <Container>
          <h2 className="text-3xl font-semibold text-ink">{messages.products.gridTitle}</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                href={`/${locale}/products/${product.slug}`}
                title={product.title[locale]}
                description={product.summary[locale]}
                label={product.imageLabel}
                action={messages.cta.viewDetails}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
