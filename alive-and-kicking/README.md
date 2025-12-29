# Alive & Kicking Lobsters

A clean, mobile-first restaurant website for a New England-style lobster shack.

## Tech Stack

- **React 19** + **Vite 7** - Fast development and builds
- **Tailwind CSS v4** - Utility-first styling
- **Bun** - Fast package manager and runner
- **Zustand** - Lightweight state management
- **Framer Motion** - Subtle animations

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed (`curl -fsSL https://bun.sh/install | bash`)

### Installation

```bash
cd alive-and-kicking
bun install
```

### Development

```bash
bun run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

## Project Structure

```
src/
├── main.jsx                 # Entry point with MotionConfig
├── App.jsx                  # Main app component
├── index.css                # Tailwind imports + base styles
├── data/
│   └── menu.js              # Menu items, categories, contact info
├── store/
│   └── useUIStore.js        # Zustand store for UI state
├── hooks/
│   └── useActiveSection.js  # Intersection Observer for nav highlighting
└── components/
    ├── Navbar.jsx           # Sticky nav with mobile menu
    ├── Section.jsx          # Animated section wrapper
    ├── Hero.jsx             # Hero section
    ├── Menu.jsx             # Menu with filter chips
    ├── About.jsx            # About section
    ├── LocationHours.jsx    # Hours & location cards
    ├── Contact.jsx          # Contact form with validation
    ├── Footer.jsx           # Footer with social links
    └── BackToTop.jsx        # Scroll-to-top button
```

## Customization

### Edit Menu Items

Open `src/data/menu.js` to modify:

- **Menu items**: Add/remove items with `name`, `price`, and `category`
- **Categories**: Modify filter options
- **Contact info**: Update address, phone, hours, email, social links

```js
// Example menu item
{
  id: 1,
  name: "Lobster Sandwich",
  price: "$32.95",
  category: "lobster",  // "lobster" | "chowder" | "salad"
}
```

### Edit Contact Information

In `src/data/menu.js`, update the `contactInfo` object:

```js
export const contactInfo = {
  address: "269 Putnam Ave, Cambridge, MA",
  phone: "(617) 876-0451",
  email: "info@aliveandkickinglobsters.com",
  hours: {
    open: "Wed–Sun 11am–8pm",
    closed: "Closed Mon–Tue",
  },
  social: {
    instagram: "https://instagram.com/...",
    facebook: "https://facebook.com/...",
  },
};
```

## Zustand State Management

The UI store (`src/store/useUIStore.js`) manages:

| State | Description |
|-------|-------------|
| `activeSection` | Currently visible section (for nav highlighting) |
| `isMobileNavOpen` | Mobile menu open/closed state |
| `menuFilter` | Active menu filter ("all", "lobster", "chowder", "salad") |

**Persistence**: The `menuFilter` is saved to localStorage so users retain their filter preference.

**Usage in components**:
```js
// Always use selectors for optimal re-renders
const filter = useUIStore((state) => state.menuFilter);
const setFilter = useUIStore((state) => state.setMenuFilter);
```

## Animations

All animations use **Framer Motion** with these features:

| Animation | Location | Type |
|-----------|----------|------|
| Section fade-in | Each section | `whileInView` with viewport detection |
| Mobile menu | Navbar | `AnimatePresence` + staggered children |
| Back-to-top button | Bottom right | Fade in/out based on scroll position |
| Menu item filtering | Menu section | Layout animation on filter change |

**Accessibility**: All animations respect `prefers-reduced-motion` via `<MotionConfig reducedMotion="user">` in `main.jsx`.

## Accessibility

- Semantic HTML landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Proper button elements (not clickable divs)
- Form labels with `htmlFor` attributes
- Focus-visible rings for keyboard navigation
- Reduced motion support for users who prefer it
- Accessible color contrast

## License

MIT
