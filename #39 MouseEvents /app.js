// eventListner = Listen for specific events to create interactive web pages .
//                events: click,mouseover,mouseout
//                .addEventListener(event,callback)

const mybox = document.getElementById("mybox");

const mybutton = document.getElementById("mybutton")

// const mybutton = document.getElementById("mybuton")

/* function changeColor (event){
  event.target.style.backgroundColor = "tomato"
  event.target.textContent = "Ouch 😗"

} */

// mybox.addEventListener("click",function(event){
//   event.target.style.backgroundColor = "tomato"
//   event.target.textContent = "Ouch !!! 😗"

// });

// OR Another way

/* mybutton.addEventListener("click", event => {
  event.target.style.backgroundColor = "tomato"
  event.target.textContent = "Ouch Click !! 🥹"
  
});

mybutton.addEventListener("mouseover", event => {
  event.target.style.backgroundColor = "lightpink"
  event.target.textContent = "Ouch " + "MouseOver!! 🥹"

});

mybutton.addEventListener("mouseout", event =>{
  event.target.style.backgroundColor = "red"
  event.target.textContent = "Ouch Mouseout Me !! 😎"
  
}); 

*/

// HTML DOM onclick Event


function myfun(){
  document.getElementById("peter").innerHTML = "JimmySherGill"
}