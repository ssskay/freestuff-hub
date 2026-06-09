/**
 * Single source of hub configuration.
 *
 * The umbrella landing page over the per-school sites. Editing the SCHOOLS
 * array (and nothing else) is all it takes to list a newly launched campus.
 */

/** Hub branding. */
export const SITE = {
  name: 'Free Stuff on Campus',
  tagline: 'The free perks your tuition already paid for — verified, no agenda, one catalog per school.',
  /** Apex origin; drives canonical + sitemap once the domain is attached. */
  url: 'https://campusfreebies.com',
  /** Template repo for the "bring this to your campus" CTA. */
  template: 'https://github.com/ssskay/freestuff-template',
  /**
   * Canonical tip jar, owned here rather than duplicated per school. Fill in any
   * handle you have and it lights up on its own — leave a value '' and it stays
   * hidden (nothing fake ships). Keep .github/FUNDING.yml in sync.
   */
  funding: {
    githubSponsors: 'ssskay', // live: github.com/sponsors/ssskay
    kofi: '', // -> handle after creating ko-fi.com/<handle>
    buyMeACoffee: '', // -> handle after creating buymeacoffee.com/<handle>
  },
} as const;

/**
 * Live school sites. Adding a campus is a single entry: name, monogram, and the
 * subdomain it deploys to. Optional `accent` tints the card monogram; omit it to
 * fall back to the hub green.
 */
export const SCHOOLS: Array<{
  name: string;
  monogram: string;
  url: string;
  accent?: string;
}> = [
  { name: 'Dartmouth', monogram: 'D', url: 'https://dartmouth.campusfreebies.com', accent: '#005529' },
  { name: 'Carnegie Mellon', monogram: 'CMU', url: 'https://cmu.campusfreebies.com', accent: '#c41330' },
];

/**
 * The single tip-jar link, or null if none configured. Prefers a coffee link
 * (warmer for a small community catalog) over the formal Sponsor link, but
 * shows whichever exists.
 */
export function fundingLink(): { href: string; label: string } | null {
  const f = SITE.funding;
  if (f.kofi) return { href: `https://ko-fi.com/${f.kofi}`, label: '☕ Buy us a coffee' };
  if (f.buyMeACoffee)
    return { href: `https://buymeacoffee.com/${f.buyMeACoffee}`, label: '☕ Buy us a coffee' };
  if (f.githubSponsors)
    return { href: `https://github.com/sponsors/${f.githubSponsors}`, label: '♥ Sponsor this project' };
  return null;
}
