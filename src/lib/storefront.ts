import type { Locale } from "@/lib/locales";

const text = (tr: string, en: string, de: string, fr: string, ar: string): Record<Locale, string> => ({ tr, en, de, fr, ar });

export const productCopy = {
  panels: text("Duvar Panelleri", "Wall Panels", "Wandplatten", "Panneaux muraux", "كسوات الجدران"),
  description: text("i-WALL lambiri ve duvar paneli seçeneklerini inceleyin.", "Explore i-WALL wall panelling and wall panels.", "Entdecken Sie Wandpaneele und Wandplatten von i-WALL.", "Découvrez les lambris et les panneaux muraux i-WALL.", "اكتشف ألواح وكسوات الجدران من i-WALL."),
  panelNote: text("Modelleri kataloglarımızdan inceleyebilirsiniz.", "Explore the models in our catalogs.", "Entdecken Sie die Modelle in unseren Katalogen.", "Découvrez les modèles dans nos catalogues.", "تعرّف على النماذج في كتالوجاتنا."),
};

export const aboutCopy = {
  introduction: text(
    "i-WALL olarak, yaşam ve çalışma alanları için lambiri ve duvar paneli seçenekleri sunuyoruz. Güzel bir mekânın, doğru malzeme seçimi ve özenli detaylarla başladığına inanıyoruz.",
    "At i-WALL, we offer wall panelling and wall panels for living and working spaces. We believe a welcoming space begins with thoughtful material choices and care for the details.",
    "Bei i-WALL bieten wir Wandpaneele und Wandplatten für Wohn- und Arbeitsräume. Wir glauben, dass ein schöner Raum mit der richtigen Materialwahl und sorgfältigen Details beginnt.",
    "Chez i-WALL, nous proposons des lambris et des panneaux muraux pour les lieux de vie et de travail. Nous croyons qu’un bel espace commence par le choix des matériaux et le soin apporté aux détails.",
    "نقدم في i-WALL ألواح وكسوات للجدران تناسب مساحات المعيشة والعمل. نؤمن بأن جمال المكان يبدأ باختيار المواد المناسبة والاهتمام بالتفاصيل."
  ),
  approachTitle: text("İhtiyacı anlayarak", "Understanding your needs", "Bedürfnisse verstehen", "Comprendre vos besoins", "نفهم احتياجاتكم"),
  approach: text(
    "Önce ihtiyacı dinler, mekâna ve bütçeye uygun seçenekleri birlikte değerlendiririz. Açık iletişimi, ulaşılabilir olmayı ve verdiğimiz sözün arkasında durmayı önemseriz.",
    "We listen first, then explore options that suit your space and budget. Clear communication, being easy to reach and keeping our word matter to us.",
    "Wir hören zuerst zu und besprechen passende Optionen für Ihren Raum und Ihr Budget. Klare Kommunikation, Erreichbarkeit und Verlässlichkeit sind uns wichtig.",
    "Nous écoutons vos besoins pour examiner ensemble les options adaptées à votre espace et à votre budget. Nous privilégions une communication claire, la disponibilité et le respect de nos engagements.",
    "نستمع أولاً إلى احتياجاتكم، ثم نبحث معكم الخيارات التي تناسب المكان والميزانية. نهتم بالتواصل الواضح وسهولة الوصول إلينا والوفاء بوعودنا."
  ),
  ambitionTitle: text("Birlikte büyüyerek", "Growing together", "Gemeinsam wachsen", "Grandir ensemble", "ننمو معاً"),
  ambition: text(
    "Hedefimiz; inşaat, dekorasyon ve yapı market alanlarında Türkiye’nin her yerine ulaşan, güvenle tercih edilen bir marka olmak. Bu yolda ürün çeşitliliğimizi ve iş birliklerimizi adım adım geliştiriyoruz.",
    "Our goal is to become a trusted brand serving all of Türkiye in construction, decoration and building supplies. We are growing our product range and partnerships step by step.",
    "Unser Ziel ist es, in Bau, Dekoration und Baustoffhandel zu einer vertrauenswürdigen Marke in der gesamten Türkei zu wachsen. Dafür entwickeln wir unser Sortiment und unsere Partnerschaften Schritt für Schritt weiter.",
    "Notre ambition est de devenir une marque de confiance dans la construction, la décoration et les matériaux, accessible partout en Türkiye. Nous développons notre offre et nos partenariats pas à pas.",
    "نطمح إلى أن نصبح علامة موثوقة تصل إلى جميع أنحاء تركيا في مجالات البناء والديكور ومواد البناء. ونعمل على توسيع منتجاتنا وشراكاتنا خطوة بخطوة."
  ),
};

export const contactCopy = {
  description: text("Ürünler, kataloglar ve siparişleriniz için bize ulaşın.", "Contact us about products, catalogs and orders.", "Kontaktieren Sie uns zu Produkten, Katalogen und Bestellungen.", "Contactez-nous pour les produits, les catalogues et vos commandes.", "تواصلوا معنا للاستفسار عن المنتجات والكتالوجات والطلبات."),
  name: text("Ad Soyad", "Full name", "Vor- und Nachname", "Nom complet", "الاسم الكامل"),
  optional: text("isteğe bağlı", "optional", "optional", "facultatif", "اختياري"),
  whatsapp: text("WhatsApp ile iletişime geç", "Chat on WhatsApp", "Kontakt über WhatsApp", "Échanger sur WhatsApp", "تواصل عبر واتساب"),
  send: text("WhatsApp’tan gönder", "Send via WhatsApp", "Über WhatsApp senden", "Envoyer via WhatsApp", "إرسال عبر واتساب"),
  formNote: text("Bilgilerinizi doldurun. Mesajınız WhatsApp’ta açılacak; bize ulaşması için orada Gönder’e basın.", "Fill in your details. Your message will open in WhatsApp; press Send there to deliver it to us.", "Füllen Sie Ihre Angaben aus. Ihre Nachricht öffnet sich in WhatsApp. Tippen Sie dort auf Senden, damit sie uns erreicht.", "Remplissez vos coordonnées. Le message s’ouvrira dans WhatsApp ; appuyez sur Envoyer pour nous le transmettre.", "أدخل بياناتك. ستُفتح رسالتك في واتساب؛ اضغط على إرسال هناك لتصل إلينا."),
  location: text("Konum bilgisi", "Location information", "Standortinformationen", "Informations de localisation", "معلومات الموقع"),
  locationAction: text("Konum için bize yazın", "Ask us for the location", "Standort anfragen", "Demander la localisation", "راسلنا لمعرفة الموقع"),
  locationMessage: text("Merhaba, i-WALL konum bilgisini paylaşabilir misiniz?", "Hello, could you share the i-WALL location?", "Hallo, könnten Sie mir den i-WALL Standort senden?", "Bonjour, pourriez-vous m’envoyer la localisation d’i-WALL ?", "مرحباً، هل يمكنكم مشاركة موقع i-WALL؟"),
};
