window.onscroll = function() {stickHeader()};

function stickHeader() {
  var header = document.getElementById("menu");
  var sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function removeDiv() {
  const div = document.getElementById("InnerBanner");
  div.style.transition='opacity 1s';
  setInterval(() => div.style.opacity=0, 100);
  setInterval(() => div.remove(), 1000);
}

let currentSlideIndex2 = 0;

function slideImage2(container, direction) {
  const productContainer = document.querySelector(container);
  const slides = productContainer.querySelectorAll('.product.card');
  const visibleSlidesCount = 4;
  const totalSlides = slides.length;

  if (direction === 'left') {
    currentSlideIndex2 = (currentSlideIndex2 - 1 + totalSlides) % totalSlides;
  } else if (direction === 'right') {
    currentSlideIndex2 = (currentSlideIndex2 + 1) % totalSlides;
  } else if (typeof direction === 'number') {
    currentSlideIndex2 = direction;
  }

  const startIndex = currentSlideIndex2;
  const endIndex = (currentSlideIndex2 + visibleSlidesCount) % totalSlides;

  slides.forEach((slide, index) => {
    if (index >= startIndex && index < startIndex + visibleSlidesCount) {
      slide.style.display = 'block';
    } else if (endIndex < startIndex && (index >= startIndex || index < endIndex)) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });

  updateDotList(currentSlideIndex2, '.dot-button2');
}

function getCurrentSlideIndex(element) {
  const activeDot = document.querySelector('.'+ element + '.active');
  return parseInt(activeDot.getAttribute('aria-label').split('of')[0].split(' ')[1]) - 1;
}

function updateDotList(newSlideIndex, element) {
  const dotButtons = document.querySelectorAll(element);
  dotButtons.forEach((dotButton, index) => {
    dotButton.classList.toggle('active', index === newSlideIndex);
  });
}


const leftArrow2 = document.querySelector('.arrow-left2');
const rightArrow2 = document.querySelector('.arrow-right2');

leftArrow2.addEventListener('click', () => slideImage2('.product-container2', 'left'));
rightArrow2.addEventListener('click', () => slideImage2('.product-container2', 'right'));

// Add event listeners to dot buttons
const dotButtons2 = document.querySelectorAll('.dot-button2');
dotButtons2.forEach((dotButton, index) => {
  dotButton.addEventListener('click', () => slideImage2('.product-container2', index));
});

// Initialize the first 4 slides
document.addEventListener('DOMContentLoaded', () => {
  slideImage2('.product-container2', 0);
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  // centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  //   dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // breakpoints:{
  //     0: {
  //         slidesPerView: 1,
  //     },
  //     520: {
  //         slidesPerView: 2,
  //     },
  //     950: {
  //         slidesPerView: 3,
  //     },
  // },
});