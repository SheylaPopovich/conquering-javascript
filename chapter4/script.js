// console.log('This is Linked');

// var pass = 50;  // Pass Mark
// var score = 90; // Score

//Check if the user has passed
// var hasPassed = score >= pass;

//Write the message into the page
// var el = document.getElementById('answer');
// el.textContent = 'Level Passed: ' + hasPassed;



var score1 = 90; //Round 1 score
var score2 = 95; //Round 2 score

var highScore1 = 75; //Round 1 high score
var highScore2 = 95; //Round 2 high score

//Check if scores are higher than current high scores
var comparison = (score1 + score2) >= (highScore1 + highScore2);

//Write the message into the page
var el = document.getElementById ('answer');