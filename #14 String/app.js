//**********************  Concatenation (+ Operator) ******************************

/* let firstName = "John";
let lastName = "Gill";

let greeting = "Hello " + firstName + " " + lastName ;
console.log(greeting); */

// *****************************************************************************



// 2. Concatenation Assignment (+= Operator)
//This operator adds a string to an existing string.
 //Real-Time Use Case
//Building a dynamic content generator where strings are updated sequentially.

/* let message = "Thank you for visiting";
message += " our website";
message += " We hope to see you again";

console.log(message); */ // Output: "Thank you for visiting our website. We hope to see you again!"

                          //3. Template Literals (Backticks ``)
//Introduced in ES6, template literals allow embedding variables and expressions ///directly in strings using ${} 

/* let username = "Alice";
let location = "New York";
let currentTime = "5:30 Pm";

let message = `Hi ${username}. I hope you are doing well, just wondering the weather of ${location} at ${currentTime}`;

alert(message); */


//4. String Comparison Operators (===, !==, <, >)
/// Used to compare strings lexicographically (based on Unicode values).

//Example: //Real-Time Use Case
//Validating user inputs like passwords or usernames.

/* let storedPassword = "mySecurePassword";
let enteredPassword = "mysecurepassword";

if (storedPassword === enteredPassword) {
    console.log("Login successful!");
} else {
    console.log("Incorrect password. Please try again.");
}
// Output: "Incorrect password. Please try again." */




