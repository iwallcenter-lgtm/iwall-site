import { productCategories, products } from "@/lib/products";
import type { Locale } from "@/lib/locales";
import type { SiteMessages } from "@/messages/schema";

import { ProductCard, FeatureCard } from "@/components/site/cards";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { SectionHeading } from "@/components/ui/section-heading";

export function HomeHero({ locale, messages }: { locale: Locale; messages: SiteMessages }) {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-[#f7f4ee] pb-16 pt-16 sm:pb-24 sm:pt-24">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,rgba(207,188,162,0.45),transparent_40%)]" />
      <Container className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-bronze">{messages.home.hero.eyebrow}</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-ink sm:text-6xl">
            {messages.home.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">{messages.home.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={`/${locale}/products`}>{messages.cta.exploreProducts}</ButtonLink>
            <ButtonLink href={`/${locale}/catalogs`} variant="secondary">
              {messages.cta.downloadCatalog}
            </ButtonLink>
            <ButtonLink href={`/${locale}/dealer`} variant="secondary">
              {messages.cta.becomeDealer}
            </ButtonLink>
            <ButtonLink href={`/${locale}/contact`} variant="ghost">
              {messages.cta.contactUs}
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {messages.home.hero.stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-black/10 bg-white/70 p-5 backdrop-blur">
                <div className="text-2xl font-semibold text-ink">{stat.value}</div>
                <div className="mt-2 text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <MediaPlaceholder label="Hero Surface 01" className="h-80 sm:h-96" />
          <div className="grid gap-4">
            <MediaPlaceholder label="Hero Surface 02" className="h-40 sm:h-44" />
            <div className="rounded-[1.75rem] border border-black/10 bg-ink p-8 text-white shadow-panel">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sand">i-WALL</p>
              <p className="mt-4 text-2xl font-semibold leading-tight">{messages.brand.tagline}</p>
              <p className="mt-4 text-sm leading-7 text-white/75">{messages.home.intro.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function HomeSections({ locale, messages }: { locale: Locale; messages: SiteMessages }) {
  return (
    <>
      <section className="py-20">
        <Container>
          <SectionHeading title={messages.home.intro.title} description={messages.home.intro.description} />
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <SectionHeading title={messages.products.categoriesTitle} />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {Object.entries(productCategories).map(([key, category]) => (
              <div key={key} className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-ink">{category.title[locale]}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{category.description[locale]}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-fog py-20">
        <Container>
          <SectionHeading title={messages.home.why.title} />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {messages.home.why.items.map((item) => (
              <FeatureCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading title={messages.home.featured.title} description={messages.home.featured.description} />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {products.slice(0, 3).map((product) => (
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

      <section className="bg-[#ece4d7] py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading title={messages.home.applications.title} description={messages.home.applications.description} />
          <div className="grid gap-4 sm:grid-cols-2">
            {messages.home.applications.items.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-black/10 bg-white px-5 py-4 text-sm font-medium text-ink shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-8 rounded-[2rem] border border-black/10 bg-ink p-8 text-white shadow-panel sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sand">Catalogs</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{messages.home.catalog.title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">{messages.home.catalog.description}</p>
          </div>
          <ButtonLink href={`/${locale}/catalogs`} variant="secondary" className="bg-white">
            {messages.cta.downloadCatalog}
          </ButtonLink>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-ink">{messages.home.partnerSplit.dealerTitle}</h3>
            <p className="mt-4 text-sm leading-7 text-neutral-600">{messages.home.partnerSplit.dealerText}</p>
            <ButtonLink href={`/${locale}/dealer`} className="mt-6">
              {messages.cta.becomeDealer}
            </ButtonLink>
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-[#ece4d7] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-ink">{messages.home.partnerSplit.partnerTitle}</h3>
            <p className="mt-4 text-sm leading-7 text-neutral-600">{messages.home.partnerSplit.partnerText}</p>
            <ButtonLink href={`/${locale}/sales-partner`} className="mt-6">
              {messages.cta.becomePartner}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
