const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices)

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What does HTML stand for?",
            choice1: "<Hot Men at large>",
        choice2: "<Hot Mail>",
            choice3: "<Heavy Metal>",
        choice4: "<HyperText Markup Language>",
            answer: 4

    },

    {
        question: "What is Java Script",
            choice1: "<Drink at starbucks>",
        choice2: "<A band>",
            choice3:"<A font>",
        choice4: "< A programming language>",
            answer: 4

    },

    {
        question: "What is CSS?",
            choice1: "<Fruit>",
        choice2: "<Font>",
            choice3:"< language>",
        choice4: "<cascading style sheets>",
            answer: 4

    },

    {
        question: "What us VSCode?",
            choice1: "<virtual presentation>",
        choice2: "<an animal>",
            choice3:"<Font>",
        choice4: "<Visual Studio Code>",
            answer: 4

    },

]

const CORRECT_BONUS = 25;
const MAX_QUESTIONS = 4;

startGame =() => {
    questionCounter = 0;
    score = 0;
    availableQuestions =[...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;
  const questionIndex=Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice'+ number];
    })


 availableQuestions.splice(questionIndex, 1);

 acceptingAnswers = true
},
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        console.log(selectedAnswer);
        getNewQuestion ();
    });
});

startGame()

