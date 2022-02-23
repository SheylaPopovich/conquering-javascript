console.log("This is linked!");

//variable for welcome message
var greeting = 'Hola ';
var name = 'Sheyla';
var message = ', please check your order:';

//example of a concatenation
var welcome = greeting + name + message;


//variables to hold detail info about the sign
var sign = 'The Popovich home';
var tiles = sign.length; //this is going to show a total number of ltrs in the signage
var subTotal = tiles * 5; // this is going to take the length of tiles and multiply by 5
var shipping = 7; 
var grandTotal = subTotal + shipping // this line will calculate the total of shipping and subtotal

//get the element that has an id of greeting
var el = document.getElementById('greeting');

//replace the content of the element with the personalized welcome message
el.textContent = welcome


