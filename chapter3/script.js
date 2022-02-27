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
