var SubmitScore = document.getElementById("submitscore-btn");
var inputString = document.getElementById("inputString");
var stores = Array();


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
    };

});

