# Stitch Prompt — Charlene Personal Website Prototype

---

## Global Design System

Design a personal portfolio website prototype for a developer/designer named **Charlene**.

**Visual style:** Geek / hacker terminal aesthetic — inspired by classic CRT monitors, command-line interfaces, and cyberpunk themes.

**Color palette:**
- Background: near-black `#050505`
- Surface / cards: dark charcoal `#0d0d0d`
- Primary accent: neon green `#00ff41`
- Mid green: `#00cc34`
- Subtle green: `#004d15`
- Body text: pale mint `#d4ffd4`
- Secondary text: muted green `#4a8f5a`

**Typography:**
- Display / headings: `Orbitron` — bold, all-caps, wide letter-spacing
- Body / UI text: `Share Tech Mono` — monospace, terminal feel
- All text uses green-family tones; no white

**Key UI patterns:**
- Thin `1px` neon-green borders on cards and buttons
- Subtle scanline texture overlay across all screens (thin horizontal repeating lines)
- Neon glow effect (`box-shadow / text-shadow`) on accent elements
- No rounded corners — sharp, geometric edges throughout
- No images, photos, or avatars — use geometric placeholders (circle outline, rectangle) where media would appear

---

## Page 1 — Home

**Layout:** Full viewport height, vertically centered content, left-aligned (starting at ~8% from left edge).

**Elements (top to bottom, left to right):**

1. **Navbar** — fixed, full-width, top of screen
   - Left: logo mark — single large letter **"C"** in Orbitron bold, neon green with glow
   - Right: horizontal nav links — `Home · About · Projects · Contact`
   - Links in monospace, small caps, muted green; active link is neon green with underline
   - Background: semi-transparent near-black with subtle blur

2. **Background decoration** — oversized letter **"C"** (50–55vw) positioned right side, near-transparent neon green stroke, no fill; used as a decorative watermark

3. **Content block** (vertically centered, left-aligned):
   - Line 1: `> Hello World` — tiny monospace label, muted green, with `>` prompt character in neon green
   - Line 2: `HI HERE IS` — large display text (Orbitron), pale mint, ~4–5rem
   - Line 3: `Charlene` — extra-large display text (Orbitron Black), ~8–9rem, gradient fill from dark green → neon green → light mint; followed by a blinking block cursor `▋` in neon green
   - Spacing: generous vertical rhythm between lines

4. **CTA Button** — below the name
   - Label: `> Contact Me`
   - Style: transparent background, `1px` neon green border, neon green text; on hover: background fills neon green, text turns black
   - No rounded corners, monospace font

5. **Footer** — pinned to bottom
   - Left: `© 2026 Charlene. All rights reserved.`
   - Right: `Built with React + TypeScript`
   - Both in tiny monospace, muted green; brand names in neon green

---

## Page 2 — About

**Layout:** Single column, left-aligned, max-width ~860px, top-padded below navbar.

**Content styled as a terminal session:**

1. **Command block 1:**
   ```
   $ whoami
   ```
   Output below (indented, left border accent line in dark green):
   > Hi, I'm **Charlene** — a designer & developer who loves building things for the web.

2. **Command block 2:**
   ```
   $ cat bio.txt
   ```
   Output: 2–3 lines of body copy, muted green, monospace, generous line-height

3. **Command block 3:**
   ```
   $ ls skills/
   ```
   Output: tag cloud / badge grid
   - Each skill is a small tag: `1px` dark green border, monospace label, muted green text
   - Tags: `UI/UX Design` · `React` · `TypeScript` · `Figma` · `CSS` · `Node.js` · `Git` · `Python`
   - Hover state: border and text turn neon green with soft glow

4. **Command block 4:**
   ```
   $ cat interests.txt
   ```
   Output: one line — `Design Systems · Open Source · Photography · Coffee · Sci-Fi`

**Each command line:**
- `$` prompt in neon green
- Command text in pale mint
- Output indented with a `1px` vertical left-border in dark green `#004d15`

---

## Page 3 — Projects

**Layout:** Full page, left-aligned, max-width content area, top-padded below navbar.

**Header section:**
- Eyebrow label: `// Portfolio` — tiny monospace, muted green, `//` in neon green
- Page title: `Projects` — Orbitron Bold, large (~3rem), pale mint

**Projects grid:**
- `2-column` grid (responsive: 1-column on narrow), `1.4rem` gap
- Each card: dark surface `#0d0d0d`, `1px` border `#004d15`, sharp corners, `1.6rem` padding

**Card anatomy (4 cards):**
1. Index number: `// 01` — tiny, neon green, muted opacity
2. Project title: Orbitron, `~1.1rem`, pale mint
3. Description: 2–3 lines, monospace, muted green, `0.85rem`
4. Tag row: small inline tags with dark green border, muted green text

**Card hover state:** border turns neon green, subtle green glow, card lifts `3px` upward, top edge gets a horizontal neon green gradient line

**Sample card titles:**
- `01` — Personal Website
- `02` — Project Alpha
- `03` — Project Beta
- `04` — Project Gamma

---

## Page 4 — Contact

**Layout:** Full viewport height, vertically and horizontally centered, flex column, `2rem` gap between elements.

**Elements (top to bottom):**

1. **Avatar placeholder** — `110px` circle, no fill, `2px` neon green border, neon glow ring; center text: large `C` in Orbitron, neon green

2. **Heading:** `Get In Touch` — Orbitron Bold, ~`2.5rem`, pale mint, centered

3. **Subheading:** `Let's build something together` — tiny monospace, muted green, centered, wide letter-spacing, all-caps

4. **Contact card list** — `max-width: 420px`, centered, 3 cards stacked vertically:

   Each card contains:
   - Left: icon glyph (symbolic character, neon green) — `⌥` GitHub · `◈` WeChat · `◉` 小红书
   - Center: platform label (tiny, muted, all-caps monospace) + handle text below (pale mint)
   - Right: arrow `→` in neon green (hidden until hover)

   Card style: dark surface, `1px` dark green border, `1rem 1.4rem` padding, sharp corners

   Hover state: border turns neon green, soft glow, card slides right `5px`

   **Card content:**
   - GitHub — `charlene00sara-gif`
   - WeChat — `扫码添加微信`
   - 小红书 — `Charlene`

---

## Loading Screen (Overlay)

**Old CRT TV turn-on effect — shown once on initial load:**

1. Full-screen black overlay, `z-index` highest
2. A `2px`-tall horizontal line appears centered — neon green with intense glow (`box-shadow` spread ~60px)
3. Line expands vertically to fill the full screen height (smooth ease-out, ~0.9s)
4. As it expands, color transitions from neon green → near-black (matching background)
5. Overlay fades out (opacity 0, ~0.55s)
6. Site content is revealed

**Visual notes:** The loading line should have a bright phosphor-green bloom — the brightest element in the entire UI.

---

## Interaction Notes (for Stitch annotation)

| Trigger | Effect |
|---------|--------|
| App load | CRT TV turn-on animation → content fade-in |
| Page navigation | Current page fades out → new page fades in + slides up slightly |
| Navbar link hover | Text turns neon green, underline slides in from left |
| Button hover | Background fills left-to-right with neon green, text inverts to black |
| Project card hover | Border glow, lift, top gradient line appears |
| Contact card hover | Glow, slide right, arrow appears |
| Skill tag hover | Border + text turns neon green |

---

## Prototype Scope

Generate **4 screens** at desktop viewport (`1440 × 900`):
1. Home page
2. About page
3. Projects page
4. Contact page

Include a **5th frame** showing the loading overlay (CRT line state).

No real photography or avatars. Use geometric shapes (outlined circle, rectangle with dashed border) as image placeholders where applicable.
