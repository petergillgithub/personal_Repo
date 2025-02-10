// TODO 1. Local Variable
// Definition: A local variable is a variable that is declared inside a function and is only accessible within that function. Once the function execution ends, the local variable is destroyed.

/* let message = 'Hello, World' ; function greet(){
  // let message = 'Hello, World'; // Local variable
  console.log(message);
}

greet(); */

// ** Example with Parameters: Function parameters also act as local variables:

/* function add(a,b){
  let sum = a + b;
  return sum;
}

console.log(add(2,5)); */

// TODO 2. Global Variable

//Definition: A global variable is a variable that is declared outside any function and can be accessed from anywhere in the program, including inside functions.

let message = 'Hello World !'; // Global Variable

function greet(){
  console.log(message); // Accessible inside the function 
}

greet(); // Output: Hello, world!
console.log(message); // Output: Hello, world!

