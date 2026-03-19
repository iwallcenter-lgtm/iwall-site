import { notFound } from "next/navigation";

import type { Locale } from "@/lib/locales";
import { isLocale } from "@/lib/locales";
import { messages } from "@/messages";

export function getMessages(locale: string) {
  if (!isLocale(locale)) {
    notFound();
  }

  return messages[locale];
}

export function getOptionalMessages(locale: Locale) {
  return messages[locale];
}
