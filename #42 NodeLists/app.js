// NodeList = static collection of HTML by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map,filter,reduce)
//            Nodelist won't update to automatically reflect changes.

let buttons = document.querySelectorAll(".mybuttons");


//ADD HTML/ CSS PROPERTIES

/* buttons.forEach(button => {
  button.style.backgroundColor= "purple"
  button.textContent += " Peter"

}) */

// Click event Listener

/* buttons.forEach(button => {
  button.addEventListener("click" , event => {
    event.target.style.backgroundColor = "tomato"
  })
}) */

// MOUSEOVER + MOUSEOUT + event listener

/* buttons.forEach(button =>{
  button.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "yellow"
    event.target.style.color = "black"
  })  

})

buttons.forEach(button =>{
  button.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "green"
    event.target.style.color = "white"
  })  

}) */



// ADD AN ELEMENT

/* const newbutton = document.createElement("button"); // STEP 1
newbutton.textContent = "Button 5";
newbutton.classList = "mybuttons"; //STEP 2

document.body.appendChild(newbutton)
newbutton.style.backgroundColor = "pink"
newbutton.style.color = "black" */







