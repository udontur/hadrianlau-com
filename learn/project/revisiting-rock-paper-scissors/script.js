let rockBtn = document.querySelector(".rockBtn");
let paperBtn = document.querySelector(".paperBtn");
let scissorsBtn = document.querySelector(".scissorsBtn");

rockBtn.addEventListener("click", () => {
    let humanChoice = "Rock";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

paperBtn.addEventListener("click", () => {
    let humanChoice = "Paper";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

scissorsBtn.addEventListener("click", () => {
    let humanChoice = "Scissors";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 3);
    if (randomValue === 0) return "Rock";
    else if (randomValue === 1) return "Paper";
    else return "Scissors";
}

let humanScore = 0;
let computerScore = 0;

let card=document.querySelector(".card");

function playRound(humanChoice, computerChoice) {
    let verdict = getVerdict(humanChoice, computerChoice);
    console.log(`human: ${humanChoice} | computer: ${computerChoice} | verdict: ${verdict}`);
    if (verdict === 1) displayVerdict(humanScore + 1, computerScore);
    else if (verdict === 0) displayVerdict(humanScore, computerScore + 1);
    else card.style.backgroundColor="#8492a6";
}

function getVerdict(humanChoice, computerChoice) {
    if (humanChoice === "Rock") {
        if (computerChoice === "Rock") return -1;
        else if (computerChoice === "Paper") return 0;
        else if (computerChoice === "Scissors") return 1;
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") return 1;
        else if (computerChoice === "Paper") return -1;
        else if (computerChoice === "Scissors") return 0;
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") return 0;
        else if (computerChoice === "Paper") return 1;
        else if (computerChoice === "Scissors") return -1;
    }
}

function displayVerdict(humanScoreIn, computerScoreIn) {
    humanScore = humanScoreIn;
    computerScore = computerScoreIn;
    let humanResult = document.querySelector(".humanResult");
    let computerResult = document.querySelector(".computerResult");
    humanResult.textContent = `Human: ${humanScoreIn}`;
    computerResult.textContent = `Computer: ${computerScoreIn}`;
    card.style.backgroundColor="white";
}
