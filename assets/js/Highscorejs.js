var SubmitScore = document.getElementById("submitscore-btn");
var inputString = document.getElementById("inputString");
var stores = Array();
var play = document.getElementById("Play");
var highscoreslist = document.getElementById("highscoreslist")
var highscore = JSON.parse(localStorage.getItem("key")) || [];

console.log(highscore);

SubmitScore.addEventListener("click", () => {
    var stringToSave = inputString.value;
       console.log(stringToSave);
       if ((stringToSave == null) || (stringToSave == "")) {
        document.getElementById('write').innerHTML = "nothing to store.";
    } else {
        stores.push(stringToSave);
        inputString.value = "";
        window.localStorage.setItem("database", stores.join(" "));
        document.getElementById('write').innerHTML = "Thank You";
    // };
    // var initials = JSON.parse(localStorage.getItem("stringToSave")) || [];
    highscoreslist.textContent = highscore.map(score => {
    return `<li class="high-score">${database} - ${key}</li>`;
  })
  .join("");


});


play.addEventListener("click", () => {
    window.location.href = "./StartPage.html";
});

