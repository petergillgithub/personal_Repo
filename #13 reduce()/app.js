// .reduce() = reduce the elements of an array
//              to a single value


const prices = [1,4,5,10,12];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulater,element){
  return accumulater + element;
}


const grades = [23,78,100,1000,212,11,12,23];

const maxGrades = grades.reduce(maxgrade);
const minGrades = grades.reduce(mingrade);

console.log(maxGrades );
console.log(minGrades );

function maxgrade(accumulater,element){
  return Math.max(accumulater,element) // OutPut = 100
}

function mingrade(accumulater,element){
  return Math.min(accumulater,element) // OutPut = 23
}