# GEMINI Context: Frankentimer

A feature-rich, multi-theme Pomodoro-style web application designed for task focus with alternating work and break sessions. **Frankentimer** is a "living" project—a digital canvas that grows and evolves through continuous experimentation and negotiation between the user and **Gemini**.

## Project Overview

- **Purpose:** A customizable "Timer" for productivity, exploring the boundaries of "vibe coding" prototypes.
- **Technology Stack:** Dual-architecture supporting both Vanilla HTML5/CSS3/JS and Astro (SSG).
- **Transparency:** Features a **Live AID Log** that tracks AI contributions and "Accumulated Energy" (token usage) in real-time.
- **Deployment:** [https://perlsdiver.github.io/timer/](https://perlsdiver.github.io/timer/)

**AID Statement:** Artificial Intelligence Tool: Gemini 2.0 Flash (via Gemini CLI); Execution: Repositioned AID disclosure drawer to right-260px to resolve UI overlap with Style switcher; Writing—Review & Editing: Updated project context documentation.

## Directory Structure

- `index.html`: Entry point for the Vanilla version.
- `astro-timer/`: Source code for the Astro framework version.
- `astro/`: Production deployment build of the Astro version.
- `aid-history.json`: Single source of truth for the project's AI disclosure history and token tracking.
- `css/` & `js/`: Core logic and styles (Vanilla version).
- `assets/`: Shared audio and icons.

## Key Features

- **Dynamic Timer:** Supports Pomodoro, Short Break, and Long Break with customizable durations and local persistence.
- **Multi-Theme System:** 
    - **Aesthetics:** Dark Minimalist, Brutalist Light, Brutalist Dark, Indieweb Cat Town.
    - **Randomizer:** Dynamically generates unique color, font, and background combinations.
    - **Cursors:** Custom theme-specific mouse cursors (e.g., 🐱, crosshair, vertical-text).
- **Live AID Log:** A themed disclosure drawer (bottom-right, repositioned for accessibility) displaying the latest AID Statement and accumulated token counts.
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

- **March 13, 2026 (v1.3.1):** Repositioned AID LOG button to clear "STYLE" label overlap. Fixed relative fetch paths for Astro deployment.
- **March 13, 2026 (v1.3.0):** Implemented **Live AID Log** with themed disclosure drawer and `aid-history.json` architecture. Added version switcher.
- **March 13, 2026 (v1.2.0):** Rebranded to **Frankentimer**. Integrated the AID Framework. Migrated to Astro.
- **March 12, 2026 (v1.1.0):** Massive theme expansion and feature parity with Pomofocus.
- **March 10, 2026 (v1.0.0):** Initial prototype creation at the CUNY AI Lab workshop.

## Development Conventions

- **AID Compliance:** ALL future updates MUST follow the AID Framework protocol. Update `aid-history.json` and the `AID Statement` in all documentation as the first step of the Execution phase.
- **Living Project:** Documentation and code should reflect the project's evolutionary nature.
- **Vanilla JS:** Core logic remains dependency-free (ES6+).
- **Git:** Never stage or commit changes unless explicitly requested.
