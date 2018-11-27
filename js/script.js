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
    if(randomNumber >= 0 && randomNumber < .33) {
        computerChoice = "rock"
    }
    else if(randomNumber >= .33 && randomNumber < .66){
        computerChoice = "paper"
    }
    else if(randomNumber >= .66 && randomNumber <= 1){
        computerChoice = "scissors"
    }
    
    $("#computerChoice").text(computerChoice)
    userChoice = $("#input").val()
    $("#userChoice").text(userChoice)
    
    if(userChoice === "rock" && computerChoice === "rock"){
        $("#result").text("Tie")
    }
    if(userChoice === "rock" && computerChoice === "paper"){
        $("#result").text("Computer Wins")
    }
    if(userChoice === "rock" && computerChoice === "scissors"){
        $("#result").text("User Wins")
    }
    if(userChoice === "paper" && computerChoice === "paper"){
        $("#result").text("Tie")
    }
    if(userChoice === "paper" && computerChoice === "rock"){
        $("#result").text("User Wins")
    }
    if(userChoice === "paper" && computerChoice === "scissors"){
        $("#result").text("Computer Wins")
    }
    if(userChoice === "scissors" && computerChoice === "scissors"){
        $("#result").text("Tie")
    }
    if(userChoice === "scissors" && computerChoice === "rock"){
        $("#result").text("Computer Wins")
    }
    if(userChoice === "scissors" && computerChoice === "paper"){
        $("#result").text("User Wins")
    }
});


 

// DOCUMENT READY FUNCTION BELOW

