// Get the fullscreen button element
var fullscreenButton = document.getElementById('museumhighlightsButton');

// Add click event listener to the fullscreen button
fullscreenButton.addEventListener('click', function () {
  // Check if the Fullscreen API is supported by the browser
  if (document.documentElement.requestFullscreen) {
    // Request fullscreen mode
    document.documentElement.requestFullscreen();
    // Store full-screen state in local storage
    localStorage.setItem('fullscreenState', 'true');
  } else if (document.documentElement.webkitRequestFullscreen) {
    // For Chrome on Android
    // Request fullscreen mode (for WebKit browsers)
    document.documentElement.webkitRequestFullscreen();
    // Store full-screen state in local storage
    localStorage.setItem('fullscreenState', 'true');
  } else if (document.documentElement.msRequestFullscreen) {
    // For Internet Explorer
    // Request fullscreen mode (for IE)
    document.documentElement.msRequestFullscreen();
    // Store full-screen state in local storage
    localStorage.setItem('fullscreenState', 'true');
  } else if (document.documentElement.mozRequestFullScreen) {
    // For Mozilla Firefox
    // Request fullscreen mode (for Firefox)
    document.documentElement.mozRequestFullScreen();
    // Store full-screen state in local storage
    localStorage.setItem('fullscreenState', 'true');
  } else {
    // Fullscreen API is not supported
    console.log('Fullscreen API is not supported');
  }
});
