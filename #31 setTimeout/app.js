// setTimeout() = function in JavaScript that allows you to schedule the executin of a function after an amount of time(milliseconds) Times are approximate( varies bases on the workload of the JAvascript runTime env.)

// setTimeout(callback,delay)
// clearTimeout(timeoutId) = can cancel a timeout before it trigger.

/* 
function sayHello(){
  window.alert("Hello")
}
setTimeout(sayHello,3000); */

// ----------- Example: -------------------

/* console.log("Start");

setTimeout(function(){
  console.log("This runs after 2 Seconds");
},2000);

console.log("End"); */

// ----------- Example: -------------------


// setTimeout(function(){window.alert("Hello")},3000)

// setTimeout(()=> window.alert("Arrow function"),2000) // Arrow Function


// ------------ Canceling a setTimeout -----------

const timeoutID = setTimeout(function(){
  console.log("This will never run");
},4000);

clearTimeout(timeoutID);