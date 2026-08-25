# Le Marché Bleu — Website

Static marketing site for [marchebleutx.com](https://marchebleutx.com), replacing the retired Shopify store. Built with [Astro](https://astro.build), designed for free-tier Netlify hosting. No e-commerce: the single "Order Ahead" button links out to DoorDash, and the catering form emails inquiries to staff — no payment is processed on-site.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Where things live

- `src/config.ts` — **all business info** (address, phone, hours, socials, DoorDash URL, announcement bar). Edit here; it propagates site-wide.
- `src/menu-data.ts` — the café menu (sections, items, prices).
- `src/layouts/Base.astro` — shared head/SEO, header nav, footer.
- `src/pages/` — one file per page (`index`, `menu`, `catering`, `about` = Visit, `contact`, plus `catering/merci` form-success page). The market/wine content lives on the home page tiles and Visit page; there is no standalone market page (a redirect in `netlify.toml` sends `/market/*` home).
- `src/assets/` — logos and photography (from `G:\My Drive\Marketing`).
- `public/fonts/` — self-hosted licensed brand fonts (Nesans, Poppins).
- `netlify.toml` — build settings, caching, and a **noindex header that must be removed at DNS cutover**.

## Deploying to Netlify

1. Push this repo to GitHub (or drag-and-drop `dist/` in the Netlify UI).
2. New site from Git → build command `npm run build`, publish dir `dist` (already in `netlify.toml`).
3. **Catering form**: Netlify detects the `catering` form automatically on first deploy. In the Netlify dashboard go to **Forms → Notifications** and add an email notification to **marchebleutx@gmail.com** (confirmed by owner).
4. Send a test submission and confirm the email arrives (definition of done).
5. At launch: point DNS for marchebleutx.com at Netlify, then **remove the `X-Robots-Tag = "noindex"` block** from `netlify.toml`.

## Content notes

- **Hours** (owner-confirmed): Mon–Thu 7 am–9 pm, Fri–Sat 8 am–10 pm, Sun 8 am–8 pm.
- **Menu**: mirrors the live DoorDash listing (items and descriptions, scraped 2026-08-24). Per owner, no prices are shown on the site — pricing lives on DoorDash. When the DoorDash menu changes, update `src/menu-data.ts`.
- **Zip code**: site footer said 76109; some listings say 76107. Using 76109.
- After cutover: cancel the Shopify subscription and remove the noindex header in `netlify.toml`.
