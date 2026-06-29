window.MaktabatData = (() => {
  const STORAGE_KEYS = {
    users: "maktabat-users",
    currentUserId: "maktabat-current-user",
    customItems: "maktabat-custom-items",
    settings: "maktabat-settings",
    adminUnlocked: "maktabat-admin-unlocked"
  };

  const DEFAULT_ADMIN_PASSWORD = "Maktabat-Admin-2026";

  const DEFAULT_SETTINGS = {
    adminPassword: DEFAULT_ADMIN_PASSWORD,
    wavePrice: 500,
    waveQrUrl: "/assets/images/wave-qr-placeholder.svg",
    supportEmail: "contact@maktabatchs.org"
  };

  const NAV_ITEMS = [
    { slug: "home", label: "Accueil", href: "/" },
    { slug: "mediatheque", label: "Mediatheque", href: "/mediatheque" },
    { slug: "bibliotheque", label: "Bibliotheque", href: "/bibliotheque" },
    { slug: "compte", label: "Compte", href: "/compte" },
    { slug: "admin", label: "Admin", href: "/admin" }
  ];

  const HERO_SLIDES = [
    {
      id: "hero-1",
      image: "/assets/images/hero-cheikh.jpeg",
      label: "ENSEIGNEMENT DU JOUR",
      title: "Maktabat Cheikh Abdoul Hamid Sarr",
      text: "La bibliotheque numerique officielle des enseignements, conferences, dossiers et archives spirituelles."
    },
    {
      id: "hero-2",
      image: "/assets/images/lecture-01.jpeg",
      label: "LECTURE",
      title: "Une memoire vivante, organisee pour etre transmise",
      text: "Videos, audios, PDF, articles et reperes historiques classes comme une plateforme premium."
    },
    {
      id: "hero-3",
      image: "/assets/images/lecture-02.jpeg",
      label: "BIBLIOTHEQUE",
      title: "Des dossiers distincts pour chaque grande figure",
      text: "Cheikh Abdoul Hamid Sarr, Cheikh Seydi El Hadj Malick Sy, khalifes, disciples et compagnons."
    }
  ];

  const CATEGORY_TILES = [
    {
      slug: "enseignement-jour",
      title: "Enseignement du jour",
      description: "L'entree gratuite mise en avant sur l'accueil.",
      href: "/mediatheque"
    },
    {
      slug: "video-jour",
      title: "Video du jour",
      description: "Lecture libre avant le reste des series premium.",
      href: "/mediatheque"
    },
    {
      slug: "bibliotheque",
      title: "Bibliotheque",
      description: "Livres, PDF, manuscrits, articles et discours.",
      href: "/bibliotheque"
    },
    {
      slug: "dossiers-ahmeth-tidiane",
      title: "Dossier Cheikh Ahmeth Tidiane Cherif",
      description: "Contenus classes par dossier principal.",
      href: "/bibliotheque"
    },
    {
      slug: "dossiers-seydi-malick",
      title: "Dossier Cheikh Seydi El Hadj Malick",
      description: "Archives historiques et reperes de transmission.",
      href: "/bibliotheque"
    },
    {
      slug: "moukhadam",
      title: "Dossiers Moukhadam",
      description: "Sous-dossiers dedies aux differents moukhadam.",
      href: "/bibliotheque"
    },
    {
      slug: "gamou",
      title: "Gamou",
      description: "Gamou Dakar, Kaolack, Thies, Tivaouane, Paal et Ndar.",
      href: "/mediatheque"
    },
    {
      slug: "conferences",
      title: "Conferences",
      description: "Dakar, Kaolack, Thies, Universite, Pikine, Ndar, Parcelles et Keur Moukhadam.",
      href: "/mediatheque"
    }
  ];

  const ADMIN_CATEGORIES = [
    "Video du jour",
    "Enseignement du jour",
    "Conference Dakar",
    "Conference Kaolack",
    "Conference Thies",
    "Conference Universite",
    "Conference Pikine",
    "Conference Ndar",
    "Conference Parcelles",
    "Conference Keur Moukhadam",
    "Gamou Dakar",
    "Gamou Kaolack",
    "Gamou Thies",
    "Gamou Tivaouane",
    "Gamou Paal",
    "Gamou Ndar",
    "Khassidas",
    "Podcasts",
    "Archives sonores",
    "Bibliotheque",
    "Articles",
    "Dossier Cheikh Ahmeth Tidiane Cherif",
    "Dossier Moukhadam Cheikh Ahmeth Tidiane Cherif",
    "Dossier Cheikh Seydi El Hadj Malick",
    "Dossier Cheikh Seydi Ahmeth Sy",
    "Dossier Serigne Babacar Sy",
    "Dossier El hadj Mansour Sy",
    "Dossier El hadj Abdoul Aziz Sy",
    "Dossier El hadj Habib Sy",
    "Dossier Moukhadam Cheikh Seydi Hadj Malick Sy"
  ];

  const DEFAULT_ITEMS = [
    {
      id: "video-day",
      kind: "video",
      title: "Video du jour : Adab, methode et elevation",
      description: "Le contenu gratuit mis en avant chaque jour sur la page d'accueil.",
      category: "Video du jour",
      collection: "daily",
      duration: "18 min",
      access: "free",
      isDaily: true,
      cover: "/assets/images/hero-cheikh.jpeg",
      mediaSrc: "/assets/videos/enseignement-01.mp4",
      label: "LIBRE",
      featured: true
    },
    {
      id: "conference-dakar",
      kind: "video",
      title: "Conference Dakar : transmission et clarte",
      description: "Une conference classee dans la serie de Dakar.",
      category: "Conference Dakar",
      collection: "conference",
      duration: "26 min",
      access: "premium",
      cover: "/assets/images/lecture-01.jpeg",
      mediaSrc: "/assets/videos/conference-01.mp4",
      label: "PREMIUM",
      featured: true
    },
    {
      id: "conference-kaolack",
      kind: "video",
      title: "Conference Kaolack : defense de la Tarikha",
      description: "Une conference premium organisee par ville et par theme.",
      category: "Conference Kaolack",
      collection: "conference",
      duration: "31 min",
      access: "premium",
      cover: "/assets/images/lecture-02.jpeg",
      mediaSrc: "/assets/videos/conference-01.mp4",
      label: "PREMIUM"
    },
    {
      id: "conference-thies",
      kind: "video",
      title: "Conference Thies : education et rigueur",
      description: "Serie video premium classee pour un acces rapide.",
      category: "Conference Thies",
      collection: "conference",
      duration: "24 min",
      access: "premium",
      cover: "/assets/images/rencontre-01.jpeg",
      mediaSrc: "/assets/videos/conference-01.mp4",
      label: "PREMIUM"
    },
    {
      id: "conference-universite",
      kind: "video",
      title: "Conference Universite : argumentation et pedagogie",
      description: "Contenu premium pour la defense de l'Islam et la formation.",
      category: "Conference Universite",
      collection: "conference",
      duration: "28 min",
      access: "premium",
      cover: "/assets/images/marche-01.jpeg",
      mediaSrc: "/assets/videos/conference-01.mp4",
      label: "PREMIUM"
    },
    {
      id: "conference-pikine",
      kind: "video",
      title: "Conference Pikine : repere spirituel",
      description: "Collection premium par ville et serie.",
      category: "Conference Pikine",
      collection: "conference",
      duration: "23 min",
      access: "premium",
      cover: "/assets/images/hero-cheikh.jpeg",
      mediaSrc: "/assets/videos/conference-01.mp4",
      label: "PREMIUM"
    },
    {
      id: "conference-ndar",
      kind: "video",
      title: "Conference Ndar : memoire et transmission",
      description: "Archive video premium dediee a la serie de Ndar.",
      category: "Conference Ndar",
      collection: "conference",
      duration: "22 min",
      access: "premium",
      cover: "/assets/images/archive-01.jpeg",
      mediaSrc: "/assets/videos/conference-01.mp4",
      label: "PREMIUM"
    },
    {
      id: "conference-parcelles",
      kind: "video",
      title: "Conference Parcelles : parcours des disciples",
      description: "Une entree premium supplementaire dans la serie conferences.",
      category: "Conference Parcelles",
      collection: "conference",
      duration: "20 min",
      access: "premium",
      cover: "/assets/images/lecture-02.jpeg",
      mediaSrc: "/assets/videos/conference-01.mp4",
      label: "PREMIUM"
    },
    {
      id: "conference-keur-moukhadam",
      kind: "video",
      title: "Conference Keur Moukhadam : chaine de formation",
      description: "Une conference premium classee dans son propre dossier.",
      category: "Conference Keur Moukhadam",
      collection: "conference",
      duration: "29 min",
      access: "premium",
      cover: "/assets/images/lecture-01.jpeg",
      mediaSrc: "/assets/videos/conference-01.mp4",
      label: "PREMIUM"
    },
    {
      id: "gamou-dakar",
      kind: "video",
      title: "Gamou Dakar : patience et etiquette",
      description: "Collection premium dediee au Gamou de Dakar.",
      category: "Gamou Dakar",
      collection: "gamou",
      duration: "32 min",
      access: "premium",
      cover: "/assets/images/hero-cheikh.jpeg",
      mediaSrc: "/assets/videos/archive-01.mp4",
      label: "PREMIUM",
      featured: true
    },
    {
      id: "gamou-kaolack",
      kind: "video",
      title: "Gamou Kaolack : recit et exhortation",
      description: "Archive video premium du Gamou de Kaolack.",
      category: "Gamou Kaolack",
      collection: "gamou",
      duration: "27 min",
      access: "premium",
      cover: "/assets/images/archive-01.jpeg",
      mediaSrc: "/assets/videos/archive-01.mp4",
      label: "PREMIUM"
    },
    {
      id: "gamou-thies",
      kind: "video",
      title: "Gamou Thies : discipline et ferveur",
      description: "Serie premium du Gamou de Thies.",
      category: "Gamou Thies",
      collection: "gamou",
      duration: "35 min",
      access: "premium",
      cover: "/assets/images/rencontre-01.jpeg",
      mediaSrc: "/assets/videos/archive-01.mp4",
      label: "PREMIUM"
    },
    {
      id: "gamou-tivaouane",
      kind: "video",
      title: "Gamou Tivaouane : hommage et filiation",
      description: "Collection premium rattachee au Gamou de Tivaouane.",
      category: "Gamou Tivaouane",
      collection: "gamou",
      duration: "25 min",
      access: "premium",
      cover: "/assets/images/archive-01.jpeg",
      mediaSrc: "/assets/videos/archive-01.mp4",
      label: "PREMIUM"
    },
    {
      id: "gamou-paal",
      kind: "video",
      title: "Gamou Paal : recueillement et memoire",
      description: "Serie premium pour le dossier Gamou Paal.",
      category: "Gamou Paal",
      collection: "gamou",
      duration: "21 min",
      access: "premium",
      cover: "/assets/images/marche-01.jpeg",
      mediaSrc: "/assets/videos/archive-01.mp4",
      label: "PREMIUM"
    },
    {
      id: "gamou-ndar",
      kind: "video",
      title: "Gamou Ndar : archive de transmission",
      description: "Archive premium du Gamou de Ndar.",
      category: "Gamou Ndar",
      collection: "gamou",
      duration: "34 min",
      access: "premium",
      cover: "/assets/images/lecture-01.jpeg",
      mediaSrc: "/assets/videos/archive-01.mp4",
      label: "PREMIUM"
    },
    {
      id: "audio-khassida",
      kind: "audio",
      title: "Khassida : memoire spirituelle",
      description: "Lecture audio premium avec verrouillage apres la premiere minute.",
      category: "Khassidas",
      collection: "audio",
      duration: "22 min",
      access: "premium",
      cover: "/assets/images/hero-cheikh.jpeg",
      mediaSrc: "/assets/videos/sermon-01.mp4",
      label: "PREMIUM",
      featured: true
    },
    {
      id: "audio-conference-dakar",
      kind: "audio",
      title: "Conference audio Dakar",
      description: "Version audio premium de la serie de Dakar.",
      category: "Conference Dakar",
      collection: "audio",
      duration: "19 min",
      access: "premium",
      cover: "/assets/images/lecture-02.jpeg",
      mediaSrc: "/assets/videos/sermon-01.mp4",
      label: "PREMIUM"
    },
    {
      id: "audio-sermon",
      kind: "audio",
      title: "Sermon : conduite et patience",
      description: "Archive sonore premium classee dans l'audiotheque.",
      category: "Archives sonores",
      collection: "audio",
      duration: "16 min",
      access: "premium",
      cover: "/assets/images/archive-01.jpeg",
      mediaSrc: "/assets/videos/sermon-01.mp4",
      label: "PREMIUM"
    },
    {
      id: "audio-podcast",
      kind: "audio",
      title: "Podcast : figures et chaines de transmission",
      description: "Podcast premium rattache aux dossiers historiques.",
      category: "Podcasts",
      collection: "audio",
      duration: "17 min",
      access: "premium",
      cover: "/assets/images/rencontre-01.jpeg",
      mediaSrc: "/assets/videos/sermon-01.mp4",
      label: "PREMIUM"
    },
    {
      id: "audio-archives",
      kind: "audio",
      title: "Archives sonores : reperes essentiels",
      description: "Collection audio premium pour la meditation et l'etude.",
      category: "Archives sonores",
      collection: "audio",
      duration: "24 min",
      access: "premium",
      cover: "/assets/images/lecture-01.jpeg",
      mediaSrc: "/assets/videos/sermon-01.mp4",
      label: "PREMIUM"
    },
    {
      id: "doc-reference",
      kind: "document",
      title: "Bibliotheque PDF : references de base",
      description: "Une entree de bibliotheque pour les livres et PDF essentiels.",
      category: "Bibliotheque",
      collection: "document",
      duration: "PDF",
      access: "free",
      cover: "/assets/images/lecture-01.jpeg",
      mediaSrc: "",
      label: "PDF",
      featured: true
    },
    {
      id: "doc-manuscrit",
      kind: "document",
      title: "Manuscrits et documents historiques",
      description: "Dossier de consultation pour les manuscrits et archives ecrites.",
      category: "Bibliotheque",
      collection: "document",
      duration: "PDF",
      access: "premium",
      cover: "/assets/images/archive-01.jpeg",
      mediaSrc: "",
      label: "PDF"
    },
    {
      id: "doc-discours",
      kind: "document",
      title: "Discours et ecrits historiques",
      description: "Textes classes pour etude et reperage rapide.",
      category: "Bibliotheque",
      collection: "document",
      duration: "PDF",
      access: "premium",
      cover: "/assets/images/lecture-02.jpeg",
      mediaSrc: "",
      label: "PDF"
    },
    {
      id: "article-transmission",
      kind: "article",
      title: "Article : transmission et methode",
      description: "Une lecture editoriale pour accompagner les enseignements.",
      category: "Articles",
      collection: "article",
      duration: "Article",
      access: "free",
      cover: "/assets/images/hero-cheikh.jpeg",
      mediaSrc: "",
      label: "ARTICLE"
    },
    {
      id: "article-gamou",
      kind: "article",
      title: "Article : comprendre la logique des Gamou",
      description: "Reperes de lecture et contexte pour les collections Gamou.",
      category: "Articles",
      collection: "article",
      duration: "Article",
      access: "free",
      cover: "/assets/images/rencontre-01.jpeg",
      mediaSrc: "",
      label: "ARTICLE"
    },
    {
      id: "folder-ahmeth-tidiane",
      kind: "folder",
      title: "Dossier Cheikh Ahmeth Tidiane Cherif",
      description: "Videos, audios, articles et documents regroupes dans un meme dossier.",
      category: "Dossier Cheikh Ahmeth Tidiane Cherif",
      collection: "folder",
      duration: "Dossier",
      access: "free",
      cover: "/assets/images/archive-01.jpeg",
      mediaSrc: "",
      label: "DOSSIER",
      featured: true
    },
    {
      id: "folder-moukhadam-ahmeth-tidiane",
      kind: "folder",
      title: "Dossier Moukhadam Cheikh Ahmeth Tidiane Cherif",
      description: "Sous-dossiers pour chaque moukhadam de cette chaine.",
      category: "Dossier Moukhadam Cheikh Ahmeth Tidiane Cherif",
      collection: "folder",
      duration: "Dossier",
      access: "free",
      cover: "/assets/images/marche-01.jpeg",
      mediaSrc: "",
      label: "DOSSIER"
    },
    {
      id: "folder-seydi-malick",
      kind: "folder",
      title: "Dossier Cheikh Seydi El Hadj Malick",
      description: "Entree principale pour les archives rattachees a Cheikh Seydi El Hadj Malick.",
      category: "Dossier Cheikh Seydi El Hadj Malick",
      collection: "folder",
      duration: "Dossier",
      access: "free",
      cover: "/assets/images/archive-01.jpeg",
      mediaSrc: "",
      label: "DOSSIER"
    },
    {
      id: "folder-seydi-ahmeth-sy",
      kind: "folder",
      title: "Dossier Cheikh Seydi Ahmeth Sy",
      description: "Textes, images et contenus classes autour de Cheikh Seydi Ahmeth Sy.",
      category: "Dossier Cheikh Seydi Ahmeth Sy",
      collection: "folder",
      duration: "Dossier",
      access: "free",
      cover: "/assets/images/lecture-01.jpeg",
      mediaSrc: "",
      label: "DOSSIER"
    },
    {
      id: "folder-serigne-babacar",
      kind: "folder",
      title: "Dossier Serigne Babacar Sy",
      description: "Reperes, documents et medias par dossier principal.",
      category: "Dossier Serigne Babacar Sy",
      collection: "folder",
      duration: "Dossier",
      access: "free",
      cover: "/assets/images/lecture-02.jpeg",
      mediaSrc: "",
      label: "DOSSIER"
    },
    {
      id: "folder-el-hadj-mansour",
      kind: "folder",
      title: "Dossier El hadj Mansour Sy",
      description: "Archives et reperes classes pour la consultation.",
      category: "Dossier El hadj Mansour Sy",
      collection: "folder",
      duration: "Dossier",
      access: "free",
      cover: "/assets/images/hero-cheikh.jpeg",
      mediaSrc: "",
      label: "DOSSIER"
    },
    {
      id: "folder-el-hadj-abdoul-aziz",
      kind: "folder",
      title: "Dossier El hadj Abdoul Aziz Sy",
      description: "Dossier principal avec contenus par type.",
      category: "Dossier El hadj Abdoul Aziz Sy",
      collection: "folder",
      duration: "Dossier",
      access: "free",
      cover: "/assets/images/rencontre-01.jpeg",
      mediaSrc: "",
      label: "DOSSIER"
    },
    {
      id: "folder-el-hadj-habib",
      kind: "folder",
      title: "Dossier El hadj Habib Sy",
      description: "Dossier principal pour les archives dediees.",
      category: "Dossier El hadj Habib Sy",
      collection: "folder",
      duration: "Dossier",
      access: "free",
      cover: "/assets/images/marche-01.jpeg",
      mediaSrc: "",
      label: "DOSSIER"
    },
    {
      id: "folder-moukhadam-seydi-malick",
      kind: "folder",
      title: "Dossier Moukhadam Cheikh Seydi Hadj Malick Sy",
      description: "Sous-dossiers pour chaque moukhadam lie a cette transmission.",
      category: "Dossier Moukhadam Cheikh Seydi Hadj Malick Sy",
      collection: "folder",
      duration: "Dossier",
      access: "free",
      cover: "/assets/images/archive-01.jpeg",
      mediaSrc: "",
      label: "DOSSIER"
    },
    {
      id: "photo-rencontre",
      kind: "image",
      title: "Rencontre et transmission",
      description: "Archive photo pour la galerie historique.",
      category: "Photos historiques",
      collection: "photo",
      duration: "Photo",
      access: "free",
      cover: "/assets/images/rencontre-01.jpeg",
      mediaSrc: "/assets/images/rencontre-01.jpeg",
      label: "PHOTO"
    },
    {
      id: "photo-marche",
      kind: "image",
      title: "Marche et deplacement",
      description: "Archive photo premium pour les evenements et deplacements.",
      category: "Archives",
      collection: "photo",
      duration: "Photo",
      access: "free",
      cover: "/assets/images/marche-01.jpeg",
      mediaSrc: "/assets/images/marche-01.jpeg",
      label: "PHOTO"
    },
    {
      id: "photo-archive",
      kind: "image",
      title: "Memoire iconographique",
      description: "Photographies historiques pour la galerie.",
      category: "Archives",
      collection: "photo",
      duration: "Photo",
      access: "free",
      cover: "/assets/images/archive-01.jpeg",
      mediaSrc: "/assets/images/archive-01.jpeg",
      label: "PHOTO"
    }
  ];

  return {
    STORAGE_KEYS,
    DEFAULT_ADMIN_PASSWORD,
    DEFAULT_SETTINGS,
    NAV_ITEMS,
    HERO_SLIDES,
    CATEGORY_TILES,
    ADMIN_CATEGORIES,
    DEFAULT_ITEMS
  };
})();
