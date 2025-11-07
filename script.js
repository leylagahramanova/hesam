      const hamburger = document.querySelector('.hamburger');
        const closeBtn = document.querySelector('.close-btn');
        const menu = document.querySelector('.menu');
        const overlay = document.querySelector('.overlay');

        function toggleMenu() {
            menu.classList.toggle('show');
            hamburger.classList.toggle('non-active');
            closeBtn.classList.toggle('active');
            overlay.classList.toggle('show');
        }
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
