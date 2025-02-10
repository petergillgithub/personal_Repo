const fruits = [{name: "apple", color: 'red', calories: 95 },
                {name: "orange", color: 'orange', calories: 55 },
                {name: "banana", color: 'yellow', calories: 23 },
                {name: "coconut", color: 'white', calories: 45 },
                {name: "pineapple", color: 'yellow', calories: 37 }];


/* fruits.push({name: "grapes",color: "Purple",calories: 100});
console.log(fruits); */

// --------- pop -----------------


/* fruits.pop()
console.log(fruits); */

// --------- splice --------------------

/* fruits.splice(1,3);
console.log(fruits); */



// console.log(fruits[0].calories);


// ---------------------forEach() ----------------------

fruits.forEach(fruit => console.log(fruit.name));

// ---------------------map() ----------------------

const fruitNames = fruits.map(fruit => fruit.name)

console.log(fruitNames);

// ---------------------filter() ----------------------

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");

console.log(yellowFruits);

const lowCalfruits = fruits.filter(fruit => fruit.calories < 50)

console.log(lowCalfruits);

// ---------------------reduce () ----------------------


