# Unbound Studios Design System

Single source of truth for all styling decisions. Read this before any UI work.

---

## 1. Brand Personality

Confident and minimal. The visual tone is editorial — lots of whitespace, tight typography, and muted color. The site should feel like a well-made tool, not a marketing page. Nothing decorative unless it earns its place.

---

## 2. Color Tokens

All colors are defined as CSS custom properties in `app/globals.css` and mapped to Tailwind via `@theme inline`.

### Primary
| Token          | Hex       | Usage                            |
|----------------|-----------|----------------------------------|
| `green`        | `#3b9c6f` | Accent, highlights, focus rings  |
| `green-light`  | `#e5f2ec` | Badge backgrounds, tinted fills  |
| `green-dim`    | `#2d7a56` | Primary buttons, role labels     |

### Accent
| Token          | Hex       | Usage                            |
|----------------|-----------|----------------------------------|
| `blue`         | `#4a8fd4` | Secondary accent, "ship" keyword |
| `blue-light`   | `#e5eef8` | (Available, unused currently)    |

### Neutrals
| Token            | Hex       | Usage                              |
|------------------|-----------|------------------------------------|
| `ink`            | `#1a1a1a` | Headings, primary text, dark fills |
| `text`           | `#2a2a2a` | Body text                          |
| `text-secondary` | `#7a7a7a` | Supporting text, nav links         |
| `text-tertiary`  | `#767676` | Labels, meta text, captions        |
| `cream`          | `#faf9f6` | Page background, input backgrounds |
| `warm-gray`      | `#f2f0ec` | Alternate section backgrounds      |
| `border`         | `#e8e5df` | Borders, dividers                  |

### Semantic
| Value       | Usage           |
|-------------|-----------------|
| `red-600`   | Error messages  |
| `white`     | Card backgrounds, button text on dark fills |

### Dark Palette (Mirror card only)
Used exclusively in the WorkGrid featured card mockup:

| Hex         | Usage                    |
|-------------|--------------------------|
| `#2C2B2A`   | Card gradient start, phone screen bg |
| `#1a1918`   | Card gradient end         |
| `#1C1B1A`   | Phone screen gradient end |
| `#3C3B39`   | Phone shell bg, inner card bg |
| `#4A4948`   | Progress bar track        |
| `#6A8A63`   | Progress bar fill, reflect button |
| `#787776`   | Card tagline text         |
| `#9AB893`   | Status badge text         |
| `#A09F9D`   | Prompt text               |
| `#FAFAF8`   | Card heading text         |

---

## 3. Typography Scale

### Fonts
- **`font-sans`** (Figtree): Headings, body text, all readable content
- **`font-mono`** (Martian Mono): Buttons, labels, badges, wordmark, meta captions

### Size Scale

| Role       | Size                         | Where used                        |
|------------|------------------------------|-----------------------------------|
| hero       | `clamp(3.25rem,6.5vw,5.75rem)` | Homepage h1                    |
| h1         | `clamp(2.5rem,5vw,4rem)`    | Section headings, page titles     |
| h2         | `2.5rem–2.75rem`             | Section headings (WorkGrid, Services) |
| h3         | `1.5rem–1.75rem`             | Card titles (featured: 1.75, secondary: 1.5) |
| body-lg    | `1.1rem–1.15rem`             | Team names, intro paragraphs      |
| body       | `0.9rem–0.95rem`             | Body text, card descriptions, inputs |
| body-sm    | `0.85rem`                    | Footer links, compact card text, error text |
| meta       | `0.65rem`                    | Section labels, form labels       |
| micro      | `0.55rem–0.6rem`             | Status badges, footer copyright, service numbers |

**Consolidation note**: When adding new text, pick the named role. Don't introduce sizes between roles.

### Weight Scale

| Weight    | Value | Usage                            |
|-----------|-------|----------------------------------|
| normal    | 400   | Body text, descriptions          |
| medium    | 500   | Buttons, nav links, badges       |
| semibold  | 600   | Card titles (compact), phone mockup text |
| bold      | 700   | Headings (h3, h4), wordmark      |
| extrabold | 800   | Hero, section headings (h1, h2)  |

### Leading (line-height)

| Name       | Value    | Usage                              |
|------------|----------|------------------------------------|
| display    | `1.02–1.08` | Hero heading, section headings  |
| quote      | `1.35`   | Blockquote (Statement)             |
| body       | `1.55–1.65` | Card descriptions, intro text   |
| long-form  | `1.7`    | About page body, service descriptions |

### Tracking (letter-spacing)

| Name          | Value      | Usage                                |
|---------------|------------|--------------------------------------|
| tight-display | `-0.04em` to `-0.045em` | Hero, CTA headings    |
| tight-heading | `-0.035em` | Section headings (h2)                |
| normal        | `0`        | Body text (default)                  |
| wide-label    | `0.08em`   | Mono labels, section badges          |

---

## 4. Spacing Scale

### Section Padding (horizontal)
| Breakpoint | Class  | Value    |
|------------|--------|----------|
| Desktop    | `px-14` | 3.5rem  |
| Tablet     | `px-8`  | 2rem    |
| Mobile     | `px-5`  | 1.25rem |

Applied via: `px-14 max-lg:px-8 max-md:px-5`

### Section Padding (vertical)
| Size     | Class   | Usage                    |
|----------|---------|--------------------------|
| Standard | `py-24` | Team, content pages      |
| Large    | `py-32` | Statement, WorkGrid top  |
| Hero CTA | `py-40` | ContactCTA               |

### Card Padding
| Variant  | Classes     | Usage                    |
|----------|-------------|--------------------------|
| Large    | `p-8`       | Bento cards, service cards |
| Compact  | `px-7 py-6` | Compact project cards    |

### Button Padding
| Variant  | Classes       | Usage          |
|----------|---------------|----------------|
| Standard | `px-6 py-3`   | CTAs, form submit |
| Header   | `px-5 py-2.5` | Header nav button |

### Input Padding
`px-4 py-3` for all form inputs and textareas.

### Gap Scale (values used)
`2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 24`

### Max-widths
| Class         | Usage                       |
|---------------|-----------------------------|
| `max-w-xl`    | Contact form container      |
| `max-w-3xl`   | About page content          |
| `max-w-[800px]–max-w-[900px]` | Hero text, blockquote |
| `max-w-[280px]–max-w-[440px]` | Card descriptions, intro text |

---

## 5. Border Radius

| Token     | Value  | Class           | Usage                                  |
|-----------|--------|-----------------|----------------------------------------|
| pill      | 100px  | `rounded-pill`  | Buttons, status badges                 |
| 2xl       | 20px   | `rounded-2xl`   | Bento cards, portraits                 |
| xl        | 16px   | `rounded-xl`    | Compact cards, images                  |
| lg        | 12px   | `rounded-lg`    | Form inputs, reflect button            |
| md        | 8px    | `rounded-md`    | (Available, not widely used)           |
| sm        | 4px    | `rounded-sm`    | Accent lines                           |

**Consolidation note**: Service cards use `rounded-[18px]` — should be `rounded-2xl` (20px). Phone mockup screen uses `rounded-[18px]` — same, use `rounded-2xl`. The badge number squares use `rounded-[10px]` which is fine as a one-off detail.

---

## 6. Shadows

Defined in `@theme inline` in globals.css:

| Token  | Value                                      | Usage                     |
|--------|--------------------------------------------|---------------------------|
| sm     | `0 1px 2px rgba(59,156,111,0.04)`          | Subtle depth              |
| md     | `0 4px 12px rgba(59,156,111,0.06)`         | Resting cards             |
| lg     | `0 8px 24px rgba(59,156,111,0.08)`         | Card hover states         |
| xl     | `0 16px 40px rgba(59,156,111,0.1)`         | Prominent elements        |

Shadow tokens use the brand green (`#3b9c6f`) instead of black. Same opacities, warmer tint.

### One-off shadows (inline)
| Value                                  | Usage                |
|----------------------------------------|----------------------|
| `0 6px 20px rgba(45,122,86,0.2)`      | Primary button hover |
| `0 20px 50px rgba(0,0,0,0.3)`         | Phone mockup         |
| `0 4px 20px rgba(59,156,111,0.06)`    | Service card hover   |
| `inset 0 0 0 1.5px var(--border)`     | Secondary button border |
| `inset 0 0 0 1.5px var(--ink)`        | Secondary button hover border |

---

## 7. Component Patterns

### Buttons

All buttons: `font-mono text-[0.7rem] font-medium rounded-pill transition-all duration-300`

| Variant    | Fill                    | Text     | Hover                                    |
|------------|-------------------------|----------|------------------------------------------|
| Primary    | `bg-green-dim`          | `white`  | `bg-[#235f43]`, lift -0.5, green shadow  |
| Secondary  | transparent             | `ink`    | Inset border darkens to ink, lift -0.5   |
| Header     | `bg-ink`                | `cream`  | `bg-green text-white`, lift -1px        |
| Form submit| `bg-ink`                | `cream`  | `bg-green text-white`, lift -1px        |

### Cards

| Variant    | Background              | Radius       | Hover                       |
|------------|-------------------------|--------------|-----------------------------|
| Featured   | Dark gradient           | `rounded-2xl`| `scale-[0.985]`, 400ms      |
| Secondary  | Light gradient          | `rounded-2xl`| `scale-[0.985]`, 400ms      |
| Tertiary   | `warm-gray`             | `rounded-2xl`| `scale-[0.985]`, 400ms      |
| Compact    | `white`, border         | `rounded-xl` | `-translate-y-[3px]`, shadow-lg, 300ms |
| Service    | `white`, border         | `rounded-[18px]`* | `border-green`, translate-x-1, 350ms |

*Should be `rounded-2xl` per consolidation note.

### Inputs

```
bg-cream border border-border rounded-lg px-4 py-3
focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent
```

Labels: `font-mono text-[0.65rem] text-text-tertiary tracking-[0.08em] uppercase`

### Links

| Context  | Resting          | Hover     | Duration |
|----------|------------------|-----------|----------|
| Nav      | `text-secondary` | `ink`     | 300ms    |
| Footer   | `text-secondary` | `ink`     | 200ms    |
| Inline   | `green`          | `green-dim` | —     |

### Dark Section (ContactCTA + Footer)

The closing block of the page inverts to `bg-ink` to create a clear "take action" zone.

| Element            | Class / Value                                  |
|--------------------|------------------------------------------------|
| Section bg         | `bg-ink`                                       |
| Heading            | `text-cream`                                   |
| Body text          | `text-cream/60`                                |
| Tertiary text      | `text-cream/40`                                |
| Links              | `text-cream/50 hover:text-cream`               |
| Border             | `border-white/10`                              |
| Watermark          | `text-[rgba(250,249,246,0.04)]`                |
| Secondary button   | `text-cream shadow-[inset_0_0_0_1.5px_rgba(250,249,246,0.2)]` hover: `0.6` opacity |

Primary button (green) works unchanged on dark.

### Service Card CTA

Each service card includes a contact link after the description:

```
font-mono text-[0.6rem] font-medium text-green hover:text-green-dim
transition-colors duration-200 mt-3 inline-block
```

Links to `/contact` with no query params.

### Section Containers

Standard pattern: `px-14 max-lg:px-8 max-md:px-5` with centered `max-w` content where applicable.

---

## 8. Animation Conventions

### Scroll Reveal
Defined in `globals.css` as `.reveal` class, triggered by `ScrollReveal` component:
- `opacity: 0 → 1`, `translateY: 40px → 0`
- Duration: `0.7s ease`
- Stagger delays: `0.1s`, `0.2s`, `0.3s` (classes `reveal-d1`, `reveal-d2`, `reveal-d3`)
- Trigger: IntersectionObserver at `threshold: 0.1`, `rootMargin: 0px 0px -60px 0px`

### Hover Transforms
| Element        | Transform                    | Duration |
|----------------|------------------------------|----------|
| Button (standard) | `-translate-y-0.5` (2px) | 300ms    |
| Button (subtle)   | `-translate-y-px` (1px)  | 300ms    |
| Card (bento)      | `scale-[0.985]`          | 400ms    |
| Card (compact)    | `-translate-y-[3px]`     | 300ms    |
| Service card      | `translate-x-1` (4px)    | 350ms    |
| Phone mockup      | `-translate-y-2 -rotate-1` | 500ms  |

### Scroll Pulse
Scroll hint indicator at bottom of Hero:
- `animation: scrollPulse 2.5s ease-in-out infinite`
- Opacity: `0.3 ↔ 0.7`, scaleY: `0.6 ↔ 1`

### Header Backdrop
`backdrop-blur-[20px] backdrop-saturate-[1.2] bg-cream/85`

### Reduced Motion
All animations respect `prefers-reduced-motion: reduce` — reveal elements show immediately, all animation durations set to 0.

### Transition Duration Consolidation
Current durations in use: 200, 300, 350, 400, 500ms. Recommended standard set:
- **200ms** — micro interactions (link color changes)
- **300ms** — default (buttons, compact cards, most hovers)
- **500ms** — emphasis (phone mockup, decorative elements)

New components should use these three values. Avoid 350ms and 400ms going forward.

---

## 9. Responsive Breakpoints

Tailwind v4 mobile-first with `max-*` overrides:

| Breakpoint | Class      | Width  | Usage                                      |
|------------|------------|--------|--------------------------------------------|
| max-sm     | `max-sm:`  | 640px  | CTA button stacking                       |
| max-md     | `max-md:`  | 768px  | Stack columns, reduce padding, hide decorative elements |
| max-lg     | `max-lg:`  | 1024px | Grid collapse, intermediate padding        |

### Fluid Type
Used for hero and section headings via `clamp()`:
- Hero: `clamp(3.25rem, 6.5vw, 5.75rem)`
- Section headings: `clamp(2.5rem, 5vw, 4rem)`
- Blockquote: `clamp(1.75rem, 3.5vw, 2.75rem)`
- Watermark: `clamp(8rem, 18vw, 16rem)`

---

## 10. Do/Don't Quick Reference

### Do
- Use CSS custom properties from `globals.css` for all colors
- Use `font-mono` for labels, buttons, badges, and meta text
- Use `font-sans` for headings, body text, and readable content
- Use `cream` as the base page background
- Use `warm-gray` for alternate section backgrounds
- Use `white` for card backgrounds
- Keep buttons `rounded-pill`, cards `rounded-2xl` or `rounded-xl`
- Wrap new sections in `<ScrollReveal>`
- Use the horizontal padding pattern: `px-14 max-lg:px-8 max-md:px-5`
- Use transition durations from the standard set: 200ms, 300ms, 500ms

### Don't
- Introduce new colors outside the palette
- Use font sizes outside the defined scale
- Add new transition durations (use 200/300/500ms)
- Use hover patterns other than what's established (lift, scale, color shift)
- Skip `<ScrollReveal>` on new sections
- Use `rounded-[18px]` — use `rounded-2xl` instead
- Hard-code color hex values — use the token classes
- Add decorative elements that don't serve a clear purpose
