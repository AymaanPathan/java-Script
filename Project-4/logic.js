const submit = document.querySelector("button");
const text = document.querySelector(".userNumber");
const number = document.querySelector(".array-number");
const user = document.querySelector(".user");
const prevGuess = document.querySelector(".prev-guess");
const attempt = document.querySelector(".attempt");
const newGamebtn = document.querySelector(".newGameBtn");

const randomNumber = parseInt(Math.round(Math.random() * 20 + 1));
console.log(randomNumber);

let prevNum = [];
let guess = 10;

submit.addEventListener("click", () => {
  checkNumber();

  user.value = "";
});

const checkNumber = () => {
  const userNumber = parseInt(user.value);
  if (userNumber === "" || isNaN(userNumber)) {
    prevGuess.textContent = `Enter Valid Number`;
  }

  if (userNumber === randomNumber) {
    prevGuess.textContent = `You Guessed It:${userNumber}`;
    prevNum.push(userNumber);
    number.textContent = `Prvious Attempt:[${prevNum}]`;
  }

  if (userNumber > randomNumber) {
    prevGuess.textContent = `You Number IS Too High:${userNumber}`;
    const attemptLeft = guess--;
    gameOver();
    attempt.textContent = `Your Attempt Remaning: ${attemptLeft}`;
    prevNum.push(userNumber);
    number.textContent = `Prvious Attempt:[${prevNum}]`;
  }

  if (userNumber < randomNumber) {
    prevGuess.textContent = `You Number IS Too Low:${userNumber}`;
    const attemptLeft = guess--;
    gameOver();
    attempt.textContent = `Your Attempt Remaning: ${attemptLeft}`;
    prevNum.push(userNumber);
    number.textContent = `Prvious Attempt:[${prevNum}]`;
  }
};

const gameOver = () => {
  if (guess == -1) {
    prevGuess.textContent = `GameOver`;
    submit.classList.add("game-over");
    prevGuess.textContent = `The Correct Number Was: ${randomNumber}`;
  }
};

newGamebtn.addEventListener("click", () => {
  newGame();
});

const newGame = () => {
  guess = 10;
  const newNumber = parseInt(Math.round(Math.random() * 20 + 1));
  attempt.textContent = `Your Attempt Remaning:${guess - 1}`;
  number.textContent = `Prvious Attempt:[${(prevNum = [])}]`;
};
