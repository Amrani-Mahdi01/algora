export type Lang = "en" | "fr" | "ar";

// ─────────────────────────────────────────────────────────────────────────────
// OVERVIEW PAGE  (/services)
// ─────────────────────────────────────────────────────────────────────────────

export interface ServiceOverviewI18n {
  category: string;
  headline: string;
  desc: string;
  highlightLabels: readonly [string, string, string];
  features: readonly string[];
}

export interface OverviewFaq { q: string; a: string }

export interface OverviewI18n {
  badge: string;
  h1Lines: readonly string[];
  sub: string;
  scroll: string;
  sidebarLabel: string;
  viewDetails: string;
  exploreService: string;
  faqLabel: string;
  faqTitleLines: readonly string[];
  faqSub: string;
  stillHaveQ: string;
  askUs: string;
  services: readonly ServiceOverviewI18n[];
  faqs: readonly OverviewFaq[];
}

const OVERVIEW: Record<Lang, OverviewI18n> = {
  en: {
    badge: "Our Services",
    h1Lines: ["We Build.", "We Scale."],
    sub: "From a startup's first product to an enterprise's digital transformation — web, mobile, desktop, automation, and AI engineered to last.",
    scroll: "Scroll",
    sidebarLabel: "Our Services",
    viewDetails: "View details",
    exploreService: "Explore service",
    faqLabel: "— FAQ",
    faqTitleLines: ["Common Questions", "Answered Honestly."],
    faqSub: "Everything you need to know before we start building together.",
    stillHaveQ: "Still have questions? We respond to every enquiry within 24 hours.",
    askUs: "Ask us directly",
    services: [
      {
        category: "Web · SaaS · Enterprise",
        headline: "Platforms built to handle real scale.",
        desc: "From early-stage MVPs to multi-tenant enterprise SaaS — we architect, build, and ship full-stack web applications that are fast, reliable, and ready for whatever comes next. Every delivery includes a clean API layer, tested codebase, and CI/CD from day one.",
        highlightLabels: ["data refresh on live dashboards", "uptime on production deployments", "faster time-to-market with our stack"],
        features: [
          "Multi-tenant SaaS & B2B platform architecture",
          "Real-time dashboards with WebSocket data streams",
          "OAuth 2.0, SSO, MFA & role-based access control",
          "Third-party API integrations & event-driven webhooks",
          "Admin panels, audit logs & advanced reporting",
          "Core Web Vitals, Lighthouse scores & SEO foundations",
        ],
      },
      {
        category: "iOS · Android · Cross-platform",
        headline: "Native-quality apps at cross-platform speed.",
        desc: "We ship iOS and Android applications that feel genuinely native — 60fps animations, deep OS integration, offline capability, and a UX that earns five-star reviews. One shared codebase, two polished products, with zero compromises on performance or feel.",
        highlightLabels: ["average App Store rating on shipped apps", "faster delivery vs. two separate native teams", "offline functionality as a default, not an afterthought"],
        features: [
          "Cross-platform React Native with native module bridges",
          "Offline-first architecture with local SQLite / MMKV",
          "Push notifications, background fetch & silent updates",
          "In-app payments via Stripe, Apple Pay & Google Pay",
          "Camera, GPS, biometrics & platform-specific device APIs",
          "App Store & Google Play submission & review support",
        ],
      },
      {
        category: "Windows · macOS · Linux",
        headline: "Desktop software professionals actually use.",
        desc: "Some workflows demand more than a browser tab — offline reliability, hardware access, native OS integration, and the kind of performance that web apps simply can't match. We build cross-platform desktop applications that feel at home on every operating system.",
        highlightLabels: ["from a single shared codebase", "typical installer size with Tauri", "updates with rollback and staged rollout"],
        features: [
          "Windows, macOS & Linux from one shared codebase",
          "Native OS integration — tray, notifications, file system",
          "Offline-first with embedded SQLite database",
          "Auto-update system with staged rollout & rollback",
          "Hardware access: serial ports, USB devices, printers",
          "Code-signed installers for trusted enterprise distribution",
        ],
      },
      {
        category: "RPA · Pipelines · Orchestration",
        headline: "Turn repetitive work into reliable systems.",
        desc: "Every manual, repeated task in your business is a cost centre and a risk. We audit your workflows, identify the automation opportunities with the highest ROI, and build reliable, monitored systems that run 24/7 — without the human error.",
        highlightLabels: ["reduction in manual processing hours (avg)", "operation with alerting & automatic retry logic", "mean time to alert on pipeline failures"],
        features: [
          "RPA bots for web scraping, form filling & data entry",
          "Scheduled & event-driven data pipeline orchestration",
          "Multi-system API integration & workflow chaining",
          "Document parsing, OCR & structured data extraction",
          "Error handling, retry logic & dead-letter queues",
          "Monitoring dashboards, Slack alerts & full audit logs",
        ],
      },
      {
        category: "LLM · RAG · Computer Vision",
        headline: "AI with measurable business impact.",
        desc: "We build AI that earns its place in your product with a clear ROI — not a chatbot bolted on the side. Custom LLM pipelines, RAG systems, computer vision models, and predictive analytics that reduce real operational costs and create genuine competitive advantages.",
        highlightLabels: ["live support volume reduction via AI triage", "per week saved through intelligent automation", "Arabic-first NLP for the MENA market"],
        features: [
          "Custom LLM fine-tuning & advanced prompt engineering",
          "RAG pipelines with vector search & context grounding",
          "AI customer support, ticket triage & escalation routing",
          "Computer vision, image classification & OCR pipelines",
          "Predictive analytics, demand forecasting & anomaly detection",
          "Arabic-first NLP — dialect-aware models for the MENA region",
        ],
      },
    ],
    faqs: [
      {
        q: "How do you scope and price a software project?",
        a: "Every engagement starts with a discovery session to understand your goals, constraints, and technical requirements. We then produce a detailed brief and a fixed-scope quote. For ongoing work we offer flexible monthly retainers. Scope changes are discussed and priced transparently before they happen — no surprises.",
      },
      {
        q: "How long does a typical project take from kickoff to launch?",
        a: "A focused MVP typically takes 6–12 weeks. A full enterprise platform runs 3–6 months. Timeline depends on scope, integrations, and decision velocity on your side. We share a detailed roadmap at project start and track progress in weekly syncs with live demos.",
      },
      {
        q: "Do you work with early-stage startups as well as enterprises?",
        a: "Yes — we've taken products from napkin sketch to 10,000+ active users, and we've also led the engineering side of large-scale digital transformation projects. What matters is that you have a clear problem and the commitment to solve it properly.",
      },
      {
        q: "What happens after the product launches?",
        a: "Every engagement includes 30 days of post-launch support as standard — bug fixes, monitoring, and immediate response to any production issues. After that, we offer structured maintenance retainers covering ongoing fixes, performance tuning, and iterative feature development.",
      },
      {
        q: "Can you work with or extend our existing systems?",
        a: "Absolutely. We regularly work with legacy codebases, third-party APIs, and existing infrastructure. We'll audit what you have, identify the best integration points, and build around your constraints rather than forcing a full rewrite unless one is genuinely warranted.",
      },
      {
        q: "Who owns the code and IP after the project?",
        a: "You do — fully. We sign NDAs before any discussion of proprietary details, and all intellectual property produced during an engagement transfers to you at project completion. We retain nothing. You get the full repository, documentation, and deployment assets.",
      },
      {
        q: "Which industries do you have the most experience in?",
        a: "Our deepest domain expertise is in FinTech, Healthcare, EdTech, SaaS, and Logistics — sectors where software must be reliable, performant, and scale-ready. Our engineering approach adapts across industries: if you're solving a real problem with software, we can help.",
      },
      {
        q: "How do we get started?",
        a: "Fill in the contact form with a brief description of what you're building and your rough timeline. We respond within 24 hours to schedule a 30-minute discovery call. From there, we move quickly — most projects have a scoping document within a week of the first call.",
      },
    ],
  },

  fr: {
    badge: "Nos Services",
    h1Lines: ["On Construit.", "On Évolue."],
    sub: "Du premier produit d'une startup à la transformation numérique d'une entreprise — web, mobile, bureau, automatisation et IA, conçus pour durer.",
    scroll: "Défiler",
    sidebarLabel: "Nos services",
    viewDetails: "Voir les détails",
    exploreService: "Explorer le service",
    faqLabel: "— FAQ",
    faqTitleLines: ["Questions Fréquentes", "Répondues Honnêtement."],
    faqSub: "Tout ce que vous devez savoir avant de commencer à construire ensemble.",
    stillHaveQ: "Vous avez encore des questions ? Nous répondons à chaque demande sous 24 heures.",
    askUs: "Demandez-nous directement",
    services: [
      {
        category: "Web · SaaS · Entreprise",
        headline: "Des plateformes conçues pour la vraie montée en charge.",
        desc: "Des MVPs en phase initiale aux SaaS d'entreprise multi-locataires — nous architecturons, construisons et livrons des applications web full-stack rapides, fiables et prêtes pour la suite. Chaque livraison inclut une couche API propre, un code testé et un CI/CD dès le premier jour.",
        highlightLabels: ["actualisation des données sur les tableaux de bord en direct", "disponibilité sur les déploiements en production", "réduction du time-to-market avec notre stack"],
        features: [
          "Architecture SaaS multi-locataire & plateformes B2B",
          "Tableaux de bord en temps réel avec flux de données WebSocket",
          "OAuth 2.0, SSO, MFA & contrôle d'accès basé sur les rôles",
          "Intégrations API tierces & webhooks pilotés par événements",
          "Panneaux d'administration, journaux d'audit & reporting avancé",
          "Core Web Vitals, scores Lighthouse & fondations SEO",
        ],
      },
      {
        category: "iOS · Android · Multi-plateformes",
        headline: "Des apps de qualité native à la vitesse du multi-plateforme.",
        desc: "Nous livrons des applications iOS et Android qui se sentent genuinement natives — animations à 60fps, intégration OS profonde, capacité hors ligne et UX qui décroche des avis cinq étoiles. Une base de code partagée, deux produits soignés, sans compromis sur les performances.",
        highlightLabels: ["note moyenne App Store sur les apps livrées", "livraison plus rapide vs. deux équipes natives séparées", "fonctionnalité hors ligne dès le premier jour, pas en option"],
        features: [
          "React Native multi-plateformes avec ponts de modules natifs",
          "Architecture offline-first avec SQLite / MMKV local",
          "Notifications push, fetch en arrière-plan & mises à jour silencieuses",
          "Paiements intégrés via Stripe, Apple Pay & Google Pay",
          "Caméra, GPS, biométrie & APIs spécifiques à la plateforme",
          "Soumission & accompagnement App Store & Google Play",
        ],
      },
      {
        category: "Windows · macOS · Linux",
        headline: "Des logiciels desktop que les professionnels utilisent vraiment.",
        desc: "Certains workflows exigent plus qu'un onglet de navigateur — fiabilité hors ligne, accès matériel, intégration OS native et le niveau de performance que les apps web ne peuvent tout simplement pas atteindre. Nous construisons des applications desktop multi-plateformes qui s'intègrent naturellement à chaque OS.",
        highlightLabels: ["à partir d'une seule base de code partagée", "taille typique d'installateur avec Tauri", "mises à jour automatiques avec rollback et déploiement progressif"],
        features: [
          "Windows, macOS & Linux depuis une seule base de code",
          "Intégration OS native — tray système, notifications, fichiers",
          "Offline-first avec base de données SQLite embarquée",
          "Système de mise à jour automatique avec rollback & déploiement progressif",
          "Accès matériel : ports série, périphériques USB, imprimantes",
          "Installateurs signés pour une distribution enterprise de confiance",
        ],
      },
      {
        category: "RPA · Pipelines · Orchestration",
        headline: "Transformez le travail répétitif en systèmes fiables.",
        desc: "Chaque tâche manuelle et répétitive dans votre entreprise est un centre de coûts et un risque. Nous auditons vos workflows, identifions les opportunités d'automatisation à ROI le plus élevé et construisons des systèmes fiables et monitorés qui tournent 24h/24 — sans erreur humaine.",
        highlightLabels: ["réduction des heures de traitement manuel (moy.)", "opération avec alertes et logique de retry automatique", "délai moyen d'alerte sur les défaillances de pipeline"],
        features: [
          "Bots RPA pour le scraping web, la saisie de formulaires et la data entry",
          "Orchestration de pipelines de données planifiés & événementiels",
          "Intégration multi-systèmes & chaînage de workflows",
          "Parsing de documents, OCR & extraction de données structurées",
          "Gestion des erreurs, logique de retry & dead-letter queues",
          "Tableaux de bord de monitoring, alertes Slack & journaux d'audit complets",
        ],
      },
      {
        category: "LLM · RAG · Vision par Ordinateur",
        headline: "IA avec un impact business mesurable.",
        desc: "Nous construisons de l'IA qui mérite sa place dans votre produit avec un ROI clair — pas un chatbot ajouté en surface. Pipelines LLM sur mesure, systèmes RAG, modèles de vision par ordinateur et analytics prédictif qui réduisent les coûts opérationnels réels.",
        highlightLabels: ["réduction du volume de support en direct par triage IA", "économisées par semaine via l'automatisation intelligente", "NLP arabe natif pour le marché MENA"],
        features: [
          "Fine-tuning LLM personnalisé & ingénierie avancée des prompts",
          "Pipelines RAG avec recherche vectorielle & ancrage contextuel",
          "Support client IA, triage de tickets & routage des escalades",
          "Vision par ordinateur, classification d'images & pipelines OCR",
          "Analytics prédictif, prévision de la demande & détection d'anomalies",
          "NLP arabe natif — modèles sensibles aux dialectes pour la région MENA",
        ],
      },
    ],
    faqs: [
      {
        q: "Comment scopez-vous et tarifez-vous un projet logiciel ?",
        a: "Chaque mission commence par une session de découverte pour comprendre vos objectifs, contraintes et besoins techniques. Nous produisons ensuite un brief détaillé et un devis à périmètre fixe. Pour les travaux continus, nous proposons des forfaits mensuels flexibles. Les changements de périmètre sont discutés et tarifés de manière transparente avant qu'ils se produisent — sans surprises.",
      },
      {
        q: "Combien de temps prend un projet typique du démarrage à la mise en ligne ?",
        a: "Un MVP ciblé prend généralement 6 à 12 semaines. Une plateforme d'entreprise complète s'étend sur 3 à 6 mois. Le délai dépend du périmètre, des intégrations et de la vélocité de décision de votre côté. Nous partageons une feuille de route détaillée au lancement du projet et suivons l'avancement lors de synchronisations hebdomadaires avec des démos en direct.",
      },
      {
        q: "Travaillez-vous avec des startups en phase initiale et des grandes entreprises ?",
        a: "Oui — nous avons emmené des produits du concept initial à plus de 10 000 utilisateurs actifs, et nous avons également dirigé le volet ingénierie de projets de transformation numérique à grande échelle. Ce qui compte, c'est que vous ayez un problème clair et la volonté de le résoudre correctement.",
      },
      {
        q: "Que se passe-t-il après le lancement du produit ?",
        a: "Chaque mission inclut 30 jours de support post-lancement en standard — corrections de bugs, monitoring et réponse immédiate à tout problème de production. Ensuite, nous proposons des forfaits de maintenance structurés couvrant les corrections continues, le tuning des performances et le développement itératif de fonctionnalités.",
      },
      {
        q: "Pouvez-vous travailler avec ou étendre nos systèmes existants ?",
        a: "Absolument. Nous travaillons régulièrement avec des bases de code legacy, des APIs tierces et des infrastructures existantes. Nous auditons ce que vous avez, identifions les meilleurs points d'intégration et construisons autour de vos contraintes plutôt que de forcer une réécriture complète, sauf si elle est vraiment nécessaire.",
      },
      {
        q: "À qui appartient le code et la propriété intellectuelle après le projet ?",
        a: "À vous — entièrement. Nous signons des NDAs avant toute discussion de détails propriétaires, et toute la propriété intellectuelle produite durant la mission vous est transférée à l'achèvement du projet. Nous ne conservons rien. Vous recevez l'intégralité du dépôt de code, la documentation et les assets de déploiement.",
      },
      {
        q: "Dans quels secteurs avez-vous le plus d'expérience ?",
        a: "Notre expertise sectorielle la plus profonde est dans la FinTech, la Santé, l'EdTech, le SaaS et la Logistique — des secteurs où le logiciel doit être fiable, performant et prêt à passer à l'échelle. Notre approche d'ingénierie s'adapte à tous les secteurs : si vous résolvez un vrai problème avec du logiciel, nous pouvons vous aider.",
      },
      {
        q: "Comment commençons-nous ?",
        a: "Remplissez le formulaire de contact avec une brève description de ce que vous construisez et votre calendrier approximatif. Nous répondons sous 24 heures pour planifier un appel de découverte de 30 minutes. À partir de là, nous avançons rapidement — la plupart des projets ont un document de cadrage dans la semaine suivant le premier appel.",
      },
    ],
  },

  ar: {
    badge: "خدماتنا",
    h1Lines: ["نبني.", "نطوّر."],
    sub: "من أول منتج للشركة الناشئة إلى التحول الرقمي للمؤسسة — ويب وموبايل وسطح مكتب وأتمتة وذكاء اصطناعي، مهندسة للبقاء.",
    scroll: "انزل",
    sidebarLabel: "خدماتنا",
    viewDetails: "عرض التفاصيل",
    exploreService: "استكشاف الخدمة",
    faqLabel: "— أسئلة شائعة",
    faqTitleLines: ["أسئلة متكررة", "إجابات صريحة."],
    faqSub: "كل ما تحتاج معرفته قبل أن نبدأ البناء معاً.",
    stillHaveQ: "هل لا تزال لديك أسئلة؟ نرد على كل استفسار خلال 24 ساعة.",
    askUs: "اسألنا مباشرة",
    services: [
      {
        category: "ويب · SaaS · مؤسسي",
        headline: "منصات مبنية للتوسع الحقيقي.",
        desc: "من نماذج MVP الأولية إلى SaaS المؤسسي متعدد المستأجرين — نهندس ونبني ونسلم تطبيقات ويب كاملة المكدس، سريعة وموثوقة وجاهزة لكل ما يأتي. كل تسليم يتضمن طبقة API نظيفة وكوداً مختبراً وCI/CD من اليوم الأول.",
        highlightLabels: ["تحديث البيانات على لوحات التحكم المباشرة", "وقت التشغيل على نشرات الإنتاج", "تسريع الوصول للسوق مع مكدسنا التقني"],
        features: [
          "هندسة SaaS متعددة المستأجرين ومنصات B2B",
          "لوحات تحكم في الوقت الفعلي مع تدفقات بيانات WebSocket",
          "OAuth 2.0 وSSO وMFA والتحكم في الوصول القائم على الأدوار",
          "تكاملات API من طرف ثالث وWebhooks مدفوعة بالأحداث",
          "لوحات إدارة وسجلات تدقيق وتقارير متقدمة",
          "Core Web Vitals ودرجات Lighthouse وأسس تحسين محركات البحث",
        ],
      },
      {
        category: "iOS · Android · متعدد المنصات",
        headline: "تطبيقات بجودة أصلية وسرعة متعددة المنصات.",
        desc: "نسلم تطبيقات iOS وAndroid تشعر بأنها أصلية حقاً — رسوم متحركة بـ60fps، وتكامل عميق مع نظام التشغيل، وقدرة على العمل دون اتصال، وتجربة مستخدم تستحق خمس نجوم. قاعدة كود واحدة، منتجان متقنان، دون تنازل عن الأداء.",
        highlightLabels: ["متوسط تقييم App Store على التطبيقات المُسلَّمة", "تسليم أسرع مقارنة بفريقين أصليين منفصلين", "وظائف دون اتصال من اليوم الأول، لا كإضافة لاحقة"],
        features: [
          "React Native متعدد المنصات مع جسور الوحدات الأصلية",
          "هندسة offline-first مع SQLite / MMKV المحلي",
          "إشعارات push وجلب في الخلفية وتحديثات صامتة",
          "مدفوعات داخل التطبيق عبر Stripe وApple Pay وGoogle Pay",
          "الكاميرا وGPS والمقاييس الحيوية وAPIs الخاصة بالمنصة",
          "تقديم ودعم App Store وGoogle Play",
        ],
      },
      {
        category: "ويندوز · macOS · لينكس",
        headline: "برمجيات سطح مكتب يستخدمها المحترفون فعلاً.",
        desc: "بعض سير العمل يتطلب أكثر من تبويب في المتصفح — موثوقية بدون اتصال، ووصول للأجهزة، وتكامل أصلي مع نظام التشغيل، ومستوى أداء لا تستطيع تطبيقات الويب تحقيقه. نبني تطبيقات سطح مكتب متعددة المنصات تبدو في مكانها على كل نظام تشغيل.",
        highlightLabels: ["من قاعدة كود واحدة مشتركة", "حجم المثبت النموذجي مع Tauri", "تحديثات تلقائية مع التراجع والطرح التدريجي"],
        features: [
          "Windows وmacOS وLinux من قاعدة كود واحدة",
          "تكامل أصلي مع نظام التشغيل — الصينية والإشعارات ونظام الملفات",
          "offline-first مع قاعدة بيانات SQLite مدمجة",
          "نظام تحديث تلقائي مع طرح تدريجي وإمكانية التراجع",
          "وصول للأجهزة: منافذ تسلسلية وUSB وطابعات",
          "مثبتات موقَّعة للتوزيع المؤسسي الموثوق",
        ],
      },
      {
        category: "RPA · خطوط البيانات · التنسيق",
        headline: "حوّل العمل المتكرر إلى أنظمة موثوقة.",
        desc: "كل مهمة يدوية ومتكررة في عملك هي مركز تكلفة ومصدر خطر. نراجع سير عملك، ونحدد فرص الأتمتة ذات العائد الأعلى، ونبني أنظمة موثوقة ومُراقَبة تعمل على مدار الساعة — بدون أخطاء بشرية.",
        highlightLabels: ["تخفيض ساعات المعالجة اليدوية (متوسط)", "تشغيل مع التنبيهات ومنطق إعادة المحاولة التلقائية", "متوسط وقت التنبيه عند فشل خطوط البيانات"],
        features: [
          "روبوتات RPA للكشط والنماذج وإدخال البيانات",
          "تنسيق خطوط البيانات المجدولة والمدفوعة بالأحداث",
          "تكامل متعدد الأنظمة وربط سير العمل",
          "تحليل المستندات وOCR واستخراج البيانات المنظمة",
          "معالجة الأخطاء ومنطق إعادة المحاولة وطوابع الرسائل الميتة",
          "لوحات مراقبة وتنبيهات Slack وسجلات تدقيق كاملة",
        ],
      },
      {
        category: "LLM · RAG · رؤية الكمبيوتر",
        headline: "ذكاء اصطناعي بتأثير تجاري قابل للقياس.",
        desc: "نبني ذكاءً اصطناعياً يستحق مكانه في منتجك بعائد استثمار واضح — لا مجرد روبوت دردشة مُضاف على الجانب. خطوط LLM مخصصة وأنظمة RAG ونماذج رؤية الكمبيوتر والتحليلات التنبؤية التي تقلل التكاليف التشغيلية الحقيقية.",
        highlightLabels: ["تخفيض حجم الدعم المباشر عبر فرز الذكاء الاصطناعي", "توفير أسبوعي عبر الأتمتة الذكية", "معالجة NLP العربية للسوق MENA"],
        features: [
          "ضبط دقيق مخصص للـ LLM وهندسة متقدمة للـ prompts",
          "خطوط RAG مع البحث المتجه والتأسيس السياقي",
          "دعم عملاء بالذكاء الاصطناعي وفرز التذاكر وتوجيه التصعيد",
          "رؤية الكمبيوتر وتصنيف الصور وخطوط OCR",
          "تحليلات تنبؤية وتوقع الطلب واكتشاف الشذوذات",
          "معالجة NLP العربية أولاً — نماذج تراعي اللهجات لمنطقة MENA",
        ],
      },
    ],
    faqs: [
      {
        q: "كيف تحددون نطاق المشروع وتسعيرته؟",
        a: "كل مشاركة تبدأ بجلسة اكتشاف لفهم أهدافك وقيودك ومتطلباتك التقنية. ثم ننتج ملخصاً تفصيلياً وعرض سعر بنطاق ثابت. للأعمال المستمرة، نقدم خططاً شهرية مرنة. تتم مناقشة تغييرات النطاق وتسعيرها بشفافية قبل حدوثها — بلا مفاجآت.",
      },
      {
        q: "كم يستغرق مشروع نموذجي من البداية إلى الإطلاق؟",
        a: "يستغرق MVP المركّز عادةً 6-12 أسبوعاً. المنصة المؤسسية الكاملة تستغرق 3-6 أشهر. يعتمد الجدول الزمني على النطاق والتكاملات وسرعة القرار من جانبك. نشارك خارطة طريق تفصيلية عند بداية المشروع ونتابع التقدم في مزامنات أسبوعية مع عروض تجريبية مباشرة.",
      },
      {
        q: "هل تعملون مع الشركات الناشئة في مراحلها الأولى والمؤسسات الكبيرة؟",
        a: "نعم — لقد أخذنا منتجات من مرحلة الفكرة الأولى إلى أكثر من 10,000 مستخدم نشط، وأدرنا أيضاً الجانب الهندسي لمشاريع التحول الرقمي واسعة النطاق. المهم أن يكون لديك مشكلة واضحة والالتزام بحلها بشكل صحيح.",
      },
      {
        q: "ماذا يحدث بعد إطلاق المنتج؟",
        a: "كل مشاركة تشمل 30 يوماً من الدعم بعد الإطلاق كمعيار — إصلاح الأخطاء والمراقبة والاستجابة الفورية لأي مشاكل في الإنتاج. بعد ذلك، نقدم خطط صيانة منظمة تغطي الإصلاحات المستمرة وضبط الأداء والتطوير التكراري للميزات.",
      },
      {
        q: "هل يمكنكم العمل مع أنظمتنا الحالية أو توسيعها؟",
        a: "بالتأكيد. نعمل بانتظام مع قواعد الكود القديمة وواجهات API الخارجية والبنية التحتية الموجودة. سنراجع ما لديك، ونحدد أفضل نقاط التكامل، ونبني حول قيودك بدلاً من إجبار إعادة الكتابة الكاملة ما لم تكن ضرورية فعلاً.",
      },
      {
        q: "من يمتلك الكود والملكية الفكرية بعد المشروع؟",
        a: "أنت — بالكامل. نوقع اتفاقيات سرية قبل أي نقاش لتفاصيل ملكية، وتنتقل جميع الملكية الفكرية المنتجة خلال المشاركة إليك عند اكتمال المشروع. لا نحتفظ بشيء. تحصل على المستودع الكامل والتوثيق وأصول النشر.",
      },
      {
        q: "في أي القطاعات لديكم أكثر خبرة؟",
        a: "خبرتنا القطاعية العميقة في التقنية المالية والرعاية الصحية وتكنولوجيا التعليم وSaaS واللوجستيات — قطاعات تحتاج فيها البرمجيات إلى الموثوقية والأداء والقابلية للتوسع. نهجنا الهندسي يتكيف مع مختلف القطاعات: إذا كنت تحل مشكلة حقيقية بالبرمجيات، يمكننا المساعدة.",
      },
      {
        q: "كيف نبدأ؟",
        a: "املأ نموذج الاتصال بوصف موجز لما تبنيه وجدولك الزمني التقريبي. نرد خلال 24 ساعة لجدولة مكالمة اكتشاف مدتها 30 دقيقة. من هناك، نتحرك بسرعة — معظم المشاريع لديها وثيقة تحديد نطاق في غضون أسبوع من المكالمة الأولى.",
      },
    ],
  },
};

export function getOverviewI18n(lang: string): OverviewI18n {
  return OVERVIEW[(lang as Lang)] ?? OVERVIEW.en;
}

// ─────────────────────────────────────────────────────────────────────────────
// SLUG PAGE  (/services/[slug])
// ─────────────────────────────────────────────────────────────────────────────

export interface SlugProjectI18n {
  label: string;
  name: string;
  desc: string;
  metric: string;
  result: string;
}

export interface SlugServiceI18n {
  category: string;
  headline: string;
  desc: string;
  statLabels: readonly string[];
  features: readonly string[];
  deliverables: readonly string[];
  faq: readonly { q: string; a: string }[];
  projects?: readonly SlugProjectI18n[];
}

export interface SlugProcessStep { number: string; title: string; desc: string }

export interface SlugI18n {
  backLink: string;
  scroll: string;
  whatWeBuildLabel: string;
  whatWeBuildTitle: readonly string[];
  whatWeBuildSub: string;
  moreEngagements: string;
  processLabel: string;
  processTitle: readonly string[];
  scopeLabel: string;
  scopeTitle: readonly string[];
  scopeSub: string;
  whatWeCover: string;
  whatYouGet: string;
  faqLabel: string;
  faqTitle: readonly string[];
  faqSub: string;
  otherServices: string;
  viewDetails: string;
  process: readonly SlugProcessStep[];
  services: Record<string, SlugServiceI18n>;
}

const SLUG: Record<Lang, SlugI18n> = {
  en: {
    backLink: "All services",
    scroll: "Scroll",
    whatWeBuildLabel: "— What We Build",
    whatWeBuildTitle: ["Projects we've", "shipped for clients."],
    whatWeBuildSub: "Representative engagements — same scope, same rigour, every time.",
    moreEngagements: "More engagements",
    processLabel: "— Our Process",
    processTitle: ["How we go from", "brief to production."],
    scopeLabel: "— Scope of Work",
    scopeTitle: ["What's included", "in every engagement."],
    scopeSub: "Everything we cover and everything you receive on delivery.",
    whatWeCover: "What we cover",
    whatYouGet: "What you get",
    faqLabel: "— Common Questions",
    faqTitle: ["Questions clients", "ask before signing."],
    faqSub: "Honest answers — no marketing language, no vague promises.",
    otherServices: "Other services",
    viewDetails: "View details",
    process: [
      { number: "01", title: "Discovery & Architecture", desc: "We map your goals, constraints, and existing systems. You get a detailed technical brief and a fixed-scope quote before a single line is written." },
      { number: "02", title: "Sprint-based Development", desc: "Two-week sprints with live demos every cycle. You always see what we're building, can redirect early, and never wait months for a reveal." },
      { number: "03", title: "QA, Testing & Hardening", desc: "Every feature ships with automated tests, performance benchmarks, and a security review. We don't ship without confidence it holds in production." },
      { number: "04", title: "Launch & Long-term Support", desc: "30 days of post-launch support is standard. After that, structured maintenance retainers keep your product healthy as it grows." },
    ],
    services: {
      web: {
        category: "Web · SaaS · Enterprise",
        headline: "Platforms that scale from day one.",
        desc: "We architect and build full-stack web applications engineered for scale — SaaS platforms, enterprise dashboards, data-heavy apps, and anything in between. Every product ships production-ready with a clean API layer, tested codebase, and CI/CD from day one.",
        statLabels: ["server response time", "production uptime SLA", "SaaS products shipped", "CI/CD from first commit"],
        features: ["SaaS platforms & multi-tenant architecture", "Real-time dashboards with live data streams", "Third-party API integrations & webhooks", "Auth systems: OAuth 2.0, SAML SSO, RBAC", "Admin panels, analytics, and reporting", "Performance optimisation & Core Web Vitals"],
        deliverables: ["Full-stack web application", "RESTful or GraphQL API", "PostgreSQL / Redis data layer", "Admin panel & CMS (if needed)", "CI/CD pipeline & deployment", "Technical documentation"],
        faq: [
          { q: "How long does a typical web application take to build?", a: "A focused MVP takes 6–10 weeks. A full SaaS platform with auth, billing, dashboards, and an admin panel runs 14–20 weeks. Large enterprise systems run 5–6 months. We break every project into two-week sprints with live demos, so you see working software every two weeks — not a reveal months later." },
          { q: "Do you build the full stack, or only frontend or backend?", a: "Both, always. Every engagement covers the React/Next.js frontend, the FastAPI or Node.js backend, the database layer, environment configuration, CI/CD, and initial cloud deployment. One team, one codebase, one point of contact." },
          { q: "What does 'production-ready' actually mean?", a: "It means typed throughout, test coverage on critical paths, environment-specific config with secrets management, error monitoring, structured logging, automated database migrations, and a working CI/CD pipeline. Not a prototype with a README that says 'add tests later'." },
          { q: "Can you work with our existing codebase?", a: "Yes. We start with a two-to-three-day technical audit reviewing architecture, test coverage, dependency health, security posture, and performance. You get a written report with risk areas, a prioritised refactor plan, and an honest assessment of what's worth keeping versus replacing." },
          { q: "Do you handle hosting and infrastructure?", a: "We set it up and hand it over. Typical stack: Vercel or Railway for application hosting, a managed PostgreSQL instance for the database, Redis for caching, and Cloudflare in front. We configure everything, write the runbooks, and give you full admin access on day one." },
          { q: "How do you handle data security and GDPR compliance?", a: "Encryption in transit and at rest is non-negotiable. For personal data we design deletion flows from the start, implement row-level security in PostgreSQL, and minimise data collected. We've shipped under GDPR, HIPAA, and Algerian data protection requirements." },
        ],
      },
      mobile: {
        category: "iOS · Android · Cross-platform",
        headline: "Native feel, half the cost.",
        desc: "We ship iOS and Android applications that feel native — smooth animations, fast load times, deep OS integration, and a UX that earns five-star reviews. One codebase, two platforms, zero compromises on quality.",
        statLabels: ["avg App Store rating", "faster than two native teams", "offline capability by default", "combined installs shipped"],
        features: ["Cross-platform iOS & Android (React Native)", "Offline-first architecture & local storage", "Push notifications & background sync", "In-app payments (Stripe, Apple Pay, Google Pay)", "Camera, GPS, biometrics, and device APIs", "App Store & Google Play submission support"],
        deliverables: ["iOS + Android production app", "Backend API & cloud infrastructure", "Push notification service", "App Store / Play Store listing", "Performance profiling report", "Post-launch monitoring setup"],
        faq: [
          { q: "Why React Native over native Swift and Kotlin?", a: "For most products: time and cost. One codebase delivers both iOS and Android while sharing business logic, API clients, and state management. The performance gap has closed for standard interface patterns. We recommend native only when you need deeply custom rendering or advanced camera pipelines — and we'll tell you honestly if your project is one of those." },
          { q: "Can you handle App Store and Google Play submission?", a: "Yes — included in every project. We manage provisioning profiles, code signing certificates, App Review Guideline compliance, metadata, screenshots, and the back-and-forth with Apple if a rejection comes back. First-time submissions and ongoing releases are both covered." },
          { q: "How do you handle offline mode and unreliable connectivity?", a: "We design offline-first by default: local persistence via MMKV or SQLite, an optimistic update pattern so the UI responds immediately, a write queue that replays against the API on reconnect, and conflict resolution for concurrent edits. Users never see a blank screen or error toast because of connectivity." },
          { q: "What about push notification deliverability at scale?", a: "Deliverability above 95% requires careful token lifecycle management — rotating tokens on reinstall, removing stale tokens, and configuring APNs/FCM correctly. We've diagnosed production systems sitting at 60% delivery and gotten them above 97% through token hygiene and payload optimisation alone." },
          { q: "How do we push updates after launch without App Store delays?", a: "Patch-level UI and JavaScript logic updates ship over-the-air via Expo Updates without an App Store review — users get the fix on next app launch. Anything touching native modules goes through the standard review process. We configure staged OTA rollouts so a bad update affects 5% of users before you commit to the full install base." },
          { q: "What is the realistic maintenance cost after launch?", a: "Budget 10–15% of the initial build cost per year. This covers iOS and Android OS upgrade testing, dependency security patches, API deprecation updates, and minor feature work. Most clients move to a monthly maintenance retainer after launch — cheaper and more predictable than re-engaging ad hoc." },
        ],
      },
      desktop: {
        category: "Windows · macOS · Linux",
        headline: "Software that lives on the desktop.",
        desc: "Some workflows demand a native desktop experience — offline reliability, deep OS integration, and performance that the browser can't match. We build Windows, macOS, and Linux applications that professionals actually want to use every day.",
        statLabels: ["from a single codebase", "avg installer with Tauri", "crash-free sessions", "updates with staged rollout"],
        features: ["Windows, macOS & Linux from one codebase", "Native OS integration (file system, tray, notifications)", "Offline-first with local database", "Auto-update distribution system", "Hardware access: serial ports, USB, printers", "High-performance data rendering"],
        deliverables: ["Cross-platform desktop installer", "Auto-update mechanism", "System tray & notification integration", "Local database layer", "Code-signed release build", "User & admin documentation"],
        faq: [
          { q: "Electron or Tauri — which framework do you recommend, and why?", a: "Tauri for new projects, almost every time. Tauri produces installers 10–20× smaller, uses significantly less RAM, has a smaller attack surface, and the Rust core makes it difficult to introduce memory safety bugs. Electron makes sense when you need the full Node.js runtime in the renderer, or have strong constraints against introducing Rust." },
          { q: "How small can you get the installer?", a: "With Tauri, production installers regularly land under 15MB — we've shipped one at 6MB. Electron applications typically run 80–150MB. Both support delta update mechanisms so users don't re-download the full binary on every release." },
          { q: "How do you distribute updates to users without manual reinstalls?", a: "Automatic updates are built in from the first release. We configure a release server, implement background update checks, display an unobtrusive prompt, and support staged rollouts — deploy to 10% of users first, watch crash rates, then graduate to 100% with one click." },
          { q: "Can the application access serial ports, USB devices, or proprietary hardware?", a: "Yes. Through Tauri we access Rust crates like serialport-rs and hidapi directly, giving low-latency communication with hardware over RS-232, RS-485, USB-HID, or custom USB protocols. We've built drivers for industrial sensors, receipt printers, barcode scanners, and custom PCB hardware." },
          { q: "How do you handle code signing so users don't see security warnings?", a: "On macOS: Apple Developer ID certificate plus notarisation and stapling. On Windows: an OV or EV code-signing certificate from a trusted CA. We handle the process end-to-end and integrate signing into your CI/CD pipeline so every release ships trusted without manual steps." },
          { q: "Is the same codebase truly used for all three operating systems?", a: "Yes, with intentional platform-specific adaptations for system tray behaviour, native file dialogs, menu structure, and keyboard shortcuts — handled through conditional imports and platform detection, not separate branches. Our CI runs full build and test passes for Windows, macOS, and Linux on every commit to main." },
        ],
      },
      automation: {
        category: "RPA · Pipelines · Orchestration",
        headline: "Replace manual work with reliable systems.",
        desc: "Manual processes are hidden overhead. We audit your workflows and replace repetitive human tasks with reliable, monitored automation — from nightly data pipelines to real-time event-driven bots that act faster than any team can.",
        statLabels: ["reduction in manual hours", "operation with auto-retry", "mean time to alert on failure", "extraction accuracy on docs"],
        features: ["RPA bots for web & desktop workflows", "Scheduled & event-driven data pipelines", "Multi-system API orchestration", "Document parsing & data extraction (OCR)", "Error alerting & exponential-backoff retry logic", "Monitoring dashboards & audit logs"],
        deliverables: ["Automation scripts & bots", "Workflow architecture diagram", "Monitoring & alerting setup", "Error handling & recovery logic", "Runbooks & operator documentation", "30-day post-launch hypercare"],
        faq: [
          { q: "How do you decide what is actually worth automating?", a: "We start with an ROI analysis: time spent per week × fully-loaded hourly cost × weeks per year = annual cost of the status quo. If the automation pays for itself in under 12 months, it's almost always worth building. We also weight reliability risk and will tell you honestly when a process is a poor automation candidate." },
          { q: "What happens when a website changes and breaks our scraper?", a: "We mitigate fragility by writing selectors defensively (stable data attributes over CSS classes), building automated health checks that alert within an hour of failure, and including a short maintenance clause in the contract. For mission-critical workflows we always explore official APIs or vendor data feeds before committing to scraping." },
          { q: "How reliable are production automations in practice?", a: "With proper error handling and retry logic, our pipelines sustain 99%+ successful run rates over 30-day rolling windows. Every automation ships with per-step exception catching, configurable retry with exponential backoff, a dead-letter queue for payloads that fail after maximum retries, and alerting when failure counts exceed thresholds." },
          { q: "Can you integrate with our ERP, CRM, or accounting software?", a: "Almost certainly. If the system exposes an API (SAP, Salesforce, HubSpot, Dynamics, Xero, QuickBooks, Odoo) we use it directly. If the only interface is a legacy desktop application or a web portal without a public API, we use browser automation via Playwright to interact with it programmatically." },
          { q: "Do you use no-code tools like n8n or Zapier, or is it all custom code?", a: "Both, depending on what the problem requires. For simple webhook-to-webhook automations, n8n is excellent and we deploy self-hosted instances for clients who want data privacy. For complex, stateful, high-volume pipelines with custom business logic and test coverage requirements, we write Python." },
          { q: "How do we monitor and operate the automations after you hand them over?", a: "Every pipeline ships with a monitoring layer — a dashboard showing run history, success/failure rate, processing volume, and last-run timestamp readable by a non-technical operations manager. Alert rules fire on failure counts and processing lag. We also write runbooks documenting exactly how to respond to each alert type." },
        ],
      },
      ai: {
        category: "LLM · RAG · Computer Vision",
        headline: "AI that earns its place in your product.",
        desc: "We build AI that earns its place in your product — not a chatbot bolted on the side, but deep integrations that reduce real operational costs. Custom LLM pipelines, RAG systems, computer vision, and predictive models with measurable ROI.",
        statLabels: ["support volume deflected", "per week saved per team", "hallucination rate on RAG", "Arabic-first MENA capability"],
        features: ["Custom LLM fine-tuning & prompt engineering", "RAG (Retrieval-Augmented Generation) pipelines", "AI customer support & ticket triage", "Computer vision & OCR solutions", "Predictive analytics & demand forecasting", "Arabic-first NLP for MENA markets"],
        deliverables: ["AI model or pipeline (production-ready)", "API integration layer", "Vector database setup & indexing", "Evaluation & benchmark report", "Model monitoring & drift detection", "Ongoing optimisation retainer option"],
        faq: [
          { q: "Do you build models from scratch or work with existing LLMs?", a: "Almost always existing foundation models, adapted and orchestrated for your domain. Building a foundation model from scratch requires hundreds of millions in compute. What we build is the layer on top: retrieval pipelines, custom prompts, fine-tuning on your domain vocabulary, guardrails, evaluation frameworks, and integrations that make a frontier model behave reliably in your specific context." },
          { q: "How do you keep hallucination rates low in RAG systems?", a: "Several techniques in combination: retrieval quality (tuned embedding models and chunk sizes so the right context surfaces), answer grounding (the model must cite source chunks; uncited claims are filtered), confidence scoring (low-certainty responses fall back to a human queue), and continuous evaluation against a benchmark of known Q&A pairs from your domain." },
          { q: "How long does it realistically take to see ROI from an AI system?", a: "For automation-oriented AI — document processing, triage, classification — return is typically visible within 60 to 90 days of go-live. We build measurement into the system from day one: cost per resolved ticket, hours saved, accuracy versus a human baseline. You have data, not impressions, from the first week of production use." },
          { q: "What about data privacy — do our documents go to OpenAI or Anthropic?", a: "Only if you choose that configuration. We can deploy models that run entirely within your cloud account — AWS Bedrock, Azure OpenAI Service, or self-hosted open-weight models — with zero data leaving your VPC. We document the complete data flow and provide supporting materials for DPA compliance reviews." },
          { q: "What does Arabic-first NLP mean in practice?", a: "Most LLMs perform significantly worse on Arabic — shorter context retention, lower instruction-following accuracy, degraded output on dialectal variants (Darija, Levantine, Gulf). We address this through bilingual prompt templates, Arabic-specific retrieval tuning with morphological stemming, benchmark evaluation sets that test MSA and the relevant regional dialect, and Arabic-speaking reviewers who validate outputs qualitatively." },
          { q: "Can AI fully replace a human team for complex work?", a: "For specific, well-defined tasks with clear success criteria — yes, completely. We've built systems that fully replaced manual labour on invoice data entry, ticket routing, and report generation. For anything requiring judgement, empathy, or legal accountability, the right architecture is AI-assisted humans. We design for that boundary carefully and won't oversell capability." },
        ],
      },
    },
  },

  fr: {
    backLink: "Tous les services",
    scroll: "Défiler",
    whatWeBuildLabel: "— Ce Que Nous Construisons",
    whatWeBuildTitle: ["Les projets que nous avons", "livrés pour des clients."],
    whatWeBuildSub: "Exemples de missions — même périmètre, même rigueur, à chaque fois.",
    moreEngagements: "Plus de missions",
    processLabel: "— Notre Processus",
    processTitle: ["Comment nous passons du", "brief à la production."],
    scopeLabel: "— Périmètre de travail",
    scopeTitle: ["Ce qui est inclus", "dans chaque mission."],
    scopeSub: "Tout ce que nous couvrons et tout ce que vous recevez à la livraison.",
    whatWeCover: "Ce que nous couvrons",
    whatYouGet: "Ce que vous obtenez",
    faqLabel: "— Questions Fréquentes",
    faqTitle: ["Les questions des clients", "avant de signer."],
    faqSub: "Des réponses honnêtes — pas de jargon marketing, pas de promesses vagues.",
    otherServices: "Autres services",
    viewDetails: "Voir les détails",
    process: [
      { number: "01", title: "Découverte & Architecture", desc: "Nous cartographions vos objectifs, contraintes et systèmes existants. Vous obtenez un brief technique détaillé et un devis à périmètre fixe avant qu'une seule ligne soit écrite." },
      { number: "02", title: "Développement par Sprints", desc: "Des sprints de deux semaines avec des démos en direct à chaque cycle. Vous voyez toujours ce que nous construisons, pouvez réorienter tôt, et n'attendez jamais des mois pour une révélation." },
      { number: "03", title: "Assurance Qualité & Tests", desc: "Chaque fonctionnalité est livrée avec des tests automatisés, des benchmarks de performance et une revue de sécurité. Nous ne livrons pas sans être confiants que ça tient en production." },
      { number: "04", title: "Lancement & Support Durable", desc: "30 jours de support post-lancement inclus en standard. Ensuite, des forfaits de maintenance structurés gardent votre produit en bonne santé au fil de sa croissance." },
    ],
    services: {
      web: {
        category: "Web · SaaS · Entreprise",
        headline: "Des plateformes qui scalent dès le premier jour.",
        desc: "Nous architecturons et construisons des applications web full-stack conçues pour la montée en charge — plateformes SaaS, tableaux de bord d'entreprise, applications data-intensive. Chaque produit est livré prêt pour la production avec une couche API propre, un code testé et un CI/CD dès le premier jour.",
        statLabels: ["temps de réponse serveur", "SLA de disponibilité en production", "produits SaaS livrés", "CI/CD dès le premier commit"],
        features: ["Plateformes SaaS & architecture multi-locataire", "Tableaux de bord en temps réel avec flux de données en direct", "Intégrations API tierces & webhooks", "Authentification : OAuth 2.0, SAML SSO, RBAC", "Panneaux d'administration, analytics et reporting", "Optimisation des performances & Core Web Vitals"],
        deliverables: ["Application web full-stack", "API RESTful ou GraphQL", "Couche de données PostgreSQL / Redis", "Panneau d'administration & CMS (si nécessaire)", "Pipeline CI/CD & déploiement", "Documentation technique"],
        faq: [
          { q: "Combien de temps prend la construction d'une application web ?", a: "Un MVP ciblé prend 6 à 10 semaines. Une plateforme SaaS complète avec authentification, facturation, tableaux de bord et panneau d'administration prend 14 à 20 semaines. Les grands systèmes d'entreprise peuvent prendre 5 à 6 mois. Nous découpons chaque projet en sprints de deux semaines avec des démos en direct — pas de révélation tardive après des mois d'attente." },
          { q: "Construisez-vous la totalité de la stack ou seulement le frontend ou le backend ?", a: "Les deux, toujours. Chaque mission couvre le frontend React/Next.js, le backend FastAPI ou Node.js, la couche base de données, la configuration par environnement, le CI/CD et le déploiement cloud initial. Une seule équipe, une seule base de code, un seul point de contact." },
          { q: "Que signifie concrètement 'prêt pour la production' ?", a: "Cela signifie typé de bout en bout, couverture de tests sur les chemins critiques, configuration par environnement avec gestion des secrets, monitoring des erreurs, journalisation structurée, migrations automatisées de base de données et un pipeline CI/CD opérationnel. Pas un prototype avec un README qui dit 'ajouter les tests plus tard'." },
          { q: "Pouvez-vous travailler avec notre base de code existante ?", a: "Oui. Nous commençons par un audit technique de 2 à 3 jours portant sur l'architecture, la couverture de tests, la santé des dépendances, la posture de sécurité et les performances. Vous recevez un rapport écrit avec les zones à risque, un plan de refactoring priorisé et une évaluation honnête de ce qui vaut la peine d'être conservé." },
          { q: "Gérez-vous l'hébergement et l'infrastructure ?", a: "Nous les configurons et vous les transférons. Stack typique : Vercel ou Railway pour l'hébergement applicatif, une instance PostgreSQL managée, Redis pour le cache, et Cloudflare en frontal. Nous configurons tout, rédigeons les runbooks et vous donnons un accès administrateur complet dès le premier jour." },
          { q: "Comment gérez-vous la sécurité des données et la conformité RGPD ?", a: "Le chiffrement en transit et au repos est non négociable. Pour les données personnelles, nous concevons les flux de suppression dès le départ, mettons en place la sécurité au niveau des lignes dans PostgreSQL et minimisons les données collectées. Nous avons livré sous RGPD, HIPAA et les exigences algériennes de protection des données." },
        ],
        projects: [
          { label: "SaaS", name: "Suite d'Analytics Multi-locataire", desc: "Plateforme d'analytics en temps réel avec support marque blanche, accès par rôles et tableaux de bord en direct pour 200+ clients enterprise dans 14 pays. Chaque locataire dispose de données isolées, d'une marque personnalisée et d'une clé API dédiée — tout géré depuis une seule base de code sans fuite inter-locataire.", metric: "200+ clients", result: "Reporting 3× plus rapide" },
          { label: "FinTech", name: "API d'Orchestration des Paiements", desc: "Couche transactionnelle haute performance traitant 10 000+ paiements par minute avec scoring anti-fraude, règlement multi-devises, logique de retry idempotente et conformité PCI-DSS Niveau 1. Le système distribue simultanément à quatre fournisseurs et sélectionne la route la moins chère par transaction.", metric: "10k TPS en pic", result: "Disponibilité 99,99%" },
          { label: "Entreprise", name: "Hub Opérations & Workflows", desc: "Outil interne unifié remplaçant cinq abonnements SaaS déconnectés — avec constructeur de workflows, SSO via SAML 2.0, audit complet, permissions granulaires et reporting de direction pour 1 200 employés sur trois bureaux. Le temps d'intégration des nouveaux employés est passé de deux jours à moins de trois heures.", metric: "1 200 utilisateurs/jour", result: "60% moins de changements d'outil" },
          { label: "Formation", name: "Plateforme LMS Marque Blanche", desc: "Système de gestion d'apprentissage multi-locataire pour 40 000 apprenants dans 120 organisations — salles en direct, contenu SCORM, suivi adaptatif, certification automatique avec vérification QR et API headless pour des apps iOS/Android marque blanche distribuées par les revendeurs.", metric: "40 000 apprenants actifs", result: "94% de complétion des cours" },
          { label: "Santé", name: "Portail Patients & Cliniques", desc: "Portail patient conforme HIPAA connectant 18 cliniques — rendez-vous en temps réel, dossiers électroniques, historique des prescriptions avec alertes d'interactions médicamenteuses, vérification d'assurance et une PWA fonctionnant hors ligne dans les cliniques rurales à faible connectivité.", metric: "18 cliniques · 120k patients", result: "Zéro violation de données" },
          { label: "Immobilier", name: "Marketplace Immobilière & CRM", desc: "Plateforme immobilière complète pour 3 200 agents — recherche géo-polygonale avancée, visites virtuelles 360°, distribution automatique des leads, évaluation IA et API développeur consommée par trois portails tiers. Calcul des commissions et facturation automatiques à chaque transaction conclue.", metric: "3 200 agents actifs", result: "18% de conversion en plus" },
        ],
      },
      mobile: {
        category: "iOS · Android · Multi-plateformes",
        headline: "Rendu natif, moitié moins cher.",
        desc: "Nous livrons des applications iOS et Android qui se sentent genuinement natives — animations fluides, temps de chargement rapides, intégration OS profonde et UX qui décroche des avis cinq étoiles. Une base de code, deux plateformes, aucun compromis sur la qualité.",
        statLabels: ["note moyenne App Store", "plus rapide que deux équipes natives", "capacité hors ligne par défaut", "installations combinées livrées"],
        features: ["iOS & Android multi-plateformes (React Native)", "Architecture offline-first & stockage local", "Notifications push & synchronisation en arrière-plan", "Paiements intégrés (Stripe, Apple Pay, Google Pay)", "Caméra, GPS, biométrie et APIs d'appareils", "Support de soumission App Store & Google Play"],
        deliverables: ["Application iOS + Android en production", "API backend & infrastructure cloud", "Service de notifications push", "Fiche App Store / Play Store", "Rapport de profilage des performances", "Configuration de monitoring post-lancement"],
        faq: [
          { q: "Pourquoi React Native plutôt que Swift et Kotlin natifs ?", a: "Pour la plupart des produits : temps et coût. Une base de code délivre iOS et Android en partageant la logique métier, les clients API et la gestion d'état. L'écart de performance avec le natif a diminué pour les patterns d'interface standard. Nous recommandons le natif uniquement pour du rendu hautement personnalisé ou des pipelines caméra avancés — et nous vous le dirons honnêtement si votre projet entre dans cette catégorie." },
          { q: "Gérez-vous la soumission sur l'App Store et le Google Play ?", a: "Oui — inclus dans chaque projet. Nous gérons les profils de provisionnement, les certificats de signature de code, la conformité aux directives de revue, les métadonnées, les captures d'écran et les échanges avec Apple en cas de refus. Soumissions initiales et versions ultérieures sont toutes deux couvertes." },
          { q: "Comment gérez-vous le mode hors ligne et la connectivité instable ?", a: "Nous concevons offline-first par défaut : persistance locale via MMKV ou SQLite, pattern de mise à jour optimiste pour que l'UI réponde immédiatement, file d'attente d'écriture qui se rejoue contre l'API lors de la reconnexion, et résolution de conflits pour les éditions simultanées. Les utilisateurs ne voient jamais d'écran vide ou de toast d'erreur à cause de la connectivité." },
          { q: "Qu'en est-il de la délivrabilité des notifications push à grande échelle ?", a: "La délivrabilité au-dessus de 95% nécessite une gestion rigoureuse du cycle de vie des tokens — rotation des tokens à la réinstallation, suppression des tokens périmés et configuration correcte d'APNs/FCM. Nous avons diagnostiqué des systèmes en production à 60% de délivrabilité et les avons portés au-dessus de 97% par la seule hygiène des tokens." },
          { q: "Comment pousser des mises à jour après le lancement sans délais App Store ?", a: "Les correctifs UI et logique JavaScript se déploient over-the-air via Expo Updates sans revue App Store — les utilisateurs reçoivent le fix au prochain lancement de l'app. Tout ce qui touche aux modules natifs passe par la revue standard. Nous configurons des déploiements OTA par étapes pour qu'un mauvais update touche 5% des utilisateurs avant validation complète." },
          { q: "Quel est le coût de maintenance réaliste après le lancement ?", a: "Prévoyez 10 à 15% du coût initial de développement par an. Cela couvre les tests de mise à niveau iOS et Android, les correctifs de sécurité des dépendances, les mises à jour liées aux dépréciations d'API et les petits développements de fonctionnalités. La plupart de nos clients passent à un forfait de maintenance mensuel après le lancement." },
        ],
        projects: [
          { label: "Santé & Bien-être", name: "Plateforme d'Habitudes & Coaching", desc: "App santé multi-plateformes avec plans personnalisés, suivi des séries, coaching push et sync offline-first — 30 000 utilisateurs en 90 jours post-lancement. L'app compagne pour coaches permet le suivi en temps réel, l'envoi de plans personnalisés et la planification de bilans.", metric: "30 000 utilisateurs en 90 jours", result: "4,9★ sur l'App Store" },
          { label: "Intervention Terrain", name: "Application Dispatch Techniciens", desc: "App terrain hors ligne pour 500+ techniciens — GPS étape par étape, fiches numériques avec photos, signature client et sync en direct vers le centre ops. Fonctionne en sous-sols et sites distants ; toutes les actions sont mises en file d'attente pour sync à la reconnexion.", metric: "500+ techniciens terrain", result: "40% plus rapide à la clôture" },
          { label: "E-commerce", name: "Expérience Shopping de Marque", desc: "App shopping phare avec aperçu AR, paiement express en un clic, Apple Pay et Google Pay, listes de souhaits, suivi GPS coursier en direct et 98% de sessions sans crash sur trois ans et quatre mises à jour majeures iOS/Android.", metric: "98% sans crash", result: "Conversion 2,4× plus élevée" },
          { label: "Télémédecine", name: "App Soins Virtuels & Ordonnances", desc: "Plateforme télémédecine avec consultations vidéo WebRTC, e-ordonnances avec routage pharmacie, dossiers HIPAA et gestion de rendez-vous pour 4 000 consultations mensuelles dans huit spécialités. Le temps d'attente est passé de 28 à moins de quatre minutes.", metric: "4 000 consultations/mois", result: "28 min d'attente → 4 min" },
          { label: "Livraison", name: "Plateforme Livraison Trois-faces", desc: "Apps consommateur, restaurant et livreur partageant un backend temps réel unique — GPS sous la seconde, tarification dynamique, dispatch multi-arrêts automatisé, groupement des commandes et tableau de bord pour 800+ livraisons quotidiennes dans deux villes.", metric: "800+ livraisons/jour", result: "Livraison moyenne 11 min" },
          { label: "FinTech", name: "Portefeuille Digital & Paiements P2P", desc: "Portefeuille mobile PCI-DSS Niveau 1 avec QR code, transferts P2P instantanés, authentification biométrique (Face ID / empreinte), multi-devises (DZD, EUR, USD) avec taux FX en temps réel et flux KYC/AML en moins de deux minutes.", metric: "DZD · EUR · USD", result: "99,98% de succès" },
        ],
      },
      desktop: {
        category: "Windows · macOS · Linux",
        headline: "Des logiciels qui vivent sur le bureau.",
        desc: "Certains workflows exigent une expérience native sur le bureau — fiabilité hors ligne, intégration OS profonde et performances que le navigateur ne peut pas atteindre. Nous construisons des applications Windows, macOS et Linux que les professionnels ont réellement envie d'utiliser chaque jour.",
        statLabels: ["depuis une seule base de code", "installateur moyen avec Tauri", "sessions sans crash", "mises à jour avec déploiement progressif"],
        features: ["Windows, macOS & Linux depuis une seule base de code", "Intégration OS native (système de fichiers, tray, notifications)", "Offline-first avec base de données locale", "Système de distribution des mises à jour automatiques", "Accès matériel : ports série, USB, imprimantes", "Rendu de données haute performance"],
        deliverables: ["Installateur desktop multi-plateformes", "Mécanisme de mise à jour automatique", "Intégration tray système & notifications", "Couche base de données locale", "Build signé prêt pour la release", "Documentation utilisateur & administrateur"],
        faq: [
          { q: "Electron ou Tauri — lequel recommandez-vous et pourquoi ?", a: "Tauri pour les nouveaux projets, presque toujours. Tauri produit des installateurs 10 à 20× plus légers, consomme beaucoup moins de RAM, a une surface d'attaque réduite et le cœur Rust rend difficile l'introduction de bugs de sécurité mémoire. Electron est justifié quand vous avez besoin du runtime Node.js complet dans le renderer ou de fortes contraintes contre l'introduction de Rust." },
          { q: "Quelle taille peut atteindre l'installateur au minimum ?", a: "Avec Tauri, les installateurs de production atterrissent régulièrement sous 15 Mo — nous en avons livré un à 6 Mo. Les applications Electron tournent généralement entre 80 et 150 Mo. Les deux supportent les mécanismes de mise à jour delta pour que les utilisateurs ne re-téléchargent pas le binaire entier à chaque release." },
          { q: "Comment distribuez-vous les mises à jour sans réinstallation manuelle ?", a: "Les mises à jour automatiques sont intégrées dès la première release. Nous configurons un serveur de release, implémentons des vérifications de mise à jour en arrière-plan, affichons une invite discrète et supportons les déploiements par étapes — 10% des utilisateurs d'abord, suivi des métriques de crash, puis 100% en un clic." },
          { q: "L'application peut-elle accéder aux ports série, périphériques USB ou matériel propriétaire ?", a: "Oui. Via Tauri, nous accédons directement aux crates Rust comme serialport-rs et hidapi, offrant une communication faible latence avec le matériel sur RS-232, RS-485, USB-HID ou protocoles USB personnalisés. Nous avons construit des drivers pour des capteurs industriels, des imprimantes de tickets, des lecteurs de codes-barres et du matériel PCB sur mesure." },
          { q: "Comment gérez-vous la signature du code pour éviter les alertes de sécurité ?", a: "Sur macOS : certificat Apple Developer ID, notarisation et agrafage. Sur Windows : certificat OV ou EV d'une CA de confiance. Nous gérons le processus de bout en bout et intégrons la signature dans votre pipeline CI/CD pour que chaque release soit distribuée de manière fiable et vérifiée, sans étapes manuelles." },
          { q: "La même base de code est-elle vraiment utilisée pour les trois systèmes d'exploitation ?", a: "Oui, avec des adaptations intentionnelles pour les comportements spécifiques à chaque plateforme — tray système, boîtes de dialogue de fichiers natifs, structure des menus et raccourcis clavier. Ces adaptations sont gérées via des imports conditionnels et la détection de plateforme, pas des branches séparées. Notre CI exécute des builds complets pour Windows, macOS et Linux à chaque commit." },
        ],
        projects: [
          { label: "Production Média", name: "Gestionnaire d'Assets Vidéo", desc: "Outil de gestion media multi-plateformes pour flux proxy 4K, balisage de métadonnées automatisé, collaboration avec verrouillage de fichiers et recherche dans 200 000+ assets en moins de 300ms. Utilisé quotidiennement par 300+ monteurs remplaçant un produit licencié à 6 000$/siège.", metric: "300+ monteurs/jour", result: "Récupération 70% plus rapide" },
          { label: "Commerce", name: "Système POS & Inventaire", desc: "Application POS offline-first déployée dans 80 points de vente — scan codes-barres, impression thermique Epson, synchronisation inventaire temps réel, réconciliation fin de journée et tableau de bord cloud pour le siège. Fonctionne identiquement sur Windows 10 et macOS 13.", metric: "80 emplacements", result: "Zéro interruption en caisse" },
          { label: "Ingénierie", name: "Enregistreur de Données Industriel", desc: "Acquisition sur port série lisant 20+ types de capteurs RS-232/RS-485, enregistrant en SQLite à 10 000 échantillons/seconde, affichant des graphiques temps réel avec seuils configurables et générant des rapports PDF de calibration automatisés. Remplace un système LabVIEW propriétaire.", metric: "20+ types de capteurs", result: "Temps réel à 10k éch./s" },
          { label: "Ingénierie", name: "Visionneuse 3D & Annotation", desc: "Visionneuse desktop pour fichiers CAO STEP, IGES et OBJ — rendu WebGPU accéléré, outils de mesure précis, couches d'annotation avec commentaires, plans de coupe et export DXF/PDF. Alternative interne à 4 000$/an — 300+ ingénieurs onboardés dès le premier mois.", metric: "4 000$/siège remplacé", result: "300+ ingénieurs onboardés" },
          { label: "Infrastructure", name: "Station de Surveillance Réseau", desc: "Application desktop interrogeant 200+ endpoints SNMP toutes les 30 secondes — carte topologique en direct, alertes Slack/email configurables, historique 90 jours et runbooks diagnostics en un clic. Remplace un Nagios legacy nécessitant une expertise Linux pour fonctionner.", metric: "200+ nœuds surveillés", result: "MTTR réduit de 55%" },
          { label: "Finance", name: "Suite Comptabilité Hors Ligne", desc: "Application comptable hybride pour PME fonctionnant entièrement hors ligne — double entrée, déclarations TVA conformes DGI algérien et PCG français, paie avec charges sociales, rapprochement bancaire et piste d'audit 5 ans. Installateur signé sous 18 Mo via Tauri, actif dans 400+ entreprises.", metric: "Conforme DGI & PCG", result: "400+ entreprises utilisatrices" },
        ],
      },
      automation: {
        category: "RPA · Pipelines · Orchestration",
        headline: "Remplacez le travail manuel par des systèmes fiables.",
        desc: "Les processus manuels sont une charge cachée. Nous auditons vos workflows et remplaçons les tâches humaines répétitives par une automatisation fiable et monitorée — des pipelines de données nocturnes aux bots événementiels en temps réel qui agissent plus vite que n'importe quelle équipe.",
        statLabels: ["réduction des heures manuelles", "opération avec retry automatique", "délai moyen d'alerte sur incident", "précision d'extraction sur documents"],
        features: ["Bots RPA pour les workflows web & desktop", "Pipelines de données planifiés & événementiels", "Orchestration API multi-systèmes", "Parsing de documents & extraction de données (OCR)", "Alertes d'erreur & logique de retry exponentiel", "Tableaux de bord de monitoring & journaux d'audit"],
        deliverables: ["Scripts d'automatisation & bots", "Diagramme d'architecture des workflows", "Configuration monitoring & alertes", "Logique de gestion des erreurs & récupération", "Runbooks & documentation opérateur", "30 jours d'hypercare post-lancement"],
        faq: [
          { q: "Comment décidez-vous de ce qui vaut vraiment la peine d'être automatisé ?", a: "Nous commençons par une analyse ROI : temps passé par semaine × coût horaire chargé × semaines par an = coût annuel du statu quo. Si l'automatisation s'autofinance en moins de 12 mois, ça vaut presque toujours la peine. Nous pesons aussi le risque de fiabilité et vous dirons honnêtement quand un processus est un mauvais candidat à l'automatisation." },
          { q: "Que se passe-t-il quand un site web change et casse notre scraper ?", a: "Nous atténuons la fragilité en écrivant des sélecteurs de manière défensive (attributs de données stables plutôt que classes CSS), en construisant des vérifications de santé automatisées qui alertent en moins d'une heure, et en incluant une clause de maintenance dans le contrat. Pour les workflows critiques, nous explorons toujours les APIs officielles avant de nous engager dans le scraping." },
          { q: "À quel point les automatisations de production sont-elles fiables en pratique ?", a: "Avec une gestion correcte des erreurs et une logique de retry, nos pipelines maintiennent des taux de succès supérieurs à 99% sur des fenêtres glissantes de 30 jours. Chaque automatisation est livrée avec : capture d'exceptions par étape, retry configurable avec backoff exponentiel, dead-letter queue pour les payloads en échec, et alertes quand les compteurs de défaillance dépassent les seuils." },
          { q: "Pouvez-vous vous intégrer avec notre ERP, CRM ou logiciel de comptabilité ?", a: "Presque certainement. Si le système expose une API (SAP, Salesforce, HubSpot, Dynamics, Xero, QuickBooks, Odoo), nous l'utilisons directement. Si la seule interface est une application desktop legacy ou un portail web sans API publique, nous utilisons l'automatisation de navigateur via Playwright pour interagir avec lui de manière programmatique." },
          { q: "Utilisez-vous des outils no-code comme n8n ou Zapier, ou tout est-il en code ?", a: "Les deux, selon ce que le problème exige. Pour les automations webhook-à-webhook simples, n8n est excellent et nous déployons des instances auto-hébergées pour les clients soucieux de la confidentialité des données. Pour les pipelines complexes, stateful, à volume élevé avec logique métier personnalisée, nous écrivons du Python." },
          { q: "Comment surveillons-nous et opérons-nous les automatisations après la passation ?", a: "Chaque pipeline est livré avec une couche de monitoring — un tableau de bord montrant l'historique des exécutions, le taux de succès/échec, le volume traité et l'horodatage de la dernière exécution, lisible par un responsable opérationnel non technique. Des règles d'alerte se déclenchent sur les compteurs d'échec et les retards de traitement. Nous rédigeons aussi des runbooks documentant exactement comment répondre à chaque type d'alerte." },
        ],
        projects: [
          { label: "Finance", name: "Pipeline de Traitement des Factures", desc: "Automatisation documentaire extrayant les données structurées de 2 000+ factures fournisseurs par jour — OCR avec analyse de mise en page, validation sur bons de commande, synchronisation ERP automatique avec signalement des exceptions et file de révision pour 4% des factures. Six agents de saisie remplacés, coûts réduits de 95%.", metric: "2 000 factures/jour", result: "95% de réduction des coûts" },
          { label: "Analytics", name: "Entrepôt de Données Multi-sources", desc: "Pipeline ETL orchestré ingérant 12 APIs SaaS (Salesforce, HubSpot, Stripe, Google Ads et huit autres), appliquant transformation et déduplication, chargeant dans un entrepôt PostgreSQL et actualisant les vues BI pré-agrégées. Les rapports de 3 heures s'exécutent désormais en moins de 5 minutes.", metric: "12 sources API", result: "Rapports quotidiens en <5 min" },
          { label: "SaaS", name: "Automatiseur d'Onboarding Client", desc: "Workflow événementiel déclenché sur nouvel abonnement — provisionne les comptes sur sept outils internes et externes, planifie des séquences email/in-app personnalisées par plan et secteur, notifie le CRM avec données enrichies et crée un canal Slack pour les comptes enterprise. L'onboarding est passé de 3 heures à zéro.", metric: "3h → 0 effort manuel", result: "Livraison 100% cohérente" },
          { label: "RH & Opérations", name: "Orchestrateur de Provisionnement RH", desc: "Automatisation déclenchée dès l'acceptation d'une offre — crée les comptes annuaire, provisionne les licences sur onze outils au bon niveau d'accès, planifie la livraison du matériel, envoie une séquence de bienvenue et remplit la checklist manager. Provisionnement réduit de quatre jours à 45 minutes sans étape manquée.", metric: "4 jours → 45 minutes", result: "Zéro provisionnement manqué" },
          { label: "E-commerce", name: "Pipeline de Fulfillment Omnicanal", desc: "Automatisation unifiant les commandes de quatre canaux (Shopify, Amazon, Jumia, site client), sélectionnant le transporteur optimal par colis, générant les étiquettes en masse, imprimant en entrepôt et repoussant les numéros de suivi en secondes. 1 200 commandes/jour traitées en 12 minutes au lieu de 8 heures.", metric: "4 canaux · 1 200 commandes", result: "8h de traitement → 12 min" },
          { label: "Conformité", name: "Moteur de Reporting Réglementaire", desc: "Agrégation automatisée depuis six systèmes en XML conforme régulateur et PDF prêt auditeur — validation croisée inter-systèmes, détection d'anomalies avant soumission, piste d'audit signée cryptographiquement et alertes 72h avant chaque échéance réglementaire avec checklist des points en suspens.", metric: "6 systèmes, zéro saisie", result: "100% dans les délais" },
        ],
      },
      ai: {
        category: "LLM · RAG · Vision par Ordinateur",
        headline: "L'IA qui mérite sa place dans votre produit.",
        desc: "Nous construisons de l'IA qui mérite sa place dans votre produit — pas un chatbot ajouté en surface, mais des intégrations profondes qui réduisent les coûts opérationnels réels. Pipelines LLM sur mesure, systèmes RAG, vision par ordinateur et modèles prédictifs avec un ROI mesurable.",
        statLabels: ["volume de support défléchi", "économisées par semaine par équipe", "taux d'hallucination sur RAG", "capacité NLP arabe pour la MENA"],
        features: ["Fine-tuning LLM personnalisé & ingénierie de prompts", "Pipelines RAG (Retrieval-Augmented Generation)", "Support client IA & triage de tickets", "Vision par ordinateur & solutions OCR", "Analytics prédictif & prévision de la demande", "NLP arabe natif pour les marchés MENA"],
        deliverables: ["Modèle ou pipeline IA (prêt pour la production)", "Couche d'intégration API", "Configuration & indexation de base de données vectorielle", "Rapport d'évaluation & benchmark", "Monitoring du modèle & détection de dérive", "Option de contrat de maintenance continue"],
        faq: [
          { q: "Construisez-vous des modèles from scratch ou travaillez-vous avec des LLM existants ?", a: "Presque toujours des modèles de fondation existants, adaptés et orchestrés pour votre domaine. Construire un modèle de fondation from scratch nécessite des centaines de millions en calcul. Ce que nous construisons, c'est la couche au-dessus : pipelines de récupération, prompts personnalisés, fine-tuning sur votre vocabulaire de domaine, garde-fous, frameworks d'évaluation et intégrations." },
          { q: "Comment maintenez-vous les taux d'hallucination bas dans les systèmes RAG ?", a: "Plusieurs techniques combinées : qualité de récupération (modèles d'embedding et tailles de chunks affinés pour que le bon contexte remonte), ancrage des réponses (le modèle doit citer les chunks sources), scoring de confiance (les réponses peu sûres vont dans une file de revue humaine), et évaluation continue contre un benchmark de paires Q&R connues de votre domaine." },
          { q: "Combien de temps faut-il réalistement pour voir le ROI d'un système IA ?", a: "Pour l'IA orientée automatisation — traitement de documents, triage, classification — le retour est typiquement visible 60 à 90 jours après la mise en production. Nous intégrons la mesure dans le système dès le premier jour : coût par ticket résolu, heures économisées, précision vs. baseline humaine. Vous avez des données, pas des impressions, dès la première semaine." },
          { q: "Nos documents partent-ils chez OpenAI ou Anthropic ?", a: "Uniquement si vous choisissez cette configuration. Nous pouvons déployer des modèles qui tournent entièrement dans votre compte cloud — AWS Bedrock, Azure OpenAI Service, ou des modèles open-weight auto-hébergés — sans qu'aucune donnée ne quitte votre VPC. Nous documentons le flux complet des données et fournissons les éléments pour vos audits de conformité DPA." },
          { q: "Que signifie concrètement 'NLP arabe natif' ?", a: "La plupart des LLM performent significativement moins bien en arabe — rétention contextuelle plus courte, précision de suivie d'instructions réduite, qualité dégradée sur les variantes dialectales (Darija, Levantin, Golfe). Nous y remédions par des templates de prompts bilingues, un tuning de récupération spécifique à l'arabe avec normalisation diacritique, des évaluations qui testent l'arabe standard et le dialecte régional pertinent, et des reviewers arabophones." },
          { q: "L'IA peut-elle complètement remplacer une équipe humaine pour des travaux complexes ?", a: "Pour des tâches spécifiques et bien définies avec des critères de succès clairs — oui, entièrement. Nous avons construit des systèmes qui ont entièrement remplacé la saisie manuelle sur la facturation, le routage de tickets et la génération de rapports. Pour tout ce qui requiert du jugement, de l'empathie ou de la responsabilité légale, la bonne architecture est l'humain assisté par l'IA. Nous concevons cette frontière soigneusement et ne surbendrons pas nos capacités." },
        ],
        projects: [
          { label: "Support Client", name: "Moteur de Triage & Résolution IA", desc: "Couche de support LLM classifiant les tickets par intention et urgence, rédigeant des réponses pour révision agent et résolvant automatiquement 68% des tickets sur une base de connaissances structurée — intégrée à Zendesk, Intercom et un wiki interne. Tous les tickets non résolus escaladent avec résumés contextuels.", metric: "68% résolus automatiquement", result: "420 000€ d'économies annuelles" },
          { label: "Juridique", name: "Plateforme d'Intelligence Contractuelle", desc: "Pipeline RAG traitant un corpus de 50 000 documents juridiques — extraction de clauses standard et non standard, signalement des écarts par rapport au modèle, scores de risque par contrat et réponses en langage naturel avec paragraphes sources cités. Les juristes passent de trois jours à 25 minutes pour une révision contractuelle.", metric: "50 000 documents indexés", result: "Révision contrats 90% plus rapide" },
          { label: "E-commerce", name: "Moteur de Prévision de la Demande", desc: "Modèle prédictif entraîné sur trois ans de données SKU, patterns saisonniers et indicateurs économiques — prévisions glissantes 90 jours par ligne produit avec intervalles de confiance. Réduction des ruptures de 42% et du surstock de 31% sur 8 000+ lignes dans une chaîne de distribution.", metric: "8 000+ SKUs", result: "42% moins de ruptures de stock" },
          { label: "Immobilier", name: "Abstraction de Bail & Risques", desc: "Pipeline RAG traitant des baux commerciaux jusqu'à 500 pages — extraction automatique de 40+ champs clés dont clauses de résiliation, révisions de loyer et plafonds de charges. Termes non standard signalés avec source mise en évidence dans l'interface de révision. Utilisé sur un portefeuille de 2,4 Md$.", metric: "Révision 72h → 15 min", result: "Portefeuille de 2,4 Md$" },
          { label: "Intelligence Commerciale", name: "Analyse d'Appels & Coaching", desc: "Transcription et analyse structurée des appels — transcription par locuteur, trajectoire de sentiment, détection d'objections avec réponses suggérées, ratio parole/écoute et fiches de coaching livrées en 2 minutes. Taux de clôture amélioré de 22% sur 120 commerciaux en un trimestre.", metric: "Insights en 2 min post-appel", result: "Taux de clôture +22%" },
          { label: "Industrie", name: "Contrôle Qualité Visuel", desc: "Pipeline de vision par ordinateur sur ligne de production inspectant 120 unités/min — modèle convolutif sur mesure détectant défauts de surface, déviations dimensionnelles et désalignements d'étiquettes à 99,1% de précision. Remplace un échantillonnage manuel à 78% de détection causant des retouches coûteuses.", metric: "120 unités/min", result: "78% → 99,1% de détection" },
        ],
      },
    },
  },

  ar: {
    backLink: "جميع الخدمات",
    scroll: "انزل",
    whatWeBuildLabel: "— ما نبنيه",
    whatWeBuildTitle: ["المشاريع التي", "شحنّاها لعملاء."],
    whatWeBuildSub: "مشاركات تمثيلية — نفس النطاق، نفس الصرامة، في كل مرة.",
    moreEngagements: "مشاركات إضافية",
    processLabel: "— عمليتنا",
    processTitle: ["كيف ننتقل من الموجز", "إلى الإنتاج."],
    scopeLabel: "— نطاق العمل",
    scopeTitle: ["ما يشمله", "كل مشاركة."],
    scopeSub: "كل ما نغطيه وكل ما تتلقاه عند التسليم.",
    whatWeCover: "ما نغطيه",
    whatYouGet: "ما تحصل عليه",
    faqLabel: "— أسئلة شائعة",
    faqTitle: ["أسئلة العملاء", "قبل التوقيع."],
    faqSub: "إجابات صريحة — لا لغة تسويقية، لا وعود مبهمة.",
    otherServices: "خدمات أخرى",
    viewDetails: "عرض التفاصيل",
    process: [
      { number: "01", title: "الاستكشاف والهندسة المعمارية", desc: "نرسم خريطة لأهدافك وقيودك وأنظمتك الحالية. تحصل على ملخص تقني مفصل وعرض سعر بنطاق ثابت قبل كتابة سطر واحد." },
      { number: "02", title: "التطوير القائم على السبرينت", desc: "سبرينتات من أسبوعين مع عروض تجريبية مباشرة في كل دورة. دائماً ترى ما نبنيه، يمكنك إعادة التوجيه مبكراً، ولا تنتظر أشهراً للاكتشاف." },
      { number: "03", title: "ضمان الجودة والاختبار والتحصين", desc: "كل ميزة تُشحن مع اختبارات آلية ومعايير أداء ومراجعة أمنية. لا نشحن بدون ثقة في أنها تصمد في بيئة الإنتاج." },
      { number: "04", title: "الإطلاق والدعم طويل الأمد", desc: "30 يوماً من دعم ما بعد الإطلاق معيار ثابت. بعد ذلك، خطط الصيانة المنظمة تُبقي منتجك صحياً بينما يتطور." },
    ],
    services: {
      web: {
        category: "ويب · SaaS · مؤسسي",
        headline: "منصات تتوسع من اليوم الأول.",
        desc: "نهندس ونبني تطبيقات ويب كاملة المكدس مصممة للتوسع — منصات SaaS، لوحات تحكم مؤسسية، تطبيقات كثيفة البيانات. كل منتج يُسلَّم جاهزاً للإنتاج مع طبقة API نظيفة وكود مختبر وCI/CD من اليوم الأول.",
        statLabels: ["وقت استجابة الخادم", "اتفاقية مستوى خدمة وقت التشغيل", "منتجات SaaS مُسلَّمة", "CI/CD من أول commit"],
        features: ["منصات SaaS وهندسة متعددة المستأجرين", "لوحات تحكم في الوقت الفعلي مع تدفقات بيانات مباشرة", "تكاملات API من طرف ثالث وWebhooks", "أنظمة المصادقة: OAuth 2.0 وSAML SSO وRBAC", "لوحات إدارة وتحليلات وتقارير", "تحسين الأداء وCore Web Vitals"],
        deliverables: ["تطبيق ويب كامل المكدس", "API بـRESTful أو GraphQL", "طبقة بيانات PostgreSQL / Redis", "لوحة إدارة ونظام إدارة المحتوى (عند الحاجة)", "خط أنابيب CI/CD والنشر", "التوثيق التقني"],
        faq: [
          { q: "كم يستغرق بناء تطبيق ويب نموذجي؟", a: "MVP مركّز يستغرق 6-10 أسابيع. منصة SaaS كاملة مع المصادقة والفوترة ولوحات التحكم واللوحة الإدارية تستغرق 14-20 أسبوعاً. الأنظمة المؤسسية الكبيرة قد تستغرق 5-6 أشهر. نقسم كل مشروع إلى سبرينتات من أسبوعين مع عروض تجريبية مباشرة — لا كشف متأخر بعد أشهر من الانتظار." },
          { q: "هل تبنون الـstack الكامل أم الـfrontend أو الـbackend فقط؟", a: "كلاهما دائماً. كل مشاركة تغطي الـfrontend بـReact/Next.js، والـbackend بـFastAPI أو Node.js، وطبقة قاعدة البيانات، وإعداد البيئات، والـCI/CD، والنشر السحابي الأولي. فريق واحد، قاعدة كود واحدة، نقطة اتصال واحدة." },
          { q: "ماذا يعني 'جاهز للإنتاج' فعلياً؟", a: "يعني مكتوباً بنوع TypeScript من البداية إلى النهاية، وتغطية اختبارات على المسارات الحرجة، وإعداد خاص بكل بيئة مع إدارة الأسرار، ومراقبة الأخطاء، وتسجيل منظم، وترحيلات قواعد بيانات آلية، وخط أنابيب CI/CD يعمل. لا نموذج أولي مع README يقول 'أضف الاختبارات لاحقاً'." },
          { q: "هل يمكنكم العمل مع قاعدة الكود الحالية لدينا؟", a: "نعم. نبدأ بتدقيق تقني يمتد 2-3 أيام يشمل الهندسة المعمارية وتغطية الاختبارات وصحة التبعيات والوضع الأمني والأداء. تحصل على تقرير مكتوب بمناطق الخطر وخطة إعادة هيكلة بالأولويات وتقييم صادق لما يستحق الإبقاء مقابل ما يستحق الاستبدال." },
          { q: "هل تتعاملون مع الاستضافة والبنية التحتية؟", a: "نقوم بالإعداد وننقلها إليك. المكدس النموذجي: Vercel أو Railway للاستضافة، نسخة PostgreSQL مُدارة لقاعدة البيانات، Redis للتخزين المؤقت، وCloudflare في المقدمة. نقوم بتهيئة كل شيء وكتابة الـrunbooks ونمنحك وصول المشرف الكامل من اليوم الأول." },
          { q: "كيف تتعاملون مع أمن البيانات والامتثال لـGDPR؟", a: "التشفير أثناء النقل وعند التخزين غير قابل للتفاوض. لبيانات المستخدمين نصمم تدفقات الحذف من البداية، وننفذ الأمان على مستوى الصفوف في PostgreSQL، ونقلل البيانات المجمعة. نفذنا مشاريع تحت GDPR وHIPAA ومتطلبات حماية البيانات الجزائرية." },
        ],
        projects: [
          { label: "SaaS", name: "منصة تحليلات متعددة المستأجرين", desc: "منصة تحليلات في الوقت الحقيقي مع دعم العلامة البيضاء والوصول المبني على الأدوار، تخدم أكثر من 200 عميل مؤسسي عبر 14 دولة. كل مستأجر يحصل على بيانات معزولة وعلامة تجارية مخصصة ومفتاح API خاص — كل ذلك يُدار من قاعدة كود واحدة دون أي تسرب بين المستأجرين.", metric: "+200 عميل", result: "تقارير أسرع 3×" },
          { label: "تقنية مالية", name: "واجهة برمجة تنسيق المدفوعات", desc: "طبقة معاملات عالية الأداء تعالج أكثر من 10,000 دفعة في الدقيقة مع تسجيل احتيال مدمج وتسوية متعددة العملات ومنطق إعادة المحاولة الآمن وامتثال PCI-DSS المستوى الأول. يوزع النظام على أربعة مزودي دفع في آنٍ واحد ويختار أرخص مسار ناجح لكل معاملة.", metric: "10k معاملة/ثانية", result: "توافر 99.99%" },
          { label: "مؤسسي", name: "مركز العمليات وسير العمل", desc: "أداة داخلية موحدة تحل محل خمسة اشتراكات SaaS منفصلة — ببانٍ سير عمل مخصص وتسجيل دخول موحد عبر SAML 2.0 وسجل تدقيق كامل وأذونات تفصيلية وتقارير إدارية مباشرة لـ1,200 موظف عبر ثلاثة مكاتب. انخفض وقت إعداد الموظفين الجدد من يومين إلى أقل من ثلاث ساعات.", metric: "1,200 مستخدم يومياً", result: "60% أقل تنقلاً بين الأدوات" },
          { label: "تعليم إلكتروني", name: "منصة نظام إدارة تعلم بعلامة بيضاء", desc: "نظام إدارة تعلم متعدد المستأجرين يدعم 40,000 متعلم عبر 120 منظمة — فصول مباشرة ومحتوى SCORM وتتبع تقدم تكيفي وشهادات آلية مع التحقق بالرمز الاستجابة السريعة وواجهة API لتطبيقات iOS وAndroid بعلامة بيضاء.", metric: "40 ألف متعلم نشط", result: "94% معدل إتمام الدورات" },
          { label: "تقنية صحية", name: "بوابة المرضى والعيادات", desc: "بوابة مرضى متوافقة مع HIPAA تربط 18 عيادة — جدولة مواعيد بالوقت الحقيقي وسجلات صحية إلكترونية وتاريخ وصفات طبية مع تحذيرات التفاعلات الدوائية والتحقق من التأمين وتطبيق ويب تقدمي يعمل دون اتصال في العيادات الريفية.", metric: "18 عيادة · 120 ألف مريض", result: "صفر حوادث اختراق بيانات" },
          { label: "تقنية عقارية", name: "سوق عقارات ونظام CRM", desc: "منصة عقارية متكاملة تخدم 3,200 وكيل — بحث جغرافي متقدم بالمضلعات وجولات افتراضية 360° وتوزيع آلي للعملاء وتقييم مدعوم بالذكاء الاصطناعي وواجهة API للمطورين مستهلكة من ثلاثة بوابات خارجية. حساب العمولة والفوترة يتم تلقائياً عند إغلاق كل صفقة.", metric: "3,200 وكيل نشط", result: "18% زيادة في التحويل" },
        ],
      },
      mobile: {
        category: "iOS · Android · متعدد المنصات",
        headline: "تجربة أصلية بنصف التكلفة.",
        desc: "نسلم تطبيقات iOS وAndroid تشعر بأنها أصلية — رسوم متحركة سلسة وأوقات تحميل سريعة وتكامل عميق مع نظام التشغيل وتجربة مستخدم تستحق خمس نجوم. قاعدة كود واحدة، منصتان، بدون تنازل عن الجودة.",
        statLabels: ["متوسط تقييم App Store", "أسرع من فريقين أصليين", "وظائف دون اتصال افتراضياً", "إجمالي التثبيتات المُسلَّمة"],
        features: ["iOS وAndroid متعدد المنصات (React Native)", "هندسة offline-first وتخزين محلي", "إشعارات push والمزامنة في الخلفية", "مدفوعات داخل التطبيق (Stripe وApple Pay وGoogle Pay)", "الكاميرا وGPS والمقاييس الحيوية وAPIs الأجهزة", "دعم تقديم App Store وGoogle Play"],
        deliverables: ["تطبيق iOS + Android في الإنتاج", "API الخلفية والبنية التحتية السحابية", "خدمة الإشعارات push", "قائمة App Store / Play Store", "تقرير تحليل الأداء", "إعداد مراقبة ما بعد الإطلاق"],
        faq: [
          { q: "لماذا React Native بدلاً من Swift وKotlin الأصليين؟", a: "لمعظم المنتجات: الوقت والتكلفة. قاعدة كود واحدة تُسلِّم iOS وAndroid مع مشاركة منطق الأعمال وعملاء API وإدارة الحالة. فجوة الأداء مع الأصلي تضيقت بشكل كبير لأنماط الواجهة القياسية. نوصي بالأصلي فقط عند الحاجة لرسم مخصص بشكل كبير أو خطوط كاميرا متقدمة." },
          { q: "هل تتعاملون مع تقديم App Store وGoogle Play؟", a: "نعم — مضمّن في كل مشروع. ندير ملفات التوفير وشهادات توقيع الكود والامتثال لإرشادات المراجعة والبيانات الوصفية ولقطات الشاشة والتواصل مع Apple في حال الرفض. التقديمات الأولى والإصدارات اللاحقة كلاهما مغطيان." },
          { q: "كيف تتعاملون مع وضع عدم الاتصال والاتصال غير المستقر؟", a: "نصمم offline-first بشكل افتراضي: تخزين محلي عبر MMKV أو SQLite، نمط تحديث متفائل حتى تستجيب الواجهة فوراً، طابور كتابة يُعاد تشغيله ضد الـAPI عند الاتصال، وحل النزاعات للتعديلات المتزامنة. المستخدمون لا يرون شاشة فارغة أو رسالة خطأ بسبب الاتصال." },
          { q: "ماذا عن إمكانية تسليم الإشعارات push على نطاق واسع؟", a: "التسليم فوق 95% يتطلب إدارة دقيقة لدورة حياة الـTokens — تدوير الـTokens عند إعادة التثبيت، حذف الـTokens المنتهية الصلاحية، وإعداد APNs/FCM بشكل صحيح. شخّصنا أنظمة إنتاجية كانت تعمل بنسبة 60% ووصلنا بها إلى أكثر من 97% من خلال النظافة فقط." },
          { q: "كيف نرسل تحديثات بعد الإطلاق بدون تأخيرات App Store؟", a: "تحديثات الـUI ومنطق JavaScript تُنشر عبر الهواء عبر Expo Updates بدون مراجعة App Store — المستخدمون يحصلون على الإصلاح عند إطلاق التطبيق التالي. أي شيء يمس الوحدات الأصلية يمر بالمراجعة القياسية. نضبط نشر OTA بالمراحل حتى يؤثر أي تحديث سيء على 5% فقط من المستخدمين أولاً." },
          { q: "ما هي تكلفة الصيانة الواقعية بعد الإطلاق؟", a: "خطط لـ10-15% من تكلفة البناء الأولية سنوياً. يغطي ذلك اختبار ترقيات iOS وAndroid وتحديثات أمان التبعيات وتحديثات الـAPI المهملة والعمل على الميزات البسيطة. معظم عملائنا ينتقلون إلى خطة صيانة شهرية بعد الإطلاق — أرخص وأكثر قابلية للتنبؤ." },
        ],
        projects: [
          { label: "صحة ولياقة", name: "منصة العادات والتدريب", desc: "تطبيق صحي متعدد المنصات بخطط شخصية وتتبع السلاسل وإشعارات تدريبية ومزامنة offline-first — وصل إلى 30,000 مستخدم في 90 يوماً من الإطلاق. التطبيق المرافق للمدربين يتيح متابعة تقدم العملاء وإرسال خطط مخصصة وجدولة جلسات المتابعة في الوقت الحقيقي.", metric: "30 ألف مستخدم في 90 يوماً", result: "4.9★ على App Store" },
          { label: "خدمة ميدانية", name: "تطبيق إرسال الفنيين", desc: "تطبيق إدارة ميدانية يعمل دون اتصال لـ500+ فني — ملاحة GPS بالتوجيهات خطوة بخطوة وأوراق عمل رقمية مع التقاط الصور وتوقيع العميل ومزامنة الحالة المباشرة بمركز العمليات. يعمل في الأقبية والمواقع النائية ويضع جميع الإجراءات في قائمة انتظار للمزامنة عند الاتصال.", metric: "+500 عامل ميداني", result: "40% أسرع في إنجاز المهام" },
          { label: "تجارة إلكترونية", name: "تجربة تسوق بعلامة تجارية", desc: "تطبيق تسوق رائد مع معاينة المنتجات بتقنية AR وسداد سريع بنقرة واحدة وApple Pay وGoogle Pay وقوائم أمنيات وتتبع الطلبات مع GPS المندوب المباشر ومعدل جلسات خالية من الأعطال 98% على مدار ثلاث سنوات وأربع تحديثات رئيسية لنظامي iOS وAndroid.", metric: "98% خالٍ من الأعطال", result: "تحويل أعلى 2.4×" },
          { label: "طب عن بُعد", name: "تطبيق الرعاية الافتراضية والوصفات", desc: "منصة طب عن بعد متكاملة مع استشارات فيديو WebRTC وإنشاء وصفات إلكترونية مع توجيه الصيدليات وسجلات متوافقة مع HIPAA ونظام مواعيد يعالج أربعة آلاف استشارة شهرياً عبر ثماني تخصصات طبية. انخفض متوسط وقت الانتظار من 28 دقيقة إلى أقل من أربع.", metric: "4 آلاف استشارة/شهر", result: "الانتظار من 28 إلى 4 دقائق" },
          { label: "توصيل وخدمات", name: "منصة توصيل ثلاثية الأطراف", desc: "تطبيقات المستهلك والمطعم والسائق تشترك في خادم خلفي واحد في الوقت الحقيقي — تتبع GPS بتحديثات أقل من ثانية وتسعير ديناميكي وتحسين التوزيع متعدد المحطات وتجميع الطلبات ولوحة تحكم تدير 800+ توصيل يومياً عبر مدينتين.", metric: "+800 توصيل/يوم", result: "متوسط توصيل 11 دقيقة" },
          { label: "تقنية مالية", name: "محفظة رقمية ومدفوعات P2P", desc: "محفظة موبايل متوافقة مع PCI-DSS المستوى الأول مع توليد ومسح رمز QR وتحويلات فورية بين الأفراد والمصادقة البيومترية ودعم متعدد العملات (DZD وEUR وUSD) بأسعار صرف آنية وتدفق KYC/AML يكتمل في أقل من دقيقتين.", metric: "DZD · EUR · USD", result: "99.98% نجاح في المعاملات" },
        ],
      },
      desktop: {
        category: "ويندوز · macOS · لينكس",
        headline: "برمجيات تعيش على سطح المكتب.",
        desc: "بعض سير العمل يتطلب تجربة سطح مكتب أصلية — موثوقية دون اتصال وتكامل عميق مع نظام التشغيل وأداء لا يستطيع المتصفح تحقيقه. نبني تطبيقات Windows وmacOS وLinux يريد المحترفون استخدامها فعلاً كل يوم.",
        statLabels: ["من قاعدة كود واحدة", "متوسط المثبت مع Tauri", "جلسات بدون أعطال", "تحديثات بطرح تدريجي"],
        features: ["Windows وmacOS وLinux من قاعدة كود واحدة", "تكامل أصلي مع نظام التشغيل (نظام الملفات والصينية والإشعارات)", "Offline-first مع قاعدة بيانات محلية", "نظام توزيع التحديثات التلقائية", "وصول للأجهزة: منافذ تسلسلية وUSB وطابعات", "عرض بيانات عالي الأداء"],
        deliverables: ["مثبت سطح مكتب متعدد المنصات", "آلية التحديث التلقائي", "تكامل صينية النظام والإشعارات", "طبقة قاعدة البيانات المحلية", "بناء موقَّع جاهز للإصدار", "توثيق المستخدم والمشرف"],
        faq: [
          { q: "Electron أم Tauri — أيهما توصون به ولماذا؟", a: "Tauri للمشاريع الجديدة في معظم الحالات. Tauri ينتج مثبتات أصغر بـ10-20 مرة، ويستهلك ذاكرة RAM أقل بكثير، وله سطح هجوم أصغر، والنواة بـRust تجعل إدخال أخطاء أمان الذاكرة أمراً صعباً. Electron له مكانه عندما تحتاج إلى runtime Node.js الكامل في الـrenderer أو عندما تكون هناك قيود صارمة ضد إدخال Rust." },
          { q: "ما هو الحجم الأدنى الذي يمكن أن يصل إليه المثبت؟", a: "مع Tauri، مثبتات الإنتاج تستقر عادةً تحت 15 ميغابايت — سلّمنا واحداً بـ6 ميغابايت. تطبيقات Electron عادةً تتراوح بين 80-150 ميغابايت. كلاهما يدعم آليات التحديث التفاضلي حتى لا يعيد المستخدمون تنزيل الثنائي الكامل في كل إصدار." },
          { q: "كيف توزعون التحديثات على المستخدمين بدون إعادة تثبيت يدوية؟", a: "التحديثات التلقائية مدمجة من أول إصدار. نضبط خادم إصدارات، وننفذ فحوصات تحديث في الخلفية، ونعرض إشعاراً غير مقحم، وندعم الطرح التدريجي — نشر على 10% من المستخدمين أولاً، ومراقبة معدلات الأعطال، ثم التوسع إلى 100% بنقرة واحدة." },
          { q: "هل يمكن للتطبيق الوصول إلى المنافذ التسلسلية أو أجهزة USB أو الأجهزة الخاصة؟", a: "نعم. عبر Tauri نصل مباشرة إلى مكتبات Rust مثل serialport-rs وhidapi، مما يتيح اتصالاً منخفض التأخير مع الأجهزة عبر RS-232 وRS-485 وUSB-HID وبروتوكولات USB مخصصة. بنينا برامج تشغيل لأجهزة استشعار صناعية وطابعات إيصالات وقارئات باركود وأجهزة PCB مخصصة." },
          { q: "كيف تتعاملون مع توقيع الكود حتى لا يرى المستخدمون تحذيرات أمنية؟", a: "على macOS: شهادة Apple Developer ID مع التوثيق والـstapling. على Windows: شهادة OV أو EV من هيئة ترخيص موثوقة. ندير العملية من البداية إلى النهاية وندمج التوقيع في خط أنابيب CI/CD الخاص بك حتى يُوزَّع كل إصدار بشكل موثوق بدون خطوات يدوية." },
          { q: "هل تُستخدم نفس قاعدة الكود حقاً لأنظمة التشغيل الثلاثة؟", a: "نعم، مع تكيفات مقصودة لسلوكيات كل منصة — صينية النظام ومربعات حوار الملفات الأصلية وهيكل القوائم واختصارات لوحة المفاتيح. يتم التعامل مع هذه الأمور عبر imports شرطية وكشف المنصة، لا فروع منفصلة. CI لدينا يُجري builds واختبارات كاملة لـWindows وmacOS وLinux على كل commit." },
        ],
        projects: [
          { label: "إنتاج إعلامي", name: "مدير الأصول الإعلامية", desc: "أداة إدارة وسائط متعددة المنصات لسير عمل البروكسي 4K وترميز البيانات الوصفية تلقائياً والتعاون مع قفل الملفات والبحث الذكي في 200,000+ أصل بأقل من 300 مللي ثانية. يستخدمه يومياً 300+ محرر استبدلوا منتجاً مرخصاً بـ6,000 دولار للمقعد.", metric: "+300 محرر يومياً", result: "استرجاع الأصول أسرع 70%" },
          { label: "تجزئة", name: "نظام نقاط البيع وإدارة المخزون", desc: "تطبيق نقاط بيع يعمل دون اتصال مُنشر في 80 موقعاً — مسح الباركود وطباعة الإيصالات على طابعات Epson الحرارية ومزامنة المخزون في الوقت الحقيقي وتسوية نهاية اليوم ولوحة تحكم سحابية للمقر الرئيسي. يعمل بشكل متطابق على Windows 10 وmacOS 13.", metric: "80 موقعاً", result: "صفر توقف عند الدفع" },
          { label: "هندسة", name: "مسجل البيانات الصناعية", desc: "أداة استحواذ بيانات عبر المنافذ التسلسلية تقرأ أكثر من 20 نوعاً من المستشعرات عبر RS-232 وRS-485 وتسجل القراءات في SQLite بـ10,000 عينة في الثانية وتعرض رسوماً بيانية مباشرة مع حدود تنبيه قابلة للتهيئة وتولد تقارير معايرة PDF آلية. حل محل نظام LabVIEW مملوك.", metric: "+20 نوع مستشعر", result: "وقت فعلي بـ10 آلاف عينة/ث" },
          { label: "هندسة", name: "عارض ثلاثي الأبعاد وأداة التعليق التوضيحي", desc: "عارض سطح مكتب متعدد المنصات لملفات CAD بصيغ STEP وIGES وOBJ — رندرة مُسرَّعة بالمعالج الرسومي عبر WebGPU وأدوات قياس دقيقة وطبقات تعليق توضيحي مع تعليقات الفريق ومستويات القطع والتصدير إلى DXF وPDF. بديل لترخيص بـ4,000$ مع تأهيل 300+ مهندس في الشهر الأول.", metric: "استُبدل بـ4,000$/مقعد", result: "+300 مهندس تم تأهيلهم" },
          { label: "بنية تحتية", name: "محطة مراقبة الشبكة والتنبيه", desc: "تطبيق سطح مكتب لمراقبة البنية التحتية يستطلع 200+ نقطة نهاية SNMP كل 30 ثانية — خريطة طوبولوجية مباشرة مع ترميز لوني وتنبيهات عتبة قابلة للتهيئة عبر Slack والبريد الإلكتروني وسجلات تاريخية 90 يوماً وكتيبات تشخيصية بنقرة واحدة. حل محل Nagios القديم.", metric: "+200 عقدة مُراقَبة", result: "انخفاض MTTR بنسبة 55%" },
          { label: "مالية", name: "نظام محاسبة وضرائب دون اتصال", desc: "تطبيق محاسبة هجين للشركات الصغيرة والمتوسطة يعمل كلياً دون اتصال — محاسبة القيد المزدوج وإنشاء تقارير ضريبية وفق معايير DGI الجزائرية وPCG الفرنسية والرواتب مع الاستقطاعات الاجتماعية والمطابقة المصرفية وسجل تدقيق 5 سنوات. مثبِّت موقَّع بأقل من 18 ميجابايت عبر Tauri. نشط في 400+ شركة.", metric: "متوافق مع DGI وPCG", result: "مستخدم في +400 شركة" },
        ],
      },
      automation: {
        category: "RPA · خطوط البيانات · التنسيق",
        headline: "استبدل العمل اليدوي بأنظمة موثوقة.",
        desc: "العمليات اليدوية هي عبء خفي. نراجع سير عملك ونستبدل المهام البشرية المتكررة بأتمتة موثوقة ومُراقَبة — من خطوط البيانات الليلية إلى الروبوتات المدفوعة بالأحداث في الوقت الفعلي التي تعمل أسرع من أي فريق.",
        statLabels: ["تخفيض في الساعات اليدوية", "تشغيل مع إعادة المحاولة التلقائية", "متوسط وقت التنبيه عند الفشل", "دقة الاستخراج من المستندات"],
        features: ["روبوتات RPA لسير العمل على الويب وسطح المكتب", "خطوط بيانات مجدولة ومدفوعة بالأحداث", "تنسيق API متعدد الأنظمة", "تحليل المستندات واستخراج البيانات (OCR)", "تنبيهات الأخطاء ومنطق إعادة المحاولة التدريجي", "لوحات مراقبة وسجلات تدقيق"],
        deliverables: ["سكريبتات وروبوتات الأتمتة", "مخطط هندسة سير العمل", "إعداد المراقبة والتنبيهات", "منطق معالجة الأخطاء والاسترداد", "الـrunbooks وتوثيق المشغل", "30 يوماً من الدعم المكثف بعد الإطلاق"],
        faq: [
          { q: "كيف تقررون ما يستحق الأتمتة فعلاً؟", a: "نبدأ بتحليل العائد على الاستثمار: الوقت المستغرق في المهمة أسبوعياً × التكلفة الساعية الكاملة × أسابيع في السنة = التكلفة السنوية للوضع الراهن. إذا كانت الأتمتة تسدد نفسها في أقل من 12 شهراً، فهي تستحق البناء في الغالب. نقيّم أيضاً مخاطر الموثوقية وسنخبرك بصدق عندما تكون عملية مرشحاً سيئاً للأتمتة." },
          { q: "ماذا يحدث عندما يتغير موقع ويب ويكسر الـscraper لدينا؟", a: "نقلل الهشاشة بكتابة المحددات بشكل دفاعي (سمات بيانات مستقرة بدلاً من classes CSS)، وبناء فحوصات صحة آلية تنبّه في غضون ساعة من الفشل، وإدراج بند صيانة قصير في العقد. للمهام الحيوية نستكشف دائماً APIs الرسمية أو مغذيات البيانات قبل الالتزام بالـscraping." },
          { q: "ما مدى موثوقية أتمتات الإنتاج من الناحية العملية؟", a: "مع معالجة الأخطاء الصحيحة ومنطق إعادة المحاولة، تحافظ خطوط الأنابيب لدينا على معدلات نجاح أكثر من 99% على نوافذ متجددة مدتها 30 يوماً. كل أتمتة تُشحن مع: التقاط استثناءات لكل خطوة، وإعادة محاولة قابلة للتهيئة مع backoff تدريجي، وطابور للرسائل الميتة، وتنبيهات عندما تتجاوز عدادات الفشل الحدود." },
          { q: "هل يمكنكم التكامل مع نظام ERP أو CRM أو برنامج المحاسبة لدينا؟", a: "على الأرجح نعم. إذا كان النظام يعرض API (SAP وSalesforce وHubSpot وDynamics وXero وQuickBooks وOdoo) نستخدمه مباشرةً. إذا كانت الواجهة الوحيدة تطبيقاً قديماً أو بوابة ويب بدون API عام، نستخدم أتمتة المتصفح عبر Playwright للتفاعل معه برمجياً." },
          { q: "هل تستخدمون أدوات no-code مثل n8n أو Zapier؟", a: "كلاهما، حسب ما يتطلبه المشكل. للأتمتات البسيطة webhook-to-webhook، n8n ممتاز وننشر نسخاً مستضافة ذاتياً للعملاء الذين يريدون خصوصية البيانات. لخطوط الأنابيب المعقدة ذات الحالة وعالية الحجم مع منطق أعمال مخصص، نكتب Python." },
          { q: "كيف نراقب الأتمتات وندير عملياتها بعد التسليم؟", a: "كل خط أنابيب يُشحن مع طبقة مراقبة — لوحة تعرض سجل التشغيل ومعدل النجاح/الفشل وحجم المعالجة وطابع وقت آخر تشغيل، يمكن قراءتها من قِبل مدير عمليات غير تقني. قواعد التنبيه تنطلق على عدادات الفشل وتأخير المعالجة. نكتب أيضاً runbooks توثق بالضبط كيفية الاستجابة لكل نوع تنبيه." },
        ],
        projects: [
          { label: "مالية", name: "خط معالجة الفواتير", desc: "أتمتة وثائق شاملة تستخرج البيانات المنظمة من أكثر من 2,000 فاتورة مورد يومياً — OCR مع تحليل التخطيط والتحقق من الحقول مقابل أوامر الشراء والمزامنة التلقائية مع نظام ERP وإشارة الاستثناءات وطابور مراجعة لـ4% من الفواتير. تكلفة المعالجة انخفضت 95%.", metric: "2,000 فاتورة/يوم", result: "خفض التكلفة 95%" },
          { label: "تحليلات", name: "مستودع بيانات متعدد المصادر", desc: "خط أنابيب ETL مُنسَّق يستوعب البيانات من 12 واجهة API لـSaaS (Salesforce وHubSpot وStripe وGoogle Ads وثمانية أخرى) ويطبق قواعد التحويل وإلغاء التكرار ويحمّلها في مستودع PostgreSQL مركزي ويحدّث عروض BI. التقارير التي كانت تستغرق 3 ساعات أصبحت تُنجز في أقل من 5 دقائق.", metric: "12 مصدر API", result: "تقارير يومية في <5 دقائق" },
          { label: "SaaS", name: "نظام أتمتة الإعداد للعملاء", desc: "سير عمل مُحفَّز بالأحداث ينشأ مع كل اشتراك جديد — يُجهِّز الحسابات والأذونات عبر سبعة أدوات ويجدول تسلسلات بريد إلكتروني وتطبيق مخصصة بناءً على خطة العميل وقطاعه ويُخطر نظام CRM ببيانات إثرائية ويُنشئ قناة Slack للحسابات المؤسسية. وقت الإعداد اليدوي انخفض من 3 ساعات إلى صفر.", metric: "3 ساعات → 0 جهد يدوي", result: "تسليم 100% متسق" },
          { label: "موارد بشرية وعمليات", name: "منظّم تجهيز الموظفين الجدد", desc: "أتمتة تُفعَّل فور قبول عرض وظيفة — تُنشئ حسابات الدليل وتُجهِّز التراخيص عبر أحد عشر أداة SaaS وتجدول تسليم المعدات وترسل تسلسل ترحيب مخصصاً وتملأ قائمة تحقق المدير. انخفض وقت التجهيز من أربعة أيام إلى 45 دقيقة دون أي خطوة مفوّتة.", metric: "4 أيام → 45 دقيقة", result: "صفر تجهيز مفوّت" },
          { label: "تجارة إلكترونية", name: "خط التنفيذ متعدد القنوات", desc: "أتمتة شاملة تُزامن الطلبات عبر أربع قنوات بيع (Shopify وAmazon وJumia وموقع العميل) وتختار أفضل شركة شحن لكل طرد وتولّد ملصقات الشحن بالجملة وتطبعها على طابعات المستودع وتعيد أرقام التتبع إلى جميع القنوات في ثوانٍ. انخفض وقت معالجة 1,200 طلب يومي من 8 ساعات إلى 12 دقيقة.", metric: "4 قنوات · 1,200 طلب", result: "معالجة 8 ساعات → 12 دقيقة" },
          { label: "امتثال", name: "محرك التقارير التنظيمية", desc: "تجميع آلي لبيانات المراكز المالية من ستة أنظمة داخلية في مستندات XML متوافقة مع المنظِّمين وملفات PDF جاهزة للمدققين — مع التحقق المتقاطع بين الحقول والكشف عن الشذوذات قبل التقديم وسجل تدقيق موقَّع تشفيرياً وتنبيهات قبل 72 ساعة من كل موعد نهائي تنظيمي.", metric: "6 أنظمة، صفر إدخال يدوي", result: "100% تقارير في المواعيد" },
        ],
      },
      ai: {
        category: "LLM · RAG · رؤية الكمبيوتر",
        headline: "ذكاء اصطناعي يستحق مكانه في منتجك.",
        desc: "نبني ذكاءً اصطناعياً يستحق مكانه في منتجك — لا مجرد روبوت دردشة مُضاف، بل تكاملات عميقة تقلل التكاليف التشغيلية الحقيقية. خطوط LLM مخصصة وأنظمة RAG ورؤية الكمبيوتر ونماذج تنبؤية بعائد استثمار قابل للقياس.",
        statLabels: ["حجم الدعم المُحوَّل تلقائياً", "توفير أسبوعي لكل فريق", "معدل الهلوسة في أنظمة RAG", "قدرة NLP العربية لـSMENA"],
        features: ["ضبط دقيق مخصص للـLLM وهندسة الـprompts", "خطوط RAG (الجيل المعزز بالاسترداد)", "دعم العملاء بالذكاء الاصطناعي وفرز التذاكر", "رؤية الكمبيوتر وحلول OCR", "التحليلات التنبؤية وتوقع الطلب", "معالجة NLP العربية أولاً لأسواق MENA"],
        deliverables: ["نموذج أو خط أنابيب ذكاء اصطناعي (جاهز للإنتاج)", "طبقة تكامل API", "إعداد قاعدة البيانات المتجهة وفهرستها", "تقرير التقييم والـbenchmark", "مراقبة النموذج وكشف الانجراف", "خيار عقد تحسين مستمر"],
        faq: [
          { q: "هل تبنون نماذج من الصفر أم تعملون مع LLMs موجودة؟", a: "في الغالب نماذج أساسية موجودة، مُكيَّفة ومنسَّقة لمجالك. بناء نموذج أساسي من الصفر يتطلب مئات الملايين في الحوسبة. ما نبنيه هو الطبقة فوق ذلك: خطوط الاسترداد والـprompts المخصصة والضبط الدقيق على مفردات مجالك وضمانات السلامة وأطر التقييم والتكاملات." },
          { q: "كيف تحافظون على انخفاض معدلات الهلوسة في أنظمة RAG؟", a: "عدة تقنيات مجتمعة: جودة الاسترداد (نماذج تضمين مُضبَّطة وأحجام chunks مناسبة)، وتأسيس الإجابة (يجب على النموذج استشهاد بـchunks المصدر)، وتسجيل درجة الثقة (الاستجابات منخفضة اليقين تذهب لطابور مراجعة بشرية)، وتقييم مستمر مقابل benchmark من أزواج أسئلة وأجوبة معروفة من مجالك." },
          { q: "كم يستغرق واقعياً رؤية عائد الاستثمار من نظام ذكاء اصطناعي؟", a: "للذكاء الاصطناعي الموجه للأتمتة — معالجة المستندات والفرز والتصنيف — يكون العائد مرئياً عادةً خلال 60-90 يوماً من الإطلاق. ندمج القياس في النظام من اليوم الأول: التكلفة لكل تذكرة محلولة والساعات الموفرة والدقة مقارنة بالأداء البشري. لديك بيانات لا انطباعات من الأسبوع الأول." },
          { q: "هل تُرسَل وثائقنا إلى OpenAI أو Anthropic؟", a: "فقط إذا اخترت تلك الإعدادات. يمكننا نشر نماذج تعمل بالكامل داخل حسابك السحابي — AWS Bedrock أو Azure OpenAI Service أو نماذج مفتوحة المصدر مستضافة ذاتياً — بدون أي بيانات تغادر VPC خاصتك. نوثق التدفق الكامل للبيانات ونوفر المواد الداعمة لمراجعات الامتثال." },
          { q: "ماذا تعني معالجة NLP العربية أولاً من الناحية العملية؟", a: "معظم LLMs تؤدي بشكل أسوأ باللغة العربية — احتجاز سياقي أقصر، ودقة اتباع التعليمات أقل، وجودة إخراج متدهورة على اللهجات (الدارجة والشامية والخليجية). نعالج ذلك من خلال قوالب prompts ثنائية اللغة، وضبط الاسترداد الخاص بالعربية مع تجذير مورفولوجي، ومجموعات تقييم تختبر الفصحى واللهجة الإقليمية ذات الصلة، ومراجعين ناطقين بالعربية." },
          { q: "هل يمكن للذكاء الاصطناعي استبدال فريق بشري للعمل المعقد بالكامل؟", a: "للمهام المحددة جيداً ذات معايير النجاح الواضحة — نعم، بالكامل. بنينا أنظمة استبدلت العمل اليدوي كلياً في إدخال بيانات الفواتير وتوجيه التذاكر وتوليد التقارير. لأي شيء يتطلب الحكم أو التعاطف أو المسؤولية القانونية، الهندسة الصحيحة هي الإنسان المُساعَد بالذكاء الاصطناعي. نصمم هذه الحدود بعناية ولن نبيع قدرات أكثر مما نستطيع تقديمه." },
        ],
        projects: [
          { label: "دعم العملاء", name: "محرك الفرز والحل بالذكاء الاصطناعي", desc: "طبقة دعم مدعومة بـLLM تصنّف التذاكر الواردة حسب النية والإلحاحية وتصيغ ردود حل للمراجعة البشرية وتحل تلقائياً 68% من التذاكر مقابل قاعدة معرفة منظمة — مدمجة مع Zendesk وIntercom وويكي داخلي. جميع التذاكر غير المحلولة تُصعَّد مع ملخصات سياقية.", metric: "68% حُلّت تلقائياً", result: "توفير 420,000$ سنوياً" },
          { label: "قانوني", name: "منصة ذكاء العقود", desc: "خط أنابيب RAG يعالج مجموعة وثائق قانونية من 50,000 مستند — استخراج البنود القياسية وغير القياسية والإشارة إلى الانحرافات عن النموذج وحساب درجات المخاطر لكل عقد والإجابة على الاستفسارات بلغة طبيعية مع الفقرات المصدرية المستشهد بها. انخفض وقت مراجعة العقد من ثلاثة أيام إلى 25 دقيقة.", metric: "50 ألف وثيقة مفهرسة", result: "مراجعة عقود أسرع 90%" },
          { label: "تجارة إلكترونية", name: "محرك توقعات الطلب", desc: "نموذج تنبؤي مدرَّب على ثلاث سنوات من بيانات المبيعات على مستوى SKU والأنماط الموسمية والتقويمات الترويجية والمؤشرات الاقتصادية الخارجية — ينتج توقعات متجددة لمدة 90 يوماً لكل خط منتجات مع فترات ثقة. خفّض نفاد المخزون بنسبة 42% وتكاليف المخزون الزائد بنسبة 31% عبر 8,000+ خط منتج.", metric: "+8,000 SKU", result: "42% أقل نفاداً للمخزون" },
          { label: "عقارات", name: "استخراج بنود الإيجار وتحديد المخاطر", desc: "خط أنابيب RAG يعالج محافظ عقود إيجار تجارية تصل إلى 500 صفحة — استخراج تلقائي لبنود الفسخ وآليات مراجعة الإيجار وحدود رسوم الخدمة و40 حقلاً رئيسياً آخر. البنود غير القياسية تُبرَز في واجهة مراجعة مع الفقرة المصدرية. استُخدم على محفظة بقيمة 2.4 مليار دولار.", metric: "مراجعة 72 ساعة → 15 دقيقة", result: "استُخدم على محفظة بـ2.4 مليار $" },
          { label: "ذكاء مبيعات", name: "محرك تحليل المكالمات والتدريب", desc: "نسخ آني وتحليل هيكلي لمكالمات المبيعات — نسخ منفصل للمتكلمين ومسار المشاعر وكشف الاعتراضات مع ردود مقترحة ونسبة الكلام إلى الاستماع والإشارة إلى ذكر المنافسين وبطاقات تدريب تُسلَّم في دقيقتين. ارتفع معدل الإغلاق 22% عبر فريق مبيعات من 120 شخصاً في أول ربع سنة.", metric: "رؤى في دقيقتين", result: "معدل الإغلاق +22%" },
          { label: "تصنيع", name: "نظام مراقبة الجودة البصرية", desc: "خط أنابيب رؤية حاسوبية مُنشأ على خط الإنتاج يفحص 120 وحدة في الدقيقة — نموذج التفاف مخصص يكتشف عيوب الأسطح والانحرافات الأبعادية وتوافق التسميات بدقة 99.1%. يحل محل عملية أخذ عينات يدوية كانت معدل كشف عيوبها 78% مما تسبّب في إعادة معالجة مكلفة.", metric: "120 وحدة/دقيقة", result: "كشف من 78% إلى 99.1%" },
        ],
      },
    },
  },
};

export function getSlugI18n(lang: string): SlugI18n {
  return SLUG[(lang as Lang)] ?? SLUG.en;
}
