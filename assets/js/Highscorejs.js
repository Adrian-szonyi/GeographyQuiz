var SubmitScore = document.getElementById("submitscore-btn");
var inputString = document.getElementById("inputString");
var stores = Array();
var play = document.getElementById("Play");
var highscoreslist = document.getElementById("highscoreslist")


// console.log(highscore);

SubmitScore.addEventListener("click", () => {
    var stringToSave = inputString.value;
       console.log(stringToSave);
       if ((stringToSave == null) || (stringToSave == "")) {
        document.getElementById('write').innerHTML = "nothing to store.";
    } else {
        stores.push(stringToSave);
        inputString.value = "";
        window.localStorage.setItem("Initials", JSON.stringify(stringToSave));
        document.getElementById('write').innerHTML = "Thank You";
    };
//     var Initials = JSON.parse(localStorage.getItem("stringToSave")) || [];
//     highscoreslist.textContent = highscore.map(score => {
//     return `<li class="high-score">${Initials} - ${key}</li>`;
//   });
// .join("");
// const allKeys = Object.keys(localstorage);
// return  allKeys.map(key => {localstorage.getItem(key)} );

});
function Printhighscorelist () {
var highscore = JSON.parse(localStorage.getItem("Initials")) || [];
const li = document.createElement("li");
 li.textContent = highscore;
 li.textContent = stringToSave;
}

play.addEventListener("click", () => {
    window.location.href = "./StartPage.html";
});
