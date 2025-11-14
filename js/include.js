document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const isInIndexes = currentPath.includes('/indexes/') || currentPath.includes('\\indexes\\');
  
  const navbarPath = isInIndexes ? "./navbar.html" : "indexes/navbar.html";
  const footerPath = isInIndexes ? "./footer.html" : "indexes/footer.html";
  
  loadHTML(navbarPath, "#navbar");
  loadHTML(footerPath, "#footer");
});

function loadHTML(file, selector) {
  fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      const element = document.querySelector(selector);
      if (element) {
        element.innerHTML = data;
        
        if (selector === '#navbar') {
          setTimeout(() => {
            if (typeof initializeMenu === 'function') {
              initializeMenu();
            }
            if (typeof toggleMenu !== 'undefined') {
              console.log('toggleMenu is available');
            }
          }, 150);
        }
      } else {
        console.warn(`Selector ${selector} not found`);
      }
    })
    .catch(error => console.error(`Error loading ${file}:`, error));
}
//41272053 33 249550