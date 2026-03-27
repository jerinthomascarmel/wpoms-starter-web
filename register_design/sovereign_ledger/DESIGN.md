# Design System Strategy: The Editorial Archive

This document outlines the visual and structural language for the design system. Our objective is to transcend the "utility dashboard" aesthetic and instead create a high-end, editorial experience for professional asset management. We treat every warranty and purchase order not as a row in a database, but as a prestigious record in a digital archive.

## 1. Overview & Creative North Star

**Creative North Star: The Institutional Archive**
The design system is built on the pillars of authority, precision, and timelessness. While most enterprise systems rely on rigid grids and heavy borders, this system utilizes **Intentional Asymmetry** and **Tonal Depth**. By leaning into high-contrast typography and layered surfaces, we create an environment that feels less like software and more like a bespoke concierge service.

### Breaking the Template
*   **Asymmetry:** Use the `24` (6rem) spacing token for generous left-hand margins to create an editorial "gutter" effect.
*   **Overlapping Elements:** Allow high-priority cards (`surface_container_lowest`) to slightly overlap background sections (`surface_container_low`) to imply physical depth.
*   **White Space as Structure:** We do not use lines to separate ideas; we use distance.

---

## 2. Color & Surface Architecture

The palette is anchored by the deep authority of **Primary Dark Navy** and the prestigious warmth of **Accent Gold**.

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for sectioning or layout. Boundaries must be defined solely through background color shifts or subtle tonal transitions. 
*   **Level 0 (Base):** Use `surface` (#f7f9ff) for the main application canvas.
*   **Level 1 (Sectioning):** Use `surface_container_low` (#eff4fd) to define content regions.
*   **Level 2 (Interaction):** Use `surface_container_highest` (#dee3ec) for hover states or active regions.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. A "Nested Depth" approach ensures clarity without clutter:
1.  **Main Background:** `surface`
2.  **Content Well:** `surface_container`
3.  **Actionable Card:** `surface_container_lowest` (White) — This creates a natural "lift" against the slightly darker container.

### Signature Textures
*   **The Gold Gradient:** For primary CTAs and high-end highlights, use a linear gradient: `secondary_fixed_dim` (#e5c363) to `secondary` (#745b00) at a 135-degree angle.
*   **Glassmorphism:** For floating modals or dropdowns, use `surface_container_lowest` at 80% opacity with a `20px` backdrop blur to maintain the "high-end" feel.

---

## 3. Typography: Editorial Precision

The system uses a high-contrast pairing to balance heritage with modern efficiency.

*   **Headings (Cormorant Garamond):** Used for `display` and `headline` roles. This serif typeface conveys institutional trust. It should be tracked slightly tighter (-1% to -2%) for a premium look.
*   **Body (Outfit):** Used for `title`, `body`, and `label` roles. A modern geometric sans-serif that ensures high legibility for complex data.

| Role | Token | Font | Size | Weight |
| :--- | :--- | :--- | :--- | :--- |
| Hero | `display-lg` | Cormorant Garamond | 3.5rem | 600 |
| Section Header | `headline-sm` | Cormorant Garamond | 1.5rem | 500 |
| Table Header | `label-md` | Outfit | 0.75rem | 600 (All Caps) |
| Data Point | `body-md` | Outfit | 0.875rem | 400 |

---

## 4. Elevation & Depth

We avoid traditional "drop shadows" which can look muddy. Instead, we use **Tonal Layering** and **Ambient Light**.

*   **The Layering Principle:** Depth is achieved by "stacking" surface tiers. Place a `surface_container_lowest` card on a `surface_container_low` background. The contrast in hex values provides all the "lift" required.
*   **Ambient Shadows:** If a floating element (like a context menu) requires a shadow, use a multi-layered shadow: 
    *   `0px 4px 20px rgba(13, 30, 51, 0.06)` (Tinted with Primary Dark Navy).
*   **The "Ghost Border" Fallback:** For input fields or cards where accessibility requires a boundary, use a 1.5px stroke of `outline_variant` at 20% opacity. This provides a "hint" of a container without breaking the editorial flow.

---

## 5. Component Guidelines

### Buttons (High-End Tactility)
*   **Primary:** Gold Gradient (as defined in Sec 2) with `on_primary_fixed` navy text. Radius: `DEFAULT` (0.5rem).
*   **Secondary:** 1.5px Ghost Border (`outline_variant` at 40%) with Navy text.
*   **Tertiary:** No container. Outfit font, 600 weight, all-caps, with a `2px` gold underline.

### Cards & Data Lists
*   **Radius:** Always use `xl` (1.5rem) for main containers to soften the enterprise "edge."
*   **Separation:** Forbid divider lines. Use `8` (2rem) vertical spacing between list items.
*   **Data Density:** In tables, use `surface_container_low` for zebra-striping instead of lines.

### Inputs (The Precision Tool)
*   **Style:** 1.5px border using `outline_variant`.
*   **Radius:** `md` (0.75rem).
*   **States:** On focus, the border transitions to `secondary` (Gold) and the background shifts to `surface_container_lowest`.

### Archive Components (Custom)
*   **The Status Medallion:** Instead of standard chips, use small, circular indicators with `secondary` (Gold) backgrounds and Navy icons to denote "Certified" or "Approved" statuses.
*   **Timeline Ledger:** A vertical line (using `surface_container_high`) with `0.5rem` gold nodes to track warranty history.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical margins to create a high-end feel.
*   **Do** utilize the full typography scale; don't be afraid of a `3.5rem` display heading next to `0.875rem` body text.
*   **Do** ensure all "Gold" elements have sufficient contrast against navy backgrounds for accessibility.

### Don't
*   **Don't** use 1px solid black or dark grey borders.
*   **Don't** use standard "Material" blue for links; use the `secondary` gold or a subtle navy underline.
*   **Don't** crowd the interface. If a screen feels "busy," increase the spacing token by one level (e.g., move from `4` to `5`).
*   **Don't** use drop shadows on every card. Rely on background color shifts first.

---

**Director’s Final Note:** 
Always ask: *"Does this feel like a generic dashboard, or does it feel like a premium document?"* If it feels generic, remove a border, increase the font size of your serif headings, and add more white space.