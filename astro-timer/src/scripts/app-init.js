// runs on load — sets up the page from config
fetch("site-config.json")
  .then(function (res) { return res.json(); })
  .then(function (data) {
    document.title = data.title;
    document.querySelector("header h1").textContent = data.title;
    document.getElementById("workshop-name").textContent = data.workshop;
  })
  .catch(function () {
    // config didn't load, that's fine — defaults are in the HTML
  });
