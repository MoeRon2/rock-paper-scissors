let humanScore = 0;
let computerScore = 0;

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
        computerScore++;
    };
    if (humanChoice === computerChoice) {
        console.log("Tie!");
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