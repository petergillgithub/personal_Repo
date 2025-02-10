//classList = Element property in javascrip used to internet with an element's lis of classes (CSS Classes)
//            Allows you to make reusable classes for many elemens acrosses your webpages.

// add()
//  remove()
//toggle(Remove if present,ADD if not)
//replace(oldclasss, newClass)
// contains()


const mybutton  = document.getElementById("mybutton");

// mybutton.classList.add("enabled") 
// mybutton.classList.remove("enabled")

// Another Example

/* mybutton.addEventListener("mouseover", event =>{
  event.target.classList.add("hover")
})

mybutton.addEventListener("mouseout", event =>{
  event.target.classList.remove("hover")
}) */

// Another Example --- toggle work same as above


/* mybutton.addEventListener("mouseover", event =>{
  event.target.classList.toggle("hover")
})

mybutton.addEventListener("mouseout", event =>{
  event.target.classList.toggle("hover")
})

mybutton.addEventListener("click", event =>{
  event.target.classList.toggle("hover")
}) */


// replace(oldclasss, newClass)

/* mybutton.classList.add("enabled");
mybutton.addEventListener("click",event =>{
  event.target.classList.replace("enabled","disabled");
});
 */

// Example with NodeList

const mybuttons = document.querySelectorAll(".mybutton");

mybuttons.forEach(button =>{
  button.classList.add("enabled")
  
});

mybuttons.forEach(button =>{
  button.addEventListener("mouseover", event =>{
    event.target.classList.toggle("hover")
  })
})

mybuttons.forEach(button =>{
  button.addEventListener("mouseout", event =>{
    event.target.classList.toggle("hover")
  })
})