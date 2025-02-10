// What is a Callback in JavaScript? :     A callback is a function that is passed as an argument to another function, and it is executed later after a certain task or operation is completed. Callbacks are widely used in JavaScript, especially for asynchronous programming like handling events, making API calls, or performing time-based operations.
//                used to handle asynchronous operations
//                1. Reading a file.
//                2. Network Requests
//                3. Interacting with databases.

//                "Hey, When you're done, call the next"

// ! Example 1

hello(leave);



function hello (callback){
  console.log("Hello !");
  callback();
}

function goodbye (){
  console.log("good bye !");
}

function leave (){
  console.log("leave !");
}

// ! Example: 2
