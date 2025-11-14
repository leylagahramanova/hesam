//MENU
// Make toggleMenu globally available immediately
window.toggleMenu = function () {
  const hamburger = document.querySelector('.hamburger');
  const close = document.querySelector('.close-btn');
  const menu = document.querySelector('.menu');
  const overlay = document.querySelector('.overlay');

  if (!hamburger || !close || !menu || !overlay) return;

  menu.classList.toggle('show');
  hamburger.classList.toggle('non-active');
  close.classList.toggle('active');
  overlay.classList.toggle('show');
};
//MODAL
function openModal() {
  const modal = document.querySelector('.modal');
  if (!modal) return;
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.querySelector('.modal');
  if (!modal) return;
  modal.style.display = 'none';
}

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('.contact');
  if (trigger) {
    event.preventDefault();
    openModal();
  }

  if (event.target.closest('.modal .close')) {
    closeModal();
  }

  const modal = document.querySelector('.modal');
  if (modal && event.target === modal) {
    closeModal();
  }
});
//FAQ
const items = document.querySelectorAll('.resources-item-wrapper');
const resourcesList = document.querySelector('.resources-items');

items.forEach(item => {
  const desc = item.querySelector('.description');
  desc.style.overflow = 'hidden';
  desc.style.transition = 'max-height 0.4s ease';
  desc.style.maxHeight = '0';

  item.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    items.forEach(i => {
      i.classList.remove('active');
      i.querySelector('.description').style.maxHeight = '0';
    });

    if (!isOpen) {
      item.classList.add('active');
      desc.style.maxHeight = desc.scrollHeight + 'px';
    }

    if (resourcesList) {
      const hasActive = Array.from(items).some(i => i.classList.contains('active'));
      resourcesList.classList.toggle('scrollable', hasActive);
    }
  });
});

//CAROUSEL
const carouselWrapper = document.querySelector('.carousel');
const slides = Array.from(document.querySelectorAll('.slide'));
const totalSlides = slides.length;
const currentNum = document.getElementById('current');
const totalNum = document.getElementById('total');
const progressLine = document.querySelector('.progress-line');
let current = 0;
let intervalId;

totalNum.textContent = `0${totalSlides}`;

// Clone first and last slides
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);
carouselWrapper.appendChild(firstClone);
carouselWrapper.insertBefore(lastClone, slides[0]);

// Update slides array to include clones
const allSlides = Array.from(document.querySelectorAll('.slide'));

// Arrange slides horizontally
allSlides.forEach((slide, i) => {
  slide.style.left = `${i * 100}%`;
  slide.style.transition = 'transform 0.8s ease';
  slide.style.opacity = 1; // keep visible
  slide.style.position = 'absolute'; // important
});

// Start from the first real slide (index 1 because index 0 is lastClone)
let realIndex = 1;

function moveToSlide(index, instant = false) {
  allSlides.forEach(slide => {
    slide.style.transition = instant ? 'none' : 'transform 0.8s ease';
    slide.style.transform = `translateX(-${index * 100}%)`;
  });

  // Update counter (ignore clones)
  let displayIndex = index - 1;
  if (displayIndex < 0) displayIndex = totalSlides - 1;
  if (displayIndex >= totalSlides) displayIndex = 0;
  currentNum.textContent = `0${displayIndex + 1}`;

  // Restart progress animation
  progressLine.classList.remove('animate');
  void progressLine.offsetWidth;
  progressLine.classList.add('animate');
}

function nextSlide() {
  realIndex++;
  moveToSlide(realIndex);
  if (realIndex > totalSlides) {
    setTimeout(() => moveToSlide(1, true), 800);
    realIndex = 1;
  }
}

function prevSlide() {
  realIndex--;
  moveToSlide(realIndex);
  if (realIndex < 1) {
    setTimeout(() => moveToSlide(totalSlides, true), 800);
    realIndex = totalSlides;
  }
}

// Buttons
document.getElementById('next').addEventListener('click', () => {
  nextSlide();
  resetInterval();
});
document.getElementById('prev').addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

// Auto-slide
function startInterval() {
  intervalId = setInterval(nextSlide, 6000);
}
function resetInterval() {
  clearInterval(intervalId);
  startInterval();
}

// Initialize carousel at first real slide
moveToSlide(realIndex, true);
startInterval();


