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

	const n = Math.floor(Math.random() * (max - min + 1) + min);
	return n;
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
	const randomNumber =  getRandomInt(3, 1);
	let computerChoice;

	if (randomNumber === 3) {
		computerChoice = "rock";
	}
	else if (randomNumber === 2) {
		computerChoice = "paper";
	}
	else {
		computerChoice = "scissors";
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
	const validChoices = ['rock', 'paper', 'scissor'];

	while (true) {
		let playerInput = prompt("Input your choice").toLowerCase(); // Get player's input and converts it lowercase
		let playerChoice = playerInput.trim(); //Trimming heading and trailing white spaces from player's input
	
		//check if user's input is a valid choice
		if (validChoices.includes(playerChoice)) {
			return playerChoice; // return the valid choice
		}
		else {
			console.log("Invalid choice. Please enter 'rock', 'paper', or 'scissors'");
		}

	}
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

function playSingleRound(playerMove, computerMove) {
	let result, message;
	if (playerMove === "rock" && computerMove === "rock") {
		result = "Draw";
		message = "It's a draw!";
	}
	else if (playerMove === "rock" && computerMove === "paper") {
		result = "Computer wins!";
		message = "You lose! Paper covers Rock";
	}
	else if (playerMove === "rock" && computerMove === "scissors") {
                result = "Player wins!";
                message = "You win! Rock crushes Scissors";
        }
	else if (playerMove === "paper" && computerMove === "rock") {
                result = "Player wins!";
                message = "You win! Paper covers Rock";
        }
	else if (playerMove === "paper" && computerMove === "paper") {
                result = "Draw";
                message = "It's a draw!";
        }
	else if (playerMove === "paper" && computerMove === "scissors") {
                result = "Computer wins!";
                message = "You lose! Scissors cuts Paper";
        }
	else if (playerMove === "scissors" && computerMove === "rock") {
                result = "Computer wins!";
                message = "You lose! Rock crushes Scissors";
        }
	else if (playerMove === "scissors" && computerMove === "paper") {
                result = "Player wins!";
                message = "You win! Scissors cuts Paper";
        }
	else if (playerMove === "scissors" && computerMove === "scissors") {
                result = "Draw";
                message = "It's a draw!";
        }
	//Return object with both values
	return {result, message};
}


/**
 * Play a game consisting of multiple rounds between the player and the computer.
 *
 *
 * @example
 * // Returns { playerScore: 3, computerScore: 2 }
 * const finalScores = game();

function game() {
        let playerScore = 0;
        let computerScore = 0;
	//loop stay true until one either computer or player score equal 5
        while (!(computerScore === 5 || playerScore === 5)) {
		const playerMove = playerSelection();
		const computerMove = computerSelection();
                const roundResult = playSingleRound(playerMove, computerMove);

                if (roundResult.result === "Computer wins!") {
                        computerScore++;
                }
                else if (roundResult.result === "Player wins!") {
                        playerScore++;
                }

                console.log(roundResult.message);
        }

        let gameResult = `Player Score: ${playerScore}\nComputer Score: ${computerScore}`;
        if (playerScore > computerScore) {
                console.log("Seems like you got some tricks up your sleeves! Wanna play again?");
        }
        else if (computerScore > playerScore) {
                console.log("It must be HUMBLING to suck on so many games!");
        }
	console.log(gameResult);
}
game();
*/
