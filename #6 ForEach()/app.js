// forEach() =  method used to iteraet over the elements
//              of an array and apply a spefied function(callback) to each element

//               array.forEach(callback);
//                element,index,array are provided

/* let numbers = [1,2,3,4,5];


numbers.forEach(triple);

numbers.forEach(display);



function double(element,index,array){
  array[index] = element * 2
  
}

function triple(element,index,array){
  array[index] = element * 3
}

function display(element){
  console.log(element);
} */

// ! OR

// Define a callback function
function printItem(item) {
  console.log(item);
}

// Use forEach with the callback
const fruits = ['Apple', 'Banana', 'Cherry'];
fruits.forEach(printItem);

//  ! OR 

const fruitsName = ['Lemon','Coconut','Orange'];

fruitsName.forEach(function(item){
  console.log(item);
})

// ! OR






function itemsName(element,index,array){
  array[index] = element * 2
}

let listNumber = [1,2,3,4,5];

listNumber.forEach(itemsName);

console.log(listNumber);



