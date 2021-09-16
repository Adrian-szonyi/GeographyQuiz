var SubmitScore = document.getElementById("submitscore-btn");
var inputString = document.getElementById("inputString");
var stores = Array();
var play = document.getElementById("Play");
var highscoreslist = document.getElementById("highscoreslist")
var key1 = localStorage.getItem("key");
var scorecard = document.getElementById("scorecard");
var savedScore = localStorage.getItem("key")


scorecard.textContent = savedScore;
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
    }

    var savedInitials = localStorage.getItem("Initials")
    var savedScore = localStorage.getItem("key")
    var node = document.createElement("li");
var textnode = document.createTextNode(savedInitials + " " + savedScore);     
node.appendChild(textnode);                              
document.getElementById("highscoreslist").appendChild(node); 

});


localStorage.getItem("Initials");
var key3 = localStorage.getItem("key");



play.addEventListener("click", () => {
    window.location.href = "./StartPage.html";

});
