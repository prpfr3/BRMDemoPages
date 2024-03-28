// Set the time limit for inactivity in milliseconds
window.inactivityTimeout = 15 * 60 * 1000; // 15 minutes in milliseconds

// Set the URL of the new home page
window.newHomePageURL = 'https://prpfr3.github.io/BRMDemoPages/';

// Initialize the inactivity timer
resetInactivityTimer();

// Attach event listeners to reset the timer on user interaction
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('keydown', resetInactivityTimer);

// Function to reset the inactivity timer
function resetInactivityTimer() {
  clearTimeout(window.inactivityTimer);
  // The JavaScript setTimeout() method calls a function after a number of milliseconds.
  window.inactivityTimer = setTimeout(
    redirectHomePage,
    window.inactivityTimeout
  );
}

// Function to redirect to the home page
function redirectHomePage() {
  window.location.href = window.newHomePageURL;
}
