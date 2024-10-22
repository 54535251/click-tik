// Select elements from the DOM
const button = document.getElementById('click-button');
const resetButton = document.getElementById('reset-button');
const countDisplay = document.getElementById('count-display');
const timerDisplay = document.getElementById('timer-display');
const highScoreDisplay = document.getElementById('high-score-display');

// Initialize variables
let count = 0;
let timeLeft = 10;
let timerStarted = false;
let intervalId;
let highScore = 0;

// Function to start the countdown timer
function startTimer() {
  intervalId = setInterval(() => {
    timeLeft--; // Decrement the time
    timerDisplay.textContent = `Time left: ${timeLeft}s`; // Update the timer display

    if (timeLeft <= 0) {
      clearInterval(intervalId); // Stop the timer when time reaches 0
      button.disabled = true; // Disable the click button
      timerDisplay.textContent = `Time's up!`; // Update the timer display
      resetButton.style.display = 'inline'; // Show the reset button

      // Update high score if the current count is higher than the stored high score
      if (count > highScore) {
        highScore = count;
        highScoreDisplay.textContent = highScore; // Display the new high score
      }
    }
  }, 1000);
}

// Function to reset the game
function resetGame() {
  // Reset variables
  count = 0;
  timeLeft = 10;
  timerStarted = false;

  // Reset UI elements
  countDisplay.textContent = `Clicks: ${count}`;
  timerDisplay.textContent = `Time left: ${timeLeft}s`;
  button.disabled = false;
  resetButton.style.display = 'none'; // Hide the reset button

  // Stop any active timer
  clearInterval(intervalId);
}

// Event listener for the click button
button.addEventListener('click', () => {
  count++; // Increment the click count
  countDisplay.textContent = `Clicks: ${count}`; // Update the count display

  // Start the timer on the first click
  if (!timerStarted) {
    timerStarted = true;
    startTimer();
  }
});

// Event listener for the reset button
resetButton.addEventListener('click', resetGame);
