// Promise = An Object that manages asynchronous operations.
//           Wrap a promise object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise (resolve,reject) => {asynchronous code}.

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog(){

  return new Promise((resolve, reject) => {
    setTimeout(()=> {

      const dogwalked= true;

      if (dogwalked){
        resolve("You walk the dog 🐕");

      }
      else{
        reject("You did not walked the dog")
      }


     
    },1500)

  })
  
}

function cleanKitchen(){

  return new Promise((resolve, reject) =>{
    setTimeout(()=>{

      const cleanedthekitchen =  false;

      if (cleanedthekitchen){
        resolve("You clean the kitchen 🧹");
      } 
      else{
        reject("You did not clean the kitchen")
      }
    },2000)
  })
  
}
function takeOutTrash(){
  return new Promise((resolve,reject) =>{
    setTimeout(()=>{

      const takeoutthetrash = true;

      if(takeoutthetrash){
        resolve("You take out the trash");
      }

        reject("You did not take out the trash")
    },500)
  });
  
}

// walkDog();
// cleanKitchen();
// takeOutTrash();
// console.log("Task completed");


// Below are for callback hell
/* walkDog(() =>{
  cleanKitchen(()=>{
    takeOutTrash(()=> console.log("all task completed"))
  })
}) */

// Promise
walkDog().then(value => {console.log(value); return cleanKitchen()}).then(value => {console.log(value); return takeOutTrash()}).then(value => {console.log(value); console.log("You finished the all task")})
.catch(error => console.error(error));
