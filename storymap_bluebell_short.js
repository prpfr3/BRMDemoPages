// Fetch the JSON file content using an asynchronous request
fetch('storymap_bluebell_short.json')
  .then((response) => response.json())
  .then((storymap_data) => {
    // certain settings must be passed within a separate options object
    var storymap_options = {};

    var storymap = new KLStoryMap.StoryMap(
      'mapdiv',
      storymap_data,
      storymap_options
    );
    window.onresize = function (event) {
      storymap.updateDisplay(); // this isn't automatic
    };

    // // Set the time limit for inactivity in milliseconds
    // window.inactivityTimeout = 1 * 180 * 1000; // 180 seconds

    // // Set the URL of the new home page
    // window.newHomePageURL = 'https://prpfr3.github.io/BRMDemoPages/';

    // // Initialize the inactivity timer
    // resetInactivityTimer();

    // // Attach event listeners to reset the timer on user interaction
    // document.addEventListener('mousemove', resetInactivityTimer);
    // document.addEventListener('keydown', resetInactivityTimer);

    // // Function to reset the inactivity timer
    // function resetInactivityTimer() {
    //   clearTimeout(window.inactivityTimer);
    //   // The JavaScript setTimeout() method calls a function after a number of milliseconds.
    //   window.inactivityTimer = setTimeout(
    //     redirectHomePage,
    //     window.inactivityTimeout
    //   );
    // }

    // // Function to redirect to the home page
    // function redirectHomePage() {
    //   window.location.href = window.newHomePageURL;
    // }
  })
  .catch((error) => console.error('Error loading JSON file:', error));
