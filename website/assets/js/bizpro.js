/* ==========================================================================
   Bizpro static site script (no dependencies)
   Edit BIZPRO_CONFIG below to change contact details site-wide.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Site configuration (PLACEHOLDERS — replace before launch) ---------- */
  var BIZPRO_CONFIG = {
    email: "info@bizpro.com.bd",          // placeholder mailbox on the bizpro.com.bd domain
    phoneDisplay: "+880 1XXX-XXXXXX",     // placeholder
    phoneDial: "+8801000000000",          // placeholder, digits only with country code
    whatsapp: "8801000000000",            // placeholder, digits only, no "+"
    // Optional: a form backend URL (Formspree, Getform, WordPress REST endpoint...).
    // Leave empty to fall back to opening the visitor's email client.
    formEndpoint: ""
  };

  document.documentElement.classList.add("js");

  /* ---------- Icon set (24px, stroke icons unless marked fill) ---------- */
  var I = {
    advisory: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/><path d="M15 8h4v4"/>',
    corporate: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/>',
    realty: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    build: '<path d="M4 21V9l6-4v16"/><path d="M10 21V3h10v18"/><path d="M14 7h2M14 11h2M14 15h2M2 21h20"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    "check-circle": '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    chevron: '<path d="M6 9l6 6 6-6"/>',
    "arrow-up": '<path d="M12 19V5M6 11l6-6 6 6"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    pin: '<path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M21 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    doc: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
    tax: '<path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
    calc: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 6h8v4H8zM8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>',
    audit: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M8 11l2 2 4-4"/>',
    scale: '<path d="M12 3v18M5 21h14M6 7h12M6 7l-3 6a3 3 0 0 0 6 0zM18 7l-3 6a3 3 0 0 0 6 0z"/>',
    bank: '<path d="M3 10l9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 21h18"/>',
    cloud: '<path d="M7 18a5 5 0 1 1 1-9.9A6 6 0 0 1 19 10a4 4 0 0 1-1 8z"/>',
    stamp: '<path d="M9 3h6l-1 8h-4zM5 15h14v4H5zM4 21h16M7 11h10v4H7z"/>',
    percent: '<path d="M19 5L5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>',
    megaphone: '<path d="M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1zM16 8a5 5 0 0 1 0 8M19 5a9 9 0 0 1 0 14"/>',
    handshake: '<path d="M2 12l4-4 4 2 4-2 4 2 4 2"/><path d="M6 8v6l4 4 2-2 2 2 4-4v-4"/>',
    camera: '<path d="M4 7h3l2-3h6l2 3h3v13H4z"/><circle cx="12" cy="13" r="4"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M14 9l2 2"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    hardhat: '<path d="M3 17a9 9 0 0 1 18 0zM10 8V5h4v3M2 17h20v3H2z"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',
    bed: '<path d="M3 18V7M3 13h18v5M21 13a3 3 0 0 0-3-3h-7v3"/><circle cx="7" cy="10" r="1.5"/>',
    area: '<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>',
    lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    close: '<path d="M18 6L6 18M6 6l12 12"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    flag: '<path d="M5 21V4h11l-2 4 2 4H5"/>',
    refresh: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    wallet: '<path d="M3 7a2 2 0 0 1 2-2h13v4"/><path d="M3 7v11a2 2 0 0 0 2 2h15V9H5a2 2 0 0 1-2-2z"/><circle cx="16" cy="14.5" r="1.2"/>',
    blueprint: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h6v12M9 13h12M15 3v10"/>',
    facebook: { fill: true, d: '<path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.2C16.7 2.1 15.6 2 14.4 2 11.8 2 10 3.6 10 6.5v2H7.2V12H10v10h4V12h2.8l.4-3.5z"/>' },
    linkedin: { fill: true, d: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-4.9c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6V21h-4z"/>' },
    youtube: { fill: true, d: '<path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15.1V8.9l5.8 3.1z"/>' },
    whatsapp: { fill: true, d: '<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.7 11.7 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/>' }
  };

  function svg(name) {
    var def = I[name];
    if (!def) return "";
    var fill = typeof def === "object";
    var body = fill ? def.d : def;
    return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' +
      (fill ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"') +
      ">" + body + "</svg>";
  }
  function renderIcons(root) {
    (root || document).querySelectorAll("i[data-icon]").forEach(function (el) {
      var html = svg(el.getAttribute("data-icon"));
      if (html) el.outerHTML = html;
    });
  }
  renderIcons();

  /* ---------- Contact details from config ---------- */
  document.querySelectorAll("[data-bp]").forEach(function (el) {
    var k = el.getAttribute("data-bp");
    if (k === "email") { el.textContent = BIZPRO_CONFIG.email; if (el.tagName === "A") el.href = "mailto:" + BIZPRO_CONFIG.email; }
    if (k === "phone") { el.textContent = BIZPRO_CONFIG.phoneDisplay; if (el.tagName === "A") el.href = "tel:" + BIZPRO_CONFIG.phoneDial; }
    if (k === "whatsapp" && el.tagName === "A") {
      el.href = "https://wa.me/" + BIZPRO_CONFIG.whatsapp + "?text=" + encodeURIComponent("Hello Bizpro, I would like to know more about your services.");
    }
  });
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Header: scrolled state, mobile menu, dropdown ---------- */
  var header = document.querySelector(".header");
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  var toTop = document.querySelector(".to-top");

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("is-scrolled", y > 10);
    if (toTop) toTop.classList.toggle("is-visible", y > 700);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    if (!nav || !toggle) return;
    if (open && header) document.documentElement.style.setProperty("--bp-nav-top", header.getBoundingClientRect().bottom + "px");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.innerHTML = svg(open ? "close" : "menu") + '<span class="sr-only">' + (open ? "Close menu" : "Open menu") + "</span>";
  }
  if (toggle) toggle.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });

  document.querySelectorAll(".nav__item > button.nav__link").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var item = btn.parentElement;
      var open = !item.classList.contains("is-open");
      item.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
    });
  });
  document.addEventListener("click", function (e) {
    document.querySelectorAll(".nav__item.is-open").forEach(function (item) {
      if (!item.contains(e.target) && window.innerWidth > 980) {
        item.classList.remove("is-open");
        var b = item.querySelector("button"); if (b) b.setAttribute("aria-expanded", "false");
      }
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    setMenu(false);
    document.querySelectorAll(".nav__item.is-open").forEach(function (i) { i.classList.remove("is-open"); });
  });
  window.addEventListener("resize", function () { if (window.innerWidth > 980) setMenu(false); });
  if (toTop) toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  /* ---------- Reveal on scroll + animated counters ---------- */
  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = 1600, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.innerHTML = Math.round(target * eased).toLocaleString("en-US") + "<em>" + suffix + "</em>";
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var revealEls = document.querySelectorAll(".reveal, [data-count]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-in");
        if (en.target.hasAttribute("data-count")) countUp(en.target);
        io.unobserve(en.target);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---------- Property listing filter ---------- */
  document.querySelectorAll("[data-filter-group]").forEach(function (group) {
    var targetSel = group.getAttribute("data-filter-group");
    var items = document.querySelectorAll(targetSel + " [data-type]");
    group.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (!chip) return;
      group.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); c.setAttribute("aria-pressed", "false"); });
      chip.classList.add("is-active"); chip.setAttribute("aria-pressed", "true");
      var f = chip.getAttribute("data-filter");
      items.forEach(function (it) {
        it.classList.toggle("is-hidden", f !== "all" && it.getAttribute("data-type") !== f);
      });
    });
  });

  /* ---------- Construction cost estimator (indicative, placeholder rates) ---------- */
  var est = document.getElementById("estimator");
  if (est) {
    // PLACEHOLDER rates in BDT per sq ft — update with current market rates.
    var RATES = { standard: 2800, premium: 3600, luxury: 4800 };
    var TYPE_FACTOR = { residential: 1, commercial: 1.12, mixed: 1.06 };
    var FEE = 0.10; // PLACEHOLDER Bizpro development fee on actual cost
    var fmt = function (n) { return "৳ " + Math.round(n).toLocaleString("en-IN"); };
    var calc = function () {
      var area = parseInt(est.querySelector("#est-area").value, 10);
      var spec = est.querySelector('input[name="spec"]:checked').value;
      var type = est.querySelector("#est-type").value;
      var floors = parseInt(est.querySelector("#est-floors").value, 10);
      est.querySelector("#est-area-out").textContent = area.toLocaleString("en-US") + " sq ft";
      est.querySelector("#est-floors-out").textContent = floors + (floors > 1 ? " floors" : " floor");
      var heightFactor = floors > 6 ? 1.08 : 1; // lift, deeper foundation, fire safety
      var cost = area * RATES[spec] * TYPE_FACTOR[type] * heightFactor;
      var fee = cost * FEE;
      var months = Math.max(10, Math.round(8 + floors * 1.6 + area / 12000));
      est.querySelector("#est-cost").textContent = fmt(cost);
      est.querySelector("#est-fee").textContent = fmt(fee);
      est.querySelector("#est-total").textContent = fmt(cost + fee);
      est.querySelector("#est-months").textContent = "~" + months + " months";
      est.querySelector("#est-rate").textContent = fmt((cost + fee) / area) + " / sq ft";
    };
    est.addEventListener("input", calc);
    est.addEventListener("change", calc);
    calc();
  }

  /* ---------- Forms: validation + submit (endpoint or mailto fallback) ---------- */
  var params = new URLSearchParams(window.location.search);
  document.querySelectorAll("form[data-bp-form]").forEach(function (form) {
    var wingSel = form.querySelector('select[name="wing"]');
    if (wingSel && params.get("wing")) {
      var opt = wingSel.querySelector('option[value="' + params.get("wing").replace(/[^a-z-]/g, "") + '"]');
      if (opt) wingSel.value = opt.value;
    }
    var status = form.querySelector(".form-status");

    function validate() {
      var ok = true;
      form.querySelectorAll("[required]").forEach(function (f) {
        var field = f.closest(".field");
        var valid = f.value.trim() !== "";
        if (valid && f.type === "email") valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.value.trim());
        if (valid && f.type === "tel") valid = /^[+0-9\s-]{8,18}$/.test(f.value.trim());
        if (field) field.classList.toggle("has-error", !valid);
        if (!valid) ok = false;
      });
      return ok;
    }
    form.addEventListener("input", function (e) {
      var field = e.target.closest(".field");
      if (field && field.classList.contains("has-error")) validate();
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (status) { status.className = "form-status"; status.textContent = ""; }
      if (form.querySelector('[name="company_site"]') && form.querySelector('[name="company_site"]').value) return; // honeypot
      if (!validate()) {
        if (status) { status.className = "form-status is-err"; status.textContent = "Please check the highlighted fields."; }
        return;
      }
      var data = new FormData(form);
      data.delete("company_site");
      var subject = form.getAttribute("data-subject") || "Website enquiry";
      if (BIZPRO_CONFIG.formEndpoint) {
        fetch(BIZPRO_CONFIG.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } })
          .then(function (r) { if (!r.ok) throw new Error(r.status); form.reset(); show(true); })
          .catch(function () { show(false); });
      } else {
        var lines = [];
        data.forEach(function (v, k) { lines.push(k.replace(/_/g, " ") + ": " + v); });
        window.location.href = "mailto:" + BIZPRO_CONFIG.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\n"));
        show(true, "Your email app should open with the message ready to send. If it doesn't, write to us at " + BIZPRO_CONFIG.email + ".");
      }
    });
    function show(ok, msg) {
      if (!status) return;
      status.className = "form-status " + (ok ? "is-ok" : "is-err");
      status.textContent = msg || (ok ? "Thank you. A Bizpro advisor will contact you within one business day." : "Sorry, the message could not be sent. Please call or email us directly.");
    }
  });
})();
