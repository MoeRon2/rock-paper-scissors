let humanScore, computerScore = 0;

function playGame() {
    pass
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
    return parseInt(prompt("Rock, paper, scissors, shoot!"));
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();  
    computerChoice = computerChoice.toLowerCase();

    winString = `You win! ${humanChoice} beats ${computerChoice}`;
    loseString = `You lose. ${computerChoice} beats ${humanChoice}`;

    win = () => { 
        console.log(winString);
        humanScore++;
    };
    lose = () => {
        console.log(loseString);
        computerChoice++;
    };
    if (humanChoice === computerChoice) {
        console.log("Tie!");
        humanScore++;
        computerChoice++;
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

}


playGame();