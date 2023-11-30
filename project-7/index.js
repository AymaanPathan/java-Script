const questions = [
  {
    question: "What is the largest planet in our solar system?",
    options: [
      { text: "Earth", isCorrect: false },
      { text: "Mars", isCorrect: false },
      { text: "Jupiter", isCorrect: true },
      { text: "Venus", isCorrect: false },
    ],
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: [
      { text: "Oxygen", isCorrect: true },
      { text: "Gold", isCorrect: false },
      { text: "Iron", isCorrect: false },
      { text: "Silver", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of Japan?",
    options: [
      { text: "Beijing", isCorrect: false },
      { text: "Seoul", isCorrect: false },
      { text: "Tokyo", isCorrect: true },
      { text: "Bangkok", isCorrect: false },
    ],
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: [
      { text: "Jupiter", isCorrect: false },
      { text: "Mars", isCorrect: true },
      { text: "Saturn", isCorrect: false },
      { text: "Uranus", isCorrect: false },
    ],
  },
  {
    question: "What is the powerhouse of the cell?",
    options: [
      { text: "Nucleus", isCorrect: false },
      { text: "Mitochondria", isCorrect: true },
      { text: "Endoplasmic Reticulum", isCorrect: false },
      { text: "Golgi Apparatus", isCorrect: false },
    ],
  },
  {
    question: "Which ocean is the largest on Earth?",
    options: [
      { text: "Atlantic Ocean", isCorrect: false },
      { text: "Indian Ocean", isCorrect: false },
      { text: "Southern (Antarctic) Ocean", isCorrect: false },
      { text: "Pacific Ocean", isCorrect: true },
    ],
  },
  {
    question: "What is the capital of Australia?",
    options: [
      { text: "Sydney", isCorrect: false },
      { text: "Melbourne", isCorrect: false },
      { text: "Canberra", isCorrect: true },
      { text: "Perth", isCorrect: false },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      { text: "Charles Dickens", isCorrect: false },
      { text: "William Shakespeare", isCorrect: true },
      { text: "Jane Austen", isCorrect: false },
      { text: "Mark Twain", isCorrect: false },
    ],
  },
  {
    question: "Which planet is known as the 'Blue Planet'?",
    options: [
      { text: "Earth", isCorrect: true },
      { text: "Neptune", isCorrect: false },
      { text: "Uranus", isCorrect: false },
      { text: "Venus", isCorrect: false },
    ],
  },
  {
    question: "What is the largest mammal in the world?",
    options: [
      { text: "Elephant", isCorrect: false },
      { text: "Blue Whale", isCorrect: true },
      { text: "Giraffe", isCorrect: false },
      { text: "Hippopotamus", isCorrect: false },
    ],
  },
  {
    question: "In what year did Christopher Columbus reach the Americas?",
    options: [
      { text: "1492", isCorrect: true },
      { text: "1512", isCorrect: false },
      { text: "1601", isCorrect: false },
      { text: "1620", isCorrect: false },
    ],
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    options: [
      { text: "China", isCorrect: false },
      { text: "South Korea", isCorrect: false },
      { text: "Japan", isCorrect: true },
      { text: "Vietnam", isCorrect: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    options: [
      { text: "Au", isCorrect: true },
      { text: "Ag", isCorrect: false },
      { text: "Fe", isCorrect: false },
      { text: "Cu", isCorrect: false },
    ],
  },
  {
    question: "Which is the smallest prime number?",
    options: [
      { text: "0", isCorrect: false },
      { text: "1", isCorrect: false },
      { text: "2", isCorrect: true },
      { text: "3", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of Brazil?",
    options: [
      { text: "Buenos Aires", isCorrect: false },
      { text: "Rio de Janeiro", isCorrect: false },
      { text: "Brasília", isCorrect: true },
      { text: "São Paulo", isCorrect: false },
    ],
  },
  {
    question: "Which element has the chemical symbol 'C'?",
    options: [
      { text: "Carbon", isCorrect: true },
      { text: "Calcium", isCorrect: false },
      { text: "Chlorine", isCorrect: false },
      { text: "Copper", isCorrect: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      { text: "Vincent van Gogh", isCorrect: false },
      { text: "Leonardo da Vinci", isCorrect: true },
      { text: "Pablo Picasso", isCorrect: false },
      { text: "Michelangelo", isCorrect: false },
    ],
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: [
      { text: "Oxygen", isCorrect: false },
      { text: "Nitrogen", isCorrect: false },
      { text: "Carbon Dioxide", isCorrect: true },
      { text: "Hydrogen", isCorrect: false },
    ],
  },
  {
    question: "Who is known as the 'Father of Computers'?",
    options: [
      { text: "Bill Gates", isCorrect: false },
      { text: "Alan Turing", isCorrect: true },
      { text: "Steve Jobs", isCorrect: false },
      { text: "Charles Babbage", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of France?",
    options: [
      { text: "Berlin", isCorrect: false },
      { text: "Madrid", isCorrect: false },
      { text: "Paris", isCorrect: false },
      { text: "Rome", isCorrect: false },
    ],
  },
];

const questionElements = document.querySelector(".question");
const answerBtns = document.querySelector(".answer-buttons");
const nextButton = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuizz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
};

const showQuestion = () => {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElements.textContent = questionNo + ". " + currentQuestion.question;

  currentQuestion.options.forEach((answer) => {
    const button = document.createElement("button");

    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtns.appendChild(button);

    if (answer.isCorrect) {
      button.dataset.correct = answer.isCorrect;
    }
    button.addEventListener("click", selectAnswer);
  });
};

const selectAnswer = (e) => {
  const selectBtn = e.target;
  const isCorrectAns = selectBtn.dataset.correct === "true";
  if (isCorrectAns) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("inCorrect");
  }

  Array.from(answerBtns.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
    button.classList.add("disabled");
  });
  nextButton.style.display = "block";
};

const resetState = () => {
  nextButton.style.display = "none";
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
};

const showScore = () => {
  resetState();
  questionElements.innerHTML = `Your Score is ${score} out Of ${questions.length} `;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
};

const handleNextBtn = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuizz();
  }
});

startQuizz();
