//new Date is a method
var today = new Date();

//getHours is an established method -Gets the hours in a date, using local time.
var hourNow = today.getHours();

var greeting; 

//if else statement below:
if (hourNow > 18) {
    greeting = 'Good Evening!';
}   else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');
