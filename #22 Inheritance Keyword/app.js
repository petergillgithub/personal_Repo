// inheritance = allows a new class to inherit properties and methods from an existing class (parent -> child) helps with code reusability.



// ! Step 1: Create a Parent Class

class Animal {
  alive = true;

  eat(){
    console.log(`This ${this.name} is eating`);
  }
  sleep(){
    console.log(`Thi ${this.name} is sleeping`);
  }

}

//    Step 2: Create a Child Class
// The child class inherits from the parent class using the extends keyword.

class Rabbit extends Animal{
  name = "rabbit"

  run(){
    console.log(`This is ${this.name} is running`);
  }
}
class Fish extends Animal{
  name = "fish"

  swim(){
    console.log(`This ${this.name} is swiming`);
  }
}
class Hawk extends Animal{
  name = "hawk"
  fly(){
    console.log(`This is ${this.name} is Flying`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();



console.log(rabbit.alive);
rabbit.eat();
rabbit.run();
rabbit.sleep()
fish.eat();
fish.swim();
hawk.eat();
hawk.fly();
rabbit.sleep()

