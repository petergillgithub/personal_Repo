// JSON = (JavaScript Object Notation) data-interchange format Used for exchange data between a server and a web application.
//        JSON files{key:value} OR [value1,value2,value3]
//        JSON.stringfy() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object.


// **************JSON.stringfy() = converts a JS object to a JSON string.*****

/* const names = ["Peter","Patrick","Pearson","Patras"]
const person = {
  "name": "Peter",
  "age": 30,
  "isEmployed": true,
  "hobbies": ["fishing","internet browsing"]
}
const people = [{
  "name": "Peter",
  "age": 30,
  "isEmployed": true,
  "hobbies": ["fishing","internet browsing"]
},
{
  "name": "Patrick",
  "age": 35,
  "isEmployed": false,
  "hobbies": ["cricket","table tennis"]
},
{
  "name": "Patras",
  "age": 50,
  "isEmployed": true,
  "hobbies": ["football","games"]
}]

const jsonString1 = JSON.stringify(names);
const jsonString2 = JSON.stringify(person);
const jsonString3 = JSON.stringify(people);


console.log(jsonString2); */


// ***********************JSON.parse() = converts a JSON string to a JS object.

const jsonNames = `["Peter","Patrick","Pearson","Patras"]`;
const jsonPerson = `{
  "name": "Peter",
  "age": 30,
  "isEmployed": true,
  "hobbies": ["fishing","internet browsing"]
}`;
const jsonPeople = `[{
  "name": "Peter",
  "age": 30,
  "isEmployed": true,
  "hobbies": ["fishing","internet browsing"]
},
{
  "name": "Patrick",
  "age": 35,
  "isEmployed": false,
  "hobbies": ["cricket","table tennis"]
},
{
  "name": "Patras",
  "age": 50,
  "isEmployed": true,
  "hobbies": ["football","games"]
}]`;

// const parsedData = JSON.parse(jsonNames)

// console.log(parsedData);


fetch("people.json")
  .then(response => response.json())
  // .then(value => console.log(value))
  .then(values => values.forEach(value => console.log(value.name)))