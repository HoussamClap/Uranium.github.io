
const questions = [
    // Geography questions
    {
        question: "Who is the person who discovered the Polonium and Radium?",
        answers: [
            { text: "Edwin M.McMillan", correct: false },
            { text: "Jaroslav Heyrovsky", correct: false },
            { text: "Marie Curie", correct: true },
            { text: "Pierre Curie", correct: false }
        ]
    },
    {
        question: "Which is the largest ocean on Earth?",
        answers: [
            { text: "Indian Ocean", correct: false },
            { text: "Atlantic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "Mount Everest is located in which mountain range?",
        answers: [
            { text: "Andes", correct: false },
            { text: "Alps", correct: false },
            { text: "Himalayas", correct: true },
            { text: "Rockies", correct: false }
        ]
    },
    // Science questions
    {
        question: "What is the chemical symbol for acide sulfirique?",
        answers: [
            { text: "H20S", correct: false },
            { text: "H2SO4", correct: true },
            { text: "SO4", correct: false },
            { text: "SHO", correct: false }
        ]
    },
    {
        question: "What planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "How can we obtain The state of plasma in home ?",
        answers: [
            { text: "Touch an 220V Generator", correct: false },
            { text: "Filtrating blood", correct: false },
            { text: "Using a microwave", correct: true },
            { text: "Hoping that the lightning intercept you", correct: false }
        ]
    },
    // Physics questions
    {
        question: "What is the speed of light?",
        answers: [
            { text: "300,000 km/s", correct: true },
            { text: "150,000 km/s", correct: false },
            { text: "450,000 km/s", correct: false },
            { text: "600,000 km/s", correct: false }
        ]
    },
    {
        question: "Who formulated the law of universal gravitation?",
        answers: [
            { text: "Albert Einstein", correct: false },
            { text: "Isaac Newton", correct: true },
            { text: "Galileo Galilei", correct: false },
            { text: "Nikola Tesla", correct: false }
        ]
    },
    {
        question: "What is the unit of electric current?",
        answers: [
            { text: "Volt", correct: false },
            { text: "Watt", correct: false },
            { text: "Ampere", correct: true },
            { text: "Ohm", correct: false }
        ]
    },
    // Maths questions
    {
        question: "What is the value of π (Pi) to two decimal places?",
        answers: [
            { text: "3.14159265", correct: true },
            { text: "3.14159269", correct: false },
            { text: "3.14159562", correct: false },
            { text: "3.14159256", correct: false }
        ]
    },
    {
        question: "What is the strongest acid in the world?",
        answers: [
            { text: "Sulfiric acid", correct: false },
            { text: "Lactic acid", correct: false },
            { text: "Fluoroantimonic acid", correct: true },
            { text: "Nitric acid", correct: false }
        ]
    },
    {
        question: "What is the develloppement limité of e^x?",
        answers: [
            { text: "1-x", correct: false },
            { text: "1+x+x^2/2!+x^3/3!...+x^n/n!+x^n*epsilon(x)", correct: true },
            { text: "1+x-x^2/2!+x^3/3!...-x^n/n!+x^n*epsilon(x)", correct: false },
            { text: "1-x+x^2/2!+x^3/3!...+x^n/n!+x^n*epsilon(x)", correct: false }
        ]
    },

    // Chemistry questions
    {
        question: "What is the chemical symbol for sodium?",
        answers: [
            { text: "Na", correct: true },
            { text: "S", correct: false },
            { text: "Sn", correct: false },
            { text: "Sd", correct: false }
        ]
    },
    {
        question: "What is the most abundant gas in the Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Carbon Dioxide", correct: false },
            { text: "Helium", correct: false }
        ]
    },
 
    {
        question: "What is the chemical formula for table salt?",
        answers: [
            { text: "NaCl", correct: true },
            { text: "KCl", correct: false },
            { text: "NaF", correct: false },
            { text: "CaCl2", correct: false }
        ]
    },
    {
        question: "What element does 'U' represent ?",
        answers: [
            { text: "U ? You", correct: false },
            { text: "Uranium", correct: true },
            { text: "Union", correct: false },
            { text: "Urgent", correct: false }
        ]
    },
        // Friendship questions
        {
            question: "We studied well?",
            answers: [
                { text: "Probably yes", correct: false },
                { text: "Yeeees", correct: true },
                { text: "yes", correct: false },
                { text: "yes..", correct: false }
            ]
        },
        {
            question: "Do you think this journey will end like that ?",
            answers: [
                { text: "Yes", correct: true },
                { text: "No", correct: false },
               
            ]
        },
        {
            question: "No, are you ready ?",
            answers: [
                { text: "Yes", correct: true },
                { text: "No", correct: true },         
               
            ]
          
        }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const resultMessage = document.getElementById('result-message');
const birthdayLetter = document.getElementById('birthday-letter');

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setNextQuestion();
    } else {
        showResults();
    }
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.textContent = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answersElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hidden');
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
    }
    Array.from(answersElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hidden');
    } else {
        nextButton.textContent = 'Show Results';
        nextButton.classList.remove('hidden');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function showResults() {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    resultMessage.textContent = `You got ${score} out of ${questions.length} correct!`;
    birthdayLetter.textContent = "Happy Birthay Aya";
   
  }
  function showResults() {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    resultMessage.textContent = `You got ${score} out of ${questions.length} correct!`;

    // Populate the birthday letter element with the letter content
    birthdayLetter.innerHTML = `
        <p>My Dearest Ayaaa,</p>
        <p>As your special day dawns, I find myself reflecting on the beautiful journey we've shared together. From the laughter-filled adventures to the quiet moments of understanding, every memory we've created holds a cherished place in my heart.

        On this day, I want to take a moment to celebrate you—the incredible person you are. Your warmth, kindness, and unwavering support have been a source of light in my life, guiding me through both the sunny days and the stormy nights. Your presence is a gift I treasure beyond measure, and I am endlessly grateful to have you by my side.
        
        As we mark another year of your life, I wish for nothing but joy, love, and fulfillment to fill your days. May you continue to pursue your dreams with passion and courage, knowing that you have a friend who believes in you wholeheartedly. May you find happiness in the little things, strength in times of adversity, and love in every corner of your world.
        
        Remember, no matter where life takes us, you will always have a piece of my heart. Through every twist and turn, I promise to stand by you, cheering you on as you conquer mountains and soar to new heights.
        
        So here's to you, my dear friend—on your birthday and every day beyond. May your life be as bright and beautiful as the light you bring into mine.
        
        With all my love and warmest wishes,</p>

        <p>HoussamClap</p>
        
    `;
}


startQuiz();