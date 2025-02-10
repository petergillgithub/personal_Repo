// super = keyword is used in classes to call the constructor or access the properties and menthods of a parent(superclass)
//         this = this object
//         super = the parent


class Animal {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(speed){
    console.log(`${this.name} moves at a speed of ${speed}mph`);
  }

}
class Rabbit extends Animal {

  constructor(name, age, runSpeed) {
    super(name, age)
    this.runSpeed = runSpeed;

  }

  run(){
    console.log(`My name is ${this.name} and my age is ${this.age}`);
    super.move(this.runSpeed);
  }

}

class Fish extends Animal {

  constructor(name, age, swimSpeed) {
    super(name, age)
    this.swimSpeed = swimSpeed;
  }

  swim(){
    console.log(`My name is ${this.name} and my age is ${this.age}`);
    super.move(this.swimSpeed);
  }

}

class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age)
    this.flySpeed = flySpeed;
    

  }

  flying(){
    console.log(`My name is ${this.name} and my age is ${this.age}`);
    super.move(this.flySpeed);
  }

}


const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);


rabbit.run();
fish.swim();
hawk.flying();