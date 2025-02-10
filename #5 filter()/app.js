// .filter() = create a new array by filtering out elements.

let numbers = [1,2,3,4,5,6,7,8,9,10];
let evenNum = numbers.filter(isEven);
let OddNum = numbers.filter(isOdd);


console.log(evenNum);
console.log(OddNum);


function isEven(element){
  return element % 2 === 0;

}

function isOdd(element){
  return element % 2 !== 0;

}

// Another Example

const ages = [12,24,,18,13,45,56,18,14];
const adults = ages.filter(isAdult);
const underAge = ages.filter(isChild);

console.log(adults); // Output = [24, 18, 45, 56, 18]
console.log(underAge); // OutPut -  [12, 13, 14]


function isAdult(element){
  return element >= 18;
}

function isChild(element){
  return element < 18;
}

// Another Example

const fruits = ['apple','banana','orange','litchi','pomegranate','dragonfruit']

const shortWords = fruits.filter(getShortWords);
const uppercase = fruits.map(getUpperCase);


console.log(shortWords);
console.log(uppercase);

function getShortWords(element){
  return element.length < 7;
}

function getUpperCase(element){
  return element.toUpperCase() ;
}