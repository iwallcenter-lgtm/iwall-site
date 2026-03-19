import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import type { Locale } from "@/lib/locales";
import type { SiteMessages } from "@/messages/schema";

export function NotFoundPanel({ locale, messages }: { locale: Locale; messages: SiteMessages }) {
  return (
    <section className="py-28">
      <Container className="max-w-3xl">
        <div className="rounded-[2rem] border border-black/10 bg-white p-10 text-center shadow-panel">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-bronze">404</p>
          <h1 className="mt-4 text-4xl font-semibold text-ink">{messages.misc.notFoundTitle}</h1>
          <p className="mt-4 text-base leading-7 text-neutral-600">{messages.misc.notFoundText}</p>
          <ButtonLink href={`/${locale}`} className="mt-8">
            {messages.misc.backHome}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
