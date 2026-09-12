import type { Locale } from "@/lib/locales";
import modelData from "@/lib/lambiri-models.json";

export const lambiriModels = modelData;
export const lambiriCatalog = "/catalogs/iwall-lambiri-1-29.pdf";

type GalleryCopy = {
  title: string;
  description: string;
  model: string;
  view: string;
  close: string;
  previous: string;
  next: string;
  catalog: string;
  inquiry: string;
  greeting: string;
  menu: string;
};

export const lambiriCopy: Record<Locale, GalleryCopy> = {
  tr: {
    title: "Lambiriler",
    description: "i-WALL lambiri desenleri ve ürün ölçüleri.",
    model: "Model", view: "Büyük gör", close: "Kapat", previous: "Önceki model", next: "Sonraki model",
    catalog: "Kataloğu indir", inquiry: "Bilgi al",
    greeting: "Merhaba, bu i-WALL lambiri modeli hakkında bilgi almak istiyorum:", menu: "Menü"
  },
  en: {
    title: "Wall panelling",
    description: "i-WALL wall panelling designs and dimensions.",
    model: "Model", view: "Enlarge", close: "Close", previous: "Previous model", next: "Next model",
    catalog: "Download catalog", inquiry: "Enquire",
    greeting: "Hello, I would like more information about this i-WALL wall panel:", menu: "Menu"
  },
  de: {
    title: "Wandpaneele",
    description: "i-WALL Wandpaneele: Dekore und Maße.",
    model: "Modell", view: "Vergrößern", close: "Schließen", previous: "Vorheriges Modell", next: "Nächstes Modell",
    catalog: "Katalog herunterladen", inquiry: "Anfragen",
    greeting: "Hallo, ich möchte mehr über dieses i-WALL Wandpaneel erfahren:", menu: "Menü"
  },
  fr: {
    title: "Lambris",
    description: "Lambris i-WALL : motifs et dimensions.",
    model: "Modèle", view: "Agrandir", close: "Fermer", previous: "Modèle précédent", next: "Modèle suivant",
    catalog: "Télécharger le catalogue", inquiry: "Se renseigner",
    greeting: "Bonjour, je souhaite des informations sur ce lambris i-WALL :", menu: "Menu"
  },
  ar: {
    title: "ألواح الجدران",
    description: "ألواح الجدران من i-WALL مع النقوش والمقاسات.",
    model: "طراز", view: "تكبير", close: "إغلاق", previous: "الطراز السابق", next: "الطراز التالي",
    catalog: "تحميل الكتالوج", inquiry: "استفسار",
    greeting: "مرحبًا، أود معرفة المزيد عن لوح الجدران هذا من i-WALL:", menu: "القائمة"
  }
};
