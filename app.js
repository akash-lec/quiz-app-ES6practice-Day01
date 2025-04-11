let currentQuestionIndex = 0;
let score = 0;

const nextButton = document.getElementById('next-button');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');

// Define the questions array
const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which is the largest planet in our solar system?',
    options: ['Earth', 'Jupiter', 'Saturn', 'Mars'],
    correctAnswer: 'Jupiter',
  },
  {
    question: 'Who wrote "Hamlet"?',
    options: ['Shakespeare', 'Dickens', 'Hemingway', 'Austen'],
    correctAnswer: 'Shakespeare',
  },
  {
    question: 'What is the smallest continent?',
    options: ['Africa', 'Asia', 'Antarctica', 'Australia'],
    correctAnswer: 'Australia',
  },
];

// Function to display the current question
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  // Set the question text
  questionText.textContent = currentQuestion.question;

  // Clear the previous options
  optionsContainer.innerHTML = '';

  // Create list items for each option and display them
  currentQuestion.options.forEach(option => {
    const li = document.createElement('li');
    li.textContent = option;
    li.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(li);
  });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];

  // If the answer is correct, increment the score
  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
  }

  // Show the next button after an option is selected
  nextButton.style.display = 'block';
}

// Function to go to the next question or show the results
function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
    nextButton.style.display = 'none';
  } else {
    showResult();
  }
}

// Function to show the result after the quiz is completed
function showResult() {
  questionText.style.display = 'none';
  optionsContainer.style.display = 'none';
  nextButton.style.display = 'none';

  resultContainer.style.display = 'block';
  scoreElement.textContent = `${score} out of ${questions.length}`;
}

// Event listener for the "Next Question" button
nextButton.addEventListener('click', nextQuestion);

// Initialize the quiz by displaying the first question
displayQuestion();
