import type { Locale } from "@/lib/locales";

import { ar } from "@/messages/locales/ar";
import { de } from "@/messages/locales/de";
import { en } from "@/messages/locales/en";
import { fr } from "@/messages/locales/fr";
import { tr } from "@/messages/locales/tr";
import type { SiteMessages } from "@/messages/schema";

export const messages: Record<Locale, SiteMessages> = {
  tr,
  en,
  ar,
  de,
  fr
};
