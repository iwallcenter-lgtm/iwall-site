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
    title: "Mekânlarınıza değer katın",
    description: "i-WALL lambiri ve duvar panelleriyle mekânınıza uygun renk ve dokuları keşfedin.",
    explore: "Lambirileri keşfet",
    collection: "Lambiriler",
    viewAll: "Tüm desenleri gör",
    imageAlt: "i-WALL lambirilerinin kullanıldığı güzellik salonu"
  },
  en: {
    title: "Add value to your spaces",
    description: "Discover colours and textures for your space with i-WALL wall panelling and wall panels.",
    explore: "Explore wall panels",
    collection: "Wall panelling",
    viewAll: "View all designs",
    imageAlt: "A beauty salon with i-WALL wall panelling"
  },
  de: {
    title: "Mehr Wert für Ihre Räume",
    description: "Entdecken Sie passende Farben und Texturen mit Wandpaneelen und Wandplatten von i-WALL.",
    explore: "Wandpaneele entdecken",
    collection: "Wandpaneele",
    viewAll: "Alle Designs ansehen",
    imageAlt: "Ein Schönheitssalon mit i-WALL Wandpaneelen"
  },
  fr: {
    title: "Valorisez vos espaces",
    description: "Découvrez les couleurs et textures pour votre intérieur avec les lambris et panneaux muraux i-WALL.",
    explore: "Découvrir les lambris",
    collection: "Lambris",
    viewAll: "Voir tous les motifs",
    imageAlt: "Un salon de beauté avec des lambris i-WALL"
  },
  ar: {
    title: "أضف قيمة إلى مساحاتك",
    description: "اكتشف ألوان وملامس تناسب مساحتك مع ألواح وكسوات الجدران من i-WALL.",
    explore: "اكتشف ألواح الجدران",
    collection: "ألواح الجدران",
    viewAll: "عرض جميع التصاميم",
    imageAlt: "صالون تجميل بألواح الجدران من i-WALL"
  }
};
