// Create Variable for the welcome message.
let greeting = 'Howdy ';
let name = 'Molly';
let message = ' , Please check your order:'
// Concatenate the three variables above to create the welcome message.

let welcome = greeting + name + message


//Create variables to hold details about the Sign

let sign = 'Peter Gill';
let tiles = sign.length;
let subTotal = tiles * 5;
let shipping = 7;
let grandtotal = subTotal + shipping;

// Get the element that has an id of greeting.
let el = document.getElementById('greeting');

// Replace the content of that element with the personalized welcome message.
el.textContent = welcome;

// Get the element that has an id of userSign then updadate its contents

let elSign = document.getElementById('userSign');
elSign.textContent = sign;

//Get the element that has an id of tiles then updadate its contents 
let elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

//Get the element that has an id of Subtotal then updadate its contents
let elSubtotal = document.getElementById('subTotal');
elSubtotal.textContent = '$' + subTotal;

//Get the element that has an id of Shipping then updadate its contents

let elShipping =  document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

//Get the element that has an id of GrandTotal then updadate its contents

let elGrandTotal = document.getElementById('grandtotal');
elGrandTotal.textContent =  '$' + grandtotal;



