var Quizquestions = [
    {
        question: "When was Javascript invented?",
           a: "the sun",
           b: "alpha centauri",
           c: "asdfsasf",
           d: "kjdnfljsnd",
    correctanswer: "c",
    },
    {
        question: "What's the most popular coding language?",
        a: "teeeee",
        b: "alp11111ha centauri",
        c: "asdfsasf",
        d: "kjdnfljsnd",
 
     correctanswer: "a",
    },
    {
        question: "When was Javascript invented?",
           a: "the sun11232",
           b: "alpha centauri",
           c: "asdfsas111111111111111f",
           d: "kjdnfljsnd",
    
        correctanswer: "c",
    },
    {
        question: "What's the most popular coding language?",
        a: "the1111111111111111111111 sun",
        b: "alpha centauri",
        c: "asdf23123123sasf",
        d: "kjdnfljsnd",
 
     correctanswer: "a",
    },
];

var CurrentQuestion = 0;


var aanswer = document.getElementById("a1");
var banswer = document.getElementById("b1");
var canswer = document.getElementById("c1");
var danswer = document.getElementById("d1");
var questionEl = document.getElementById("question");
var submitbutton = document.getElementById("submit-btn");

StartQuiz();

function StartQuiz() {
    var currentQq = Quizquestions[CurrentQuestion];
    questionEl.textContent = currentQq.question;
    aanswer.textContent = currentQq.a;
    banswer.textContent = currentQq.b;
    canswer.textContent = currentQq.c;
    danswer.textContent = currentQq.d;

}

submitbutton.addEventListener("click", () => {
    CurrentQuestion++;
    StartQuiz();

});