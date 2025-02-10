// synchronous = Executes line by line consecutively in a sequently manner Code that waits for an operation to complete..

// asynchronnous = Allows multiple operations to be performed concurrently without waiting does not block the execution flow and allows the problem to continue (I/O operations,network requests,fetching data) Handled with: Callback,Promises, Async/Await.


setTimeout(() => console.log("Task 1"),3000);

console.log("task 2");
console.log("task 3");
console.log("task 4");