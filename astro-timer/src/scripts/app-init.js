// runs on load — sets up the page from config
fetch("site-config.json")
  .then(function (res) { return res.json(); })
  .then(function (data) {
    document.title = data.title;
    document.querySelector("header h1").textContent = data.title;
    const workshopEl = document.getElementById("workshop-name");
    if (workshopEl) workshopEl.textContent = data.workshop;
  })
  .catch(function () {
    // config didn't load, that's fine — defaults are in the HTML
  });

// Fetch AID History
fetch("aid-history.json")
  .then(function (res) { return res.json(); })
  .then(function (data) {
    const aidText = document.getElementById("aid-statement-text");
    const aidToken = document.getElementById("aid-token-count");
    if (aidText && data.history && data.history.length > 0) {
      aidText.textContent = data.history[0].statement;
    }
    if (aidToken) {
      aidToken.textContent = data.total_tokens_estimated.toLocaleString();
    }
  })
  .catch(function (err) {
    console.warn("AID history not found", err);
  });

// Disclosure Toggle Logic
const toggleBtn = document.getElementById("aid-toggle");
const drawer = document.getElementById("aid-drawer");

if (toggleBtn && drawer) {
  toggleBtn.addEventListener("click", function() {
    drawer.classList.toggle("hidden");
    toggleBtn.textContent = drawer.classList.contains("hidden") ? "📜 AID LOG" : "✖ CLOSE";
  });
}
