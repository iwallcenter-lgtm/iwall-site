import type { Locale } from "@/lib/locales";
import data from "@/lib/panel-models.json";

export const panelModels = data;
export type PanelSeries = "DY" | "S" | "KL";
export const panelCatalogs: Record<PanelSeries, string> = {
  DY: "/catalogs/iwall-dy-panel-katalogu-2026.pdf",
  S: "/catalogs/iwall-s-panel-katalogu-2026.pdf",
  KL: "/catalogs/iwall-kl-panel-katalogu-2026.pdf"
};
const label = (tr: string, en: string, de: string, fr: string, ar: string): Record<Locale, string> => ({ tr, en, de, fr, ar });
export const panelCopy = {
  all: label("Tümü", "All", "Alle", "Tous", "الكل"),
  room: label("Mekân görünümü", "Interior view", "Raumansicht", "Vue en intérieur", "عرض المساحة"),
  texture: label("Panel deseni", "Panel design", "Paneeldekor", "Motif du panneau", "نقشة اللوح"),
  catalog: label("Kataloğu indir", "Download catalog", "Katalog herunterladen", "Télécharger le catalogue", "تحميل الكتالوج"),
  description: label("DY, S ve KL panel desenlerini mekân görünümleriyle inceleyin.", "Explore DY, S and KL panel designs alongside their interior views.", "Entdecken Sie DY-, S- und KL-Dekore mit passenden Raumansichten.", "Découvrez les motifs DY, S et KL et leurs vues en intérieur.", "اكتشف نقوش DY وS وKL مع صورها في المساحات الداخلية."),
  inquiry: label("Merhaba, bu i-WALL duvar paneli hakkında bilgi almak istiyorum:", "Hello, I would like information about this i-WALL wall panel:", "Hallo, ich möchte Informationen zu diesem i-WALL Wandpanel:", "Bonjour, je souhaite des informations sur ce panneau mural i-WALL :", "مرحباً، أود الاستفسار عن لوح الجدران هذا من i-WALL:"),
};
