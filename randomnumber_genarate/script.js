// Declare a variable to store the delay value in milliseconds
let delay = 3000;

// Declare a function to generate a random number between 0 and 1
function generateRandomNumber() {
  return Math.random();
}

// Declare a function to display the countdown message and the random number
function displayResult() {
  // Get the element where the result will be shown
  let result = document.getElementById("result");

  // Initialize a variable to store the remaining time in seconds
  let timeLeft = delay / 1000;

  // Create a timer that runs every second
  let timer = setInterval(function() {
    // Display the remaining time
    result.innerHTML = "The random number will be generated in " + timeLeft + " seconds.";

    // Decrease the remaining time by one second
    timeLeft--;

    // If the remaining time is zero, stop the timer and display the random number
    if (timeLeft < 0) {
      clearInterval(timer);
      result.innerHTML = "The random number is " + generateRandomNumber() + ".";
    }
  }, 1000);
}

// Call the displayResult function when the page loads
window.onload = displayResult;

