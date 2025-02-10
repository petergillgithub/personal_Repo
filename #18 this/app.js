/*  this      =   reference to the object where this is used (the object depends on the immediate context)


person.name = this.name
*/


const person1 = {
  name: "Joel",
  favFood: "banana",
  age: 1,
  sayHello: function(){
    console.log(`Hi my name is ${this.name} and my age is ${this.age} year old`)},
  eat: function(){
    console.log(`pizza is favourate dish of ${this.name}!`);
  }
    
  }


  const person2 = {
    name: "Peter",
    favFood: "Apple",
    age: 31,
    sayHello: function(){
      console.log(`Hi my name is ${person2.name} and my age is ${person2.age} year old`)},
    eat: function(){
      console.log(`maggi is favourate dish of ${person2.name}!`);
    }
      
    }

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();