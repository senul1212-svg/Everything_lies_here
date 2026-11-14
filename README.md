# Manjitha.dev

A personal website built with React and Vite. It features an interactive Dot Grid background, a responsive navigation bar, a social links dock, and an image carousel.

## Requirements

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (included with Node.js)

## Run locally

```bash
git clone https://github.com/senul1212-svg/Everything_lies_here.git
cd Everything_lies_here
npm install
npm run dev
```

Open the local URL printed by Vite (usually <http://localhost:5173>).

## Production build

```bash
npm run build
npm run preview
```

The optimized site is generated in `dist/`. The preview command serves that build locally.

## Project structure

```text
src/
  components/
    DotGrid/       Interactive full-screen background
    FlexCarousel/  Image carousel
    FloatingDock   Social links dock
    Navbar         Site navigation
  lib/             Shared utilities
  main.jsx         App entry point
  styles.css       Global styles
public/            Static assets
```

## Notes

- The carousel and Dancing Script wordmark load images and fonts from external services, so an internet connection is needed for those assets.
- Update the social profile links in `src/components/FloatingDock.jsx` if your profiles change.
- `node_modules/` and `dist/` are generated locally and are excluded from Git.
