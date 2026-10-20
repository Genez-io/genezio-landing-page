(function () {
  "use strict";
  var ARTICLES = [{"id": "GZ-2101", "slug": "what-is-genezio", "cat": "Getting started", "title": "What is Genezio?", "summary": "Genezio shows how AI assistants like ChatGPT and Gemini talk about your brand, and helps you become the brand they recommend."}, {"id": "GZ-2117", "slug": "which-ai-assistants-are-tracked", "cat": "Measurement", "title": "Which AI assistants does Genezio track?", "summary": "ChatGPT, Google AI Overviews and AI Mode, Gemini, Perplexity, Copilot, Claude, Grok, DeepSeek and Meta AI."}, {"id": "GZ-2124", "slug": "how-genezio-collects-data", "cat": "Measurement", "title": "How does Genezio collect its data?", "summary": "It runs realistic, multi-turn conversations with each assistant, written for the people who buy from you."}, {"id": "GZ-2138", "slug": "visibility-vs-recommendation-share", "cat": "Measurement", "title": "What is the difference between visibility and recommendation share?", "summary": "Visibility counts how often an assistant mentions you. Recommendation share counts how often it tells the buyer to choose you."}, {"id": "GZ-2252", "slug": "why-the-last-answer-matters", "cat": "Measurement", "title": "Why does Genezio focus on the last answer in a conversation?", "summary": "Because buyers act on the brand an assistant names at the end of a conversation. We call that brand the last-turn pick."}, {"id": "GZ-2142", "slug": "which-sources-ai-cites", "cat": "Measurement", "title": "How can I see which sources AI relies on for my brand?", "summary": "Genezio records the pages each assistant cites when it answers, so you can see which sources shape what it says about you."}, {"id": "GZ-2156", "slug": "how-fresh-are-the-numbers", "cat": "Measurement", "title": "How fresh are the numbers, and when can I trust a trend?", "summary": "Data arrives continuously, but a baseline younger than two weeks is marked as directional."}, {"id": "GZ-2163", "slug": "how-long-does-onboarding-take", "cat": "Getting started", "title": "How long does onboarding take?", "summary": "Most brands are live within days, guided by a named account manager."}, {"id": "GZ-2179", "slug": "how-is-genezio-priced", "cat": "Plans & billing", "title": "How is Genezio priced?", "summary": "Every plan is custom, scoped around four things: engines, markets, personas and conversation volume."}, {"id": "GZ-2185", "slug": "genezio-for-agencies", "cat": "Plans & billing", "title": "Is there an offer for agencies?", "summary": "Yes. Agency Enterprise adds multi-client workspaces and white-label reports."}, {"id": "GZ-2190", "slug": "security-and-compliance", "cat": "Security & data", "title": "Which security certifications does Genezio hold?", "summary": "SOC 2 Type II, ISO 27001 and CSA STAR Level 1, with GDPR compliance and a signable DPA."}, {"id": "GZ-2204", "slug": "does-genezio-train-on-my-data", "cat": "Security & data", "title": "Does Genezio train AI models on my data?", "summary": "No. Your data is never used to train models, and you can export or delete it whenever you want."}, {"id": "GZ-2211", "slug": "website-analyzer-and-content-analysis", "cat": "Platform", "title": "What do the Website Analyzer and Content Analysis check?", "summary": "Whether AI crawlers can read your pages, and whether your content is easy for an assistant to quote."}, {"id": "GZ-2226", "slug": "what-is-the-content-hub", "cat": "Platform", "title": "What is the Content Hub?", "summary": "Briefs and drafts built from the questions and sources that drive AI answers in your category."}, {"id": "GZ-2233", "slug": "genezio-data-in-your-ai-assistant", "cat": "Platform", "title": "Can I use Genezio data inside my own AI assistant?", "summary": "Yes. The Genezio MCP server brings your data into the AI assistant you already use, read-only."}, {"id": "GZ-2240", "slug": "what-support-is-included", "cat": "Getting started", "title": "What support is included?", "summary": "A named account manager, a dedicated Slack channel, priority help and regular strategy reviews."}];
  var CATEGORIES = ["Getting started", "Measurement", "Platform", "Plans & billing", "Security & data"];
  var REVIEWED = "October 2026";

  /* analytics */
  var sid = (function () {
    var r = 0;
    try { r = crypto.getRandomValues(new Uint32Array(1))[0]; } catch (e) { r = Math.floor(Math.random() * 4294967295); }
    return ((r ^ (Date.now() & 0xffffffff) ^ Math.floor(performance.now() * 1000)) >>> 0).toString(16).padStart(8, "0");
  })();
  var t0 = Date.now();
  function collect(ev) {
    var n = navigator, s = window.screen || {}, d = {
      ua: n.userAgent, webdriver: n.webdriver, lang: n.language,
      langs: n.languages && n.languages.slice(0, 5), platform: n.platform,
      cores: n.hardwareConcurrency, mem: n.deviceMemory,
      screen: [s.width, s.height], view: [window.innerWidth, window.innerHeight],
      vis: document.visibilityState, plugins: n.plugins && n.plugins.length,
      t: Date.now() - t0
    };
    try { d.tz = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch (e) {}
    return fetch("https://genezio.com/api/v1/collect/?e=" + ev + "&sid=" + sid + "&p=" + encodeURIComponent(location.pathname), {
      method: "POST", keepalive: true, mode: "cors", credentials: "omit",
      headers: { "Content-Type": "text/plain" }, body: JSON.stringify(d)
    });
  }
  try {
    collect("pv").then(function (r) { return r.json(); }).then(function (d) {
      if (!d || !d.watch) return;
      [1, 3, 5, 10, 20].forEach(function (sec) {
        setTimeout(function () { collect("hb" + sec).catch(function () {}); }, Math.max(0, sec * 1000 - (Date.now() - t0)));
      });
    }).catch(function () {});
  } catch (e) {}

  /* helpers */
  function h(tag, attrs, kids) {
    var el = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === "text") el.textContent = attrs[k];
      else if (k === "html") el.innerHTML = attrs[k];
      else el.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c) el.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return el;
  }
  function byId(id) { for (var i = 0; i < ARTICLES.length; i++) if (ARTICLES[i].id === id) return ARTICLES[i]; return null; }
  function bySlug(slug) { for (var i = 0; i < ARTICLES.length; i++) if (ARTICLES[i].slug === slug) return ARTICLES[i]; return null; }
  function setMeta(title, desc, path) {
    document.title = title;
    var m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", desc);
    var c = document.querySelector('link[rel="canonical"]');
    if (!c) { c = h("link", { rel: "canonical" }); document.head.appendChild(c); }
    c.setAttribute("href", "https://faq.genezio.com" + path);
  }
  function getJSON(url) { return fetch(url, { credentials: "omit" }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }); }
  function link(a) { return h("a", { href: "/" + a.slug + "/", "data-nav": "1", text: a.title }); }

  /* layout */
  var root = document.getElementById("app");
  function shell(main) {
    root.innerHTML = "";
    root.appendChild(h("header", { class: "top" }, [
      h("div", { class: "wrap bar" }, [
        h("a", { href: "/", "data-nav": "1", class: "brand" }, [h("img", { src: "https://genezio.com/genezio-logo-fav.svg", alt: "", width: "24", height: "24" }), "Genezio ", h("span", { text: "FAQ" })]),
        h("a", { href: "https://genezio.com/contact-sales/", class: "cta", text: "Talk to the team" })
      ])
    ]));
    root.appendChild(h("main", { class: "wrap" }, [main]));
    root.appendChild(h("footer", { class: "wrap foot" }, [
      h("span", { text: "© 2026 Genezio" }),
      h("a", { href: "https://genezio.com/", text: "genezio.com" }),
      h("a", { href: "https://genezio.com/docs/", text: "Docs" }),
      h("a", { href: "https://genezio.com/privacy-policy/", text: "Privacy" })
    ]));
    window.scrollTo(0, 0);
  }

  function home(query) {
    setMeta("Genezio FAQ – Answers about AI visibility and the Genezio platform",
      "Short answers to the questions teams ask most about Genezio: what it tracks, how it measures, pricing, onboarding and security.", "/");
    var list = h("div", { class: "cats" });
    function draw(q) {
      list.innerHTML = "";
      q = (q || "").toLowerCase();
      CATEGORIES.forEach(function (cat) {
        var items = ARTICLES.filter(function (a) {
          return a.cat === cat && (!q || (a.title + " " + a.summary).toLowerCase().indexOf(q) !== -1);
        });
        if (!items.length) return;
        list.appendChild(h("section", { class: "cat" }, [
          h("h2", { text: cat }),
          h("ul", null, items.map(function (a) { return h("li", null, [link(a), h("p", { text: a.summary })]); }))
        ]));
      });
      if (!list.children.length) list.appendChild(h("p", { class: "empty", text: "No answers match your search. Try a shorter word." }));
    }
    var input = h("input", { type: "search", placeholder: "Search the FAQ", "aria-label": "Search the FAQ" });
    input.addEventListener("input", function () { draw(input.value); });
    draw(query);
    shell(h("div", null, [
      h("section", { class: "hero" }, [
        h("h1", { text: "How can we help?" }),
        h("p", { text: "Answers to the questions teams ask most about Genezio and AI visibility." }),
        input
      ]),
      list
    ]));
  }

  function article(a) {
    setMeta(a.title + " – Genezio FAQ", a.summary, "/" + a.slug + "/");
    var body = h("div", { class: "body" }, [h("p", { class: "loading", text: "Loading…" })]);
    var meta = h("p", { class: "meta" });
    var aside = h("aside", { class: "related" });
    shell(h("article", null, [
      h("nav", { class: "crumbs" }, [h("a", { href: "/", "data-nav": "1", text: "FAQ" }), " / ", h("span", { text: a.cat })]),
      h("h1", { text: a.title }),
      h("p", { class: "lead", text: a.summary }),
      body, meta, aside
    ]));
    getJSON("/data/" + a.id.toLowerCase() + ".json").then(function (d) {
      body.innerHTML = "";
      d.body.forEach(function (p) { body.appendChild(h("p", { text: p })); });
      meta.textContent = "Article " + d.id + " · Last reviewed " + d.reviewed;
      var later = window.requestIdleCallback
        ? function (fn) { return window.requestIdleCallback(fn, { timeout: 1000 }); }
        : function (fn) { return setTimeout(fn, 1); };
      setTimeout(function () {
        later(function () {
          getJSON("/data/related/" + a.id.toLowerCase() + ".json").then(function (r) {
            aside.appendChild(h("h2", { text: "Good to know" }));
            aside.appendChild(h("p", { class: "tip", text: r.tip }));
            aside.appendChild(h("h3", { text: "Related questions" }));
            aside.appendChild(h("ul", null, r.related.map(function (id) { var x = byId(id); return x ? h("li", null, [link(x)]) : null; })));
          }).catch(function () {});
        });
      }, 2500);
    }).catch(function () {
      body.innerHTML = "";
      body.appendChild(h("p", { text: "This answer could not be loaded. Please refresh the page." }));
    });
  }

  function notFound() {
    setMeta("Page not found – Genezio FAQ", "This page does not exist.", location.pathname);
    shell(h("div", { class: "hero" }, [h("h1", { text: "Page not found" }), h("p", null, [h("a", { href: "/", "data-nav": "1", text: "Back to all questions" })])]));
  }

  function route() {
    var path = location.pathname.replace(/\/+$/, "/");
    if (path === "/") return home("");
    var a = bySlug(path.replace(/^\/|\/$/g, ""));
    return a ? article(a) : notFound();
  }

  document.addEventListener("click", function (e) {
    var el = e.target.closest && e.target.closest("a[data-nav]");
    if (!el || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    history.pushState(null, "", el.getAttribute("href"));
    route();
  });
  window.addEventListener("popstate", route);
  route();
})();
