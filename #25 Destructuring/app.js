// destructuring = extract values from arrays and objects,
// then assign them to variable in a convenient way
//                  [] = to perform array destructing
//                  {} = to perform object destructing
//                  5 examples


// --------- EXAMPLE 1 --------------
// SWAP THE VALUE OF THE VARIABLES


let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a); // OutPut = 2
console.log(b); // OutPut = 1

// --------- EXAMPLE 2 --------------
// SWAP 2 ELEMENTS IN AN ARRAY

/* const colors =  ["red","green","blue","black","white"];

[colors[0],colors[4]] = [colors[4],colors[0],]

console.log(colors); */ 

// Output = ['white', 'green', 'blue', 'black', 'red']

// --------- EXAMPLE 3 --------------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors =  ["red","green","blue","black","white"];

const [firstColor, secondColor,thirdColor,...extraColor] = colors;

console.log(extraColor);

// --------- EXAMPLE 4 --------------
// EXTRACT VALUES FROM OBJECT

/* const person1 = {
  firstName: "john",
  lastName: "gill",
  age: 23,
  job: "mobile repairer",
}

const person2 = {
  firstName: "Peter",
  lastName: "Shergill",
  age: 20,
  // job: "Computer repairer",
}

const {firstName,lastName,age,job="employed",qualification="MSC"} = person2;

console.log(job); */

// --------- EXAMPLE 5 --------------
// DESTRUCTURE IN THE FUNCTION PARAMETERS


function displayPerson({firstName,lastName,age,job}){
  console.log(`My Name is: ${firstName} ${lastName}`);
  console.log(`My age is : ${age}`);
  console.log(`MY Profession is: ${job}`);

}


const person1 = {
  firstName: "john",
  lastName: "gill",
  age: 23,
  job: "mobile repairer",
}

const person2 = {
  firstName: "Peter",
  lastName: "Shergill",
  age: 20,
  job: "Computer repairer",
}

displayPerson(person2)
