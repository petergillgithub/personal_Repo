// Function = A section of reusable code. Declare code oncce , use it whenever you want call the function to execute that code.

/* function happybirthday(){
  console.log("Happy Birthday to you");
  console.log("Happy Birthday to you");
  console.log("Happy Birthday dear you");
  console.log("Happy Birthday to you");
}

happybirthday(); */

// Another Example

/* function happybirthday(username,age){
  console.log("Happy Birthday to you");
  console.log("Happy Birthday to you");
  console.log(`Happy Birthday dear ${username}`);
  console.log("Happy Birthday to you");
  console.log(`You are ${age} years old`);  

}

happybirthday('Peter',33); */

// Another Example with Return KeyWord

// function add(a,b){
//   let result = a + b;
//   return result;
// }
// let answer = add(2,3)
// console.log(answer);

//OR

// console.log(add(2,3));


// Another Example 

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

function multiple(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

console.log(multiple(2, 200));

// *******************************************************

function isevenNum(number) {

  return number % 2 === 0 ? true : false;
}

console.log(isevenNum(11));

// **************

function isValidemail(email) {

  if (email.includes("@")) {
    return true;
  }
  else {
    return false;
  }

  //  OR

  // return email.includes("@") ? true : false; // You can use this one code also 




}

console.log(isValidemail('petergill@gmail.com'));

          