// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements from the DOM(Document Object Model)


// 1. document.getElementByID()        // ELEMENT OR NULL
// 2. document.getElementsClassName()  // HTML COLLECTION
// 3. document.getElementsByTagName()  // HTML COLLECTION
// 4. document.querySelector()         // ELEMENT OR NULL
// 5. document.querySelectorAll()      // NODELIST



//  --------- document.getElementByID() ----

/* const myheading = document.getElementById("my-heading")
myheading.style.backgroundColor="yellow"
myheading.style.textAlign = "center"
myheading.style.color="blue" */


// ---------------document.getElementsClassName() ---------

/* const fruits = document.getElementsByClassName('fruits');

fruits[0].style.backgroundColor = "yellow";
fruits[1].style.color = "green"; */

// ------------------------document.getElementsByTagName()-----------------



/* const h4elements = document.getElementsByTagName("h4")
const lielements = document.getElementsByTagName("li") */



/* for(let h4element of h4elements){
  h4element.style.backgroundColor ="green"
  h4element.style.color ="white"
}

for(let lielement of lielements){
  lielement.style.backgroundColor = "yellow"
} */

/// Another Example

// Array.from(h4elements).forEach(h4elements =>{
//   h4elements.style.backgroundColor = "yellow"
// })

// h4elements[0].style.backgroundColor = "yellow"
// h4elements[0].style.color= "white";
// h4elements[1].style.color= "white";



// --------- document.querySelector() ------------

// const element = document.querySelector("h4");

// element.style.backgroundColor = "yellow"


// -----------------document.querySelectorAll() ------

const fruits = document.querySelectorAll("li");

// fruits[2].style.backgroundColor="yellow";

fruits.forEach(fruits => {
  fruits.style.backgroundColor = "green"
})