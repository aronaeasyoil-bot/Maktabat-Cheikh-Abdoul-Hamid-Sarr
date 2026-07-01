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

  const covers = [
    "/assets/images/photo-1.jpg",
    "/assets/images/photo-2.jpg",
    "/assets/images/photo-3.jpg",
    "/assets/images/photo-4.jpg",
    "/assets/images/photo-5.jpg"
  ];

  const coverAt = (index) => covers[index % covers.length];
  const siteMedia = (id) => `/media/${encodeURIComponent(id)}`;

  function slugify(value) {
    return value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function friendlyExt(name) {
    const extension = String(name || "").split(".").pop().replace(/[^a-z0-9]/gi, "");
    return extension ? extension.toUpperCase() : "MEDIA";
  }

  function cleanTitle(name) {
    return String(name || "")
      .replace(/\.[^/.]+$/, "")
      .replace(/[_-]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function categoryDescription(category) {
    switch (category) {
      case "Cheikh M. Hamid":
        return "Enseignements et prises de parole issus du fonds principal de Cheikh M. Hamid.";
      case "Sarr":
        return "Archives sonores classees dans la collection Sarr.";
      case "Chez Mouqadam":
        return "Serie audio issue des dossiers Chez Mouqadam et Mouqadam.";
      case "Thies":
        return "Interventions et archives historiques classees sous Thies.";
      case "Serigne Habib Sy":
        return "Rubrique sonore dediee a Serigne Habib Sy.";
      case "Fakiha":
        return "Grand cycle Fakiha en plusieurs parties, ecoute premium integree dans le site.";
      case "Kifaya":
        return "Serie Kifaya organisee comme une collection autonome.";
      case "Katmiya":
        return "Collection Katmiya et Wazifa, regroupee dans un meme ensemble premium.";
      case "Khoutba":
        return "Khoutbas classees en episodes pour une navigation plus simple.";
      case "Goree":
        return "Pistes audio historiques de la serie Goree.";
      case "Mbour":
        return "Sessions audio conservees dans la collection Mbour.";
      case "Ziar":
        return "Archives de ziar et evenements spirituels.";
      case "Gaya":
        return "Archive sonore historique issue du fonds Gaya.";
      default:
        return `Archive sonore premium issue de la collection ${category}.`;
    }
  }

  function buildAudioItems(category, files, options = {}) {
    return files.map((file, index) => {
      const sourceName = file.sourceName || file.displayTitle || "";
      const title = file.displayTitle || cleanTitle(sourceName);

      return {
        id: file.id || `audio-${slugify(category)}-${index + 1}`,
        kind: "audio",
        title,
        description: file.description || categoryDescription(category),
        category,
        collection: "audio",
        duration: file.duration || friendlyExt(sourceName),
        access: "premium",
        cover: file.cover || coverAt((options.coverOffset || 0) + index),
        mediaSrc: siteMedia(file.fileId),
        label: file.label || "PREMIUM",
        featured: Boolean(file.featured)
      };
    });
  }

  function buildVideoItem(item) {
    return {
      id: item.id,
      kind: "video",
      title: item.title,
      description: item.description,
      category: item.category,
      collection: item.collection || "conference",
      duration: item.duration || "Video",
      access: item.access || "premium",
      isDaily: Boolean(item.isDaily),
      cover: item.cover,
      mediaSrc: siteMedia(item.fileId),
      label: item.label || (item.access === "free" ? "LIBRE" : "PREMIUM"),
      featured: Boolean(item.featured)
    };
  }

  const driveFolderIndex = [
    { id: "1AZor_I31GIgDnF6t4okZZ92GJ6wh4gJG", title: "Cheikh M. Hamid" },
    { id: "10UdqHGHQCdt40ZE5gVuPR0_3XyYcwCKl", title: "Sarr" },
    { id: "16boJKbXTaADzj_PTeYbrC6xqzCVEBKsm", title: "Chez Mouqadam" },
    { id: "1huiMl7j5TnHNrybzF6qYORtJv7Nr3wGt", title: "Fakiha" },
    { id: "1dtmvpz8ImPHf7xY6icDlnc1ucLZYraeD", title: "Kifaya MP3" },
    { id: "1XP5Zuulne8LNkrx2p5i_pJcwhBx2dE1R", title: "Katmiya 2013 audio" },
    { id: "15xFR5b4U1ty_0_lWI7leWUFrJz7cA0uv", title: "Khoutba" },
    { id: "1COQHgdAwRVq_SekTXb2Fze4P6T-r2rnw", title: "Goree" },
    { id: "1SYrO7C6aZGmuJs42v0EOUSviwdyTLMLj", title: "Serigne Habib Sy" },
    { id: "1wcUL8Oqp-0_ycFgZezj746Li_Nym9EDc", title: "Thies" },
    { id: "1P-j6jYBvh53rqIaqtV0ORPfjZEzvMuVw", title: "THIES" },
    { id: "16SGcqimMbiCf4cS8PWwPr35vm7eM_fdy", title: "Kaolack" },
    { id: "1AB6uYDGyoFEFrjBg37MgPO23L_WFq9Jz", title: "Mbour" },
    { id: "1k2fH-w7LSrQgxwH0_P_mXYzJxBX5WILx", title: "Video phone" },
    { id: "1xr_bXx0rj8B0nMu7ApDsH-2tecb-PxuW", title: "Alfatiha" },
    { id: "1DKAxwv1XWnO-bu935Aq_Qb-IjPVg1JE4", title: "Al Waliou Mourchidanne" },
    { id: "1jyUP-BSFIj85QqX1mU775-XjcGWnCEcL", title: "Tivaouane 31-12-08" },
    { id: "1F7YZ2T317mUpsJUX0G2D3TFrvhqxZD-u", title: "Abada Bourouq" },
    { id: "1u5PsVKeYxSEAw95VrBYZiEPHCFIf9yeJ", title: "Al Haqiqatoul Mouhammadiyya" },
    { id: "10-OcaCbYJbX3iHwKnG1HXMfaZ8xPyIZK", title: "Badar" },
    { id: "1stX0EbgK82GUQ2i_sz5e0Hp2JAyu-Zw9", title: "Defendre les saints" },
    { id: "1HeCdjZ3IuuWQg9Wf4NoQ5CJQ0f72GuNq", title: "Gamou Lib 4" },
    { id: "17-vK98V8WNBi3BonTU_wVTxjlZPgyPMm", title: "Divers" },
    { id: "1-IIr5gmyxyldLxX20z0xM69TtHpJyRJy", title: "Devoirs conjoints S Maodo" },
    { id: "1tEcTBXZy_0ZOi-26iLrW3LoICGT7GO2d", title: "Gamou 2013" },
    { id: "18t6ODlDsZmHHPcVLpZz7Bvm144_qzy-7", title: "Gam dudu ba" },
    { id: "1Vzw0bU9UyITWBB4ZWpib2U61NWaVCaJ3", title: "Gueoul2012" },
    { id: "1hq5p9IE-KdKSuOcGOjahPDxo4jx3Zn_S", title: "Hadji Omar" },
    { id: "1uaqIyhhNUHvQ_kRkk66ofHoXjyk7gN7H", title: "Hizbou Assayfiyyou" },
    { id: "11FpLvbqr3cGiNToWZofyremulQ3MTXt-", title: "Gaya 2009" },
    { id: "1HFXR80_KHd26OpdrHmCLsd7vG8n8EG4I", title: "Gaya 2005" },
    { id: "15ZJ4tQreV1r3uAEEczstti7OBkQJGUE0", title: "Gaya 2008" },
    { id: "1xs6TnqHftXgCB91TQeSTtbd5QDxkdhN4", title: "Hikam Nafs" },
    { id: "1LEsMq7QXMZpxnlQHmWR4ph9PtTh9WOOE", title: "Gaya Tarbiyya" },
    { id: "1LX4owQoHZZZG3iw-Uxa-tVcY-LraRgJK", title: "Gaya" },
    { id: "1r0cDkKe8Vx2OHA21tDnY24JrAxOzwxTg", title: "Katmiyya 2012" },
    { id: "1kuFqJeK5TBrqQb059gLXgcbLL6cXlfkb", title: "Jawharatoul Kamal et Salatoul Fatiha" },
    { id: "1hFx3nzuuVkbNHBWX7mV7TTkg2086-qWw", title: "Ibn hanchir Abdoul Hamid" },
    { id: "1TR0DBEP9g76oNNIydjSAKyk4CSTaHh2-", title: "Les Z" },
    { id: "1CQd72Mtc7_9CSmOWXHHdEcMQeblrI3NV", title: "Maouloud" },
    { id: "1tR5aOb7ZZNRIpEkoPe1DvQzqMM3KAA4z", title: "PA 2012 Cerno" },
    { id: "17k2y2Gy0mw_teX_ld25ZIzDbOlfOCk9B", title: "Ndar 2008" },
    { id: "153K0LUH0lUjDkWal_34bXOvr36_ww6dm", title: "Ramadan 2003" },
    { id: "1AIDGio03gXWQJYKnfd6eDID7QTYp1gSf", title: "Risalatu latifa 31-12-02" },
    { id: "1sTrTzkwIBJoaXee4Ms7X-LwUzS0SjU84", title: "PA" },
    { id: "1wIwij-DtBb7VLiJTaZg7bzOegnScTgXd", title: "QRconver" },
    { id: "1cqobawB7kcKhPNXiwi8tiR0c_DcvW44d", title: "Ramadan 2010" },
    { id: "1zRP3rxr7BoXiEuy15Loq-Gh8MqBhAKk0", title: "Salat" },
    { id: "1nZiqe4x3XgopBv7_Y3naQnd-8Levyeh7", title: "Serigne Amadou Cisse Xutba Korite" },
    { id: "18lEMX5bhZ-jArGccKB8xnTalDk85JGKI", title: "Tawhid" },
    { id: "10tv02WSHmQZTumnEgtsqGsbNQr1zoyDN", title: "Sourata Nissa" },
    { id: "1zKxZpSgHMH3m784sUwSwgW4fE4LZ7UmF", title: "Seydou Welle" },
    { id: "1vBswHfXOfCfpIrbzX8hkG6q0llewnxn1", title: "Sourate Youssouf" },
    { id: "1nuvPReZj98sKXiuOYGeMGPtOM6-87vKv", title: "Souratoun Nour" },
    { id: "1MyCIBED-5lCML-doU6hXEDnwIxFEW2pf", title: "Siradjou Salik" },
    { id: "1yGcaE6zpIZ_WRSPM7thfKmbANq_v3dAb", title: "Tiv2010" },
    { id: "1wMSwl7vrzZAnhIr7_f0g3TDDW_yu4CRW", title: "Ziarr" },
    { id: "1E0qzZlmPt6EXjj22kyGuenvThhczhR6r", title: "Tivaoune 2012" },
    { id: "1zlWJNla682fNWRIJpzjkLPn6w6mtKnjH", title: "Ziar Liberte 5 2012" },
    { id: "1Rsprp3E7NL9RXqeIIIY83VGXutBePB1N", title: "Ziar Aout 11" },
    { id: "1WEgziNGQzmc4K9BpA_po_4-z7GZ8uHCQ", title: "Wer wi" },
    { id: "1vwlm1E4-8Egn6ztzpPOIYXjVyVhzkxOW", title: "Wa Mpal" },
    { id: "1_a_1y1AJtVlDSsQbc4sBFS0Zngi2vi_d", title: "Waxtaan" },
    { id: "1x-akEomUAr8lyV9-6vdeidQDSnXA8-FS", title: "Ziar Dara J koor" },
    { id: "1QKfbiCfL2aDsmUlb_r8hLI_ZoRosvk1E", title: "Ziar Cheix Mawloud" }
  ];

  function folderDescription(title) {
    const lower = title.toLowerCase();

    if (lower.includes("fakiha")) {
      return "Collection source de la serie Fakiha, deja transformee en audiotheque premium dans le site.";
    }

    if (lower.includes("kifaya") || lower.includes("katmiya") || lower.includes("khoutba")) {
      return `Serie ${title} preservee comme collection source pour les lecteurs internes du site.`;
    }

    if (lower.includes("hamid") || lower.includes("sarr") || lower.includes("habib")) {
      return `Dossier source dedie a ${title}, repris dans une navigation claire et premium.`;
    }

    if (lower.includes("thies") || lower.includes("kaolack") || lower.includes("goree") || lower.includes("mbour")) {
      return `Collection historique ${title}, conservee comme dossier source et rubrique de consultation.`;
    }

    if (lower.includes("video")) {
      return "Dossier source video conserve pour alimenter la videotheque du site.";
    }

    if (lower.includes("gamou")) {
      return `Archive source ${title}, conservee pour les evolutions futures de la mediatheque.`;
    }

    return `Dossier source ${title}, organise comme collection navigable de la Maktabat.`;
  }

  const driveFolderItems = driveFolderIndex.map((folder, index) => ({
    id: `drive-folder-${folder.id}`,
    kind: "folder",
    title: folder.title,
    description: folderDescription(folder.title),
    category: "Dossiers sources",
    collection: "folder",
    duration: "Dossier",
    access: "free",
    cover: coverAt(index),
    label: "DOSSIER"
  }));

  const videoItems = [
    buildVideoItem({
      id: "video-day",
      title: "Enseignement du jour",
      description: "La video libre mise en avant sur l'accueil pour decouvrir l'esprit de la plateforme.",
      category: "Enseignement du jour",
      collection: "conference",
      duration: "Video MP4",
      access: "free",
      isDaily: true,
      cover: coverAt(0),
      fileId: "1Q9jMf20ydRW22BjoYAdnDuF2DvCCPypC",
      label: "LIBRE",
      featured: true
    }),
    buildVideoItem({
      id: "video-marabout",
      title: "Marabout",
      description: "Archive video premium compatible web, lue directement dans l'interface du site.",
      category: "Videotheque premium",
      collection: "conference",
      duration: "Video MP4",
      access: "premium",
      cover: coverAt(4),
      fileId: "1Iocr3chOftM-QFOfmwVTxLBVfQdSL2th",
      label: "PREMIUM",
      featured: true
    })
  ];

  const audioItems = [
    ...buildAudioItems(
      "Cheikh M. Hamid",
      [
        { fileId: "1JPwZXGUlT-0Er8fpHCKxUYUD4-VWkYU5", sourceName: "hamid.mp3", displayTitle: "Hamid", featured: true },
        { fileId: "1uzWJ2s93QTvaZ797tTAlDLJKp_epUxHP", sourceName: "cheikh hamid.mp3", displayTitle: "Cheikh Hamid" },
        { fileId: "1Ca9Xt12cyVD6l6WpEB8eDCw5uyzZAqsL", sourceName: "babacar kasse.mp3", displayTitle: "Babacar Kasse" },
        { fileId: "1LE7c5LPKxtvce_UwZlB97W68AGwEsojh", sourceName: "s abdoulaye mbaye.mp3", displayTitle: "S Abdoulaye Mbaye" }
      ],
      { coverOffset: 0 }
    ),
    ...buildAudioItems(
      "Sarr",
      [
        { fileId: "1YjpMueUwSY7_EXAGNLjIW8uD-xLWe80-", sourceName: "Guediawaye1.m4a", displayTitle: "Guediawaye - Partie 1", featured: true },
        { fileId: "15B38mliqnlpeYQR6wAGksR1SUloSwu71", sourceName: "Guediawaye2.m4a", displayTitle: "Guediawaye - Partie 2" },
        { fileId: "14IM98kCaRq5zhJhQpqcc2IiOB4uhkmlR", sourceName: "Gueoul 2015.m4a", displayTitle: "Gueoul 2015" }
      ],
      { coverOffset: 4 }
    ),
    ...buildAudioItems(
      "Chez Mouqadam",
      [
        { fileId: "1_zgv0LhT0eT0GMWG5xWsXjBa41gcPCg2", sourceName: "Chez_muqadam1.mp3", displayTitle: "Chez Mouqadam - Partie 1" },
        { fileId: "1gA4OjIjjtl5LoBLl3YtnzdMeuzMADHlP", sourceName: "Chez_muqadam2.mp3", displayTitle: "Chez Mouqadam - Partie 2" },
        { fileId: "1fdE5sUGK6plqMma6hNQ9WoZNadSWqBhj", sourceName: "chez_muqadam3.mp3", displayTitle: "Chez Mouqadam - Partie 3" },
        { fileId: "1sVBV1x5JdW1pqaQQNI848trEo-KbPsO0", sourceName: "Nguente muqadam.mp3", displayTitle: "Nguente Mouqadam" }
      ],
      { coverOffset: 2 }
    ),
    ...buildAudioItems(
      "Thies",
      [
        { fileId: "1-6OHe4GOnja4MWOf6q3BhMBjdFkSFHb5", sourceName: "Abdou Hamid Sarr Thies 2010 1.MP3", displayTitle: "Abdou Hamid Sarr Thies 2010 - Partie 1", featured: true },
        { fileId: "15VsPDpHnJNXzXkX2J4aS_ycLN49Hkch7", sourceName: "Abdou Hamid Sarr Thies 2010 2.MP3", displayTitle: "Abdou Hamid Sarr Thies 2010 - Partie 2" },
        { fileId: "1NXqhfUpJPbGRAUKkEXze8LXnHbome3jV", sourceName: "theis 2o13 1.mp3", displayTitle: "Thies 2013 - Partie 1" },
        { fileId: "1Vcs5JeDoVBB6QTNGjXLy5ODHCKqvPRsi", sourceName: "theis 2013 2.mp3", displayTitle: "Thies 2013 - Partie 2" }
      ],
      { coverOffset: 3 }
    ),
    ...buildAudioItems(
      "Serigne Habib Sy",
      [
        { fileId: "1LWSU5PmbzzK1Cy6anM-0XrixoEp_3U00", sourceName: "Serigne Habib1.mp3", displayTitle: "Serigne Habib - Partie 1", featured: true },
        { fileId: "1mB_UoMgtpHqJArMH_cp5jUM2Refd0H8k", sourceName: "Serigne Habib2.mp3", displayTitle: "Serigne Habib - Partie 2" },
        { fileId: "1Ck3aYkuHwbVCysUXQsyghyNXvTWlcu-J", sourceName: "Serigne Habib3.mp3", displayTitle: "Serigne Habib - Partie 3" },
        { fileId: "1ToP5jhYAS1O61gNMT5AS48gWJeoCtnO7", sourceName: "Serigne Habib4.mp3", displayTitle: "Serigne Habib - Partie 4" }
      ],
      { coverOffset: 1 }
    ),
    ...buildAudioItems(
      "Fakiha",
      [
        { fileId: "1Rcx_vbhPItzaNgu_mIYkcd-MCBp_kbyb", sourceName: "FAKIHA 01.mp3", displayTitle: "Fakiha - Introduction", featured: true },
        { fileId: "1v2WVYdxm1lK2tS__BsW1HAC_NvADrYP0", sourceName: "Fakiha1.mp3", displayTitle: "Fakiha - Partie 01" },
        { fileId: "1gkLemPNIrYzFy1eXGNF0xh4W4iqrAc_v", sourceName: "Fakiha2.mp3", displayTitle: "Fakiha - Partie 02" },
        { fileId: "1rqiT_FR5thPJDNEEAwPlgn95X0RmClBg", sourceName: "Fakiha3.mp3", displayTitle: "Fakiha - Partie 03" },
        { fileId: "1TvZ3Ia0teo5geLbm4tJo7FCAVxK4hDD3", sourceName: "Fakiha4.mp3", displayTitle: "Fakiha - Partie 04" },
        { fileId: "1hqF8W_qI5rqa8K-yb5-esiOFrSciXPDN", sourceName: "Fakiha5.mp3", displayTitle: "Fakiha - Partie 05" },
        { fileId: "12JhSGxM4wRdULOkEVeSf0SSeFY9IX2U7", sourceName: "Fakiha6.mp3", displayTitle: "Fakiha - Partie 06" },
        { fileId: "1eLFKB16EUXUMuuhYidmrItMRQ75GvImD", sourceName: "Fakiha7.mp3", displayTitle: "Fakiha - Partie 07" },
        { fileId: "1HbQGlYjfsSXChE7pSyPUqMUUl1Ub9hM0", sourceName: "Fakiha8.mp3", displayTitle: "Fakiha - Partie 08" },
        { fileId: "1U9MtZyybCL_2yD244rNPuYvd1HR7Iq31", sourceName: "Fakiha9.mp3", displayTitle: "Fakiha - Partie 09" },
        { fileId: "1pEdqcLmj5dZjMRbUWKI8v0pd71QWFm7K", sourceName: "Fakiha10.mp3", displayTitle: "Fakiha - Partie 10" },
        { fileId: "1KCEssD0WpFbabvm9nSqTrU_6WBfyTajo", sourceName: "Fakiha11.mp3", displayTitle: "Fakiha - Partie 11" },
        { fileId: "1JRIT0IGiRqZfvSXhX-JdglBHreisKXzv", sourceName: "Fakiha12.mp3", displayTitle: "Fakiha - Partie 12" },
        { fileId: "1OrXn9fx74Cw-WyqqQCR-0_gWJgDa4VLY", sourceName: "Fakiha13.mp3", displayTitle: "Fakiha - Partie 13" },
        { fileId: "1HDtVap1Tnn5wplBX9PeD1u-wUKRemP0E", sourceName: "Fakiha14.mp3", displayTitle: "Fakiha - Partie 14" },
        { fileId: "1y6ew4XWPnV2qabcD_pPLkC8ZrG43h_5Y", sourceName: "Fakiha15.mp3", displayTitle: "Fakiha - Partie 15" },
        { fileId: "1UsM6pbo0ezXYj5GYwFcFpKgTvUnlaEe0", sourceName: "Fakiha16.mp3", displayTitle: "Fakiha - Partie 16" },
        { fileId: "1zla0Si2oh4ik_yGxv9LQEbO90_z--hPs", sourceName: "Fakiha17.mp3", displayTitle: "Fakiha - Partie 17" },
        { fileId: "1M-AKodE6rk4Nmun9Ooc6bdGMt-bizKfg", sourceName: "Fakiha18.mp3", displayTitle: "Fakiha - Partie 18" },
        { fileId: "1So62g6ug7Vl3tCcptC31_j9Kjoct3RI2", sourceName: "Fakiha19.mp3", displayTitle: "Fakiha - Partie 19" },
        { fileId: "18camNfotDjtmbkGwkBdvAEmfgzBZTpaG", sourceName: "Fakiha20.mp3", displayTitle: "Fakiha - Partie 20" },
        { fileId: "17tr0aijrR4lNBglYtT6GyJHC_5G5R-FD", sourceName: "Fakiha21.mp3", displayTitle: "Fakiha - Partie 21" },
        { fileId: "1vORw__85Wd6i5N_tk4uZFUPe4NhtvLGY", sourceName: "Fakiha22.mp3", displayTitle: "Fakiha - Partie 22" },
        { fileId: "1F63Wj_iVZ91qx1WmSPkoA-JAUcsDU6Oj", sourceName: "Fakiha23.mp3", displayTitle: "Fakiha - Partie 23" },
        { fileId: "1MNXrqfqsD1cmvjlX2WayFU9TGNTngfAS", sourceName: "Fakiha24.mp3", displayTitle: "Fakiha - Partie 24" },
        { fileId: "1eBzBhrGmBjHNbn3ihb5IZBNwgnJPG8rX", sourceName: "Fakiha25.mp3", displayTitle: "Fakiha - Partie 25" },
        { fileId: "1HpHkg1ctf1g4vYrJ-ChutGe9p-AttvhJ", sourceName: "Fakiha26.mp3", displayTitle: "Fakiha - Partie 26" },
        { fileId: "1HG9eIXTDLYiJvY7sBqpfzdqobXiUDaMl", sourceName: "Fakiha27.mp3", displayTitle: "Fakiha - Partie 27" },
        { fileId: "1lB1sJWiFeWZMF9xC4qpeIYHGNsw3G9fX", sourceName: "Fakiha28.mp3", displayTitle: "Fakiha - Partie 28" },
        { fileId: "15nkczhwtHP1SwNrGoR9aJ6rQqrb4ANc0", sourceName: "Fakiha29.mp3", displayTitle: "Fakiha - Partie 29" },
        { fileId: "1m7CIROfz-4hGoYpVyOBV66v7-cKzhvcO", sourceName: "Fakiha30.mp3", displayTitle: "Fakiha - Partie 30" },
        { fileId: "1DnDLNAgyUpAAVzVTILkBB4WtIROJWneb", sourceName: "Fakiha31.mp3", displayTitle: "Fakiha - Partie 31" },
        { fileId: "1bZQwvhI46dtWEQIjInkQLxFUzaL7aWhL", sourceName: "Fakiha32.mp3", displayTitle: "Fakiha - Partie 32" },
        { fileId: "1qx3GTvAOpt6tEG8RLC5fVFHu2KYFnw2M", sourceName: "Fakiha33.mp3", displayTitle: "Fakiha - Partie 33" },
        { fileId: "1QuI0OMaVfvOnjBE-3ua-EeGmgfJrMst-", sourceName: "Fakiha34.mp3", displayTitle: "Fakiha - Partie 34" },
        { fileId: "1Ng2NGznG4XeEPJmN2t1ICk0urVbyLYG3", sourceName: "Fakiha35.mp3", displayTitle: "Fakiha - Partie 35" },
        { fileId: "1oz4tMWOTaVF4tdiW9Y-1PkqHRYOjcNYy", sourceName: "Fakiha36.mp3", displayTitle: "Fakiha - Partie 36" },
        { fileId: "1_af6ujyS9qidu4LO-FOADApmutPqAzDg", sourceName: "Fakiha37.mp3", displayTitle: "Fakiha - Partie 37" },
        { fileId: "16J0q0M7xIt_7DbdIAXZbY6U5SYMMyqdY", sourceName: "Fakiha38.mp3", displayTitle: "Fakiha - Partie 38" },
        { fileId: "1pPxcZA8NS7C7LbzrSyd7xaHYhZkCnnVE", sourceName: "Fakiha39.mp3", displayTitle: "Fakiha - Partie 39" },
        { fileId: "1Cw6sehnwm5XsJtiNDXFGDw1FL0i_uB5r", sourceName: "Fakiha40.mp3", displayTitle: "Fakiha - Partie 40" },
        { fileId: "1a3OC-JM9UtjX1MH2sKhUl6JhY1uOzY3E", sourceName: "Fakiha41.mp3", displayTitle: "Fakiha - Partie 41" },
        { fileId: "11XFoC86VovwLA0wZMH7d-iTJu_K9qdqm", sourceName: "Fakiha42.mp3", displayTitle: "Fakiha - Partie 42" },
        { fileId: "17R3mbHTe0_zIMsClaYa5HEuuyoktjbY0", sourceName: "Fakiha43.mp3", displayTitle: "Fakiha - Partie 43" },
        { fileId: "1hoSCRbrsngrowygfZixwPlQC99MPKvim", sourceName: "Fakiha44(p42-43).mp3", displayTitle: "Fakiha - Partie 44" },
        { fileId: "1N7d7MUTjjz9ArsTp0HpjvZ359ffgX4V9", sourceName: "Fakiha45.mp3", displayTitle: "Fakiha - Partie 45" },
        { fileId: "1c-QtGXEkETa_Z690UW29h3Hs_QCoYf6z", sourceName: "Fakiha46.mp3", displayTitle: "Fakiha - Partie 46" }
      ],
      { coverOffset: 0 }
    ),
    ...buildAudioItems(
      "Kifaya",
      [
        { fileId: "1M8WPuUh20dnaLGMol3R2bBUDlO-jzAGr", sourceName: "kifaya - 01.mp3", displayTitle: "Kifaya - Partie 01", featured: true },
        { fileId: "15kdo35ONvmSrorVT0rhpOiRAtkr5P8Xm", sourceName: "kifaya - 02.mp3", displayTitle: "Kifaya - Partie 02" },
        { fileId: "1gNVOVzRt6yMHUu7dySfqsSui12WYHpuX", sourceName: "kifaya - 03.mp3", displayTitle: "Kifaya - Partie 03" },
        { fileId: "1fL464K8adBEI5RenBV9UoVErrxifqaIx", sourceName: "kifaya - 04.mp3", displayTitle: "Kifaya - Partie 04" },
        { fileId: "1XCqDkcgNQX6L3e70nJUGNd7FSYDwuMbB", sourceName: "kifaya - 05.mp3", displayTitle: "Kifaya - Partie 05" },
        { fileId: "1tjOnOUxJRco-2LbZP9Qel5VKHmkAaz5t", sourceName: "kifaya - 06.mp3", displayTitle: "Kifaya - Partie 06" }
      ],
      { coverOffset: 1 }
    ),
    ...buildAudioItems(
      "Katmiya",
      [
        { fileId: "1YuV3CgKjrRVaSSWIt3LFFkK3iiorE882", sourceName: "Katmiya 2013 audio (1).mp3", displayTitle: "Katmiya 2013 - Partie 1", featured: true },
        { fileId: "1I7or7G0tdfYvWbB01ZkAb5bxqLShsbEC", sourceName: "Katmiya 2013 audio (2).mp3", displayTitle: "Katmiya 2013 - Partie 2" },
        { fileId: "1za_x0g5Zl6aA5KY3DTuXhisNnuWoNPPK", sourceName: "Katmiya 2013 audio (3).mp3", displayTitle: "Katmiya 2013 - Partie 3" },
        { fileId: "1EKVfF7BWW8dFmUm4dU1F714-zBH0ise3", sourceName: "Katmiya 2013 audio (4).mp3", displayTitle: "Katmiya 2013 - Partie 4" },
        { fileId: "1-Et-SxtDSD2WFiwsqPjVbmIGzCysmxTr", sourceName: "Katmiya 2013 audio (5).mp3", displayTitle: "Katmiya 2013 - Partie 5" },
        { fileId: "1pdkv1ENUZNN9LxOaEzmpwXWCF38Zl3oz", sourceName: "Katmiya 2013 wazifa.mp3", displayTitle: "Katmiya 2013 - Wazifa" },
        { fileId: "19M4UdTul5u_RbE-3WD6qvM2nDPsykhCA", sourceName: "katmiya14.m4a", displayTitle: "Katmiya 2014" }
      ],
      { coverOffset: 2 }
    ),
    ...buildAudioItems(
      "Khoutba",
      [
        { fileId: "1W9-LN5x1tlDQ61XEFcNxnJhyJVQOE6_Q", sourceName: "khoutba1.mp3", displayTitle: "Khoutba - Partie 1", featured: true },
        { fileId: "12u9xpoQpcmVn6CIeXoPPXUFNg3g2NYPM", sourceName: "khoutba2.mp3", displayTitle: "Khoutba - Partie 2" },
        { fileId: "1uyVwefCiiA3qucXrUfj5-y1iFNeL6kbV", sourceName: "khoutba3.mp3", displayTitle: "Khoutba - Partie 3" },
        { fileId: "16Pr6N06VkraHMEzfe7bhTVz-a57LREdR", sourceName: "khoutba4.mp3", displayTitle: "Khoutba - Partie 4" },
        { fileId: "1zhhXKdkZXRG0XaOJ3CUDjoU4dw8L9VxH", sourceName: "khoutba5.mp3", displayTitle: "Khoutba - Partie 5" },
        { fileId: "1FVwfGeUigDnoAZHqNF0XXNnEc1e_fMQ2", sourceName: "khoutba6.mp3", displayTitle: "Khoutba - Partie 6" }
      ],
      { coverOffset: 3 }
    ),
    ...buildAudioItems(
      "Goree",
      [
        { fileId: "1_9Ht8uEHNQ6dA97_qw00Tej7XA4QIXl_", sourceName: "GORRE - 01 - Piste 1.mp3", displayTitle: "Goree - Piste 01", featured: true },
        { fileId: "1qdJKk110JP9be9HMms0MaBFPKgugXN2y", sourceName: "GORRE - 02 - Piste 2.mp3", displayTitle: "Goree - Piste 02" },
        { fileId: "1PsM9ucGky6RoI5Kr_ykgD6PP4qbhsaYR", sourceName: "GORRE - 03 - Piste 3.mp3", displayTitle: "Goree - Piste 03" },
        { fileId: "1x5OC--5CbLOVOo8_VWYHMC1mCnNKxImX", sourceName: "GORRE - 04 - Piste 4.mp3", displayTitle: "Goree - Piste 04" },
        { fileId: "1tU9aL3UbRawc0zSZgSnjvVagyMgn9UsI", sourceName: "GORRE - 05 - Piste 5.mp3", displayTitle: "Goree - Piste 05" },
        { fileId: "1jt_A_6Av8Ol17wJ2YPcBHUH3a5EDavGz", sourceName: "GORRE - 06 - Piste 6.mp3", displayTitle: "Goree - Piste 06" }
      ],
      { coverOffset: 4 }
    ),
    ...buildAudioItems(
      "Mbour",
      [
        { fileId: "1DI8q_o2RaQCwUzBTILIZ_2fuAzdSZwYi", sourceName: "A12_05_12-16.19.mp3", displayTitle: "Mbour - Session 1" },
        { fileId: "16VnSCFVUGDfrVg-6hBMjwQNm1SJDRO1M", sourceName: "A12_05_12-17.47.mp3", displayTitle: "Mbour - Session 2" }
      ],
      { coverOffset: 0 }
    ),
    ...buildAudioItems(
      "Ziar",
      [
        { fileId: "1wo3wKsU_MahwrTvP_IwoM1vFxEoQVIWR", sourceName: "Ziarra tamkharit 2013.mp3", displayTitle: "Ziarra Tamkharit 2013" }
      ],
      { coverOffset: 1 }
    ),
    ...buildAudioItems(
      "Gaya",
      [
        { fileId: "1etbHKKYKx-5S7l-GvYxCGwjIgN5YeHEd", sourceName: "Gaya 2011.mp3", displayTitle: "Gaya 2011" }
      ],
      { coverOffset: 2 }
    )
  ];

  const audioCollectionCount = new Set(audioItems.map((item) => item.category)).size;

  const libraryItems = [
    {
      id: "library-player",
      kind: "document",
      title: "Lecteurs integres",
      description: "Les audios et videos compatibles web se lancent dans le site, avec arret automatique apres 1 minute pour les contenus premium.",
      category: "Fonctionnement",
      collection: "document",
      duration: "Lecture sur place",
      access: "free",
      cover: coverAt(0),
      label: "INTEGRE"
    },
    {
      id: "library-audio-catalog",
      kind: "document",
      title: "Audiotheque synchronisee",
      description: `${audioItems.length} audios premium sont deja classes par collection pour une navigation simple sur mobile et ordinateur.`,
      category: "Fonctionnement",
      collection: "document",
      duration: `${audioCollectionCount} collections`,
      access: "free",
      cover: coverAt(1),
      label: "CATALOGUE"
    },
    {
      id: "library-source-folders",
      kind: "document",
      title: "Dossiers sources du projet",
      description: `${driveFolderIndex.length} dossiers sources sont conserves comme base d'organisation pour la Maktabat.`,
      category: "Fonctionnement",
      collection: "document",
      duration: `${driveFolderIndex.length} dossiers`,
      access: "free",
      cover: coverAt(2),
      label: "DOSSIERS"
    },
    {
      id: "library-admin",
      kind: "document",
      title: "Admin prive",
      description: "Le panneau admin reste protege et permet de gerer contenus, categories, comptes, paiements et couvertures.",
      category: "Fonctionnement",
      collection: "document",
      duration: "Acces protege",
      access: "free",
      cover: coverAt(3),
      label: "ADMIN"
    }
  ];

  const articleItems = [
    {
      id: "article-bienvenue",
      kind: "article",
      title: "Bienvenue dans la Maktabat",
      description: "Une mediatheque spirituelle premium pensee pour ecouter, regarder et retrouver les enseignements sans complexite.",
      category: "Reperes",
      collection: "article",
      duration: "Article",
      access: "free",
      cover: coverAt(4),
      label: "ARTICLE"
    },
    {
      id: "article-premium",
      kind: "article",
      title: "Acces premium par contenu",
      description: "Chaque audio ou video premium offre 1 minute d'aperu avant demande de compte et activation payante.",
      category: "Reperes",
      collection: "article",
      duration: "Article",
      access: "free",
      cover: coverAt(0),
      label: "ARTICLE"
    },
    {
      id: "article-organisation",
      kind: "article",
      title: "Organisation par dossiers historiques",
      description: "Les collections suivent les grands dossiers sources afin de garder une structure fidele, claire et evolutive.",
      category: "Reperes",
      collection: "article",
      duration: "Article",
      access: "free",
      cover: coverAt(3),
      label: "ARTICLE"
    }
  ];

  const photoItems = [
    {
      id: "photo-gold",
      kind: "image",
      title: "Portrait principal",
      description: "Visuel prioritaire de l'accueil et des grandes cartes premium.",
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
      description: "Couverture editoriale pour les collections audio et la bibliotheque.",
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
      description: "Visuel de transmission et de lecture pour les series longues.",
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
      description: "Image premium pour les archives majeures et les dossiers historiques.",
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
      description: "Image de couverture pour les espaces compte, favoris et lecture continue.",
      category: "Galerie",
      collection: "photo",
      duration: "Photo",
      access: "free",
      cover: "/assets/images/photo-5.jpg",
      mediaSrc: "/assets/images/photo-5.jpg",
      label: "PHOTO"
    }
  ];

  const HERO_SLIDES = [
    {
      id: "hero-1",
      image: coverAt(0),
      label: "ENSEIGNEMENT DU JOUR",
      title: "Maktabat Cheikh Abdoul Hamid Sarr",
      text: "Une mediatheque premium, fluide et responsive, avec lecture integree dans le site pour les contenus compatibles web."
    },
    {
      id: "hero-2",
      image: coverAt(1),
      label: "AUDIO PREMIUM",
      title: `${audioItems.length} audios deja classes par collection`,
      text: "Fakiha, Kifaya, Katmiya, Khoutba, Goree, Thies, Sarr, Chez Mouqadam et d'autres ensembles sont deja ranges pour l'ecoute."
    },
    {
      id: "hero-3",
      image: coverAt(3),
      label: "DOSSIERS SOURCES",
      title: `${driveFolderIndex.length} dossiers organises comme vraies collections`,
      text: "Le site garde la logique des grands dossiers sources pour rester propre, evolutif et simple a enrichir."
    }
  ];

  const CATEGORY_TILES = [
    {
      slug: "enseignement-jour",
      title: "Enseignement du jour",
      description: "La video libre mise en avant sur l'accueil.",
      href: "/mediatheque"
    },
    {
      slug: "videotheque",
      title: "Videotheque",
      description: "Des videos compatibles web lues directement dans le site.",
      href: "/mediatheque"
    },
    {
      slug: "audiotheque",
      title: "Audiotheque",
      description: `${audioItems.length} audios premium organises par collection.`,
      href: "/mediatheque"
    },
    {
      slug: "fakiha",
      title: "Dossier Fakiha",
      description: "Une longue serie audio premium prete a l'ecoute.",
      href: "/mediatheque"
    },
    {
      slug: "kifaya",
      title: "Dossier Kifaya",
      description: "Serie audio compacte, classee et facile a parcourir.",
      href: "/mediatheque"
    },
    {
      slug: "katmiya",
      title: "Katmiya",
      description: "Katmiya, Wazifa et archives regroupees dans une meme rubrique.",
      href: "/mediatheque"
    },
    {
      slug: "khoutba",
      title: "Khoutba",
      description: "Khoutbas presentees comme une collection premium a part entiere.",
      href: "/mediatheque"
    },
    {
      slug: "bibliotheque",
      title: "Bibliotheque",
      description: "Repere, dossiers sources, galerie et organisation generale du projet.",
      href: "/bibliotheque"
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
    DEFAULT_ITEMS
  };
})();
