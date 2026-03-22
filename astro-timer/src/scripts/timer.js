// === MAIN TIMER LOGIC ===

const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");
const sessionLog = document.getElementById("session-log");

const pomodoroBtn = document.getElementById("pomodoro-btn");
const phdBtn = document.getElementById("phd-btn");
const shortBtn = document.getElementById("short-btn");
const longBtn = document.getElementById("long-btn");

const settingsModal = document.getElementById("settings-modal");
const openSettingsBtn = document.getElementById("open-settings-btn");
const closeSettingsBtn = document.getElementById("close-settings-btn");
const saveSettingsBtn = document.getElementById("save-settings-btn");

const pomodoroInput = document.getElementById("pomodoro-duration");
const shortInput = document.getElementById("short-duration");
const longInput = document.getElementById("long-duration");

const alarmSound = new Audio("/alarm.mp3");

// Default Settings
let settings = {
  pomodoro: 25,
  phd: 30,
  short: 5,
  long: 15
};

let currentMode = 'pomodoro'; // 'pomodoro', 'phd', 'short', 'long'
let remaining = settings.pomodoro * 60;
let interval = null;
let isRunning = false;

// Load settings from localStorage
function loadSettings() {
  const savedSettings = localStorage.getItem("timer-settings");
  if (savedSettings) {
    settings = JSON.parse(savedSettings);
    if (!settings.phd) settings.phd = 30;
    
    pomodoroInput.value = settings.pomodoro;
    shortInput.value = settings.short;
    longInput.value = settings.long;
  }
  
  // Update initial display based on default/loaded settings
  remaining = settings[currentMode] * 60;
  updateDisplay();
}

function updateDisplay() {
  const m = Math.floor(remaining / 60);
  const s = remaining % 60;
  timerEl.textContent = pad(m) + ":" + pad(s);
  document.title = `${pad(m)}:${pad(s)} - Frankentimer`;
}

window.pad = function(num) {
  return num < 10 ? "0" + num : num;
}

function switchMode(mode) {
  clearInterval(interval);
  isRunning = false;
  currentMode = mode;
  remaining = settings[mode] * 60;
  
  // UI Updates
  [pomodoroBtn, phdBtn, shortBtn, longBtn].forEach(btn => btn.classList.remove("active"));
  document.getElementById(`${mode}-btn`).classList.add("active");
  
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  updateDisplay();
}

// Timer Controls
startBtn.addEventListener("click", function () {
  if (isRunning) return;
  isRunning = true;
  startBtn.disabled = true;
  pauseBtn.disabled = false;

  interval = setInterval(function () {
    remaining--;
    updateDisplay();

    if (remaining <= 0) {
      clearInterval(interval);
      isRunning = false;
      alarmSound.play();
      
      const modeLabels = {
        'pomodoro': "Focus",
        'phd': "PhD Sprint",
        'short': "Short Break",
        'long': "Long Break"
      };
      logSession(modeLabels[currentMode], settings[currentMode]);

      startBtn.disabled = false;
      pauseBtn.disabled = true;
    }
  }, 1000);
});

pauseBtn.addEventListener("click", function () {
  clearInterval(interval);
  isRunning = false;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
});

resetBtn.addEventListener("click", function () {
  clearInterval(interval);
  isRunning = false;
  remaining = settings[currentMode] * 60;
  updateDisplay();
  startBtn.disabled = false;
  pauseBtn.disabled = true;
});

// Mode Switch Listeners
pomodoroBtn.addEventListener("click", () => switchMode('pomodoro'));
phdBtn.addEventListener("click", () => switchMode('phd'));
shortBtn.addEventListener("click", () => switchMode('short'));
longBtn.addEventListener("click", () => switchMode('long'));

// Settings Modal Logic
openSettingsBtn.addEventListener("click", () => {
  settingsModal.classList.remove("hidden");
});

closeSettingsBtn.addEventListener("click", () => {
  settingsModal.classList.add("hidden");
});

saveSettingsBtn.addEventListener("click", () => {
  settings.pomodoro = parseInt(pomodoroInput.value) || 25;
  settings.short = parseInt(shortInput.value) || 5;
  settings.long = parseInt(longInput.value) || 15;
  
  localStorage.setItem("timer-settings", JSON.stringify(settings));
  
  // If not running, update current remaining time
  if (!isRunning) {
    remaining = settings[currentMode] * 60;
    updateDisplay();
  }
  
  settingsModal.classList.add("hidden");
});

// === GOAL LOGIC ===
const goalInput = document.getElementById("goal-input");
const goalDisplay = document.getElementById("goal-display");
const currentGoalText = document.getElementById("current-goal-text");

const savedGoal = localStorage.getItem("focus-goal");
if (savedGoal) {
  goalInput.value = savedGoal;
  updateGoalDisplay(savedGoal);
}

goalInput.addEventListener("input", function (e) {
  const goal = e.target.value;
  localStorage.setItem("focus-goal", goal);
  updateGoalDisplay(goal);
});

function updateGoalDisplay(goal) {
  if (goal.trim()) {
    currentGoalText.textContent = goal;
    goalDisplay.classList.remove("hidden");
  } else {
    goalDisplay.classList.add("hidden");
  }
}

// Initialize
loadSettings();
