"""Write the static site of faq.genezio.com into faq/ (the parent of _src/).

    python3 faq/_src/build.py

content.py holds the articles. The output is plain static files for a Vercel
project with no build step; .vercelignore keeps _src/ out of the deployment.
"""
import hashlib, json, pathlib, sys

sys.path.insert(0, str(pathlib.Path(__file__).parent))
from content import ARTICLES, CATEGORIES

OUT = pathlib.Path(__file__).resolve().parent.parent
SITE = "https://faq.genezio.com"
REVIEWED = "October 2026"

index = [{k: a[k] for k in ("id", "slug", "cat", "title", "summary")} for a in ARTICLES]
by_id = {a["id"]: a for a in ARTICLES}

APP_JS = r"""(function () {
  "use strict";
  var ARTICLES = __INDEX__;
  var CATEGORIES = __CATEGORIES__;
  var REVIEWED = "__REVIEWED__";

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
    c.setAttribute("href", "__SITE__" + path);
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
"""

APP_CSS = """:root{--bg:#fff;--fg:#14141a;--muted:#5b5b6b;--line:#e7e7ee;--accent:#4f3cff;--card:#f7f7fb}
@media (prefers-color-scheme:dark){:root{--bg:#0e0e13;--fg:#ececf2;--muted:#a3a3b5;--line:#26262f;--accent:#8f82ff;--card:#17171f}}
*{box-sizing:border-box}html{-webkit-text-size-adjust:100%}
body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.6 Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif}
a{color:var(--accent);text-decoration:none}a:hover{text-decoration:underline}
.wrap{max-width:820px;margin:0 auto;padding:0 16px}
.top{border-bottom:1px solid var(--line)}.bar{display:flex;justify-content:space-between;align-items:center;height:60px}
.brand{display:flex;gap:8px;align-items:center;color:var(--fg);font-weight:700}.brand span{color:var(--muted);font-weight:500}
.cta{border:1px solid var(--line);border-radius:8px;padding:6px 12px;font-size:14px;color:var(--fg)}
.hero{padding:48px 0 24px}.hero h1{font-size:32px;line-height:1.2;margin:0 0 8px}.hero p{color:var(--muted);margin:0 0 20px}
input[type=search]{width:100%;font:inherit;padding:12px 14px;border:1px solid var(--line);border-radius:10px;background:var(--card);color:var(--fg)}
.cat h2{font-size:14px;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin:32px 0 8px}
.cat ul{list-style:none;margin:0;padding:0}.cat li{padding:14px 0;border-top:1px solid var(--line)}
.cat li a{font-weight:600}.cat li p{margin:4px 0 0;color:var(--muted);font-size:15px}
article{padding:32px 0 48px}article h1{font-size:30px;line-height:1.25;margin:8px 0 12px}
.crumbs{font-size:14px;color:var(--muted)}.lead{font-size:18px;color:var(--muted)}
.meta{font-size:13px;color:var(--muted);margin-top:24px}.loading{color:var(--muted)}
.related{margin-top:32px;padding:20px;border-radius:12px;background:var(--card)}
.related h2{font-size:16px;margin:0 0 6px}.related h3{font-size:14px;margin:16px 0 6px;color:var(--muted)}
.related ul{margin:0;padding-left:18px}.empty{color:var(--muted)}
.foot{display:flex;gap:16px;flex-wrap:wrap;padding:24px 16px 40px;border-top:1px solid var(--line);font-size:14px;color:var(--muted)}
"""

js = (APP_JS.replace("__INDEX__", json.dumps(index, ensure_ascii=False))
      .replace("__CATEGORIES__", json.dumps(CATEGORIES))
      .replace("__REVIEWED__", REVIEWED).replace("__SITE__", SITE))
js_name = "app-" + hashlib.sha256(js.encode()).hexdigest()[:8] + ".js"
css_name = "app-" + hashlib.sha256(APP_CSS.encode()).hexdigest()[:8] + ".css"

INDEX_HTML = f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="https://genezio.com/genezio-logo-fav.svg" type="image/svg+xml" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Genezio FAQ</title>
    <meta name="description" content="Answers to common questions about Genezio." />
    <script type="module" crossorigin src="/assets/{js_name}"></script>
    <link rel="stylesheet" crossorigin href="/assets/{css_name}">
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
"""

KEEP = {"_src", ".vercelignore", ".vercel", ".gitignore", "README.md"}
for f in sorted(OUT.rglob("*"), reverse=True):
    if KEEP & set(f.relative_to(OUT).parts):
        continue
    f.unlink() if f.is_file() else f.rmdir()
(OUT / "assets").mkdir(parents=True, exist_ok=True)
(OUT / "data" / "related").mkdir(parents=True, exist_ok=True)
(OUT / "index.html").write_text(INDEX_HTML)
(OUT / "assets" / js_name).write_text(js)
(OUT / "assets" / css_name).write_text(APP_CSS)
for a in ARTICLES:
    (OUT / "data" / f"{a['id'].lower()}.json").write_text(json.dumps({"id": a["id"], "reviewed": REVIEWED, "body": a["body"]}, ensure_ascii=False, indent=1))
    (OUT / "data" / "related" / f"{a['id'].lower()}.json").write_text(json.dumps({"tip": a["tip"], "related": a["related"]}, ensure_ascii=False, indent=1))
(OUT / "robots.txt").write_text(f"User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n")
urls = [f"{SITE}/"] + [f"{SITE}/{a['slug']}/" for a in ARTICLES]
(OUT / "sitemap.xml").write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + "".join(f"  <url><loc>{u}</loc><lastmod>2026-10-20</lastmod></url>\n" for u in urls) + "</urlset>\n")
(OUT / "vercel.json").write_text(json.dumps({
    "$schema": "https://openapi.vercel.sh/vercel.json",
    "framework": None,
    "trailingSlash": True,
    "rewrites": [{"source": "/((?!assets/|data/).*)", "destination": "/index.html"}],
    "headers": [
        {"source": "/assets/(.*)", "headers": [{"key": "Cache-Control", "value": "public, max-age=31536000, immutable"}]},
        {"source": "/data/(.*)", "headers": [{"key": "X-Robots-Tag", "value": "noindex"}]},
    ],
}, indent=2) + "\n")
print("wrote", OUT, js_name, css_name, len(ARTICLES), "articles")
