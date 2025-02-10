//  Async/Await = Async = makes a function return a promise
//                Await = makes an async function wait for a promise

//                Allows you wrtite asynchronous code in a synchronous manner.
//                Async doesn't have resolve or reject parameters.
//                Everything after Await is places in an event queue.

function walkedDog() {

  return new Promise((resolve, reject) => {



    setTimeout(() => {

      const walkedoutdog = true;

      if (walkedoutdog) {
        resolve("You walked the dog");
      }
      else {
        reject("You did not out the dog")
      }
    }, 2000)

  })


}
function cleanKitchen() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const cleanedkitchen = false;

      if (cleanedkitchen) {
        resolve("You clean the kitchen");
      }
      else {
        reject("You did not cleabed the kitchen")
      }
    }, 3000)

  })


}
function takeoutTrash() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const takethetrash = true;

      if (takethetrash) {
        resolve("You take out the trash");
      }
      else {
        reject("You did not take out the trash")
      }
    }, 5000)

  })

}


// Promise
/* walkedDog().then(value => { console.log(value); return cleanKitchen() })
           .then(value => { console.log(value); return takeoutTrash() })
           .then(value => { console.log(value); console.log("Task Completed") }); */


// Async

async function doChores(){

  try{
    const walkedDogResult = await walkedDog();
  console.log(walkedDogResult);

  const youcleankitchen = await cleanKitchen();
  console.log(youcleankitchen);

  const youtakeouthetrash = await takeoutTrash();
  console.log(youtakeouthetrash);

  console.log( " All Done");

  }
  catch(error){
    console.error(error);

  }
  

}

doChores();