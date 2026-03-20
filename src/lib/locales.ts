export const locales = ["tr", "en", "ar", "de", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export const localeLabels: Record<Locale, { code: string; name: string; flag: string; dir: "ltr" | "rtl" }> = {
  tr: { code: "TR", name: "Turkce", flag: "🇹🇷", dir: "ltr" },
  en: { code: "EN", name: "English", flag: "🇺🇸", dir: "ltr" },
  ar: { code: "AR", name: "العربية", flag: "🇸🇦", dir: "rtl" },
  de: { code: "DE", name: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  fr: { code: "FR", name: "Français", flag: "🇫🇷", dir: "ltr" }
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDirection(locale: Locale) {
  return localeLabels[locale].dir;
}
