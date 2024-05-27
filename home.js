let currentSlideIndex = 0;

function slideImage(container, direction) {
  const productContainer = document.querySelector(container);
  const slides = productContainer.querySelectorAll('.product.card');
  const visibleSlidesCount = 4;
  const totalSlides = slides.length;

  if (direction === 'left') {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
  } else if (direction === 'right') {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
  } else if (typeof direction === 'number') {
    currentSlideIndex = direction;
  }

  const startIndex = currentSlideIndex;
  const endIndex = (currentSlideIndex + visibleSlidesCount) % totalSlides;

  slides.forEach((slide, index) => {
    if (index >= startIndex && index < startIndex + visibleSlidesCount) {
      slide.style.display = 'block';
    } else if (endIndex < startIndex && (index >= startIndex || index < endIndex)) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });

  updateDotList(currentSlideIndex);
}

function getCurrentSlideIndex() {
  const activeDot = document.querySelector('.dot-button.active');
  return parseInt(activeDot.getAttribute('aria-label').split('of')[0].split(' ')[1]) - 1;
}

function updateDotList(newSlideIndex) {
  const dotButtons = document.querySelectorAll('.dot-button');
  dotButtons.forEach((dotButton, index) => {
    dotButton.classList.toggle('active', index === newSlideIndex);
  });
}

// Add event listeners to arrows
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

leftArrow.addEventListener('click', () => slideImage('.product-container', 'left'));
rightArrow.addEventListener('click', () => slideImage('.product-container', 'right'));

// Add event listeners to dot buttons
const dotButtons = document.querySelectorAll('.dot-button');
dotButtons.forEach((dotButton, index) => {
  dotButton.addEventListener('click', () => slideImage('.product-container', index));
});

// Initialize the first 4 slides
document.addEventListener('DOMContentLoaded', () => {
  slideImage('.product-container', 0);
});
