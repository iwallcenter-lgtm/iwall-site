import type { Locale } from "@/lib/locales";
import { spaceCopy } from "@/lib/spaces";
import { panelCatalogs } from "@/lib/panels";

export const catalogLinks = {
  lambiri: "/catalogs/iwall-lambiri-1-29.pdf",
  rooms: "/catalogs/iwall-mekan-katalogu.pdf",
  sectors: "/catalogs/iwall-sektorel-mekan-katalogu.pdf",
  s: panelCatalogs.S,
  dy: panelCatalogs.DY,
  kl: panelCatalogs.KL
} as const;

export const catalogs: Array<{
  href: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  imageSrc: string;
  imageAlt: string;
}> = [
  {
    href: catalogLinks.sectors,
    imageSrc: "/images/mekanlar/model-01-preview.webp",
    imageAlt: "i-WALL · Model 01",
    title: spaceCopy.sectorCatalog,
    description: spaceCopy.sectorCaption,
  },
  {
    href: catalogLinks.rooms,
    imageSrc: "/images/catalogs/iwall-mekanlar.webp",
    imageAlt: "i-WALL · Model 01",
    title: spaceCopy.roomCatalog,
    description: spaceCopy.roomCaption,
  },
  {
    href: catalogLinks.lambiri,
    imageSrc: "/images/lambiri/model-01-preview.webp",
    imageAlt: "Lambiri",
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
    imageSrc: "/images/catalogs/iwall-s-2026.webp",
    imageAlt: "Model S",
    title: {
      tr: "i-WALL S PANEL KATALOĞU 2026",
      en: "i-WALL S Panel Catalog 2026",
      ar: "كتالوج ألواح i-WALL S 2026",
      de: "i-WALL S Paneelkatalog 2026",
      fr: "Catalogue de panneaux i-WALL S 2026"
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
    href: catalogLinks.dy,
    imageSrc: "/images/catalogs/iwall-dy-2026.webp",
    imageAlt: "Model DY",
    title: {
      tr: "i-WALL DY PANEL KATALOĞU 2026",
      en: "i-WALL DY Panel Catalog 2026",
      ar: "كتالوج ألواح i-WALL DY 2026",
      de: "i-WALL DY Paneelkatalog 2026",
      fr: "Catalogue de panneaux i-WALL DY 2026"
    },
    description: {
      tr: "Güçlü çizgiler ve mimari ritim sunan Model DY kataloğuna hemen ulaşın.",
      en: "Access the DY Model catalog for bold lines and architectural rhythm.",
      ar: "اطلع على كتالوج DY لخطوط قوية وإيقاع معماري واضح.",
      de: "Greifen Sie auf den DY-Modell-Katalog für markante Linien und architektonischen Rhythmus zu.",
      fr: "Accédez au catalogue DY Model pour des lignes fortes et un rythme architectural affirmé."
    }
  },
  {
    href: catalogLinks.kl,
    imageSrc: "/images/catalogs/iwall-kl-2026.webp",
    imageAlt: "Model KL",
    title: {
      tr: "i-WALL KL PANEL KATALOĞU 2026",
      en: "i-WALL KL Panel Catalog 2026",
      ar: "كتالوج ألواح i-WALL KL 2026",
      de: "i-WALL KL Paneelkatalog 2026",
      fr: "Catalogue de panneaux i-WALL KL 2026"
    },
    description: {
      tr: "Minimal ve dengeli proje yüzeyleri için hazırlanan Model KL koleksiyonunu görüntüleyin.",
      en: "View the KL Model collection for balanced and minimal project surfaces.",
      ar: "اعرض مجموعة KL للمشاريع التي تتطلب أسطحا متوازنة وبسيطة.",
      de: "Sehen Sie die KL-Modell-Kollektion für ausgewogene und minimalistische Projektflächen.",
      fr: "Consultez la collection KL Model pour des surfaces de projet sobres et équilibrées."
    }
  }
];
