// function declaration = define a reusable block of code that perform a specific task....

//  function expression = a way to define function as values or variables.


/* const numbers = [1,2,3,4,5];
const squares = numbers.map(square);

console.log(squares);

function square(element){
  return Math.pow(element, 2);
} */

// Another Way 

const numbers = [1,2,3,4,5,6,7,8,9,10];


const squares = numbers.map(function(element){
  return Math.pow(element,2);
});

const cubes = numbers.map(function(element){
  return Math.pow(element,3);
});

const evenNumber = numbers.filter(function(element){
  return element % 2 === 0;
})
const oddNumber = numbers.filter(function(element){
  return element % 2 !== 0;
})

const total = numbers.reduce(function(accumulater,element){
  return accumulater + element;
})

console.log(squares); // OutPut =  [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(cubes); // Output = [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]
console.log(evenNumber); // OutPut = [2, 4, 6, 8, 10]
console.log(oddNumber); //OutPut = [1, 3, 5, 7, 9]
console.log(total); // 55



