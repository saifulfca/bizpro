# Bizpro website (static HTML/CSS/JS)

Public website for **www.bizpro.com.bd**. Plain HTML, CSS and JavaScript, with no build step and no dependencies.
Open `index.html` in a browser to preview it.

## Pages

| File | Content |
|---|---|
| `index.html` | Home: hero, credentials, the four wings, process, stats, listings, testimonials, FAQ |
| `advisory.html` | **Bizpro Advisory**: accounting, QuickBooks, tax, audit support, valuation, feasibility studies |
| `corporate.html` | **Bizpro Corporate**: RJSC registration, licenses, VAT/tax, company secretarial, monthly plans |
| `realty.html` | **Bizpro Realty**: property brokerage, filterable listings, "list your property" form |
| `build.html` | **Bizpro Build**: development partner, open-book comparison, construction cost estimator |
| `about.html` | Mission, values, leadership, trade license credentials |
| `contact.html` | Contact form (pre-selects the wing from `?wing=`), office details, map |
| `privacy.html` | Placeholder privacy policy |

Assets: `assets/css/bizpro.css` (all styles; brand colours are CSS variables at the top), `assets/js/bizpro.js` (icons, menu, animations, listing filter, estimator, forms), `assets/img/` (logos, favicon, social share image).

## Change contact details in one place

Edit the `BIZPRO_CONFIG` block at the top of `assets/js/bizpro.js`:

```js
var BIZPRO_CONFIG = {
  email: "info@bizpro.com.bd",
  phoneDisplay: "+880 1XXX-XXXXXX",
  phoneDial: "+8801000000000",
  whatsapp: "8801000000000",
  formEndpoint: ""   // e.g. a Formspree URL; empty = opens the visitor's email app
};
```

Phone, email and WhatsApp links on every page are filled in from this config. The same placeholder text is also in the HTML so it shows if JavaScript is off; search and replace `+880 1XXX-XXXXXX` to update that too.

**Forms:** a static site cannot send email by itself. With `formEndpoint` empty the form opens the visitor's email app with the message filled in. For direct delivery, create a free form endpoint (for example Formspree or Getform) and paste its URL into `formEndpoint`.

## Deploying

### Preview on GitHub Pages
`.github/workflows/pages.yml` publishes **only this `website/` folder** to GitHub Pages whenever `website/` changes on `main` (or when run manually from the Actions tab). The preview address is `https://saifulfca.github.io/bizpro/`.

Before it can run, GitHub Pages has to be available for the repo. GitHub Free only allows Pages on public repositories; private repositories need GitHub Pro. Then turn it on under **Settings → Pages → Build and deployment → Source: GitHub Actions**.

### Option A (recommended): upload as a static site via cPanel
1. Zip the contents of this `website/` folder (not the folder itself).
2. cPanel → **File Manager** → `public_html` (or the document root of bizpro.com.bd).
3. Upload the zip, then **Extract**. `index.html` must sit directly in the document root.
4. If WordPress is installed in the same folder, its `index.php` may take priority. Either upload to a fresh document root, or put the site in a sub-folder (e.g. `public_html/site/`) and test there first.
5. Enable SSL (cPanel → SSL/TLS Status → AutoSSL) so the site loads on `https://`.

Do **not** upload `../business-model/` or `../brand/` to the web server. The business model is confidential.

### Option B: inside WordPress + Elementor
1. Install a lightweight theme (Hello Elementor) and Elementor.
2. Upload `assets/css/bizpro.css` and `assets/js/bizpro.js` to the media library or the theme folder, and enqueue them (Elementor → Custom Code, or a plugin such as WPCode).
3. For each page, create a WordPress page using the Elementor Canvas template and add an **HTML** widget containing everything between `<main id="main">` and `</main>`. Paste the header and footer markup into an Elementor header/footer template (Elementor Pro) or the theme builder.
4. Update internal links (`advisory.html` → `/advisory/`, etc.).

Option A is quicker and keeps the design exactly as built. Option B makes later text edits possible in the WordPress editor.

## Launch checklist (replace placeholders)

Placeholders are marked in the HTML with `PLACEHOLDER` comments or `[...]` brackets.

- [ ] Phone, WhatsApp number and email (`BIZPRO_CONFIG` + HTML text)
- [ ] Partner names, photos, ICAB / IAB membership numbers (`about.html`)
- [ ] e-TIN and BIN (`about.html`)
- [ ] Stats on the home page (350+ clients is a placeholder)
- [ ] Testimonials: use real, consented quotes or remove the section
- [ ] Property listings and project portfolio photos
- [ ] Monthly plan prices (`corporate.html`) and estimator rates / fee (`RATES`, `FEE` in `bizpro.js`)
- [ ] Social media links (footer `href="#"`)
- [ ] Photos: replace `.ph` placeholder blocks with `<img>` tags (sizes are noted on each placeholder)
- [ ] Privacy policy reviewed
- [ ] Office hours confirmed
