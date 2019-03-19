let myScore = 0;
let compScore = 0;
const myScore_span = document.getElementById('myScore');
const compScore_span = document.getElementById('compScore');
const message_p = document.querySelector(".message > p");
const rock_btn = document.getElementById('rock');
const paper_btn = document.getElementById('paper');
const scissor_btn = document.getElementById('scissor');

function compChoice (){
  const choices = ["Rock","Paper","Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function win(myChoice) {
  myScore++;
  myScore_span.innerHTML = myScore;
  compScore_span.innerHTML = compScore;
  switch(myChoice){
    case "Rock":
      message_p.innerHTML = "You Win! Rock smashes Scissors!";
      break;
    case "Paper":
      message_p.innerHTML = "You Win! Paper covers Rock!";
      break;
    case "Scissors":
      message_p.innerHTML = "You Win! Scissors shreds Paper!";
      break;
  }
}

function lose(myChoice){
  compScore++;
  myScore_span.innerHTML = myScore;
  compScore_span.innerHTML = compScore;
  switch(myChoice){
    case "Rock":
      message_p.innerHTML = "You Lose! Paper covers Rock!";
      break;
    case "Paper":
      message_p.innerHTML = "You Lose! Scissors shreds Paper!";
      break;
    case "Scissors":
      message_p.innerHTML = "You Lose! Rock smashes Scissor!";
      break;
  }
}

function game(myChoice){
  let computer = compChoice();
  switch (myChoice + computer){
    case "RockScissors":
    case "ScissorsPaper":
    case "PaperRock":
      win(myChoice);
      break;
    case "RockPaper":
    case "ScissorsRock":
    case "PaperScissors":
      lose(myChoice);
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      message_p.innerHTML = "It's a Draw!";
      break;
  }
}

function main(){
  rock_btn.onclick = function() {
    game("Rock");
  };
  paper_btn.onclick = function() {
    game("Paper");

  };
  scissor_btn.onclick = function() {
    game("Scissors");

  };
}

main();
