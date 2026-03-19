import { NotFoundPanel } from "@/components/site/not-found-panel";
import { getMessages } from "@/lib/messages";
import type { Locale } from "@/lib/locales";

export default async function LocaleCatchAllPage({
  params
}: {
  params: Promise<{ locale: Locale; rest: string[] }>;
}) {
  const { locale } = await params;

  return <NotFoundPanel locale={locale} messages={getMessages(locale)} />;
}
