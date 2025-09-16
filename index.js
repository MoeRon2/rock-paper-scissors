let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore)
    {
        alert(`You win! Your Score: ${humanScore} || The Computer's Score: ${computerScore}`)
    }
    else {
        alert(`You couldn't win. Final Scores were Your Score: ${humanScore} || The Computer's Score: ${computerScore}`)
    }
}


function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    }
    else if (computerChoice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


function getHumanChoice() {
    return prompt("Rock, paper, scissors, shoot!");
}

function playRound(humanChoice, computerChoice) {
    if (gameOver) {
        resetGame();
    }
    
    humanChoice = humanChoice.toLowerCase();  
    computerChoice = computerChoice.toLowerCase();

    winString = `You win! ${humanChoice} beats ${computerChoice}`;
    loseString = `You lose. ${computerChoice} beats ${humanChoice}`;

    const result = document.querySelector("#result");

    const humanScoreUI = document.querySelector("#humanScore");
    const computerScoreUI = document.querySelector("#computerScore");


    win = () => { 
        result.textContent = winString;
        humanScore++;

    };
    lose = () => {
        result.textContent = loseString;
        computerScore++;
    };
    if (humanChoice === computerChoice) {
        result.textContent = "Tie!";
        humanScore++;
        computerScore++;
    }

    else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            win();
        }
        else {
            lose();
        }
    }

    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            win();
        }
        else {
            lose();
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            win();
        }
        else {
            lose();
        }
    }
    else {
        console.log("Wrong input");
    }


    // Update visuals
    humanScoreUI.textContent = humanScore;
    computerScoreUI.textContent = computerScore

    if (humanScore === 5 || computerScore === 5) {
       if (humanScore > computerScore) {
        result.textContent = "You win the game!";
        result.style.color = "green";
       } 
       else if (humanScore < computerScore) {
        result.textContent = "You lost the game";
        result.style.color = "red";
       }
       else {
        result.textContent = "What are the odds a tie!";
       }
       gameOver = true;
    }
}


function resetGame() {
    const humanScoreUI = document.querySelector("#humanScore");
    const computerScoreUI = document.querySelector("#computerScore");
    humanScore = 0;
    computerScore = 0;
    gameOver = false;
    result.style.color = "black";

}


// Event listeners


const selections = document.querySelector('#selections');

selections.addEventListener('click', (event) => {
    let target = event.target;


    const computerChoice = getComputerChoice();

    switch(target.id) {
        case 'rock':
            console.log("rock clicked");
            playRound("rock",computerChoice);
            break;
        case 'paper':
            console.log("paper clicked");
            playRound("paper",computerChoice);
            break;
        case 'scissors':
            console.log("scissors clicked");
            playRound("scissors",computerChoice);
    }
    

});