export const languages = [
  { code: "tr", label: "TR", flag: "\u{1F1F9}\u{1F1F7}", name: "Turkce", dir: "ltr" },
  { code: "en", label: "EN", flag: "\u{1F1FA}\u{1F1F8}", name: "English", dir: "ltr" },
  { code: "de", label: "DE", flag: "\u{1F1E9}\u{1F1EA}", name: "Deutsch", dir: "ltr" },
  { code: "fr", label: "FR", flag: "\u{1F1EB}\u{1F1F7}", name: "Fran\u00E7ais", dir: "ltr" },
  { code: "ar", label: "AR", flag: "\u{1F1F8}\u{1F1E6}", name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", dir: "rtl" }
] as const;

export const locales = languages.map((language) => language.code) as ["tr", "en", "ar", "de", "fr"];

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export const localeLabels: Record<Locale, (typeof languages)[number]> = {
  tr: languages[0],
  en: languages[1],
  de: languages[2],
  fr: languages[3],
  ar: languages[4]
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDirection(locale: Locale) {
  return localeLabels[locale].dir;
}
