// === THEME TOGGLE LOGIC ===

const themeSelect = document.getElementById("theme-select");
const body = document.body;

// List of available static themes (classes)
// "" (empty string) represents the original "Dark Minimalist" theme
const themes = ["", "theme-brutalist", "theme-dark-brutalist", "theme-indie-cat", "theme-random"];

// Load saved preference
const savedTheme = localStorage.getItem("focus-theme") || "";
themeSelect.value = savedTheme;
applyTheme(savedTheme);

themeSelect.addEventListener("change", function () {
  const selectedTheme = themeSelect.value;
  applyTheme(selectedTheme);
  localStorage.setItem("focus-theme", selectedTheme);
});

function applyTheme(themeName) {
  // Remove all theme classes
  themes.forEach(t => {
    if (t) body.classList.remove(t);
  });

  // Remove any previous random styles
  const oldRandomStyle = document.getElementById("random-theme-style");
  if (oldRandomStyle) oldRandomStyle.remove();

  if (themeName === "theme-random") {
    body.classList.add("theme-random");
    
    // Check for saved random vibe
    const savedVibe = localStorage.getItem("focus-random-vibe");
    if (savedVibe) {
      const vibe = JSON.parse(savedVibe);
      generateRandomTheme(vibe);
    } else {
      generateRandomTheme();
    }
  } else if (themeName) {
    body.classList.add(themeName);
  }
}

function generateRandomTheme(existingVibe = null) {
  let vibe;
  
  if (existingVibe) {
    vibe = existingVibe;
  } else {
    const hue = Math.floor(Math.random() * 360);
    const fonts = [
      "'Courier New', monospace",
      "system-ui, sans-serif",
      "'Georgia', serif",
      "'Impact', sans-serif",
      "'Comic Sans MS', cursive"
    ];
    const cursors = ["cell", "copy", "wait", "move", "vertical-text", "zoom-in", "grab"];
    
    vibe = {
      hue: hue,
      font: fonts[Math.floor(Math.random() * fonts.length)],
      bgImageId: Math.floor(Math.random() * 1000),
      cursor: cursors[Math.floor(Math.random() * cursors.length)],
      borderRadius: Math.random() > 0.5 ? '0px' : '30px'
    };
    
    localStorage.setItem("focus-random-vibe", JSON.stringify(vibe));
  }

  const bgColor = `hsl(${vibe.hue}, 30%, 90%)`;
  const textColor = `hsl(${vibe.hue}, 60%, 20%)`;
  const accentColor = `hsl(${(vibe.hue + 180) % 360}, 70%, 50%)`;
  const bgUrl = `https://picsum.photos/seed/${vibe.bgImageId}/800/600?blur=5`;

  const styleSheet = document.createElement("style");
  styleSheet.id = "random-theme-style";
  styleSheet.innerHTML = `
    body.theme-random {
      background-color: ${bgColor} !important;
      background-image: url('${bgUrl}') !important;
      background-size: cover !important;
      background-attachment: fixed !important;
      color: ${textColor} !important;
      font-family: ${vibe.font} !important;
      cursor: ${vibe.cursor} !important;
    }
    .theme-random .card {
      background: rgba(255, 255, 255, 0.8) !important;
      backdrop-filter: blur(10px);
      border: 4px solid ${textColor} !important;
      border-radius: ${vibe.borderRadius} !important;
      box-shadow: 10px 10px 0px ${accentColor} !important;
      color: ${textColor} !important;
    }
    .theme-random .timer-display {
      color: ${accentColor} !important;
      font-weight: 900 !important;
    }
    .theme-random button {
      background: ${textColor} !important;
      color: ${bgColor} !important;
      border: none !important;
      padding: 10px 20px !important;
      font-weight: bold !important;
      box-shadow: 4px 4px 0px ${accentColor} !important;
    }
    .theme-random .mode-btn.active {
      background: ${accentColor} !important;
      color: white !important;
    }
    .theme-random #theme-select {
      background: ${bgColor} !important;
      color: ${textColor} !important;
      border: 2px solid ${accentColor} !important;
      font-family: ${vibe.font} !important;
      padding: 5px !important;
    }
  `;
  document.head.appendChild(styleSheet);
}
