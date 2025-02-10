// arrow function = a concise way to write function expression good for simple functions that you use only once (parameters) => some code

// Declaration

function hello(){
  console.log("hello");
}

hello();

// Function expression

const helloSir = function(){
  console.log("hello Sir");
}

helloSir();

//Arrow Function

const helloSirji = () => console.log("Hello Sir Ji");
const helloSirji1 = (name) => console.log(`Hello ${name}`);
const helloSirji2 = (names,age) => {console.log(`Hello ${names} You are ${age} years old`);}


helloSirji();
helloSirji1('Peter')
helloSirji2('John',30)


//Another example 

const numb = [1,2,3,4,5,6];

const square = numb.map((element) => Math.pow(element,2)); //Output - (6) [1, 4, 9, 16, 25, 36]

const cube = numb.map((element) => Math.pow(element,3)); // Output = [1, 8, 27, 64, 125, 216]

const evenNumber = numb.filter((element) => element % 2 === 0 ); // [2, 4, 6]

const oddNumber = numb.filter((element) => element % 2 !== 0) // [1, 3, 5]

const additiontotal = numb.reduce((accumulater,element) => accumulater + element) //21


console.log(square);
console.log(cube);
console.log(evenNumber);
console.log(oddNumber);
console.log(additiontotal);
