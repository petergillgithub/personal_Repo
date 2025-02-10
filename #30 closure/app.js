// closure = A function defined inside of another function, the inner function has access to the variables and scope off the outer function.
// Allow for private variable and state maintence used frequently in 35 framwworks: React,Vue,Angular.


// ----------Example 1: Simple Closure----------------

function outterFunction(){

  let outerVariable = "I am from the outer scope";

  function innerFunction(){
    console.log(outerVariable); // Access the outer variable

  }
  return innerFunction; // Return the inner function
}

const closureExample = outterFunction(); // outerFunction has finished executing

closureExample();

//--------------------Example 2: Preserving State


function counter (){

  let count = 0;

  return function(){
    count++;
    console.log(count);
  }
}

const increment = counter();
increment(); // Logs: 1
increment(); // Logs: 2
increment(); // Logs: 3


for (let i = 0; i < 500; i++){
  setTimeout(function(){
    console.log(i);
  },2000);
}