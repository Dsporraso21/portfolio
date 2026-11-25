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
    var o = p.object || {};
    var src = o.image || p.cover && p.cover.src || "";
    var shot = o.kind === "browser" || !o.image && src;
    return '<span class="work__tile">' + (src ? '<img src="' + esc(src) + '" alt=""' + (shot ? ' class="is-shot"' : '') + '>' : '') + '</span>';
  }
  function home() {
    var h = SITE.hero || {}, st = SITE.status || {};
    var out = '<main id="main" tabindex="-1"' + (firstHome ? ' class="is-first"' : '') + '>';
    if (t(h.title)) {
      out += '<section class="lead side"><p class="intro">' + inl(h.title) + (st.available && t(st.text) ? ' <span>' + inl(st.text) + '.</span>' : '') + '</p></section>';
    }
    out += '<section class="grid side" id="work" aria-label="' + esc(ui("index")) + '">' + LIVE.map((function(p) {
      return '<a class="work" href="#' + esc(p.id) + '">' + tile(p) + '<span class="work__cap"><b>' + plain(p.title) + '</b><span>' + plain(p.kind) + '</span></span></a>';
    })).join("") + '</section></main>' + footer();
    return out;
  }
  function footer() {
    return '<footer class="foot side"><span>© ' + (new Date).getFullYear() + ' ' + esc(SITE.name || "") + '</span>' + '<a href="#information" data-info>' + esc(ui("contact")) + '</a></footer>';
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
    }
  };
  function blockHTML(b) {
    var fn = BLOCKS[b.type];
    if (!fn) return "";
    var tag = b.type === "note" ? "blockquote" : b.type === "finding" ? "aside" : "section";
    var style = b.type === "gallery" ? ' style="--cols:' + Math.min(3, Math.max(1, b.columns || 2)) + '"' : '';
    return '<' + tag + ' class="b b-' + b.type + '"' + style + '>' + fn(b) + '</' + tag + '>';
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
    })).join("") + '</dd></div>' : '') + '</dl></header>' + (p.cover && p.cover.src ? '<div class="case__cover">' + fig({
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
  function copyText(text) {
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
        say(ui("copied"));
      }), fallback);
    } catch (err) {
      fallback();
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
      copyText(hit.getAttribute("data-copy"));
      return;
    }
    if (hit = el.closest("[data-zoom]")) {
      openLightbox(hit.getAttribute("data-zoom"), hit.getAttribute("data-cap"));
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