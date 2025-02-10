// constructor = special method for defining the 
//               properties and methods of objects.

function Car(make,model,year,color){
  this.make = make,
  this.model = model,
  this.year = year,
  this.color = color
  this.drive =  function(){console.log(`You Drive the ${make} !`);} // Method

}

const car1 = new Car('Ford','Mustang',2004,'Red');
const car2 = new Car('Honda','Honda City',2019,'Pearl White');
const car3 = new Car('BMW','M1',2024,'Yellow');


car1.drive();
car2.drive();
car3.drive();