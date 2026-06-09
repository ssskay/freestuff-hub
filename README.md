# Free Stuff on Campus — hub

The apex landing page for **campusfreebies.com**: the umbrella over the per-school
catalogs. It lists every live school, points new schools at the open template, and
holds the one canonical tip jar.

It is a single static Astro page that reuses the same `public/tokens.css` and
footer/disclaimer idiom as the school sites, so the platform looks of-a-piece.

## Run / preview locally

```bash
npm install
npm run dev        # http://localhost:4321
# or, to preview the production build:
npm run build      # outputs to dist/ (pure static)
npm run preview
```

`npm run typecheck` runs `astro check` (currently 0 errors).

## Add a new school

Edit **one array** in `src/site.config.ts` — no markup changes:

```ts
export const SCHOOLS = [
  { name: 'Dartmouth', monogram: 'D', url: 'https://dartmouth.campusfreebies.com', accent: '#005529' },
  { name: 'Carnegie Mellon', monogram: 'CMU', url: 'https://cmu.campusfreebies.com', accent: '#c41330' },
  // { name: 'Your School', monogram: 'YS', url: 'https://yourschool.campusfreebies.com' },
];
```

`accent` is optional (tints the card monogram); omit it to use the hub green.

## Tip jar

Config-driven, identical pattern to the Dartmouth repo. `src/site.config.ts` →
`SITE.funding` + `fundingLink()`. GitHub Sponsors (`ssskay`) is live, so the
footer + support section render "♥ Sponsor this project". Fill a `kofi` or
`buyMeACoffee` handle later and it auto-overrides to "☕ Buy us a coffee".
Keep `.github/FUNDING.yml` in sync (powers the repo's native Sponsor button).

## Deploy — live

`https://campusfreebies.com` is live and serving this hub. Wiring, for the record:

- **GitHub:** github.com/ssskay/freestuff-hub (public).
- **Vercel:** project `freestuff-hub` under `ssskays-projects`; `main` auto-deploys.
  Astro auto-detected (build `npm run build`, output `dist`). Separate project from
  the Dartmouth/CMU ones.
- **Apex DNS (Cloudflare):** `A @ → 76.76.21.21`, **DNS only / grey cloud** (not
  proxied/orange — orange breaks Vercel's SSL, same rule as the subdomains). Vercel
  auto-issued the cert once it resolved.

A push to `main` ships. To deploy by hand: `vercel --prod --scope ssskays-projects`.

### Optional, not done
- **`www` redirect.** `www.campusfreebies.com` has no record yet (Cloudflare flags
  this). To add it: `vercel domains add www.campusfreebies.com` then a Cloudflare
  `CNAME www → cname.vercel-dns.com` (grey), or a redirect rule www → apex.
- **Email/anti-spoofing.** No MX/SPF/DMARC on the apex. Only needed if you want to
  receive mail at `@campusfreebies.com`; a DMARC `p=reject` is cheap anti-spoofing
  hygiene if the name ever sends mail.

> Note: a sandboxed shell may block port-53 DNS — verify resolution with
> `curl https://dns.google/resolve?name=campusfreebies.com` rather than `dig`.

## What is intentionally NOT here

No ads, no analytics cookies (Vercel Analytics is cookieless/aggregate), no
per-school tip jars (the canonical one lives here), no affiliate links.

Not affiliated with, endorsed by, or an official site of any university.
