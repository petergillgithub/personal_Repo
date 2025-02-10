/* let msg = 'Sign up to receive our newsletter for 10% off';
function updateMessage(){
  let el = document.getElementById('message');
  el.textContent = msg;
}
updateMessage(); */

// ! Another way to write the function
/* 
function updateMessage(msg){
  let el = document.getElementById('message')
  el.textContent = msg;
}

updateMessage('Sign up to receive our newsletter for 10% off'); */

// ! Getting a single value out of  FUNCTION

/* function calculationArea(width,height){
  let area = width * height;
  return area;
}

let wallOne = calculationArea(2, 3);
let wallTwo = calculationArea(2, 5); */

// *****************************************************************************

/* const greet = function(firstName,lastName){
  return `Hello ${firstName} ${lastName}`
}

alert(greet('Alice', 'Gill')); */

// *********** function can be anonymous;***********************************************


/* const square = function(number){
  return number * number
}
console.log(square(10)); */

// *****************************************************************************
Example: // The following variables are defined in the global scope
const num1 = 2;
const num2 = 3;
const name = "Chamakh"

function multiply(){
  return num1 * num2;
}

console.log(multiply());

