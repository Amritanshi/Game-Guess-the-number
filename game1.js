
const inputField = document.getElementById('input-field');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');

let targetNum = Math.floor(Math.random() * 100) + 1; // Generate a random target number between 1 and 100

submitBtn.addEventListener('click', () => {
  const userGuess = parseInt(inputField.value);
  if (userGuess < targetNum) 
  {
    feedback.innerHTML =` Your guess is  low! Try again.`;
  } else if (userGuess > targetNum) {
    feedback.innerHTML = `Your guess is  high! Try again.`;
  } else {
    feedback.innerHTML = ` Congratulations! You guessed the correct number: ${targetNumber}`;
    submitBtn.disabled = true; // Disable the submit button once the user wins
  }
});
