// .map() = accepts a callback and applies that function to each element of an array, then return to new array.


const numbers = [1,2,3,4,5];
const squares = numbers.map(square);

const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);

function square(element){
  return Math.pow(element,2)
}

function cube(element){
  return Math.pow(element,3)
}


// Another Example

const students = ['peter','john','lukus','alisha','sahil','joel'];
const studentUpperCase = students.map(upperCase);
const studentLowerCase = students.map(lowercase);

console.log(studentUpperCase);
console.log(studentLowerCase);



function upperCase(element){
  return element.toUpperCase();
}

function lowercase(element){
  return element.toLowerCase();
}

// Another Example

const dates = ["2025-1-10","2025-2-20","2025-3-30"];
const formatedDates = dates.map(formatDates);

console.log(formatedDates);


function formatDates(element){
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`
}