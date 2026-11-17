(function() {
  "use strict";
  var SITE = window.SITE || {};
  var ALL = (window.PROJECTS || []).filter((function(p) {
    return p && p.id;
  }));
  var LIVE = ALL.filter((function(p) {
    return !p.draft;
  }));
  var root = document.documentElement;
  var app = document.getElementById("app");
  var fine = window.matchMedia ? window.matchMedia("(hover: hover) and (pointer: fine)") : {
    matches: false
  };
  var store = {
    get: function(k) {
      try {
        return window.localStorage.getItem(k);
      } catch (e) {
        return null;
      }
    },
    set: function(k, v) {
      try {
        window.localStorage.setItem(k, v);
      } catch (e) {}
    }
  };
  var lang = store.get("sp-lang") === "es" ? "es" : "en";
  var firstHome = true;
  var currentView = null;
  var savedTheme = store.get("sp-theme");
  if (savedTheme === "light" || savedTheme === "dark") root.setAttribute("data-theme", savedTheme);
  var UI = {
    skip: {
      en: "Skip to content",
      es: "Saltar al contenido"
    },
    work: {
      en: "Work",
      es: "Proyectos"
    },
    about: {
      en: "About",
      es: "Sobre mí"
    },
    contact: {
      en: "Contact",
      es: "Contacto"
    },
    langBtn: {
      en: "ES",
      es: "EN"
    },
    langLabel: {
      en: "Cambiar a español",
      es: "Switch to English"
    },
    themeLabel: {
      en: "Switch between light and dark",
      es: "Cambiar entre claro y oscuro"
    },
    selected: {
      en: "Selected *work*",
      es: "Proyectos *elegidos*"
    },
    count: {
      en: "{n} case studies",
      es: "{n} casos de estudio"
    },
    seeWork: {
      en: "See my work",
      es: "Ver proyectos"
    },
    view: {
      en: "View case",
      es: "Ver caso"
    },
    open: {
      en: "Open",
      es: "Abrir"
    },
    back: {
      en: "All work",
      es: "Todos los proyectos"
    },
    next: {
      en: "Next project",
      es: "Siguiente proyecto"
    },
    copy: {
      en: "Copy email",
      es: "Copiar email"
    },
    copied: {
      en: "Email copied to the clipboard",
      es: "Email copiado al portapapeles"
    },
    select: {
      en: "Email selected: press Ctrl/Cmd + C",
      es: "Email seleccionado: pulsa Ctrl/Cmd + C"
    },
    write: {
      en: "Write me",
      es: "Escríbeme"
    },
    close: {
      en: "Close",
      es: "Cerrar"
    },
    zoom: {
      en: "Enlarge image",
      es: "Ampliar imagen"
    },
    chosen: {
      en: "chosen",
      es: "elegida"
    },
    finding: {
      en: "Finding",
      es: "Hallazgo"
    },
    student: {
      en: "UOC · Class of 2028",
      es: "UOC · Promoción 2028"
    },
    draft: {
      en: "Draft. Only visible with this direct address until draft is set to false.",
      es: "Borrador. Solo se ve con esta dirección directa hasta que pongas draft en false."
    },
    newTab: {
      en: "opens in a new tab",
      es: "se abre en una pestaña nueva"
    }
  };
  function t(v) {
    if (v == null) return "";
    if (typeof v === "string" || typeof v === "number") return String(v);
    if (Array.isArray(v)) return v;
    if (typeof v === "object") {
      var r = v[lang];
      if (r == null) r = v.en != null ? v.en : v.es;
      return r == null ? "" : r;
    }
    return "";
  }
  function ui(k) {
    return t(UI[k]);
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, (function(c) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[c];
    }));
  }
  function inl(v) {
    var s = t(v);
    if (Array.isArray(s)) s = s.join(" ");
    return esc(s).replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*([^*\n]+)\*/g, "<em>$1</em>");
  }
  function plain(v) {
    var s = t(v);
    if (Array.isArray(s)) s = s.join(" ");
    return esc(String(s).replace(/[`*]/g, ""));
  }
  function paras(v) {
    var s = t(v);
    if (!Array.isArray(s)) s = s ? [ s ] : [];
    return s.map((function(p) {
      return "<p>" + inl(p) + "</p>";
    })).join("");
  }
  function pad(n) {
    return (n < 10 ? "0" : "") + n;
  }
  function safeColor(c, fallback) {
    return /^#[0-9a-f]{3,8}$/i.test(String(c || "")) ? c : fallback;
  }
  function inkOn(hex) {
    var h = String(hex).replace("#", "");
    if (h.length === 3) h = h.replace(/./g, "$&$&");
    var r = parseInt(h.substr(0, 2), 16), g = parseInt(h.substr(2, 2), 16), b = parseInt(h.substr(4, 2), 16);
    return .299 * r + .587 * g + .114 * b > 150 ? "#0b0b0c" : "#ffffff";
  }
  function themeStyle(p) {
    var th = p.theme || {};
    var bg = safeColor(th.bg, "#0b0b0c");
    return "--p-bg:" + bg + ";--p-fg:" + safeColor(th.fg, inkOn(bg));
  }
  function extLink(url) {
    return /^https?:\/\//i.test(String(url || ""));
  }
  function calm() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  var ICON = {
    sun: '<svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon: '<svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>',
    back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>'
  };
  function header(isCase) {
    return '' + '<a class="skip" href="#main" data-skip>' + esc(ui("skip")) + '</a>' + '<header class="top"><div class="wrap top__in">' + '<a class="brand" href="#home"><span class="brand__dot" aria-hidden="true"></span>' + esc(SITE.name || "") + '<span class="brand__role">— ' + plain(SITE.role) + '</span></a>' + '<nav class="nav" aria-label="' + esc(lang === "es" ? "Principal" : "Main") + '">' + '<a class="nav__link nav__link--opt" href="#work">' + esc(ui("work")) + '</a>' + '<a class="nav__link nav__link--opt" href="#about">' + esc(ui("about")) + '</a>' + '<a class="nav__link" href="#contact">' + esc(ui("contact")) + '</a>' + '<button class="chip" type="button" data-lang aria-label="' + esc(ui("langLabel")) + '">' + esc(ui("langBtn")) + '</button>' + '<button class="chip" type="button" data-theme-toggle aria-label="' + esc(ui("themeLabel")) + '">' + ICON.sun + ICON.moon + '</button>' + '</nav>' + '</div>' + (isCase ? '<span class="progress" data-progress aria-hidden="true"></span>' : '') + '</header>';
  }
  function heroHTML() {
    var h = SITE.hero || {}, st = SITE.status || {}, ph = SITE.photo || {}, ct = SITE.contact || {};
    var tags = (h.tags || []).slice(0, 3);
    var out = '<section class="hero wrap' + (firstHome ? " is-first" : "") + '" id="home"><div class="hero__grid">' + '<div class="hero__text">' + (t(h.hello) ? '<p class="hello"><span class="hello__wave" aria-hidden="true"></span>' + inl(h.hello) + '</p>' : '') + '<h1 class="display">' + inl(h.title) + '</h1>' + (t(h.lead) ? '<p class="hero__lead">' + inl(h.lead) + '</p>' : '') + (st.available ? '<p class="status"><span class="status__dot" aria-hidden="true"></span>' + inl(st.text) + '</p>' : '') + '<div class="ctas"><a class="btn btn--solid" href="#work" data-magnet>' + esc(ui("seeWork")) + ' <span class="arrow" style="--rot:90deg" aria-hidden="true">→</span></a>' + (ct.email ? '<button class="btn" type="button" data-copy="' + esc(ct.email) + '" data-magnet>' + esc(ui("copy")) + '</button>' : '') + '</div>' + '</div>';
    if (ph.src) {
      out += '<div class="portrait" data-tilt><div class="portrait__card"><img src="' + esc(ph.src) + '" alt="' + plain(ph.alt) + '" width="1000" height="1250">' + '<p class="portrait__cap"><b>' + esc(SITE.name || "") + '</b><span>' + esc(ui("student")) + '</span></p></div>' + tags.map((function(tg, i) {
        return '<span class="tag tag--' + (i + 1) + '" aria-hidden="true">' + plain(tg) + '</span>';
      })).join("") + '</div>';
    }
    return out + '</div></section>';
  }
  function marqueeHTML() {
    var items = [];
    ((SITE.toolbox || {}).groups || []).forEach((function(g) {
      (g.items || []).forEach((function(it) {
        items.push(plain(it).replace(/\s*\(.*\)$/, ""));
      }));
    }));
    if (!items.length) return "";
    var group = items.map((function(it) {
      return '<span class="marquee__item">' + it + '</span><span class="marquee__sep"></span>';
    })).join("");
    return '<div class="marquee" role="region" aria-label="' + plain((SITE.toolbox || {}).title) + '"><div class="marquee__track">' + '<div class="marquee__group">' + group + '</div><div class="marquee__group" aria-hidden="true">' + group + '</div></div></div>';
  }
  function cardHTML(p, i) {
    var img = p.cover && p.cover.src || p.object && p.object.image || "";
    var vis = img ? '<img src="' + esc(img) + '" alt="" loading="' + (i < 2 ? "eager" : "lazy") + '">' : '<span class="card__blank">' + plain(p.title) + '</span>';
    return '<a class="card" href="#' + esc(p.id) + '" style="--i:' + i + ';' + themeStyle(p) + '" data-cursor="' + esc(ui("view")) + '">' + '<div class="card__text"><div class="card__meta"><span>Nº ' + pad(i + 1) + '</span><span>' + plain(p.kind) + '</span>' + (t(p.year) ? '<span>' + plain(p.year) + '</span>' : '') + '</div>' + '<div><h3 class="card__title">' + plain(p.title) + '</h3>' + (t(p.tagline) ? '<p class="card__tag">' + inl(p.tagline) + '</p>' : '') + '</div>' + '<span class="card__go"><i aria-hidden="true">→</i>' + esc(ui("view")) + '</span></div>' + '<div class="card__vis">' + vis + '</div></a>';
  }
  function home() {
    var ab = SITE.about || {}, tb = SITE.toolbox || {}, tr = SITE.training || {}, ct = SITE.contact || {};
    var out = '<main id="main" tabindex="-1">' + heroHTML() + marqueeHTML();
    if (LIVE.length) {
      out += '<section class="section wrap" id="work"><div class="head rv"><h2 class="display">' + inl(UI.selected) + '</h2>' + '<span class="mono">' + esc(ui("count").replace("{n}", LIVE.length)) + '</span></div>' + '<div class="stack">' + LIVE.map(cardHTML).join("") + '</div></section>';
    }
    out += '<section class="section about" id="about"><div class="wrap">' + '<div class="head rv"><h2 class="display">' + inl(ab.title) + '</h2></div>' + '<div class="about__grid"><div class="rv"><p class="about__lead">' + inl(ab.lead) + '</p><div class="about__body">' + paras(ab.body) + '</div></div>' + '<dl class="facts rv">' + (ab.facts || []).map((function(f) {
      return '<div><dt>' + inl(f.label) + '</dt><dd>' + inl(f.value) + '</dd></div>';
    })).join("") + '</dl></div>';
    if (tb.groups && tb.groups.length) {
      out += '<h3 class="sub rv">' + inl(tb.title) + '</h3><div class="tools rv">' + tb.groups.map((function(g) {
        return '<div><h4>' + inl(g.name) + '</h4><ul>' + (g.items || []).map((function(it) {
          return '<li>' + inl(it) + '</li>';
        })).join("") + '</ul></div>';
      })).join("") + '</div>';
    }
    if (tr.items && tr.items.length) {
      out += '<h3 class="sub rv">' + inl(tr.title) + '</h3><ul class="train rv">' + tr.items.map((function(it) {
        return '<li>' + inl(it.name) + (t(it.detail) ? '<span>' + inl(it.detail) + '</span>' : '') + '</li>';
      })).join("") + '</ul>';
    }
    out += '</div></section>';
    out += '<section class="contact wrap" id="contact"><div class="contact__box">' + '<h2 class="display">' + inl(ct.title) + '</h2>' + (t(ct.lead) ? '<p class="contact__lead">' + inl(ct.lead) + '</p>' : '');
    if (ct.email) {
      out += '<div class="mail"><span class="mail__addr" data-mail>' + esc(ct.email) + '</span>' + '<button class="btn btn--solid" type="button" data-copy="' + esc(ct.email) + '" data-magnet>' + esc(ui("copy")) + '</button>' + '<a class="btn" href="mailto:' + esc(ct.email) + '" data-magnet>' + esc(ui("write")) + '</a></div>';
    }
    var links = (ct.links || []).filter((function(l) {
      return extLink(l.url);
    }));
    if (links.length) {
      out += '<div class="contact__links">' + links.map((function(l) {
        return '<a class="btn" href="' + esc(l.url) + '" target="_blank" rel="noopener" data-magnet>' + inl(l.label) + ' <span class="arrow" style="--rot:-45deg" aria-hidden="true">→</span></a>';
      })).join("") + '</div>';
    }
    out += '</div></section></main>' + footer();
    return out;
  }
  function footer() {
    return '<footer class="foot"><div class="wrap">© ' + (new Date).getFullYear() + ' ' + esc(SITE.name || "") + '</div></footer>';
  }
  function fig(img) {
    if (!img || !img.src) return "";
    var cap = t(img.caption);
    return '<figure class="fig">' + '<button class="fig__frame' + (img.frame === "browser" ? " fig__frame--browser" : "") + '" type="button" data-zoom="' + esc(img.src) + '"' + ' data-cap="' + plain(cap || img.alt) + '" data-cursor="' + esc(ui("open")) + '" aria-label="' + esc(ui("zoom")) + ": " + plain(img.alt) + '">' + '<img src="' + esc(img.src) + '" alt="' + plain(img.alt) + '" loading="lazy"></button>' + (cap ? '<figcaption>' + inl(cap) + '</figcaption>' : '') + '</figure>';
  }
  var BLOCKS = {
    text: function(b) {
      return '<h2>' + inl(b.title) + '</h2><div class="b__copy">' + paras(b.body) + '</div>';
    },
    split: function(b) {
      return '<div class="b-split__txt"><h2>' + inl(b.title) + '</h2><div class="b__copy">' + paras(b.body) + '</div></div>' + fig(b.image);
    },
    image: function(b) {
      return fig(b);
    },
    gallery: function(b) {
      return (b.images || []).map(fig).join("");
    },
    note: function(b) {
      return '<p>' + inl(b.body) + '</p>' + (t(b.by) ? '<small>' + inl(b.by) + '</small>' : '');
    },
    finding: function(b) {
      return '<p class="b-finding__label mono">● ' + esc(ui("finding")) + '</p><h2>' + inl(b.title) + '</h2><div class="b__copy">' + paras(b.body) + '</div>';
    },
    stats: function(b) {
      return (t(b.title) ? '<h2>' + inl(b.title) + '</h2>' : '') + '<dl class="b-stats__grid">' + (b.items || []).map((function(it) {
        return '<div><dd class="b-stats__v">' + inl(it.value) + '</dd><dt class="b-stats__l">' + inl(it.label) + '</dt></div>';
      })).join("") + '</dl>' + (t(b.footnote) ? '<p class="foot-note">' + inl(b.footnote) + '</p>' : '');
    },
    table: function(b) {
      var hl = typeof b.highlight === "number" ? b.highlight : -1;
      return (t(b.title) ? '<h2>' + inl(b.title) + '</h2>' : '') + '<div class="b-table__scroll"><table><thead><tr>' + (b.columns || []).map((function(c, i) {
        return '<th scope="col"' + (i === hl ? ' class="is-hl"' : '') + '>' + inl(c) + (i === hl ? '<span>' + esc(ui("chosen")) + '</span>' : '') + '</th>';
      })).join("") + '</tr></thead><tbody>' + (b.rows || []).map((function(r) {
        return '<tr>' + r.map((function(c, i) {
          return i === 0 ? '<th scope="row">' + inl(c) + '</th>' : '<td' + (i === hl ? ' class="is-hl"' : '') + '>' + inl(c) + '</td>';
        })).join("") + '</tr>';
      })).join("") + '</tbody></table></div>' + (t(b.footnote) ? '<p class="foot-note">' + inl(b.footnote) + '</p>' : '');
    },
    list: function(b) {
      return '<h2>' + inl(b.title) + '</h2><ul>' + (b.items || []).map((function(it) {
        return '<li>' + inl(it) + '</li>';
      })).join("") + '</ul>';
    }
  };
  function blockHTML(b) {
    var fn = BLOCKS[b.type];
    if (!fn) return "";
    var tag = b.type === "note" ? "blockquote" : b.type === "finding" ? "aside" : "section";
    var style = b.type === "gallery" ? ' style="--cols:' + Math.min(3, Math.max(1, b.columns || 2)) + '"' : '';
    return '<' + tag + ' class="b b-' + b.type + ' rv"' + style + '>' + fn(b) + '</' + tag + '>';
  }
  function caseView(p) {
    var idx = LIVE.indexOf(p);
    var next = LIVE.length > 1 ? LIVE[(idx + 1 + LIVE.length) % LIVE.length] : null;
    if (idx < 0) next = LIVE[0] || null;
    var cover = p.cover && p.cover.src ? p.cover : null;
    var links = (p.links || []).filter((function(l) {
      return extLink(l.url);
    }));
    var kicker = (idx >= 0 ? "Nº " + pad(idx + 1) + " — " : "") + plain(p.kind) + (t(p.year) ? " · " + plain(p.year) : "");
    var out = '<main id="main" tabindex="-1"><article class="case" style="' + themeStyle(p) + '">' + '<header class="band' + (cover ? "" : " band--plain") + '"><div class="wrap">' + '<a class="back" href="#work">' + ICON.back + esc(ui("back")) + '</a>' + '<p class="band__kind mono">' + kicker + '</p>' + '<h1>' + plain(p.title) + '</h1>' + (t(p.tagline) ? '<p class="band__tag">' + inl(p.tagline) + '</p>' : '') + '<div class="band__row"><dl class="meta">' + (p.meta || []).map((function(m) {
      return '<div><dt>' + inl(m.label) + '</dt><dd>' + inl(m.value) + '</dd></div>';
    })).join("") + '</dl>' + (links.length ? '<div class="links">' + links.map((function(l) {
      return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener" title="' + esc(ui("newTab")) + '">' + inl(l.label) + ' ↗</a>';
    })).join("") + '</div>' : '') + '</div>' + (cover ? '<div class="band__hero">' + fig({
      src: cover.src,
      alt: cover.alt,
      frame: cover.frame
    }) + '</div>' : '') + '</div></header>';
    out += '<div class="wrap case__body"><div class="case__top">';
    if (p.draft) out += '<p class="disclaimer">' + esc(ui("draft")) + '</p>';
    if (p.summary && p.summary.length) {
      out += '<dl class="sum">' + p.summary.map((function(s) {
        return '<div><dt>' + inl(s.label) + '</dt><dd>' + inl(s.text) + '</dd></div>';
      })).join("") + '</dl>';
    }
    if (t(p.disclaimer)) out += '<p class="disclaimer">' + inl(p.disclaimer) + '</p>';
    out += '</div>' + (p.blocks || []).map(blockHTML).join("") + '</div></article>';
    if (next && next !== p) {
      out += '<a class="next" href="#' + esc(next.id) + '" style="' + themeStyle(next) + '" data-cursor="' + esc(ui("next")) + '"><div class="wrap"><span class="mono">' + esc(ui("next")) + '</span>' + '<strong>' + plain(next.title) + ' <i aria-hidden="true">→</i></strong><em>' + plain(next.tagline) + '</em></div></a>';
    }
    return out + '</main>' + footer();
  }
  var HOME_KEYS = {
    "": 1,
    home: 1,
    work: 1,
    about: 1,
    contact: 1,
    main: 1
  };
  function route() {
    var key = decodeURIComponent((window.location.hash || "").replace(/^#/, ""));
    if (HOME_KEYS[key]) return {
      view: "home",
      anchor: key
    };
    for (var i = 0; i < ALL.length; i++) if (ALL[i].id === key) return {
      view: key,
      project: ALL[i]
    };
    return {
      view: "home",
      anchor: ""
    };
  }
  function paint(r) {
    app.innerHTML = header(!!r.project) + (r.project ? caseView(r.project) : home());
    root.lang = lang;
    document.title = r.project ? plain(r.project.title) + " · " + (SITE.name || "") : (SITE.name || "") + " · " + plain(SITE.role);
    if (!r.project) firstHome = false;
    setCursor(null);
    onScroll();
  }
  function go(force) {
    var r = route();
    var changed = force || r.view !== currentView;
    var landing = currentView === null;
    function after() {
      if (r.project) {
        if (changed && !force) window.scrollTo(0, 0);
      } else if (r.anchor && r.anchor !== "home" && r.anchor !== "main") {
        var el = document.getElementById(r.anchor);
        if (el) el.scrollIntoView({
          behavior: changed || calm() ? "instant" : "smooth",
          block: "start"
        });
      } else if (!force && !landing) {
        window.scrollTo({
          top: 0,
          behavior: changed || calm() ? "instant" : "smooth"
        });
      }
      if (changed && !force && !landing) {
        var m = document.getElementById("main");
        if (m) m.focus({
          preventScroll: true
        });
      }
    }
    if (!changed) {
      after();
      return;
    }
    currentView = r.view;
    if (!landing && !force && document.startViewTransition && !calm()) {
      document.startViewTransition((function() {
        paint(r);
        after();
      }));
    } else {
      paint(r);
      after();
    }
  }
  var ticking = false;
  function onScroll() {
    var bar = app.querySelector("[data-progress]");
    if (!bar) return;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.setProperty("--p", max > 0 ? Math.min(1, window.scrollY / max).toFixed(4) : 0);
  }
  window.addEventListener("scroll", (function() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame((function() {
      ticking = false;
      onScroll();
    }));
  }), {
    passive: true
  });
  var cursor = document.createElement("div");
  cursor.className = "cursor is-hidden";
  cursor.setAttribute("aria-hidden", "true");
  cursor.innerHTML = '<div class="cursor__in"><span></span></div>';
  document.body.appendChild(cursor);
  var cLabel = cursor.querySelector("span");
  var cx = -100, cy = -100, tx = -100, ty = -100, cRunning = false;
  function cLoop() {
    cx += (tx - cx) * .22;
    cy += (ty - cy) * .22;
    cursor.style.transform = "translate(" + cx.toFixed(1) + "px," + cy.toFixed(1) + "px)";
    if (Math.abs(tx - cx) > .2 || Math.abs(ty - cy) > .2) window.requestAnimationFrame(cLoop); else cRunning = false;
  }
  function setCursor(label) {
    if (label) {
      cLabel.textContent = label;
      cursor.classList.add("is-big");
    } else cursor.classList.remove("is-big");
  }
  var tiltEl = null;
  window.addEventListener("pointermove", (function(e) {
    if (e.pointerType !== "mouse" || !fine.matches) return;
    tx = e.clientX;
    ty = e.clientY;
    cursor.classList.remove("is-hidden");
    if (calm()) {
      cx = tx;
      cy = ty;
      cursor.style.transform = "translate(" + cx + "px," + cy + "px)";
    } else if (!cRunning) {
      cRunning = true;
      window.requestAnimationFrame(cLoop);
    }
    var target = e.target.closest ? e.target.closest("[data-cursor]") : null;
    setCursor(target ? target.getAttribute("data-cursor") : null);
    if (calm()) return;
    var tilt = e.target.closest ? e.target.closest("[data-tilt]") : null;
    if (tilt) {
      var r = tilt.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
      tilt.classList.add("is-live");
      tilt.style.setProperty("--rx", (px * 12).toFixed(2) + "deg");
      tilt.style.setProperty("--ry", (-py * 12).toFixed(2) + "deg");
      tilt.style.setProperty("--px", (px * 10).toFixed(2));
      tilt.style.setProperty("--py", (py * 10).toFixed(2));
      tilt.style.setProperty("--gx", ((px + .5) * 100).toFixed(1) + "%");
      tilt.style.setProperty("--gy", ((py + .5) * 100).toFixed(1) + "%");
      tiltEl = tilt;
    } else if (tiltEl) {
      resetTilt();
    }
    var mag = e.target.closest ? e.target.closest("[data-magnet]") : null;
    Array.prototype.forEach.call(app.querySelectorAll("[data-magnet]"), (function(b) {
      if (b !== mag) {
        b.style.removeProperty("--mx");
        b.style.removeProperty("--my");
      }
    }));
    if (mag) {
      var mr = mag.getBoundingClientRect();
      mag.style.setProperty("--mx", ((e.clientX - mr.left - mr.width / 2) * .22).toFixed(1) + "px");
      mag.style.setProperty("--my", ((e.clientY - mr.top - mr.height / 2) * .3).toFixed(1) + "px");
    }
  }), {
    passive: true
  });
  function resetTilt() {
    if (!tiltEl) return;
    tiltEl.classList.remove("is-live");
    [ "--rx", "--ry", "--px", "--py" ].forEach((function(k) {
      tiltEl.style.removeProperty(k);
    }));
    tiltEl = null;
  }
  document.addEventListener("pointerleave", (function() {
    cursor.classList.add("is-hidden");
    resetTilt();
  }));
  document.documentElement.addEventListener("mouseleave", (function() {
    cursor.classList.add("is-hidden");
    resetTilt();
  }));
  var lb = document.createElement("dialog");
  lb.className = "lb";
  lb.innerHTML = '<div class="lb__in" data-lb-close><img alt=""><p></p></div><button class="lb__x" type="button" data-lb-close></button>';
  document.body.appendChild(lb);
  function openLightbox(src, cap) {
    lb.querySelector("img").setAttribute("src", src);
    lb.querySelector("img").setAttribute("alt", cap || "");
    lb.querySelector("p").textContent = cap || "";
    lb.querySelector(".lb__x").textContent = ui("close");
    setCursor(null);
    if (lb.showModal) lb.showModal(); else lb.setAttribute("open", "");
  }
  lb.addEventListener("click", (function(e) {
    if (e.target.closest("[data-lb-close]")) {
      if (lb.close) lb.close(); else lb.removeAttribute("open");
    }
  }));
  var toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  document.body.appendChild(toast);
  var toastTimer = 0;
  function say(msg) {
    toast.textContent = msg;
    toast.classList.add("is-on");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout((function() {
      toast.classList.remove("is-on");
    }), 2600);
  }
  function copyText(text) {
    function fallback() {
      var el = app.querySelector("[data-mail]");
      if (el && window.getSelection) {
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        el.scrollIntoView({
          block: "center",
          behavior: calm() ? "instant" : "smooth"
        });
      }
      say(ui("select"));
    }
    try {
      navigator.clipboard.writeText(text).then((function() {
        say(ui("copied"));
      }), fallback);
    } catch (err) {
      fallback();
    }
  }
  function toggleTheme(btn) {
    var cur = root.getAttribute("data-theme") || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var nextTheme = cur === "dark" ? "light" : "dark";
    function apply() {
      root.setAttribute("data-theme", nextTheme);
      store.set("sp-theme", nextTheme);
    }
    if (!document.startViewTransition || calm()) {
      apply();
      return;
    }
    var r = btn.getBoundingClientRect();
    var x = r.left + r.width / 2, y = r.top + r.height / 2;
    var radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    root.classList.add("vt-theme");
    var vt = document.startViewTransition(apply);
    vt.ready.then((function() {
      root.animate({
        clipPath: [ "circle(0px at " + x + "px " + y + "px)", "circle(" + radius + "px at " + x + "px " + y + "px)" ]
      }, {
        duration: 650,
        easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
        pseudoElement: "::view-transition-new(root)"
      });
    })).catch((function() {}));
    vt.finished.then((function() {
      root.classList.remove("vt-theme");
    }), (function() {
      root.classList.remove("vt-theme");
    }));
  }
  app.addEventListener("click", (function(e) {
    var el = e.target.closest ? e.target : e.target.parentNode;
    var hit;
    if (hit = el.closest("[data-skip]")) {
      e.preventDefault();
      var m = document.getElementById("main");
      if (m) {
        m.focus({
          preventScroll: true
        });
        m.scrollIntoView({
          behavior: "instant",
          block: "start"
        });
      }
      return;
    }
    if (hit = el.closest("[data-lang]")) {
      lang = lang === "en" ? "es" : "en";
      store.set("sp-lang", lang);
      go(true);
      var again = app.querySelector("[data-lang]");
      if (again) again.focus({
        preventScroll: true
      });
      return;
    }
    if (hit = el.closest("[data-theme-toggle]")) {
      toggleTheme(hit);
      return;
    }
    if (hit = el.closest("[data-copy]")) {
      copyText(hit.getAttribute("data-copy"));
      return;
    }
    if (hit = el.closest("[data-zoom]")) {
      openLightbox(hit.getAttribute("data-zoom"), hit.getAttribute("data-cap"));
      return;
    }
    if ((hit = el.closest('a[href^="#"]')) && hit.getAttribute("href") === window.location.hash) {
      e.preventDefault();
      go(false);
    }
  }));
  window.addEventListener("hashchange", (function() {
    go(false);
  }));
  go(false);
})();