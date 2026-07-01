(function () {
  const config = window.MaktabatData;

  if (!config) {
    return;
  }

  const state = {
    items: [],
    users: [],
    currentUser: null,
    settings: null,
    heroIndex: 0,
    heroTimer: null,
    previewGateTimer: null
  };

  const MEDIA_CATEGORY_ORDER = [
    "Cheikh M. Hamid",
    "Sarr",
    "Chez Mouqadam",
    "Thies",
    "Serigne Habib Sy",
    "Fakiha",
    "Kifaya",
    "Katmiya",
    "Khoutba",
    "Goree",
    "Mbour",
    "Ziar",
    "Gaya"
  ];

  document.addEventListener("DOMContentLoaded", init);
  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("submit", handleDocumentSubmit);

  function init() {
    syncState();
    renderSiteChrome();
    renderPage();
    initHeroCarousel();
  }

  function syncState() {
    ensureSettings();
    state.users = readJson(config.STORAGE_KEYS.users, []);
    state.settings = {
      ...config.DEFAULT_SETTINGS,
      ...readJson(config.STORAGE_KEYS.settings, {})
    };
    state.items = mergeItems(config.DEFAULT_ITEMS, readJson(config.STORAGE_KEYS.customItems, []));
    state.currentUser = getCurrentUser();
  }

  function ensureSettings() {
    const stored = readJson(config.STORAGE_KEYS.settings, {});
    if (!stored.adminPassword) {
      writeJson(config.STORAGE_KEYS.settings, {
        ...config.DEFAULT_SETTINGS,
        ...stored
      });
    }
  }

  function readJson(key, fallback) {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function writeJson(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  function mergeItems(defaultItems, customItems) {
    return [...defaultItems, ...customItems].sort((left, right) => {
      const leftFeatured = left.featured ? 1 : 0;
      const rightFeatured = right.featured ? 1 : 0;
      return rightFeatured - leftFeatured;
    });
  }

  function getCurrentUser() {
    const currentUserId = window.localStorage.getItem(config.STORAGE_KEYS.currentUserId);
    return state.users.find((user) => user.id === currentUserId) || null;
  }

  function saveUsers(users) {
    writeJson(config.STORAGE_KEYS.users, users);
    state.users = users;
    state.currentUser = getCurrentUser();
  }

  function setCurrentUser(userId) {
    if (userId) {
      window.localStorage.setItem(config.STORAGE_KEYS.currentUserId, userId);
    } else {
      window.localStorage.removeItem(config.STORAGE_KEYS.currentUserId);
    }
    state.currentUser = getCurrentUser();
  }

  function getItemById(itemId) {
    return state.items.find((item) => item.id === itemId) || null;
  }

  function isPremiumPlayable(item) {
    return (item.kind === "video" || item.kind === "audio") && !item.isDaily;
  }

  function hasUnlockedItem(itemId) {
    if (!state.currentUser) {
      return false;
    }

    return Array.isArray(state.currentUser.purchases) && state.currentUser.purchases.includes(itemId);
  }

  function isFavorite(itemId) {
    if (!state.currentUser) {
      return false;
    }

    return Array.isArray(state.currentUser.favorites) && state.currentUser.favorites.includes(itemId);
  }

  function renderSiteChrome() {
    const headerHost = document.querySelector("[data-site-header]");
    const footerHost = document.querySelector("[data-site-footer]");
    const modalHost = document.querySelector("[data-site-modals]");
    const currentPage = document.body.dataset.page || "home";
    const accountLabel = state.currentUser ? "Compte" : "Login";

    if (headerHost) {
      headerHost.innerHTML = `
        <header class="site-header">
          <div class="site-header__stripe"></div>
          <div class="container site-header__inner">
            <div class="site-header__lead">
              <button class="menu-toggle" type="button" data-drawer-toggle aria-label="Ouvrir le menu">
                <span></span>
                <span></span>
                <span></span>
              </button>
              <a class="brand" href="/">
                <img
                  class="brand__logo"
                  src="/assets/images/logo-officiel.jpg"
                  alt="Maktabat Cheikh Abdoul Hamid Sarr"
                >
              </a>
              <a class="header-login" href="/compte" aria-label="${accountLabel}">
                <span class="header-login__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <circle cx="12" cy="8" r="3.5"></circle>
                    <path d="M5 19c0-3.1 3.1-5.5 7-5.5s7 2.4 7 5.5"></path>
                  </svg>
                </span>
                <span class="header-login__label">${accountLabel}</span>
              </a>
            </div>

            <nav class="desktop-nav" aria-label="Navigation principale">
              ${config.NAV_ITEMS.map((item) => `
                <a class="${item.slug === currentPage ? "is-active" : ""}" href="${item.href}">
                  ${escapeHtml(item.label)}
                </a>
              `).join("")}
            </nav>
          </div>

          <div class="drawer-backdrop is-hidden" id="drawerBackdrop" data-drawer-close></div>
          <aside class="drawer is-hidden" id="mobileDrawer" aria-hidden="true">
            <div class="drawer__head">
              <strong>Menu</strong>
              <button class="drawer__close" type="button" data-drawer-close aria-label="Fermer le menu">x</button>
            </div>
            <nav class="drawer__nav" aria-label="Navigation mobile">
              ${config.NAV_ITEMS.map((item) => `
                <a class="${item.slug === currentPage ? "is-active" : ""}" href="${item.href}">
                  ${escapeHtml(item.label)}
                </a>
              `).join("")}
            </nav>
            <div class="drawer__categories">
              <p class="section-label">Categories</p>
              ${config.CATEGORY_TILES.map((tile) => `
                <a href="${tile.href}">${escapeHtml(tile.title)}</a>
              `).join("")}
            </div>
          </aside>
        </header>
      `;
    }

    if (footerHost) {
      footerHost.innerHTML = `
        <footer class="site-footer">
          <div class="container site-footer__inner">
            <div>
              <p class="section-label">MAKTABAT</p>
              <h2>Maktabat Cheikh Abdoul Hamid Sarr</h2>
              <p>
                La memoire vivante des enseignements de Cheikh Abdoul Hamid Sarr et de l'heritage de Cheikh Seydi El Hadj Malick Sy.
              </p>
            </div>
            <div class="site-footer__meta">
              <p><strong>Contact</strong><br>${escapeHtml(state.settings.supportEmail)}</p>
              <p><strong>Reseaux</strong><br>Facebook - YouTube - TikTok - Instagram - Telegram</p>
            </div>
          </div>
        </footer>
      `;
    }

    if (modalHost) {
      modalHost.innerHTML = `
        <div class="modal-shell is-hidden" id="siteModal" aria-hidden="true">
          <div class="modal-shell__backdrop" data-modal-close></div>
          <div class="modal-card" id="siteModalCard"></div>
        </div>
        <div class="toast" id="siteToast" aria-live="polite"></div>
      `;
    }
  }

  function renderPage() {
    syncState();
    const page = document.body.dataset.page;

    if (page === "home") {
      renderHome();
    }

    if (page === "mediatheque") {
      renderMediatheque();
    }

    if (page === "bibliotheque") {
      renderBibliotheque();
    }

    if (page === "compte") {
      renderCompte();
    }

    if (page === "admin") {
      renderAdmin();
    }
  }

  function renderHome() {
    renderHeroSlide(state.heroIndex);

    renderInto("#dailySpotlight", buildFeatureCard(findDailyVideo()));

    const newest = state.items.filter((item) => item.featured && item.id !== "video-day").slice(0, 3);
    renderInto("#newestFeed", newest.map((item) => buildStackCard(item)).join(""));

    renderInto(
      "#categoryGrid",
      config.CATEGORY_TILES.map((tile) => `
        <a class="category-tile" href="${tile.href}">
          <p class="category-tile__title">${escapeHtml(tile.title)}</p>
          <p class="category-tile__text">${escapeHtml(tile.description)}</p>
        </a>
      `).join("")
    );

    const premiumItems = state.items.filter(isPremiumPlayable).slice(0, 8);
    renderInto("#premiumRail", premiumItems.map((item) => buildMediaCard(item, { compact: true })).join(""));

    const libraryPreview = state.items.filter((item) => item.kind === "document" || item.kind === "article").slice(0, 3);
    renderInto("#libraryPreview", libraryPreview.map((item) => buildInfoCard(item)).join(""));

    const dossierPreview = state.items.filter((item) => item.kind === "folder").slice(0, 6);
    renderInto("#dossierPreview", dossierPreview.map((item) => buildInfoCard(item)).join(""));
  }

  function renderMediatheque() {
    renderInto("#freeVideoSpotlight", buildFeatureCard(findDailyVideo()));
    const premiumVideos = state.items.filter((item) => item.kind === "video" && !item.isDaily);
    renderInto(
      "#videoGrid",
      premiumVideos.length
        ? premiumVideos.map((item) => buildMediaCard(item)).join("")
        : `<p class="empty-state">Aucune video compatible web n'est disponible pour le moment.</p>`
    );

    const audioGroups = groupItemsByCategory(
      state.items.filter((item) => item.kind === "audio"),
      MEDIA_CATEGORY_ORDER
    );

    renderInto(
      "#audioCollections",
      audioGroups.length
        ? audioGroups.map((group) => buildCollectionSection(group.category, group.items)).join("")
        : `<p class="empty-state">Aucun audio n'est disponible pour le moment.</p>`
    );
  }

  function renderBibliotheque() {
    renderInto(
      "#documentGrid",
      state.items
        .filter((item) => item.collection === "document")
        .map((item) => buildInfoCard(item))
        .join("")
    );
    renderInto(
      "#articleGrid",
      state.items
        .filter((item) => item.collection === "article")
        .map((item) => buildInfoCard(item))
        .join("")
    );
    renderInto(
      "#folderGrid",
      state.items
        .filter((item) => item.collection === "folder")
        .map((item) => buildInfoCard(item))
        .join("")
    );
    renderInto(
      "#photoGrid",
      state.items
        .filter((item) => item.collection === "photo")
        .map((item) => buildInfoCard(item))
        .join("")
    );
  }

  function renderCompte() {
    const authPanel = document.querySelector("#authPanel");
    const dashboardPanel = document.querySelector("#dashboardPanel");

    if (!authPanel || !dashboardPanel) {
      return;
    }

    if (!state.currentUser) {
      authPanel.innerHTML = `
        <h2>Connexion et inscription</h2>
        <p class="muted-copy">Creer un compte reste simple: nom, email, mot de passe et telephone si vous souhaitez etre recontacte plus facilement.</p>

        <div class="auth-tabs">
          <form class="auth-form" id="loginForm">
            <h3>Connexion</h3>
            <label>
              <span>Email</span>
              <input type="email" name="email" required>
            </label>
            <label>
              <span>Mot de passe</span>
              <input type="password" name="password" required>
            </label>
            <button class="button button--primary" type="submit">Se connecter</button>
          </form>

          <form class="auth-form" id="signupForm">
            <h3>Inscription</h3>
            <label>
              <span>Nom complet</span>
              <input type="text" name="name" required>
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" required>
            </label>
            <label>
              <span>Telephone (optionnel)</span>
              <input type="tel" name="phone" inputmode="tel" autocomplete="tel">
            </label>
            <label>
              <span>Mot de passe</span>
              <input type="password" name="password" required minlength="6">
            </label>
            <button class="button button--primary" type="submit">Creer mon compte</button>
          </form>
        </div>

        <form class="auth-form auth-form--reset" id="resetForm">
          <h3>Mot de passe oublie</h3>
          <label>
            <span>Email</span>
            <input type="email" name="email" required>
          </label>
          <button class="button button--ghost" type="submit">Recevoir le lien</button>
        </form>
      `;

      dashboardPanel.innerHTML = `
        <h2>Votre espace personnel</h2>
        <p class="muted-copy">
          Une fois connecte, vous retrouvez les contenus debloques, l'historique, les favoris et la reprise de lecture.
        </p>
        <div class="account-benefits">
          <div class="mini-card">
            <strong>Historique</strong>
            <span>Chaque lecture est memorisee dans votre compte.</span>
          </div>
          <div class="mini-card">
            <strong>Favoris</strong>
            <span>Marquez les videos, audios ou dossiers a revoir plus tard.</span>
          </div>
          <div class="mini-card">
            <strong>Acces premium</strong>
            <span>Un contenu paye reste debloque pour vos prochaines ecoutes.</span>
          </div>
        </div>
      `;

      return;
    }

    const purchases = state.currentUser.purchases || [];
    const favorites = state.currentUser.favorites || [];
    const history = state.currentUser.history || [];

    authPanel.innerHTML = `
      <h2>${escapeHtml(state.currentUser.name)}</h2>
      <p class="muted-copy">${escapeHtml(state.currentUser.email)}</p>
      ${state.currentUser.phone ? `<p class="muted-copy">${escapeHtml(state.currentUser.phone)}</p>` : ""}
      <div class="mini-card-list">
        <div class="mini-card">
          <strong>${purchases.length}</strong>
          <span>contenu(x) premium debloque(s)</span>
        </div>
        <div class="mini-card">
          <strong>${favorites.length}</strong>
          <span>favori(s)</span>
        </div>
        <div class="mini-card">
          <strong>${history.length}</strong>
          <span>lecture(s) recentes</span>
        </div>
      </div>
      <button class="button button--ghost" type="button" data-logout-user>Se deconnecter</button>
    `;

    dashboardPanel.innerHTML = `
      <h2>Tableau de bord personnel</h2>
      <div class="dashboard-grid">
        <div class="dashboard-block">
          <h3>Contenus debloques</h3>
          ${buildSimpleList(purchases)}
        </div>
        <div class="dashboard-block">
          <h3>Favoris</h3>
          ${buildSimpleList(favorites)}
        </div>
        <div class="dashboard-block">
          <h3>Historique recent</h3>
          ${buildHistoryList(history)}
        </div>
      </div>
    `;
  }

  function renderAdmin() {
    const lockPanel = document.querySelector("#adminLockPanel");
    const consolePanel = document.querySelector("#adminConsole");

    if (!lockPanel || !consolePanel) {
      return;
    }

    const isUnlocked = window.localStorage.getItem(config.STORAGE_KEYS.adminUnlocked) === "true";

    if (!isUnlocked) {
      lockPanel.innerHTML = `
        <h2>Acces admin prive</h2>
        <p class="muted-copy">Cette zone n'apparait pas dans la navigation publique. Entrez le mot de passe admin pour piloter les contenus et les reglages premium.</p>
        <form class="auth-form" id="adminUnlockForm">
          <label>
            <span>Mot de passe admin</span>
            <input type="password" name="password" required>
          </label>
          <button class="button button--primary" type="submit">Ouvrir l'admin</button>
        </form>
        <p class="admin-note">
          Cette administration est locale au navigateur. Pour une securite reelle et des paiements verifies, il faudra connecter un backend.
        </p>
      `;
      consolePanel.classList.add("is-hidden");
      return;
    }

    lockPanel.innerHTML = `
      <div class="admin-headline">
        <div>
          <h2>Session admin ouverte</h2>
          <p class="muted-copy">Vous pouvez maintenant modifier les contenus par categorie.</p>
        </div>
        <button class="button button--ghost" type="button" data-lock-admin>Fermer la session admin</button>
      </div>
    `;
    consolePanel.classList.remove("is-hidden");

    renderInto("#adminStats", buildAdminStats());
    renderInto("#adminSettingsPanel", buildAdminSettingsPanel());
    renderInto("#adminEditorPanel", buildAdminEditorPanel());
    renderInto("#adminItemsPanel", buildAdminItemsPanel());
  }

  function buildAdminStats() {
    const usersCount = state.users.length;
    const videosCount = state.items.filter((item) => item.kind === "video").length;
    const audiosCount = state.items.filter((item) => item.kind === "audio").length;
    const docsCount = state.items.filter((item) => item.kind === "document" || item.kind === "article").length;
    const viewsCount = state.users.reduce((count, user) => count + (user.history || []).length, 0);

    return [
      buildStatCard("Membres", usersCount),
      buildStatCard("Videos", videosCount),
      buildStatCard("Audios", audiosCount),
      buildStatCard("Documents", docsCount),
      buildStatCard("Vues", viewsCount)
    ].join("");
  }

  function buildStatCard(label, value) {
    return `
      <article class="stat-card">
        <strong>${value}</strong>
        <span>${escapeHtml(label)}</span>
      </article>
    `;
  }

  function buildAdminSettingsPanel() {
    return `
      <h2>Reglages premium</h2>
      <form class="auth-form" id="adminSettingsForm">
        <label>
          <span>Mot de passe admin</span>
          <input type="text" name="adminPassword" value="${escapeHtml(state.settings.adminPassword)}" required>
        </label>
        <label>
          <span>Prix Wave en FCFA</span>
          <input type="number" name="wavePrice" min="0" value="${escapeHtml(String(state.settings.wavePrice))}" required>
        </label>
        <label>
          <span>URL du QR Wave</span>
          <input type="url" name="waveQrUrl" value="${escapeHtml(state.settings.waveQrUrl)}" required>
        </label>
        <label>
          <span>Email de contact</span>
          <input type="email" name="supportEmail" value="${escapeHtml(state.settings.supportEmail)}" required>
        </label>
        <button class="button button--primary" type="submit">Enregistrer les reglages</button>
      </form>
    `;
  }

  function buildAdminEditorPanel() {
    return `
      <h2>Ajouter un contenu</h2>
      <form class="auth-form" id="adminItemForm">
        <label>
          <span>Titre</span>
          <input type="text" name="title" required>
        </label>
        <label>
          <span>Type</span>
          <select name="kind" required>
            <option value="video">Video</option>
            <option value="audio">Audio</option>
            <option value="document">Document PDF</option>
            <option value="article">Article</option>
            <option value="image">Image</option>
            <option value="folder">Dossier</option>
          </select>
        </label>
        <label>
          <span>Categorie</span>
          <select name="category" required>
            ${config.ADMIN_CATEGORIES.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("")}
          </select>
        </label>
        <label>
          <span>Description</span>
          <textarea name="description" rows="4" required></textarea>
        </label>
        <label>
          <span>Duree ou etiquette</span>
          <input type="text" name="duration" placeholder="25 min, PDF, Article..." required>
        </label>
        <label>
          <span>Image de couverture (URL, image locale ou visuel Drive)</span>
          <input type="text" name="cover" placeholder="/assets/images/hero-cheikh.jpeg">
        </label>
        <label>
          <span>Source du media ou du fichier (URL Google Drive, preview ou chemin local)</span>
          <input type="text" name="mediaSrc" placeholder="/assets/videos/conference-01.mp4">
        </label>
        <label class="checkbox-field">
          <input type="checkbox" name="featured">
          <span>Mettre en avant sur l'accueil</span>
        </label>
        <button class="button button--primary" type="submit">Ajouter le contenu</button>
      </form>
    `;
  }

  function buildAdminItemsPanel() {
    const customItems = readJson(config.STORAGE_KEYS.customItems, []);

    return `
      <div class="admin-items-head">
        <div>
          <h2>Contenus ajoutes depuis l'admin</h2>
          <p class="muted-copy">${customItems.length} contenu(x) personnalise(s)</p>
        </div>
      </div>
      <div class="admin-item-list">
        ${customItems.length
          ? customItems.map((item) => `
              <article class="admin-item">
                <div>
                  <strong>${escapeHtml(item.title)}</strong>
                  <p>${escapeHtml(item.kind)} - ${escapeHtml(item.category)} - ${escapeHtml(item.duration)}</p>
                </div>
                <button class="button button--ghost button--small" type="button" data-delete-custom-item="${item.id}">Supprimer</button>
              </article>
            `).join("")
          : `<p class="empty-state">Aucun contenu ajoute pour le moment.</p>`}
      </div>
    `;
  }

  function buildFeatureCard(item) {
    if (!item) {
      return "";
    }

    return `
      <article class="feature-card">
        <div class="feature-card__media">
          <img src="${escapeHtml(item.cover)}" alt="${escapeHtml(item.title)}" loading="lazy">
          <span class="media-play-badge media-play-badge--feature" aria-hidden="true">
            ${item.kind === "audio" ? "♪" : "▶"}
          </span>
        </div>
        <div class="feature-card__body">
          <p class="section-label">${escapeHtml(item.category)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <div class="meta-row">
            <span>${escapeHtml(item.duration)}</span>
            <span>${escapeHtml(item.label || item.access.toUpperCase())}</span>
          </div>
          <div class="action-row">
            <button class="button button--primary" type="button" data-open-item="${item.id}">Ouvrir</button>
            <button class="button button--ghost" type="button" data-favorite-item="${item.id}">Favori</button>
          </div>
        </div>
      </article>
    `;
  }

  function buildStackCard(item) {
    return `
      <article class="stack-card">
        <div class="stack-card__media">
          <img src="${escapeHtml(item.cover)}" alt="${escapeHtml(item.title)}" loading="lazy">
          <span class="media-play-badge" aria-hidden="true">
            ${item.kind === "audio" ? "♪" : "▶"}
          </span>
          <span class="stack-card__badge">${escapeHtml(item.duration)}</span>
        </div>
        <div class="stack-card__body">
          <p class="section-label">${escapeHtml(item.category)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <div class="action-row">
            <button class="button button--primary button--small" type="button" data-open-item="${item.id}">Ouvrir</button>
            <button class="button button--ghost button--small" type="button" data-favorite-item="${item.id}">Favori</button>
          </div>
        </div>
      </article>
    `;
  }

  function buildMediaCard(item, options = {}) {
    const classes = options.compact ? "media-card media-card--compact" : "media-card";
    const accessLabel = hasUnlockedItem(item.id) ? "DEBLOQUE" : item.label || item.access.toUpperCase();

    return `
      <article class="${classes}">
        <div class="media-card__media">
          <img src="${escapeHtml(item.cover)}" alt="${escapeHtml(item.title)}" loading="lazy">
          <span class="media-play-badge" aria-hidden="true">
            ${item.kind === "audio" ? "♪" : "▶"}
          </span>
        </div>
        <div class="media-card__body">
          <p class="section-label">${escapeHtml(item.category)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <div class="meta-row">
            <span>${escapeHtml(item.duration)}</span>
            <span>${escapeHtml(accessLabel)}</span>
          </div>
          <div class="action-row">
            <button class="button button--primary button--small" type="button" data-open-item="${item.id}">
              ${item.kind === "audio" ? "Ecouter" : "Voir"}
            </button>
            <button class="button button--ghost button--small" type="button" data-favorite-item="${item.id}">Favori</button>
          </div>
        </div>
      </article>
    `;
  }

  function buildInfoCard(item) {
    const icon = item.kind === "folder" ? "D" : item.kind === "document" ? "PDF" : item.kind === "image" ? "IMG" : "INFO";

    return `
      <article class="info-card">
        <div class="info-card__media">
          <img src="${escapeHtml(item.cover)}" alt="${escapeHtml(item.title)}" loading="lazy">
          <span class="media-play-badge media-play-badge--info" aria-hidden="true">${icon}</span>
        </div>
        <div class="info-card__body">
          <p class="section-label">${escapeHtml(item.category)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <div class="meta-row">
            <span>${escapeHtml(item.duration)}</span>
            <span>${escapeHtml(item.label || item.access.toUpperCase())}</span>
          </div>
          <div class="action-row">
            <button class="button button--primary button--small" type="button" data-open-item="${item.id}">Ouvrir</button>
            <button class="button button--ghost button--small" type="button" data-favorite-item="${item.id}">Favori</button>
          </div>
        </div>
      </article>
    `;
  }

  function buildFeatureCard(item) {
    if (!item) {
      return "";
    }

    return `
      <article class="feature-card">
        <div class="feature-card__media">
          <img src="${escapeHtml(item.cover)}" alt="${escapeHtml(item.title)}" loading="lazy">
          ${buildMediaBadge(item, "media-play-badge--feature")}
        </div>
        <div class="feature-card__body">
          <p class="section-label">${escapeHtml(item.category)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <div class="meta-row">
            <span>${escapeHtml(item.duration)}</span>
            <span>${escapeHtml(item.label || item.access.toUpperCase())}</span>
          </div>
          <div class="action-row">
            <button class="button button--primary" type="button" data-open-item="${item.id}">Ouvrir</button>
            <button class="button button--ghost" type="button" data-favorite-item="${item.id}">Favori</button>
          </div>
        </div>
      </article>
    `;
  }

  function buildStackCard(item) {
    return `
      <article class="stack-card">
        <div class="stack-card__media">
          <img src="${escapeHtml(item.cover)}" alt="${escapeHtml(item.title)}" loading="lazy">
          ${buildMediaBadge(item)}
          <span class="stack-card__badge">${escapeHtml(item.duration)}</span>
        </div>
        <div class="stack-card__body">
          <p class="section-label">${escapeHtml(item.category)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <div class="action-row">
            <button class="button button--primary button--small" type="button" data-open-item="${item.id}">Ouvrir</button>
            <button class="button button--ghost button--small" type="button" data-favorite-item="${item.id}">Favori</button>
          </div>
        </div>
      </article>
    `;
  }

  function buildMediaCard(item, options = {}) {
    const classes = options.compact ? "media-card media-card--compact" : "media-card";
    const accessLabel = hasUnlockedItem(item.id) ? "DEBLOQUE" : item.label || item.access.toUpperCase();

    return `
      <article class="${classes}">
        <div class="media-card__media">
          <img src="${escapeHtml(item.cover)}" alt="${escapeHtml(item.title)}" loading="lazy">
          ${buildMediaBadge(item)}
        </div>
        <div class="media-card__body">
          <p class="section-label">${escapeHtml(item.category)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <div class="meta-row">
            <span>${escapeHtml(item.duration)}</span>
            <span>${escapeHtml(accessLabel)}</span>
          </div>
          <div class="action-row">
            <button class="button button--primary button--small" type="button" data-open-item="${item.id}">
              ${item.kind === "audio" ? "Ecouter" : "Voir"}
            </button>
            <button class="button button--ghost button--small" type="button" data-favorite-item="${item.id}">Favori</button>
          </div>
        </div>
      </article>
    `;
  }

  function buildMediaBadge(item, extraClass = "") {
    const classes = [
      "media-play-badge",
      extraClass,
      item.kind === "audio" ? "media-play-badge--audio" : "media-play-badge--video"
    ]
      .filter(Boolean)
      .join(" ");

    if (item.kind === "audio") {
      return `
        <span class="${classes}" aria-hidden="true">
          <span class="media-play-badge__icon">
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M4 14h4l5 4V6L8 10H4z"></path>
              <path d="M16 9.5a4 4 0 0 1 0 5"></path>
              <path d="M18.5 7a7.5 7.5 0 0 1 0 10"></path>
            </svg>
          </span>
          <span class="media-play-badge__bars">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </span>
      `;
    }

    return `
      <span class="${classes}" aria-hidden="true">
        <span class="media-play-badge__play"></span>
      </span>
    `;
  }

  function groupItemsByCategory(items, categoryOrder = []) {
    const groups = new Map();

    items.forEach((item) => {
      if (!groups.has(item.category)) {
        groups.set(item.category, []);
      }

      groups.get(item.category).push(item);
    });

    return Array.from(groups.entries())
      .sort(([left], [right]) => {
        const leftIndex = categoryOrder.indexOf(left);
        const rightIndex = categoryOrder.indexOf(right);

        if (leftIndex === -1 && rightIndex === -1) {
          return left.localeCompare(right, "fr");
        }

        if (leftIndex === -1) {
          return 1;
        }

        if (rightIndex === -1) {
          return -1;
        }

        return leftIndex - rightIndex;
      })
      .map(([category, categoryItems]) => ({ category, items: categoryItems }));
  }

  function buildCollectionSection(category, items) {
    return `
      <section class="collection-block">
        <div class="section-head">
          <div>
            <p class="section-label">AUDIO PREMIUM</p>
            <h3>${escapeHtml(category)}</h3>
          </div>
          <p class="section-copy">${items.length} contenu(x)</p>
        </div>
        <div class="rail">
          ${items.map((item) => buildMediaCard(item, { compact: true })).join("")}
        </div>
      </section>
    `;
  }

  function buildSimpleList(itemIds) {
    if (!itemIds.length) {
      return `<p class="empty-state">Aucun contenu pour le moment.</p>`;
    }

    return `
      <div class="dashboard-list">
        ${itemIds.map((itemId) => {
          const item = getItemById(itemId);
          if (!item) {
            return "";
          }

          return `
            <button class="dashboard-item" type="button" data-open-item="${item.id}">
              <strong>${escapeHtml(item.title)}</strong>
              <span>${escapeHtml(item.category)}</span>
            </button>
          `;
        }).join("")}
      </div>
    `;
  }

  function buildHistoryList(historyEntries) {
    if (!historyEntries.length) {
      return `<p class="empty-state">Aucune lecture recente pour le moment.</p>`;
    }

    return `
      <div class="dashboard-list">
        ${historyEntries.slice(0, 8).map((entry) => {
          const item = getItemById(entry.id);
          if (!item) {
            return "";
          }

          return `
            <button class="dashboard-item" type="button" data-open-item="${item.id}">
              <strong>${escapeHtml(item.title)}</strong>
              <span>${new Date(entry.at).toLocaleString("fr-FR")}</span>
            </button>
          `;
        }).join("")}
      </div>
    `;
  }

  function renderHeroSlide(index) {
    const slide = config.HERO_SLIDES[index];
    const carousel = document.querySelector("#heroCarousel");
    const label = document.querySelector("#heroLabel");
    const title = document.querySelector("#heroTitle");
    const text = document.querySelector("#heroText");
    const dots = document.querySelector("#heroDots");

    if (!carousel || !slide) {
      return;
    }

    carousel.innerHTML = `
      <div class="hero-slide is-active">
        <img src="${escapeHtml(slide.image)}" alt="${escapeHtml(slide.title)}" loading="eager">
        <div class="hero-slide__shade"></div>
      </div>
    `;

    if (label) {
      label.textContent = slide.label;
    }

    if (title) {
      title.textContent = slide.title;
    }

    if (text) {
      text.textContent = slide.text;
    }

    if (dots) {
      dots.innerHTML = config.HERO_SLIDES.map((_, dotIndex) => `
        <button
          class="hero-dot ${dotIndex === index ? "is-active" : ""}"
          type="button"
          data-hero-dot="${dotIndex}"
          aria-label="Aller a l'image ${dotIndex + 1}"
        ></button>
      `).join("");
    }
  }

  function initHeroCarousel() {
    clearInterval(state.heroTimer);

    if (document.body.dataset.page !== "home") {
      return;
    }

    state.heroTimer = window.setInterval(() => {
      state.heroIndex = (state.heroIndex + 1) % config.HERO_SLIDES.length;
      renderHeroSlide(state.heroIndex);
    }, 5000);
  }

  function nextHeroSlide(step) {
    state.heroIndex = (state.heroIndex + step + config.HERO_SLIDES.length) % config.HERO_SLIDES.length;
    renderHeroSlide(state.heroIndex);
    initHeroCarousel();
  }

  function renderInto(selector, markup) {
    const element = document.querySelector(selector);
    if (!element) {
      return;
    }
    element.innerHTML = markup;
  }

  function findDailyVideo() {
    return state.items.find((item) => item.isDaily) || null;
  }

  function handleDocumentClick(event) {
    const drawerToggle = event.target.closest("[data-drawer-toggle]");
    const drawerClose = event.target.closest("[data-drawer-close]");
    const modalClose = event.target.closest("[data-modal-close]");
    const openItemButton = event.target.closest("[data-open-item]");
    const favoriteButton = event.target.closest("[data-favorite-item]");
    const unlockButton = event.target.closest("[data-activate-premium]");
    const logoutUser = event.target.closest("[data-logout-user]");
    const lockAdmin = event.target.closest("[data-lock-admin]");
    const deleteCustomItem = event.target.closest("[data-delete-custom-item]");
    const heroPrev = event.target.closest("#heroPrev");
    const heroNext = event.target.closest("#heroNext");
    const heroDot = event.target.closest("[data-hero-dot]");

    if (drawerToggle) {
      toggleDrawer(true);
    }

    if (drawerClose) {
      toggleDrawer(false);
    }

    if (modalClose) {
      closeModal();
    }

    if (openItemButton) {
      const item = getItemById(openItemButton.dataset.openItem);
      if (item) {
        openItem(item);
      }
    }

    if (favoriteButton) {
      toggleFavorite(favoriteButton.dataset.favoriteItem);
    }

    if (unlockButton) {
      activatePremium(unlockButton.dataset.activatePremium);
    }

    if (logoutUser) {
      setCurrentUser("");
      renderSiteChrome();
      renderPage();
      showToast("Vous etes deconnecte.");
    }

    if (lockAdmin) {
      window.localStorage.removeItem(config.STORAGE_KEYS.adminUnlocked);
      renderPage();
      showToast("Session admin fermee.");
    }

    if (deleteCustomItem) {
      deleteAdminItem(deleteCustomItem.dataset.deleteCustomItem);
    }

    if (heroPrev) {
      nextHeroSlide(-1);
    }

    if (heroNext) {
      nextHeroSlide(1);
    }

    if (heroDot) {
      state.heroIndex = Number(heroDot.dataset.heroDot);
      renderHeroSlide(state.heroIndex);
      initHeroCarousel();
    }
  }

  function handleDocumentSubmit(event) {
    if (event.target.matches("#globalSearchForm")) {
      event.preventDefault();
      const formData = new FormData(event.target);
      runSearch(String(formData.get("query") || ""));
    }

    if (event.target.matches("#signupForm")) {
      event.preventDefault();
      handleSignup(new FormData(event.target));
    }

    if (event.target.matches("#loginForm")) {
      event.preventDefault();
      handleLogin(new FormData(event.target));
    }

    if (event.target.matches("#resetForm")) {
      event.preventDefault();
      showToast("Lien de reinitialisation simule.");
    }

    if (event.target.matches("#adminUnlockForm")) {
      event.preventDefault();
      handleAdminUnlock(new FormData(event.target));
    }

    if (event.target.matches("#adminSettingsForm")) {
      event.preventDefault();
      handleSettingsSave(new FormData(event.target));
    }

    if (event.target.matches("#adminItemForm")) {
      event.preventDefault();
      handleAdminItemCreate(new FormData(event.target), event.target);
    }
  }

  function runSearch(query) {
    const resultsContainer = document.querySelector("#searchResults");
    if (!resultsContainer) {
      return;
    }

    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) {
      resultsContainer.classList.add("is-hidden");
      resultsContainer.innerHTML = "";
      showToast("Saisissez un mot-cle pour lancer la recherche.");
      return;
    }

    const results = state.items.filter((item) => {
      const haystack = [item.title, item.description, item.category, item.kind].join(" ").toLowerCase();
      return haystack.includes(cleanQuery);
    });

    resultsContainer.classList.remove("is-hidden");
    resultsContainer.innerHTML = results.length
      ? results.map((item) => (item.kind === "video" || item.kind === "audio" ? buildMediaCard(item) : buildInfoCard(item))).join("")
      : `<p class="empty-state">Aucun contenu correspondant a votre recherche.</p>`;
  }

  function handleSignup(formData) {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const phone = String(formData.get("phone") || "").trim();
    const password = String(formData.get("password") || "");

    if (!name || !email || !password) {
      showToast("Veuillez remplir tous les champs.");
      return;
    }

    if (state.users.some((user) => user.email === email)) {
      showToast("Un compte existe deja avec cet email.");
      return;
    }

    const user = {
      id: `user-${Date.now()}`,
      name,
      email,
      phone,
      password,
      purchases: [],
      favorites: [],
      history: []
    };

    saveUsers([...state.users, user]);
    setCurrentUser(user.id);
    renderSiteChrome();
    renderPage();
    sendWelcomeEmail(user);
    showToast("Compte cree avec succes.");
  }

  function handleLogin(formData) {
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const password = String(formData.get("password") || "");
    const user = state.users.find((entry) => entry.email === email && entry.password === password);

    if (!user) {
      showToast("Identifiants incorrects.");
      return;
    }

    setCurrentUser(user.id);
    renderSiteChrome();
    renderPage();
    showToast("Connexion reussie.");
  }

  function handleAdminUnlock(formData) {
    const password = String(formData.get("password") || "");
    if (password !== state.settings.adminPassword) {
      showToast("Mot de passe admin incorrect.");
      return;
    }

    window.localStorage.setItem(config.STORAGE_KEYS.adminUnlocked, "true");
    renderPage();
    showToast("Session admin ouverte.");
  }

  function handleSettingsSave(formData) {
    const nextSettings = {
      adminPassword: String(formData.get("adminPassword") || config.DEFAULT_ADMIN_PASSWORD).trim() || config.DEFAULT_ADMIN_PASSWORD,
      wavePrice: Number(formData.get("wavePrice") || 500),
      waveQrUrl: String(formData.get("waveQrUrl") || config.DEFAULT_SETTINGS.waveQrUrl).trim() || config.DEFAULT_SETTINGS.waveQrUrl,
      supportEmail: String(formData.get("supportEmail") || config.DEFAULT_SETTINGS.supportEmail).trim() || config.DEFAULT_SETTINGS.supportEmail
    };

    writeJson(config.STORAGE_KEYS.settings, nextSettings);
    syncState();
    renderSiteChrome();
    renderPage();
    showToast("Reglages admin enregistres.");
  }

  function handleAdminItemCreate(formData, form) {
    const title = String(formData.get("title") || "").trim();
    const kind = String(formData.get("kind") || "").trim();
    const category = String(formData.get("category") || "").trim();
    const description = String(formData.get("description") || "").trim();
    const duration = String(formData.get("duration") || "").trim();
    const cover = String(formData.get("cover") || "").trim() || "/assets/images/hero-cheikh.jpeg";
    const mediaSrc = String(formData.get("mediaSrc") || "").trim();
    const featured = formData.get("featured") === "on";

    if (!title || !kind || !category || !description || !duration) {
      showToast("Tous les champs principaux sont requis.");
      return;
    }

    const isDaily = kind === "video" && category === "Video du jour";
    const access = (kind === "video" || kind === "audio") && !isDaily ? "premium" : "free";
    const label = kind === "document" ? "PDF" : kind === "article" ? "ARTICLE" : kind === "folder" ? "DOSSIER" : kind === "image" ? "PHOTO" : access.toUpperCase();

    const newItem = {
      id: `${slugify(title)}-${Date.now()}`,
      kind,
      title,
      description,
      category,
      collection: inferCollection(kind, category),
      duration,
      access,
      isDaily,
      cover,
      mediaSrc,
      label,
      featured
    };

    const customItems = readJson(config.STORAGE_KEYS.customItems, []);
    writeJson(config.STORAGE_KEYS.customItems, [...customItems, newItem]);
    syncState();
    renderPage();
    form.reset();
    showToast("Contenu ajoute.");
  }

  function deleteAdminItem(itemId) {
    const customItems = readJson(config.STORAGE_KEYS.customItems, []);
    writeJson(
      config.STORAGE_KEYS.customItems,
      customItems.filter((item) => item.id !== itemId)
    );
    syncState();
    renderPage();
    showToast("Contenu supprime.");
  }

  function inferCollection(kind, category) {
    if (kind === "video" && category.startsWith("Conference")) {
      return "conference";
    }

    if (kind === "video" && category.toLowerCase().includes("gamou")) {
      return "gamou";
    }

    if (kind === "video" && category.toLowerCase().includes("enseignement du jour")) {
      return "daily";
    }

    if (kind === "video") {
      return "conference";
    }

    if (kind === "audio") {
      return "audio";
    }

    if (kind === "document") {
      return "document";
    }

    if (kind === "article") {
      return "article";
    }

    if (kind === "image") {
      return "photo";
    }

    if (kind === "folder") {
      return "folder";
    }

    return "misc";
  }

  function slugify(value) {
    return value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function toggleDrawer(shouldOpen) {
    const drawer = document.querySelector("#mobileDrawer");
    const backdrop = document.querySelector("#drawerBackdrop");

    if (!drawer || !backdrop) {
      return;
    }

    drawer.classList.toggle("is-hidden", !shouldOpen);
    backdrop.classList.toggle("is-hidden", !shouldOpen);
    drawer.setAttribute("aria-hidden", shouldOpen ? "false" : "true");
  }

  function openItem(item) {
    if (item.kind === "video" || item.kind === "audio") {
      openMediaModal(item);
      addHistory(item.id);
      return;
    }

    openInfoModal(item);
  }

  function openMediaModal(item) {
    const canAccessFull = !isPremiumPlayable(item) || hasUnlockedItem(item.id);
    const tagName = item.kind === "audio" ? "audio" : "video";
    const playerMarkup = tagName === "audio"
      ? `
        <div class="modal-audio-stage">
          <img class="modal-audio-cover" src="${escapeHtml(item.cover)}" alt="${escapeHtml(item.title)}">
          <audio id="modalPlayer" controls preload="metadata" src="${escapeHtml(item.mediaSrc)}"></audio>
        </div>
      `
      : `<video id="modalPlayer" controls preload="metadata" playsinline src="${escapeHtml(item.mediaSrc)}"></video>`;

    openModal(`
      <div class="modal-head">
        <div>
          <p class="section-label">${escapeHtml(item.category)}</p>
          <h2>${escapeHtml(item.title)}</h2>
        </div>
        <button class="drawer__close" type="button" data-modal-close aria-label="Fermer">x</button>
      </div>
      <div class="modal-body">
        <div class="modal-media" id="modalMediaHost">${playerMarkup}</div>
        <div class="modal-copy">
          <p>${escapeHtml(item.description)}</p>
          <div class="meta-row">
            <span>${escapeHtml(item.duration)}</span>
            <span>${canAccessFull ? "ACCES COMPLET" : "1 MIN GRATUITE"}</span>
          </div>
          <div class="paywall-card ${canAccessFull ? "is-hidden" : ""}" id="paywallCard">
            <h3>Continuer la lecture</h3>
            <p>
              Le contenu s'arrete apres 1 minute. Creez votre compte puis reglez ${escapeHtml(String(state.settings.wavePrice))} FCFA pour debloquer l'acces complet sur votre espace personnel.
            </p>
            <div class="qr-card">
              <img src="${escapeHtml(state.settings.waveQrUrl)}" alt="QR Wave">
              <div>
                <strong>Paiement Wave</strong>
                <span>Le QR definitif pourra etre remplace ici depuis l'admin.</span>
              </div>
            </div>
            <div class="action-row">
              ${state.currentUser
                ? `<button class="button button--primary" type="button" data-activate-premium="${item.id}">J'ai paye, activer l'acces</button>`
                : `<a class="button button--primary" href="/compte">Se connecter</a>`}
              <button class="button button--ghost" type="button" data-modal-close>Fermer</button>
            </div>
          </div>
        </div>
      </div>
    `);

    bindPremiumPreview(item);
  }

  function bindPremiumPreview(item) {
    if (!isPremiumPlayable(item) || hasUnlockedItem(item.id)) {
      return;
    }

    clearPreviewGateTimer();

    const player = document.querySelector("#modalPlayer");
    const mediaHost = document.querySelector("#modalMediaHost");
    const paywallCard = document.querySelector("#paywallCard");

    if (!player || !paywallCard) {
      return;
    }

    let gateTriggered = false;

    const lockPreview = () => {
      if (gateTriggered) {
        return;
      }

      gateTriggered = true;
      player.pause();

      if (mediaHost) {
        mediaHost.innerHTML = `
          <div class="modal-locked-screen">
            <strong>Apercu termine</strong>
            <span>La premiere minute est terminee. Connectez-vous puis payez pour ouvrir la version complete.</span>
          </div>
        `;
      }

      paywallCard.classList.remove("is-hidden");
      showToast("La minute gratuite est terminee. Connectez-vous puis payez pour continuer.");
    };

    const onTimeUpdate = () => {
      if (gateTriggered || player.currentTime < 60) {
        return;
      }

      lockPreview();
    };

    player.addEventListener("timeupdate", onTimeUpdate);
  }

  function activatePremium(itemId) {
    if (!state.currentUser) {
      window.location.href = "/compte";
      return;
    }

    const unlockedItem = getItemById(itemId);
    const users = [...state.users];
    const index = users.findIndex((user) => user.id === state.currentUser.id);
    if (index === -1) {
      return;
    }

    const purchases = new Set(users[index].purchases || []);
    purchases.add(itemId);
    users[index] = {
      ...users[index],
      purchases: Array.from(purchases)
    };

    saveUsers(users);
    setCurrentUser(users[index].id);
    renderSiteChrome();
    renderPage();

    if (unlockedItem) {
      openMediaModal(unlockedItem);
    }

    showToast("Acces premium active pour ce contenu.");
  }

  function openInfoModal(item) {
    const openLabel = item.kind === "folder"
      ? "Ouvrir le dossier"
      : item.kind === "document"
        ? "Ouvrir l'acces"
        : "Ouvrir le fichier";
    const openFileButton = item.mediaSrc
      ? `<a class="button button--primary" href="${escapeHtml(item.mediaSrc)}" target="_blank" rel="noreferrer">${openLabel}</a>`
      : "";

    const imageMarkup = item.kind === "image"
      ? `<img src="${escapeHtml(item.mediaSrc || item.cover)}" alt="${escapeHtml(item.title)}">`
      : `<img src="${escapeHtml(item.cover)}" alt="${escapeHtml(item.title)}">`;

    openModal(`
      <div class="modal-head">
        <div>
          <p class="section-label">${escapeHtml(item.category)}</p>
          <h2>${escapeHtml(item.title)}</h2>
        </div>
        <button class="drawer__close" type="button" data-modal-close aria-label="Fermer">x</button>
      </div>
      <div class="modal-body modal-body--info">
        <div class="modal-media">${imageMarkup}</div>
        <div class="modal-copy">
          <p>${escapeHtml(item.description)}</p>
          <div class="meta-row">
            <span>${escapeHtml(item.duration)}</span>
            <span>${escapeHtml(item.label || item.access.toUpperCase())}</span>
          </div>
          <div class="action-row">
            ${openFileButton}
            <button class="button button--ghost" type="button" data-favorite-item="${item.id}">Favori</button>
          </div>
        </div>
      </div>
    `);
  }

  function openModal(markup) {
    const shell = document.querySelector("#siteModal");
    const card = document.querySelector("#siteModalCard");
    if (!shell || !card) {
      return;
    }

    card.innerHTML = markup;
    shell.classList.remove("is-hidden");
    shell.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    const shell = document.querySelector("#siteModal");
    const card = document.querySelector("#siteModalCard");
    if (!shell || !card) {
      return;
    }

    clearPreviewGateTimer();
    card.innerHTML = "";
    shell.classList.add("is-hidden");
    shell.setAttribute("aria-hidden", "true");
  }

  function clearPreviewGateTimer() {
    if (state.previewGateTimer) {
      window.clearTimeout(state.previewGateTimer);
      state.previewGateTimer = null;
    }
  }

  function showToast(message) {
    const toast = document.querySelector("#siteToast");
    if (!toast) {
      return;
    }

    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timeoutId);
    showToast.timeoutId = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2600);
  }

  function toggleFavorite(itemId) {
    if (!state.currentUser) {
      showToast("Connectez-vous pour gerer vos favoris.");
      return;
    }

    const users = [...state.users];
    const index = users.findIndex((user) => user.id === state.currentUser.id);
    if (index === -1) {
      return;
    }

    const favorites = new Set(users[index].favorites || []);
    if (favorites.has(itemId)) {
      favorites.delete(itemId);
      showToast("Favori retire.");
    } else {
      favorites.add(itemId);
      showToast("Ajoute aux favoris.");
    }

    users[index] = {
      ...users[index],
      favorites: Array.from(favorites)
    };

    saveUsers(users);
    setCurrentUser(users[index].id);
    renderSiteChrome();
    renderPage();
  }

  function addHistory(itemId) {
    if (!state.currentUser) {
      return;
    }

    const users = [...state.users];
    const index = users.findIndex((user) => user.id === state.currentUser.id);
    if (index === -1) {
      return;
    }

    const nextHistory = (users[index].history || []).filter((entry) => entry.id !== itemId);
    nextHistory.unshift({
      id: itemId,
      at: new Date().toISOString()
    });

    users[index] = {
      ...users[index],
      history: nextHistory.slice(0, 20)
    };

    saveUsers(users);
    setCurrentUser(users[index].id);
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function sendWelcomeEmail(user) {
    fetch("/api/welcome", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email
      })
    }).catch(() => {
      // The front-end account still works even when the email provider is not configured yet.
    });
  }
})();
