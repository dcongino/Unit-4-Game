
//Global variables for wins=0, losses=0, crystal numbers, current score, and target numbers
var wins = 0;
var losses = 0;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var currentScore = 0;
var targetScore = 0;
//Call setup function
setup ()
//Function that sets up a new game
function setup(){
   //Change target number
   targetScore = Math.floor(Math.random() * 40) + 20;
  //Change current score
    currentScore = 0;
    //Change crystal numbers
    crystal1 = Math.floor(Math.random() * 10);
    crystal2 = Math.floor(Math.random() * 10);
    crystal3 = Math.floor(Math.random() * 10);
    crystal4 = Math.floor(Math.random() * 10);
    if (crystal1 % 2 == 0) {
        crystal1++;
    }
    //Display target score, wins, losses, current score
    document.getElementById("number-to-guess").innerHTML = targetScore;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("score").innerHTML = currentScore;

}
function nextStep() {
    targetScore = Math.floor(Math.random() * 40) + 20;
  //Change current score
    currentScore = 0;
    //Change crystal numbers
    crystal1 = Math.floor(Math.random() * 10);
    crystal2 = Math.floor(Math.random() * 10);
    crystal3 = Math.floor(Math.random() * 10);
    crystal4 = Math.floor(Math.random() * 10);
    if (crystal1 % 2 == 0) {
        crystal1++;
    }
}    

//Onclick function that says on click of any crystal, add the number to the player score
    //Check if current score is less than, equal to, or greater than target number
    $("#bluegem").on("click", function(){gemClick("blue")});
    $("#redgem").on("click", function(){gemClick("red")});
    $("#greengem").on("click", function(){gemClick("green")});
    $("#yellowgem").on("click", function(){gemClick("yellow")});


function gemClick(color)
{
    if(color == "blue")
    {
        currentScore = crystal1 + currentScore;
        document.getElementById("score").innerHTML = currentScore
        console.log(crystal1)
        //Update currentScore
    }
    if(color == "green")
    {
        currentScore = crystal2 + currentScore;
        document.getElementById("score").innerHTML = currentScore
        console.log(crystal2)  
    }
    if(color == "red")
    {
        currentScore = crystal3 + currentScore;
        document.getElementById("score").innerHTML = currentScore
        console.log(crystal3)
    }
    if(color == "yellow")
    {
        currentScore = crystal4 + currentScore;
        document.getElementById("score").innerHTML = currentScore
        console.log(crystal4)
    }

    if(currentScore === targetScore) {
        alert("You Win!"); wins++;
        document.getElementById('wins').innerHTML = wins
        setup ()
        //Do stuff
    }
    if(currentScore > targetScore) {
        alert("You Lose!"); losses++;
        document.getElementById('losses').innerHTML = losses
        setup ()


        //Do stuff
    }
}


    
        //If less than, do nothing
        //If greater than, run lose function
        //If equal to, run win function

//A winner is you function
    //Display winner text
    //Increment wins
    //Run new game function

//You lose function
    //Display loser text
    //Increment losses
    //Run new game function
