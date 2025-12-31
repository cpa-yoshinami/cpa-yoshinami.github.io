# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for 善波公認会計士税理士事務所 (Yoshinami CPA & Tax Office), a Certified Public Accountant and Tax Accountant office based in Osaka. The site is built using vanilla HTML/CSS/JavaScript without any frameworks, using Tailwind CSS for styling.

## Commands

### Development

```bash
# Start development server (serves src/ directory on http://localhost:8080)
npm start

# Build CSS in watch mode (for development)
npm run build

# Build CSS for production (minified)
npm run build-prod

# Format code (HTML, CSS, JS)
npm run format
```

### Note on CSS Build Process

- The generated `src/assets/styles.css` file is **excluded from git** (via .gitignore)
- CSS is compiled from `src/assets/input.css` using Tailwind CSS
- Production CSS is automatically generated during GitHub Actions deployment
- For local development, run `npm run build` to generate styles.css

## Architecture

### Technology Stack

- **No JavaScript framework** - Pure HTML/CSS/JavaScript
- **Tailwind CSS** - Utility-first CSS framework with extensive custom configuration
- **AOS (Animate On Scroll)** - For scroll animations
- **Material Icons** - Google's icon library
- **Live Server** - Development server with live reload

### Directory Structure

```
src/
├── index.html          # Homepage
├── about.html          # Office introduction page
├── services.html       # Services page
├── contact.html        # Contact page
└── assets/
    ├── input.css       # Tailwind CSS source (edit this for CSS changes)
    ├── styles.css      # Generated CSS (do not edit, git-ignored)
    ├── script.js       # Client-side JavaScript
    └── images/         # All image assets
```

### Tailwind Configuration (`tailwind.config.js`)

The project has extensive Tailwind customization:

**Custom Color Palette:**

- `primary.*` - Blue tones (main brand color: #4a6fa5)
- `secondary.*` - Grayscale
- `accent.*` - Orange accent colors
- `surface.*` - White/light gray surfaces
- `error.*` - Red error states

**Custom Utilities (defined in plugins):**

- `.btn-material`, `.btn-primary`, `.btn-outline`, `.btn-large` - Material design buttons
- `.card-material` - Material design cards
- `.nav-link`, `.nav-link-active` - Navigation links
- `.section-padding`, `.section-padding-mobile` - Consistent section spacing
- `.container-custom` - Max-width container (6xl)
- `.text-gradient` - Primary color gradient text
- `.hero-overlay` - Hero section overlay
- `.timeline-icon` - Timeline icon circles
- `.form-input`, `.form-label` - Form elements

**Safelist:**
The config includes a safelist pattern for common spacing utilities (padding/margin) to ensure they're always available even if not present in source files.

**Custom Spacing:** `15`, `18`, `30`, `88` (in rem)

**Custom Shadows:** `material-1` through `material-4` for Material Design elevation

**Font:** Noto Sans JP (imported via Google Fonts in input.css)

### CSS Architecture (`src/assets/input.css`)

The input.css file contains:

1. Tailwind imports (base, components, utilities)
2. Google Fonts imports (Noto Sans JP, Material Icons)
3. Extensive custom component classes in `@layer components`
4. Mobile responsive overrides
5. Utility classes

**Key Custom Components:**

- Header/Navigation with mobile menu
- Hero sections (`.hero`, `.page-header`)
- Section layouts (`.section`, `.section-header`)
- Cards (`.card`, `.service-card`, `.partner-card`)
- Director profile layout
- Timeline components
- Contact methods
- Background image sections (`.experience`, `.business-details`)
- Footer
- Back-to-top button

**Responsive Design:**

- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`
- Mobile menu toggle with CSS animations
- Responsive grids and flexbox layouts

### Page Structure

All pages share:

- Fixed header with navigation
- Consistent footer
- Material Design visual language
- AOS scroll animations
- Common components from input.css

**Homepage (index.html):**

- Hero section
- Services overview
- Osaka area strengths
- Director's message
- Partners section
- Call-to-action

**About Page (about.html):**

- Page header with gradient background
- Director profile with image
- Qualifications and affiliations
- Experience timeline

**Services Page (services.html):**

- Experience section with airplane background image
- Business details section with office background image
- Detailed service cards with icons

**Contact Page (contact.html):**

- Contact methods (phone, email, address)
- Office details
- Map placeholder

## Deployment

The site is deployed to GitHub Pages via GitHub Actions:

1. **CI Workflow** (`.github/workflows/ci.yml`):
   - Runs on pushes to main and all PRs
   - Checks code formatting
   - Builds production CSS
   - Verifies styles.css generation

2. **Deploy Workflow** (`.github/workflows/deploy.yml`):
   - Runs on pushes to main or manual trigger
   - Formats code
   - Builds production CSS (minified)
   - Deploys `src/` directory to GitHub Pages

**Important:** Never commit `src/assets/styles.css` to git. It's generated during deployment.

## Styling Guidelines

1. **Use Tailwind Utilities First:** Prefer Tailwind utility classes over custom CSS
2. **Use Custom Components:** Leverage the extensive custom components defined in input.css
3. **Follow Material Design:** The site uses Material Design principles (shadows, transitions, colors)
4. **Maintain Consistency:** Use existing color palette and spacing scale
5. **Edit input.css Only:** Never manually edit styles.css - it's auto-generated
6. **Mobile Responsive:** Always test mobile layouts; use mobile-first approach

## Content Guidelines

- **Language:** Japanese (ja)
- **Brand Colors:** Primary blue (#4a6fa5), white, grays
- **Typography:** Noto Sans JP font family
- **Icons:** Material Icons or custom SVG icons with mask-image technique
- **Images:** Stored in `src/assets/images/`

## Code Formatting

- **Prettier** is configured with Tailwind plugin
- Print width: 100
- 2-space indentation
- Single quotes
- HTML whitespace sensitivity: ignore
- Format before committing: `npm run format`
