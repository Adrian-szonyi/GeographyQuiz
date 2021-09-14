var Quizquestions = [
    {
        question: "When was Javascript invented?",
           a: "1992",
           b: "1993",
           c: "1995",
           d: "1998",
    correctanswer: "c",
    },
    {
        question: "What's the most popular coding language in 2021?",
        a: "Python",
        b: "C#",
        c: "Javascript",
        d: "Java",
 
     correctanswer: "a",
    },
    {
        question: "What is an array?",
           a: "An indexed collection of elements",
           b: "A CSS selector",
           c: "HTML code",
           d: "A beam of sunlight",
    
        correctanswer: "a",
    },
    {
        question: "Who invented Javascript?",
        a: "Lisa Simpson",
        b: "Jerry Seinfeld",
        c: "Thomas Jefferson",
        d: "Brendan Eich",
 
     correctanswer: "d",
    },
];

var aanswer = document.getElementById("a1");
var banswer = document.getElementById("b1");
var canswer = document.getElementById("c1");
var danswer = document.getElementById("d1");
var questionEl = document.getElementById("question");
var Startbtn = document.getElementById("start-quiz");
var submitbutton = document.getElementById("submit-btn");
var timer = document.getElementById("timer");
var answers = document.querySelectorAll(".answer1");
var timeinterval;
var score = 0;
var timeleft = 40;

Startbtn.addEventListener("click", Countdown);

function Countdown() {
  clearInterval(timeinterval);
  function setCountdown() {
    if (timeleft > 0) {
      timer.textContent = timeleft;
      timeleft--;
    } else {
      timer.textContent = "";
      clearInterval(timeinterval);
    }
  }
 timeinterval = setInterval(setCountdown, 1000);
}


var CurrentQuestion = 0;


StartQuiz();

function StartQuiz() {
    removeselected();
    var currentQq = Quizquestions[CurrentQuestion];
    questionEl.textContent = currentQq.question;
    aanswer.textContent = currentQq.a;
    banswer.textContent = currentQq.b;
    canswer.textContent = currentQq.c;
    danswer.textContent = currentQq.d;

}

function removeselected() {

    answers.forEach((answers) => {
        answers.checked = false;
    });
}

function getSelected() {
    var answer3 = undefined;
    answers.forEach((answers) => {
        if(answers.checked) {
            return answers.id;
        }
        });
        return answer3;
}


submitbutton.addEventListener("click", () => {

    if(answers) {
      if(answers === Quizquestions[CurrentQuestion].correctanswer) {
          score++;
      }
      else {
         timeleft = timeleft - 10;
         timer.textContent = timeleft;
      }

    CurrentQuestion++;
    if(CurrentQuestion < Quizquestions.length) {

    StartQuiz();
    } else {
        alert("Well done! You have finished the quiz");
    }
    }

});