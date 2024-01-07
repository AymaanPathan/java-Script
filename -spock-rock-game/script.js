
import {startConfetti,stopConfetti,removeConfetti} from './confetti.js'

const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');
const playerScissors = document.getElementById('playerScissors')

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock'); 

const allGameIcons = document.querySelectorAll('.far')
const resultText = document.getElementById('resultText')

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let ComputerScoreNumber = 0;

let computerChoice = '';

const resetSelected = function(){
  allGameIcons.forEach(icons =>{
    icons.classList.remove('selected')
  })
  stopConfetti()
  removeConfetti()
}

function resetAll(){
  playerScoreNumber=0;
  ComputerScoreNumber=0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = ComputerScoreNumber;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent ='';
  resultText.textContent = ''
  resetSelected()
}
window.resetAll = resetAll;

function computerRandomChoice() {
  const computerChoiceNumber = Math.random()
  if(computerChoiceNumber<0.2) {
    computerChoice = 'rock'
    computerRock.classList.add('selected');
    computerChoiceEl.textContent = '--Rock';
  }
  else if(computerChoiceNumber<=0.4) {
    computerChoice = 'paper';
    computerPaper.classList.add('selected');
    computerChoiceEl.textContent = '--Paper';
  }
  else if(computerChoice<=0.6){
    computerChoice = 'scissors';
    computerScissors.classList.add('selected');
          computerChoiceEl.textContent = '--Scissors';
  }
  else if(computerChoice<=0.8) {
    computerChoice = 'lizars';
    computerLizard.classList.add('selected');
    computerChoiceEl.textContent = '--Lizard';
  }
  else{
    computerChoice = 'spock';
    computerSpock.classList.add('selected');
    computerChoiceEl.textContent = '--Spock';
  }

}

function updateScore(playerChoice){
  console.log(playerChoice,computerChoice);
  if(playerChoice===computerChoice){
    resultText.textContent=`Its a Tie!`
  }
  else {
    const choice = choices[playerChoice];

    console.log(choice.defeats.indexOf(computerChoice))
    if(choice.defeats.indexOf(computerChoice)>-1) {
      resultText.textContent = 'You Won!!';
      startConfetti();
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber
    }
    else {
      resultText.textContent= 'You Lost!!';
      stopConfetti();
      ComputerScoreNumber++;
      computerScoreEl.textContent = ComputerScoreNumber;
    }
  }
}

function checkResult(playerChoice){
  resetSelected();
  computerRandomChoice();
  updateScore(playerChoice)
}


function select(playerChoice){
  checkResult(playerChoice);
  switch (playerChoice) {
    case  'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = '--Rock';
      break;
      case  'paper':
        playerPaper.classList.add('selected');
        playerChoiceEl.textContent = '--Paper';
        break;
        case  'scissors':
          playerScissors.classList.add('selected');
          playerChoiceEl.textContent = '--Scissors';
          break;
          case  'lizard':
          playerLizard.classList.add('selected');
          playerChoiceEl.textContent = '--Lizard';
          break;
          case  'spock':
          playerSpock.classList.add('selected');
          playerChoiceEl.textContent = '--Spock';
          break;
        default:
        break;  
  }
}

window.select = select;

resetAll();