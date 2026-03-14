# GEMINI Context: Frankentimer (formerly Focus Timer)

A feature-rich, multi-theme Pomodoro-style web application designed for task focus with alternating work and break sessions.

## Project Overview

- **Purpose:** A customizable "Timer" for productivity, originally developed as part of a CUNY AI Lab workshop and enhanced with goal tracking, advanced styling, and custom audio.
- **Technology Stack:** Vanilla HTML5, CSS3, and JavaScript (ES6+).
- **Deployment:** Hosted on GitHub Pages at [https://perlsdiver.github.io/timer/](https://perlsdiver.github.io/timer/).
- **Architecture:** 
    - **Frontend:** Static HTML/CSS/JS architecture.
    - **Logic:** Decoupled into initialization (`app-init.js`), core timer mechanics (`timer.js`), utility functions (`helpers.js`), and a theme management system (`theme.js`).

## Directory Structure

- `index.html`: Main entry point, UI structure, and mode/theme switcher.
- `assets/`:
    - `site-icon.svg`: Application logo/icon.
    - `alarm.mp3`: HQ bell sound for timer completion.
- `css/`:
    - `main.css`: Base layout and general styling.
    - `timer-styles.css`: Component-specific styling for the timer, cards, and settings modal.
    - `brutalist.css`: Alternative high-contrast "Digital Brutalism" light theme.
    - `dark-brutalist.css`: Alternative high-contrast "Digital Brutalism" dark theme.
    - `indie-cat.css`: Indie Web aesthetic with cat background pattern.
- `js/`:
    - `timer.js`: Core timer logic, mode switching (Pomodoro, Short Break, Long Break), and **Settings Modal**.
    - `theme.js`: Manages theme selection (dropdown), persistence, and the **Randomizer** logic.
    - `helpers.js`: Shared utility functions (padding, logging).
    - `app-init.js`: Page initialization.

## Key Features & Logic

### 1. Timer Mechanics & Settings
- **Modes:** Supports **Pomodoro**, **Short Break**, and **Long Break**.
- **Settings Modal:** Users can customize the duration (in minutes) for each mode via an in-app modal.
- **Persistence:** Timer durations and focus goals are saved to `localStorage`.
- **Audio:** Plays a bell sound (`alarm.mp3`) when a session reaches zero.

### 2. Multi-Theme System
Supports multiple distinct aesthetics via a dropdown menu:
1. **Dark Minimalist:** Clean, modern dark mode (default). Cursor: `crosshair`.
2. **Brutalist Light:** High-contrast light mode, neon accents. Cursor: `vertical-text`.
3. **Brutalist Dark:** High-contrast dark mode, neon green accents. Cursor: `cell`.
4. **Indieweb Cat Town:** Cozy aesthetic with cat background and dashed borders. Cursor: `🐱`.
5. **Randomizer:** Dynamically generates a unique combination of colors, fonts, and backgrounds (Picsum Photos) each time it is selected.

## Attribution Mandates (CRITICAL)

All versions of the application MUST maintain the following attributions in the footer:
- **Workshop:** [CUNY AI Lab workshop](https://ailab.gc.cuny.edu/)
- **Features:** [Pomofocus.io](https://pomofocus.io/)
- **Audio:** [HerbertBoland](https://freesound.org/people/HerbertBoland/sounds/30153/) via Freesound.org.
- **Images:** [PlaceCats.com](https://placecats.com/) and [Picsum Photos](https://picsum.photos/).

## Development Conventions

- **Naming:** Lowercase kebab-case for files and directories.
- **JavaScript:** Vanilla JS (ES6+); no external libraries.
- **Styling:** Layout via Flexbox/Grid. Theme-specific overrides use classes on the `<body>` (e.g., `.theme-brutalist`).
- **Git:** Never stage or commit changes unless explicitly requested. Always propose a draft commit message.
