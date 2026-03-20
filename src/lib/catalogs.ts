import type { Locale } from "@/lib/locales";

export const catalogs: Array<{
  href: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}> = [
  {
    href: "/catalogs/lambiri.pdf",
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
    href: "/catalogs/s-model.pdf",
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
    href: "/catalogs/kl-model.pdf",
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
    href: "/catalogs/dy-model.pdf",
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
