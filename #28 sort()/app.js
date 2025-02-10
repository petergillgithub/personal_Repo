// sort()  = method used to sort elements of an array i place.

//           Sorts elements as strings in lexicographic order, not alphabetical
//           lexicographic = (alphabet +  numbers + symbols)  as strings


const fruits = ['apple','orange','banana','mango','cherry']

fruits.sort()
console.log(fruits);

const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.sort((a,b) => a - b);
console.log(numbers);

// Another Example

const people = [{name: "peter",age: 33},
                {name:"John",age: 31},
                {name:"Lukes",age:50}]


people.sort((a,b) => a.age - b.age);
console.log(people);

people.sort((a,b) => b.name.localeCompare(a.name));
console.log(people);

