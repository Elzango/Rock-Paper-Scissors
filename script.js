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
function getRandomInt(max, min){
	const n;
	n = (math.random()*(max - min + 1) + min;
	return math.floor(n);
}


/**
 * Generate the computer's choice between rock, paper, or scissors.
 *
 * @returns {string} The computer's randomly chosen option: 'rock', 'paper', or 'scissors'.
 *
 * @example
 * // Returns 'paper'
 * const computerChoice = getComputerChoice();
 */
function getComputerChoice() {
	const randomNumber;
	randomNumber = getRandomInt(3, 1);
	if (randomNumber === 3) {
		let computerChoice === "rock";
	}
	else if (randomNumber === 2) {
		let computerChoice === "paper";
	}
	else {
		let computerChoice === "scissors";
	}
	return computerChoice;
}



/**
 * Prompt the player to input their move (rock, paper, or scissors).
 *
 * @returns {string} The player's choice: 'rock', 'paper', or 'scissors'.
 *
 * @example
 * // Returns 'paper' (assuming the player enters 'paper' when prompted)
 * const playerChoice = playerSelection();
 */
function playerSelection() {
	let playerInput = prompt("Input your choice").toLowerCase(); // Get player's input and converts it lowercase
	let playerChoice = playerInput.trim(); //Trimming heading and trailing white spaces from player's input
	return playerChoice;
}






/**
 * Generate the computer's move (rock, paper, or scissors).
 *
 * @returns {string} The computer's randomly chosen move: 'rock', 'paper', or 'scissors'.
 *
 * @example
 * // Returns 'scissors'
 * const computerMove = computerSelection();
 */
function computerSelection() {
	let computerChoice = getComputerChoice();
	return computerChoice;
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
function singleRound(playerSelection, computerSelection) {
	let result, message;
	if (playerSelection === "rock" && computerSelection === "rock") {
		result = "Draw";
		message = "It's a draw!";
	}
	else if (playerSelection === "rock" && computerSelection === "paper") {
		result = "Computer wins!";
		message = "You lose! Paper covers Rock";
	}
	else if (playerSelection === "rock" && computerSelection === "scissors") {
                result = "Player wins!";
                message = "You win! Rock crushes Scissors";
        }
	else if (playerSelection === "paper" && computerSelection === "rock") {
                result = "Player wins!";
                message = "You win! Paper covers Rock";
        }
	else if (playerSelection === "paper" && computerSelection === "paper") {
                result = "Draw";
                message = "It's a draw!";
        }
	else if (playerSelection === "paper" && computerSelection === "scissors") {
                result = "Computer wins!";
                message = "You lose! Scissors cuts Paper";
        }
	else if (playerSelection === "scissors" && computerSelection === "rock") {
                result = "Computer wins!";
                message = "You lose! Rock crushes Scissors";
        }
	else if (playerSelection === "scissors" && computerSelection === "paper") {
                result = "Player wins!";
                message = "You win! Scissors cuts Paper";
        }
	else if (playerSelection === "scissors" && computerSelection === "scissors") {
                result = "Draw";
                message = "It's a draw!";
        }
	if (result === "Draw!") {
		singleRound(playerSelection, computerSelection);
	}
	else {
		return result, message;
	}
}





/**
 * Play a game consisting of multiple rounds between the player and the computer.
 *
 *
 * @example
 * // Returns { playerScore: 3, computerScore: 2 }
 * const finalScores = game();
 */
function game() {
	let i = 0;
	let playerScore = 0; 
	let computerScore = 0;
	for (i; i < 5; i++) {
		singleRound(playerSelection, computerSelection);
		if (result === "Computer wins!") {
			computerScore++;
		}
		else if (result === "Player wins!") {
			playerScore++;
		}
		console.log(message);
	}
	let gameResult = `Player Score: ${playerScore}
	Computer Score: ${computerScore}`;
	if (playerScore > computerScore) {
		console.log("Seems like you got some tricks up your sleeves! Wanna play again?");
	}
	else if (computerScore > playerScore) {
		console.log("It must be HUMBLING to suck on so many games!");
	}
}
