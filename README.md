# Scrimba Learning Portfolio

A curated collection of mini-projects I built while progressing through the Scrimba Frontend Developer Career Path. Each folder captures a focused skill—from DOM manipulation and responsive layouts to component-driven React development. Think of this repository as both a personal changelog and a set of ready-to-run references for common UI patterns.

## Projects at a Glance

| Project | Directory | Stack | Highlights |
| --- | --- | --- | --- |
| Basketball Scoreboard | `basketball-scoreboard/` | HTML, CSS, JS | Real-time score tracker with custom typography and discrete scoring buttons. |
| Movie Watchlist | `movie_watchlist/` | React, Vite | Componentized UI for showcasing a curated list of films with ratings and metadata. |
| Oldagram Playground | `playground/` | HTML, CSS | Static feed layout mimicking a social timeline, ideal for practicing flexbox and spacing. |
| Mini Portfolio | `scrim-port/` | HTML, CSS | Single-page personal bio with CTA, inputs, and custom fonts. |
| Visit Torshov Guide | `solo-project/` | HTML, CSS | Hero + cards layout promoting travel activities with imagery and descriptive text. |
| Unit Converter | `unit-conversion/` | HTML, CSS, JS | Interactive conversions for length, volume, and mass with live calculations. |

## Running the Projects

- **Static projects (`basketball-scoreboard`, `playground`, `scrim-port`, `solo-project`, `unit-conversion`)**
  Open `index.html` in a browser or use an extension like Live Server for hot reloading.

- **Vite-powered projects (`movie_watchlist`, `solo-project`, `unit-conversion`)**
  ```bash
  npm install
  npm run dev
  ```
  Vite will print a local URL (default `http://localhost:5173`) where you can preview the app.

> Tip: Some folders contain only static assets today. The Vite setup is already in place so that I can iterate quickly if I want to extend them with JavaScript or React later.

## Project Notes

### Basketball Scoreboard (`basketball-scoreboard`)
- Focus: practicing DOM updates and event handlers.
- Features: home/guest score panels, `+1/+2/+3` buttons, retro scoreboard aesthetic using custom fonts.
- Next idea: persist scores in `localStorage` or add a timer.

### Movie Watchlist (`movie_watchlist`)
- Focus: React component architecture and prop-driven UIs.
- Features: `Header`, `Searchbar`, and `Card` components backed by a `cardData` constant; easy to extend into a full watchlist by wiring the search input to an API such as OMDb.
- Next idea: add context or Zustand for global state and bookmarking.

### Oldagram Playground (`playground`)
- Focus: mastering flexbox/grid spacing and reusable social post markup.
- Features: feed-style layout with avatars, metadata, action icons, and copy; great for experimenting with responsive tweaks.

### Mini Portfolio (`scrim-port`)
- Focus: semantic HTML and typography.
- Features: hero text, quick facts list, CTA button, and input field—everything needed for a simple personal splash page.

### Visit Torshov Guide (`solo-project`)
- Focus: multi-section layout design.
- Features: hero, activities grid with imagery, and guide spotlight card; demonstrates consistent spacing and hierarchy.

### Unit Converter (`unit-conversion`)
- Focus: user input handling and numeric formatting.
- Features: converts between metric/imperial units for length, volume, and mass; updates copy inline with `.toFixed(3)` precision.
- Next idea: validate numbers with better UX feedback and expand into temperature conversions.

## Why This Repo Exists

- 📚 **Learning log** – shows the progression of Scrimba challenges I've completed.
- 🧪 **Playground** – safe space to spike new UI ideas without spinning up a bigger project.
- 🗃️ **Reference** – future me (and recruiters) can quickly review foundational work and code style.

## Contributing / Feedback

This repo is primarily for personal growth, but suggestions are welcome. Open an issue or reach out if you spot improvements—especially around accessibility, responsiveness, or performance tweaks.

---

Happy coding! 🚀



