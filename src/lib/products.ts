import type { Locale } from "@/lib/locales";

export type ProductCategoryKey = "dy" | "s" | "kl" | "lambiri" | "wall-solutions";

export type Product = {
  slug: string;
  category: ProductCategoryKey;
  imageLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  detailImageA?: string;
  detailImageB?: string;
  dimensions: string;
  finishes: string[];
  summary: Record<Locale, string>;
  title: Record<Locale, string>;
  intro: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
  usageAreas: Record<Locale, string[]>;
  technicalSpecs: Record<Locale, Array<{ label: string; value: string }>>;
};

export const productCategories: Record<
  ProductCategoryKey,
  {
    title: Record<Locale, string>;
    description: Record<Locale, string>;
  }
> = {
  dy: {
    title: {
      tr: "Model DY",
      en: "DY Model",
      ar: "موديل DY",
      de: "DY Modell",
      fr: "Modèle DY"
    },
    description: {
      tr: "Keskin çizgiler ve mimari ritim için güçlü yüzey çözümü.",
      en: "A bold surface system for sharp lines and architectural rhythm.",
      ar: "حل سطحي قوي لخطوط حادة وإيقاع معماري واضح.",
      de: "Eine markante Oberflächenlösung für klare Linien und architektonischen Rhythmus.",
      fr: "Une solution de surface affirmée pour des lignes nettes et un rythme architectural."
    }
  },
  s: {
    title: {
      tr: "Model S",
      en: "S Model",
      ar: "موديل S",
      de: "S Modell",
      fr: "Modèle S"
    },
    description: {
      tr: "Akışkan geometri ve dengeli hacim etkisi sunan yüzey dili.",
      en: "A flowing surface language with balanced volume and refined geometry.",
      ar: "لغة سطحية انسيابية بتوازن بصري وهندسة راقية.",
      de: "Eine fließende Oberflächensprache mit ausgewogenem Volumen und eleganter Geometrie.",
      fr: "Un langage de surface fluide avec un volume équilibré et une géométrie raffinée."
    }
  },
  kl: {
    title: {
      tr: "Model KL",
      en: "KL Model",
      ar: "موديل KL",
      de: "KL Modell",
      fr: "Modèle KL"
    },
    description: {
      tr: "Projelerde sade fakat karakterli görünüm için modern panel serisi.",
      en: "A modern panel series for understated yet character-rich project spaces.",
      ar: "سلسلة حديثة للمشاريع تمنح حضورا هادئا وشخصية واضحة.",
      de: "Eine moderne Paneelserie für zurückhaltende, aber charakterstarke Projekte.",
      fr: "Une série moderne pour des projets sobres mais pleins de caractère."
    }
  },
  lambiri: {
    title: {
      tr: "Lambiri Modelleri",
      en: "Lambiri Models",
      ar: "نماذج اللامبري",
      de: "Lambiri Modelle",
      fr: "Modèles Lambiri"
    },
    description: {
      tr: "Doğal ritim ve sıcaklık sunan çizgisel panel aileleri.",
      en: "Linear panel families that add warmth and natural rhythm.",
      ar: "عائلات ألواح خطية تضيف دفئا وإيقاعا طبيعيا.",
      de: "Lineare Paneelfamilien mit Wärme und natürlichem Rhythmus.",
      fr: "Des familles de panneaux linéaires qui apportent chaleur et rythme."
    }
  },
  "wall-solutions": {
    title: {
      tr: "Duvar Panel Çözümleri",
      en: "Wall Panel Solutions",
      ar: "حلول ألواح الجدران",
      de: "Wandpaneel-Lösungen",
      fr: "Solutions de panneaux muraux"
    },
    description: {
      tr: "Farklı proje ölçekleri için tamamlayıcı dekoratif yüzey sistemleri.",
      en: "Complementary decorative surface systems for projects of every scale.",
      ar: "أنظمة أسطح زخرفية مكملة لمشاريع بمقاييس مختلفة.",
      de: "Ergänzende dekorative Oberflächensysteme für Projekte jeder Größenordnung.",
      fr: "Des systèmes de surfaces décoratives complémentaires pour tous types de projets."
    }
  }
};

export const products: Product[] = [
  {
    slug: "dy-rib-01",
    category: "dy",
    imageLabel: "DY Rib 01",
    imageSrc: "/images/dy-rib-01.jpg",
    imageAlt: "DY Rib 01 modern duvar paneli gorseli",
    detailImageA: "/images/iwall-dy-rib-01-detail-a.jpg",
    detailImageB: "/images/iwall-dy-rib-01-detail-b.jpg",
    dimensions: "1220 x 2800 mm",
    finishes: ["Warm Sand", "Graphite Stone", "Soft Greige"],
    title: {
      tr: "DY Rib 01",
      en: "DY Rib 01",
      ar: "DY Rib 01",
      de: "DY Rib 01",
      fr: "DY Rib 01"
    },
    summary: {
      tr: "Dikey ritim ve premium proje dili için güçlü panel seçeneği.",
      en: "A strong panel option for vertical rhythm and premium project language.",
      ar: "خيار قوي لإيقاع عمودي وحضور فاخر في المشاريع.",
      de: "Eine starke Paneeloption für vertikalen Rhythmus und hochwertige Projektwirkung.",
      fr: "Un panneau fort pour un rythme vertical et une expression premium."
    },
    intro: {
      tr: "DY Rib 01, mimari mekanlarda düzenli çizgi etkisi ve rafine yüzey karakteri sunar.",
      en: "DY Rib 01 delivers precise linear depth and a refined architectural surface character.",
      ar: "يوفر DY Rib 01 عمقا خطيا دقيقا وطابعا سطحيا معماريا راقيا.",
      de: "DY Rib 01 bietet präzise lineare Tiefe und eine elegante architektonische Oberflächenwirkung.",
      fr: "DY Rib 01 apporte une profondeur linéaire précise et une présence architecturale raffinée."
    },
    highlights: {
      tr: ["Mimari dikey doku", "Kolay montaj altyapısı", "Projeye uygun yüzey dili"],
      en: ["Architectural vertical texture", "Installation-friendly structure", "Project-ready surface language"],
      ar: ["ملمس عمودي معماري", "بنية تسهل التركيب", "سطح مناسب للمشاريع"],
      de: ["Architektonische Vertikalstruktur", "Montagefreundliche Konstruktion", "Projektgerechte Oberflächensprache"],
      fr: ["Texture verticale architecturale", "Structure pensée pour une pose aisée", "Langage de surface adapté aux projets"]
    },
    usageAreas: {
      tr: ["Konut girişleri", "Lobi duvarları", "Mağaza iç mekanları"],
      en: ["Residential entrances", "Lobby walls", "Retail interiors"],
      ar: ["مداخل سكنية", "جدران ردهات", "مساحات تجزئة"],
      de: ["Wohnungseingänge", "Lobbywände", "Retail-Innenräume"],
      fr: ["Entrées résidentielles", "Murs de lobby", "Espaces retail"]
    },
    technicalSpecs: {
      tr: [
        { label: "Malzeme", value: "Dekoratif yüzey paneli" },
        { label: "Kalınlık", value: "3 mm" },
        { label: "Uygulama", value: "İç mekan duvar yüzeyi" }
      ],
      en: [
        { label: "Material", value: "Decorative panel composite" },
        { label: "Thickness", value: "12 mm" },
        { label: "Application", value: "Interior wall surface" }
      ],
      ar: [
        { label: "الخامة", value: "مركب ألواح زخرفية" },
        { label: "السماكة", value: "12 مم" },
        { label: "الاستخدام", value: "أسطح جدران داخلية" }
      ],
      de: [
        { label: "Material", value: "Dekorative Paneelverbundstruktur" },
        { label: "Stärke", value: "12 mm" },
        { label: "Anwendung", value: "Innenwandoberfläche" }
      ],
      fr: [
        { label: "Matériau", value: "Composite de panneau décoratif" },
        { label: "Épaisseur", value: "12 mm" },
        { label: "Usage", value: "Surface murale intérieure" }
      ]
    }
  },
  {
    slug: "s-curve-02",
    category: "s",
    imageLabel: "S Curve 02",
    imageSrc: "/images/s-curve-02.jpg",
    imageAlt: "S Curve 02 modern duvar paneli gorseli",
    detailImageA: "/images/iwall-s-curve-02-detail-a.jpg",
    detailImageB: "/images/iwall-s-curve-02-detail-b.jpg",
    dimensions: "1220 x 2800 mm",
    finishes: ["Clay Beige", "Ivory Limestone", "Taupe Mineral"],
    title: {
      tr: "S Curve 02",
      en: "S Curve 02",
      ar: "S Curve 02",
      de: "S Curve 02",
      fr: "S Curve 02"
    },
    summary: {
      tr: "Akışkan yüzey kurgusu ile yumuşak ama güçlü mekan etkisi.",
      en: "A fluid surface composition for soft yet confident spatial impact.",
      ar: "تكوين سطحي انسيابي يمنح المساحات حضورا ناعما وواثقا.",
      de: "Eine fließende Oberfläche für weiche, aber souveräne Raumwirkung.",
      fr: "Une composition fluide pour une présence douce mais affirmée."
    },
    intro: {
      tr: "S Curve 02, iç mimari projelerde yumuşak geçişler ve modern hacim algısı oluşturur.",
      en: "S Curve 02 creates smooth transitions and a sophisticated modern sense of volume.",
      ar: "يخلق S Curve 02 انتقالات ناعمة وإحساسا حديثا راقيا بالحجم.",
      de: "S Curve 02 schafft weiche Übergänge und ein modernes, elegantes Volumengefühl.",
      fr: "S Curve 02 crée des transitions douces et une perception de volume contemporaine."
    },
    highlights: {
      tr: ["Organik yüzey hareketi", "Prestijli iç mekanlara uyum", "Kolay kombinlenebilir görünüm"],
      en: ["Organic surface movement", "Suitable for prestige interiors", "Easy to combine across concepts"],
      ar: ["حركة سطحية عضوية", "مناسب للمساحات الراقية", "سهل الدمج مع مفاهيم متعددة"],
      de: ["Organische Oberflächenbewegung", "Geeignet für hochwertige Innenräume", "Einfach mit Konzepten kombinierbar"],
      fr: ["Mouvement de surface organique", "Adapté aux intérieurs premium", "Facile à intégrer dans différents concepts"]
    },
    usageAreas: {
      tr: ["Ofis karşılamaları", "Showroom duvarları", "Otel ortak alanları"],
      en: ["Office receptions", "Showroom walls", "Hotel common areas"],
      ar: ["استقبالات المكاتب", "جدران صالات العرض", "مناطق الفنادق المشتركة"],
      de: ["Office-Empfänge", "Showroom-Wände", "Hotelgemeinschaftsbereiche"],
      fr: ["Réceptions de bureaux", "Murs de showroom", "Espaces communs d'hôtels"]
    },
    technicalSpecs: {
      tr: [
        { label: "Malzeme", value: "Dekoratif yüzey paneli" },
        { label: "Kalınlık", value: "3 mm" },
        { label: "Yüzey", value: "Mat dokulu" }
      ],
      en: [
        { label: "Material", value: "Decorative surface panel" },
        { label: "Thickness", value: "10 mm" },
        { label: "Surface", value: "Matte textured" }
      ],
      ar: [
        { label: "الخامة", value: "لوح سطح زخرفي" },
        { label: "السماكة", value: "10 مم" },
        { label: "السطح", value: "مطفي محبب" }
      ],
      de: [
        { label: "Material", value: "Dekoratives Oberflächenpaneel" },
        { label: "Stärke", value: "10 mm" },
        { label: "Oberfläche", value: "Matt strukturiert" }
      ],
      fr: [
        { label: "Matériau", value: "Panneau de surface décorative" },
        { label: "Épaisseur", value: "10 mm" },
        { label: "Surface", value: "Texturée mate" }
      ]
    }
  },
  {
    slug: "kl-linear-03",
    category: "kl",
    imageLabel: "KL Linear 03",
    imageSrc: "/images/kl-linear-03.jpg",
    imageAlt: "KL Linear 03 modern duvar paneli gorseli",
    detailImageA: "/images/iwall-kl-linear-03-detail-a.jpg",
    detailImageB: "/images/iwall-kl-linear-03-detail-b.jpg",
    dimensions: "1220 x 2800 mm",
    finishes: ["Urban Bone", "Cement Beige", "Soft Ash"],
    title: {
      tr: "KL Linear 03",
      en: "KL Linear 03",
      ar: "KL Linear 03",
      de: "KL Linear 03",
      fr: "KL Linear 03"
    },
    summary: {
      tr: "Minimal çizgilerle modern proje yüzeyleri için rafine çözüm.",
      en: "A refined minimal solution for contemporary project surfaces.",
      ar: "حل أنيق وبسيط لأسطح المشاريع المعاصرة.",
      de: "Eine elegante Minimal-Lösung für zeitgenössische Projektoberflächen.",
      fr: "Une solution minimale et raffinée pour les surfaces contemporaines."
    },
    intro: {
      tr: "KL Linear 03, sade fakat derinlikli çizgileriyle modern ticari ve konut projelerine uyum sağlar.",
      en: "KL Linear 03 balances restraint and texture for modern residential and commercial environments.",
      ar: "يوازن KL Linear 03 بين الهدوء والملمس في البيئات السكنية والتجارية الحديثة.",
      de: "KL Linear 03 verbindet Zurückhaltung und Struktur für moderne Wohn- und Gewerberäume.",
      fr: "KL Linear 03 équilibre sobriété et texture pour les environnements résidentiels et commerciaux."
    },
    highlights: {
      tr: ["Minimalist ritim", "Çeşitli yüzey tonları", "Kurumsal projeler için güçlü görünüm"],
      en: ["Minimal rhythm", "Multiple refined finish tones", "Strong presence for corporate projects"],
      ar: ["إيقاع بسيط", "درجات تشطيب متعددة", "حضور قوي للمشاريع المؤسسية"],
      de: ["Minimaler Rhythmus", "Verschiedene elegante Oberflächentöne", "Starke Wirkung für Corporate-Projekte"],
      fr: ["Rythme minimal", "Plusieurs tonalités de finition", "Présence forte pour les projets corporate"]
    },
    usageAreas: {
      tr: ["Kurumsal ofisler", "Ticari satış alanları", "Mimari proje bölmeleri"],
      en: ["Corporate offices", "Commercial sales spaces", "Architectural feature zones"],
      ar: ["مكاتب مؤسسية", "مساحات بيع تجارية", "مناطق معمارية مميزة"],
      de: ["Corporate Offices", "Kommerzielle Verkaufsflächen", "Architektonische Akzentzonen"],
      fr: ["Bureaux corporate", "Espaces de vente", "Zones architecturales signalétiques"]
    },
    technicalSpecs: {
      tr: [
        { label: "Malzeme", value: "Dekoratif yüzey paneli" },
        { label: "Kalınlık", value: "3 mm" },
        { label: "Sınıf", value: "İç mekan kaplama" }
      ],
      en: [
        { label: "Material", value: "Composite decorative panel" },
        { label: "Thickness", value: "11 mm" },
        { label: "Class", value: "Interior cladding" }
      ],
      ar: [
        { label: "الخامة", value: "لوح زخرفي مركب" },
        { label: "السماكة", value: "11 مم" },
        { label: "الفئة", value: "كسوة داخلية" }
      ],
      de: [
        { label: "Material", value: "Dekorativer Verbundpaneel" },
        { label: "Stärke", value: "11 mm" },
        { label: "Klasse", value: "Innenverkleidung" }
      ],
      fr: [
        { label: "Matériau", value: "Panneau décoratif composite" },
        { label: "Épaisseur", value: "11 mm" },
        { label: "Classe", value: "Revêtement intérieur" }
      ]
    }
  },
  {
    slug: "lambiri-oak-04",
    category: "lambiri",
    imageLabel: "Lambiri Oak 04",
    imageSrc: "/images/lambiri-oak-04.jpg",
    imageAlt: "Lambiri Oak 04 modern duvar paneli gorseli",
    dimensions: "190 x 2900 mm",
    finishes: ["Natural Oak", "Smoked Oak", "Light Walnut"],
    title: {
      tr: "Lambiri Oak 04",
      en: "Lambiri Oak 04",
      ar: "Lambiri Oak 04",
      de: "Lambiri Oak 04",
      fr: "Lambiri Oak 04"
    },
    summary: {
      tr: "Sıcak doku ve çizgisel ritim sunan premium lambiri çözümü.",
      en: "A premium lambiri solution combining warmth, rhythm, and clean detailing.",
      ar: "حل لامبري فاخر يجمع الدفء والإيقاع والتفاصيل النظيفة.",
      de: "Eine hochwertige Lambiri-Lösung mit Wärme, Rhythmus und klaren Details.",
      fr: "Une solution lambiri premium alliant chaleur, rythme et précision."
    },
    intro: {
      tr: "Lambiri Oak 04, doğal görünüm isteyen yaşam ve ticari alanlarda sıcak bir mimari atmosfer oluşturur.",
      en: "Lambiri Oak 04 brings a warm architectural atmosphere to hospitality, retail, and residential spaces.",
      ar: "يمنح Lambiri Oak 04 أجواء معمارية دافئة للمساحات السكنية والتجارية والضيافة.",
      de: "Lambiri Oak 04 schafft eine warme architektonische Atmosphäre für Wohnen, Retail und Hospitality.",
      fr: "Lambiri Oak 04 crée une atmosphère chaleureuse pour l'habitat, l'hôtellerie et le retail."
    },
    highlights: {
      tr: ["Ahşap etkili görünüm", "Lineer yüzey uyumu", "Konforlu mekan algısı"],
      en: ["Wood-inspired appearance", "Linear surface harmony", "Comfort-led spatial mood"],
      ar: ["مظهر مستوحى من الخشب", "انسجام خطي في السطح", "إحساس مريح في المساحة"],
      de: ["Holzinspirierte Optik", "Lineare Oberflächenharmonie", "Angenehme Raumwirkung"],
      fr: ["Aspect inspiré du bois", "Harmonie linéaire", "Ambiance spatiale confortable"]
    },
    usageAreas: {
      tr: ["Konut salonları", "Kafe ve restoranlar", "Butik mağazalar"],
      en: ["Living spaces", "Cafes and restaurants", "Boutique stores"],
      ar: ["مساحات معيشة", "مقاه ومطاعم", "متاجر بوتيك"],
      de: ["Wohnbereiche", "Cafés und Restaurants", "Boutiquen"],
      fr: ["Espaces de vie", "Cafés et restaurants", "Boutiques"]
    },
    technicalSpecs: {
      tr: [
        { label: "Malzeme", value: "Dekoratif lambiri panel" },
        { label: "Kalınlık", value: "14 mm" },
        { label: "Kurulum", value: "Düşey ve yatay uygulama" }
      ],
      en: [
        { label: "Material", value: "Decorative lambiri panel" },
        { label: "Thickness", value: "14 mm" },
        { label: "Installation", value: "Vertical and horizontal application" }
      ],
      ar: [
        { label: "الخامة", value: "لوح لامبري زخرفي" },
        { label: "السماكة", value: "14 مم" },
        { label: "التركيب", value: "تطبيق رأسي وأفقي" }
      ],
      de: [
        { label: "Material", value: "Dekoratives Lambiri-Paneel" },
        { label: "Stärke", value: "14 mm" },
        { label: "Montage", value: "Vertikal und horizontal" }
      ],
      fr: [
        { label: "Matériau", value: "Panneau lambiri décoratif" },
        { label: "Épaisseur", value: "14 mm" },
        { label: "Pose", value: "Application verticale et horizontale" }
      ]
    }
  },
  {
    slug: "acoustic-grid-05",
    category: "wall-solutions",
    imageLabel: "Acoustic Grid 05",
    imageSrc: "/images/acoustic-grid-05.jpg",
    imageAlt: "Acoustic Grid 05 modern duvar paneli gorseli",
    dimensions: "600 x 2400 mm",
    finishes: ["Fossil Beige", "Urban Gray", "Deep Olive"],
    title: {
      tr: "Acoustic Grid 05",
      en: "Acoustic Grid 05",
      ar: "Acoustic Grid 05",
      de: "Acoustic Grid 05",
      fr: "Acoustic Grid 05"
    },
    summary: {
      tr: "Dekoratif görünüm ile fonksiyonelliği birleştiren tamamlayıcı panel.",
      en: "A complementary panel solution uniting decorative presence and practical performance.",
      ar: "حل مكمل يجمع بين الحضور الزخرفي والأداء العملي.",
      de: "Eine ergänzende Paneellösung, die Gestaltung und Funktion vereint.",
      fr: "Une solution complémentaire qui associe présence décorative et performance."
    },
    intro: {
      tr: "Acoustic Grid 05, proje alanlarında modern düzen duygusu ve teknik esneklik sağlar.",
      en: "Acoustic Grid 05 supports contemporary project spaces with organized geometry and technical flexibility.",
      ar: "يدعم Acoustic Grid 05 المساحات الحديثة بهندسة منظمة ومرونة تقنية.",
      de: "Acoustic Grid 05 unterstützt moderne Projekte mit geordneter Geometrie und technischer Flexibilität.",
      fr: "Acoustic Grid 05 accompagne les projets contemporains avec une géométrie maîtrisée et une vraie flexibilité technique."
    },
    highlights: {
      tr: ["Teknik belgeye uygun yapı", "Projelerde tamamlayıcı çözüm", "Modern yüzey kimliği"],
      en: ["Specification-ready structure", "Complementary for projects", "Contemporary surface identity"],
      ar: ["بنية مناسبة للمواصفات", "حل مكمل للمشاريع", "هوية سطحية حديثة"],
      de: ["Spezifikationsgerechte Struktur", "Ergänzende Projektlösung", "Zeitgemäße Oberflächenidentität"],
      fr: ["Structure prête pour les spécifications", "Solution complémentaire", "Identité de surface contemporaine"]
    },
    usageAreas: {
      tr: ["Toplantı odaları", "Proje ofisleri", "Ticari iç mekanlar"],
      en: ["Meeting rooms", "Project offices", "Commercial interiors"],
      ar: ["غرف اجتماعات", "مكاتب مشاريع", "مساحات داخلية تجارية"],
      de: ["Besprechungsräume", "Projektbüros", "Gewerbliche Innenräume"],
      fr: ["Salles de réunion", "Bureaux projets", "Intérieurs commerciaux"]
    },
    technicalSpecs: {
      tr: [
        { label: "Malzeme", value: "Teknik dekoratif panel" },
        { label: "Kalınlık", value: "18 mm" },
        { label: "Opsiyon", value: "Ölçü ve desen varyasyonu" }
      ],
      en: [
        { label: "Material", value: "Technical decorative panel" },
        { label: "Thickness", value: "18 mm" },
        { label: "Option", value: "Size and pattern variation" }
      ],
      ar: [
        { label: "الخامة", value: "لوح زخرفي تقني" },
        { label: "السماكة", value: "18 مم" },
        { label: "الخيار", value: "تنويعات في المقاس والنمط" }
      ],
      de: [
        { label: "Material", value: "Technisches Dekorpaneel" },
        { label: "Stärke", value: "18 mm" },
        { label: "Option", value: "Format- und Muster-Varianten" }
      ],
      fr: [
        { label: "Matériau", value: "Panneau décoratif technique" },
        { label: "Épaisseur", value: "18 mm" },
        { label: "Option", value: "Variantes de dimensions et motifs" }
      ]
    }
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string, category: ProductCategoryKey) {
  const sameCategory = products.filter((product) => product.slug !== slug && product.category === category);

  if (sameCategory.length >= 3) {
    return sameCategory.slice(0, 3);
  }

  const fallback = products.filter((product) => product.slug !== slug && product.category !== category);
  return [...sameCategory, ...fallback].slice(0, 3);
}
