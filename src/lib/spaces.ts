import type { Locale } from "@/lib/locales";
import assets from "@/lib/space-models.json";

type Localized = Record<Locale, string>;
const label = (tr: string, en: string, de: string, fr: string, ar: string): Localized => ({ tr, en, de, fr, ar });

export const spaceCopy = {
  nav: label("Mekânlar", "Spaces", "Räume", "Espaces", "المساحات"),
  title: label("Sektörel Mekânlar", "Spaces for Every Sector", "Räume für jede Branche", "Espaces par secteur", "مساحات لكل قطاع"),
  homeTitle: label("Farklı Mekânlarda i-WALL", "i-WALL in Different Spaces", "i-WALL in verschiedenen Räumen", "i-WALL dans différents espaces", "i-WALL في مساحات متنوعة"),
  explore: label("Mekânları keşfet", "Explore spaces", "Räume entdecken", "Découvrir les espaces", "اكتشف المساحات"),
  description: label("i-WALL ile ev, mağaza, ofis ve farklı sektörlerde uygulama fikirleri.", "Interior ideas for homes, shops, offices and more with i-WALL.", "Raumideen für Zuhause, Geschäfte, Büros und mehr mit i-WALL.", "Des inspirations i-WALL pour la maison, les boutiques, les bureaux et plus.", "أفكار من i-WALL للمنازل والمتاجر والمكاتب وغيرها."),
  all: label("Tümü", "All", "Alle", "Tous", "الكل"),
  filter: label("Kullanım alanı", "Type of space", "Raumtyp", "Type d’espace", "نوع المساحة"),
  catalog: label("Sektörel kataloğu indir", "Download sector catalog", "Branchenkatalog herunterladen", "Télécharger le catalogue sectoriel", "تحميل كتالوج القطاعات"),
  roomCatalog: label("Mekân Kataloğu", "Interior Catalog", "Raumkatalog", "Catalogue d’intérieurs", "كتالوج المساحات الداخلية"),
  sectorCatalog: label("Sektörel Mekân Kataloğu", "Sector Interiors Catalog", "Branchen-Raumkatalog", "Catalogue d’intérieurs par secteur", "كتالوج مساحات القطاعات"),
  roomCaption: label("Mekân uygulamaları", "Interior ideas", "Raumideen", "Idées d’intérieurs", "أفكار للمساحات الداخلية"),
  sectorCaption: label("Farklı sektörler için mekân fikirleri", "Interior ideas for different sectors", "Raumideen für verschiedene Branchen", "Des idées d’intérieurs pour chaque secteur", "أفكار للمساحات في مختلف القطاعات"),
  downloadImage: label("Görseli indir", "Download image", "Bild herunterladen", "Télécharger l’image", "تحميل الصورة"),
};

export const spaceCategories = {
  home: label("Ev", "Home", "Zuhause", "Maison", "المنزل"),
  retail: label("Mağaza", "Retail", "Einzelhandel", "Boutiques", "المتاجر"),
  office: label("Ofis", "Office", "Büro", "Bureaux", "المكاتب"),
  dining: label("Yeme & İçme", "Food & Drink", "Gastronomie", "Restauration", "المطاعم والمقاهي"),
  health: label("Sağlık", "Healthcare", "Gesundheit", "Santé", "الرعاية الصحية"),
  education: label("Eğitim", "Education", "Bildung", "Éducation", "التعليم"),
  hospitality: label("Otel & Etkinlik", "Hotels & Events", "Hotels & Events", "Hôtels et événements", "الفنادق والفعاليات"),
  lifestyle: label("Spor & Bakım", "Wellness & Leisure", "Wellness & Freizeit", "Bien-être et loisirs", "العناية والترفيه"),
};

export type SpaceCategory = keyof typeof spaceCategories;
const sectors: Array<[SpaceCategory, Localized]> = [
  ["retail", label("Kuyumcu", "Jewellery Store", "Juwelier", "Bijouterie", "متجر مجوهرات")],
  ["office", label("Ofis", "Office", "Büro", "Bureau", "مكتب")],
  ["dining", label("Restoran", "Restaurant", "Restaurant", "Restaurant", "مطعم")],
  ["retail", label("Otomobil Galerisi", "Car Showroom", "Autohaus", "Concession automobile", "معرض سيارات")],
  ["retail", label("Gelinlik Mağazası", "Bridal Boutique", "Brautmodengeschäft", "Boutique de robes de mariée", "متجر فساتين زفاف")],
  ["office", label("Hukuk Bürosu", "Law Office", "Anwaltskanzlei", "Cabinet d’avocats", "مكتب محاماة")],
  ["hospitality", label("Butik Otel", "Boutique Hotel", "Boutiquehotel", "Hôtel boutique", "فندق بوتيك")],
  ["home", label("Yatak Odası", "Bedroom", "Schlafzimmer", "Chambre", "غرفة نوم")],
  ["lifestyle", label("Erkek Kuaförü", "Barbershop", "Barbershop", "Barbier", "صالون حلاقة")],
  ["health", label("Diş Kliniği", "Dental Clinic", "Zahnarztpraxis", "Cabinet dentaire", "عيادة أسنان")],
  ["lifestyle", label("Spor Salonu", "Fitness Studio", "Fitnessstudio", "Salle de sport", "صالة رياضية")],
  ["retail", label("Saat Mağazası", "Watch Boutique", "Uhrengeschäft", "Boutique d’horlogerie", "متجر ساعات")],
  ["home", label("Ev / Salon", "Living Room", "Wohnzimmer", "Salon", "غرفة معيشة")],
  ["health", label("Hastane", "Hospital", "Krankenhaus", "Hôpital", "مستشفى")],
  ["lifestyle", label("Güzellik Salonu", "Beauty Salon", "Schönheitssalon", "Institut de beauté", "صالون تجميل")],
  ["hospitality", label("Düğün Salonu", "Wedding Venue", "Hochzeitslocation", "Salle de réception", "قاعة أفراح")],
  ["education", label("Okul", "School", "Schule", "École", "مدرسة")],
  ["lifestyle", label("Spa & Wellness", "Spa & Wellness", "Spa & Wellness", "Spa et bien-être", "سبا وعناية")],
  ["education", label("Kütüphane", "Library", "Bibliothek", "Bibliothèque", "مكتبة")],
  ["dining", label("Kafe", "Café", "Café", "Café", "مقهى")],
  ["retail", label("Moda Mağazası", "Fashion Boutique", "Modeboutique", "Boutique de mode", "متجر أزياء")],
  ["office", label("Emlak Ofisi", "Real Estate Office", "Immobilienbüro", "Agence immobilière", "مكتب عقارات")],
  ["lifestyle", label("Müzik Stüdyosu", "Music Studio", "Musikstudio", "Studio de musique", "استوديو موسيقى")],
  ["health", label("Eczane", "Pharmacy", "Apotheke", "Pharmacie", "صيدلية")],
  ["dining", label("Pastane", "Patisserie", "Konditorei", "Pâtisserie", "محل حلويات")],
  ["office", label("Toplantı Odası", "Meeting Room", "Besprechungsraum", "Salle de réunion", "غرفة اجتماعات")],
  ["home", label("Çocuk Odası", "Children’s Room", "Kinderzimmer", "Chambre d’enfant", "غرفة أطفال")],
  ["home", label("TV Ünitesi", "TV Wall", "TV-Wand", "Mur TV", "جدار التلفاز")],
  ["health", label("Veteriner Kliniği", "Veterinary Clinic", "Tierarztpraxis", "Clinique vétérinaire", "عيادة بيطرية")],
];

export const spaceModels = assets.map((asset, index) => ({ ...asset, category: sectors[index][0], sector: sectors[index][1] }));
