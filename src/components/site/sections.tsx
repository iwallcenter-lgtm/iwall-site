import Link from "next/link";

import { productCategories, products } from "@/lib/products";
import type { Locale } from "@/lib/locales";
import type { SiteMessages } from "@/messages/schema";

import { ProductCard, FeatureCard } from "@/components/site/cards";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { SectionHeading } from "@/components/ui/section-heading";

const homepageCatalogCards = [
  {
    title: "Lambiri Koleksiyonu",
    description: "Mekanda sicaklik ve cizgisel ritim olusturan lambiri yuzey cozumlerini inceleyin.",
    href: "/catalogs/lambiri.pdf"
  },
  {
    title: "Model S",
    description: "Yumusak gecisler ve modern yuzey hareketi sunan Model S katalogunu acin.",
    href: "/catalogs/s-model.pdf"
  },
  {
    title: "Model KL",
    description: "Minimal ve dengeli mekan dili icin hazirlanan Model KL koleksiyonunu goruntuleyin.",
    href: "/catalogs/kl-model.pdf"
  },
  {
    title: "Model DY",
    description: "Mimari ritim ve guclu cizgiler sunan Model DY kataloguna goz atin.",
    href: "/catalogs/dy-model.pdf"
  }
] as const;

export function HomeHero({ locale, messages }: { locale: Locale; messages: SiteMessages }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-green-luxury pb-16 pt-16 sm:pb-24 sm:pt-24">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_40%)]" />
      <Container className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-white">{messages.home.hero.eyebrow}</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-[0.02em] text-white sm:text-6xl">
            {messages.home.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white">{messages.home.hero.description}</p>
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
              <div key={stat.label} className="rounded-[1.7rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="text-2xl font-semibold text-white">{stat.value}</div>
                <div className="mt-2 text-sm text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <MediaPlaceholder label="Hero Surface 01" className="h-80 sm:h-96" />
          <div className="grid gap-4">
            <MediaPlaceholder label="Hero Surface 02" className="h-40 sm:h-44" />
            <div className="rounded-[1.9rem] border border-white/10 bg-white/10 p-8 text-white shadow-luxury backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white">i-WALL</p>
              <p className="mt-4 text-2xl font-semibold leading-tight">{messages.brand.tagline}</p>
              <p className="mt-4 text-sm leading-7 text-white">{messages.home.intro.description}</p>
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
      <section className="bg-white py-24">
        <Container>
          <SectionHeading title={messages.home.intro.title} description={messages.home.intro.description} />
        </Container>
      </section>

      <section className="bg-white pb-24">
        <Container>
          <SectionHeading title={messages.products.categoriesTitle} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {Object.entries(productCategories).map(([key, category]) => (
              <div key={key} className="rounded-[1.9rem] border border-pine/10 bg-white p-7 shadow-panel">
                <h3 className="text-xl font-semibold tracking-[0.02em] text-pine-deep">{category.title[locale]}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{category.description[locale]}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-green-luxury py-24">
        <Container>
          <SectionHeading title={messages.home.why.title} tone="light" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {messages.home.why.items.map((item) => (
              <FeatureCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionHeading title={messages.home.featured.title} description={messages.home.featured.description} />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
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

      <section className="bg-green-luxury py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading title={messages.home.applications.title} description={messages.home.applications.description} tone="light" />
          <div className="grid gap-4 sm:grid-cols-2">
            {messages.home.applications.items.map((item) => (
              <div key={item} className="rounded-[1.6rem] border border-white/12 bg-white/10 px-5 py-4 text-sm font-medium text-white shadow-sm backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container className="grid gap-8 rounded-[2rem] border border-white/10 bg-green-luxury p-8 text-white shadow-luxury sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white">Catalogs</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{messages.home.catalog.title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white">{messages.home.catalog.description}</p>
          </div>
          <ButtonLink href={`/${locale}/catalogs`} variant="secondary" className="bg-white">
            {messages.cta.downloadCatalog}
          </ButtonLink>
        </Container>
        <Container className="mt-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {homepageCatalogCards.map((card) => (
              <article key={card.title} className="rounded-[1.9rem] border border-pine/10 bg-white p-7 shadow-panel">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pine-soft">{messages.nav.catalogs}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-[0.02em] text-pine-deep">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{card.description}</p>
                <Link
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center rounded-full border border-pine/15 px-4 py-2.5 text-sm font-semibold tracking-[0.08em] text-pine transition duration-200 hover:scale-[1.02] hover:border-gold/40 hover:bg-[#f7faf8]"
                >
                  Katalogu Gor
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white pb-24">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-pine/10 bg-white p-8 shadow-panel">
            <h3 className="text-2xl font-semibold tracking-[0.02em] text-pine-deep">{messages.home.partnerSplit.dealerTitle}</h3>
            <p className="mt-4 text-sm leading-7 text-neutral-600">{messages.home.partnerSplit.dealerText}</p>
            <ButtonLink href={`/${locale}/dealer`} className="mt-6">
              {messages.cta.becomeDealer}
            </ButtonLink>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-green-luxury p-8 shadow-luxury">
            <h3 className="text-2xl font-semibold tracking-[0.02em] text-white">{messages.home.partnerSplit.partnerTitle}</h3>
            <p className="mt-4 text-sm leading-7 text-white/82">{messages.home.partnerSplit.partnerText}</p>
            <ButtonLink href={`/${locale}/sales-partner`} className="mt-6">
              {messages.cta.becomePartner}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
