let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelectorAll("#msg");
const user = document.querySelector("#user-score");
const computer = document.querySelector("#computer-score");

const genComputerChoice = ()=>{
  const choices = ["rock","paper","scissors"];
  const randomIndex = Math.floor(Math.random()*3);
  return choices[randomIndex];
}
const drawGame = ()=> {
  msg.innerText = "Game was Draw.Play Again";
  msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin,userChoice,computerChoice)=>{
if(userWin){
  msg.innerText = `You Win! ${userChoice} beats ${computerChoice}`;
  msg.style.backgroundColor = "green";
  userScore++;
  user.innerText = userScore;
}
else{
  msg.innerText = `You lost. ${computerChoice} beats ${userChoice}`;
  msg.style.backgroundColor = "red";
  computerScore++;
  computer.innerText = computerScore;
}
}
const playGame = (userChoice)=>{
// Generate Computer Choice -> Modular.
const computerChoice = genComputerChoice();
if(userChoice===computerChoice){
  drawGame();
}
else{
  let userWin = true;
  if(userChoice==="rock"){
    userWin = computerChoice==="paper"?false:true;
  }
  else if(userChoice==="paper"){
    userWin = computerChoice==="scissors"?false:true;
  }
  else{
    userWin = computerChoice==="rock"?false:true;
  }
  showWinner(userWin,userChoice,computerChoice);
}

}
choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
const userChoice = choice.getAttribute("id");
playGame(userChoice);
  });
})