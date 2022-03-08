//Select the element and store it in a variable
// var el = document.getElementById('one');

//Change the value of the class attribute
// el.className = 'cool'



//-------------------------------------//
//Selecting Elements using Class Attributes
// var elements = document.getElementsByClassName('hot'); // Find hot items

// if (elements.length > 2) {       // If 3 or more are found

//   var el = elements[2];         // Select the third one from the NodeList
//   el.className = 'cool';       // Change the value of its class attribute

// }




//-------------------------------------//
//Selecting Elements by Tag Name
// var elements = document.getElementsByTagName('li');   //find <li> elements

// if (elements.length > 0) {        //if one or more element is found

    // var el = elements[0];       //select the first one using array syntax
    // el.className = 'cool';        //change the value fo the class attribute
// }






//-------------------------------------//
// Selecting Elements Using CSS Selectors
//querySelector( ) only returns the first match
// var el = document.querySelector('li.hot'); 
// el.className = 'cool';

//querySelectorAll returns a NodeList
//The second matching element (the third list item) is selected and changed
// var els = document.querySelectorAll('li.hot');
// els[1].className = 'cool';


