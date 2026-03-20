import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { getMessages } from "@/lib/messages";
import type { Locale } from "@/lib/locales";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = getMessages(locale);
  return createPageMetadata(locale, messages.nav.about, messages.about.heroText, "about");
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getMessages(locale);
  const sections = [
    { title: messages.about.storyTitle, text: messages.about.storyText },
    { title: messages.about.missionTitle, text: messages.about.missionText },
    { title: messages.about.visionTitle, text: messages.about.visionText },
    { title: messages.about.qualityTitle, text: messages.about.qualityText },
    { title: messages.about.exportTitle, text: messages.about.exportText }
  ];

  return (
    <>
      <PageHero title={messages.about.heroTitle} description={messages.about.heroText} />
      <section className="bg-white py-24">
        <Container className="grid gap-6 lg:grid-cols-2">
          {sections.map((section) => (
            <div key={section.title} className="rounded-[1.9rem] border border-pine/10 bg-white p-7 shadow-panel">
              <h2 className="text-2xl font-semibold tracking-[0.02em] text-pine-deep">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600">{section.text}</p>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
