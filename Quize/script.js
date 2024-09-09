
var questions = [
    {
        question: ["What is the purpose of the meta tag in HTML?"],
        choices: [
            "To define metadata for the document",
            "To link to external stylesheets",
            "To create a header section",
            "To include JavaScript code"
        ],
        correctAnswer: 0
    },

    {
        question: ["Which attribute is used to uniquely identify an element in HTML?"],
        choices: [
            "Class",
            "Id",
            "Name",
            "Style"
        ],
        correctAnswer: 1
    },

    {
        question: ["Which property is used to change the background color of an element?"],
        choices: [
            "color",
            "background-color",
            "bgcolor",
            "background"
        ],
        correctAnswer: 1  
    },

    {
        question: ["Which method is used to find an HTML element by its id in JavaScript?"],
        choices: [
            "querySelector()",
            "getElementsByClass()",
            "getElementById()",
            "getIdElement()"
        ],
        correctAnswer: 2
    },

    {
        question: ["Which of the following is a correct way to declare a JavaScript variable?"],
        choices: [
            "var x = 10;",
            "variable x = 10;",
            "let x = 10;",
            "Both a) and c)"
        ],
        correctAnswer: 3
    },

    {
        question: ["How can you add a JavaScript module file to an HTML document?"],
        choices: [
         '<script src="file.js"></script>',
         '<script type="module" src="./scrip.js"></script>',
         '<javascript src="file.js"></javascript>',
         '<script href="file.js"></script>'
        ],
        correctAnswer: 1,
    },

    {
        question: ["How can you make a list that lists its items with squares?"],
        choices: [
            "list-square: square;",
            "list-style: square;",
            "list-type: square;",
            "list-style-type: square;"
        ],
        correctAnswer: 3
    },

    {
        question: ["How can you create a table in HTML?"],
        choices: [
            "Using <table>, <td>, <tr>",
            "Using <table>, <th>, <td>",
            "Using <table>, <tr>, <td>",
            "Using <table>, <th>, <tr>"
        ],
        correctAnswer: 2
    }
]

var currentQuestionIndex = 0;
var nextBtn = document.getElementById("nextBtn");
var score = 0;

function printQuestions() {
    var questionElement = document.getElementById("questionArea")
    questionElement.textContent = questions[currentQuestionIndex].question;
    document.getElementById("choice-A").textContent = questions[currentQuestionIndex].choices[0];
    document.getElementById("choice-B").textContent = questions[currentQuestionIndex].choices[1];
    document.getElementById("choice-C").textContent = questions[currentQuestionIndex].choices[2];
    document.getElementById("choice-D").textContent = questions[currentQuestionIndex].choices[3]; 
    
}

function checkAnswer(choiceIndex) {

    var correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;
    
    if (choiceIndex === correctAnswerIndex) {

        alert("Correct Answer!")
        score++;
        printQuestions();
    }
    else{
        alert("Wrong Answer!");
    }
    
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex <= questions.length) {
        printQuestions();
    }
    else {
        alert("Quiz finished! Click on Result Button.");
    }
});    

printQuestions();