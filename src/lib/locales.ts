export const locales = ["tr", "en", "ar", "de", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export const localeLabels: Record<Locale, { code: string; name: string; flag: string; dir: "ltr" | "rtl" }> = {
  tr: { code: "TR", name: "Turkce", flag: "\uD83C\uDDF9\uD83C\uDDF7", dir: "ltr" },
  en: { code: "EN", name: "English", flag: "\uD83C\uDDFA\uD83C\uDDF8", dir: "ltr" },
  ar: { code: "AR", name: "العربية", flag: "\uD83C\uDDF8\uD83C\uDDE6", dir: "rtl" },
  de: { code: "DE", name: "Deutsch", flag: "\uD83C\uDDE9\uD83C\uDDEA", dir: "ltr" },
  fr: { code: "FR", name: "Français", flag: "\uD83C\uDDEB\uD83C\uDDF7", dir: "ltr" }
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDirection(locale: Locale) {
  return localeLabels[locale].dir;
}
