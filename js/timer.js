// === MAIN TIMER LOGIC ===

const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");
const modeLabel = document.getElementById("mode-label");
const sessionLog = document.getElementById("session-log");

const FOCUS_MINUTES = 25;
const BREAK_MINUTES = 5;

const alarmSound = new Audio("assets/alarm.mp3");

let totalSeconds = FOCUS_MINUTES * 60;
let remaining = totalSeconds;
let interval = null;
let isRunning = false;
let isFocus = true;

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
      logSession(isFocus ? "Focus" : "Break", isFocus ? FOCUS_MINUTES : BREAK_MINUTES);

      // switch mode
      isFocus = !isFocus;
      remaining = (isFocus ? FOCUS_MINUTES : BREAK_MINUTES) * 60;
      totalSeconds = remaining;
      modeLabel.textContent = isFocus ? "Focus" : "Break";
      updateDisplay();
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
  isFocus = true;
  remaining = FOCUS_MINUTES * 60;
  totalSeconds = remaining;
  modeLabel.textContent = "Focus";
  updateDisplay();
  startBtn.disabled = false;
  pauseBtn.disabled = true;
});

function updateDisplay() {
  var m = Math.floor(remaining / 60);
  var s = remaining % 60;
  timerEl.textContent = pad(m) + ":" + pad(s);
}

// === GOAL LOGIC ===
const goalInput = document.getElementById("goal-input");
const goalDisplay = document.getElementById("goal-display");
const currentGoalText = document.getElementById("current-goal-text");

// Load initial goal from localStorage
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
