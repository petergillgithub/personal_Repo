// --------------Example 1 <h1> ------------------

// STEP 1 CREATE THE ELEMENT

// const newh1 = document.createElement("h1")

// STEP 2 ADD ATTRIBUTES/PROPERTIES

// newh1.textContent = "I like pizza"
// newh1.id = "myh1";
// newh1.style.color= "tomato"
// newh1.style.textAlign = "center"

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newh1)
// document.body.prepend(newh1)
// document.getElementById("box1").append(newh1)
// document.getElementById("box1").prepend(newh1) // on top

// const box1 = document.getElementById("box3")
// document.body.insertBefore(newh1,box1)

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newh1,boxes[1]);


// REMOVE HTML ELEMENT
// document.getElementById("box1").removeChild(newh1)

// --------------Example 3 <li> ------------------

// STEP 1 CREATE THE ELEMENT

const newlistitem = document.createElement("li")

// STEP 2 ADD ATTRIBUTES/PROPERTIES

newlistitem.textContent = "coconut";
newlistitem.style.color = "blue"
newlistitem.style.backgroundColor = "yellow"

// STEP 3 APPEND ELEMENT TO DOM

// document.body.append(newlistitem)
// document.body.prepend(newlistitem)

// document.getElementById("fruits").append(newlistitem)
// document.getElementById("fruits").prepend(newlistitem)

// const banana = document.getElementById("banana")

// document.getElementById("fruits").insertBefore(newlistitem,banana)


const listitem = document.querySelectorAll("#fruits li");

document.getElementById("fruits").insertBefore(newlistitem,listitem[2])

// REMOVE HTML ELEMENT

document.getElementById("fruits").removeChild(newlistitem)

 


