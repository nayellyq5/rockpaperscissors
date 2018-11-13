// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function(){
    $("#userChoice").text($("#input").val())
});

var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;

$("#shoot").click(function(){
    randomNumber = Math.random();
if(randomNumber > 0 && randomNumber < .33) {
    computerChoice = "rock"
}
else if(randomNumber > .33 && randomNumber < .66){
    computerChoice = "paper"
}
else if(randomNumber > .66 && randomNumber < 1){
    computerChoice = "scissors"
}

$("#computerChoice").text(computerChoice)
    userChoice = $("#input").val()
$("#userChoice").text(userChoice)
});
 
 

// DOCUMENT READY FUNCTION BELOW

