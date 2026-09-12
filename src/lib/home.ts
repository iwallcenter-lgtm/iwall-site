import type { Locale } from "@/lib/locales";

type HomeCopy = {
  title: string;
  description: string;
  explore: string;
  collection: string;
  viewAll: string;
  imageAlt: string;
};

export const homeCopy: Record<Locale, HomeCopy> = {
  tr: {
    title: "Mekânınıza karakter katın.",
    description: "Farklı renk ve dokularda 29 lambiri modeli. Tarzınıza uygun deseni seçin, detayları yakından inceleyin.",
    explore: "Lambirileri keşfet",
    collection: "Lambiri koleksiyonu",
    viewAll: "Tüm desenleri gör",
    imageAlt: "Açık renk lambiri duvar ve sıcak aydınlatmalı bir yaşam alanı"
  },
  en: {
    title: "Give your space character.",
    description: "29 wall panel models in a range of colours and textures. Find your style and explore the details.",
    explore: "Explore wall panels",
    collection: "The wall panel collection",
    viewAll: "View all designs",
    imageAlt: "A living space with light-coloured wall panelling and warm lighting"
  },
  de: {
    title: "Charakter für Ihren Raum.",
    description: "29 Wandpaneel-Modelle in unterschiedlichen Farben und Texturen. Finden Sie Ihren Stil und entdecken Sie die Details.",
    explore: "Wandpaneele entdecken",
    collection: "Die Wandpaneel-Kollektion",
    viewAll: "Alle Designs ansehen",
    imageAlt: "Ein Wohnraum mit hellen Wandpaneelen und warmer Beleuchtung"
  },
  fr: {
    title: "Du caractère pour votre intérieur.",
    description: "29 modèles de lambris aux couleurs et textures variées. Trouvez votre style et découvrez chaque détail.",
    explore: "Découvrir les lambris",
    collection: "La collection de lambris",
    viewAll: "Voir tous les motifs",
    imageAlt: "Un espace de vie avec des lambris clairs et un éclairage chaleureux"
  },
  ar: {
    title: "امنح مساحتك طابعًا مميزًا.",
    description: "29 طرازًا من ألواح الجدران بألوان وملامس متنوعة. اختر التصميم الذي يناسب ذوقك واكتشف التفاصيل.",
    explore: "اكتشف ألواح الجدران",
    collection: "مجموعة ألواح الجدران",
    viewAll: "عرض جميع التصاميم",
    imageAlt: "مساحة معيشة بألواح جدران فاتحة وإضاءة دافئة"
  }
};
