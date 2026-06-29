const STORAGE_KEYS = {
  theme: "maktabat-theme",
  language: "maktabat-language",
  favorites: "maktabat-favorites",
  history: "maktabat-history",
  user: "maktabat-user"
};

const translations = {
  fr: {
    topBanner: "Bibliothèque numérique officielle • Vidéos, audios, manuscrits et archives premium",
    notify: "Activer les notifications",
    brandSubtitle: "Bibliothèque officielle",
    navHome: "Accueil",
    navVideo: "Vidéothèque",
    navAudio: "Audiothèque",
    navLibrary: "Bibliothèque",
    navGallery: "Galerie",
    navBio: "Biographies",
    navSubscription: "Abonnement",
    navAdmin: "Administration",
    languageLabel: "Langue",
    headerSignIn: "Connexion",
    headerSubscribe: "S'abonner",
    heroEyebrow: "La bibliothèque numérique officielle des œuvres de Cheikh Abdoul Hamid Sarr",
    heroTitle: "Maktabat Cheikh Abdoul Hamid Sarr",
    heroSubtitle: "Préserver, transmettre et faire rayonner l’héritage de la Tarikha Tidjaniya et de Cheikh Seydi El Hadj Malick Sy.",
    heroPrimary: "Découvrir les enseignements",
    heroSecondary: "S’abonner",
    searchPlaceholder: "Rechercher vidéos, audios, articles, mots-clés...",
    searchAction: "Rechercher",
    heroChipOne: "4 langues disponibles",
    heroChipTwo: "500 FCFA / mois",
    heroChipThree: "Rapide, sécurisé et SEO-ready",
    statMembers: "membres fondateurs",
    statVideos: "vidéos pilotes",
    statAudios: "audios disponibles",
    statDocs: "documents catalogués",
    heroSpotlightLabel: "À la une cette semaine",
    heroSpotlightTitle: "Transmission, excellence et mémoire vivante",
    heroSpotlightText: "Une expérience éditoriale pensée pour préserver les archives, diffuser les enseignements et accompagner les nouvelles générations.",
    heroQuickOneTitle: "Conférences premium",
    heroQuickOneText: "Grandes vignettes, accès rapide et favoris personnels",
    heroQuickTwoTitle: "Recherche intelligente",
    heroQuickTwoText: "Vidéos, audios, thèmes religieux et archives historiques",
    featuredEyebrow: "Expérience immersive",
    featuredTitle: "Une page d’accueil pensée comme une plateforme haut de gamme",
    featuredText: "Une mise en avant éditoriale inspirée des grandes plateformes médias, adaptée à une bibliothèque spirituelle moderne.",
    featuredBadge: "Sélection éditoriale",
    featuredWatch: "Lancer la lecture",
    featuredShare: "Partager",
    featureCardOneLabel: "Plateforme",
    featureCardOneTitle: "Parcours vidéo façon TED, MasterClass et Netflix",
    featureCardOneText: "Des rails fluides, une navigation instantanée et des vignettes généreuses pour les enseignements majeurs.",
    featureCardTwoLabel: "Abonnement",
    featureCardTwoTitle: "500 FCFA par mois, simple et extensible",
    featureCardTwoText: "Wave Sénégal, carte bancaire et extension Mobile Money prête à être branchée côté backend.",
    featureCardThreeLabel: "Diffusion",
    featureCardThreeTitle: "Multilingue, partage social et mode sombre",
    featureCardThreeText: "Une plateforme conçue pour toucher des milliers d’utilisateurs en Afrique et dans la diaspora.",
    searchResultsEyebrow: "Recherche intelligente",
    searchResultsTitle: "Résultats instantanés dans toute la bibliothèque",
    searchResultsText: "Recherchez par thème, mot-clé, type de contenu ou figure historique.",
    searchResultsMeta: "{count} résultat(s) pour “{query}”",
    noResults: "Aucun contenu correspondant. Essayez un autre thème ou mot-clé.",
    videoEyebrow: "Vidéothèque",
    videoTitle: "Les enseignements en grand format",
    videoText: "Conférences, sermons, défense de l’Islam et de la Tarikha Tidjaniya, histoire et questions-réponses.",
    filterAll: "Tout voir",
    filterConferences: "Conférences",
    filterSermons: "Sermons",
    filterTeachings: "Enseignements",
    filterIslam: "Défense de l’Islam",
    filterTidjaniya: "Défense de la Tidjaniya",
    filterHistory: "Histoire",
    filterQA: "Questions-Réponses",
    watchNow: "Voir",
    listenNow: "Ecouter",
    favoriteAdd: "Favori",
    favoriteRemove: "Retirer",
    accessFree: "Libre",
    accessPremium: "Premium",
    audioEyebrow: "Audiothèque",
    audioTitle: "Écouter, méditer et conserver les voix de la transmission",
    audioText: "Conférences audio, khassidas, podcasts, sermons et archives sonores avec lecteur intégré.",
    audioCurrentLabel: "Lecture en cours",
    audioPlaylistLabel: "Playlist disponible",
    audioBookmark: "Ajouter aux favoris",
    libraryEyebrow: "Bibliothèque numérique",
    libraryTitle: "Articles, livres, manuscrits et documents historiques",
    libraryText: "Une bibliothèque structurée pour la lecture, l’annotation, la consultation rapide et le téléchargement selon l’abonnement.",
    readPreview: "Aperçu",
    download: "Télécharger",
    subscriberOnly: "Réservé aux abonnés",
    galleryEyebrow: "Galerie photos",
    galleryTitle: "Archives visuelles et mémoire historique",
    galleryText: "Photos historiques, événements, rencontres et instants marquants autour des enseignements.",
    viewPhoto: "Voir la photo",
    bioEyebrow: "Biographies",
    bioTitle: "Les figures clés de l’héritage spirituel",
    bioText: "Des pages dédiées à Cheikh Abdoul Hamid Sarr, Cheikh Seydi El Hadj Malick Sy, aux khalifes, disciples et compagnons.",
    readBio: "Lire la biographie",
    subscriptionEyebrow: "Système d’abonnement",
    subscriptionTitle: "Un accès premium simple, accessible et prêt à évoluer",
    subscriptionText: "Déverrouillez les contenus premium, la bibliothèque complète et les téléchargements avec une tarification claire.",
    priceBadge: "Offre mensuelle",
    pricePerMonth: "par mois",
    subscriptionLead: "L’offre idéale pour accéder aux vidéos premium, aux archives audio et aux documents réservés aux abonnés.",
    subscriptionBenefitOne: "Accès aux vidéos premium",
    subscriptionBenefitTwo: "Audiothèque complète et archives sonores",
    subscriptionBenefitThree: "Téléchargement des documents autorisés",
    subscriptionBenefitFour: "Historique, favoris et continuer la lecture",
    subscriptionPrimary: "Commencer l’abonnement",
    subscriptionSecondary: "Contacter l’équipe",
    paymentTitle: "Moyens de paiement pris en charge",
    paymentWave: "Wave Sénégal",
    paymentCard: "Carte bancaire",
    paymentMobile: "Extension Mobile Money",
    paymentText: "Le design est déjà prêt pour brancher un tunnel de paiement sécurisé et faire évoluer les méthodes de paiement dans le futur.",
    securityOneTitle: "Rapide",
    securityOneText: "Chargement optimisé pour mobile et desktop",
    securityTwoTitle: "Sécurisé",
    securityTwoText: "Architecture prête pour authentification et paiement",
    securityThreeTitle: "Référencé",
    securityThreeText: "SEO pensé dès la structure de la page",
    accountsEyebrow: "Comptes utilisateurs",
    accountsTitle: "Inscription, connexion et expérience personnelle",
    accountsText: "Chaque membre retrouve son tableau de bord, son historique de lecture, ses favoris et son espace personnel.",
    accountStatusLabel: "Espace membre",
    accountGuestTitle: "Créez votre compte pour démarrer",
    accountGuestText: "Inscription, connexion et mot de passe oublié sont déjà prévus dans l’interface.",
    accountReadyTitle: "Votre espace personnel est prêt",
    accountReadyText: "Accédez à vos contenus favoris, à l’historique et à la reprise de lecture depuis n’importe quel appareil.",
    accountCtaOne: "Créer un compte",
    accountCtaTwo: "Se connecter",
    dashboardEyebrow: "Tableau de bord personnel",
    dashboardStatus: "Prévisualisation",
    historyTitle: "Historique de lecture",
    favoritesTitle: "Favoris",
    continueTitle: "Continuer la lecture",
    emptyHistory: "Aucune lecture récente pour le moment.",
    emptyFavorites: "Aucun favori pour le moment.",
    emptyContinue: "Aucun contenu en reprise pour le moment.",
    adminEyebrow: "Tableau d’administration",
    adminTitle: "Un cockpit éditorial prêt pour la gestion complète",
    adminText: "Gestion des contenus, abonnements, utilisateurs et statistiques dans une seule interface.",
    adminActionOne: "Ajouter vidéos",
    adminActionTwo: "Ajouter audios",
    adminActionThree: "Ajouter articles",
    adminActionFour: "Ajouter livres PDF",
    adminActionFive: "Gérer utilisateurs",
    adminActionSix: "Gérer abonnements",
    adminStatsTitle: "Statistiques",
    adminStatsBadge: "Vue plateforme",
    footerTagline: "La mémoire vivante des enseignements de Cheikh Abdoul Hamid Sarr et de l’héritage de Cheikh Seydi El Hadj Malick Sy.",
    footerContactLabel: "Contact",
    footerFollowLabel: "Réseaux sociaux",
    footerRights: "Conçu pour accueillir des milliers d’utilisateurs à travers le monde.",
    authEyebrow: "Comptes utilisateurs",
    authTitle: "Accéder à votre espace membre",
    authSignin: "Connexion",
    authSignup: "Inscription",
    authReset: "Mot de passe oublié",
    authName: "Nom complet",
    authEmail: "Adresse e-mail",
    authPassword: "Mot de passe",
    authSubmitSignin: "Se connecter",
    authSubmitSignup: "Créer mon compte",
    authSubmitReset: "Recevoir le lien",
    statMembersLong: "Membres",
    statVideosLong: "Vidéos",
    statAudiosLong: "Audios",
    statDocsLong: "Documents",
    statViewsLong: "Vues",
    toastNotifications: "Notifications activées pour les nouvelles publications.",
    toastFavoriteAdded: "Ajouté aux favoris.",
    toastFavoriteRemoved: "Retiré des favoris.",
    toastSearchEmpty: "Saisissez un mot-clé pour lancer la recherche.",
    toastDocumentPremium: "Document réservé aux abonnés. Connectez-vous pour le débloquer plus tard.",
    toastDocumentPreview: "Aperçu du document prêt pour intégration.",
    toastShare: "Fenêtre de partage ouverte.",
    toastSignin: "Connexion simulée avec succès.",
    toastSignup: "Compte local créé avec succès.",
    toastReset: "Lien de réinitialisation simulé.",
    toastHistory: "Contenu ajouté à votre historique.",
    toastBio: "Fiche biographique prête pour une page dédiée.",
    toastContact: "Utilisez contact@maktabatchs.org pour finaliser le déploiement.",
    dashboardGreeting: "Bonjour, {name}",
    userGuest: "invité"
  },
  en: {
    topBanner: "Official digital library • Premium videos, audio, manuscripts and archives",
    notify: "Enable notifications",
    brandSubtitle: "Official library",
    navHome: "Home",
    navVideo: "Video library",
    navAudio: "Audio library",
    navLibrary: "Library",
    navGallery: "Gallery",
    navBio: "Biographies",
    navSubscription: "Subscription",
    navAdmin: "Admin",
    languageLabel: "Language",
    headerSignIn: "Sign in",
    headerSubscribe: "Subscribe",
    heroEyebrow: "The official digital library of Cheikh Abdoul Hamid Sarr's works",
    heroTitle: "Maktabat Cheikh Abdoul Hamid Sarr",
    heroSubtitle: "Preserve, transmit and elevate the legacy of the Tidjaniya path and Cheikh Seydi El Hadj Malick Sy.",
    heroPrimary: "Explore the teachings",
    heroSecondary: "Subscribe",
    searchPlaceholder: "Search videos, audio, articles, keywords...",
    searchAction: "Search",
    heroChipOne: "4 available languages",
    heroChipTwo: "500 FCFA / month",
    heroChipThree: "Fast, secure and SEO-ready",
    statMembers: "founding members",
    statVideos: "pilot videos",
    statAudios: "audio programs",
    statDocs: "catalogued documents",
    heroSpotlightLabel: "This week's spotlight",
    heroSpotlightTitle: "Transmission, excellence and living memory",
    heroSpotlightText: "An editorial experience built to preserve archives, broadcast teachings and support future generations.",
    heroQuickOneTitle: "Premium talks",
    heroQuickOneText: "Large thumbnails, quick access and personal favorites",
    heroQuickTwoTitle: "Smart search",
    heroQuickTwoText: "Videos, audio, religious themes and historical archives",
    featuredEyebrow: "Immersive experience",
    featuredTitle: "A homepage designed like a premium platform",
    featuredText: "Editorial storytelling inspired by world-class media platforms, adapted to a modern spiritual library.",
    featuredBadge: "Editorial selection",
    featuredWatch: "Start watching",
    featuredShare: "Share",
    featureCardOneLabel: "Platform",
    featureCardOneTitle: "TED, MasterClass and Netflix inspired video journeys",
    featureCardOneText: "Smooth rails, instant navigation and generous thumbnails for the most important teachings.",
    featureCardTwoLabel: "Subscription",
    featureCardTwoTitle: "500 FCFA per month, simple and expandable",
    featureCardTwoText: "Wave Senegal, bank card and a future Mobile Money extension ready for backend integration.",
    featureCardThreeLabel: "Reach",
    featureCardThreeTitle: "Multilingual, social sharing and dark mode",
    featureCardThreeText: "A platform designed to reach thousands of users across Africa and the diaspora.",
    searchResultsEyebrow: "Smart search",
    searchResultsTitle: "Instant results across the entire library",
    searchResultsText: "Search by theme, keyword, content type or historical figure.",
    searchResultsMeta: "{count} result(s) for “{query}”",
    noResults: "No matching content. Try another theme or keyword.",
    videoEyebrow: "Video library",
    videoTitle: "Teachings in cinematic format",
    videoText: "Talks, sermons, defense of Islam and Tidjaniya, history and Q&A sessions.",
    filterAll: "View all",
    filterConferences: "Talks",
    filterSermons: "Sermons",
    filterTeachings: "Teachings",
    filterIslam: "Defense of Islam",
    filterTidjaniya: "Defense of Tidjaniya",
    filterHistory: "History",
    filterQA: "Q&A",
    watchNow: "Watch",
    listenNow: "Listen",
    favoriteAdd: "Favorite",
    favoriteRemove: "Remove",
    accessFree: "Free",
    accessPremium: "Premium",
    audioEyebrow: "Audio library",
    audioTitle: "Listen, reflect and preserve the living voices of transmission",
    audioText: "Audio talks, khassidas, podcasts, sermons and sound archives with an integrated player.",
    audioCurrentLabel: "Now playing",
    audioPlaylistLabel: "Available playlist",
    audioBookmark: "Add to favorites",
    libraryEyebrow: "Digital library",
    libraryTitle: "Articles, books, manuscripts and historical documents",
    libraryText: "A structured library for reading, annotation, fast consultation and subscription-based downloads.",
    readPreview: "Preview",
    download: "Download",
    subscriberOnly: "Subscribers only",
    galleryEyebrow: "Photo gallery",
    galleryTitle: "Visual archives and historical memory",
    galleryText: "Historic photographs, events, meetings and key moments around the teachings.",
    viewPhoto: "View photo",
    bioEyebrow: "Biographies",
    bioTitle: "The key figures of the spiritual legacy",
    bioText: "Dedicated pages for Cheikh Abdoul Hamid Sarr, Cheikh Seydi El Hadj Malick Sy, khalifes, disciples and companions.",
    readBio: "Read biography",
    subscriptionEyebrow: "Subscription system",
    subscriptionTitle: "Simple, accessible premium access ready to grow",
    subscriptionText: "Unlock premium content, the full library and downloads with clear pricing.",
    priceBadge: "Monthly offer",
    pricePerMonth: "per month",
    subscriptionLead: "The ideal offer to access premium videos, audio archives and documents reserved for subscribers.",
    subscriptionBenefitOne: "Access to premium videos",
    subscriptionBenefitTwo: "Full audio library and sound archives",
    subscriptionBenefitThree: "Download eligible documents",
    subscriptionBenefitFour: "History, favorites and continue watching",
    subscriptionPrimary: "Start subscription",
    subscriptionSecondary: "Contact the team",
    paymentTitle: "Supported payment methods",
    paymentWave: "Wave Senegal",
    paymentCard: "Bank card",
    paymentMobile: "Mobile Money extension",
    paymentText: "The interface is already ready for secure payment integration and future payment method expansion.",
    securityOneTitle: "Fast",
    securityOneText: "Optimized loading on mobile and desktop",
    securityTwoTitle: "Secure",
    securityTwoText: "Architecture ready for authentication and payments",
    securityThreeTitle: "Searchable",
    securityThreeText: "SEO planned from the page structure",
    accountsEyebrow: "User accounts",
    accountsTitle: "Registration, sign in and personal experience",
    accountsText: "Each member gets a dashboard, playback history, favorites and a personal space.",
    accountStatusLabel: "Member area",
    accountGuestTitle: "Create your account to get started",
    accountGuestText: "Registration, sign in and password recovery are already planned in the interface.",
    accountReadyTitle: "Your personal space is ready",
    accountReadyText: "Access your favorite content, history and resume playback from any device.",
    accountCtaOne: "Create account",
    accountCtaTwo: "Sign in",
    dashboardEyebrow: "Personal dashboard",
    dashboardStatus: "Preview",
    historyTitle: "Playback history",
    favoritesTitle: "Favorites",
    continueTitle: "Continue watching",
    emptyHistory: "No recent playback yet.",
    emptyFavorites: "No favorites yet.",
    emptyContinue: "No resume content yet.",
    adminEyebrow: "Admin dashboard",
    adminTitle: "An editorial cockpit ready for full management",
    adminText: "Manage content, subscriptions, users and statistics in one interface.",
    adminActionOne: "Add videos",
    adminActionTwo: "Add audio",
    adminActionThree: "Add articles",
    adminActionFour: "Add PDF books",
    adminActionFive: "Manage users",
    adminActionSix: "Manage subscriptions",
    adminStatsTitle: "Statistics",
    adminStatsBadge: "Platform overview",
    footerTagline: "The living memory of Cheikh Abdoul Hamid Sarr's teachings and the legacy of Cheikh Seydi El Hadj Malick Sy.",
    footerContactLabel: "Contact",
    footerFollowLabel: "Social networks",
    footerRights: "Designed to welcome thousands of users around the world.",
    authEyebrow: "User accounts",
    authTitle: "Access your member area",
    authSignin: "Sign in",
    authSignup: "Sign up",
    authReset: "Forgot password",
    authName: "Full name",
    authEmail: "Email address",
    authPassword: "Password",
    authSubmitSignin: "Sign in",
    authSubmitSignup: "Create my account",
    authSubmitReset: "Send the link",
    statMembersLong: "Members",
    statVideosLong: "Videos",
    statAudiosLong: "Audio",
    statDocsLong: "Documents",
    statViewsLong: "Views",
    toastNotifications: "Notifications enabled for new releases.",
    toastFavoriteAdded: "Added to favorites.",
    toastFavoriteRemoved: "Removed from favorites.",
    toastSearchEmpty: "Enter a keyword to start searching.",
    toastDocumentPremium: "Subscriber-only document. Sign in to unlock it later.",
    toastDocumentPreview: "Document preview ready for integration.",
    toastShare: "Share window opened.",
    toastSignin: "Local sign in simulated successfully.",
    toastSignup: "Local account created successfully.",
    toastReset: "Reset link simulated.",
    toastHistory: "Content added to your history.",
    toastBio: "Biography sheet ready for a dedicated page.",
    toastContact: "Use contact@maktabatchs.org to finalize deployment.",
    dashboardGreeting: "Hello, {name}",
    userGuest: "guest"
  },
  ar: {
    topBanner: "المكتبة الرقمية الرسمية • فيديوهات وتسجيلات ومخطوطات وأرشيف مميز",
    notify: "تفعيل الإشعارات",
    brandSubtitle: "المكتبة الرسمية",
    navHome: "الرئيسية",
    navVideo: "مكتبة الفيديو",
    navAudio: "مكتبة الصوت",
    navLibrary: "المكتبة",
    navGallery: "المعرض",
    navBio: "السير",
    navSubscription: "الاشتراك",
    navAdmin: "الإدارة",
    languageLabel: "اللغة",
    headerSignIn: "تسجيل الدخول",
    headerSubscribe: "اشترك",
    heroEyebrow: "المكتبة الرقمية الرسمية لأعمال الشيخ عبدول حميد سار",
    heroTitle: "مكتبة الشيخ عبدول حميد سار",
    heroSubtitle: "حفظ ونقل وإبراز تراث الطريقة التجانية وتراث الشيخ سيدي الحاج مالك سي.",
    heroPrimary: "اكتشف الدروس",
    heroSecondary: "اشترك",
    searchPlaceholder: "ابحث في الفيديوهات والتسجيلات والمقالات والكلمات المفتاحية...",
    searchAction: "بحث",
    heroChipOne: "أربع لغات متاحة",
    heroChipTwo: "500 فرنك إفريقي / الشهر",
    heroChipThree: "سريع وآمن ومهيأ لمحركات البحث",
    statMembers: "أعضاء مؤسسون",
    statVideos: "فيديوهات أولية",
    statAudios: "مواد صوتية",
    statDocs: "وثائق مفهرسة",
    heroSpotlightLabel: "واجهة هذا الأسبوع",
    heroSpotlightTitle: "نقل العلم والتميز والذاكرة الحية",
    heroSpotlightText: "تجربة تحريرية صممت لحفظ الأرشيف ونشر الدروس ومرافقة الأجيال الجديدة.",
    heroQuickOneTitle: "محاضرات مميزة",
    heroQuickOneText: "بطاقات كبيرة ووصول سريع ومفضلة شخصية",
    heroQuickTwoTitle: "بحث ذكي",
    heroQuickTwoText: "فيديوهات وصوتيات وموضوعات دينية وأرشيف تاريخي",
    featuredEyebrow: "تجربة غامرة",
    featuredTitle: "صفحة رئيسية بروح منصة فاخرة",
    featuredText: "إبراز تحريري مستلهم من المنصات الإعلامية العالمية ومكيّف مع مكتبة روحية حديثة.",
    featuredBadge: "اختيار تحريري",
    featuredWatch: "ابدأ المشاهدة",
    featuredShare: "مشاركة",
    featureCardOneLabel: "المنصة",
    featureCardOneTitle: "رحلات فيديو مستلهمة من TED وMasterClass وNetflix",
    featureCardOneText: "مسارات سلسة وتنقل فوري وصور مصغرة واسعة لأهم الدروس.",
    featureCardTwoLabel: "الاشتراك",
    featureCardTwoTitle: "500 فرنك إفريقي شهرياً بشكل بسيط وقابل للتوسع",
    featureCardTwoText: "Wave Senegal وبطاقات بنكية وإضافة Mobile Money جاهزة للربط الخلفي.",
    featureCardThreeLabel: "الانتشار",
    featureCardThreeTitle: "متعدد اللغات ومشاركة اجتماعية ووضع ليلي",
    featureCardThreeText: "منصة صممت للوصول إلى آلاف المستخدمين في إفريقيا والمهجر.",
    searchResultsEyebrow: "بحث ذكي",
    searchResultsTitle: "نتائج فورية في كامل المكتبة",
    searchResultsText: "ابحث حسب الموضوع أو الكلمة المفتاحية أو نوع المحتوى أو الشخصية التاريخية.",
    searchResultsMeta: "{count} نتيجة لعبارة “{query}”",
    noResults: "لا توجد نتائج مطابقة. جرّب موضوعاً أو كلمة أخرى.",
    videoEyebrow: "مكتبة الفيديو",
    videoTitle: "الدروس بصيغة سينمائية",
    videoText: "محاضرات وخطب والدفاع عن الإسلام والطريقة التجانية والتاريخ والأسئلة والأجوبة.",
    filterAll: "عرض الكل",
    filterConferences: "محاضرات",
    filterSermons: "خطب",
    filterTeachings: "دروس",
    filterIslam: "الدفاع عن الإسلام",
    filterTidjaniya: "الدفاع عن التجانية",
    filterHistory: "التاريخ",
    filterQA: "أسئلة وأجوبة",
    watchNow: "شاهد",
    listenNow: "استمع",
    favoriteAdd: "مفضلة",
    favoriteRemove: "إزالة",
    accessFree: "مفتوح",
    accessPremium: "مميز",
    audioEyebrow: "مكتبة الصوت",
    audioTitle: "استمع وتأمل واحفظ الأصوات الحية للنقل",
    audioText: "محاضرات صوتية وقصائد وبودكاست وخطب وأرشيف صوتي مع مشغل مدمج.",
    audioCurrentLabel: "يعمل الآن",
    audioPlaylistLabel: "قائمة التشغيل",
    audioBookmark: "أضف إلى المفضلة",
    libraryEyebrow: "المكتبة الرقمية",
    libraryTitle: "مقالات وكتب ومخطوطات ووثائق تاريخية",
    libraryText: "مكتبة منظمة للقراءة والمراجعة السريعة والتنزيل حسب الاشتراك.",
    readPreview: "معاينة",
    download: "تنزيل",
    subscriberOnly: "خاص بالمشتركين",
    galleryEyebrow: "معرض الصور",
    galleryTitle: "الأرشيف البصري والذاكرة التاريخية",
    galleryText: "صور تاريخية وفعاليات ولقاءات ولحظات بارزة حول الدروس.",
    viewPhoto: "عرض الصورة",
    bioEyebrow: "السير",
    bioTitle: "الشخصيات الأساسية في الإرث الروحي",
    bioText: "صفحات مخصصة للشيخ عبدول حميد سار والشيخ سيدي الحاج مالك سي والخلفاء والتلاميذ والرفاق.",
    readBio: "قراءة السيرة",
    subscriptionEyebrow: "نظام الاشتراك",
    subscriptionTitle: "وصول مميز بسيط ومتاح وجاهز للتوسع",
    subscriptionText: "افتح المحتوى المميز والمكتبة الكاملة والتنزيلات بتسعير واضح.",
    priceBadge: "عرض شهري",
    pricePerMonth: "شهرياً",
    subscriptionLead: "العرض المثالي للوصول إلى الفيديوهات المميزة والأرشيف الصوتي والوثائق المخصصة للمشتركين.",
    subscriptionBenefitOne: "الوصول إلى الفيديوهات المميزة",
    subscriptionBenefitTwo: "المكتبة الصوتية الكاملة والأرشيف الصوتي",
    subscriptionBenefitThree: "تنزيل الوثائق المسموح بها",
    subscriptionBenefitFour: "السجل والمفضلة ومتابعة المشاهدة",
    subscriptionPrimary: "ابدأ الاشتراك",
    subscriptionSecondary: "اتصل بالفريق",
    paymentTitle: "وسائل الدفع المدعومة",
    paymentWave: "Wave Senegal",
    paymentCard: "بطاقة بنكية",
    paymentMobile: "إضافة Mobile Money",
    paymentText: "الواجهة جاهزة لربط دفع آمن وتوسيع وسائل الدفع مستقبلاً.",
    securityOneTitle: "سريع",
    securityOneText: "تحميل محسن للهاتف والكمبيوتر",
    securityTwoTitle: "آمن",
    securityTwoText: "بنية جاهزة للمصادقة والدفع",
    securityThreeTitle: "ظاهر في البحث",
    securityThreeText: "تهيئة محركات البحث منذ بنية الصفحة",
    accountsEyebrow: "حسابات المستخدمين",
    accountsTitle: "التسجيل والدخول وتجربة شخصية",
    accountsText: "كل عضو يجد لوحة قيادته وسجل التشغيل والمفضلة ومساحته الشخصية.",
    accountStatusLabel: "مساحة العضو",
    accountGuestTitle: "أنشئ حسابك للانطلاق",
    accountGuestText: "التسجيل والدخول واستعادة كلمة المرور كلها موجودة في الواجهة.",
    accountReadyTitle: "مساحتك الشخصية جاهزة",
    accountReadyText: "الوصول إلى محتواك المفضل وسجلك واستئناف التشغيل من أي جهاز.",
    accountCtaOne: "إنشاء حساب",
    accountCtaTwo: "تسجيل الدخول",
    dashboardEyebrow: "لوحة شخصية",
    dashboardStatus: "معاينة",
    historyTitle: "سجل التشغيل",
    favoritesTitle: "المفضلة",
    continueTitle: "متابعة المشاهدة",
    emptyHistory: "لا يوجد سجل حديث حالياً.",
    emptyFavorites: "لا توجد مفضلات حالياً.",
    emptyContinue: "لا يوجد محتوى قيد الاستئناف حالياً.",
    adminEyebrow: "لوحة الإدارة",
    adminTitle: "قمرة تحرير جاهزة للإدارة الكاملة",
    adminText: "إدارة المحتوى والاشتراكات والمستخدمين والإحصاءات في واجهة واحدة.",
    adminActionOne: "إضافة فيديوهات",
    adminActionTwo: "إضافة صوتيات",
    adminActionThree: "إضافة مقالات",
    adminActionFour: "إضافة كتب PDF",
    adminActionFive: "إدارة المستخدمين",
    adminActionSix: "إدارة الاشتراكات",
    adminStatsTitle: "الإحصاءات",
    adminStatsBadge: "نظرة عامة",
    footerTagline: "الذاكرة الحية لدروس الشيخ عبدول حميد سار وتراث الشيخ سيدي الحاج مالك سي.",
    footerContactLabel: "اتصال",
    footerFollowLabel: "الشبكات الاجتماعية",
    footerRights: "صمم ليستقبل آلاف المستخدمين حول العالم.",
    authEyebrow: "حسابات المستخدمين",
    authTitle: "الدخول إلى مساحة العضو",
    authSignin: "تسجيل الدخول",
    authSignup: "تسجيل",
    authReset: "نسيت كلمة المرور",
    authName: "الاسم الكامل",
    authEmail: "البريد الإلكتروني",
    authPassword: "كلمة المرور",
    authSubmitSignin: "تسجيل الدخول",
    authSubmitSignup: "إنشاء الحساب",
    authSubmitReset: "إرسال الرابط",
    statMembersLong: "الأعضاء",
    statVideosLong: "الفيديوهات",
    statAudiosLong: "الصوتيات",
    statDocsLong: "الوثائق",
    statViewsLong: "المشاهدات",
    toastNotifications: "تم تفعيل إشعارات المنشورات الجديدة.",
    toastFavoriteAdded: "تمت الإضافة إلى المفضلة.",
    toastFavoriteRemoved: "تمت الإزالة من المفضلة.",
    toastSearchEmpty: "اكتب كلمة مفتاحية لبدء البحث.",
    toastDocumentPremium: "هذه الوثيقة للمشتركين فقط.",
    toastDocumentPreview: "معاينة الوثيقة جاهزة للربط لاحقاً.",
    toastShare: "تم فتح نافذة المشاركة.",
    toastSignin: "تمت محاكاة تسجيل الدخول بنجاح.",
    toastSignup: "تم إنشاء حساب محلي بنجاح.",
    toastReset: "تمت محاكاة رابط الاستعادة.",
    toastHistory: "تمت إضافة المحتوى إلى السجل.",
    toastBio: "بطاقة السيرة جاهزة لصفحة مخصصة.",
    toastContact: "استخدم contact@maktabatchs.org لإتمام الإطلاق.",
    dashboardGreeting: "مرحباً، {name}",
    userGuest: "زائر"
  },
  wo: {
    topBanner: "Maktaba dijitaal bu ofisiyel • Wideyoo, audio, mbind mi ak arsiif premium",
    notify: "Dugal yëgle yi",
    brandSubtitle: "Maktaba ofisiyel",
    navHome: "Dalal",
    navVideo: "Wideyoo",
    navAudio: "Audio",
    navLibrary: "Maktaba",
    navGallery: "Sawar",
    navBio: "Dund",
    navSubscription: "Abonnement",
    navAdmin: "Admin",
    languageLabel: "Làkk",
    headerSignIn: "Dugg",
    headerSubscribe: "Abonnéel",
    heroEyebrow: "Maktaba dijitaal bu ofisiyel ci liggéeyu Cheikh Abdoul Hamid Sarr",
    heroTitle: "Maktabat Cheikh Abdoul Hamid Sarr",
    heroSubtitle: "Samm, jottali te yékkati cosaanu Tarikha Tidjaniya ak Cheikh Seydi El Hadj Malick Sy.",
    heroPrimary: "Seet njàngale yi",
    heroSecondary: "Abonnéel",
    searchPlaceholder: "Wut wideyoo, audio, mbind, baat yu am solo...",
    searchAction: "Wut",
    heroChipOne: "4 làkk yu am",
    heroChipTwo: "500 FCFA / weer",
    heroChipThree: "Gaaw, wóor te SEO-ready",
    statMembers: "jàmmkat yu njëkk",
    statVideos: "wideyoo yu pilot",
    statAudios: "audio yi",
    statDocs: "dokimaa yi",
    heroSpotlightLabel: "Li gën a fés ci ayu-bis bii",
    heroSpotlightTitle: "Jébbale, rafet ak fàttaliku dund",
    heroSpotlightText: "Jëfandikoo bu ñu teg ngir samm arsiif, yégle njàngale yi te dimbali xeetu ñaw.",
    heroQuickOneTitle: "Waxtaan yu premium",
    heroQuickOneText: "Kart yu mag, ag yoon gu gaaw ak favoris yu sa bopp",
    heroQuickTwoTitle: "Wut gu xel",
    heroQuickTwoText: "Wideyoo, audio, mbir yu diine ak arsiif yu taarix",
    featuredEyebrow: "Jafe-jafe bu rafet",
    featuredTitle: "Xët wu njëkk wu mel ni platfom bu kawe",
    featuredText: "Jëfandikoo bu soloo bu gën a mel ni platfom yu mag, waaye waral bésal diggante jàngum xol.",
    featuredBadge: "Tànn editorial",
    featuredWatch: "Tàmbali seetaan",
    featuredShare: "Séddoo",
    featureCardOneLabel: "Platfom",
    featureCardOneTitle: "Yooni wideyoo yu mel ni TED, MasterClass ak Netflix",
    featureCardOneText: "Rails yu doy, navigation gu gaaw ak vignettes yu yaatu ci njàngale yu mag yi.",
    featureCardTwoLabel: "Abonnement",
    featureCardTwoTitle: "500 FCFA ci weer, yomb te man a yokku",
    featureCardTwoText: "Wave Sénégal, carte bancaire ak Mobile Money ci kanam, leer na ngir backend.",
    featureCardThreeLabel: "Yëngu-yëngu",
    featureCardThreeTitle: "Làkk yu bare, séddoo social ak mode guddi",
    featureCardThreeText: "Platfom bu ñu def ngir jot ci ay junni nit ci Afrik ak diaspora.",
    searchResultsEyebrow: "Wut gu xel",
    searchResultsTitle: "Njariñ yu gaaw ci biir maktaba bépp",
    searchResultsText: "Wut ci téeméer, baat bu am solo, xeetu contenu walla nit ku taarix.",
    searchResultsMeta: "{count} njariñ ngir “{query}”",
    noResults: "Amul contenu bu mengook li nga wut. Jéemaat ak baneen téeméer walla baat.",
    videoEyebrow: "Wideyothèque",
    videoTitle: "Njàngale yi ci fasoŋ bu mag",
    videoText: "Waxtaan, sermon, aar Islam ak Tarikha Tidjaniya, taarix ak laaj-ak-tontu.",
    filterAll: "Seet lépp",
    filterConferences: "Waxtaan",
    filterSermons: "Sermon",
    filterTeachings: "Njàngale",
    filterIslam: "Aar Islam",
    filterTidjaniya: "Aar Tidjaniya",
    filterHistory: "Taarix",
    filterQA: "Laaj-Tontu",
    watchNow: "Seet",
    listenNow: "Deglu",
    favoriteAdd: "Favori",
    favoriteRemove: "Dindi",
    accessFree: "Yeesal",
    accessPremium: "Premium",
    audioEyebrow: "Audiothèque",
    audioTitle: "Déglu, xalaat te denc baat yu dund yu jébbale",
    audioText: "Waxtaan audio, khassida, podcast, sermon ak arsiif bu baat ak lecteur intégré.",
    audioCurrentLabel: "Li di dox",
    audioPlaylistLabel: "Playlist bi am",
    audioBookmark: "Yokk ci favoris",
    libraryEyebrow: "Maktaba dijitaal",
    libraryTitle: "Mbind, téere, manuscript ak dokimaa yu taarix",
    libraryText: "Maktaba bu ñu teg ba leer ngir jàng, xool lu gaaw ak yebbi ci abonnement bi.",
    readPreview: "Xoolal",
    download: "Télécharger",
    subscriberOnly: "Ñi abonné rekk",
    galleryEyebrow: "Galerie sawar",
    galleryTitle: "Arsiif gu gis ak fàttaliku taarix",
    galleryText: "Sawar yu taarix, xew-xew, ndaje ak fan yu am solo ci njàngale yi.",
    viewPhoto: "Xool sawar bi",
    bioEyebrow: "Biographies",
    bioTitle: "Nit ñi gën a am solo ci cosaanu xol",
    bioText: "Xëti boppam ngir Cheikh Abdoul Hamid Sarr, Cheikh Seydi El Hadj Malick Sy, khalif yi, taalibe yi ak xarit yi.",
    readBio: "Jàng biographie bi",
    subscriptionEyebrow: "Sistemu abonnement",
    subscriptionTitle: "Jot premium bu yomb te man a yokku",
    subscriptionText: "Ubbi contenu premium, maktaba bépp ak téléchargement ak prii bu leer.",
    priceBadge: "Offre weer wi",
    pricePerMonth: "ci weer",
    subscriptionLead: "Offre bi gën a baax ngir jot ci wideyoo premium, arsiif audio ak dokimaa yu ñi abonné.",
    subscriptionBenefitOne: "Jot ci wideyoo premium",
    subscriptionBenefitTwo: "Audiothèque bépp ak arsiif yu baat",
    subscriptionBenefitThree: "Téléchargement dokimaa yi ñu maye",
    subscriptionBenefitFour: "Historique, favoris ak continuer la lecture",
    subscriptionPrimary: "Tambali abonnement",
    subscriptionSecondary: "Jokkoo ak ekib bi",
    paymentTitle: "Yoonu fay yi ñuy nangu",
    paymentWave: "Wave Sénégal",
    paymentCard: "Carte bancaire",
    paymentMobile: "Mobile Money ci kanam",
    paymentText: "Design bi noppi na ngir yokk paiement sécurisé ak yokk yeneen yoonu fay ci ëllëg.",
    securityOneTitle: "Gaaw",
    securityOneText: "Yebbi bu ñu gëna baaxal ci mobile ak desktop",
    securityTwoTitle: "Wóor",
    securityTwoText: "Architecture bu noppi ngir auth ak paiement",
    securityThreeTitle: "Seetkat",
    securityThreeText: "SEO ñu xalaat ko dale ci tabax xët wi",
    accountsEyebrow: "Compte utilisateur",
    accountsTitle: "Inscription, connexion ak expérience personnelle",
    accountsText: "Ku nekk dina am dashboard, historique, favoris ak espace bu boppam.",
    accountStatusLabel: "Espace membre",
    accountGuestTitle: "Sos sa compte ngir tàmbali",
    accountGuestText: "Inscription, connexion ak mot de passe oublié am nañu leen ci interface bi.",
    accountReadyTitle: "Sa espace personnel noppi na",
    accountReadyText: "Jot ci sa contenu yi nga bëgg, historique ak doxaat seetaan ci bépp appareil.",
    accountCtaOne: "Sos compte",
    accountCtaTwo: "Dugg",
    dashboardEyebrow: "Dashboard personnel",
    dashboardStatus: "Preview",
    historyTitle: "Historique lecture",
    favoritesTitle: "Favoris",
    continueTitle: "Kontinye jàng",
    emptyHistory: "Amul lecture bu bees.",
    emptyFavorites: "Amul favori ba tey.",
    emptyContinue: "Amul contenu bu war a kontinye.",
    adminEyebrow: "Tableau d’administration",
    adminTitle: "Cockpit editorial bu noppi ngir saytu lépp",
    adminText: "Saytu contenu, abonnement, utilisateurs ak statistiques ci benn interface.",
    adminActionOne: "Yokk wideyoo",
    adminActionTwo: "Yokk audio",
    adminActionThree: "Yokk mbind",
    adminActionFour: "Yokk téere PDF",
    adminActionFive: "Saytu utilisateurs",
    adminActionSix: "Saytu abonnements",
    adminStatsTitle: "Statistiques",
    adminStatsBadge: "Vue plateforme",
    footerTagline: "Fàttaliku dund bu njàngale yi ak cosaanu Cheikh Seydi El Hadj Malick Sy.",
    footerContactLabel: "Jokkoo",
    footerFollowLabel: "Réseaux sociaux",
    footerRights: "Ñu ko tabax ngir daldi nangu junni nit ci addina bi.",
    authEyebrow: "Compte utilisateur",
    authTitle: "Dugg ci sa espace membre",
    authSignin: "Connexion",
    authSignup: "Inscription",
    authReset: "Mot de passe oublié",
    authName: "Tur bu mat",
    authEmail: "Email",
    authPassword: "Mot de passe",
    authSubmitSignin: "Dugg",
    authSubmitSignup: "Sos ma compte",
    authSubmitReset: "Yónnee lien bi",
    statMembersLong: "Membres",
    statVideosLong: "Wideyoo",
    statAudiosLong: "Audio",
    statDocsLong: "Dokimaa",
    statViewsLong: "Vues",
    toastNotifications: "Yëgle yi dugg nañu.",
    toastFavoriteAdded: "Yokku na ci favoris.",
    toastFavoriteRemoved: "Muuñ na ci favoris.",
    toastSearchEmpty: "Bindal ab baat bu am solo ngir wut.",
    toastDocumentPremium: "Dokimaa bii premium la.",
    toastDocumentPreview: "Xoolal dokimaa bi noppi na.",
    toastShare: "Palanteer séddoo ubbi na.",
    toastSignin: "Connexion locale jàll na.",
    toastSignup: "Compte local sos nañu ko.",
    toastReset: "Lien réinitialisation bi am na.",
    toastHistory: "Contenu bi dugg na ci historique bi.",
    toastBio: "Fiche biographie bi noppi na.",
    toastContact: "Jëfandikoo contact@maktabatchs.org ngir sëfli projé bi.",
    dashboardGreeting: "Asalaam, {name}",
    userGuest: "gan"
  }
};

const categories = [
  { key: "all", labelKey: "filterAll" },
  { key: "conferences", labelKey: "filterConferences" },
  { key: "sermons", labelKey: "filterSermons" },
  { key: "teachings", labelKey: "filterTeachings" },
  { key: "islam", labelKey: "filterIslam" },
  { key: "tidjaniya", labelKey: "filterTidjaniya" },
  { key: "history", labelKey: "filterHistory" },
  { key: "qa", labelKey: "filterQA" }
];

const metrics = [
  { key: "members", value: "1 250", labelKey: "statMembersLong" },
  { key: "videos", value: "07", labelKey: "statVideosLong" },
  { key: "audios", value: "05", labelKey: "statAudiosLong" },
  { key: "documents", value: "06", labelKey: "statDocsLong" },
  { key: "views", value: "58K", labelKey: "statViewsLong" }
];

const audioCategoryLabels = {
  archive: { fr: "Archives sonores", en: "Sound archives", ar: "ارشيف صوتي", wo: "Arsiif bu baat" },
  conference: { fr: "Conferences audio", en: "Audio talks", ar: "محاضرات صوتية", wo: "Waxtaan audio" },
  khassida: { fr: "Khassidas", en: "Khassidas", ar: "قصائد", wo: "Khassida" },
  podcast: { fr: "Podcasts", en: "Podcasts", ar: "بودكاست", wo: "Podcast" },
  sermon: { fr: "Sermons audio", en: "Audio sermons", ar: "خطب صوتية", wo: "Sermon audio" }
};

const editorialMeta = {
  "audio-archive": { byline: "Maktabat Audio", metric: "8.1K", age: "4d" },
  "audio-conference": { byline: "Maktabat Audio", metric: "10.8K", age: "2d" },
  "audio-khassida": { byline: "Maktabat Audio", metric: "12.6K", age: "1d" },
  "audio-podcast": { byline: "Maktabat Audio", metric: "6.4K", age: "5d" },
  "audio-sermon": { byline: "Maktabat Audio", metric: "9.2K", age: "3d" },
  "bio-cheikh": { byline: "Dossier editorial", metric: "3.1K", age: "maj" },
  "bio-disciples": { byline: "Dossier editorial", metric: "2.2K", age: "maj" },
  "bio-khalifes": { byline: "Dossier editorial", metric: "2.5K", age: "maj" },
  "bio-seydi": { byline: "Dossier editorial", metric: "4.8K", age: "maj" },
  "doc-articles": { byline: "Archives Maktabat", metric: "1.9K", age: "pdf" },
  "doc-books": { byline: "Archives Maktabat", metric: "2.4K", age: "pdf" },
  "doc-history": { byline: "Archives Maktabat", metric: "2.1K", age: "pdf" },
  "doc-manuscripts": { byline: "Archives Maktabat", metric: "1.3K", age: "pdf" },
  "doc-pdf": { byline: "Archives Maktabat", metric: "3.6K", age: "pdf" },
  "doc-speeches": { byline: "Archives Maktabat", metric: "2.7K", age: "pdf" },
  "gallery-history": { byline: "Collection visuelle", metric: "520", age: "photo" },
  "gallery-lecture-01": { byline: "Collection visuelle", metric: "1.1K", age: "photo" },
  "gallery-lecture-02": { byline: "Collection visuelle", metric: "860", age: "photo" },
  "gallery-lecture-03": { byline: "Collection visuelle", metric: "790", age: "photo" },
  "gallery-rencontre": { byline: "Collection visuelle", metric: "610", age: "photo" },
  "video-conference": { byline: "Cheikh Abdoul Hamid Sarr", metric: "41.3K", age: "3d" },
  "video-history": { byline: "Cheikh Seydi El Hadj Malick Sy", metric: "28.7K", age: "5d" },
  "video-islam": { byline: "Cheikh Abdoul Hamid Sarr", metric: "22.4K", age: "4d" },
  "video-qa": { byline: "Maktabat CHS", metric: "18.9K", age: "2d" },
  "video-sermon": { byline: "Cheikh Abdoul Hamid Sarr", metric: "31.5K", age: "3d" },
  "video-teaching": { byline: "Cheikh Abdoul Hamid Sarr", metric: "25.8K", age: "2d" },
  "video-tidjaniya": { byline: "Cheikh Abdoul Hamid Sarr", metric: "19.7K", age: "6d" }
};

const fallbackImages = {
  "audio-archive": "assets/images/archive-01.jpeg",
  "audio-conference": "assets/images/lecture-01.jpeg",
  "audio-khassida": "assets/images/lecture-02.jpeg",
  "audio-podcast": "assets/images/rencontre-01.jpeg",
  "audio-sermon": "assets/images/hero-cheikh.jpeg"
};

const catalog = {
  videos: [
    {
      id: "video-conference",
      type: "video",
      category: "conferences",
      image: "assets/images/lecture-01.jpeg",
      video: "assets/videos/conference-01.mp4",
      duration: "48 min",
      premium: false,
      title: {
        fr: "Conférence magistrale : La voie de la transmission",
        en: "Master lecture: The path of transmission",
        ar: "محاضرة كبرى: طريق التبليغ",
        wo: "Waxtaan wu mag: Yoonu jébbale"
      },
      description: {
        fr: "Une introduction forte à la transmission du savoir, à la discipline spirituelle et à la responsabilité de préserver l’héritage.",
        en: "A strong introduction to knowledge transmission, spiritual discipline and the responsibility of preserving the legacy.",
        ar: "مدخل قوي إلى نقل العلم والانضباط الروحي ومسؤولية حفظ التراث.",
        wo: "Ubbi yoon bu bare solo ci jébbale xam-xam, njub ak warugaru samm cosaan."
      },
      keywords: ["conférence", "transmission", "tidjaniya", "lecture", "محاضرة", "waxtaan"]
    },
    {
      id: "video-sermon",
      type: "video",
      category: "sermons",
      image: "assets/images/hero-cheikh.jpeg",
      video: "assets/videos/sermon-01.mp4",
      duration: "32 min",
      premium: true,
      title: {
        fr: "Sermon : patience, éthique et constance",
        en: "Sermon: patience, ethics and constancy",
        ar: "خطبة: الصبر والأخلاق والثبات",
        wo: "Sermon: muñ, jikko ak sax"
      },
      description: {
        fr: "Un rappel spirituel centré sur la patience, l’éthique du croyant et la fidélité aux principes.",
        en: "A spiritual reminder centered on patience, the ethics of the believer and faithfulness to principles.",
        ar: "تذكير روحي يتمحور حول الصبر وأخلاق المؤمن والثبات على المبادئ.",
        wo: "Fàttali bu xel ci muñ, jikko ju gëmkat ak sax ci njub."
      },
      keywords: ["sermon", "patience", "éthique", "khoutba", "صبر", "muñ"]
    },
    {
      id: "video-teaching",
      type: "video",
      category: "teachings",
      image: "assets/images/lecture-02.jpeg",
      video: "assets/videos/enseignement-01.mp4",
      duration: "55 min",
      premium: true,
      title: {
        fr: "Enseignement : adab, méthode et élévation",
        en: "Teaching: adab, method and elevation",
        ar: "درس: الأدب والمنهج والارتقاء",
        wo: "Njàngale: adab, pexe ak yéeg"
      },
      description: {
        fr: "Une session structurée sur les règles de comportement, l’étude et l’élévation intérieure.",
        en: "A structured session on etiquette, study and inner elevation.",
        ar: "جلسة منظمة حول آداب السلوك وطلب العلم والارتقاء الداخلي.",
        wo: "Jàngat bu tabax ci adab, yoonu jàng ak yéeg gu biir."
      },
      keywords: ["enseignement", "adab", "méthode", "درس", "njàngale"]
    },
    {
      id: "video-islam",
      type: "video",
      category: "islam",
      image: "assets/images/rencontre-01.jpeg",
      video: "assets/videos/archive-01.mp4",
      duration: "41 min",
      premium: false,
      title: {
        fr: "Défense de l’Islam : clarté, pédagogie et argumentation",
        en: "Defense of Islam: clarity, pedagogy and argumentation",
        ar: "الدفاع عن الإسلام: وضوح وتربية وبرهان",
        wo: "Aar Islam: leer, njàngale ak lay"
      },
      description: {
        fr: "Une prise de parole pédagogique pour expliquer, défendre et transmettre les fondements avec sagesse.",
        en: "A pedagogical talk to explain, defend and transmit core principles with wisdom.",
        ar: "مداخلة تربوية لشرح الأصول والدفاع عنها ونقلها بالحكمة.",
        wo: "Waxtaan wu njàngale ngir leeral, aar ak jottali cosaan yi ak xel mu rafet."
      },
      keywords: ["islam", "défense", "clarité", "wisdom", "الإسلام", "aar"]
    },
    {
      id: "video-tidjaniya",
      type: "video",
      category: "tidjaniya",
      image: "assets/images/marche-01.jpeg",
      video: "assets/videos/conference-01.mp4",
      duration: "37 min",
      premium: true,
      title: {
        fr: "Défense de la Tarikha Tidjaniya",
        en: "Defense of the Tidjaniya path",
        ar: "الدفاع عن الطريقة التجانية",
        wo: "Aar Tarikha Tidjaniya"
      },
      description: {
        fr: "Une explication sereine des principes, de la chaîne de transmission et de la mission éducative de la Tarikha.",
        en: "A calm explanation of principles, transmission lineage and the educational mission of the path.",
        ar: "شرح هادئ للمبادئ وسلسلة الإسناد والرسالة التربوية للطريقة.",
        wo: "Leeral gu dal ci cosaan, silsila ak missionu njàngale bu Tarikha bi."
      },
      keywords: ["tidjaniya", "tarikha", "défense", "طريقة", "tarixa"]
    },
    {
      id: "video-history",
      type: "video",
      category: "history",
      image: "assets/images/seydi-malick.jpeg",
      video: "assets/videos/enseignement-01.mp4",
      duration: "29 min",
      premium: false,
      title: {
        fr: "Histoire de Cheikh Seydi El Hadj Malick Sy",
        en: "History of Cheikh Seydi El Hadj Malick Sy",
        ar: "تاريخ الشيخ سيدي الحاج مالك سي",
        wo: "Taarixu Cheikh Seydi El Hadj Malick Sy"
      },
      description: {
        fr: "Une capsule historique dédiée à l’itinéraire, l’influence et l’héritage du grand maître.",
        en: "A historical capsule dedicated to the journey, influence and legacy of the great master.",
        ar: "عرض تاريخي موجز عن المسار والتأثير والإرث الخاص بالشيخ الكبير.",
        wo: "Capsule bu taarix ci yoonu dund, aw yëngu-yëngu ak cosaanu mag mi."
      },
      keywords: ["histoire", "malick sy", "héritage", "تاريخ", "taarix"]
    },
    {
      id: "video-qa",
      type: "video",
      category: "qa",
      image: "assets/images/archive-01.jpeg",
      video: "assets/videos/sermon-01.mp4",
      duration: "26 min",
      premium: false,
      title: {
        fr: "Questions-Réponses : foi, pratique et transmission",
        en: "Q&A: faith, practice and transmission",
        ar: "أسئلة وأجوبة: الإيمان والممارسة والنقل",
        wo: "Laaj-Tontu: ngëm, jëf ak jébbale"
      },
      description: {
        fr: "Des réponses accessibles à des questions fréquentes liées à la pratique religieuse et à la voie spirituelle.",
        en: "Accessible answers to frequent questions about religious practice and spiritual path.",
        ar: "إجابات واضحة عن الأسئلة المتكررة حول الممارسة الدينية والسلوك الروحي.",
        wo: "Tontu yu leer ci laaj yu bari ci jëf ju diine ak yoonu xel."
      },
      keywords: ["questions", "réponses", "pratique", "سؤال", "laaj"]
    }
  ],
  audios: [
    {
      id: "audio-khassida",
      type: "audio",
      category: "khassida",
      source: "assets/videos/sermon-01.mp4",
      duration: "22 min",
      premium: true,
      title: {
        fr: "Khassida : mémoire et invocation",
        en: "Khassida: memory and invocation",
        ar: "قصيدة: الذاكرة والذكر",
        wo: "Khassida: fàttali ak zikr"
      },
      description: {
        fr: "Une écoute méditative pour prolonger la présence spirituelle et l’invocation.",
        en: "A meditative listening experience to extend spiritual presence and remembrance.",
        ar: "استماع تأملي يطيل الحضور الروحي والذكر.",
        wo: "Déglu gu xel ngir yokk présence spirituelle ak zikr."
      },
      keywords: ["khassida", "invocation", "zikr", "قصيدة", "zikr"]
    },
    {
      id: "audio-conference",
      type: "audio",
      category: "conference",
      source: "assets/videos/conference-01.mp4",
      duration: "44 min",
      premium: false,
      title: {
        fr: "Conférence audio : éducation du cœur",
        en: "Audio talk: educating the heart",
        ar: "محاضرة صوتية: تربية القلب",
        wo: "Waxtaan audio: yaru xol"
      },
      description: {
        fr: "Un format audio pour écouter les enseignements en mobilité.",
        en: "An audio format built for learning on the move.",
        ar: "صيغة صوتية للاستماع إلى الدروس أثناء التنقل.",
        wo: "Formato audio ngir déglu njàngale yi su ngay tukki."
      },
      keywords: ["audio", "conférence", "éducation", "محاضرة", "yaru"]
    },
    {
      id: "audio-sermon",
      type: "audio",
      category: "sermon",
      source: "assets/videos/enseignement-01.mp4",
      duration: "28 min",
      premium: true,
      title: {
        fr: "Sermon audio : discipline et sincérité",
        en: "Audio sermon: discipline and sincerity",
        ar: "خطبة صوتية: الانضباط والإخلاص",
        wo: "Sermon audio: discipline ak njub"
      },
      description: {
        fr: "Une prise de parole resserrée sur l’éthique de l’engagement spirituel.",
        en: "A focused address on the ethics of spiritual commitment.",
        ar: "كلمة مركزة حول أخلاق الالتزام الروحي.",
        wo: "Waxtaan wu gatt ci jikko ju engagement spirituel."
      },
      keywords: ["sermon", "discipline", "sincérité", "خطبة", "njub"]
    },
    {
      id: "audio-podcast",
      type: "audio",
      category: "podcast",
      source: "assets/videos/archive-01.mp4",
      duration: "19 min",
      premium: false,
      title: {
        fr: "Podcast : transmission et actualité",
        en: "Podcast: transmission and current relevance",
        ar: "بودكاست: النقل والواقع",
        wo: "Podcast: jébbale ak jamono jii"
      },
      description: {
        fr: "Un échange éditorial sur la manière de faire vivre l’héritage dans le présent.",
        en: "An editorial conversation on keeping the legacy alive today.",
        ar: "حوار تحريري حول إحياء التراث في الحاضر.",
        wo: "Waxtaan editorial ci ni ñuy dundal cosaan ci jamono jii."
      },
      keywords: ["podcast", "actualité", "transmission", "بودكاست", "jamono"]
    },
    {
      id: "audio-archive",
      type: "audio",
      category: "archive",
      source: "assets/videos/sermon-01.mp4",
      duration: "31 min",
      premium: true,
      title: {
        fr: "Archives sonores : voix et mémoire",
        en: "Sound archives: voices and memory",
        ar: "أرشيف صوتي: أصوات وذاكرة",
        wo: "Arsiif bu baat: baat ak fàttali"
      },
      description: {
        fr: "Une archive patrimoniale pour préserver l’empreinte orale des enseignements.",
        en: "A heritage archive preserving the oral imprint of the teachings.",
        ar: "أرشيف تراثي يحفظ الأثر الشفهي للدروس.",
        wo: "Arsiif bu cosaan ngir samm rëbbu baat ci njàngale yi."
      },
      keywords: ["archive", "voix", "mémoire", "أرشيف", "arsiif"]
    }
  ],
  documents: [
    {
      id: "doc-articles",
      type: "document",
      image: "assets/images/lecture-02.jpeg",
      premium: false,
      title: {
        fr: "Articles de référence",
        en: "Reference articles",
        ar: "مقالات مرجعية",
        wo: "Mbind yu référence"
      },
      description: {
        fr: "Une collection d’articles thématiques sur les enseignements, la pratique et l’héritage.",
        en: "A collection of themed articles on teachings, practice and legacy.",
        ar: "مجموعة مقالات موضوعية حول الدروس والممارسة والتراث.",
        wo: "Dajale mbind ci njàngale, jëf ak cosaan."
      },
      keywords: ["articles", "référence", "enseignement"]
    },
    {
      id: "doc-books",
      type: "document",
      image: "assets/images/hero-cheikh.jpeg",
      premium: true,
      title: {
        fr: "Livres numériques",
        en: "Digital books",
        ar: "كتب رقمية",
        wo: "Téere dijitaal"
      },
      description: {
        fr: "Des livres classés par auteur, thème et période pour une consultation structurée.",
        en: "Books organized by author, theme and era for structured consultation.",
        ar: "كتب منظمة حسب المؤلف والموضوع والحقبة.",
        wo: "Téere yi ñu xeexale ci bindkat, téeméer ak jamono."
      },
      keywords: ["livres", "books", "كتب", "téere"]
    },
    {
      id: "doc-manuscripts",
      type: "document",
      image: "assets/images/archive-01.jpeg",
      premium: true,
      title: {
        fr: "Manuscrits et pièces rares",
        en: "Manuscripts and rare pieces",
        ar: "مخطوطات ووثائق نادرة",
        wo: "Manuscript ak dogal yu rare"
      },
      description: {
        fr: "Un espace premium pour conserver les manuscrits et les pièces historiques sensibles.",
        en: "A premium space to preserve manuscripts and sensitive historical material.",
        ar: "فضاء مميز لحفظ المخطوطات والوثائق التاريخية الحساسة.",
        wo: "Barab premium ngir denc manuscript ak dokimaa yu am solo lool."
      },
      keywords: ["manuscrits", "rare", "archives"]
    },
    {
      id: "doc-pdf",
      type: "document",
      image: "assets/images/marche-01.jpeg",
      premium: false,
      title: {
        fr: "Documents PDF",
        en: "PDF documents",
        ar: "وثائق PDF",
        wo: "Dokimaa PDF"
      },
      description: {
        fr: "Des PDF téléchargeables ou consultables en ligne selon le niveau d’accès.",
        en: "PDFs available for download or online reading depending on access level.",
        ar: "ملفات PDF للقراءة أو التنزيل حسب مستوى الوصول.",
        wo: "PDF yu manees a jàng walla yebbi ci niveau d’accès bi."
      },
      keywords: ["pdf", "documents", "dokimaa"]
    },
    {
      id: "doc-speeches",
      type: "document",
      image: "assets/images/rencontre-01.jpeg",
      premium: false,
      title: {
        fr: "Discours et allocutions",
        en: "Speeches and addresses",
        ar: "خطابات وكلمات",
        wo: "Kàddu ak allocutions"
      },
      description: {
        fr: "Un classement des discours importants pour la transmission publique des idées.",
        en: "A curated archive of important speeches for public transmission of ideas.",
        ar: "أرشيف منظم للخطابات المهمة في نقل الرسالة.",
        wo: "Xàll bu ñu def ci kàddu yu am solo ci jébbale kàddu yi."
      },
      keywords: ["discours", "allocutions", "speech"]
    },
    {
      id: "doc-history",
      type: "document",
      image: "assets/images/seydi-malick.jpeg",
      premium: true,
      title: {
        fr: "Écrits historiques",
        en: "Historical writings",
        ar: "نصوص تاريخية",
        wo: "Mbind yu taarix"
      },
      description: {
        fr: "Des textes pour contextualiser la trajectoire des figures majeures et des disciples.",
        en: "Texts that contextualize the journey of major figures and disciples.",
        ar: "نصوص تؤطر مسار الشخصيات الكبرى والتلاميذ.",
        wo: "Mbind yu waral yoonu nit ñu mag ak taalibe yi."
      },
      keywords: ["histoire", "écrits", "history", "taarix"]
    }
  ],
  biographies: [
    {
      id: "bio-cheikh",
      type: "biography",
      image: "assets/images/hero-cheikh.jpeg",
      title: {
        fr: "Cheikh Abdoul Hamid Sarr",
        en: "Cheikh Abdoul Hamid Sarr",
        ar: "الشيخ عبدول حميد سار",
        wo: "Cheikh Abdoul Hamid Sarr"
      },
      description: {
        fr: "Une page dédiée à sa trajectoire, ses enseignements, ses interventions et son rayonnement.",
        en: "A dedicated page for his journey, teachings, interventions and influence.",
        ar: "صفحة مخصصة لمساره وتعليمه ومداخلاته وإشعاعه.",
        wo: "Xët bu ñu jagleel yoonam, njàngaleem, kàddu yu mu wax ak leeram."
      },
      keywords: ["cheikh", "sarr", "biographie"]
    },
    {
      id: "bio-seydi",
      type: "biography",
      image: "assets/images/seydi-malick.jpeg",
      title: {
        fr: "Cheikh Seydi El Hadj Malick Sy",
        en: "Cheikh Seydi El Hadj Malick Sy",
        ar: "الشيخ سيدي الحاج مالك سي",
        wo: "Cheikh Seydi El Hadj Malick Sy"
      },
      description: {
        fr: "Une biographie structurée pour comprendre son héritage, sa pédagogie et son influence durable.",
        en: "A structured biography to understand his legacy, pedagogy and lasting influence.",
        ar: "سيرة منظمة لفهم تراثه وتربيته وتأثيره المستمر.",
        wo: "Biographie bu tabax ngir xam cosaanam, njàngaleem ak leeram bu sax."
      },
      keywords: ["malick sy", "histoire", "biographie"]
    },
    {
      id: "bio-khalifes",
      type: "biography",
      image: "assets/images/archive-01.jpeg",
      title: {
        fr: "Les Khalifes",
        en: "The Khalifes",
        ar: "الخلفاء",
        wo: "Khalif yi"
      },
      description: {
        fr: "Un espace pour regrouper les figures de continuité et leurs contributions successives.",
        en: "A space gathering the figures of continuity and their successive contributions.",
        ar: "فضاء يجمع شخصيات الاستمرارية وإسهاماتهم المتعاقبة.",
        wo: "Barab bu dajale nit ñi jox yoon ak liggéey yi ñu wéyal."
      },
      keywords: ["khalifes", "succession", "héritage"]
    },
    {
      id: "bio-disciples",
      type: "biography",
      image: "assets/images/rencontre-01.jpeg",
      title: {
        fr: "Disciples et compagnons",
        en: "Disciples and companions",
        ar: "التلاميذ والرفاق",
        wo: "Taalibe yi ak xarit yi"
      },
      description: {
        fr: "Des portraits biographiques pour relier les œuvres, les témoignages et la chaîne de transmission.",
        en: "Biographical portraits linking works, testimonies and the chain of transmission.",
        ar: "صور تعريفية تربط الأعمال والشهادات وسلسلة النقل.",
        wo: "Portrait yu biographie ngir boole liggéey yi, seede yi ak silsila bi."
      },
      keywords: ["disciples", "compagnons", "taalibe"]
    }
  ],
  gallery: [
    {
      id: "gallery-lecture-01",
      type: "gallery",
      image: "assets/images/hero-cheikh.jpeg",
      size: "large",
      title: {
        fr: "Portrait principal",
        en: "Main portrait",
        ar: "الصورة الرئيسية",
        wo: "Sawar bu njëkk"
      },
      description: {
        fr: "Un visuel fort pour porter la page d’accueil et l’identité de la plateforme.",
        en: "A strong visual carrying the homepage and the identity of the platform.",
        ar: "صورة قوية لقيادة الصفحة الرئيسية وهوية المنصة.",
        wo: "Sawar su am doole ngir jox xët wu njëkk ak identité bi."
      },
      keywords: ["portrait", "accueil", "main"]
    },
    {
      id: "gallery-lecture-02",
      type: "gallery",
      image: "assets/images/lecture-01.jpeg",
      size: "medium",
      title: {
        fr: "Lecture et transmission",
        en: "Reading and transmission",
        ar: "القراءة والنقل",
        wo: "Jàng ak jébbale"
      },
      description: {
        fr: "Un moment d’étude qui nourrit la bibliothèque vivante.",
        en: "A study moment feeding the living library.",
        ar: "لحظة دراسة تغذي المكتبة الحية.",
        wo: "Waxtu jàng moo dundal maktaba bi."
      },
      keywords: ["lecture", "étude", "reading"]
    },
    {
      id: "gallery-lecture-03",
      type: "gallery",
      image: "assets/images/lecture-02.jpeg",
      size: "small",
      title: {
        fr: "Concentration et présence",
        en: "Focus and presence",
        ar: "تركيز وحضور",
        wo: "Fas yéene ak présence"
      },
      description: {
        fr: "Une image qui raconte le rapport au savoir et au texte.",
        en: "An image telling the relationship to knowledge and text.",
        ar: "صورة تروي العلاقة بالعلم والنص.",
        wo: "Sawar su wax diggante xam-xam ak mbind."
      },
      keywords: ["focus", "knowledge", "présence"]
    },
    {
      id: "gallery-rencontre",
      type: "gallery",
      image: "assets/images/rencontre-01.jpeg",
      size: "small",
      title: {
        fr: "Rencontre et échange",
        en: "Meeting and exchange",
        ar: "لقاء وتبادل",
        wo: "Ndaje ak waxtaan"
      },
      description: {
        fr: "Des échanges humains au cœur de la transmission.",
        en: "Human exchange at the center of transmission.",
        ar: "تبادل إنساني في قلب التبليغ.",
        wo: "Waxtaanu nit ñi ci biiru jébbale bi."
      },
      keywords: ["meeting", "échange", "rencontre"]
    },
    {
      id: "gallery-history",
      type: "gallery",
      image: "assets/images/archive-01.jpeg",
      size: "small",
      title: {
        fr: "Archive historique",
        en: "Historical archive",
        ar: "أرشيف تاريخي",
        wo: "Arsiif bu taarix"
      },
      description: {
        fr: "Une mémoire visuelle pour relier les générations.",
        en: "A visual memory linking generations.",
        ar: "ذاكرة بصرية تربط الأجيال.",
        wo: "Fàttaliku gis ngir boole xeeti nit."
      },
      keywords: ["archive", "histoire", "arsiif"]
    }
  ]
};

const state = {
  language: localStorage.getItem(STORAGE_KEYS.language) || "fr",
  theme: localStorage.getItem(STORAGE_KEYS.theme) || "dark",
  activeCategory: "all",
  favorites: JSON.parse(localStorage.getItem(STORAGE_KEYS.favorites) || "[]"),
  history: JSON.parse(localStorage.getItem(STORAGE_KEYS.history) || "[]"),
  user: JSON.parse(localStorage.getItem(STORAGE_KEYS.user) || "null"),
  currentFeaturedId: "video-conference",
  currentAudioId: "audio-khassida",
  currentAuthView: "signin"
};

const elements = {
  body: document.body,
  languageSelect: document.querySelector("#languageSelect"),
  themeToggle: document.querySelector("#themeToggle"),
  menuToggle: document.querySelector("#menuToggle"),
  videoFilters: document.querySelector("#videoFilters"),
  videoRail: document.querySelector("#videoRail"),
  featuredVideo: document.querySelector("#featuredVideo"),
  featuredVideoSource: document.querySelector("#featuredVideoSource"),
  featuredTitle: document.querySelector("#featuredTitleText"),
  featuredDescription: document.querySelector("#featuredDescriptionText"),
  featuredCategory: document.querySelector("#featuredCategoryText"),
  featuredDuration: document.querySelector("#featuredDurationText"),
  featuredAccess: document.querySelector("#featuredAccessBadge"),
  featuredPlayAction: document.querySelector("#featuredPlayAction"),
  featuredShareAction: document.querySelector("#featuredShareAction"),
  audioPlayer: document.querySelector("#audioPlayer"),
  audioPlayerSource: document.querySelector("#audioPlayerSource"),
  audioTitle: document.querySelector("#audioCurrentTitle"),
  audioDescription: document.querySelector("#audioCurrentDescription"),
  audioCategory: document.querySelector("#audioCurrentCategory"),
  audioDuration: document.querySelector("#audioCurrentDuration"),
  audioAccess: document.querySelector("#audioAccessBadge"),
  audioPlaylist: document.querySelector("#audioPlaylist"),
  audioBookmarkAction: document.querySelector("#audioBookmarkAction"),
  documentsGrid: document.querySelector("#documentsGrid"),
  galleryGrid: document.querySelector("#galleryGrid"),
  bioGrid: document.querySelector("#bioGrid"),
  statsGrid: document.querySelector("#statsGrid"),
  toast: document.querySelector("#toast"),
  searchForm: document.querySelector("#heroSearchForm"),
  searchInput: document.querySelector("#heroSearchInput"),
  searchSection: document.querySelector("#searchSection"),
  searchResultsGrid: document.querySelector("#searchResultsGrid"),
  searchResultsMeta: document.querySelector("#searchResultsMeta"),
  authModal: document.querySelector("#authModal"),
  authSwitchers: document.querySelectorAll(".auth-switcher__button"),
  authPanels: document.querySelectorAll("[data-auth-panel]"),
  historyList: document.querySelector("#historyList"),
  favoritesList: document.querySelector("#favoritesList"),
  continueList: document.querySelector("#continueList"),
  dashboardGreeting: document.querySelector("#dashboardGreeting"),
  accountSummaryTitle: document.querySelector("#accountSummaryTitle"),
  accountSummaryText: document.querySelector("#accountSummaryText"),
  notifyToggle: document.querySelector("#notifyToggle")
};

function t(key) {
  return translations[state.language][key] || translations.fr[key] || key;
}

function formatMessage(key, values = {}) {
  return Object.entries(values).reduce(
    (message, [valueKey, value]) => message.replaceAll(`{${valueKey}}`, value),
    t(key)
  );
}

function getLocalized(value) {
  return value?.[state.language] || value?.fr || "";
}

function saveState() {
  localStorage.setItem(STORAGE_KEYS.theme, state.theme);
  localStorage.setItem(STORAGE_KEYS.language, state.language);
  localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(state.favorites));
  localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(state.history));
  localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(state.user));
}

function showToast(key) {
  elements.toast.textContent = t(key);
  elements.toast.classList.add("is-visible");
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 2800);
}

function findById(id) {
  return [...catalog.videos, ...catalog.audios, ...catalog.documents, ...catalog.biographies, ...catalog.gallery].find((item) => item.id === id);
}

function updateTheme() {
  elements.body.dataset.theme = state.theme;
  elements.themeToggle.setAttribute("aria-label", state.theme === "dark" ? "Passer au mode clair" : "Passer au mode sombre");
}

function applyLanguage() {
  document.documentElement.lang = state.language === "wo" ? "fr" : state.language;
  document.documentElement.dir = state.language === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });

  elements.languageSelect.value = state.language;
  renderFilters();
  renderFeatured();
  renderVideos();
  renderAudio();
  renderDocuments();
  renderGallery();
  renderBiographies();
  renderStats();
  renderDashboard();
  renderSearchResults(elements.searchInput.value.trim());
}

function renderFilters() {
  elements.videoFilters.innerHTML = categories
    .map(
      (category) => `
        <button
          class="chip ${state.activeCategory === category.key ? "is-active" : ""}"
          type="button"
          data-filter="${category.key}"
        >
          ${t(category.labelKey)}
        </button>
      `
    )
    .join("");
}

function getAudioCategoryLabel(category) {
  const label = audioCategoryLabels[category];
  return label ? getLocalized(label) : category;
}

function getEditorialEyebrow(item) {
  if (item.type === "video") {
    return t(categories.find((category) => category.key === item.category)?.labelKey || "filterAll");
  }

  if (item.type === "audio") {
    return getAudioCategoryLabel(item.category);
  }

  if (item.type === "document") {
    return item.premium ? t("subscriberOnly") : t("libraryEyebrow");
  }

  if (item.type === "biography") {
    return t("bioEyebrow");
  }

  if (item.type === "gallery") {
    return t("galleryEyebrow");
  }

  return item.type;
}

function getEditorialImage(item) {
  return item.image || fallbackImages[item.id] || "assets/images/lecture-01.jpeg";
}

function getEditorialBadge(item) {
  if (item.duration) {
    return item.duration.replace("min", "MIN").replace("Min", "MIN");
  }

  if (item.type === "document") {
    return item.premium ? t("accessPremium") : "PDF";
  }

  if (item.type === "biography") {
    return "BIO";
  }

  if (item.type === "gallery") {
    return "PHOTO";
  }

  return item.premium ? t("accessPremium") : t("accessFree");
}

function getEditorialMetaLine(item) {
  const meta = editorialMeta[item.id];
  if (!meta) {
    return item.duration || "";
  }

  return [meta.byline, meta.metric, meta.age].filter(Boolean).join(" • ");
}

function renderEditorialCard({
  item,
  primaryActionAttr,
  primaryActionLabel,
  secondaryActionMarkup = "",
  includeFavorite = false
}) {
  const favoriteMarkup = includeFavorite
    ? `
        <button
          class="editorial-card__favorite ${state.favorites.includes(item.id) ? "is-active" : ""}"
          type="button"
          data-favorite-id="${item.id}"
          aria-label="${state.favorites.includes(item.id) ? t("favoriteRemove") : t("favoriteAdd")}"
        >
          ★
        </button>
      `
    : "";

  return `
    <article class="editorial-card">
      <button class="editorial-card__media" type="button" ${primaryActionAttr} aria-label="${primaryActionLabel} : ${getLocalized(item.title)}">
        <img src="${getEditorialImage(item)}" alt="${getLocalized(item.title)}" loading="lazy">
        <span class="editorial-card__badge">${getEditorialBadge(item)}</span>
      </button>
      <div class="editorial-card__body">
        <span class="editorial-card__eyebrow">${getEditorialEyebrow(item)}</span>
        <h3 class="editorial-card__title">${getLocalized(item.title)}</h3>
        <p class="editorial-card__meta">${getEditorialMetaLine(item)}</p>
        <p class="editorial-card__summary">${getLocalized(item.description)}</p>
        <div class="editorial-card__actions">
          <button class="editorial-card__action" type="button" ${primaryActionAttr}>${primaryActionLabel}</button>
          ${secondaryActionMarkup}
          ${favoriteMarkup}
        </div>
      </div>
    </article>
  `;
}

function renderFeatured() {
  const featured = catalog.videos.find((item) => item.id === state.currentFeaturedId) || catalog.videos[0];

  elements.featuredTitle.textContent = getLocalized(featured.title);
  elements.featuredDescription.textContent = getLocalized(featured.description);
  elements.featuredCategory.textContent = t(categories.find((category) => category.key === featured.category)?.labelKey || "filterAll");
  elements.featuredDuration.textContent = featured.duration;
  elements.featuredAccess.textContent = featured.premium ? t("accessPremium") : t("accessFree");
  elements.featuredVideo.setAttribute("poster", featured.image);

  const currentSource = elements.featuredVideoSource.getAttribute("src");
  if (currentSource !== featured.video) {
    elements.featuredVideo.pause();
    elements.featuredVideoSource.setAttribute("src", featured.video);
    elements.featuredVideo.load();
  }
}

function renderVideos() {
  const items =
    state.activeCategory === "all"
      ? catalog.videos
      : catalog.videos.filter((item) => item.category === state.activeCategory);

  elements.videoRail.innerHTML = items
    .map((item) =>
      renderEditorialCard({
        item,
        primaryActionAttr: `data-play-video="${item.id}"`,
        primaryActionLabel: t("watchNow"),
        includeFavorite: true
      })
    )
    .join("");
}

function renderAudio() {
  const current = catalog.audios.find((item) => item.id === state.currentAudioId) || catalog.audios[0];

  elements.audioTitle.textContent = getLocalized(current.title);
  elements.audioDescription.textContent = getLocalized(current.description);
  elements.audioCategory.textContent = getAudioCategoryLabel(current.category);
  elements.audioDuration.textContent = current.duration;
  elements.audioAccess.textContent = current.premium ? t("accessPremium") : t("accessFree");
  elements.audioBookmarkAction.textContent = state.favorites.includes(current.id) ? t("favoriteRemove") : t("audioBookmark");

  const currentAudioSource = elements.audioPlayerSource.getAttribute("src");
  if (currentAudioSource !== current.source) {
    elements.audioPlayer.pause();
    elements.audioPlayerSource.setAttribute("src", current.source);
    elements.audioPlayer.load();
  }

  elements.audioPlaylist.innerHTML = catalog.audios
    .map((item) =>
      renderEditorialCard({
        item,
        primaryActionAttr: `data-audio-id="${item.id}"`,
        primaryActionLabel: t("listenNow"),
        includeFavorite: true
      })
    )
    .join("");
}

function renderDocuments() {
  elements.documentsGrid.innerHTML = catalog.documents
    .map((item) =>
      renderEditorialCard({
        item,
        primaryActionAttr: `data-doc-preview="${item.id}"`,
        primaryActionLabel: t("readPreview"),
        secondaryActionMarkup: `<button class="editorial-card__action" type="button" data-doc-download="${item.id}">${t("download")}</button>`
      })
    )
    .join("");
}

function renderGallery() {
  elements.galleryGrid.innerHTML = catalog.gallery
    .map((item) =>
      renderEditorialCard({
        item,
        primaryActionAttr: `data-gallery-open="${item.id}"`,
        primaryActionLabel: t("viewPhoto")
      })
    )
    .join("");
}

function renderBiographies() {
  elements.bioGrid.innerHTML = catalog.biographies
    .map((item) =>
      renderEditorialCard({
        item,
        primaryActionAttr: `data-bio-id="${item.id}"`,
        primaryActionLabel: t("readBio")
      })
    )
    .join("");
}

function renderStats() {
  elements.statsGrid.innerHTML = metrics
    .map(
      (metric) => `
        <article>
          <strong>${metric.value}</strong>
          <span>${t(metric.labelKey)}</span>
        </article>
      `
    )
    .join("");
}

function historyEntryMarkup(entry) {
  return `
    <article class="dashboard-item">
      <small>${entry.type.toUpperCase()} • ${entry.progress}%</small>
      <strong>${getLocalized(entry.item.title)}</strong>
      <p>${entry.item.duration || getLocalized(entry.item.description)}</p>
    </article>
  `;
}

function renderDashboard() {
  const userName = state.user?.name || t("userGuest");

  elements.dashboardGreeting.textContent = formatMessage("dashboardGreeting", { name: userName });

  if (state.user) {
    elements.accountSummaryTitle.textContent = t("accountReadyTitle");
    elements.accountSummaryText.textContent = t("accountReadyText");
  } else {
    elements.accountSummaryTitle.textContent = t("accountGuestTitle");
    elements.accountSummaryText.textContent = t("accountGuestText");
  }

  const enrichedHistory = state.history
    .map((entry) => ({
      ...entry,
      item: findById(entry.id)
    }))
    .filter((entry) => entry.item);

  const favoritesItems = state.favorites
    .map((id) => findById(id))
    .filter(Boolean)
    .map(
      (item) => `
        <article class="dashboard-item">
          <small>${item.type.toUpperCase()}</small>
          <strong>${getLocalized(item.title)}</strong>
          <p>${getLocalized(item.description)}</p>
        </article>
      `
    );

  const historyMarkup = enrichedHistory.slice(0, 3).map(historyEntryMarkup);
  const continueMarkup = enrichedHistory.slice(0, 3).map(historyEntryMarkup);

  elements.historyList.innerHTML =
    historyMarkup.length > 0 ? historyMarkup.join("") : `<div class="list-empty">${t("emptyHistory")}</div>`;
  elements.favoritesList.innerHTML =
    favoritesItems.length > 0 ? favoritesItems.join("") : `<div class="list-empty">${t("emptyFavorites")}</div>`;
  elements.continueList.innerHTML =
    continueMarkup.length > 0 ? continueMarkup.join("") : `<div class="list-empty">${t("emptyContinue")}</div>`;
}

function buildSearchIndex() {
  return [...catalog.videos, ...catalog.audios, ...catalog.documents, ...catalog.biographies, ...catalog.gallery];
}

function renderSearchResults(query) {
  if (!query) {
    elements.searchSection.classList.add("is-hidden");
    elements.searchResultsGrid.innerHTML = "";
    elements.searchResultsMeta.textContent = t("searchResultsText");
    return;
  }

  const normalizedQuery = query.toLowerCase();
  const results = buildSearchIndex().filter((item) => {
    const fields = [
      getLocalized(item.title),
      getLocalized(item.description),
      ...(item.keywords || []),
      ...Object.values(item.title || {}),
      ...Object.values(item.description || {})
    ]
      .join(" ")
      .toLowerCase();

    return fields.includes(normalizedQuery);
  });

  elements.searchSection.classList.remove("is-hidden");
  elements.searchResultsMeta.textContent = formatMessage("searchResultsMeta", {
    count: String(results.length),
    query
  });

  if (results.length === 0) {
    elements.searchResultsGrid.innerHTML = `<div class="list-empty">${t("noResults")}</div>`;
    return;
  }

  elements.searchResultsGrid.innerHTML = results
    .map(
      (item) => `
        <article class="search-result">
          <small>${item.type.toUpperCase()}</small>
          <h3>${getLocalized(item.title)}</h3>
          <p>${getLocalized(item.description)}</p>
          <div class="search-result__actions">
            <button class="outline-button" type="button" data-search-open="${item.id}">${item.type === "video" ? t("watchNow") : t("readPreview")}</button>
            <button class="outline-button" type="button" data-favorite-id="${item.id}">${state.favorites.includes(item.id) ? t("favoriteRemove") : t("favoriteAdd")}</button>
          </div>
        </article>
      `
    )
    .join("");
}

function persistFavorite(id) {
  const alreadyFavorite = state.favorites.includes(id);

  state.favorites = alreadyFavorite
    ? state.favorites.filter((favoriteId) => favoriteId !== id)
    : [id, ...state.favorites];

  saveState();
  renderVideos();
  renderAudio();
  renderSearchResults(elements.searchInput.value.trim());
  renderDashboard();
  showToast(alreadyFavorite ? "toastFavoriteRemoved" : "toastFavoriteAdded");
}

function pushHistory(item) {
  state.history = [
    {
      id: item.id,
      type: item.type,
      progress: Math.max(18, Math.floor(Math.random() * 68) + 18),
      timestamp: Date.now()
    },
    ...state.history.filter((entry) => entry.id !== item.id)
  ].slice(0, 8);

  saveState();
  renderDashboard();
}

function openItem(id) {
  const item = findById(id);
  if (!item) return;

  if (item.type === "video") {
    state.currentFeaturedId = id;
    renderFeatured();
    elements.featuredVideo.scrollIntoView({ behavior: "smooth", block: "center" });
    elements.featuredVideo.play().catch(() => undefined);
    pushHistory(item);
    showToast("toastHistory");
  } else if (item.type === "audio") {
    state.currentAudioId = id;
    renderAudio();
    elements.audioPlayer.scrollIntoView({ behavior: "smooth", block: "center" });
    elements.audioPlayer.play().catch(() => undefined);
    pushHistory(item);
    showToast("toastHistory");
  } else if (item.type === "biography") {
    showToast("toastBio");
  } else if (item.type === "document") {
    showToast(item.premium ? "toastDocumentPremium" : "toastDocumentPreview");
  } else if (item.type === "gallery") {
    window.open(item.image, "_blank", "noopener");
  }
}

function shareCurrent(title) {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(title);
  const shareUrl = `https://wa.me/?text=${text}%20${url}`;
  window.open(shareUrl, "_blank", "noopener");
  showToast("toastShare");
}

function openModal(view = "signin") {
  state.currentAuthView = view;
  elements.authModal.classList.remove("is-hidden");
  elements.authModal.setAttribute("aria-hidden", "false");
  switchAuthView(view);
}

function closeModal() {
  elements.authModal.classList.add("is-hidden");
  elements.authModal.setAttribute("aria-hidden", "true");
}

function switchAuthView(view) {
  state.currentAuthView = view;
  elements.authSwitchers.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.authView === view);
  });

  elements.authPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.authPanel === view);
  });
}

function initializeObservers() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.14 }
  );

  document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
}

function bindEvents() {
  elements.languageSelect.addEventListener("change", (event) => {
    state.language = event.target.value;
    saveState();
    applyLanguage();
  });

  elements.themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    saveState();
    updateTheme();
  });

  elements.menuToggle.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
  });

  document.addEventListener("click", (event) => {
    const filterButton = event.target.closest("[data-filter]");
    const favoriteButton = event.target.closest("[data-favorite-id]");
    const videoButton = event.target.closest("[data-play-video]");
    const audioButton = event.target.closest("[data-audio-id]");
    const previewButton = event.target.closest("[data-doc-preview]");
    const downloadButton = event.target.closest("[data-doc-download]");
    const searchButton = event.target.closest("[data-search-open]");
    const bioButton = event.target.closest("[data-bio-id]");
    const galleryButton = event.target.closest("[data-gallery-open]");
    const closeModalButton = event.target.closest("[data-close-modal]");
    const authOpenButton = event.target.closest("#openAuthHeader, #openAuthHero, #pricingSubscribe, #accountSignupAction, #accountSigninAction");
    const authSwitchButton = event.target.closest("[data-auth-view]");
    const socialButton = event.target.closest("[data-network]");

    if (filterButton) {
      state.activeCategory = filterButton.dataset.filter;
      renderFilters();
      renderVideos();
    }

    if (favoriteButton) {
      persistFavorite(favoriteButton.dataset.favoriteId);
    }

    if (videoButton) {
      openItem(videoButton.dataset.playVideo);
    }

    if (audioButton) {
      openItem(audioButton.dataset.audioId);
    }

    if (previewButton) {
      openItem(previewButton.dataset.docPreview);
    }

    if (downloadButton) {
      const doc = findById(downloadButton.dataset.docDownload);
      showToast(doc?.premium ? "toastDocumentPremium" : "toastDocumentPreview");
    }

    if (searchButton) {
      openItem(searchButton.dataset.searchOpen);
    }

    if (bioButton) {
      openItem(bioButton.dataset.bioId);
    }

    if (galleryButton) {
      openItem(galleryButton.dataset.galleryOpen);
    }

    if (closeModalButton) {
      closeModal();
    }

    if (authOpenButton) {
      const requestedView = authOpenButton.id === "accountSignupAction" ? "signup" : "signin";
      openModal(requestedView);
    }

    if (authSwitchButton) {
      switchAuthView(authSwitchButton.dataset.authView);
    }

    if (socialButton) {
      shareCurrent(`Maktabat CHS • ${socialButton.dataset.network}`);
    }
  });

  elements.searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = elements.searchInput.value.trim();

    if (!query) {
      showToast("toastSearchEmpty");
      return;
    }

    renderSearchResults(query);
    elements.searchSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  elements.searchInput.addEventListener("input", (event) => {
    const value = event.target.value.trim();
    if (!value) {
      renderSearchResults("");
    }
  });

  elements.featuredPlayAction.addEventListener("click", () => {
    const item = findById(state.currentFeaturedId);
    if (item) {
      pushHistory(item);
      elements.featuredVideo.play().catch(() => undefined);
      showToast("toastHistory");
    }
  });

  elements.featuredShareAction.addEventListener("click", () => {
    const item = findById(state.currentFeaturedId);
    if (item) {
      shareCurrent(getLocalized(item.title));
    }
  });

  elements.audioBookmarkAction.addEventListener("click", () => {
    persistFavorite(state.currentAudioId);
  });

  elements.notifyToggle.addEventListener("click", () => {
    showToast("toastNotifications");
  });

  document.querySelector("#pricingContact").addEventListener("click", () => {
    showToast("toastContact");
  });

  document.querySelectorAll("#signinForm, #signupForm, #resetForm").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);

      if (form.id === "signinForm") {
        state.user = {
          name: state.user?.name || formData.get("email").toString().split("@")[0],
          email: formData.get("email")
        };
        saveState();
        renderDashboard();
        closeModal();
        showToast("toastSignin");
      }

      if (form.id === "signupForm") {
        state.user = {
          name: formData.get("name"),
          email: formData.get("email")
        };
        saveState();
        renderDashboard();
        closeModal();
        showToast("toastSignup");
      }

      if (form.id === "resetForm") {
        closeModal();
        showToast("toastReset");
      }

      form.reset();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

function initialize() {
  updateTheme();
  applyLanguage();
  bindEvents();
  initializeObservers();
}

initialize();
