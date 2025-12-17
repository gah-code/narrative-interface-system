# Narrative Interface System - Design System

This document captures the current UI foundations, layout rules, and components used by the landing experience. It is derived from the code in `src/styles/tokens.css`, `src/styles/layout.css`, `src/index.css`, and the section components in `src/components/sections`.

## 1. Foundations

### 1.1 Color tokens (do not change without intent)

Defined in `src/styles/tokens.css`.

- `--color-bg: #020a08` (page background base)
- `--color-surface: #071510` (cards and raised surfaces)
- `--color-accent: #43d38b` (primary accent, buttons/links)
- `--color-accent-soft: #163f2a` (subtle accent backgrounds)
- `--color-text: #f6f8f7` (primary text)
- `--color-muted: #b7c9bd` (muted text)
- `--color-border: #245239` (borders)
- `--color-border-subtle: rgba(180, 225, 198, 0.08)` (header divider)
- `--color-text-primary: var(--color-text)`
- `--color-text-muted: var(--color-muted)`
- `--color-focus-ring: #6af2b5` (focus outline)

### 1.2 Typography tokens

Defined in `src/styles/tokens.css`.

- `--font-sans: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif`
- `--font-size-xs: 0.75rem`
- `--font-size-sm: 0.875rem`
- `--font-size-base: 1rem`
- `--font-size-lg: 1.125rem`
- `--font-size-xl: 1.5rem`
- `--font-size-2xl: 2rem`
- `--font-size-3xl: 2.5rem`

### 1.3 Spacing scale (4px base)

Defined in `src/styles/tokens.css`.

- `--space-1: 0.25rem`
- `--space-2: 0.5rem`
- `--space-3: 0.75rem`
- `--space-4: 1rem`
- `--space-6: 1.5rem`
- `--space-8: 2rem`
- `--space-10: 2.5rem`
- `--space-12: 3rem`
- `--space-16: 4rem`

### 1.4 Radius and shadow

Defined in `src/styles/tokens.css`.

- `--radius-sm: 0.25rem`
- `--radius-md: 0.5rem`
- `--radius-lg: 1rem`
- `--radius-pill: 999px`
- `--shadow-soft: 0 18px 45px rgba(0, 0, 0, 0.35)`

## 2. Global layout rules

Defined in `src/styles/layout.css` and `src/index.css`.

- `box-sizing: border-box` across all elements.
- Full-height root: `html`, `body`, `#root` are 100% height.
- Body background: `radial-gradient(circle at top, #0e2619 0, var(--color-bg) 55%)`.
- Max content width: `960px` inside `.section` and `.page-header-inner`.
- Section spacing: `.section` uses `padding-inline: var(--space-4)` and `padding-block: var(--space-12)`.
- Section separation: `.section + .section` adds a subtle border and `margin-top: var(--space-4)`.

## 3. Accessibility and interaction

- Skip link: `.skip-link` appears on focus and jumps to `#main-content`.
- Focus styling: `a:focus-visible` and `button:focus-visible` use `--color-focus-ring`.
- Sticky header: `.page-header` is `position: sticky; top: 0` with blur and gradient background.

## 4. Components

### 4.1 Header and navigation

Markup is in `src/components/layout/Page.tsx`.

- `.page-header` is sticky and blurred with a gradient background.
- `.page-header-inner` aligns logo and nav, max-width 960px.
- `.logo` is a 2rem circular badge.
- `.page-nav` is a horizontal list with muted links and hover highlight.

### 4.2 Buttons

Defined in `src/styles/layout.css`.

- Base: `.button` sets padding, pill radius, and text size.
- Primary: `.button-primary` uses `--color-accent` with dark text.
- Secondary: `.button-secondary` is transparent with border.

### 4.3 Pills (badges)

- `.pill` is a small bordered badge with `--radius-pill` and `--font-size-xs`.
- Used for projects "Featured" and learning status.

### 4.4 Cards (shared surface)

Base card styles (background, border, shadow):

- `.timeline-card`
- `.project-card`
- `.learning-item`

All share: `background: var(--color-surface)`, `border: 1px solid var(--color-border)`, `box-shadow: var(--shadow-soft)`.

### 4.5 Hero section

Markup in `src/components/sections/HeroSection.tsx`.

Variants:
- `hero--typographic` (default)
- `hero--avatar`
- `hero--image`

Key styles:
- Title: `.hero-title` uses `--font-size-3xl`.
- Tagline: `.hero-tagline` uses `--font-size-lg` and muted color.
- Actions: `.hero-actions` wraps buttons.
- Highlights: `.hero-highlights` is a list with muted text.
- Avatar: `.hero-avatar` is a 10rem circle with border.
- Image: `.hero-image` is capped at 24rem width.

### 4.6 Timeline section (Experience)

Markup in `src/components/sections/TimelineSection.tsx`.

Structure:
- `.timeline` wraps section heading and list.
- `.timeline-list` is a grid with large vertical gaps.
- `.timeline-item` is a two-column grid: text card + media.
- `.timeline-card` contains title, org, meta, summary, highlights.
- `.timeline-media` renders local SVGs (see `src/assets/timeline`).

Alternating layout:
- Even items swap order using `.timeline-item:nth-child(even)`.

Typography:
- Title: `h3` uses `--font-size-lg`.
- Meta: `.timeline-meta` uses `--font-size-xs`.
- Summary and highlights use `--font-size-sm`.

Media:
- SVGs are currently static and mapped by index in `TimelineSection`.
- Images are padded and framed with border + shadow to match cards.

Content model note (future CMS control):
- Timeline items currently have no image/CTA fields in Contentful.
- To enable CMS-controlled illustrations and CTAs, add fields to the Timeline Item model:
  - `mediaImage` (Asset)
  - `mediaAlt` (Text)
  - `ctaLabel` (Text, optional)
  - `ctaUrl` (Text/URL, optional)
- If you do not update the model, keep using static/local images in code for the two-column layout.

### 4.7 Projects section

Markup in `src/components/sections/ProjectsSection.tsx`.

- `.projects-grid` is a responsive grid with `minmax(260px, 1fr)`.
- `.project-card` is a base card.
- `.project-meta` is a small muted row for role and period.
- `.project-link` is accent colored with stronger weight.

### 4.8 Skills section

Markup in `src/components/sections/SkillsSection.tsx`.

- `.skills-groups` grid uses `minmax(240px, 1fr)`.
- Skill list items emphasize `.skill-name` and muted details.

### 4.9 Learning section

Markup in `src/components/sections/LearningSection.tsx`.

- `.learning-list` uses a compact grid.
- `.learning-item` is a small card with `--radius-md`.
- `.learning-link` uses `--color-accent`.

### 4.10 Contact section

Markup in `src/components/sections/ContactSection.tsx`.

- `.contact-intro` is limited to 38rem width.
- `.contact-links` wraps buttons and links.

## 5. Page structure

The landing page is defined in `src/components/layout/Page.tsx`.

- Header + nav at the top.
- Sections rendered in order via `SectionRenderer`:
  - Hero
  - Timeline
  - Skills
  - Projects
  - Learning
  - Contact
- Section anchors map to nav links (`#experience`, `#skills`, `#projects`, etc).

## 6. Responsive behavior

Defined in `src/styles/layout.css`.

- `min-width: 768px`:
  - Hero layouts become side-by-side.
- `max-width: 960px`:
  - Timeline stacks into a single column.
  - Alternating order resets to default.
- `max-width: 640px`:
  - Header stacks vertically.
  - Section padding reduces to `--space-8`.
  - Hero title scales down to `--font-size-2xl`.

## 7. Content and assets

- Primary content comes from Contentful where available; static fallback exists in `src/data/page-personal-landing.ts`.
- Timeline media is currently local (static) and located at:
  - `src/assets/timeline/timeline-search.svg`
  - `src/assets/timeline/timeline-journey.svg`
  - `src/assets/timeline/timeline-creative.svg`
- Mapping is index-based in `src/components/sections/TimelineSection.tsx`.

## 8. Implementation references

- Tokens: `src/styles/tokens.css`
- Layout and components: `src/styles/layout.css`
- Global baseline: `src/index.css`
- Section components: `src/components/sections`
- Page layout: `src/components/layout/Page.tsx`

## 9. Usage guidelines

- Always use token values for spacing, type, and color.
- Prefer existing component classes before adding new ones.
- Keep cards consistent with `--color-surface`, `--color-border`, and `--shadow-soft`.
- When adding new timeline items, update media assets or mapping to avoid empty media slots.

---

## Hero Design Spec

Source of truth: `src/components/sections/HeroSection.tsx`, `src/styles/layout.css`, `src/styles/tokens.css`
Placement: Rendered inside `<section class="section section-hero">` via `src/components/sections/SectionRenderer.tsx`
Container: `.hero` wraps main copy + optional media

Anatomy
- Section heading: `<h1>` inside `.hero-main` with class `.hero-title`
- Eyebrow: optional `<p class="hero-eyebrow">`
- Tagline: `<p class="hero-tagline">`
- Intro: `<p class="hero-intro">`
- Actions: `<div class="hero-actions">` containing `.button` links
- Highlights: `<ul class="hero-highlights">` (optional)
- Media: `.hero-side` containing `.hero-avatar` or `.hero-image`

Layout + Spacing
- Section container: `.section` max width 960px, centered, `padding-inline: var(--space-4)`, `padding-block: var(--space-12)`
- Hero layout: `.hero` is column layout with `gap: var(--space-8)`; switches to row at `min-width: 768px` with `gap: var(--space-10)`
- Actions: `.hero-actions` uses `gap: var(--space-3)` and wraps

Typography
- Eyebrow: `--font-size-sm`, uppercase, `letter-spacing: 0.12em`
- Title: `.hero-title` uses `--font-size-3xl` (reduces to `--font-size-2xl` at `max-width: 640px`)
- Tagline: `.hero-tagline` uses `--font-size-lg` (reduces to `--font-size-base` at `max-width: 640px`)
- Intro: `.hero-intro` uses `--font-size-base`, `line-height: 1.6`

Color + Surface
- Eyebrow and primary accents use `--color-accent`
- Tagline uses `--color-text-muted`
- Avatar/image frames use `--color-border` and `--shadow-soft`

Responsive
- `min-width: 768px`: `.hero` switches to side-by-side layout
- `max-width: 640px`: title and tagline scale down for readability

---

## Timeline Design Spec

Source of truth: `src/components/sections/TimelineSection.tsx`, `src/styles/layout.css`, `src/styles/tokens.css`
Placement: Rendered inside `<section class="section section-timeline">` via `src/components/sections/SectionRenderer.tsx`
Container: `.timeline` wraps section heading + list

Anatomy
- Section heading: `<h2>` inside `.timeline` (also inherits `.section h2` rhythm)
- List: `<ol class="timeline-list">`
- Item: `<li class="timeline-item">`
- Item card: `.timeline-card` wrapping text content
- Item header: `.timeline-item-header` containing `<h3>` and optional `.timeline-org`
- Meta line: `.timeline-meta` containing date range and optional `.timeline-location`
- Summary: `.timeline-summary` (optional)
- Highlights: `.timeline-highlights` list (optional)
- Media: `.timeline-media` containing a local SVG `<img>`

Layout + Spacing
- Section container: `.section` max width 960px, centered, `padding-inline: var(--space-4)`, `padding-block: var(--space-12)`; adjacent sections separated by top border and `margin-top: var(--space-4)` in `src/styles/layout.css`
- Timeline list: `display: grid`, `gap: var(--space-12)`, list-style removed, zero padding/margin in `src/styles/layout.css`
- Item: two-column grid with `gap: var(--space-8)` and alternating order on even items
- Card: `padding: var(--space-4)`, `border-radius: var(--radius-lg)` in `src/styles/layout.css`
- Item header: `display: flex`, `flex-wrap: wrap`, `gap: var(--space-2)`, `align-items: baseline`, `margin-bottom: var(--space-1)` in `src/styles/layout.css`
- Meta line: `display: flex`, `flex-wrap: wrap`, `gap: var(--space-2)`, `margin-bottom: var(--space-2)` in `src/styles/layout.css`
- Summary: `margin: 0 0 var(--space-2)` in `src/styles/layout.css`
- Highlights list: `padding-left: 1.25rem`, `margin: 0`, `list-style: disc` in `src/styles/layout.css`

Typography
- Heading (h2): `margin: 0 0 var(--space-4)` in `.timeline h2` and `.section h2` (`src/styles/layout.css`)
- Item title (h3): `font-size: var(--font-size-lg)`, `margin: 0` in `.timeline-item-header h3` (`src/styles/layout.css`)
- Org name: `font-size: var(--font-size-sm)` in `.timeline-org` (`src/styles/layout.css`)
- Meta line: `font-size: var(--font-size-xs)` in `.timeline-meta` (`src/styles/layout.css`)
- Summary + highlights: `font-size: var(--font-size-sm)` in `.timeline-summary`, `.timeline-highlights` (`src/styles/layout.css`)

Color + Surface
- Card surface: `background: var(--color-surface)`, `border: 1px solid var(--color-border)`, `box-shadow: var(--shadow-soft)` in `.timeline-card` (`src/styles/layout.css`)
- Media frame: `.timeline-media img` uses the same surface, border, and shadow
- Muted text: `.timeline-org`, `.timeline-meta`, `.timeline-highlights` set to `color: var(--color-text-muted)` which aliases `--color-muted` in `src/styles/tokens.css`

Tokens (used by timeline)
- Colors: `--color-surface #071510`, `--color-border #245239`, `--color-text #f6f8f7`, `--color-muted #b7c9bd`, `--color-text-muted → --color-muted` in `src/styles/tokens.css`
- Typography: `--font-size-xs 0.75rem`, `--font-size-sm 0.875rem`, `--font-size-lg 1.125rem` in `src/styles/tokens.css`
- Spacing: `--space-1 0.25rem`, `--space-2 0.5rem`, `--space-4 1rem`, `--space-12 3rem` in `src/styles/tokens.css`
- Radius + shadow: `--radius-lg 1rem`, `--shadow-soft 0 18px 45px rgba(0, 0, 0, 0.35)` in `src/styles/tokens.css`

Responsive
- Section padding: At `max-width: 640px`, `.section` uses `padding-block: var(--space-8)` in `src/styles/layout.css`
- Timeline layout: At `max-width: 960px`, `.timeline-item` stacks into one column and even-item ordering resets

---

## Skills Design Spec

Source of truth: `src/components/sections/SkillsSection.tsx`, `src/styles/layout.css`, `src/styles/tokens.css`
Placement: Rendered inside `<section class="section section-skills">` via `src/components/sections/SectionRenderer.tsx`
Container: `.skills` wraps heading and skill groups

Anatomy
- Section heading: `<h2>`
- Groups container: `.skills-groups`
- Group: `.skills-group` with `<h3>`
- List: `.skills-group ul` with skill items
- Labels: `.skill-name`, `.skill-level`, `.skill-keywords`

Layout + Spacing
- Groups grid: `.skills-groups` uses `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))` with `gap: var(--space-3)`
- Group list: `.skills-group ul` uses a simple grid with `gap: var(--space-2)`

Typography
- Group title: `.skills-group h3` uses default `h3` size with `margin-bottom: var(--space-2)`
- Skill name: `.skill-name` uses `font-weight: 600`
- Skill metadata: `.skill-level`, `.skill-keywords` use `--font-size-sm` and muted color

Color + Surface
- Muted text for `.skill-level` and `.skill-keywords` uses `--color-muted`

Responsive
- Grid automatically stacks via `auto-fit` at smaller widths

---

## Projects Design Spec

Source of truth: `src/components/sections/ProjectsSection.tsx`, `src/styles/layout.css`, `src/styles/tokens.css`
Placement: Rendered inside `<section class="section section-projects">` via `src/components/sections/SectionRenderer.tsx`
Container: `.projects` wraps heading and grid

Anatomy
- Section heading: `.section-heading` with `<h2>` and optional `.pill`
- Grid: `.projects-grid`
- Item: `.project-card`
- Metadata: `.project-meta`
- Tech: `.project-tech`
- Links: `.project-links` containing `.project-link`

Layout + Spacing
- Grid: `display: grid`, `gap: var(--space-4)`, `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))`
- Card: `padding: var(--space-4)`, `border-radius: var(--radius-lg)` and shared surface styles
- Links: `.project-links` uses a flex row with wrap and `gap: var(--space-2)`

Typography
- Tagline and tech: `--font-size-sm` with muted color
- Meta: `.project-meta` uses `--font-size-sm` and muted color
- Summary: `.project-summary` uses `line-height: 1.5`

Color + Surface
- `.project-card` uses surface + border + shadow tokens
- `.project-link` uses `--color-accent`

Responsive
- Grid collapses naturally using `auto-fit` with min width of 260px

---

## Learning Design Spec

Source of truth: `src/components/sections/LearningSection.tsx`, `src/styles/layout.css`, `src/styles/tokens.css`
Placement: Rendered inside `<section class="section section-learning">` via `src/components/sections/SectionRenderer.tsx`
Container: `.learning` wraps heading and list

Anatomy
- Section heading: `<h2>`
- List: `.learning-list`
- Item: `.learning-item`
- Header: `.learning-item-header` with `<h3>` and optional `.pill`
- Description: `.learning-description`
- Link: `.learning-link`

Layout + Spacing
- List: `display: grid`, `gap: var(--space-3)`
- Item: `padding: var(--space-3)`, `border-radius: var(--radius-md)`
- Header: `display: flex`, `gap: var(--space-2)`, `margin-bottom: var(--space-2)`

Typography
- Description: uses muted color and default body size
- Link: styled as accent text

Color + Surface
- `.learning-item` uses surface + border tokens
- `.learning-link` uses `--color-accent`

Responsive
- Grid stacks by default; no special breakpoints

---

## Contact Design Spec

Source of truth: `src/components/sections/ContactSection.tsx`, `src/styles/layout.css`, `src/styles/tokens.css`
Placement: Rendered inside `<section class="section section-contact">` via `src/components/sections/SectionRenderer.tsx`
Container: `.contact` wraps heading, intro, and CTAs

Anatomy
- Section heading: `<h2>`
- Intro: `.contact-intro`
- CTAs: `.contact-links` with `.button` items

Layout + Spacing
- Intro width: `.contact-intro` uses `max-width: 38rem` with `line-height: 1.6`
- CTA row: `.contact-links` uses flex wrap and `gap: var(--space-2)`

Typography
- Intro uses default body size with muted color

Color + Surface
- Buttons use standard primary/secondary styles

Responsive
- Buttons wrap automatically with flex on small screens
