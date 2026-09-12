import type { Locale } from "@/lib/locales";

const text = (tr: string, en: string, de: string, fr: string, ar: string): Record<Locale, string> => ({ tr, en, de, fr, ar });
export const brandStory = {
  title: text("Malzemeden mekâna, özenle.", "From material to space, with care.", "Vom Material zum Raum. Mit Sorgfalt.", "De la matière à l’espace, avec soin.", "من المادة إلى المكان، بعناية."),
  detailTitle: text("Bir duvardan daha fazlası", "More than a wall", "Mehr als eine Wand", "Plus qu’un mur", "أكثر من مجرد جدار"),
  detail: text(
    "Bir mekânın hissini yalnızca mobilyalar değil; dokular, renkler ve ışıkla kurduğu ilişki de belirler. i-WALL’da duvar yüzeylerini, bu bütünün önemli bir parçası olarak görüyoruz. Evlerden iş yerlerine uzanan farklı ihtiyaçlar için estetik ve kullanımı birlikte düşünerek seçenekler sunuyoruz.",
    "The feel of a space comes from more than its furniture. Texture, colour and light all play a part. At i-WALL, we see wall surfaces as an essential part of that whole, considering appearance and use together for homes and workplaces.",
    "Die Wirkung eines Raumes entsteht nicht nur durch Möbel, sondern auch durch Texturen, Farben und Licht. Bei i-WALL betrachten wir Wandoberflächen als wichtigen Teil dieses Ganzen und verbinden Gestaltung und Nutzung für Wohn- und Arbeitsräume.",
    "L’atmosphère d’un lieu ne dépend pas seulement du mobilier, mais aussi des textures, des couleurs et de la lumière. Chez i-WALL, les surfaces murales participent à cet ensemble. Nous pensons ensemble l’esthétique et l’usage, pour l’habitat comme pour le travail.",
    "لا يتشكل إحساس المكان بالأثاث وحده؛ فالملمس واللون والضوء عناصر أساسية أيضاً. ننظر في i-WALL إلى أسطح الجدران بوصفها جزءاً من هذا التكامل، ونفكر في الجمال والاستخدام معاً لتلبية احتياجات المنازل وأماكن العمل."
  ),
  visionTitle: text("Güvenle büyüyen bir gelecek", "A future built on trust", "Mit Vertrauen in die Zukunft", "Un avenir fondé sur la confiance", "مستقبل ينمو بالثقة"),
  values: [
    {
      title: text("Seçimde özen", "Care in selection", "Sorgfältige Auswahl", "Le soin du choix", "عناية في الاختيار"),
      body: text("Deseni tek başına değil, kullanılacağı mekânla birlikte değerlendiririz. Amacımız, farklı zevklere ve ihtiyaçlara anlamlı seçenekler sunmaktır.", "We consider a design together with the space where it will be used, offering considered options for different tastes and needs.", "Wir betrachten ein Dekor zusammen mit seinem künftigen Raum und bieten durchdachte Optionen für unterschiedliche Wünsche und Bedürfnisse.", "Nous considérons chaque motif avec l’espace auquel il se destine, pour proposer des choix adaptés à différents goûts et besoins.", "نقيّم التصميم مع المكان الذي سيُستخدم فيه، لنقدم خيارات مدروسة تناسب مختلف الأذواق والاحتياجات.")
    },
    {
      title: text("İletişimde açıklık", "Clarity in communication", "Klare Kommunikation", "La clarté des échanges", "وضوح في التواصل"),
      body: text("Model seçiminden ürün bilgisine kadar anlaşılır ve ulaşılabilir bir iletişim kurmayı önemseriz. Soruları dinler, birlikte doğru seçime odaklanırız.", "From choosing a model to understanding product details, we value clear, accessible communication. We listen and work towards the right choice together.", "Von der Modellauswahl bis zu Produktdetails legen wir Wert auf verständliche und erreichbare Beratung. Wir hören zu und suchen gemeinsam die passende Wahl.", "Du choix du modèle aux informations produit, nous privilégions un échange clair et accessible. Nous écoutons pour trouver ensemble le choix adapté.", "نهتم بتواصل واضح وسهل، من اختيار النموذج إلى معرفة تفاصيل المنتج. نستمع إلى الأسئلة ونبحث معكم عن الخيار المناسب.")
    },
    {
      title: text("İş birliğinde süreklilik", "Lasting partnerships", "Langfristige Partnerschaften", "Des relations durables", "شراكات مستمرة"),
      body: text("Müşterilerimiz, ustalar, mimarlar ve iş ortaklarımızla uzun vadeli ilişkiler kurmayı hedefleriz. Büyümeyi, birlikte üretilen değerle anlamlı buluruz.", "We aim to build lasting relationships with customers, installers, architects and partners. For us, growth matters when it creates value together.", "Wir streben langfristige Beziehungen zu Kunden, Handwerkern, Architekten und Partnern an. Wachstum ist für uns sinnvoll, wenn gemeinsam Wert entsteht.", "Nous souhaitons construire des relations durables avec nos clients, artisans, architectes et partenaires. La croissance prend son sens dans la valeur créée ensemble.", "نهدف إلى بناء علاقات طويلة الأمد مع العملاء والحرفيين والمهندسين المعماريين وشركائنا. ونرى قيمة النمو فيما نحققه معاً.")
    }
  ]
};
