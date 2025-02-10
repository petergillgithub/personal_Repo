// ALL LOOPS :

// ! 1. for Loop          <--------------------------

// Definition: The for loop is a control flow statement used to repeat a block of code a certain number of times. It is commonly used for iterating over arrays.


// TODO Synatx
/* for (initialization; condition; increment/decrement) {
  // Code to execute
}  */

//! Example

/* const fruits = ['Apple,Banana','Cherry']

for (let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
} */




// ****************************************

// ! 2. for...of loop

// Definition: The for...of loop is used to iterate over iterable objects like arrays, strings, or NodeLists. It provides a simpler syntax for accessing array elements directly.
// TODO Synatx
/* for (const element of iterable) {
  // Code to execute
}
 */

/* const fruits = ['Apple','Banana','Cherry','Mango']

for(const fruit of fruits){
  console.log(fruit);
} *//*  */

// ! 3. forEach Method

//Definition: The forEach method is an array method that executes a provided callback function once for each array element.
// TODO Synatx
/* array.forEach((element, index, array) => {
  // Code to execute
});
 */

/* const fruits = ['Apple','Banana','Cherry','Mango']

fruits.forEach((fruits,index) => {
  console.log(`${index}: ${fruits}`);

}) */

//! 4. while Loop
// Definition: The while loop executes a block of code as long as the specified condition is true.
// TODO Synatx
/* while (condition) {
  // Code to execute
} */

const fruits = ['Apple','Banana','Cherry','Mango'];
let i = 0;

while(i< fruits.length){
  console.log(fruits[i]);
  i++;

}

// ! 6. map Method
// Definition: The map method creates a new array by applying a provided function to every element of the original array. It does not modify the original array.
// TODO Synatx

/* const newArray = array.map((element, index, array) => {
  // Return transformed element
});
 */










