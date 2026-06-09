# The free stuff your tuition already paid for — and the agent that keeps the list honest

*Draft. Publish under your name on a personal site / dev.to / Medium, then submit
that link to Hacker News (see growth-playbook.md). Read it once in your own voice and
change anything that doesn't sound like you before posting.*

---

When I got to college I kept finding out, always a little too late, how much stuff I
already had access to for free. Not "student discount" free — actually free. The full
Adobe Creative Cloud in the computer labs. A transit pass good on every bus in the
city. Grants you could just apply for. Most of it lived on some department page I only
stumbled onto by accident, usually after I'd already paid for the thing it would have
covered.

The strange part is that none of it is secret. It's just scattered. Forty offices each
publish their own perk on their own page, and there's no one whose job it is to put
them in one place. So I started doing that — first for Dartmouth, then for Carnegie
Mellon. There's now a small, plain site for each school.

The list itself turned out to be the easy part. The part that actually matters, and the
only part that's hard, is trust.

## A list of free things is mostly a trust problem

Two things break a catalog like this. Links rot, and perks quietly change. A program
that was free last year adds a fee; a page moves; a club that "anyone can join"
turns out to want twenty dollars. The moment a student gets burned by one wrong
entry, the whole list is worthless to them — they go back to asking around.

There are already sites in this space, the student-deal aggregators. But look at how
they're built: they make money when you buy something. The "deal" is a customer-
acquisition channel that a brand paid to put in front of you. That's a fine business,
but it means the list has an agenda, and you can never fully tell which entries are
honest and which are someone's marketing.

So the entire design goal became: be the one list a student can actually believe.
Everything else followed from that.

## The one rule

A listing earns a spot only if a student can get the thing **without paying money.**

That sounds obvious until you apply it. The CMU Explorers Club looked like a perfect
entry — student-run, gear room, weekend trips. Then you read the fine print: twenty
dollars a year. That's not free, so it's out. A discounted Zipcar rate? A discount is
not free; it's an ad with a number on it. Out. Lead with the free part of something
mixed (the DOC gear rental at Dartmouth is genuinely free; the multi-day break trips
are subsidized, so the entry says exactly that).

One rule — *does a student pay money?* — is the whole editorial policy. It's written
down as a rubric, and there's a test in the build that fails if a "$20/year membership"
ever sneaks in again. No ads. No paid placement. No affiliate links. The absence of an
agenda isn't a marketing line; it's enforced in code.

## Verified, with a date — and an agent

Every entry carries a last-verified date, out in the open. If something hasn't been
checked in a while, you can see that and judge for yourself.

Keeping those dates honest by hand doesn't scale, so I built a verifier that runs on a
schedule. It re-fetches each link, flags the ones that broke, and surfaces entries
whose verified date is going stale so a human knows where to look. I want to be
straight about its limits: a script can tell you a link is dead, but it can't tell you a
real-world perk quietly added a fee last semester. That judgment still needs a person.
The agent narrows where that person has to look from "all of it" to "these five."
That's the honest version of "agent-maintained" — not magic, just leverage.

## Built to be copied

None of this is Dartmouth-specific. The engine is open source, and each school is a
fork that inherits the same rubric, the same verifier, and the same no-ads rule. Adding
a campus is editing one config file and a list of perks. Two schools are live now;
anyone can stand up their own.

That's deliberate. The interesting thing here isn't my particular list — it's the
pattern: a trusted, agent-maintained catalog that anyone can run for their own
community, with the trust rules baked in so a fork can't accidentally turn into an ad
network.

## How it's paid for

It isn't, really, and that's the point. There's a tip jar — GitHub Sponsors, a "buy us
a coffee" link — and nothing else. No ads, ever, because the first ad is the moment a
student can't tell whether an entry is honest. If it covers the domain, great. If it
covers a coffee, also great. The funding model has to match the promise, or the
promise is a lie.

## What it gets wrong

Plenty. Coverage is uneven — I find perks the way everyone does, by accident, so the
list is a floor, not a ceiling. The verifier catches dead links, not changed terms.
"Free with a mandatory fee already in your tuition" is a genuinely blurry category I'm
still drawing lines around. And two schools is not proof the pattern travels; the third,
run by someone who isn't me, is the real test.

But it's published, it's honest about its own limits, and it's useful to the students
using it right now. For a thing that started as me being annoyed I'd paid for software
the lab already had, that's enough — and the idea underneath it, a catalog you can
trust because trust is the only feature, seems worth writing down.

---

*Free Stuff on Campus — [campusfreebies.com](https://campusfreebies.com). Open
template: [github.com/ssskay/freestuff-template](https://github.com/ssskay/freestuff-template).*
