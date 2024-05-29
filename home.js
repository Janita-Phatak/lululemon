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
document.addEventListener('DOMContentLoaded', function() {
  // Hide the detailNavs by default
  const detailNav = document.querySelector('.detailNav');
  const detailNav2 = document.querySelector('.detailNav2');
  const detailNav3 = document.querySelector('.detailNav3');
  const detailNav4 = document.querySelector('.detailNav4');
  const detailNav5 = document.querySelector('.detailNav5');
  detailNav.style.display = 'none';
  detailNav2.style.display = 'none';
  detailNav3.style.display = 'none';
  detailNav4.style.display = 'none';
  detailNav5.style.display = 'none';

  // Get all menu items
  const menuItems = document.querySelectorAll('.menu ul li');

  // Get the specific menu items
  const shoesMenuItem = document.querySelector('.menu ul li:nth-child(4)');
  const shoesMenuItem2 = document.querySelector('.menu ul li:nth-child(1)');
  const shoesMenuItem3 = document.querySelector('.menu ul li:nth-child(2)');
  const shoesMenuItem4 = document.querySelector('.menu ul li:nth-child(3)');
  const shoesMenuItem5 = document.querySelector('.menu ul li:nth-child(6)');

  // Flags to track if the detailNavs or menu items are being hovered
  let isDetailNavHovered = false;
  let isShoesMenuItemHovered = false;
  let isShoesMenuItem2Hovered = false;
  let isShoesMenuItem3Hovered = false;
  let isShoesMenuItem4Hovered = false;
  let isShoesMenuItem5Hovered = false;

  // Add event listeners to show/hide the detailNav for the Shoes menu item
  shoesMenuItem.addEventListener('mouseenter', function() {
      detailNav.style.display = 'grid';
      isShoesMenuItemHovered = true;
  });

  shoesMenuItem.addEventListener('mouseleave', function(event) {
      if (!detailNav.contains(event.relatedTarget)) {
          detailNav.style.display = 'none';
          isShoesMenuItemHovered = false;
      }
  });

  detailNav.addEventListener('mouseenter', function() {
      isDetailNavHovered = true;
      detailNav.style.display = 'grid';
  });

  detailNav.addEventListener('mouseleave', function(event) {
      if (!shoesMenuItem.contains(event.relatedTarget)) {
          isDetailNavHovered = false;
          detailNav.style.display = 'none';
          isShoesMenuItemHovered = false;
      }
  });

  // Add event listeners to show/hide the detailNav2 for the first menu item
  shoesMenuItem2.addEventListener('mouseenter', function() {
      detailNav2.style.display = 'grid';
      isShoesMenuItem2Hovered = true;
  });

  shoesMenuItem2.addEventListener('mouseleave', function(event) {
      if (!detailNav2.contains(event.relatedTarget)) {
          detailNav2.style.display = 'none';
          isShoesMenuItem2Hovered = false;
      }
  });

  detailNav2.addEventListener('mouseenter', function() {
      isDetailNavHovered = true;
      detailNav2.style.display = 'grid';
  });

  detailNav2.addEventListener('mouseleave', function(event) {
      if (!shoesMenuItem2.contains(event.relatedTarget)) {
          isDetailNavHovered = false;
          detailNav2.style.display = 'none';
          isShoesMenuItem2Hovered = false;
      }
  });

  // Add event listeners to show/hide the detailNav3 for the second menu item
  shoesMenuItem3.addEventListener('mouseenter', function() {
      detailNav3.style.display = 'grid';
      isShoesMenuItem3Hovered = true;
  });

  shoesMenuItem3.addEventListener('mouseleave', function(event) {
      if (!detailNav3.contains(event.relatedTarget)) {
          detailNav3.style.display = 'none';
          isShoesMenuItem3Hovered = false;
      }
  });

  detailNav3.addEventListener('mouseenter', function() {
      isDetailNavHovered = true;
      detailNav3.style.display = 'grid';
  });

  detailNav3.addEventListener('mouseleave', function(event) {
      if (!shoesMenuItem3.contains(event.relatedTarget)) {
          isDetailNavHovered = false;
          detailNav3.style.display = 'none';
          isShoesMenuItem3Hovered = false;
      }
  });

  // Add event listeners to show/hide the detailNav4 for the third menu item
  shoesMenuItem4.addEventListener('mouseenter', function() {
      detailNav4.style.display = 'grid';
      isShoesMenuItem4Hovered = true;
  });

  shoesMenuItem4.addEventListener('mouseleave', function(event) {
      if (!detailNav4.contains(event.relatedTarget)) {
          detailNav4.style.display = 'none';
          isShoesMenuItem4Hovered = false;
      }
  });

  detailNav4.addEventListener('mouseenter', function() {
      isDetailNavHovered = true;
      detailNav4.style.display = 'grid';
  });

  detailNav4.addEventListener('mouseleave', function(event) {
      if (!shoesMenuItem4.contains(event.relatedTarget)) {
          isDetailNavHovered = false;
          detailNav4.style.display = 'none';
          isShoesMenuItem4Hovered = false;
      }
  });

  // Add event listeners to show/hide the detailNav5 for the sixth menu item
  shoesMenuItem5.addEventListener('mouseenter', function() {
      detailNav5.style.display = 'grid';
      isShoesMenuItem5Hovered = true;
  });

  shoesMenuItem5.addEventListener('mouseleave', function(event) {
      if (!detailNav5.contains(event.relatedTarget)) {
          detailNav5.style.display = 'none';
          isShoesMenuItem5Hovered = false;
      }
  });

  detailNav5.addEventListener('mouseenter', function() {
      isDetailNavHovered = true;
      detailNav5.style.display = 'grid';
  });

  detailNav5.addEventListener('mouseleave', function(event) {
      if (!shoesMenuItem5.contains(event.relatedTarget)) {
          isDetailNavHovered = false;
          detailNav5.style.display = 'none';
          isShoesMenuItem5Hovered = false;
      }
  });

  // Add event listeners to hide the detailNavs when hovering over other menu items
  menuItems.forEach(function(menuItem) {
      if (menuItem !== shoesMenuItem) {
          menuItem.addEventListener('mouseenter', function() {
              detailNav.style.display = 'none';
              isShoesMenuItemHovered = false;
          });
      }
      if (menuItem !== shoesMenuItem2) {
          menuItem.addEventListener('mouseenter', function() {
              detailNav2.style.display = 'none';
              isShoesMenuItem2Hovered = false;
          });
      }
      if (menuItem !== shoesMenuItem3) {
          menuItem.addEventListener('mouseenter', function() {
              detailNav3.style.display = 'none';
              isShoesMenuItem3Hovered = false;
          });
      }
      if (menuItem !== shoesMenuItem4) {
          menuItem.addEventListener('mouseenter', function() {
              detailNav4.style.display = 'none';
              isShoesMenuItem4Hovered = false;
          });
      }
      if (menuItem !== shoesMenuItem5) {
          menuItem.addEventListener('mouseenter', function() {
              detailNav5.style.display = 'none';
              isShoesMenuItem5Hovered = false;
          });
      }
  });
});
