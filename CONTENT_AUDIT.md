# Content Audit — Dr. Yashasve Dermatology Website

**Audit date:** 2026-04-19
**Scope:** All page, section, and content constants (`constants.tsx`, `pages/`, `sections/`).
**Auditor perspective:** Senior medical content strategist.
**Revisit when:** Design and development are complete, before production launch.

This document captures every content item that requires action before the site is exposed publicly. It is not a rewrite plan — it is a triaged list of facts to verify, placeholders to replace, and claims to reconcile. Items are grouped by risk tier.

---

## Tier 1 — Launch-blocking

Every item below is already flagged `// PLACEHOLDER` in the source, but is re-flagged here as a hard blocker. Shipping any of these unresolved creates regulatory, legal, or credibility exposure.

### 1. Statutory & contact data — `constants.tsx:6–51` (DOCTOR_PROFILE)

| Field | Line | Issue |
|---|---|---|
| `regNumber: "TSMC-XXXXX"` | 10 | Telangana Medical Council registration number is a statutory disclosure requirement. Currently rendered publicly as a placeholder. |
| `phone: "+91 98765 43210"` | 14 | Fake placeholder sequence — calls will not reach the clinic. |
| `whatsapp: "919876543210"` | 15 | Same fake pattern. |
| `email: "contact@dryashasve.com"` | 16 | Verify domain is registered and mailbox is monitored. |
| `mapLink` | 17 | Coordinates `17.43, 78.53` are a coarse Hyderabad centre point, not Suseela Hospital's actual location. |
| `hours` | 18–22 | Not flagged but generic — must be confirmed with the practice. |

### 2. Credentials — `constants.tsx:24–34`

- **Line 26** `"MD Dermatology, Venereology & Leprosy (Gold Medalist)"` — awarding institution is omitted. Add it.
- **Line 27** `"MBBS, Osmania Medical College, Hyderabad"` — verify year and institution.
- **Line 31** IADVL Life Member — verify current standing and member number.
- **Line 32** CDSI Member — verify.
- **Line 33** `"Awarded Best Paper Presentation at DERMACON 2015"` — single sourced, year-dated claim. If unverifiable, remove. A false specific award is worse than no award.

### 3. Internal contradiction — awards count

- `heroHighlight.value: "15+"`, label `"Awards"` (`constants.tsx:47–48`)
- `memberships` list contains **one named award** (DERMACON 2015)

The hero prominently displays "15+ Awards" while the list shows one. This is the site's most visible credibility problem. **Either document the other 14+, or reduce the claim to what is verifiable.**

### 4. Unverified statistics — `constants.tsx:39–45`

Every stat is a placeholder:
- "8+ Years Exp."
- "5k+ Happy Patients"
- "6,000+ Procedures"
- "30k+ Treatments"

Arithmetic check: 5,000 patients × 6,000 procedures × 30,000 treatments over 8 years ≈ 14 treatments per working day. Plausible but unverified. If practice records cannot substantiate, the numbers must come down.

"Happy Patients" is a marketing phrase without operational definition — change to "Patients Treated" or remove.

### 5. Google rating — `constants.tsx:35–38`

`score: 4.9`, `count: 54` — must match the **live** Google Business Profile on launch day. Any drift creates consumer-protection exposure under Indian advertising standards. Recommend wiring from the real GBP or removing the numeric claim.

### 6. Testimonials — `constants.tsx:720–761`  🚨 **HIGHEST LEGAL RISK**

All five testimonials are fabricated. They are written in first person with realistic Indian names, include specific treatment claims, and are dated to appear fresh. Under the Consumer Protection Act 2019 (India) and IMA advertising guidelines, fabricated medical endorsements can trigger disciplinary action and civil penalties.

**Remediation options:**
- Collect and paste in genuine consented patient reviews, or
- Remove the Testimonials section entirely and link to the live Google reviews widget instead

The current state — fake reviews rendered as real reviews — is **the single biggest launch-blocker on the site.**

### 7. Template content leaking to the public — `constants.tsx:955`

```
answer: "…Replace with real consented patient photos before launch."
```

This literally outputs developer instructions in a user-visible FAQ answer. Fix.

### 8. Gallery before/after photos — `constants.tsx:945–952`

All six entries use the same two stock Unsplash URLs swapped back and forth. Rendering this as clinical before/after results would be misrepresentation of outcomes. Either source real consented patient photos or disable the gallery section pre-launch.

---

## Tier 2 — Review-recommended (MD sign-off)

These items are medically defensible and originally written, but contain specific numbers or brand references that should be confirmed against the clinic's actual practice.

### Medical specifics to verify

| File / service | Claim | Why |
|---|---|---|
| `acne-scars` (line 73) | "4–8 sessions for scarring" | Confirm matches protocol |
| `pigmentation` (line 95) | "high UV exposure in Hyderabad" framing | Verify this is Dr. Yashasve's own framing |
| `hair-loss` (line 124) | "PDGF, VEGF" + centrifuge protocol | Check clinic's actual kit matches the described workflow |
| `laser-hair` (line 173) | "Significant hair reduction (70–90%)" | Verify language matches what the practice discloses to patients |
| `hifu` (lines 367, 371) | "1.5mm, 3mm, 4.5mm depths" + "300–500 energy lines" | Brand-specific to Ulthera-family devices; verify the clinic's actual device matches |
| `cosmelan-peel` (line 400) | "8–12 hour mask dwell time" | Brand-specific to Sesderma; confirm current protocol |
| `skin-boosters` (line 456) | "Profhilo 64mg in 2ml, BAP technique, 5 points per side" | Only valid if the clinic uses **genuine IBSA Profhilo**. IBSA enforces trademarks — do not use the name for generic HA skin-booster treatments. |
| `body-contouring` (line 585) | "20–25% fat reduction per session" | Verify against the actual device manufacturer's claim |
| `iv-therapy` (line 606) | "50–100× higher bioavailability than oral" (vitamin C) | This ratio needs a specific citation — it varies widely with dose compared |
| `allergy-testing` (line 639) | "30–50+ common allergens" | Depends on the panel used (Indian Standard Series, European Baseline, etc.) — verify |

### Philosophy claim — `constants.tsx:23` (PLACEHOLDER-flagged)

> "He specialises in acne scar revision and anti-aging treatments that respect the natural anatomy of the face."

If Dr. Yashasve's actual sub-specialty is different (e.g., medical vs cosmetic focus), this single sentence mis-positions the entire marketing thesis. High-leverage claim — get explicit sign-off.

### WHY_US_CARDS Card 02 — `constants.tsx:808–812`

"Hospital-Grade Safety… standalone clinics cannot match." Technically comparative without naming a competitor, but may be softened to less confrontational phrasing, e.g. "…a level of infrastructure beyond what a standalone clinic can offer."

### HeroKinetic — "Clear skin is not cosmetic"

The hero copy rotates through "medical / personal / serious." A practice that also offers cosmetic services (anti-aging, fillers, skin boosters) using "not cosmetic" as its opening thesis risks reading as internally inconsistent to some visitors. The intent — skin is a medical matter, not vanity — is clear from context, but monitor for confusion. Easy to reword later.

### Process step 04 — `constants.tsx:695`

> "Sustainable, healthy skin without lifelong dependency on medicines."

For chronic conditions (eczema, psoriasis, melasma — all treated here), some patients **will** need long-term medication. The line conflicts with Dr. Yashasve's honest framing elsewhere. Soften to: "…without unnecessary dependency on medicines."

---

## Tier 3 — Audit-approved (no changes needed)

These items passed the audit and are ship-ready once surrounding Tier 1 items are resolved.

- **Service descriptions** (15 services) — medically accurate, honest results language ("manages", "reduces", "improves"), correct Fitzpatrick references (IV–V), correct anatomical terminology (SMAS, BAP, anagen, apoptosis), appropriate contraindications, no "cure" claims anywhere. Of genuinely clinical quality.
- **Indian English conventions** — consistent throughout (centre, colour, characterised, specialises, oedema, programme).
- **CONDITIONS list** (`constants.tsx:840–897`) — eight conditions, medically accurate, correctly mapped to service IDs.
- **FAQs (general)** (`constants.tsx:763–789`) — five items, no overpromising, appropriate "results may vary" disclosures. The consultation-cost FAQ appropriately redirects rather than fabricating a price.
- **TRUST_SIGNALS** (`constants.tsx:792–797`) — four signals, consistent with DOCTOR_PROFILE after the About section stats row was removed.
- **Pre-care / post-care** lists across all services — clinically appropriate (sunscreen emphasis, blood-thinner avoidance, follow-up compliance). Nothing medically questionable.
- **Side-effect disclosures** across all services — honest, not buried.
- **About teaser** (`sections/About.tsx`) — in-voice, no unverifiable claim.

---

## Priority action list

In order of urgency:

1. **Replace or remove `TESTIMONIALS`** (legal/regulatory risk).
2. **Reconcile the "15+ Awards" claim** with documentation or reduce it.
3. **Fill in real `regNumber`, `phone`, `whatsapp`, `email`, `mapLink`, `hours`**.
4. **Get Dr. Yashasve's sign-off on the `philosophy` line** and the credential list.
5. **Verify the brand-specific device/product claims in Tier 2** (HIFU depths, Profhilo, Cosmelan, cryolipolysis percentages).
6. **Replace `GALLERY_ITEMS` with real consented before/after photos**, or disable the Results page gallery.
7. **Wire `googleRating` to the live GBP**, or remove the numeric claim.
8. **Fix the orphan "replace with real consented patient photos" FAQ** at `constants.tsx:955`.

---

## What's not in this audit

- **Code quality / component architecture** — out of scope for a content audit.
- **SEO meta tags, OpenGraph, structured data** — separate audit needed (`/seo-optimize` skill).
- **Accessibility of content** (alt text, reading level) — spot-checked, but a focused WCAG content audit is a separate pass.
- **Image rights / licensing** — all current images are placeholder Unsplash URLs; the final clinic photos must be owned or licensed by the practice.
