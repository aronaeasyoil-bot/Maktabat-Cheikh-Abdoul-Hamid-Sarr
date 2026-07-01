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
    { slug: "compte", label: "Compte", href: "/compte" }
  ];

  const DRIVE_ROOT_ID = "1rjNBkmNtP9XGQBzeSf5lr_pIEpApR3DU";
  const DRIVE_SHORTCUT_ID = "1IGO0D8gY3awHMj7lmpDRTUsAOrwHKkNj";

  const covers = [
    "/assets/images/photo-1.jpg",
    "/assets/images/photo-2.jpg",
    "/assets/images/photo-3.jpg",
    "/assets/images/photo-4.jpg",
    "/assets/images/photo-5.jpg"
  ];

  const coverAt = (index) => covers[index % covers.length];
  const driveFolder = (id) => `https://drive.google.com/drive/folders/${id}`;
  const driveFile = (id) => `https://drive.google.com/file/d/${id}/view?usp=drivesdk`;
  const drivePreview = (id) => `https://drive.google.com/file/d/${id}/preview`;
  const driveDownload = (id) => `https://drive.google.com/uc?export=download&id=${id}`;

  const DRIVE_ROOT = {
    id: DRIVE_ROOT_ID,
    title: "Cheikh Abdoul Hamid Sarr",
    url: driveFolder(DRIVE_ROOT_ID),
    shortcutUrl: driveFile(DRIVE_SHORTCUT_ID)
  };

  const HERO_SLIDES = [
    {
      id: "hero-1",
      image: "/assets/images/photo-1.jpg",
      label: "ENSEIGNEMENT DU JOUR",
      title: "Maktabat Cheikh Abdoul Hamid Sarr",
      text: "Une mediatheque premium, organisee depuis le Google Drive du projet pour transmettre les videos, audios et dossiers spirituels."
    },
    {
      id: "hero-2",
      image: "/assets/images/photo-2.jpg",
      label: "AUDIO PREMIUM",
      title: "Des archives classees par series, lieux et figures",
      text: "Cheikh M. Hamid, Sarr, Chez Mouqadam, Thies, Serigne Habib Sy et d'autres ensembles sont presentes comme de vraies collections."
    },
    {
      id: "hero-3",
      image: "/assets/images/photo-4.jpg",
      label: "DOSSIERS DRIVE",
      title: "Un acces fluide aux dossiers reels du projet",
      text: "Le site conserve la vraie logique des dossiers Google Drive afin de garder une organisation fidele, elegante et evolutive."
    }
  ];

  const CATEGORY_TILES = [
    {
      slug: "enseignement-jour",
      title: "Enseignement du jour",
      description: "Le contenu libre mis en avant sur l'accueil.",
      href: "/mediatheque"
    },
    {
      slug: "videos-premium",
      title: "Videos premium",
      description: "Kaolack, Gamou, archives et videos phone.",
      href: "/mediatheque"
    },
    {
      slug: "audiotheque",
      title: "Audiotheque",
      description: "Cheikh M. Hamid, Sarr, Thies, Chez Mouqadam et plus.",
      href: "/mediatheque"
    },
    {
      slug: "drive-root",
      title: "Dossier principal",
      description: "Le dossier Google Drive relie au projet.",
      href: "/bibliotheque"
    },
    {
      slug: "cheikh-hamid",
      title: "Cheikh M. Hamid",
      description: "Une collection audio dediee aux enseignements et interventions.",
      href: "/mediatheque"
    },
    {
      slug: "sarr",
      title: "Sarr",
      description: "Guediawaye, Gueoul et autres archives sonores.",
      href: "/mediatheque"
    },
    {
      slug: "chez-mouqadam",
      title: "Chez Mouqadam",
      description: "Serie audio organisee comme une rubrique a part entiere.",
      href: "/mediatheque"
    },
    {
      slug: "dossiers-drive",
      title: "Dossiers Drive",
      description: "Toutes les collections majeures conservees comme dossiers.",
      href: "/bibliotheque"
    }
  ];

  const driveFolderIndex = [
    { id: "1xr_bXx0rj8B0nMu7ApDsH-2tecb-PxuW", title: "Alfatiha" },
    { id: "1DKAxwv1XWnO-bu935Aq_Qb-IjPVg1JE4", title: "Al Waliou Mourchidanne" },
    { id: "1jyUP-BSFIj85QqX1mU775-XjcGWnCEcL", title: "Tivaouane 31-12-08" },
    { id: "1F7YZ2T317mUpsJUX0G2D3TFrvhqxZD-u", title: "Abada Bourouq" },
    { id: "1u5PsVKeYxSEAw95VrBYZiEPHCFIf9yeJ", title: "Al Haqiqatoul Mouhammadiyya" },
    { id: "10-OcaCbYJbX3iHwKnG1HXMfaZ8xPyIZK", title: "Badar" },
    { id: "1stX0EbgK82GUQ2i_sz5e0Hp2JAyu-Zw9", title: "Defendre les saints" },
    { id: "1HeCdjZ3IuuWQg9Wf4NoQ5CJQ0f72GuNq", title: "Gamou Lib 4" },
    { id: "1huiMl7j5TnHNrybzF6qYORtJv7Nr3wGt", title: "fakiha(mp3)" },
    { id: "17-vK98V8WNBi3BonTU_wVTxjlZPgyPMm", title: "Divers" },
    { id: "1-IIr5gmyxyldLxX20z0xM69TtHpJyRJy", title: "Devoirs conjoints S Maodo" },
    { id: "1AZor_I31GIgDnF6t4okZZ92GJ6wh4gJG", title: "chiekh m hamid" },
    { id: "16boJKbXTaADzj_PTeYbrC6xqzCVEBKsm", title: "Chez Mouqadam" },
    { id: "1tEcTBXZy_0ZOi-26iLrW3LoICGT7GO2d", title: "Gamou 2013" },
    { id: "18t6ODlDsZmHHPcVLpZz7Bvm144_qzy-7", title: "Gam dudu ba" },
    { id: "1COQHgdAwRVq_SekTXb2Fze4P6T-r2rnw", title: "Goree" },
    { id: "1Vzw0bU9UyITWBB4ZWpib2U61NWaVCaJ3", title: "Gueoul2012" },
    { id: "1hq5p9IE-KdKSuOcGOjahPDxo4jx3Zn_S", title: "Hadji Omar" },
    { id: "1uaqIyhhNUHvQ_kRkk66ofHoXjyk7gN7H", title: "Hizbou Assayfiyyou" },
    { id: "11FpLvbqr3cGiNToWZofyremulQ3MTXt-", title: "Gaya 2009" },
    { id: "1HFXR80_KHd26OpdrHmCLsd7vG8n8EG4I", title: "Gaya 2005" },
    { id: "15ZJ4tQreV1r3uAEEczstti7OBkQJGUE0", title: "Gaya 2008" },
    { id: "1xs6TnqHftXgCB91TQeSTtbd5QDxkdhN4", title: "Hikam Nafs" },
    { id: "1LEsMq7QXMZpxnlQHmWR4ph9PtTh9WOOE", title: "Gaya Tarbiyya" },
    { id: "1LX4owQoHZZZG3iw-Uxa-tVcY-LraRgJK", title: "GAYA" },
    { id: "1r0cDkKe8Vx2OHA21tDnY24JrAxOzwxTg", title: "Katmiyya 2012" },
    { id: "16SGcqimMbiCf4cS8PWwPr35vm7eM_fdy", title: "Kaolack" },
    { id: "1kuFqJeK5TBrqQb059gLXgcbLL6cXlfkb", title: "Jawharatoul Kamal et Salatoul Fatiha" },
    { id: "1hFx3nzuuVkbNHBWX7mV7TTkg2086-qWw", title: "ibn hanchir abdoul hamid" },
    { id: "1dtmvpz8ImPHf7xY6icDlnc1ucLZYraeD", title: "KIFAYA MP3" },
    { id: "1TR0DBEP9g76oNNIydjSAKyk4CSTaHh2-", title: "Les Z" },
    { id: "1AB6uYDGyoFEFrjBg37MgPO23L_WFq9Jz", title: "Mbour" },
    { id: "1XP5Zuulne8LNkrx2p5i_pJcwhBx2dE1R", title: "Katmiya 2013 audio" },
    { id: "1CQd72Mtc7_9CSmOWXHHdEcMQeblrI3NV", title: "Maouloud" },
    { id: "15xFR5b4U1ty_0_lWI7leWUFrJz7cA0uv", title: "Khoutba" },
    { id: "1tR5aOb7ZZNRIpEkoPe1DvQzqMM3KAA4z", title: "PA 2012 Cerno" },
    { id: "17k2y2Gy0mw_teX_ld25ZIzDbOlfOCk9B", title: "Ndar 2008" },
    { id: "153K0LUH0lUjDkWal_34bXOvr36_ww6dm", title: "Ramadan 2003" },
    { id: "1AIDGio03gXWQJYKnfd6eDID7QTYp1gSf", title: "Risalatu latifa 31-12-02" },
    { id: "10UdqHGHQCdt40ZE5gVuPR0_3XyYcwCKl", title: "Sarr" },
    { id: "1sTrTzkwIBJoaXee4Ms7X-LwUzS0SjU84", title: "PA" },
    { id: "1wIwij-DtBb7VLiJTaZg7bzOegnScTgXd", title: "QRconver" },
    { id: "1cqobawB7kcKhPNXiwi8tiR0c_DcvW44d", title: "Ramadan 2010" },
    { id: "1zRP3rxr7BoXiEuy15Loq-Gh8MqBhAKk0", title: "Salat" },
    { id: "1nZiqe4x3XgopBv7_Y3naQnd-8Levyeh7", title: "Serigne Amadou CISSE XUTBA KORITE" },
    { id: "1SYrO7C6aZGmuJs42v0EOUSviwdyTLMLj", title: "Serigne Habib sy" },
    { id: "18lEMX5bhZ-jArGccKB8xnTalDk85JGKI", title: "Tawhid" },
    { id: "10tv02WSHmQZTumnEgtsqGsbNQr1zoyDN", title: "Sourata Nissa" },
    { id: "1zKxZpSgHMH3m784sUwSwgW4fE4LZ7UmF", title: "Seydou Welle" },
    { id: "1wcUL8Oqp-0_ycFgZezj746Li_Nym9EDc", title: "Thies" },
    { id: "1P-j6jYBvh53rqIaqtV0ORPfjZEzvMuVw", title: "THIES" },
    { id: "1vBswHfXOfCfpIrbzX8hkG6q0llewnxn1", title: "Sourate Youssouf" },
    { id: "1nuvPReZj98sKXiuOYGeMGPtOM6-87vKv", title: "Souratoun Nour" },
    { id: "1MyCIBED-5lCML-doU6hXEDnwIxFEW2pf", title: "Siradjou Salik" },
    { id: "1yGcaE6zpIZ_WRSPM7thfKmbANq_v3dAb", title: "tiv2010" },
    { id: "1wMSwl7vrzZAnhIr7_f0g3TDDW_yu4CRW", title: "Ziarr" },
    { id: "1E0qzZlmPt6EXjj22kyGuenvThhczhR6r", title: "Tivaoune 2012" },
    { id: "1zlWJNla682fNWRIJpzjkLPn6w6mtKnjH", title: "Ziar Liberte 5 2012" },
    { id: "1Rsprp3E7NL9RXqeIIIY83VGXutBePB1N", title: "Ziar Aout 11" },
    { id: "1WEgziNGQzmc4K9BpA_po_4-z7GZ8uHCQ", title: "Wer wi" },
    { id: "1vwlm1E4-8Egn6ztzpPOIYXjVyVhzkxOW", title: "Wa Mpal" },
    { id: "1_a_1y1AJtVlDSsQbc4sBFS0Zngi2vi_d", title: "Waxtaan" },
    { id: "1k2fH-w7LSrQgxwH0_P_mXYzJxBX5WILx", title: "video-phone" },
    { id: "1x-akEomUAr8lyV9-6vdeidQDSnXA8-FS", title: "Ziar Dara J koor" },
    { id: "1QKfbiCfL2aDsmUlb_r8hLI_ZoRosvk1E", title: "Ziar Cheix Mawloud" }
  ];

  function folderDescription(title) {
    if (title.toLowerCase().includes("gamou")) {
      return `Dossier Drive synchronise pour la serie ${title}, avec une organisation conservee telle qu'elle existe dans la source du projet.`;
    }

    if (title.toLowerCase().includes("hamid") || title.toLowerCase().includes("sarr")) {
      return `Collection Drive dediee a ${title}, conservee dans l'architecture reelle du dossier Google Drive du projet.`;
    }

    if (title.toLowerCase().includes("thies") || title.toLowerCase().includes("kaolack") || title.toLowerCase().includes("ndar")) {
      return `Collection de lieu ${title}, mise a disposition comme dossier premium structure pour la consultation rapide.`;
    }

    return `Dossier Drive ${title}, integre comme une collection navigable de la mediatheque officielle.`;
  }

  const driveFolderItems = driveFolderIndex.map((folder, index) => ({
    id: `drive-folder-${folder.id}`,
    kind: "folder",
    title: folder.title,
    description: folderDescription(folder.title),
    category: "Dossier Drive",
    collection: "folder",
    duration: "Dossier",
    access: "free",
    cover: coverAt(index),
    mediaSrc: driveFolder(folder.id),
    label: "DOSSIER"
  }));

  const libraryItems = [
    {
      id: "drive-root-folder",
      kind: "document",
      title: "Dossier principal Google Drive",
      description: "Acces au dossier racine relie au projet, base de la mediatheque et des sous-dossiers visibles sur le site.",
      category: "Acces Drive",
      collection: "document",
      duration: "Drive",
      access: "free",
      cover: "/assets/images/photo-1.jpg",
      mediaSrc: DRIVE_ROOT.url,
      label: "ACCES",
      featured: true
    },
    {
      id: "drive-project-shortcut",
      kind: "document",
      title: "Raccourci du projet",
      description: "Le raccourci Google Drive nomme Cheikh Abdoul Hamid Sarr, conserve comme point d'entree officiel du projet.",
      category: "Acces Drive",
      collection: "document",
      duration: "Drive",
      access: "free",
      cover: "/assets/images/photo-4.jpg",
      mediaSrc: DRIVE_ROOT.shortcutUrl,
      label: "ACCES"
    },
    {
      id: "drive-video-folder",
      kind: "document",
      title: "Videotheque Drive",
      description: "Acces direct au dossier video-phone et aux autres videos source du catalogue premium.",
      category: "Acces Drive",
      collection: "document",
      duration: "Drive",
      access: "free",
      cover: "/assets/images/photo-5.jpg",
      mediaSrc: driveFolder("1k2fH-w7LSrQgxwH0_P_mXYzJxBX5WILx"),
      label: "ACCES"
    },
    {
      id: "drive-audio-folder",
      kind: "document",
      title: "Audiotheque Drive",
      description: "Acces direct aux dossiers audio majeurs comme Cheikh M. Hamid, Sarr et Chez Mouqadam.",
      category: "Acces Drive",
      collection: "document",
      duration: "Drive",
      access: "free",
      cover: "/assets/images/photo-2.jpg",
      mediaSrc: driveFolder("1AZor_I31GIgDnF6t4okZZ92GJ6wh4gJG"),
      label: "ACCES"
    }
  ];

  const articleItems = [
    {
      id: "article-catalogue-drive",
      kind: "article",
      title: "Catalogue synchronise depuis le Drive du projet",
      description: "Le site reprend les vrais ensembles du Google Drive afin d'eviter les categories fictives et de garder une organisation fidele.",
      category: "Reperes",
      collection: "article",
      duration: "Article",
      access: "free",
      cover: "/assets/images/photo-3.jpg",
      mediaSrc: "",
      label: "ARTICLE"
    },
    {
      id: "article-acces-premium",
      kind: "article",
      title: "Contenus premium et lecture limitee a 1 minute",
      description: "Toutes les videos et tous les audios premium se lancent immediatement, puis affichent la demande de compte et de paiement apres une minute.",
      category: "Reperes",
      collection: "article",
      duration: "Article",
      access: "free",
      cover: "/assets/images/photo-1.jpg",
      mediaSrc: "",
      label: "ARTICLE"
    },
    {
      id: "article-admin-drive",
      kind: "article",
      title: "Admin prive et evolution future",
      description: "Le panneau admin est prepare pour piloter les categories, les couvertures, les contenus et l'evolution future des paiements et emails.",
      category: "Reperes",
      collection: "article",
      duration: "Article",
      access: "free",
      cover: "/assets/images/photo-5.jpg",
      mediaSrc: "",
      label: "ARTICLE"
    }
  ];

  const photoItems = [
    {
      id: "photo-gold",
      kind: "image",
      title: "Portrait principal",
      description: "Visuel prioritaire de la page d'accueil et des cartes premium.",
      category: "Galerie",
      collection: "photo",
      duration: "Photo",
      access: "free",
      cover: "/assets/images/photo-1.jpg",
      mediaSrc: "/assets/images/photo-1.jpg",
      label: "PHOTO"
    },
    {
      id: "photo-mint-reading",
      kind: "image",
      title: "Lecture en vert",
      description: "Couverture editoriale pour les collections audio et bibliotheque.",
      category: "Galerie",
      collection: "photo",
      duration: "Photo",
      access: "free",
      cover: "/assets/images/photo-2.jpg",
      mediaSrc: "/assets/images/photo-2.jpg",
      label: "PHOTO"
    },
    {
      id: "photo-mint-study",
      kind: "image",
      title: "Etude concentree",
      description: "Visuel dedie aux contenus de transmission et de lecture.",
      category: "Galerie",
      collection: "photo",
      duration: "Photo",
      access: "free",
      cover: "/assets/images/photo-3.jpg",
      mediaSrc: "/assets/images/photo-3.jpg",
      label: "PHOTO"
    },
    {
      id: "photo-white-library",
      kind: "image",
      title: "Portrait en blanc",
      description: "Image premium pour les archives et les dossiers majeurs.",
      category: "Galerie",
      collection: "photo",
      duration: "Photo",
      access: "free",
      cover: "/assets/images/photo-4.jpg",
      mediaSrc: "/assets/images/photo-4.jpg",
      label: "PHOTO"
    },
    {
      id: "photo-blue-lounge",
      kind: "image",
      title: "Portrait en bleu",
      description: "Image de couverture pour l'espace compte et l'accueil des collections.",
      category: "Galerie",
      collection: "photo",
      duration: "Photo",
      access: "free",
      cover: "/assets/images/photo-5.jpg",
      mediaSrc: "/assets/images/photo-5.jpg",
      label: "PHOTO"
    }
  ];

  const videoItems = [
    {
      id: "video-day",
      kind: "video",
      title: "Enseignement du jour : ouverture de la mediatheque",
      description: "La video libre qui ouvre l'experience et presente l'esprit de la plateforme.",
      category: "Enseignement du jour",
      collection: "daily",
      duration: "Video MP4",
      access: "free",
      isDaily: true,
      cover: "/assets/images/photo-1.jpg",
      mediaSrc: driveDownload("1Q9jMf20ydRW22BjoYAdnDuF2DvCCPypC"),
      label: "LIBRE",
      featured: true,
      player: "native"
    },
    {
      id: "video-marabout",
      kind: "video",
      title: "Marabout",
      description: "Une archive video premium mise en avant dans une vignette directe et lisible.",
      category: "Videotheque premium",
      collection: "conference",
      duration: "Video MP4",
      access: "premium",
      cover: "/assets/images/photo-4.jpg",
      mediaSrc: driveDownload("1Iocr3chOftM-QFOfmwVTxLBVfQdSL2th"),
      label: "PREMIUM",
      featured: true,
      player: "native"
    },
    {
      id: "video-kaolack-1",
      kind: "video",
      title: "Kaolack 12-04-09 - Partie 1",
      description: "Archive premium issue du dossier Kaolack, ouverte dans le lecteur Drive integre.",
      category: "Kaolack",
      collection: "conference",
      duration: "Archive 2009",
      access: "premium",
      cover: "/assets/images/photo-5.jpg",
      mediaSrc: drivePreview("1q1022WJ6EdfYRxifo9buSq9AdJf-Dthe"),
      label: "PREMIUM",
      featured: true,
      player: "drive"
    },
    {
      id: "video-kaolack-3",
      kind: "video",
      title: "Kaolack 12-04-09 - Partie 3",
      description: "Seconde entree premium du dossier Kaolack pour enrichir la section video du site.",
      category: "Kaolack",
      collection: "conference",
      duration: "Archive 2009",
      access: "premium",
      cover: "/assets/images/photo-2.jpg",
      mediaSrc: drivePreview("1olhNEyNbj83ysiCaLRQcW9kMuDK7CbLI"),
      label: "PREMIUM",
      player: "drive"
    },
    {
      id: "video-gamou-1",
      kind: "video",
      title: "Gamou - Partie 1",
      description: "Collection video premium issue du dossier THIES, presentee dans un format premium de type rail.",
      category: "Thies - Gamou",
      collection: "gamou",
      duration: "Archive 2011",
      access: "premium",
      cover: "/assets/images/photo-3.jpg",
      mediaSrc: drivePreview("1OVcsYGgPpjqzKTd4IhVFgSAlFq1DiHKo"),
      label: "PREMIUM",
      featured: true,
      player: "drive"
    },
    {
      id: "video-gamou-2",
      kind: "video",
      title: "Gamou - Partie 2",
      description: "Deuxieme segment du dossier THIES pour les visiteurs qui veulent suivre la serie complete.",
      category: "Thies - Gamou",
      collection: "gamou",
      duration: "Archive 2011",
      access: "premium",
      cover: "/assets/images/photo-4.jpg",
      mediaSrc: drivePreview("1-h-wpTj6Lsr6EcU3fGxYxClTfaWRqtSw"),
      label: "PREMIUM",
      player: "drive"
    },
    {
      id: "video-gamou-3",
      kind: "video",
      title: "Gamou - Partie 3",
      description: "Troisieme segment video pour prolonger la navigation dans les archives premium.",
      category: "Thies - Gamou",
      collection: "gamou",
      duration: "Archive 2011",
      access: "premium",
      cover: "/assets/images/photo-1.jpg",
      mediaSrc: drivePreview("1DyFZdMhmbXqP0kGQxsDSc7c8Yjurm3Vb"),
      label: "PREMIUM",
      player: "drive"
    },
    {
      id: "video-gamou-4",
      kind: "video",
      title: "Gamou - Partie 4",
      description: "Quatrieme segment de la collection THIES, conserve dans un format reel de dossier.",
      category: "Thies - Gamou",
      collection: "gamou",
      duration: "Archive 2011",
      access: "premium",
      cover: "/assets/images/photo-5.jpg",
      mediaSrc: drivePreview("198FOQPKfKgFBrEBASuxKF03e4LXjOPHV"),
      label: "PREMIUM",
      player: "drive"
    },
    {
      id: "video-gueoul-2009",
      kind: "video",
      title: "C.A.H.S Gueoul 14-06-09",
      description: "Une archive video forte visuellement pour enrichir la rubrique premium du site.",
      category: "Gueoul",
      collection: "conference",
      duration: "Archive 2009",
      access: "premium",
      cover: "/assets/images/photo-2.jpg",
      mediaSrc: drivePreview("1ml1z9vxMYj6X8c-C2iVU4vJkcMM-VN5I"),
      label: "PREMIUM",
      player: "drive"
    },
    {
      id: "video-defense-islam",
      kind: "video",
      title: "Dabakh contre les Francs Macons",
      description: "Contenu video premium rattache a la defense de l'Islam, affiche dans une carte de lecture premium.",
      category: "Defense de l'Islam",
      collection: "conference",
      duration: "Archive video",
      access: "premium",
      cover: "/assets/images/photo-4.jpg",
      mediaSrc: drivePreview("1meFtdjKN21o5f81sdfe4gmleV-tEOUMo"),
      label: "PREMIUM",
      player: "drive"
    },
    {
      id: "video-recitation",
      kind: "video",
      title: "Recitation de Daaka",
      description: "Archive video de recitation, preservee comme contenu premium du catalogue.",
      category: "Recitations",
      collection: "conference",
      duration: "Archive video",
      access: "premium",
      cover: "/assets/images/photo-3.jpg",
      mediaSrc: drivePreview("1PdPYNDIbjLYQye6T12Nztez7JLKUWvyb"),
      label: "PREMIUM",
      player: "drive"
    }
  ];

  const audioItems = [
    {
      id: "audio-hamid-1",
      kind: "audio",
      title: "hamid.mp3",
      description: "Archive sonore premium issue du dossier Cheikh M. Hamid.",
      category: "Cheikh M. Hamid",
      collection: "audio",
      duration: "MP3",
      access: "premium",
      cover: "/assets/images/photo-1.jpg",
      mediaSrc: driveDownload("1JPwZXGUlT-0Er8fpHCKxUYUD4-VWkYU5"),
      label: "PREMIUM",
      featured: true,
      player: "native"
    },
    {
      id: "audio-hamid-2",
      kind: "audio",
      title: "cheikh hamid.mp3",
      description: "Seconde entree audio premium du dossier Cheikh M. Hamid.",
      category: "Cheikh M. Hamid",
      collection: "audio",
      duration: "MP3",
      access: "premium",
      cover: "/assets/images/photo-2.jpg",
      mediaSrc: driveDownload("1uzWJ2s93QTvaZ797tTAlDLJKp_epUxHP"),
      label: "PREMIUM",
      player: "native"
    },
    {
      id: "audio-hamid-3",
      kind: "audio",
      title: "babacar kasse.mp3",
      description: "Archive premium rattachee au meme ensemble de transmissions audio.",
      category: "Cheikh M. Hamid",
      collection: "audio",
      duration: "MP3",
      access: "premium",
      cover: "/assets/images/photo-3.jpg",
      mediaSrc: driveDownload("1Ca9Xt12cyVD6l6WpEB8eDCw5uyzZAqsL"),
      label: "PREMIUM",
      player: "native"
    },
    {
      id: "audio-hamid-4",
      kind: "audio",
      title: "s abdoulaye mbaye.mp3",
      description: "Audio premium pour prolonger l'experience d'ecoute dans la section dediee.",
      category: "Cheikh M. Hamid",
      collection: "audio",
      duration: "MP3",
      access: "premium",
      cover: "/assets/images/photo-4.jpg",
      mediaSrc: driveDownload("1LE7c5LPKxtvce_UwZlB97W68AGwEsojh"),
      label: "PREMIUM",
      player: "native"
    },
    {
      id: "audio-sarr-1",
      kind: "audio",
      title: "Guediawaye 1.m4a",
      description: "Grande archive sonore du dossier Sarr, presentee comme un contenu premium majeur.",
      category: "Sarr",
      collection: "audio",
      duration: "M4A",
      access: "premium",
      cover: "/assets/images/photo-5.jpg",
      mediaSrc: driveDownload("1YjpMueUwSY7_EXAGNLjIW8uD-xLWe80-"),
      label: "PREMIUM",
      featured: true,
      player: "native"
    },
    {
      id: "audio-sarr-2",
      kind: "audio",
      title: "Guediawaye 2.m4a",
      description: "Deuxieme archive du dossier Sarr pour une audiotheque riche et fluide.",
      category: "Sarr",
      collection: "audio",
      duration: "M4A",
      access: "premium",
      cover: "/assets/images/photo-2.jpg",
      mediaSrc: driveDownload("15B38mliqnlpeYQR6wAGksR1SUloSwu71"),
      label: "PREMIUM",
      player: "native"
    },
    {
      id: "audio-sarr-3",
      kind: "audio",
      title: "Gueoul 2015.m4a",
      description: "Archive sonore premium du dossier Sarr pour la consultation continue.",
      category: "Sarr",
      collection: "audio",
      duration: "M4A",
      access: "premium",
      cover: "/assets/images/photo-4.jpg",
      mediaSrc: driveDownload("14IM98kCaRq5zhJhQpqcc2IiOB4uhkmlR"),
      label: "PREMIUM",
      player: "native"
    },
    {
      id: "audio-mouqadam-1",
      kind: "audio",
      title: "Chez Mouqadam 1.mp3",
      description: "Premiere archive premium du dossier Chez Mouqadam.",
      category: "Chez Mouqadam",
      collection: "audio",
      duration: "MP3",
      access: "premium",
      cover: "/assets/images/photo-1.jpg",
      mediaSrc: driveDownload("1_zgv0LhT0eT0GMWG5xWsXjBa41gcPCg2"),
      label: "PREMIUM",
      player: "native"
    },
    {
      id: "audio-mouqadam-2",
      kind: "audio",
      title: "Chez Mouqadam 2.mp3",
      description: "Deuxieme archive premium du dossier Chez Mouqadam.",
      category: "Chez Mouqadam",
      collection: "audio",
      duration: "MP3",
      access: "premium",
      cover: "/assets/images/photo-3.jpg",
      mediaSrc: driveDownload("1gA4OjIjjtl5LoBLl3YtnzdMeuzMADHlP"),
      label: "PREMIUM",
      player: "native"
    },
    {
      id: "audio-mouqadam-3",
      kind: "audio",
      title: "Chez Mouqadam 3.mp3",
      description: "Troisieme archive audio premium, avec la meme logique de lecture limitee puis paywall.",
      category: "Chez Mouqadam",
      collection: "audio",
      duration: "MP3",
      access: "premium",
      cover: "/assets/images/photo-5.jpg",
      mediaSrc: driveDownload("1fdE5sUGK6plqMma6hNQ9WoZNadSWqBhj"),
      label: "PREMIUM",
      player: "native"
    },
    {
      id: "audio-thies-1",
      kind: "audio",
      title: "Abdou Hamid Sarr Thies 2010 - Partie 1",
      description: "Archive audio premium issue du dossier Thies.",
      category: "Thies",
      collection: "audio",
      duration: "MP3",
      access: "premium",
      cover: "/assets/images/photo-4.jpg",
      mediaSrc: driveDownload("1-6OHe4GOnja4MWOf6q3BhMBjdFkSFHb5"),
      label: "PREMIUM",
      featured: true,
      player: "native"
    },
    {
      id: "audio-thies-2",
      kind: "audio",
      title: "Abdou Hamid Sarr Thies 2010 - Partie 2",
      description: "Suite de la collection premium issue du dossier Thies.",
      category: "Thies",
      collection: "audio",
      duration: "MP3",
      access: "premium",
      cover: "/assets/images/photo-2.jpg",
      mediaSrc: driveDownload("15VsPDpHnJNXzXkX2J4aS_ycLN49Hkch7"),
      label: "PREMIUM",
      player: "native"
    },
    {
      id: "audio-habib-1",
      kind: "audio",
      title: "Serigne Habib 1.mp3",
      description: "Archive audio premium pour la rubrique Serigne Habib Sy.",
      category: "Serigne Habib Sy",
      collection: "audio",
      duration: "MP3",
      access: "premium",
      cover: "/assets/images/photo-5.jpg",
      mediaSrc: driveDownload("1LWSU5PmbzzK1Cy6anM-0XrixoEp_3U00"),
      label: "PREMIUM",
      player: "native"
    },
    {
      id: "audio-habib-2",
      kind: "audio",
      title: "Serigne Habib 2.mp3",
      description: "Deuxieme entree audio premium du dossier Serigne Habib Sy.",
      category: "Serigne Habib Sy",
      collection: "audio",
      duration: "MP3",
      access: "premium",
      cover: "/assets/images/photo-1.jpg",
      mediaSrc: driveDownload("1mB_UoMgtpHqJArMH_cp5jUM2Refd0H8k"),
      label: "PREMIUM",
      player: "native"
    },
    {
      id: "audio-habib-3",
      kind: "audio",
      title: "Serigne Habib 3.mp3",
      description: "Troisieme archive premium de la meme collection spirituelle.",
      category: "Serigne Habib Sy",
      collection: "audio",
      duration: "MP3",
      access: "premium",
      cover: "/assets/images/photo-3.jpg",
      mediaSrc: driveDownload("1Ck3aYkuHwbVCysUXQsyghyNXvTWlcu-J"),
      label: "PREMIUM",
      player: "native"
    },
    {
      id: "audio-habib-4",
      kind: "audio",
      title: "Serigne Habib 4.mp3",
      description: "Quatrieme entree premium pour une rubrique audio mieux meublee.",
      category: "Serigne Habib Sy",
      collection: "audio",
      duration: "MP3",
      access: "premium",
      cover: "/assets/images/photo-4.jpg",
      mediaSrc: driveDownload("1ToP5jhYAS1O61gNMT5AS48gWJeoCtnO7"),
      label: "PREMIUM",
      player: "native"
    }
  ];

  const DEFAULT_ITEMS = [
    ...videoItems,
    ...audioItems,
    ...libraryItems,
    ...articleItems,
    ...driveFolderItems,
    ...photoItems
  ];

  const ADMIN_CATEGORIES = Array.from(new Set(DEFAULT_ITEMS.map((item) => item.category))).sort((left, right) =>
    left.localeCompare(right, "fr")
  );

  return {
    STORAGE_KEYS,
    DEFAULT_SETTINGS,
    DEFAULT_ADMIN_PASSWORD,
    NAV_ITEMS,
    HERO_SLIDES,
    CATEGORY_TILES,
    ADMIN_CATEGORIES,
    DEFAULT_ITEMS,
    DRIVE_ROOT
  };
})();
