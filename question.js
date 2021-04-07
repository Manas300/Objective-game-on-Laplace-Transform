// code by webdevtrick (https://webdevtrick.com)
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("Laplace of function f(t) is given by?", ["F(s)=∫∞−∞f(t)e−stdt", "F(t)=∫∞−∞f(t)e−tdt","f(s)=∫∞−∞f(t)e−stdt", "f(t)=∫∞−∞f(t)e−tdt"], "F(s)=∫∞−∞f(t)e−stdt"),
    new Question("What is the Laplace transform of sin t?", ["1/(s² + 1)", "S/(s² + 1)","1/(s² - 1)","S/(s² - 1)"], "1/(s² + 1)"),
    new Question("Laplace transform if sin(at)u(t) is?", ["s ⁄ a2+s2", "a ⁄ a2+s2","s2 ⁄ a2+s2", "a2 ⁄ a2+s2"], "a ⁄ a2+s2"),
    new Question("Value of ∫∞−∞etSin(t)Cos(t)dt = ?", ["0.5", "0.75", "0.2", "0.71"], "0.2"),
    new Question("Value of ∫∞−∞etSin(t)dt = ?", ["0.50", "0.25", "0.17", "0.12"], "0.50"),
    new Question("Value of ∫∞−∞etlog(1+t)dt = ?", ["Sum of infinite integers","Sum of infinite factorials","Sum of squares of Integers","Sum of square of factorials"],"Sum of infinite factorials"),
    new Question("Find the value of ∫∞0tsin(t)cos(t)",["s ⁄ s2+22","a ⁄ a2+s4","1","0"],"0"),
    new Question("How many zeroes for x (t)= cosh 5t",["0","1","4","5"],"0"),
    new Question("What is the laplace of x(t) = 3 sin t",["3/s2+2","3/s2+1","6/s2+2","6/s2+9"],"3/s2+1"),
    new Question("Laplace Transform of cosine wave Function cos ωt is:",["s/( s2 + ω2 )","s/( s2 – ω2 )","ω/( s2 + ω2)","ω/( s2 – ω2 )"],"s/( s2 – ω2 )"),
    new Question("Laplace Transform of function e-at is:",["1/s","-1/s","1/(s+a)","1/(s-a)"],"1/(s+a)"),
    new Question("L[2t] =",["1log2","1s-log2","log2s-2","logs-2"],"1s-log2"),
    new Question("L-1[1/sn] is possible when n is",["0","Negative Integer","Positive Integer","Negative Rational"],"Positive Integer"),
    new Question("If y(t) is the solution of y' + 3y =0;  y(0)=2, then ℒ y(t)=",["2/s+3","3/s+2","1/s+1","None"],"2/s+3"),
    new Question("If F(s)=3s+4(s2+9) then f(t) is",["3sin 3t+2cos 3t","3cos 3t+43sin 3t","3cos 3t+13sin 3t","3sin 3t+43cos 3t"],"3cos 3t+43sin 3t")


];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();