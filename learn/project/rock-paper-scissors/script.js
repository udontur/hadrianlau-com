function playRound(humanChoice, computerChoice){
    if(humanChoice=="Rock"){
        if(computerChoice=="Rock") return;
        else if(computerChoice=="Paper") return 0;
        else if(computerChoice=="Scissors")return 1;
    }else if(humanChoice=="Paper"){
        if(computerChoice=="Rock") return 1;
        else if(computerChoice=="Paper") return;
        else if(computerChoice=="Scissors") return 0;
    }else if(humanChoice=="Scissors"){
        if(computerChoice=="Rock") return 0;
        else if(computerChoice=="Paper") return 1;
        else if(computerChoice=="Scissors") return;
    }
}

function getComputerChoice(){
    let randomValue=Math.floor(Math.random()*3);
    if(randomValue==0) return "Rock";
    else if(randomValue==1) return "Paper";
    else return "Scissors";
}

function getHumanChoice(){
    let humanChoice=prompt("Rock, Paper, or Scissors?");
    return humanChoice;
}

let humanScore=0;
let computerScore=0;

for(let i=0; i<5; i++){
    let computerChoice=getComputerChoice();
    let humanChoice=getHumanChoice();
    
    let isHumanWin=playRound(humanChoice, computerChoice);
    
    if(isHumanWin) humanScore++;
    else if(!isHumanWin) computerScore++;
}

if(humanScore>computerScore) alert("Human Wins!");
else if(computerScore>humanScore) alert("Computer Wins!");
else alert("Tie!");
