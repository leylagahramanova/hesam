document.addEventListener("DOMContentLoaded", () => {
  loadHTML("navbar.html", "#navbar");
  loadHTML("footer.html", "#footer");
});

function loadHTML(file, selector) {
  fetch(file)
    .then(response => response.text())
    .then(data => document.querySelector(selector).innerHTML = data)
    .catch(error => console.error(`Error loading ${file}:`, error));
}