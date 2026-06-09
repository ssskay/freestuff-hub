# Growth playbook — Free Stuff on Campus

**Goal:** get it seen (good on my name) and maybe a non-empty tip jar. **No ads, ever.**
Optimize for least effort. Check a box when it's done; nothing here has a deadline.

The single highest-value chain: **publish the write-up → Show HN the template → everything
else amplifies it.** If you only do one thing, do that.

---

## This week (highest leverage)

- [ ] **Publish the write-up.** `docs/writeup-agent-maintained-catalog.md` → your personal
  site / dev.to / Medium. Read it in your own voice first; change anything that isn't you.
- [ ] **Before publishing, make "agent-maintained" literally true:** activate the weekly
  verifier by adding the `ANTHROPIC_API_KEY` GitHub secret (the one open TODO). Or soften
  that paragraph if you'd rather not yet. Don't claim it runs if it isn't running.
- [ ] **Show HN the _template_, not the catalog.** (Catalogs get flagged as "curated lists";
  a forkable tool is what Show HN is for.) Title + first comment below.
- [ ] **Post in r/Dartmouth and r/cmu as a resource** — contribute to an existing thread
  first, link second. Template below. Read each sub's sidebar rules.
- [ ] **Email the channels that already reach students** — residential life, financial-aid /
  first-gen office, orientation leaders. Template below.

## This month (compounds quietly)

- [ ] **Google Search Console:** submit each subdomain; make page titles match real searches
  ("free printing Dartmouth", "is X free at CMU"). Verify once, then leave it.
- [ ] **Template on-ramp:** one-paragraph "bring it to your campus" in the template README
  so a stranger can fork it without asking you anything.
- [ ] **Pitch the student paper** (*The Dartmouth* / *The Tartan*) as a *story*, not a promo:
  "a student built an agent-maintained catalog of genuinely-free perks."

## Opportunistic (do once, ignore)

- [ ] Ask subreddit mods to add it to the resources **wiki** (don't self-add).
- [ ] Email an academic **librarian** — these land in "student resources" LibGuides and stay.
- [ ] Let known **organizers** share it in class GroupMe/Discord. Don't cold-drop it yourself.

---

## SEO & analytics

**Don't fight UNiDAYS on their turf — take the traffic they can't serve.** UNiDAYS/Student
Beans own *transactional* "student discount [brand]" queries with a giant domain; a small
site won't outrank them there, and those searchers want discounts, which we don't have.
The winnable, on-brand queries are the "actually free" ones they ignore:

- `free [thing] [school]` — "free printing dartmouth", "free adobe cmu", "free transit cmu"
- `is [thing] free for students`, `[thing] free with student id`
- `free stuff for [school] students`, `what's actually free in college`

These are lower-competition and intent-matched (free-seekers, not deal-seekers), and the
catalog is the perfect answer. Moves that compound:

- [ ] **The `/faq` page is the SEO engine** (done — FAQPage structured data). It targets the
  "is it actually free / how is this different from UNiDAYS" long-tail. Add school-specific
  Q&As over time ("Is the CMU transit pass really free?").
- [ ] **Match page titles + H1s to real searches** on each school site (not just the hub).
- [ ] **Structured data is shipped:** WebSite/Organization (home), FAQPage (/faq), Article
  (/story). Validate at [search.google.com/test/rich-results](https://search.google.com/test/rich-results).
- [ ] **Internal links + sitemaps** already exist; keep new pages in the sitemap (automatic).

**Analytics — what to actually use (and the trust trade-off):**
- ✅ **Vercel Web Analytics** — already installed, cookieless, no consent banner, on-brand.
  This is your usage/pageviews. Keep it.
- ✅ **Google Search Console** — this is what "SEO rankings" actually means: the queries
  you rank for, impressions, clicks, position. Free, no cookies on your site, just verify
  each domain (DNS TXT or the Vercel integration). **Do this — it's the real SEO tool.**
- ⚠️ **Google Analytics (GA4)** — be careful. It adds Google tracking/cookies, which cuts
  against the "no ads, no data resold, cookieless" promise that *is* the project. You
  already get pageviews from Vercel and search data from Search Console, so GA mostly adds
  a privacy liability you'd have to disclose. Skip it unless you specifically want Google's
  funnel tooling — and if so, run it in consent/cookieless mode and update the privacy note.

---

## Set up Google Search Console (the real SEO dashboard — do this)

One **Domain property** covers the apex *and every subdomain* (dartmouth., cmu., future
ones) at once. With Cloudflare:

1. [search.google.com/search-console](https://search.google.com/search-console) → Add
   property → **Domain** → enter `campusfreebies.com`.
2. Google shows a TXT record. In **Cloudflare DNS** for campusfreebies.com → Add record →
   Type `TXT`, Name `@`, Content = the `google-site-verification=…` string → Save (DNS only).
3. Back in Search Console → **Verify** (give DNS a few minutes).
4. **Submit sitemaps** (Sitemaps tab), one per origin:
   `https://dartmouth.campusfreebies.com/sitemap-index.xml`,
   `https://cmu.campusfreebies.com/sitemap-index.xml`,
   `https://campusfreebies.com/sitemap-index.xml`.
5. In a few days, the **Performance** tab shows which "free [thing] [school]" queries you
   rank for — that's your feedback loop for what content to add next.

## Get cited by AI (ChatGPT, Perplexity, Google AI Overviews)

Shipped in code: `llms.txt` on every site (tells AI engines what the catalog is); structured
data — FAQPage (`/faq`), Article (`/story`), Organization/WebSite (home); and `robots.txt`
**allows** AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) on purpose —
being cited is the goal, not blocked.

Honest version of what moves it: AI answer engines cite sources they can extract cleanly
*and that authoritative sites link to.* So the #1 AI-visibility lever is the same as SEO —
clean Q&A content plus `.edu` links (below). Keep adding FAQ entries, especially
school-specific ones ("Is the CMU transit pass really free?"). Don't expect overnight
citations; `llms.txt` adoption is still uneven — structured data + authoritative links do
most of the work.

## On-campus = your best backlinks (this is the unlock)

Connecting it to campus and "winning SEO" are **the same lever**: a link from an official
`.edu` page carries enormous authority with Google *and* AI engines — one good `.edu`
backlink beats a hundred random ones. So target campus pages that already have a public
"resources" list and ask to be added (endorsement-as-resource, never paid):

- **Financial-aid / first-gen offices** — they love "everything here is actually free," and
  it reaches exactly the students who need it. Highest value.
- **Library LibGuides** — librarians curate resource guides; one email can land a permanent
  `.edu` link. Underrated, very on-ethos.
- **Residential life / orientation** — the new-student resources packet = `.edu` link +
  recurring traffic every term.
- **Student government / class councils** — they run newsletters and link hubs.
- **Department pages** — if a perk is theirs (the makerspace, the library), they may link back.

Each one is simultaneously a campus integration, an authoritative backlink, and real student
traffic. Physical options (QR flyer in dorms/library, a table at a resource fair, an
orientation slide) work too but are higher-effort and don't carry SEO weight — do them for
users, not rankings.

---

## Copy-paste templates

### Show HN
**Title** (no hype, no exclamation, no company-name username):
> Show HN: An agent-maintained catalog of genuinely-free student perks (fork for your campus)

**First comment:**
> I kept finding out too late about stuff my school already gave me for free — Adobe in
> the labs, a city transit pass, grants you could just apply for — so I started putting it
> in one place. It's now live for two schools (Dartmouth and CMU).
>
> The hard part wasn't the list, it was trust: links rot and perks quietly add fees, and
> the existing student-deal sites are affiliate/ad plays, so you can't tell which entries
> are honest. So there's one rule — an entry only qualifies if a student gets it *without
> paying money* (a discount doesn't count; a discount is an ad with a number on it) — and
> it's enforced by a test in the build. Every entry has a last-verified date, and a verifier
> I built runs on a schedule to flag dead links and stale entries. It can't catch a perk
> that quietly changed terms; that still needs a human. No ads, funded by a tip jar.
>
> The engine is open source and each school is a fork that inherits the same rules, so you
> can stand one up for your own campus. Template: github.com/ssskay/freestuff-template ·
> Live: campusfreebies.com . Honest limits: coverage is uneven and two schools isn't proof
> the pattern travels — the third, run by someone who isn't me, is the real test. Feedback
> welcome.

### Reddit (r/Dartmouth, r/cmu) — only after answering a real thread, or as a standalone if the sub allows
**Title:**
> A running list of stuff that's actually free here (verified, no ads, open source)

**Body:**
> I got tired of finding out about free things a year too late, so I keep a list: [free
> Adobe in the labs / the transit pass / DOC gear rental — swap in 2–3 real ones for the
> school]. Everything on it is genuinely free (no "student discount" stuff), each entry has
> a last-checked date, and there are no ads or affiliate links — it's a non-commercial side
> project and the code's open. Link: [subdomain]. If anything's wrong or missing, tell me
> and I'll fix it — corrections are the whole point.

*Rule of thumb: 9 genuine contributions per 1 self-link. If your account has no history in
the sub, comment helpfully on a few threads first. Cold-dropping a link is how you get
banned and look like the exact spam this project isn't.*

### Institutional outreach email (res life / financial aid / first-gen / orientation)
**Subject:** A free, no-ads resource for students — feel free to share

> Hi [name],
>
> I'm a [Dartmouth/CMU] student and I built a small, free catalog of perks that are
> genuinely free for students here — software, transit, grants, that kind of thing. Every
> entry is verified with a date, there are no ads or affiliate links, and it's a
> non-commercial project. If it's useful, feel free to share it with students or link it
> from your resources page: [subdomain].
>
> Happy to add anything your office offers that students miss. Thanks!
> [Sara]

*This is endorsement-as-resource (they link because it helps students), not advertising.
The line stays clean as long as no money or paid placement is involved.*

---

## Guardrails (these *are* the differentiator — don't cross them)

- **No cold link-drops on Reddit.** Contribute first, link second.
- **No booster/sockpuppet comments** on HN or Reddit, and don't ask friends to. Detection =
  reputational damage worse than no post.
- **Endorsement is clean; paid placement is an ad.** An office linking you because it helps
  students is fine. The moment money, a "partner," or paid placement enters, it's an ad —
  and the no-agenda promise is the whole project.

## What actually moves the needle vs. busywork

- **Real list:** institutional emails + subreddits (for *users*); write-up + Show HN (for
  *your name*). These four are the project.
- **Quiet compounders:** SEO, the template loop, librarians/wikis. Set once, forget.
- **Skip:** chasing every GroupMe/Discord by hand, posting cadence on social, anything that
  needs daily tending. Low yield, high effort — not worth it.
