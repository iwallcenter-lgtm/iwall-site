import type { Locale } from "@/lib/locales";

export const siteConfig = {
  name: "i-WALL",
  domain: "https://www.i-wall.com",
  defaultLocale: "en",
  company: {
    email: "info@iwall.com.tr",
    phone: "+90 212 000 00 00",
    whatsapp: "+90 505 296 74 73",
    address: "Istanbul, Türkiye",
    mapEmbedUrl: "",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
      youtube: "https://youtube.com/"
    }
  }
} as const;

export const localeMeta: Record<Locale, { market: string; description: string }> = {
  tr: {
    market: "Türkiye ve uluslararası projeler",
    description:
      "i-WALL, duvar paneli ve dekoratif yüzey çözümlerinde premium, mimari ve ihracata hazır kurumsal markadır."
  },
  en: {
    market: "Türkiye and international projects",
    description:
      "i-WALL is a premium architectural wall panel and decorative surface brand built for international project and distribution growth."
  },
  ar: {
    market: "تركيا والأسواق الدولية",
    description:
      "i-WALL علامة متخصصة في ألواح الجدران والأسطح الزخرفية بطابع معماري احترافي وجاهزية عالية للتصدير والمشاريع."
  },
  de: {
    market: "Türkei und internationale Projekte",
    description:
      "i-WALL ist eine hochwertige Architekturmarke für Wandpaneele und dekorative Oberflächen mit Fokus auf Projekte und Export."
  },
  fr: {
    market: "Turquie et projets internationaux",
    description:
      "i-WALL est une marque premium de panneaux muraux et de surfaces décoratives pensée pour les projets, la distribution et l'export."
  }
};
