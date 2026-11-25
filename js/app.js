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
  var UI = {
    skip: {
      en: "Skip to content",
      es: "Saltar al contenido"
    },
    info: {
      en: "Information",
      es: "Información"
    },
    close: {
      en: "Close",
      es: "Cerrar"
    },
    langBtn: {
      en: "ES",
      es: "EN"
    },
    langLabel: {
      en: "Cambiar a español",
      es: "Switch to English"
    },
    index: {
      en: "Index",
      es: "Índice"
    },
    next: {
      en: "Next project",
      es: "Siguiente proyecto"
    },
    contact: {
      en: "Contact",
      es: "Contacto"
    },
    copy: {
      en: "copy",
      es: "copiar"
    },
    copied: {
      en: "Email copied",
      es: "Email copiado"
    },
    select: {
      en: "Email selected: press Ctrl/Cmd + C",
      es: "Email seleccionado: pulsa Ctrl/Cmd + C"
    },
    cv: {
      en: "Résumé (PDF)",
      es: "CV (PDF)"
    },
    links: {
      en: "Links",
      es: "Enlaces"
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
    prev: {
      en: "Previous",
      es: "Anterior"
    },
    nextPage: {
      en: "Next",
      es: "Siguiente"
    },
    cover: {
      en: "Cover",
      es: "Portada"
    },
    backCover: {
      en: "Back cover",
      es: "Contraportada"
    },
    pages: {
      en: "Pages",
      es: "Páginas"
    },
    pause: {
      en: "Pause",
      es: "Pausar"
    },
    play: {
      en: "Play",
      es: "Reproducir"
    },
    low: {
      en: "Low",
      es: "Bajo"
    },
    medium: {
      en: "Medium",
      es: "Medio"
    },
    high: {
      en: "High",
      es: "Alto"
    },
    chosenCap: {
      en: "Chosen",
      es: "Elegida"
    },
    background: {
      en: "Background",
      es: "Fondo"
    },
    showGrid: {
      en: "Show grid",
      es: "Ver retícula"
    },
    hideGrid: {
      en: "Hide grid",
      es: "Ocultar retícula"
    },
    copiedHex: {
      en: "{x} copied",
      es: "{x} copiado"
    },
    editable: {
      en: "Editable sample text",
      es: "Texto de muestra editable"
    },
    page: {
      en: "Page",
      es: "Página"
    },
    device: {
      en: "Device",
      es: "Dispositivo"
    },
    scrollInside: {
      en: "Scroll inside the screen to browse the page",
      es: "Desplázate dentro de la pantalla para recorrer la página"
    },
    openLive: {
      en: "Open the live site",
      es: "Abrir la web en vivo"
    },
    draft: {
      en: "Draft. Only visible with this direct address until draft is set to false.",
      es: "Borrador. Solo se ve con esta dirección directa hasta que pongas draft en false."
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
    return esc(String(s).replace(/\*/g, "")).replace(/`([^`]+)`/g, "<code>$1</code>");
  }
  function plain(v) {
    var s = t(v);
    if (Array.isArray(s)) s = s.join(" ");
    return esc(String(s).replace(/[`*]/g, ""));
  }
  function paras(v, cls) {
    var s = t(v);
    if (!Array.isArray(s)) s = s ? [ s ] : [];
    return s.map((function(p) {
      return "<p" + (cls ? ' class="' + cls + '"' : "") + ">" + inl(p) + "</p>";
    })).join("");
  }
  function extLink(url) {
    return /^https?:\/\//i.test(String(url || ""));
  }
  function calm() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  function header() {
    return '<a class="skip" href="#main" data-skip>' + esc(ui("skip")) + '</a>' + '<header class="top side"><a class="brand" href="#home">' + esc(SITE.name || "") + '<span>' + plain(SITE.role) + '</span></a>' + '<nav aria-label="' + esc(lang === "es" ? "Principal" : "Main") + '">' + '<button type="button" data-lang aria-label="' + esc(ui("langLabel")) + '">' + esc(ui("langBtn")) + '</button>' + '<a href="#information" data-info>' + esc(ui("info")) + '</a>' + '</nav></header>';
  }
  function tile(p) {
    var th = p.thumb || {}, img = th.image || p.cover && p.cover.src || "";
    var media = th.video ? '<video src="' + esc(th.video) + '"' + (img ? ' poster="' + esc(img) + '"' : '') + ' muted loop playsinline preload="metadata" aria-hidden="true"></video>' : img ? '<img src="' + esc(img) + '" alt="" loading="lazy">' : '';
    return '<span class="work__tile"' + (th.video ? ' data-tile-vid' : '') + '>' + media + '</span>';
  }
  function home() {
    var h = SITE.hero || {}, st = SITE.status || {};
    var out = '<main id="main" tabindex="-1"' + (firstHome ? ' class="is-first"' : '') + '>';
    if (t(h.title)) {
      out += '<section class="lead side"><p class="intro">' + inl(h.title) + (st.available && t(st.text) ? ' <span>' + inl(st.text) + '.</span>' : '') + '</p></section>';
    }
    out += '<section class="grid side" id="work" aria-label="' + esc(ui("index")) + '">' + LIVE.map((function(p) {
      return '<a class="work" href="#' + esc(p.id) + '">' + tile(p) + '<span class="work__cap"><b>' + plain(p.title) + '</b><span>' + plain(p.kind) + '</span>' + (t(p.year) ? '<i>' + plain(p.year) + '</i>' : '') + '</span></a>';
    })).join("") + '</section></main>' + footer();
    return out;
  }
  function footer() {
    return '<footer class="foot side"><span>© ' + (new Date).getFullYear() + ' ' + esc(SITE.name || "") + '</span></footer>';
  }
  function sheetHTML() {
    var ab = SITE.about || {}, ct = SITE.contact || {}, ph = SITE.photo || {}, st = SITE.status || {}, tb = SITE.toolbox || {}, tr = SITE.training || {};
    var out = '<div class="sheet__veil" data-close></div><div class="sheet__panel" role="dialog" aria-modal="true" aria-label="' + esc(ui("info")) + '" tabindex="-1">' + '<div class="sheet__bar"><span>' + esc(SITE.name || "") + '</span><button type="button" data-close>' + esc(ui("close")) + '</button></div>';
    if (ph.src) out += '<img class="me" src="' + esc(ph.src) + '" alt="' + plain(ph.alt) + '">';
    out += paras(ab.lead, "bio");
    if (st.available) out += '<p class="status"><i aria-hidden="true"></i>' + inl(st.text) + '</p>';
    if (t(ab.body)) out += '<div class="block prose">' + paras(ab.body) + '</div>';
    out += '<div class="block"><h3>' + esc(ui("contact")) + '</h3><ul class="links">';
    if (ct.email) out += '<li><a href="mailto:' + esc(ct.email) + '" data-mail>' + esc(ct.email) + '</a> <button type="button" class="mute" data-copy="' + esc(ct.email) + '">' + esc(ui("copy")) + '</button></li>';
    (ct.links || []).filter((function(l) {
      return extLink(l.url);
    })).forEach((function(l) {
      out += '<li><a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + inl(l.label) + ' ↗</a></li>';
    }));
    if (t(ct.cv)) out += '<li><a href="' + esc(t(ct.cv)) + '" target="_blank" rel="noopener">' + esc(ui("cv")) + ' ↗</a></li>';
    out += '</ul></div>';
    if (ab.facts && ab.facts.length) {
      out += '<dl class="block facts">' + ab.facts.map((function(f) {
        return '<div><dt>' + inl(f.label) + '</dt><dd>' + inl(f.value) + '</dd></div>';
      })).join("") + '</dl>';
    }
    if (tb.groups && tb.groups.length) {
      out += '<div class="block"><h3>' + inl(tb.title) + '</h3><dl class="facts">' + tb.groups.map((function(g) {
        return '<div><dt>' + inl(g.name) + '</dt><dd>' + (g.items || []).map(plain).join(", ") + '</dd></div>';
      })).join("") + '</dl></div>';
    }
    if (tr.items && tr.items.length) {
      out += '<div class="block"><h3>' + inl(tr.title) + '</h3><ul class="rows">' + tr.items.map((function(it) {
        return '<li>' + inl(it.name) + (t(it.detail) ? '<span>' + inl(it.detail) + '</span>' : '') + '</li>';
      })).join("") + '</ul></div>';
    }
    out += '<p class="sheet__foot">© ' + (new Date).getFullYear() + ' ' + esc(SITE.name || "") + '</p></div>';
    return out;
  }
  function fig(img) {
    if (!img || !img.src) return "";
    var cap = t(img.caption);
    return '<figure class="fig"><button class="fig__frame' + (img.frame === "browser" ? " fig__frame--browser" : "") + '" type="button" data-zoom="' + esc(img.src) + '"' + ' data-cap="' + plain(cap || img.alt) + '" aria-label="' + esc(ui("zoom")) + ": " + plain(img.alt) + '">' + '<img src="' + esc(img.src) + '" alt="' + plain(img.alt) + '" loading="lazy"></button>' + (cap ? '<figcaption>' + inl(cap) + '</figcaption>' : '') + '</figure>';
  }
  var BLOCKS = {
    text: function(b) {
      return '<h2>' + inl(b.title) + '</h2><div class="b__copy">' + paras(b.body) + '</div>';
    },
    split: function(b) {
      return '<h2>' + inl(b.title) + '</h2><div class="b__copy">' + paras(b.body) + '</div>' + fig(b.image);
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
      return '<p class="label">' + esc(ui("finding")) + '</p><h2>' + inl(b.title) + '</h2><div class="b__copy">' + paras(b.body) + '</div>';
    },
    stats: function(b) {
      return (t(b.title) ? '<h2>' + inl(b.title) + '</h2>' : '') + '<dl>' + (b.items || []).map((function(it) {
        return '<div><dd>' + inl(it.value) + '</dd><dt>' + inl(it.label) + '</dt></div>';
      })).join("") + '</dl>' + (t(b.footnote) ? '<p class="foot-note">' + inl(b.footnote) + '</p>' : '');
    },
    table: function(b) {
      var hl = typeof b.highlight === "number" ? b.highlight : -1;
      return (t(b.title) ? '<h2>' + inl(b.title) + '</h2>' : '') + '<div class="scroll"><table><thead><tr>' + (b.columns || []).map((function(c, i) {
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
    },
    video: function(b) {
      return videoHTML(b) + (t(b.caption) ? '<p class="cap">' + inl(b.caption) + '</p>' : '');
    },
    flipbook: function(b) {
      var pages = (b.pages || []).filter((function(pg) {
        return pg && pg.src;
      }));
      var sheets = [];
      for (var i = 0; i < pages.length; i += 2) sheets.push([ pages[i], pages[i + 1] ]);
      var n = sheets.length;
      return (t(b.title) ? '<h2>' + inl(b.title) + '</h2>' : '') + '<div class="book" data-book data-sheets="' + n + '" data-at="0" role="group" aria-roledescription="flipbook" aria-label="' + plain(b.title) + '">' + '<div class="book__stage"><div class="book__spine">' + sheets.map((function(sh, i) {
        return '<div class="sheet3d" style="--i:' + i + ';--n:' + n + '">' + '<div class="face face--front"><img src="' + esc(sh[0].src) + '" alt="' + plain(sh[0].alt) + '" loading="lazy" draggable="false"></div>' + '<div class="face face--back">' + (sh[1] ? '<img src="' + esc(sh[1].src) + '" alt="' + plain(sh[1].alt) + '" loading="lazy" draggable="false">' : '') + '</div></div>';
      })).join("") + '</div>' + '<button type="button" class="book__hit book__hit--prev" data-flip="-1" aria-label="' + esc(ui("prev")) + '"></button>' + '<button type="button" class="book__hit book__hit--next" data-flip="1" aria-label="' + esc(ui("nextPage")) + '"></button></div>' + '<div class="book__bar"><button type="button" data-flip="-1">← ' + esc(ui("prev")) + '</button><span data-book-count></span><button type="button" data-flip="1">' + esc(ui("nextPage")) + ' →</button></div></div>' + (t(b.caption) ? '<p class="cap">' + inl(b.caption) + '</p>' : '');
    },
    map: function(b) {
      var ax = b.axes || {};
      return '<h2>' + inl(b.title) + '</h2><div class="b__copy">' + paras(b.body) + '</div>' + '<div class="map" data-map><div class="map__plane">' + '<span class="map__ax map__ax--top">' + inl(ax.top) + '</span><span class="map__ax map__ax--bottom">' + inl(ax.bottom) + '</span>' + '<span class="map__ax map__ax--left">' + inl(ax.left) + '</span><span class="map__ax map__ax--right">' + inl(ax.right) + '</span>' + (b.points || []).map((function(pt, i) {
        return '<button type="button" class="pt' + (pt.highlight ? ' pt--hl' : '') + (pt.x > 70 ? ' pt--r' : pt.x < 20 ? ' pt--l' : '') + '" style="left:' + (+pt.x || 0) + '%;top:' + (+pt.y || 0) + '%;--d:' + i * 70 + 'ms" data-pt>' + '<i aria-hidden="true"></i><b>' + plain(pt.name) + '</b><span>' + inl(pt.note) + '</span></button>';
      })).join("") + '</div></div>';
    },
    persona: function(b) {
      return '<h2>' + inl(b.title) + '</h2><div class="persona">' + (b.image && b.image.src ? '<img src="' + esc(b.image.src) + '" alt="' + plain(b.image.alt) + '" loading="lazy">' : '') + '<div class="persona__txt"><p class="persona__name">' + plain(b.name) + '</p><p class="persona__role">' + inl(b.role) + '</p>' + '<dl>' + (b.sections || []).map((function(sx) {
        return '<div><dt>' + inl(sx.label) + '</dt><dd>' + inl(sx.text) + '</dd></div>';
      })).join("") + '</dl></div></div>';
    },
    options: function(b) {
      var obj = b.objectives || [];
      var L = [ ui("low"), ui("medium"), ui("high") ];
      return (t(b.title) ? '<h2>' + inl(b.title) + '</h2>' : '') + '<div class="opts">' + (b.items || []).map((function(it) {
        return '<article class="opt' + (it.chosen ? ' opt--chosen' : '') + '" tabindex="0">' + '<p class="opt__label">' + inl(it.label) + (it.chosen ? ' · <b>' + esc(ui("chosenCap")) + '</b>' : '') + '</p>' + '<h3>' + plain(it.name) + '</h3><p class="opt__text">' + inl(it.text) + '</p>' + '<dl class="opt__specs">' + (it.specs || []).map((function(sp) {
          return '<div><dt>' + inl(sp[0]) + '</dt><dd>' + inl(sp[1]) + '</dd></div>';
        })).join("") + '</dl>' + '<ul class="opt__bars">' + obj.map((function(o, i) {
          var lv = Math.max(1, Math.min(3, (it.levels || [])[i] || 1));
          return '<li><span>' + inl(o) + '</span><i style="--v:' + lv / 3 + '" title="' + esc(L[lv - 1]) + '"></i><em>' + esc(L[lv - 1]) + '</em></li>';
        })).join("") + '</ul>' + (t(it.verdict) ? '<p class="opt__verdict">' + inl(it.verdict) + '</p>' : '') + '</article>';
      })).join("") + '</div>' + (t(b.footnote) ? '<p class="foot-note">' + inl(b.footnote) + '</p>' : '');
    },
    cards: function(b) {
      return (t(b.title) ? '<h2>' + inl(b.title) + '</h2>' : '') + '<div class="cards">' + (b.items || []).map((function(it) {
        return '<article class="card">' + (it.image && it.image.src ? '<img src="' + esc(it.image.src) + '" alt="' + plain(it.image.alt) + '" loading="lazy">' : '') + '<h3>' + inl(it.title) + '</h3><p>' + inl(it.text) + '</p></article>';
      })).join("") + '</div>';
    },
    timeline: function(b) {
      var u = Math.max(1, b.units || 10), lab = t(b.unitLabel) || "";
      var head = '<div class="tl__row tl__head"><span></span><div class="tl__track">' + Array.apply(null, Array(u)).map((function(_, i) {
        return '<span>' + esc(lab + (i + 1)) + '</span>';
      })).join("") + '</div></div>';
      var k = 0;
      return '<h2>' + inl(b.title) + '</h2><div class="b__copy">' + paras(b.body) + '</div>' + '<div class="tl" style="--u:' + u + '">' + head + (b.groups || []).map((function(g) {
        return '<p class="tl__group">' + inl(g.name) + '</p>' + (g.rows || []).map((function(r) {
          var from = Math.max(1, r.from || 1), to = Math.max(from, Math.min(u, r.to || from));
          return '<div class="tl__row"><span>' + inl(r.label) + '</span><div class="tl__track"><i style="--a:' + (from - 1) + ';--b:' + to + ';--d:' + k++ * 60 + 'ms"></i></div></div>';
        })).join("");
      })).join("") + '</div>';
    }
  };
  Object.assign(BLOCKS, {
    logo: function(b) {
      var cols = b.cols || 2, rows = b.rows || 3, cells = b.cells || [];
      var bgs = b.backgrounds || [];
      var iso = '<span class="iso" style="--c:' + cols + ';--r:' + rows + '">' + cells.map((function(c, i) {
        return '<i style="grid-column:' + (c[0] + 1) + ';grid-row:' + (c[1] + 1) + ';--d:' + i * 140 + 'ms"></i>';
      })).join("") + '</span>';
      var first = safeHex(bgs[0] && bgs[0].hex, "#000000");
      return '<h2>' + inl(b.title) + '</h2><div class="b__copy">' + paras(b.body) + '</div>' + '<div class="logo" data-logo style="--bg:' + first + ';--fg:' + inkOn(first) + '"><div class="logo__stage">' + '<div class="logo__mark">' + iso + '<span class="logo__word" style="font-family:' + esc(b.font || "monospace") + '">' + plain(b.wordmark) + '</span></div></div>' + '<div class="logo__bar"><div class="logo__bgs" role="group" aria-label="' + esc(ui("background")) + '">' + bgs.map((function(c, i) {
        var hx = safeHex(c.hex, "#000000");
        return '<button type="button" data-logo-bg="' + hx + '" style="--sw:' + hx + '" aria-pressed="' + (i === 0) + '" aria-label="' + plain(c.name) + '"></button>';
      })).join("") + '</div>' + '<button type="button" class="logo__grid-btn" data-logo-grid aria-pressed="false">' + esc(ui("showGrid")) + '</button></div></div>' + (t(b.caption) ? '<p class="cap">' + inl(b.caption) + '</p>' : '');
    },
    palette: function(b) {
      return (t(b.title) ? '<h2>' + inl(b.title) + '</h2>' : '') + '<div class="pal">' + (b.colors || []).map((function(c) {
        var hx = safeHex(c.hex, "#000000");
        return '<button type="button" class="sw" data-copy="' + hx + '" data-copy-msg="' + esc(ui("copiedHex").replace("{x}", hx)) + '" style="--sw:' + hx + ';--on:' + inkOn(hx) + '">' + '<span class="sw__chip"><b>' + plain(c.name) + '</b><em>' + inl(c.role) + '</em></span>' + '<span class="sw__vals"><span>HEX ' + esc(hx.toUpperCase()) + '</span><span>RGB ' + plain(c.rgb) + '</span><span>CMYK ' + plain(c.cmyk) + '</span><span>' + plain(c.pms) + '</span></span></button>';
      })).join("") + '</div>' + (t(b.caption) ? '<p class="cap">' + inl(b.caption) + '</p>' : '');
    },
    type: function(b) {
      return (t(b.title) ? '<h2>' + inl(b.title) + '</h2>' : '') + '<div class="types">' + (b.fonts || []).map((function(f) {
        return '<div class="ty" style="font-family:' + esc(f.family) + ', ui-monospace, monospace"><p class="ty__meta"><b>' + plain(f.name) + '</b> · ' + inl(f.role) + '</p>' + '<p class="ty__sample" contenteditable="true" spellcheck="false" aria-label="' + esc(ui("editable")) + '">' + inl(b.sample) + '</p>' + '<p class="ty__weights">' + (f.weights || []).map((function(w) {
          return '<span style="font-weight:' + (+w.value || 400) + '">' + plain(w.name) + ' ' + (+w.value || 400) + '</span>';
        })).join("") + '</p>' + '<p class="ty__abc">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz 0123456789</p></div>';
      })).join("") + '</div>' + (t(b.caption) ? '<p class="cap">' + inl(b.caption) + '</p>' : '');
    },
    device: function(b) {
      var pages = b.pages || [], sizes = b.sizes || [];
      if (!pages.length || !sizes.length) return "";
      var s0 = sizes[0].key, first = (pages[0].shots || {})[s0] || "";
      return '<h2>' + inl(b.title) + '</h2><div class="b__copy">' + paras(b.body) + '</div>' + '<div class="dev" data-dev data-size="' + esc(s0) + '" data-page="0">' + '<div class="dev__bar"><div class="seg" role="group" aria-label="' + esc(ui("page")) + '">' + pages.map((function(pg, i) {
        return '<button type="button" data-dev-page="' + i + '" data-path="' + esc(pg.path || "") + '" aria-pressed="' + (i === 0) + '">' + inl(pg.label) + '</button>';
      })).join("") + '</div>' + '<div class="seg" role="group" aria-label="' + esc(ui("device")) + '">' + sizes.map((function(sz, i) {
        return '<button type="button" data-dev-size="' + esc(sz.key) + '" aria-pressed="' + (i === 0) + '">' + inl(sz.label) + '</button>';
      })).join("") + '</div></div>' + '<script type="application/json" data-dev-data>' + JSON.stringify(pages.map((function(pg) {
        return pg.shots || {};
      }))).replace(/</g, "\\u003c") + '<\/script>' + '<div class="dev__frame"><div class="dev__chrome" aria-hidden="true"><i></i><i></i><i></i><span data-dev-url>' + esc(pages[0].path || "") + '</span></div>' + '<div class="dev__view" tabindex="0" aria-label="' + esc(ui("scrollInside")) + '"><img src="' + esc(first) + '" alt="' + plain(b.alt) + '" data-dev-img></div></div>' + '<p class="cap">' + esc(ui("scrollInside")) + (b.url && extLink(b.url) ? ' · <a href="' + esc(b.url) + '" target="_blank" rel="noopener">' + esc(ui("openLive")) + ' ↗</a>' : '') + '</p></div>';
    },
    code: function(b) {
      var lines = String(t(b.code) || "").split("\n");
      var notes = b.notes || [];
      var marked = {};
      notes.forEach((function(n, i) {
        marked[n.line] = i + 1;
      }));
      return '<h2>' + inl(b.title) + '</h2><div class="b__copy">' + paras(b.body) + '</div>' + '<div class="code" data-code><pre><code>' + lines.map((function(ln, i) {
        var m = marked[i + 1];
        return '<span class="ln' + (m ? ' ln--m' : '') + '" data-line="' + (i + 1) + '">' + (m ? '<b>' + m + '</b>' : '<b></b>') + esc(ln) + '</span>';
      })).join("") + '</code></pre><ol class="code__notes">' + notes.map((function(n, i) {
        return '<li data-note="' + n.line + '" tabindex="0"><b>' + (i + 1) + '</b><span>' + inl(n.text) + '</span></li>';
      })).join("") + '</ol></div>';
    }
  });
  function safeHex(c, f) {
    return /^#[0-9a-f]{6}$/i.test(String(c || "")) ? c : f;
  }
  function inkOn(hex) {
    var h = String(hex).replace("#", "");
    var r = parseInt(h.substr(0, 2), 16), g = parseInt(h.substr(2, 2), 16), b2 = parseInt(h.substr(4, 2), 16);
    return .299 * r + .587 * g + .114 * b2 > 150 ? "#000000" : "#ffffff";
  }
  function videoHTML(v) {
    return '<div class="vid" data-vid><video src="' + esc(v.video || v.src) + '"' + (v.poster ? ' poster="' + esc(v.poster) + '"' : '') + ' muted loop playsinline preload="metadata" aria-label="' + plain(v.alt) + '"></video>' + '<button type="button" class="vid__btn" data-vid-toggle aria-label="' + esc(ui("pause")) + '">' + esc(ui("pause")) + '</button></div>';
  }
  function blockHTML(b) {
    var fn = BLOCKS[b.type];
    if (!fn) return "";
    var tag = b.type === "note" ? "blockquote" : b.type === "finding" ? "aside" : "section";
    var style = b.type === "gallery" ? ' style="--cols:' + Math.min(3, Math.max(1, b.columns || 2)) + '"' : '';
    return '<' + tag + ' class="b b-' + b.type + (b.crop ? ' is-crop' : '') + '"' + style + '>' + fn(b) + '</' + tag + '>';
  }
  function caseView(p) {
    var idx = LIVE.indexOf(p);
    var next = LIVE.length > 1 ? LIVE[(idx + 1 + LIVE.length) % LIVE.length] : null;
    if (idx < 0) next = LIVE[0] || null;
    var links = (p.links || []).filter((function(l) {
      return extLink(l.url);
    }));
    var meta = (p.meta || []).slice();
    var out = '<main id="main" tabindex="-1"><article class="case side"><header class="case__head">' + '<div class="case__title"><h1>' + plain(p.title) + '</h1>' + (t(p.tagline) ? '<p class="case__tag">' + inl(p.tagline) + '</p>' : '') + '</div>' + '<dl class="case__meta">' + meta.map((function(m) {
      return '<div><dt>' + inl(m.label) + '</dt><dd>' + inl(m.value) + '</dd></div>';
    })).join("") + (t(p.year) ? '<div><dt>' + (lang === "es" ? "Año" : "Year") + '</dt><dd>' + plain(p.year) + '</dd></div>' : '') + (links.length ? '<div><dt>' + esc(ui("links")) + '</dt><dd class="case__links">' + links.map((function(l) {
      return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + inl(l.label) + ' ↗</a>';
    })).join("") + '</dd></div>' : '') + '</dl></header>' + (p.cover && p.cover.video ? '<div class="case__cover">' + videoHTML(p.cover) + '</div>' : p.cover && p.cover.src ? '<div class="case__cover">' + fig({
      src: p.cover.src,
      alt: p.cover.alt,
      frame: p.cover.frame
    }) + '</div>' : '') + '<div class="case__body">';
    var top = '';
    if (p.summary && p.summary.length) top += '<dl class="sum">' + p.summary.map((function(s) {
      return '<div><dt>' + inl(s.label) + '</dt><dd>' + inl(s.text) + '</dd></div>';
    })).join("") + '</dl>';
    if (p.draft) top += '<p class="disclaimer">' + esc(ui("draft")) + '</p>';
    if (t(p.disclaimer)) top += '<p class="disclaimer">' + inl(p.disclaimer) + '</p>';
    if (top) out += '<div>' + top + '</div>';
    out += (p.blocks || []).map(blockHTML).join("") + '</div></article>';
    if (next && next !== p) {
      out += '<a class="next side" href="#' + esc(next.id) + '"><span class="next__txt"><span>' + esc(ui("next")) + '</span><b>' + plain(next.title) + '</b></span>' + tile(next) + '</a>';
    }
    return out + '</main>' + footer();
  }
  var HOME_KEYS = {
    "": 1,
    home: 1,
    work: 1,
    main: 1
  };
  var INFO_KEYS = {
    information: 1,
    about: 1,
    contact: 1
  };
  function route() {
    var key = decodeURIComponent((window.location.hash || "").replace(/^#/, ""));
    if (HOME_KEYS[key]) return {
      view: "home"
    };
    if (INFO_KEYS[key]) return {
      view: currentView || "home",
      info: true
    };
    for (var i = 0; i < ALL.length; i++) if (ALL[i].id === key) return {
      view: key,
      project: ALL[i]
    };
    return {
      view: "home"
    };
  }
  function projectOf(view) {
    for (var i = 0; i < ALL.length; i++) if (ALL[i].id === view) return ALL[i];
    return null;
  }
  function paint(view) {
    var p = projectOf(view);
    app.innerHTML = header() + (p ? caseView(p) : home());
    root.lang = lang;
    document.title = p ? plain(p.title) + " · " + (SITE.name || "") : (SITE.name || "") + " · " + plain(SITE.role);
    if (!p) firstHome = false;
    enhance();
  }
  var io = null;
  function enhance() {
    if (io) io.disconnect();
    io = "IntersectionObserver" in window ? new IntersectionObserver((function(entries) {
      entries.forEach((function(en) {
        var el = en.target;
        if (el.matches("[data-tile-vid]")) {
          var tv = el.querySelector("video");
          if (en.isIntersecting && !calm()) {
            var tp = tv.play();
            if (tp && tp.catch) tp.catch((function() {}));
          } else tv.pause();
        } else if (el.matches("[data-vid]")) {
          var v = el.querySelector("video");
          if (en.isIntersecting && !el.classList.contains("is-paused") && !calm()) {
            var pr = v.play();
            if (pr && pr.catch) pr.catch((function() {
              el.classList.add("is-paused");
              syncVid(el);
            }));
          } else if (!en.isIntersecting) v.pause();
        } else if (en.isIntersecting) {
          el.classList.add("is-in");
          io.unobserve(el);
        }
      }));
    }), {
      threshold: .25
    }) : null;
    Array.prototype.forEach.call(app.querySelectorAll("[data-tile-vid]"), (function(el) {
      if (io) io.observe(el);
    }));
    Array.prototype.forEach.call(app.querySelectorAll("[data-vid]"), (function(el) {
      if (calm()) el.classList.add("is-paused");
      syncVid(el);
      if (io) io.observe(el);
    }));
    Array.prototype.forEach.call(app.querySelectorAll("[data-code] [data-note]"), (function(n) {
      var code = n.closest("[data-code]");
      function on(v) {
        var ln = code.querySelector('.ln[data-line="' + n.getAttribute("data-note") + '"]');
        if (ln) ln.classList.toggle("is-hl", v);
        n.classList.toggle("is-hl", v);
      }
      n.addEventListener("mouseenter", (function() {
        on(true);
      }));
      n.addEventListener("mouseleave", (function() {
        on(false);
      }));
      n.addEventListener("focus", (function() {
        on(true);
      }));
      n.addEventListener("blur", (function() {
        on(false);
      }));
    }));
    Array.prototype.forEach.call(app.querySelectorAll(".tl, .opts, [data-map], [data-logo]"), (function(el) {
      if (io) io.observe(el); else el.classList.add("is-in");
    }));
    Array.prototype.forEach.call(app.querySelectorAll("[data-book]"), (function(bk) {
      setBook(bk, 0);
    }));
  }
  function syncVid(el) {
    var b = el.querySelector("[data-vid-toggle]"), paused = el.classList.contains("is-paused");
    b.textContent = paused ? ui("play") : ui("pause");
    b.setAttribute("aria-label", b.textContent);
  }
  function setBook(bk, at) {
    var n = +bk.getAttribute("data-sheets");
    at = Math.max(0, Math.min(n, at));
    bk.setAttribute("data-at", at);
    Array.prototype.forEach.call(bk.querySelectorAll(".sheet3d"), (function(sh, i) {
      var turned = i < at;
      sh.classList.toggle("is-turned", turned);
      sh.style.zIndex = turned ? i + 1 : n - i;
    }));
    bk.classList.toggle("is-closed", at === 0);
    bk.classList.toggle("is-end", at === n);
    var c = bk.querySelector("[data-book-count]");
    if (c) c.textContent = at === 0 ? ui("cover") : at === n ? ui("backCover") : ui("pages") + " " + at * 2 + "–" + (at * 2 + 1);
    var prevs = bk.querySelectorAll('[data-flip="-1"]'), nexts = bk.querySelectorAll('[data-flip="1"]');
    Array.prototype.forEach.call(prevs, (function(b) {
      b.disabled = at === 0;
    }));
    Array.prototype.forEach.call(nexts, (function(b) {
      b.disabled = at === n;
    }));
  }
  var lastBeforeInfo = "";
  function go(force) {
    var r = route();
    var landing = currentView === null;
    if (r.info) {
      if (landing || force) {
        currentView = r.view;
        paint(r.view);
      }
      openSheet();
      return;
    }
    closeSheet(true);
    var changed = force || r.view !== currentView;
    if (!changed) {
      window.scrollTo({
        top: 0,
        behavior: calm() ? "instant" : "smooth"
      });
      return;
    }
    currentView = r.view;
    function after() {
      if (!force) window.scrollTo(0, 0);
      if (!landing && !force) {
        var m = document.getElementById("main");
        if (m) m.focus({
          preventScroll: true
        });
      }
    }
    if (!landing && !force && document.startViewTransition && !calm()) document.startViewTransition((function() {
      paint(r.view);
      after();
    })); else {
      paint(r.view);
      after();
    }
  }
  var sheet = document.createElement("div");
  sheet.className = "sheet";
  document.body.appendChild(sheet);
  var opener = null;
  function openSheet() {
    sheet.innerHTML = sheetHTML();
    opener = document.activeElement;
    sheet.classList.add("is-open");
    document.body.style.overflow = "hidden";
    app.setAttribute("inert", "");
    var panel = sheet.querySelector(".sheet__panel");
    window.requestAnimationFrame((function() {
      if (panel) panel.focus({
        preventScroll: true
      });
    }));
  }
  function closeSheet(silent) {
    if (!sheet.classList.contains("is-open")) return;
    sheet.classList.remove("is-open");
    document.body.style.overflow = "";
    app.removeAttribute("inert");
    if (!silent && opener && opener.focus) opener.focus({
      preventScroll: true
    });
  }
  function leaveInfo() {
    var back = currentView && currentView !== "home" ? "#" + currentView : "#home";
    if (window.history && history.replaceState) {
      try {
        history.replaceState(null, "", back === "#home" ? window.location.pathname + window.location.search : back);
      } catch (e) {
        window.location.hash = back;
      }
    }
    closeSheet(false);
  }
  document.addEventListener("keydown", (function(e) {
    if (e.key === "Escape" && sheet.classList.contains("is-open")) {
      e.preventDefault();
      leaveInfo();
      return;
    }
    var bk = document.activeElement && document.activeElement.closest ? document.activeElement.closest("[data-book]") : null;
    if (bk && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
      e.preventDefault();
      setBook(bk, +bk.getAttribute("data-at") + (e.key === "ArrowRight" ? 1 : -1));
    }
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
    }), 2400);
  }
  function setDevice(btn) {
    var dv = btn.closest("[data-dev]");
    if (btn.hasAttribute("data-dev-page")) dv.setAttribute("data-page", btn.getAttribute("data-dev-page")); else dv.setAttribute("data-size", btn.getAttribute("data-dev-size"));
    var group = btn.parentNode;
    Array.prototype.forEach.call(group.querySelectorAll("button"), (function(x) {
      x.setAttribute("aria-pressed", String(x === btn));
    }));
    var data = [];
    try {
      data = JSON.parse(dv.querySelector("[data-dev-data]").textContent);
    } catch (e) {}
    var shots = data[+dv.getAttribute("data-page")] || {}, src = shots[dv.getAttribute("data-size")];
    var img = dv.querySelector("[data-dev-img]"), view = dv.querySelector(".dev__view");
    if (src && img.getAttribute("src") !== src) {
      img.setAttribute("src", src);
      view.scrollTop = 0;
    }
    var urlEl = dv.querySelector("[data-dev-url]"), pageBtn = dv.querySelector('[data-dev-page="' + dv.getAttribute("data-page") + '"]');
    if (urlEl && pageBtn) urlEl.textContent = pageBtn.getAttribute("data-path") || urlEl.textContent;
  }
  function copyText(text, msg) {
    function fallback() {
      var el = sheet.querySelector("[data-mail]");
      if (el && window.getSelection) {
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
      say(ui("select"));
    }
    try {
      navigator.clipboard.writeText(text).then((function() {
        say(msg || ui("copied"));
      }), msg ? function() {
        say(text);
      } : fallback);
    } catch (err) {
      if (msg) say(text); else fallback();
    }
  }
  function onClick(e) {
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
          block: "start"
        });
      }
      return;
    }
    if (hit = el.closest("[data-lang]")) {
      lang = lang === "en" ? "es" : "en";
      store.set("sp-lang", lang);
      paint(currentView || "home");
      var again = app.querySelector("[data-lang]");
      if (again) again.focus({
        preventScroll: true
      });
      return;
    }
    if (hit = el.closest("[data-close]")) {
      e.preventDefault();
      leaveInfo();
      return;
    }
    if (hit = el.closest("[data-copy]")) {
      copyText(hit.getAttribute("data-copy"), hit.getAttribute("data-copy-msg"));
      return;
    }
    if (hit = el.closest("[data-logo-bg]")) {
      var lg = hit.closest("[data-logo]"), hx = hit.getAttribute("data-logo-bg");
      lg.style.setProperty("--bg", hx);
      lg.style.setProperty("--fg", inkOn(hx));
      Array.prototype.forEach.call(lg.querySelectorAll("[data-logo-bg]"), (function(x) {
        x.setAttribute("aria-pressed", String(x === hit));
      }));
      return;
    }
    if (hit = el.closest("[data-logo-grid]")) {
      var on = hit.closest("[data-logo]").classList.toggle("is-grid");
      hit.setAttribute("aria-pressed", String(on));
      hit.textContent = on ? ui("hideGrid") : ui("showGrid");
      return;
    }
    if (hit = el.closest("[data-dev-page], [data-dev-size]")) {
      setDevice(hit);
      return;
    }
    if (hit = el.closest("[data-zoom]")) {
      openLightbox(hit.getAttribute("data-zoom"), hit.getAttribute("data-cap"));
      return;
    }
    if (hit = el.closest("[data-flip]")) {
      var bk = hit.closest("[data-book]");
      setBook(bk, +bk.getAttribute("data-at") + +hit.getAttribute("data-flip"));
      return;
    }
    if (hit = el.closest("[data-vid-toggle]")) {
      var box = hit.closest("[data-vid]"), v = box.querySelector("video");
      if (box.classList.toggle("is-paused")) v.pause(); else {
        var pr = v.play();
        if (pr && pr.catch) pr.catch((function() {}));
      }
      syncVid(box);
      return;
    }
    if (hit = el.closest("[data-pt]")) {
      Array.prototype.forEach.call(hit.parentNode.querySelectorAll("[data-pt]"), (function(x) {
        x.classList.toggle("is-on", x === hit && !x.classList.contains("is-on"));
      }));
      return;
    }
    if ((hit = el.closest("[data-info]")) && window.location.hash === "#information") {
      e.preventDefault();
      openSheet();
      return;
    }
    if ((hit = el.closest('a[href^="#"]')) && hit.getAttribute("href") === window.location.hash) {
      e.preventDefault();
      go(false);
    }
  }
  app.addEventListener("click", onClick);
  sheet.addEventListener("click", onClick);
  window.addEventListener("hashchange", (function() {
    go(false);
  }));
  go(false);
})();