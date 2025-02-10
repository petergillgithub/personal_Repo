/* 
 Object =     A collection of related properties and/or methods can represent real world objects (people,products,places)
 
 object = {key:value,
          function()}

*/

const person1 = {
  firstName: 'Peter',
  lastName: 'Gill',
  age: 32,
  employed: true,
  sayHello:function(){console.log("Hi I am Peter, How are you")},
  eat: function(){
    console.log("I am eating pizza")
  }

}

const person2 = {
  firstName: 'john',
  lastName: 'Gill',
  age: 34,
  employed: false,
  sayHello: () => console.log("Hi am John What are you doing today !"), // Arrow Function
  eat: () => console.log("I am eating noodles")
  
}

person1.sayHello();
person2.sayHello();
person1.eat();
person2.eat()

