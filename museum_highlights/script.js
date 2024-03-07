document.addEventListener('DOMContentLoaded', function () {
  // Check if the browser is currently in full-screen mode
  var isFullScreen =
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement;

  // If not in full-screen mode and full-screen state is stored in local storage, request full-screen mode
  if (!isFullScreen && localStorage.getItem('fullscreenState') === 'true') {
    // Check if the Fullscreen API is supported by the browser
    if (document.documentElement.requestFullscreen) {
      // Request fullscreen mode
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      // For Chrome on Android
      // Request fullscreen mode (for WebKit browsers)
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      // For Internet Explorer
      // Request fullscreen mode (for IE)
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      // For Mozilla Firefox
      // Request fullscreen mode (for Firefox)
      document.documentElement.mozRequestFullScreen();
    } else {
      // Fullscreen API is not supported
      console.log('Fullscreen API is not supported');
    }
  }
});

const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;
let activeImageSrc = '';

rightBtn.addEventListener('click', () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setActiveSlide();
});

leftBtn.addEventListener('click', () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setActiveSlide();
});

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
    slide.querySelector('.slide-image').classList.remove('active-image');
  });

  const activeSlideElement = slides[activeSlide];
  activeSlideElement.classList.add('active');
  activeSlideElement
    .querySelector('.slide-image')
    .classList.add('active-image');

  activeImageSrc = activeSlideElement
    .querySelector('.slide-image img')
    .getAttribute('src');
}
