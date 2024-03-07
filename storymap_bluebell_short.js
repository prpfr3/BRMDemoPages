import { initializeInactivityTimer } from './inactivityTimer.js';

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

    // Initialize the inactivity timer
    initializeInactivityTimer();
  })
  .catch((error) => console.error('Error loading JSON file:', error));
