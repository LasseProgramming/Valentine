let currentQuestion = 0;

function loadQuestion(num) {
    document.getElementById("quiz-question").innerHTML = questions[num].question;
    document.getElementById("answer-1").innerHTML = questions[num].answer1;
    document.getElementById("answer-2").innerHTML = questions[num].answer2;
    document.getElementById("answer-3").innerHTML = questions[num].answer3;
    document.getElementById("answer-4").innerHTML = questions[num].answer4;
    document.getElementById("gifs").src = questions[num].gif;
    updateCounter(num);
}


function checkAnswer(event) {
    if(questions[currentQuestion].correct === "all") {
        nextQuestion();
    } else {
        if (event.target.id === ("answer-" + questions[currentQuestion].correct)) {
            console.log("correct");
            nextQuestion()
        } else {
            console.log("incorrect");
            document.getElementById("incorrect-container").classList.remove("hidden");
            document.getElementById("quiz-container").classList.add("hidden");
        }
    }
}

function clickLetter() {
    document.getElementById("letter-cover").classList.add("open-top");
    document.getElementById("letter-content").classList.add("show-content");
    document.getElementById("letter").classList.add("move-letter");

}

function startQuiz() {
    document.getElementById("letter").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    console.log("clicked");
    loadQuestion(0);
}

function nextQuestion() {
    if (currentQuestion > 8) {
        console.log("at the end")
        handleLast();
    } else {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function handleIncorrect() {
    document.getElementById("incorrect-container").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    currentQuestion = 0;
    loadQuestion(0);
}

function updateCounter(num) {
    document.getElementById("counter").innerHTML = num + 1 + "/10";
}

function handleLast() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("final-container").classList.remove("hidden");
    currentQuestion = 0;
}