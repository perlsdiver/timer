# GEMINI Context: Focus Timer

A minimalist, multi-theme Pomodoro-style web application designed for task focus with alternating work and break sessions.

## Project Overview

- **Purpose:** A lightweight, customizable "Focus Timer" for productivity, originally developed as part of a CAIL Workshop and later enhanced with goal tracking and advanced styling.
- **Technology Stack:** Vanilla HTML5, CSS3, and JavaScript (ES6+).
- **Architecture:** 
    - **Frontend:** Static HTML/CSS/JS architecture.
    - **Configuration:** Branding and metadata stored in `site-config.json`.
    - **Logic:** Decoupled into initialization (`app-init.js`), core timer mechanics (`timer.js`), utility functions (`helpers.js`), and a theme/design management system (`theme.js`).

## Directory Structure

- `index.html`: The main entry point, UI structure, and style toggling bridge.
- `site-config.json`: External configuration for application branding and metadata.
- `notes.txt`: Development log and planned improvements.
- `assets/`:
    - `site-icon.svg`: The application's SVG logo/icon.
- `css/`:
    - `main.css`: Base layout and general styling.
    - `timer-styles.css`: Component-specific styling for the timer and cards.
    - `brutalist.css`: Alternative high-contrast "Digital Brutalism" light theme.
    - `dark-brutalist.css`: Alternative high-contrast "Digital Brutalism" dark theme.
- `js/`:
    - `app-init.js`: Page initialization and dynamic metadata fetching.
    - `timer.js`: Core timer logic (intervals, mode switching, display) and **Goal Tracking**.
    - `helpers.js`: Shared utility functions (string padding, date formatting, session logging).
    - `js/theme.js`: Manages theme cycling (Original, Brutalist, Dark Brutalist) and persistence.
- `archive/`: Legacy backups and temporary copies.

## Key Features & Logic

### 1. Timer Mechanics
- **Modes:** Alternates between a 25-minute "Focus" session and a 5-minute "Break" session.
- **Session Logging:** Completed sessions are automatically logged to the UI with a timestamp.

### 2. Goal Tracking
- **Persistence:** Current focus goals are saved to `localStorage` in real-time.
- **Display:** The goal is displayed prominently during focus sessions to maintain user focus.

### 3. Multi-Theme System
Supports cycling between three distinct aesthetics via a toggle button:
1. **Original:** Modern dark mode aesthetic (default).
2. **Brutalist:** High-contrast light mode with neon yellow/magenta accents and bold shadows.
3. **Dark Brutalist:** High-contrast pure black mode with neon green accents and white borders.
- **Persistence:** User theme choice is stored in `localStorage` and persists across sessions.

## Usage & Development

### Running the Project
The application uses the `fetch()` API for configuration. Serve via a local web server to avoid CORS issues:

**Option 1: Node.js (npx)**
```bash
npx serve .
```

**Option 2: Python**
```bash
python3 -m http.server
```

## Development Conventions

- **Naming:** All files and directories use lowercase kebab-case.
- **JavaScript:** Vanilla JS with modern ES6+ features; no external dependencies.
- **Styling:** Layout managed via Flexbox with theme-specific overrides using CSS classes on the `<body>`.

## Planned Improvements (TODO)
- [ ] Consolidate base CSS files into a more unified structure.
- [ ] Implement audio notifications (sound effects) when a timer session ends.
- [ ] Migrate inline styles from `index.html` to a dedicated theme override file.
- [ ] Add session log persistence to `localStorage`.
