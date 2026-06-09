import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { SITE, SCHOOLS, fundingLink } from '../src/site.config';

const __dirname = dirname(fileURLToPath(import.meta.url));
const page = (name: string) => readFileSync(join(__dirname, '../src/pages', name), 'utf-8');

describe('SITE config', () => {
  it('has a name, tagline, https url, and template link', () => {
    expect(SITE.name).toBeTruthy();
    expect(SITE.tagline).toBeTruthy();
    expect(SITE.url).toMatch(/^https:\/\//);
    expect(SITE.template).toMatch(/^https:\/\/github\.com\//);
  });
});

describe('SCHOOLS', () => {
  it('every school has a name, monogram, and https url', () => {
    expect(SCHOOLS.length).toBeGreaterThan(0);
    for (const s of SCHOOLS) {
      expect(s.name, 'name').toBeTruthy();
      expect(s.monogram, `monogram on ${s.name}`).toBeTruthy();
      expect(s.url, `url on ${s.name}`).toMatch(/^https:\/\//);
      if (s.accent) expect(s.accent, `accent on ${s.name}`).toMatch(/^#[0-9a-fA-F]{3,6}$/);
    }
  });

  it('school urls and names are unique', () => {
    const dupes = (a: string[]) => a.filter((v, i) => a.indexOf(v) !== i);
    expect(dupes(SCHOOLS.map((s) => s.url))).toEqual([]);
    expect(dupes(SCHOOLS.map((s) => s.name))).toEqual([]);
  });

  it('every school points at a campusfreebies.com subdomain', () => {
    for (const s of SCHOOLS) {
      expect(new URL(s.url).hostname.endsWith('.campusfreebies.com'), s.url).toBe(true);
    }
  });
});

describe('fundingLink()', () => {
  it('returns the GitHub Sponsors link with the current config', () => {
    const tip = fundingLink();
    expect(tip).not.toBeNull();
    expect(tip!.href).toBe('https://github.com/sponsors/ssskay');
    expect(tip!.label).toMatch(/sponsor/i);
  });
});

describe('pages', () => {
  const pages = ['index.astro', 'faq.astro', 'story.astro'];

  it('every page uses the shared Base layout', () => {
    for (const p of pages) expect(page(p), p).toContain('layouts/Base.astro');
  });

  it('every page emits JSON-LD structured data', () => {
    for (const p of pages) expect(page(p), p).toContain('application/ld+json');
  });

  it('the FAQ answers the "is it a discount / how is this different from UNiDAYS" questions', () => {
    const faq = page('faq.astro');
    expect(faq).toContain('FAQPage');
    expect(faq).toMatch(/UNiDAYS/);
    expect(faq).toMatch(/discount is (still|not)/i);
  });

  it('the story is marked up as an Article', () => {
    expect(page('story.astro')).toContain('ogType="article"');
    expect(page('story.astro')).toMatch(/'@type':\s*'Article'/);
  });
});
