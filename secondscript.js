//lots of variables
var continueGame = false;
var playersTurn = false;

var computerChoices = [];//array of numbers
var userChoices = [];
var temp = [];
var ranNum = [];
var round = 0;

var startGameButton = document.getElementById('startButton');
/*
var greenButton = document.getElementById('greenButton');
var redButton = document.getElementById('redButton');
var yellowButton = document.getElementById('yellowButton');
var blueButton = document.getElementById('blueButton');
*/
var colorButtons = document.getElementsByClassName("coloredButton");


//lots of functions below

function highlight (num){
  console.log("highlight", num);
  switch(num){
    case 1:
      greenButton.style.backgroundColor = "#0a0";
      break;
    case 2:
      redButton.style.backgroundColor = "#a00";
      break;
    case 3:
      yellowButton.style.backgroundColor = "#aa0";
      break;
    case 4:
      blueButton.style.backgroundColor = "#00a";
      break;
  }//switch
}//highlight function
function unhighlight (num){
  switch(num){
    case 1:
      greenButton.style.backgroundColor = "green";
      break;
    case 2:
      redButton.style.backgroundColor = "red";
      break;
    case 3:
      yellowButton.style.backgroundColor = "yellow";
      break;
    case 4:
      blueButton.style.backgroundColor = "blue";
      break;
  }//switch
}//unhighlight
function goToNextRound(){

      theComputersTurn();
      // wait for cpu turn to finish...
      console.log("took cpu turn");
      thePlayersTurn();
      // wait for player to take turn
      console.log("took player turn");

}
function decide (){
//input loop here lol I forgot it was a memory game
      if (userChoices[userChoices.length - 1] !== computerChoices[computerChoices.length - 1]){
        console.log(computerChoices, userChoices, "sorry");
        continueGame=false;
        //TODO need to actually compare
      }//if
      else {
        console.log(computerChoices, userChoices, "yay");
        continueGame= true;
        goToNextRound();
      }//else

}//decidefunction
function flipContinueGameVariable (){
    continueGame = !continueGame;//sets continueGame to true
}//flipContinueGame

function buttonClickEvents(){

  for (var i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener('click', function(event){
    let choice = event.target.getAttribute('data-number');
    colorFunction(choice);
  });
}

/*
  greenButton.addEventListener('click', greenFunction);
  redButton.addEventListener('click', redFunction);
  yellowButton.addEventListener('click', yellowFunction);
  blueButton.addEventListener('click', blueFunction);
  // when interval3 has fired, decide();
*/
  function colorFunction(choice){
    userChoices.push(choice);
    var interval = setInterval(function(){
      highlight(choice);
    }, 500);
    var interval2 = setInterval(function(){
      clearInterval(interval);
      unhighlight(choice);
      decide();
    }, 1000);
    var interval3 = setInterval(function(){
      clearInterval(interval2);
    }, 1002);
    // userTurn = !userTurn;
  }
/*
  function greenFunction (){
    mostRecentChoice = 1;
    userChoices.push(mostRecentChoice);
    var interval = setInterval(function(){
      highlight(mostRecentChoice);
    }, 500);
    var interval2 = setInterval(function(){
      clearInterval(interval);
      unhighlight(mostRecentChoice);
    }, 1000);
    var interval3 = setInterval(function(){
      clearInterval(interval2);
      // emit event: user clicked & intervals are done.
    }, 1001);
    // userTurn = !userTurn;
  }
  function redFunction (){
    mostRecentChoice = 2;
    userChoices.push(mostRecentChoice);
    var interval = setInterval(function(){
      highlight(mostRecentChoice);
    }, 500);
    var interval2 = setInterval(function(){
      clearInterval(interval);
      unhighlight(mostRecentChoice);
    }, 1000);
    var interval3 = setInterval(function(){
      clearInterval(interval2);
    }, 1001);
    // userTurn = !userTurn;
  }
  function yellowFunction(){
    mostRecentChoice = 3;
    userChoices.push(mostRecentChoice);
    var interval = setInterval(function(){
      highlight(mostRecentChoice);
    }, 500);
    var interval2 = setInterval(function(){
      clearInterval(interval);
      unhighlight(mostRecentChoice);
    }, 1000);
    var interval3 = setInterval(function(){
      clearInterval(interval2);
    }, 1001);
    // userTurn = !userTurn;
  }
  function blueFunction(){
    mostRecentChoice = 4;
    userChoices.push(mostRecentChoice);
    var interval = setInterval(function(){
      highlight(mostRecentChoice);
    }, 500);
    var interval2 = setInterval(function(){
      clearInterval(interval);
      unhighlight(mostRecentChoice);
    }, 1000);
    var interval3 = setInterval(function(){
      clearInterval(interval2);
    }, 1001);
    // userTurn = !userTurn;
  }//end of blueFunction
  */
}
function waitForTheClick(){
  // what happens when user clicks?
  // when user does action, then decide:
  // listen to event emitted from button click interval completion

}//end of wait for the click


function theComputersTurn(){
  if (playersTurn === false){
      //computers turn now
      round++;
      //remember to put the round on screen here
      userChoices = [];  //erases all user choices
      ranNum = Math.floor((Math.random() * 4) + 1);//picks a random number
      computerChoices.push(ranNum);// pushes to the computers array

      var n = 0;
      var intervalComputer = setInterval(function(){
          //setInterval for each computer presses
          if (n === computerChoices.length - 0){
          clearInterval(intervalComputer);
          }//if//clears interval after all the comp presses so it doesnt keep going forever
          setTimeout(function()
            {
              highlight(computerChoices[n]);
            }, 200);

          setTimeout(function(){
            unhighlight(computerChoices[n]); n++;
          }, 500);
      }, 600);
      playersTurn = true;
  }//if playersTurn
}//theComputersTurn function

function thePlayersTurn(){
  if (playersTurn === true){

    waitForTheClick();

    playersTurn = false;
  }//playersTurn
}//thePlayersTurn function

function getEverythingStarted(){
    buttonClickEvents(); // set up game board
    continueGame = true;
    goToNextRound();




}//getEverythingStarted

startGameButton.addEventListener('click', getEverythingStarted);





/*
use this

  var n = 0;
  var intervalComputer = setInterval( function(){
      if (n === computerChoices.length){
      clearInterval(intervalComputer)
    }//if
      setTimeout(function(){highlight(computerChoices[n]);}, 500);
      console.log("first random number = " + computerChoices[n]);
      setTimeout(function(){unhighlight(computerChoices[n]);}, 1000);
      console.log("first random number = " + computerChoices[n]);
      console.log("playersTurn1 = " + playersTurn);
      playersTurn = true;
      console.log("playersTurn2 = " + playersTurn);
      n++;
  }, 1002)
*/

/*
don't use this

  for (var n in computerChoices){
    setTimeout(function(){highlight(computerChoices[n]);}, 500);
    console.log("first random number = " + computerChoices[n]);
    setTimeout(function(){unhighlight(computerChoices[n]);}, 1000);
    console.log("first random number = " + computerChoices[n]);
    console.log("playersTurn1 = " + playersTurn);
    playersTurn = true;
    console.log("playersTurn2 = " + playersTurn);
  }//loop through the computers array
*/
