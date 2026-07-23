# Cherry Blossom Spring - Wedding Invitation Theme

## Design Philosophy

**Theme:** Japanese Spring Garden Romance

This invitation embodies the elegance of a cherry blossom garden at sunrise—a romantic, airy, and emotionally warm experience. The design combines Japanese sakura aesthetics with modern editorial elegance, creating a premium digital invitation that feels light, graceful, and timeless.

---

## Design Movement

**Aesthetic:** Contemporary Japanese Minimalism meets Editorial Romance

Inspired by traditional Japanese garden design principles (ma—the art of negative space) combined with modern luxury editorial design. The experience feels like walking through a blooming sakura garden at dawn.

---

## Core Principles

1. **Light & Airy** - Generous whitespace, soft shadows, minimal visual weight
2. **Graceful Motion** - Slow, gentle animations that feel natural and calming
3. **Photography First** - Couple imagery is always the visual hero; typography supports
4. **Botanical Elegance** - Cherry blossom motifs appear subtly throughout, never overwhelming

---

## Color Philosophy

| Role | Color | OKLCH | Reasoning |
|------|-------|-------|-----------|
| **Primary** | Blush Pink | `oklch(0.85 0.08 15)` | Soft, romantic, evokes sakura petals |
| **Secondary** | Soft Sakura Pink | `oklch(0.92 0.04 20)` | Lighter tint for backgrounds and accents |
| **Accent** | Cherry Blossom Red | `oklch(0.65 0.12 10)` | Deep, elegant, for emphasis (buttons, highlights) |
| **Surface** | Warm White | `oklch(0.98 0.001 0)` | Creamy, not pure white; feels premium |
| **Background** | Ivory | `oklch(0.96 0.002 80)` | Subtle warmth, reduces eye strain |
| **Text** | Charcoal | `oklch(0.235 0.015 65)` | High contrast, elegant, readable |
| **Border** | Dusty Rose | `oklch(0.82 0.05 25)` | Soft frame color, complements primary |

**Emotional Intent:** The palette evokes spring dawn—soft, warm, romantic, and calming. Every color feels natural and organic, never artificial or jarring.

---

## Layout DNA

- **Hero:** Centered, full-screen, portrait-oriented
- **Content Width:** Medium (max 800px on desktop)
- **Grid:** Single-column mobile, balanced two-column desktop where appropriate
- **Alignment:** Centered with generous vertical spacing
- **Spacing Rhythm:** Relaxed (3rem-5rem between sections)
- **Hierarchy:** Photography first, typography second, decorations third

---

## Signature Elements

1. **Falling Sakura Petals** - Subtle, slow animation on hero and throughout
2. **Watercolor Blossom Accents** - Decorative illustrations at section breaks
3. **Thin Botanical Frames** - Delicate borders around key content (couple portraits, gift cards)
4. **Rounded Corners** - Large radius (1.5rem-2rem) on cards and images for softness
5. **Fine Paper Texture** - Subtle grain overlay for premium feel

---

## Interaction Philosophy

- **Buttons:** Rounded pill shape, soft hover scale (1.02x), gentle color shift
- **Cards:** Large radius, very soft shadow (0 4px 12px rgba(0,0,0,0.08)), hover lift
- **Forms:** Soft outlined inputs with blush pink focus state
- **Links:** Underline on hover, smooth color transition
- **Modals:** Minimal, centered, fade-in animation

---

## Animation Guidelines

**Motion Personality:** Graceful, slow, gentle

- **Section Transitions:** Fade-up with subtle scale (0.98 → 1)
- **Headings:** Fade-up on scroll
- **Images:** Reveal with subtle scale (0.95 → 1)
- **Gallery:** Stagger reveal (30ms between items)
- **Buttons:** Soft scale on hover (1.02x), active press (0.97x)
- **Scroll:** Continuous storytelling with parallax on hero

**Timing:**
- Entrance animations: 600-800ms
- Hover states: 200ms
- Transitions: 300-400ms
- Reduced motion: Replace all movement with opacity fades only

---

## Typography System

| Role | Font | Weight | Size (Mobile/Desktop) | Usage |
|------|------|--------|----------------------|-------|
| **Display** | Playfair Display | 700 | 2.5rem / 3.5rem | Couple names, main headings |
| **Heading** | Playfair Display | 600 | 1.75rem / 2.25rem | Section titles |
| **Subheading** | Lora | 600 | 1.25rem / 1.5rem | Subtitles, event titles |
| **Body** | Inter | 400 | 1rem / 1.125rem | Paragraphs, descriptions |
| **Caption** | Inter | 400 | 0.875rem / 1rem | Metadata, dates, locations |
| **Quote** | Cormorant Garamond | 400 italic | 1.25rem / 1.5rem | Epigraph, testimonials |

**Letter Spacing:** Slightly expanded (0.5px-1px) for elegance
**Line Height:** Comfortable (1.6-1.8) for readability

---

## Brand Essence

**Positioning:** A romantic, elegant digital wedding invitation that honors Japanese spring traditions while celebrating modern love.

**Personality:** Graceful, Warm, Premium

**Brand Voice:**
- Headings sound poetic and romantic: *"Two hearts, one beautiful journey"*
- CTAs are warm and inviting: *"Join us in celebrating"* (not "Submit RSVP")
- Microcopy feels personal: *"We can't wait to celebrate with you"*

---

## Visual Assets

- **Hero Image:** Cherry blossom garden at sunrise, portrait orientation, safe text area in center
- **Sakura Pattern:** Seamless watercolor pattern for backgrounds
- **Logo Mark:** Minimalist five-petal sakura symbol in blush pink
- **Watercolor Blossom:** Delicate branch illustration for decorative accents
- **Petal Texture:** Fine paper texture overlay for premium feel

---

## Component Library

- **Buttons:** Rounded pill, blush pink primary, soft hover scale
- **Cards:** Large radius, soft shadow, hover lift
- **Forms:** Soft outlined inputs, blush pink focus state, rounded corners
- **Gallery:** Editorial masonry with rounded corners and hover blossom decoration
- **Timeline:** Vertical with cherry blossom branch following the line
- **Dividers:** Thin floral lines or watercolor blossom accents

---

## Mobile-First Approach

- Single-column layout on mobile (< 768px)
- Touch-friendly button sizes (48px minimum)
- Full-width images with rounded corners
- Generous vertical spacing (3rem between sections)
- Readable typography (16px base on mobile)
- Simplified forms with single-column inputs

---

## Accessibility & Reduced Motion

- All text has sufficient contrast (WCAG AA)
- Focus rings visible and styled consistently
- Reduced motion: Replace animations with opacity fades
- Alt text for all images
- Semantic HTML structure
- Keyboard navigation fully supported

---

## Style Decisions

- **Border Radius:** 1.5rem for cards, 2rem for images, 3rem for buttons
- **Shadow:** Very soft (0 4px 12px rgba(0,0,0,0.08)) for depth
- **Spacing:** 3rem-5rem between major sections, 1.5rem-2rem within sections
- **Texture:** Fine paper grain overlay at 2-3% opacity
- **Animations:** All under 800ms, respect prefers-reduced-motion
