const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const currentNum = document.getElementById('current');
const totalNum = document.getElementById('total');
const progress = document.querySelector('.progress-line::after'); // CSS animation restarts via class
let current = 0;

totalNum.textContent = `0${totalSlides}`;

// Buttons
document.getElementById('next').addEventListener('click', () => changeSlide(current + 1));
document.getElementById('prev').addEventListener('click', () => changeSlide(current - 1));

function changeSlide(index) {
  slides[current].classList.remove('active');
  current = (index + totalSlides) % totalSlides;
  slides[current].classList.add('active');

  // Update counter
  currentNum.textContent = `0${current + 1}`;
  
  // Restart progress animation
  const line = document.querySelector('.progress-line');
  line.classList.remove('animate');
  void line.offsetWidth; // trigger reflow
  line.classList.add('animate');
}

setInterval(() => changeSlide(current + 1), 6000);
