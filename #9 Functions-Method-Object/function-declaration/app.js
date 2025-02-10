//    Function Declaration :To create a function we can use a function declaration.

/* function printME(){
  // console.log('printing');
  alert('Hello Everyone');
}
printME();
printME(); */

//     Local variables : A variable declared inside a function is only visible inside that function.


// **************************************************************************************************

// Creating Objects using Literal Notation


/* let hotel = {
  name: 'Taj Hotel',
  rooms: 200,
  booked: 20,
  checkAvailbility: function() {
    return this.rooms - this.booked
  }
};

let elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

let elRooms = document.getElementById('rooms')
elName.textContent = hotel.checkAvailbility() */


// Creating Objects using Constructor Syntax.


/* let hotel = new Object();

hotel.name = 'Park';
hotel.rooms = 230;
hotel.booked = 20;
hotel.checkAvailability = function(){
  return this.rooms - this.booked;
}

let elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

let elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability() */


// *************************************************************************************

// Adding and Removing Properties

/* let hotel = {
  name: 'Taj Hotel',
  rooms: 120,
  booked: 12,
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

let elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

let elPool =  document.getElementById('Pool');
elPool.className = hotel.pool;

let elGym = document.getElementById('GYM');
elGym.className = hotel.gym;
 */


// *************************************************************************************

// ! 1 Function Declaration This is the standard way to define a function.

/* function add(a,b){
  return a + b;

}

let randomNumber = add;

console.log(Math.random(randomNumber(2,5))); */

// ! 2. Function Expression A Function can be stored in a variable

/* const muliplyNumber =   function(a,b){
  return a * b;
}

console.log(muliplyNumber(10,2)); */

// ! 3. Arrow Functions (ES6) A shorter way to write functions. Often used for simplicity.

/* const multiply = (a,b) => a * b  ;

console.log(multiply(2,4)); */

