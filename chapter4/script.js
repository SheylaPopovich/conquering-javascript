//USING COMPARISON OPERATORS
// var pass = 50;  // Pass Mark
// var score = 90; // Score

//Check if the user has passed
// var hasPassed = score >= pass;

//Write the message into the page
// var el = document.getElementById('answer');
// el.textContent = 'Level Passed: ' + hasPassed;

//-------------------------------------------//
//COMPARING TWO EXPRESSIONS
// var score1 = 90; //Round 1 score
// var score2 = 95; //Round 2 score

// var highScore1 = 75; //Round 1 high score
// var highScore2 = 95; //Round 2 high score

//Check if scores are higher than current high scores
// var comparison = (score1 + score2) >= (highScore1 + highScore2);

// //Write the message into the page
// var el = document.getElementById ('answer');
// el.textContent = "New High Score: " + comparison;

//-------------------------------------------//

//USING LOGICAL AND
// var score1 = 8; //Round 1 Score
// var score2 = 8; //Round 2 Score
// var pass1 = 6; //Round 1 pass mark
// var pass2 = 6; //Round 2 pass mark

//Check whether user passed both rounds, store result in a variable
// var passBoth = (score1 >= pass1) && (score2 >= pass2);

//Create message
// var msg = 'Both rounds Passed: ' + passBoth;

//Write the message onto the page
//  var el = document.getElementById('answer');
// el.textContent = msg;

//-------------------------------------------//

//USING LOGICAL OR LOGICAL NOT
// var score1 = 8; //Round 1 Score
// var score2 = 8; //Round 2 Score
// var pass1 = 6; //Round 1 pass mark
// var pass2 = 6; //Round 2 pass mark

//Check whether user passed one of the two rounds, store result in variable
// var minPass = ((score1 >= pass1) || (score2 >= pass2))

//Create message
// var msg = 'Resit required: ' + !minPass;

//Write message onto the page
// var el = document.getElementById('answer');
// el.textContent = msg;

//-------------------------------------------//
//USING IF STATEMENTS
// var score = 95; // Score
// var msg; // Message

// if (score >= 50) {
//if score is 50 or higher
//   msg = "Congratulations!";
//   msg += " Proceed to the next round.";
// } else {
//   msg = "Failed, try Again";
// }

// var el = document.getElementById("answer");
// el.textContent = msg;

//-------------------------------------------//
//USING SWITCH STATEMENTS

// var msg; //MESSAGE
// var level = 2; //Level

//Determine message based level
// switch (level) {
//   case 1:
//     msg = "Good luck on the first test";
//     break;
//   case 2:
//     msg = "Second of three - keep going!";
//     break;
//   case 3:
//     msg = "Final round, almost there!";
//     break;

//   default:
//     msg = "Good Luck!";
//     break;
// }

// var el = document.getElementById('answer');
// el.textContent = msg;

//-------------------------------------------//
//USING FOR LOOPS
// var scores = [24, 32, 17, 23, 40, 60, 75]; //Array of Scores
// var arrayLength = scores.length; //Items in an array
// var roundNumber = 0; // Current round
// var msg = ""; // message
// var i; //Counter

//Loop through the items in the array
// for (i = 0; i < arrayLength; i++) {
  //Arrays are zero based (so 0 is round 1)
  //Add 1 to the current round
//   roundNumber = i + 1;

  //Write the current round to message
//   msg += "Round " + roundNumber + ": ";

  //Get the Score from the scores array
//   msg += scores[i] + "<br />";
// }

// document.getElementById("answer").innerHTML = msg;


//-------------------------------------------//
//USING WHILE LOOPS
// var i = 1;   //Set counter to 1
// var msg = '';  //Message

//Store 5 times table in a variable
// while (i < 10 ) {
//     msg += i + ' x5 = ' + (i * 5) + '<br />';
//     i++
// }
// document.getElementById('answer').innerHTML = msg;



//-------------------------------------------//
//USING DO WHILE LOOPS
// var i = 1;   //Set Counter to 1
// var msg = ' ';   ///Message


//Store 5 times table in a variable
// do {
//     msg += i + ' x 5 = ' + (i * 5) + '<br />';
//     i++;
// } while (i < 1);
//Note how this is already 1 and it still runs

// document.getElementById('answer').innerHTML = msg;