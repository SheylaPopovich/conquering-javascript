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
var score1 = 8; //Round 1 Score
var score2 = 8; //Round 2 Score
var pass1 = 6; //Round 1 pass mark
var pass2 = 6; //Round 2 pass mark 

//Check whether user passed one of the two rounds, store result in variable
var minPass = ((score1 >= pass1) || (score2 >= pass2))

