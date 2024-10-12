let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
const maxRounds = 5; // Game lasts for 5 rounds


const buttons = document.querySelectorAll("#container button");
const resultDiv = document.getElementById("result");
const scoreDiv =  document.getElementById("score");
const finalResultDiv = document.getElementById("final-result");
const resetButton = document.getElementById("reset");
const roundTrackerDiv = document.getElementById("round-tracker");

function updateRoundTracker() {
    roundTrackerDiv.textContent = `Round: ${roundCount} / ${maxRounds}`;
}

/**
 * Generate a random integer between a specified range (inclusive).
 *
 * @param {number} min - The minimum value of the range (inclusive).
 * @param {number} max - The maximum value of the range (inclusive).
 * @returns {number} A random integer within the specified range.
 *
 * @throws {Error} If min or max is not a finite number.
 * @throws {Error} If min is greater than max.
 *
 * @example
 * // Returns a random integer between 1 and 10 (inclusive)
 * const randomNum = getRandomInt(1, 10);
 */
function getRandomInt(max, min) {
	if (!Number.isFinite(min) || !Number.isFinite(max)) {
		throw new Error("min and max must be finite numbers");
	}
	if (min > max) {
		throw new Error("min must be less than or equal to max");
	}
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Function to randomly select a choice for the computer in a Rock-Paper-Scissors game
 *
 * The function generates a random number between 1 and 3, where:
 *
 * - 1 corresponds to "rock"
 * - 2 corresponds to "paper"
 * - 3 corresponds to "scissors"
 *
 *   @returns {string} - The computer's choice, either "rock", "paper" or "scissors".
 */
function getComputerChoice() {
	const randomNumber = getRandomInt(3, 1);
	if (randomNumber == 1)
		return "rock"
	if (randomNumber == 2)
		return "paper"
	return "scissors";
}

/**
 * Conduct a single round of the game between player and computer.
 *
 * @param {string} playerMove - The player's move: 'rock', 'paper', or 'scissors'.
 * @param {string} computerMove - The computer's move: 'rock', 'paper', or 'scissors'.
 * @returns {{ result: string, message: string }} The result and message of the round.
 *
 * @example
 * // Returns { result: 'Player wins', message: 'Paper beats rock. You win!' }
 * const roundResult = singleRound('paper', 'rock');
*/
function playSingleRound(playerMove, computerMove) {
	if (playerMove === computerMove) {
		return {result: "Draw", message: `Both chose ${playerMove}. It's a draw!` };
	}
	if (
	(playerMove == "rock" && computerMove == "scissors") ||
	(playerMove == "paper" && computerMove == "rock") ||
	(playerMove == "scissors" && computerMove == "paper")
	)
	{
		return {result: "Player wins!", message: `You Win! ${playerMove} beats ${computerMove}` };
	}
	else
	{
		return {result: "Computer wins!", message: `You Lose! ${computerMove} beats ${playerMove}` };
	}
}

/**
 * Function to update the scores of the player and computer based on the game result.
 *
 * This function takes the result of a game round and increments the player's or
 * computer's score depending on the outcome:
 *  - If the result is "Player wins!", the player's score is incremented.
 *  - If the result is "Computer wins!", the computer's score is incrementent
 * It then updates the displayed score on the webpage.
 *
 * @param {Object} result - An object containing the result of the current game round.
 * @param {string} result.result - A string indicating the winner, either "Player wins!" or "Computer wins!".
 */
function updateScore(result) {

	if (result.result === "Player wins!")
	{
		playerScore++;
	}
	else if (result.result === "Computer wins!")
	{
		computerScore++;
	}
	scoreDiv.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
	console.log(`Updated score: Player: ${playerScore}, Computer: ${computerScore}`);
}

function checkEndOfGame() {
    if (roundCount >= maxRounds) {
        // Handle the game ending by showing the final result
        if (playerScore > computerScore) {
            finalResultDiv.textContent = "Congratulations! You won the game!";
        } else if (computerScore > playerScore) {
            finalResultDiv.textContent = "The computer won the game!";
        } else {
            finalResultDiv.textContent = "It's a tie!";
        }

        // Disable the game buttons
        buttons.forEach(button => button.disabled = true);
        resetButton.style.display = "block"; // Show the reset button
    }
}

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (roundCount < maxRounds) {
            const playerMove = button.id; // Get player's choice from button id
            const computerMove = getComputerChoice();
            const roundResult = playSingleRound(playerMove, computerMove);

            resultDiv.textContent = roundResult.message; // Display the round result
            updateScore(roundResult); // Update the score
            roundCount++; // Increment the round count after valid round
            checkEndOfGame(); // Check if the game has ended
	    updateRoundTracker();
        }
    });
});


// Reset the game
resetButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    resultDiv.textContent = "";
    scoreDiv.textContent = "Player: 0, Computer: 0";
    finalResultDiv.textContent = "";
    buttons.forEach(button => button.disabled = false);
    resetButton.style.display = "none";
});
