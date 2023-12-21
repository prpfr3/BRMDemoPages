const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;
let slideInterval;

// Function to start the automatic slideshow
function startSlideShow() {
  slideInterval = setInterval(() => {
    moveRight();
  }, 5000); // Change slide every 3 seconds (5000 milliseconds)
}

// Start the automatic slideshow initially
startSlideShow();

// Event listeners for manual navigation
rightBtn.addEventListener('click', () => {
  moveRight();
  clearInterval(slideInterval); // Stop the automatic slideshow when manually navigating
  setTimeout(startSlideShow, 5000); // Resume the automatic slideshow after a delay
});

leftBtn.addEventListener('click', () => {
  moveLeft();
  clearInterval(slideInterval); // Stop the automatic slideshow when manually navigating
  setTimeout(startSlideShow, 5000); // Resume the automatic slideshow after a delay
});

// Function to move to the next slide
function moveRight() {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgToBody();
  setActiveSlide();
}

// Function to move to the previous slide
function moveLeft() {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgToBody();
  setActiveSlide();
}

// Function to set the background of the body
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// Function to set the active slide
function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[activeSlide].classList.add('active');
}
