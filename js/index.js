const carousel = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
let interval;

function startCarousel() {
  interval = setInterval(() => {
    currentIndex++;
    if (currentIndex > carouselItems.length - 1) {
      currentIndex = 0;
    }
    carousel.style.transform = `translateX(-${currentIndex * 33.33}%)`;
  }, 5000);
}

function stopCarousel() {
  clearInterval(interval);
}

startCarousel();

prevBtn.addEventListener('click', () => {
  stopCarousel();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  }
  carousel.style.transform = `translateX(-${currentIndex * 33.33}%)`;
  startCarousel();
});

nextBtn.addEventListener('click', () => {
  stopCarousel();
  currentIndex++;
  if (currentIndex > carouselItems.length - 1) {
    currentIndex = 0;
  }
  carousel.style.transform = `translateX(-${currentIndex * 33.33}%)`;
  startCarousel();
});