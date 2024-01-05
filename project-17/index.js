// Generating Random Number
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector(".submit");
const userInput = document.querySelector(".user-input");
const guesses = document.querySelector(".previous-guess");
const remaningGuess = document.querySelector(".guess-remain");
const highOrLow = document.querySelector("#high-low");
const startOver = document.querySelector(".paras");

let p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let startGame = true;

if (startGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validate(guess);
  });
}

function validate(guess) {
  if (isNaN(guess)) {
    alert("Enter a Valid Input");
  } else if (guess < 1) {
    alert("Enter a Number Greater than 1");
  } else if (guess > 100) {
    alert("Enter a Number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You Guessed it Right");
    endGame();
  } else if (guess > randomNumber) {
    displayMessage("Number is too High");
  } else if (guess < randomNumber) {
    displayMessage("Number is too Low");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guesses.innerHTML += ` [${guess}]  `;
  numGuess++;
  remaningGuess.innerHTML = `Remeaning Guess: ${11 - numGuess}`;
}
function displayMessage(message) {
  highOrLow.innerHTML = `<h1>${message}</h1>`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  startGame = false;
  p.innerHTML = "Start New Game";
  startOver.appendChild(p);
  newGame();
}

function newGame() {
  p.addEventListener("click", () => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guesses.innerHTML = "";
    remaningGuess.innerHTML = `Remeaning Guess: ${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    displayMessage("");
    startGame = true;
  });
}
