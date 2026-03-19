import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { getMessages } from "@/lib/messages";
import { getDirection, isLocale, locales, type Locale } from "@/lib/locales";
import { buildAlternates, buildCanonical } from "@/lib/routes";
import { localeMeta } from "@/lib/site-config";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }
  const messages = getMessages(locale);

  return {
    title: {
      default: messages.seo.defaultTitle,
      template: messages.seo.titleTemplate
    },
    description: localeMeta[locale].description,
    alternates: {
      canonical: buildCanonical(locale),
      languages: buildAlternates()
    },
    openGraph: {
      title: messages.seo.defaultTitle,
      description: localeMeta[locale].description,
      url: buildCanonical(locale),
      locale,
      type: "website"
    }
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale as Locale);

  return (
    <div lang={locale} dir={getDirection(locale)} className="min-h-screen bg-[#f7f4ee] text-ink">
      <Header locale={locale} messages={messages} />
      <main>{children}</main>
      <Footer locale={locale} messages={messages} />
    </div>
  );
}
