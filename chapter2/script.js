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

//get the element that has an id of userSIgn then update its contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

//get the element that has an id of tiles then update it contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

//get the element that has an id of subTotal then update its contents
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

//get the element that has an id of shipping then update its contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

//get the element that has an id of grandTotal then update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal; 





