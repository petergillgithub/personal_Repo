//eventListener = Listen for specific events to create interacive web pages..
//                events: keydown,keyup
//                document.addEventListener(event,callback);
/* 
const mybox = document.getElementById("mybox")

document.addEventListener("keydown", event => {
    mybox.textContent = "🙁";
    mybox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
  mybox.textContent = "🥺"
  mybox.style.backgroundColor = "lightpink"
  
}) */


// ----- Another Example ---------


const mybox = document.getElementById("mybox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener('keydown', event => {

  if (event.key.startsWith("Arrow")) {

    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }
    mybox.style.top = `${y}px`;
    mybox.style.left = `${x}px`;
  }


})

