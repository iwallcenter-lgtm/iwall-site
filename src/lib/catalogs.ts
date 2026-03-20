import type { Locale } from "@/lib/locales";

export const catalogLinks = {
  lambiri: "https://drive.google.com/uc?export=download&id=1Ptrpsq9GX3_eD9RRugzpBFF7YrLWlxf2",
  kl: "https://drive.google.com/file/d/1ZtT2Ey_4zGBgPkdyrZZS_cGoJjsAWnyN/view?usp=drive_link",
  s: "https://drive.google.com/file/d/1g68Cy7vXs5Ge5wANaYrgB1QXaxv6707o/view?usp=drive_link",
  dy: "https://drive.google.com/file/d/1NsiRbmMUWydItkTONT7whCtY-VPduFHy/view?usp=drive_link"
} as const;

export const catalogs: Array<{
  href: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}> = [
  {
    href: catalogLinks.lambiri,
    title: {
      tr: "Lambiri Koleksiyonu",
      en: "Lambiri Collection",
      ar: "مجموعة لامبري",
      de: "Lambiri Kollektion",
      fr: "Collection Lambiri"
    },
    description: {
      tr: "Sıcak doku ve çizgisel ritim sunan lambiri yüzey çözümlerini inceleyin.",
      en: "Explore linear lambiri surface solutions with warmth and refined rhythm.",
      ar: "استعرض حلول اللامبري الخطية التي تجمع الدفء والإيقاع الأنيق.",
      de: "Entdecken Sie lineare Lambiri-Oberflächen mit Wärme und rhythmischer Struktur.",
      fr: "Découvrez les solutions lambiri linéaires au rythme chaleureux et raffiné."
    }
  },
  {
    href: catalogLinks.s,
    title: {
      tr: "Model S",
      en: "S Model",
      ar: "موديل S",
      de: "S Modell",
      fr: "Modèle S"
    },
    description: {
      tr: "Akışkan çizgiler ve modern iç mekan dili sunan Model S kataloğunu açın.",
      en: "Open the S Model catalog for flowing lines and a modern interior language.",
      ar: "افتح كتالوج موديل S لخطوط انسيابية وهوية داخلية حديثة.",
      de: "Öffnen Sie den S-Modell-Katalog für fließende Linien und moderne Innenräume.",
      fr: "Ouvrez le catalogue S Model pour des lignes fluides et une esthétique intérieure moderne."
    }
  },
  {
    href: catalogLinks.kl,
    title: {
      tr: "Model KL",
      en: "KL Model",
      ar: "موديل KL",
      de: "KL Modell",
      fr: "Modèle KL"
    },
    description: {
      tr: "Minimal ve dengeli proje yüzeyleri için hazırlanan Model KL koleksiyonunu görüntüleyin.",
      en: "View the KL Model collection for balanced and minimal project surfaces.",
      ar: "اعرض مجموعة KL للمشاريع التي تتطلب أسطحا متوازنة وبسيطة.",
      de: "Sehen Sie die KL-Modell-Kollektion für ausgewogene und minimalistische Projektflächen.",
      fr: "Consultez la collection KL Model pour des surfaces de projet sobres et équilibrées."
    }
  },
  {
    href: catalogLinks.dy,
    title: {
      tr: "Model DY",
      en: "DY Model",
      ar: "موديل DY",
      de: "DY Modell",
      fr: "Modèle DY"
    },
    description: {
      tr: "Güçlü çizgiler ve mimari ritim sunan Model DY kataloğuna hemen ulaşın.",
      en: "Access the DY Model catalog for bold lines and architectural rhythm.",
      ar: "اطلع على كتالوج DY لخطوط قوية وإيقاع معماري واضح.",
      de: "Greifen Sie auf den DY-Modell-Katalog für markante Linien und architektonischen Rhythmus zu.",
      fr: "Accédez au catalogue DY Model pour des lignes fortes et un rythme architectural affirmé."
    }
  }
];
