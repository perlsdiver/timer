// === THEME TOGGLE LOGIC ===

const themeToggleBtn = document.getElementById("theme-toggle-btn");
const body = document.body;

// List of available themes (classes)
// "" (empty string) represents the original theme
const themes = ["", "theme-brutalist", "theme-dark-brutalist", "theme-indie-cat"];

// Check for saved theme preference
const savedTheme = localStorage.getItem("focus-theme") || "";
let currentThemeIndex = themes.indexOf(savedTheme);

// If for some reason the saved theme isn't in our list, reset to 0
if (currentThemeIndex === -1) currentThemeIndex = 0;

// Apply initial theme
if (themes[currentThemeIndex]) {
  body.classList.add(themes[currentThemeIndex]);
}

themeToggleBtn.addEventListener("click", function () {
  // Remove current theme class
  if (themes[currentThemeIndex]) {
    body.classList.remove(themes[currentThemeIndex]);
  }

  // Cycle to next theme
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;

  // Add new theme class
  const nextTheme = themes[currentThemeIndex];
  if (nextTheme) {
    body.classList.add(nextTheme);
  }

  // Save preference
  localStorage.setItem("focus-theme", nextTheme);
});
