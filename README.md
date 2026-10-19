# Hamilton Masipa Web Development

A responsive React + Vite website for Hamilton Masipa Web Development, with an interactive cinematic 4D-inspired hero scene and project gallery grouped by customer-facing service categories.

## Run locally
1. Install Node.js LTS.
2. Open this project folder in VS Code or a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL Vite prints.

## Build for hosting
Run `npm run build`. The production files are created in `dist/`.

## Project gallery
The gallery includes the 12 published URLs provided by Hamilton, plus earlier portfolio and concept/development projects. Categories are:
- Business websites
- Landing pages
- Online stores
- Custom web applications

Live links open in a new tab. Descriptions are based on the supplied project context and publicly visible site information where available. Some Vercel apps are JavaScript-rendered and did not expose readable page content during automated inspection, so their descriptions intentionally avoid claiming unverified features. The FNB-inspired interface is labelled as a demo and is not presented as an official FNB product or connected to real banking services.

## Dimensional motion experience
- Lightweight canvas-rendered 4D-inspired hypercube projection, secondary 3D wireframe, subtle particles, pointer response, and scroll-linked rotation.
- No large 3D runtime dependency is required.
- The scene caps pixel density, uses fewer particles on smaller screens, pauses when the hero leaves the viewport, and respects `prefers-reduced-motion`.

## Before publishing
- Replace illustrative project previews with screenshots of your real work where available.
- Confirm each project's status and technology stack before describing it as a client delivery.
- Check all external links and contact details before deployment.
- The quote form's behaviour depends on the configuration in `src/main.jsx`; confirm the email form integration is configured before publishing.


## Illustrative project previews
The `public/previews/` directory contains individual visual mockups used in the project gallery. These are illustrative previews generated from the portfolio concept board, not verified screenshots of the live websites. Replace them with real screenshots when available.
