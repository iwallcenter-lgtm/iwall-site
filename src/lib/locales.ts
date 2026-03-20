export const languages = [
  { code: "tr", label: "TR", flag: "🇹🇷", name: "Turkce", dir: "ltr" },
  { code: "en", label: "EN", flag: "🇺🇸", name: "English", dir: "ltr" },
  { code: "ar", label: "AR", flag: "🇸🇦", name: "العربية", dir: "rtl" },
  { code: "de", label: "DE", flag: "🇩🇪", name: "Deutsch", dir: "ltr" },
  { code: "fr", label: "FR", flag: "🇫🇷", name: "Français", dir: "ltr" }
] as const;

export const locales = languages.map((language) => language.code) as ["tr", "en", "ar", "de", "fr"];

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export const localeLabels: Record<Locale, (typeof languages)[number]> = {
  tr: languages[0],
  en: languages[1],
  ar: languages[2],
  de: languages[3],
  fr: languages[4]
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDirection(locale: Locale) {
  return localeLabels[locale].dir;
}
