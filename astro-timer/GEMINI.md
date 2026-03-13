# GEMINI Context: Astro Timer

A feature-rich, multi-theme Pomodoro-style web application built with the Astro framework.

## Project Overview

- **Purpose:** A customizable "Timer" for productivity, originally developed as part of a CUNY AI Lab workshop and migrated to Astro for improved componentization and performance.
- **Technology Stack:** Astro, Vanilla CSS3, and JavaScript (ES6+).
- **Architecture:** 
    - **Framework:** Astro (Static Site Generation).
    - **Components:** UI broken into Astro components and layouts.
    - **Logic:** Client-side hydration for timer mechanics and theme management.

## Directory Structure

- `src/layouts/Layout.astro`: The base layout and global style wrapper.
- `src/pages/index.astro`: Main entry point and UI structure.
- `public/`:
    - `site-icon.svg`: Application logo/icon.
    - `alarm.mp3`: HQ bell sound for timer completion.
- `src/styles/`:
    - `main.css`: Base layout and general styling.
    - `timer-styles.css`: Component-specific styling.
    - `brutalist.css`: Alternative high-contrast light theme.
    - `dark-brutalist.css`: Alternative high-contrast dark theme.
    - `indie-cat.css`: Indie Web aesthetic theme.
- `src/scripts/`:
    - `timer.js`: Core timer logic and mode switching.
    - `theme.js`: Theme selection (dropdown) and Randomizer logic.
    - `helpers.js`: Shared utility functions.
    - `app-init.js`: Page initialization.

## Key Features & Logic

### 1. Timer Mechanics & Settings
- **Modes:** Supports **Pomodoro**, **Short Break**, and **Long Break**.
- **Settings Modal:** Customizable durations for each mode.
- **Persistence:** All settings and goals are saved to `localStorage`.
- **Audio:** Plays a bell sound (`alarm.mp3`) when a session ends.

### 2. Multi-Theme System
- **Dark Minimalist**, **Brutalist Light**, **Brutalist Dark**, **Indieweb Cat Town**, and a dynamic **Randomizer**.
- Each theme features unique **custom mouse cursors** and styled dropdown menus.

## Attribution Mandates (CRITICAL)

All versions of the application MUST maintain the following attributions in the footer:
- **Workshop:** [CUNY AI Lab workshop](https://ailab.gc.cuny.edu/)
- **Features:** [Pomofocus.io](https://pomofocus.io/)
- **Audio:** [HerbertBoland](https://freesound.org/people/HerbertBoland/sounds/30153/) via Freesound.org.
- **Images:** [PlaceCats.com](https://placecats.com/) and [Picsum Photos](https://picsum.photos/).

## Usage & Development

```bash
npm install
npm run dev   # Start development server
npm run build # Build for production
```
