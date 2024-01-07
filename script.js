function getRandomInt(max, min){
	let n;
	n = (math.random()*(max - min + 1) + min;
	return math.floor(n);
}

function getComputerChoice() {
	let randomNumber;
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

function playerSelection() {
	let playerInput = prompt("Input your choice").toLowerCase(); // Get player's input and converts it lowercase
	let playerChoice = playerInput.trim(); //Trimming heading and trailing white spaces from player's input
	return playerChoice;
}

function computerSelection() {
	let computerChoice = getComputerChoice();
	return computerChoice;
}

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
