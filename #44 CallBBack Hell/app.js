// Callback Hell = Situation in JavaScript where callbacks are nested within order callbacks to the degree where the code is difficult to read.
// Old pattern to handle asynchronous function.
// Use Promises + async/await to avoid callback hell.


function task1(callback){
  setTimeout(() =>{
    console.log("Task 1 Complete");
    callback();
  },2000)

}
function task2(callback){
  setTimeout(() =>{
    console.log("Task 2 Complete");
    callback();
  },3000)


}
function task3(callback){
  setTimeout(() =>{
    console.log("Task 3 Complete");
    callback();

  },1500)


}
function task4(callback){
  setTimeout(() =>{
    console.log("Task 4 Complete");
    callback();

  },4000)


}

// task1();
// task2();
// task3();
// task4();
// console.log("All Task Completed");

task1(() =>{
  task2(() =>{
    task3(() =>{
      task4(() => console.log("All task complete"))

    })
  })
})