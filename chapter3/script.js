// The script is placed inside an immediately invoked function expression which helps protect the scope of variables

(function (){

//PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS

//Create a hotel object using object literal syntax
let hotel = {
name: 'Park',
roomRate: 240, //amount in dollars
discount: 15, //percentage discount
offerPrice:  function() {
    var offerRate = this.roomRate * ((100 - this.discount) / 100);
    return offerRate;
}
};

//Write out the hotel name, standard rate, and the special rate
let hotelName, roomRate, specialRate   

//Get Elements
hotelName = document.getElementById('hotelName');
roomRate = document.getElementById('roomRate');
specialRate = document.getElementById('specialRate');

//Write hotelName, roomRate, and specialRate
hotelName.textContent = hotel.name;
roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
specialRate.textContent =  '$' + hotel.offerPrice();

//PART TWO: CALCULATE ADN WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
var expiryMSg; //message displayed to users
var today;  //today's date
var elEnds; //the element that shows the message about the offer ending


function offerExpires(today){

    //Declare variables within the unction for local scope
    var weekFromToday, day, date, month, year, dayNames, monthNames;

    //Add 7 days time (added in milliseconds) 
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    
    //Create arrays to hold the names of days / months
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    //Collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay9()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
    

    //Create the message
    expiryMSg = 'Offer expires next ';
    expiryMSg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')'; 
    return expiryMSg; 
}

today = new Date();  //put today's date in variable
elEnds = document.getElementById('offerEnds');   //get the offerEnds element
elEnds.innerHTML = offerExpires(today);     //Add the expiry message

//Finish the immediately invoked function expression
}())