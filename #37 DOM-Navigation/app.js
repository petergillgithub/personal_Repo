//DOM Navigation = The process navigating through the structure of an HTML document using JavaScript..


//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children



//---------------.firstElementChild------------------


// const element = document.getElementById("deserts")
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

/* const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElements => {
  const firstChild = ulElements.firstElementChild;
  firstChild.style.backgroundColor = "yellow"
}) */

//---------------.lastElementChild------------------

/* const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;

lastChild.style.backgroundColor = "green" */


/* const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElements => {
  const lastChild  = ulElements.lastElementChild;
  lastChild.style.backgroundColor = "pink"
})
 */

// -------------- .nextElementSibling--------------------

/* const element = document.getElementById("vegetables");

const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow" */


// ---------- .previousElementSibling--------------------


/* const element = document.getElementById("ice-cream")
const prevSibling = element.previousElementSibling;

prevSibling.style.backgroundColor = "pink" */


//------------------.parentElement-------------

/* const element = document.getElementById("onions");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow" */

//------------.children--------------------------


// const element = document.getElementById("vegetables");

// const children = element.children;

/* Array.from(children).forEach(child => {
  child.style.backgroundColor = "green"
}) */

// children[1].style.backgroundColor = "yellow"
