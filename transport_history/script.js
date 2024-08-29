const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const homeBtn = document.getElementById('home'); // Select the home button

let activeSlide = 0;
let activeImageSrc = '';
let autoSlideTimer;

// Event listener for right button
rightBtn.addEventListener('click', () => {
  nextSlide(); // Use the nextSlide function for consistency
  resetAutoSlideTimer(); // Reset the timer on manual slide change
});

// Event listener for left button
leftBtn.addEventListener('click', () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setActiveSlide();
  resetAutoSlideTimer(); // Reset the timer on manual slide change
});

// Event listener for home button
homeBtn.addEventListener('click', () => {
  activeSlide = 0; // Reset to the first slide
  setActiveSlide();
  resetAutoSlideTimer(); // Reset the timer after going home
});

// Function to set the active slide
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

// Function to go to the next slide automatically
function nextSlide() {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0; // Loop back to the first slide
  }

  setActiveSlide();
}

// Function to reset the auto-slide timer
function resetAutoSlideTimer() {
  clearTimeout(autoSlideTimer);
  autoSlideTimer = setInterval(nextSlide, 10000); // Keep advancing every 10 seconds
}

// Start the auto-slide timer when the page loads
resetAutoSlideTimer();
