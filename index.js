const left = document.querySelector('.left');
const center = document.querySelector('.center');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// Get a reference to the body element
const body = document.body;

// Check if the browser supports the Fullscreen API
if (body.requestFullscreen) {
  // Request full screen
  body.requestFullscreen();
} else if (body.webkitRequestFullscreen) {
  /* Safari */
  body.webkitRequestFullscreen();
} else if (body.msRequestFullscreen) {
  /* IE11 */
  body.msRequestFullscreen();
}

/* mouseenter event is basically a hover */
left.addEventListener('mouseenter', () =>
  container.classList.add('hover-left')
);
left.addEventListener('mouseleave', () =>
  container.classList.remove('hover-left')
);

center.addEventListener('mouseenter', () =>
  container.classList.add('hover-center')
);
center.addEventListener('mouseleave', () =>
  container.classList.remove('hover-center')
);

right.addEventListener('mouseenter', () =>
  container.classList.add('hover-right')
);
right.addEventListener('mouseleave', () =>
  container.classList.remove('hover-right')
);
