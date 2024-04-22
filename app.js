// -----------------------------Questions,Otions,Answers--------------
var questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperLinks and Text Markup language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "None Of The Above",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question: "Who is making the Web standards?",
    options: ["Microsoft", "Google", "Mozilla", "World Wide Web Consortium"],
    correctAnswer: "World Wide Web Consortium",
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    options: ["h1", "heading", "head", "h6"],
    correctAnswer: "h1",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["break", "br", "lb", "None Of the above"],
    correctAnswer: "br",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheet",
      "Computer Style Sheet",
      "Colorfull Style Sheet",
    ],
    correctAnswer: "Cascading Style Sheet",
  },
  {
    question: "Who is the founder of JavaScript?",
    options: [
      "James Gousling",
      "Brendan Eich",
      "Guido van Rossum",
      "Charles Babbage",
    ],
    correctAnswer: "Brendan Eich",
  },
  {
    question: "Who is the founder of Java",
    options: [
      "James Gousling",
      "Brendan Eich",
      "Guido van Rossum",
      "Charles Babbage",
    ],
    correctAnswer: "James Gousling",
  },
  {
    question: "Who is the founder of Python",
    options: [
      "James Gousling",
      "Brendan Eich",
      "Guido van Rossum",
      "Charles Babbage",
    ],
    correctAnswer: "Guido van Rossum",
  },
  {
    question: "Who is the founder of Computer",
    options: [
      "James Gousling",
      "Brendan Eich",
      "Guido van Rossum",
      "Charles Babbage",
    ],
    correctAnswer: "Charles Babbage",
  },
  {
    question: "Who is the founder of C#",
    options: [
      "James Gousling",
      "Brendan Eich",
      "Anders Hejlsberg",
      "Charles Babbage",
    ],
    correctAnswer: "Anders Hejlsberg",
  },
];
// ------------------------Variables--------------------
let wellcome = document.getElementById("wellcome");
let contentQuiz = document.getElementById("Content-Quiz");
let currentQuestionNumber = document.getElementById("currentQuestionNumber");
let TotalQuestionNumber = document.getElementById("TotalQuestionNumber");
let timerr = document.getElementById("timer");
let displayQuestion = document.getElementById("displayQuestion");
let displayOption = document.getElementById("displayOption");
let showResult = document.getElementById("show-result");
let CorrectAnswer = document.getElementById("CorrectAnswer");
let WrongAnswer = document.getElementById("WrongAnswer");
let timeline = document.getElementById("timeline");
let indexValue = 0;
let CoAns = 0;
let WrAns = 0;
// ---------------Wellcome-Quiz-Button-Functionality-------
const removewellcomeQuiz = () => {
  wellcome.classList.remove("d-block");
  wellcome.classList.add("d-none");
  contentQuiz.classList.remove("d-none");
  contentQuiz.classList.add("d-block");
  var interval = setInterval(counting, 10);
};
// -----------------ShowQuestion-----------------
function showQuestion() {
  displayQuestion.innerHTML = questions[indexValue].question;
  displayOption.innerHTML = "";
  for (let i = 0; i <= questions[indexValue].options.length - 1; i++) {
    let optValue = questions[indexValue].options[i];
    displayOption.innerHTML += `<button onclick= "checkQuestion('${optValue}')">${optValue}</button>`;
  }
  currentQuestionNumber.innerHTML = indexValue + 1;
}
TotalQuestionNumber.innerHTML = questions.length;
showQuestion();

const checkQuestion = (optionValue) => {
  let corectVal = questions[indexValue].correctAnswer;
  if (optionValue == corectVal) {
    CoAns++;
  } else {
    WrAns--;
  }
  nextQuestion();
};
const nextQuestion = () => {
  displayOption.innerHTML = "";
  if (indexValue + 1 == questions.length) {
    showResult.classList.remove("d-none");
    showResult.classList.add("d-block");
    contentQuiz.classList.add("d-none");
    contentQuiz.classList.remove("d-block");
    CorrectAnswer.innerHTML = CoAns;
    WrongAnswer.innerHTML = WrAns;
  } else {
    indexValue++;
    showQuestion();
    sec = 10;
  }
};
let msec = 0;
let sec = 10;
const counting = () => {
  msec++;
  if (msec >= 100) {
    sec--;
    timerr.innerHTML = sec;
    msec = 0;
    let width = parseInt(timeline.style.width) || 100;
    width -= 0.5;
    timeline.style.width = `${width}%`;
  }
  if (sec <= 0) {
    nextQuestion();
    sec = 10;
  }
};
counting();
