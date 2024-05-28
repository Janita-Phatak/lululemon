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

let currentSlideIndex = 0;
let currentSlideIndex2 = 0;

function slideImage(container, direction, element) {
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

  updateDotList(currentSlideIndex, '.dot-button');
}

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

// Add event listeners to arrows
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

leftArrow.addEventListener('click', () => slideImage('.product-container', 'left'));
rightArrow.addEventListener('click', () => slideImage('.product-container', 'right'));

const leftArrow2 = document.querySelector('.arrow-left2');
const rightArrow2 = document.querySelector('.arrow-right2');

leftArrow2.addEventListener('click', () => slideImage2('.product-container2', 'left'));
rightArrow2.addEventListener('click', () => slideImage2('.product-container2', 'right'));

// Add event listeners to dot buttons
const dotButtons = document.querySelectorAll('.dot-button');
dotButtons.forEach((dotButton, index) => {
  dotButton.addEventListener('click', () => slideImage('.product-container', index));
});

// Initialize the first 4 slides
document.addEventListener('DOMContentLoaded', () => {
  slideImage('.product-container', 0);
});

// Add event listeners to dot buttons
const dotButtons2 = document.querySelectorAll('.dot-button2');
dotButtons2.forEach((dotButton, index) => {
  dotButton.addEventListener('click', () => slideImage2('.product-container2', index));
});

// Initialize the first 4 slides
document.addEventListener('DOMContentLoaded', () => {
  slideImage2('.product-container2', 0);
});


document.addEventListener('DOMContentLoaded', function() {
  // Hide the detailNav by default
  const detailNav = document.querySelector('.detailNav');
  detailNav.style.display = 'none';

  // Get all menu items
  const menuItems = document.querySelectorAll('.menu ul li');

  // Get the Shoes menu item
  const shoesMenuItem = document.querySelector('.menu ul li:nth-child(4)');

  // Flag to track if the detailNav is being hovered
  let isDetailNavHovered = false;

  // Add event listeners to show/hide the detailNav
  shoesMenuItem.addEventListener('mouseenter', function() {
      // Show the detailNav when hovering over the Shoes menu item
      detailNav.style.display = 'grid';
  });

  shoesMenuItem.addEventListener('mouseleave', function() {
      // Hide the detailNav when mouse leaves the Shoes menu item, unless detailNav is being hovered
      if (!isDetailNavHovered) {
          detailNav.style.display = 'none';
      }
  });

  // Add event listener to detailNav to set isDetailNavHovered flag
  detailNav.addEventListener('mouseenter', function() {
      isDetailNavHovered = true;
  });

  // Add event listener to detailNav to reset isDetailNavHovered flag
  detailNav.addEventListener('mouseleave', function() {
      isDetailNavHovered = false;
  });

  // Add event listeners to hide the detailNav when hovering over other menu items
  menuItems.forEach(function(menuItem) {
      if (menuItem !== shoesMenuItem) {
          menuItem.addEventListener('mouseenter', function() {
              // Hide the detailNav when hovering over other menu items
              detailNav.style.display = 'none';
          });
      }
  });
});
