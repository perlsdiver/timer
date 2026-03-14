# GEMINI Context: Frankentimer

A feature-rich, multi-theme Pomodoro-style web application designed for task focus with alternating work and break sessions. **Frankentimer** is a "living" project—a digital canvas that grows and evolves through continuous experimentation and negotiation between the user and **Gemini**.

## Project Overview

- **Purpose:** A customizable "Timer" for productivity, exploring the boundaries of "vibe coding" prototypes.
- **Technology Stack:** Dual-architecture supporting both Vanilla HTML5/CSS3/JS and Astro (SSG).
- **Deployment:** [https://perlsdiver.github.io/timer/](https://perlsdiver.github.io/timer/)
- **Philosophy:** Part of the **CUNY AI Lab workshop** series, this project is built on the principle of iterative, interactive development.

**AID Statement:** Artificial Intelligence Tool: Gemini 2.0 Flash (via Gemini CLI); Execution: Used for writing HTML - CSS - and JavaScript code; Data Curation: Used to organize project files and directory structure; Writing—Review & Editing: Used to generate documentation and changelog entries.

## Directory Structure

- `index.html`: Entry point for the Vanilla version.
- `astro-timer/`: Source code for the Astro framework version.
- `astro/`: Production deployment build of the Astro version.
- `css/` & `js/`: Core logic and styles (Vanilla version).
- `assets/`: Shared audio and icons.

## Key Features

- **Dynamic Timer:** Supports Pomodoro, Short Break, and Long Break with customizable durations and local persistence.
- **Multi-Theme System:** 
    - **Aesthetics:** Dark Minimalist, Brutalist Light, Brutalist Dark, Indieweb Cat Town.
    - **Randomizer:** Dynamically generates unique color, font, and background combinations.
    - **Cursors:** Custom theme-specific mouse cursors (e.g., 🐱, crosshair, vertical-text).
- **Goal Tracking:** Real-time focus goal input and display.
- **Audio Alerts:** Bell sound triggers on session completion.

## Attribution & Ethical Mandates (CRITICAL)

All versions of the application MUST maintain the following in the footer:
- **Workshop:** [CUNY AI Lab workshop](https://ailab.gc.cuny.edu/)
- **AI Disclosure:** [AI Use Disclosure Guide (AID Framework)](https://crln.acrl.org/index.php/crlnews/article/view/26548/34482)
- **Features:** [Pomofocus.io](https://pomofocus.io/)
- **Audio:** ["Bell" by HerbertBoland](https://freesound.org/people/HerbertBoland/sounds/30153/) via Freesound.org.
- **Images:** [PlaceCats.com](https://placecats.com/) and [Picsum Photos](https://picsum.photos/).

## Project Evolution (Changelog)

- **March 13, 2026:** Rebranded to **Frankentimer**. Integrated the AID Framework. Migrated to Astro while preserving the Vanilla version. Unified UI link styles and expanded theme cursors.
- **March 12, 2026:** Massive theme expansion (Brutalist, Indie Cat, Randomizer). Added settings modal, session logging, and HQ audio alerts.
- **March 10, 2026:** Initial prototype creation at the CUNY AI Lab workshop. Basic Pomodoro logic and goal tracking implemented.

## Development Conventions

- **AID Compliance:** For all future updates, follow the Artificial Intelligence Disclosure (AID) Framework protocol.
- **Living Project:** Documentation and code should reflect the project's evolutionary nature.
- **Vanilla JS:** Core logic remains dependency-free (ES6+).
- **Git:** Never stage or commit changes unless explicitly requested.
