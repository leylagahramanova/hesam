// Navbar

function toggleMenu() {
  const menu = document.getElementById("slideMenu");
  const overlay = document.getElementById("overlay");

  const isOpen = menu.style.left === "0px";

  if (isOpen) {
    menu.style.left = "-250px";
    overlay.classList.remove("active");
  } else {
    menu.style.left = "0px";
    overlay.classList.add("active");
  }
}



document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggle = document.querySelector('.responsive-dropdown-toggle');
  const dropdownWrapper = document.querySelector('.responsive-dropdown');

  dropdownToggle.addEventListener('click', function (e) {
    e.preventDefault();
    dropdownWrapper.classList.toggle('active3');
  });

  // Dışarıya tıklanınca dropdown'ı kapat
  document.addEventListener('click', function (e) {
    const isClickInside = dropdownWrapper.contains(e.target);
    if (!isClickInside) {
      dropdownWrapper.classList.remove('active3');
    }
  });
});






// Ovtomatik geçiş, bunu aktiv ele:
// setInterval(() => {
//   currentIndex = (currentIndex + 1) % slides.length;
//   showSlide(currentIndex);
// }, 7000);



// Section 2 - Üstünlüklər  - {START} 

const tabs = document.querySelectorAll('.tab');
const imageContainer = document.querySelector('.tabRelationImageContainer');
let lastHoveredTab = document.querySelector('.tab.active'); // başlangıçta aktif olan

function setBackgroundFromTab(tab) {
  const image = tab.getAttribute('data-image');
  imageContainer.style.backgroundImage = `url('${image}')`;
}

tabs.forEach(tab => {
  tab.addEventListener('mouseenter', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    setBackgroundFromTab(tab);
    lastHoveredTab = tab; // son hover yapılanı güncelle
  });

  tab.addEventListener('mouseleave', () => {
    tabs.forEach(t => t.classList.remove('active'));
    lastHoveredTab.classList.add('active'); // en son hover yapılan aktif kalsın
    setBackgroundFromTab(lastHoveredTab);
  });
});

// Sayfa yüklendiğinde ilk tab'ı göster
window.addEventListener('DOMContentLoaded', () => {
  const firstTab = tabs[0];
  if (firstTab) {
    firstTab.classList.add('active');
    setBackgroundFromTab(firstTab);
    lastHoveredTab = firstTab;
  }
});



//   Haqqimizda



const benefisTabs = document.querySelectorAll('.gradientTabs button');

const leftTitle = document.querySelector('.tabSlider-left h3');
const leftPurpose = document.querySelector('.one-left p');
const leftValues = document.querySelector('.two-left p');
const leftPromise = document.querySelector('.three-left p');

const rightTitle = document.querySelector('.tabSlider-right h3');
const rightPurpose = document.querySelector('.one-right p');
const rightValues = document.querySelector('.two-right p');
const rightPromise = document.querySelector('.three-right p');

let benefisLastHoveredTab = null;

function updateTabContent(tab) {
  if (!tab) return;

  const title = tab.dataset.title || '';

  const purposeText = tab.dataset.purposeText || '';
  const valuesText = tab.dataset.valuesText || '';
  const promiseText = tab.dataset.promiseText || '';

  leftTitle.textContent = title;
  leftPurpose.textContent = purposeText;
  leftValues.textContent = valuesText;
  leftPromise.textContent = promiseText;

  rightTitle.textContent = title;
  rightPurpose.textContent = purposeText;
  rightValues.textContent = valuesText;
  rightPromise.textContent = promiseText;

}

benefisTabs.forEach(tab => {
  tab.addEventListener('mouseenter', () => {
    benefisTabs.forEach(t => t.classList.remove('BenefistActive'));
    tab.classList.add('BenefistActive');
    updateTabContent(tab);
  });

  tab.addEventListener('mouseleave', () => {
    benefisLastHoveredTab = tab;
  });
});

window.addEventListener('mousemove', e => {
  if (!e.target.closest('.gradientTabs')) {
    benefisTabs.forEach(t => t.classList.remove('BenefistActive'));
    if (benefisLastHoveredTab) {
      benefisLastHoveredTab.classList.add('BenefistActive');
      updateTabContent(benefisLastHoveredTab);
    }
  }
});

// Sayfa yüklendiğinde ilk tab seçilsin
window.addEventListener('DOMContentLoaded', () => {
  const firstTab = benefisTabs[0];
  if (firstTab) {
    firstTab.classList.add('BenefistActive');
    benefisLastHoveredTab = firstTab;
    updateTabContent(firstTab);
  }
});




// Faqq
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isOpen = item.classList.contains('active');

    document.querySelectorAll('.faqAccordion-item').forEach(i => i.classList.remove('active'));

    if (!isOpen) {
      item.classList.add('active');
    }
  });
});


// Contact

const button = document.querySelector('.contatButton');

        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            button.style.setProperty('--x', `${x}px`);
            button.style.setProperty('--y', `${y}px`);
        });