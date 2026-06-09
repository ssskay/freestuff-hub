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
  { name: 'Carnegie Mellon', monogram: 'CMU', url: 'https://cmu.campusfreebies.com', accent: '#C8102E' },
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

## Deploy to the apex (Sara's remaining steps)

The repo and build are done. Domain registration + DNS are yours (they need your
Cloudflare/Vercel accounts). `campusfreebies.com` is already registered at
Cloudflare; the two subdomains already point at their own Vercel projects.

1. **Push the repo to GitHub** (gh CLI is not installed here, so this was left local):
   ```bash
   # create an empty repo named e.g. freestuff-hub on github.com/ssskay first, then:
   cd /Users/sarakay/freestuff-hub
   git remote add origin https://github.com/ssskay/freestuff-hub.git
   git push -u origin main
   ```

2. **Create a new Vercel project** for this repo (framework auto-detects as Astro;
   build `npm run build`, output `dist`). Keep it separate from the Dartmouth/CMU
   projects:
   ```bash
   vercel link        # pick/create project "freestuff-hub" under ssskays-projects
   vercel --prod
   ```

3. **Attach the apex domain** to this Vercel project:
   ```bash
   vercel domains add campusfreebies.com freestuff-hub
   vercel domains add www.campusfreebies.com freestuff-hub   # optional www -> apex
   ```

4. **Cloudflare apex DNS.** Add the records Vercel shows for the apex. For a root
   (`@`) record Cloudflare supports CNAME flattening, so:
   - `@` → `cname.vercel-dns.com`  — **DNS only / grey cloud** (not proxied/orange;
     orange breaks Vercel's SSL, same rule as the subdomains).
   - Optional `www` → `cname.vercel-dns.com` (grey) if you added the www domain.

   Once it resolves and Vercel issues the cert, `https://campusfreebies.com` serves
   this hub. The subdomains keep working unchanged.

> Note: this environment's sandbox blocks port-53 DNS — verify resolution with
> `curl https://dns.google/resolve?name=campusfreebies.com` rather than `dig`.

## What is intentionally NOT here

No ads, no analytics cookies (Vercel Analytics is cookieless/aggregate), no
per-school tip jars (the canonical one lives here), no affiliate links.

Not affiliated with, endorsed by, or an official site of any university.
