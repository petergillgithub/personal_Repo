// nestedd objects = Objects inside off other Objects.
//                   Allows you to represent more complex data structures.
//                  Child object is enclosed by a Parent Object
//                  Person{Address{},ContactInfo{}}
//                  Shopping{keyBoard{},Mouse{},Monitor{}}

/* 
// function detailsPerson(fullName,age,location){
//   console.log(`My full Name is: ${fullName}`);
//   console.log(`MY age is${age}`);
//   console.log(`My Location is: ${location,country,state,city}`);
// }

// const person = {
//   fullName: "Peter Gill",
//   age: "30",
//   hobbies: ['playing Games','Cricket','Chess'],
//   location: {
//     country: "India",
//     state: "Punjab",
//     city: "Amritsar"
//   }
// }

// for(const property in person.location){
//   console.log(person.location[property]);
// }

// detailsPerson(person[1])

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.hobbies[2]);
// console.log(person.location.city); 
*/

class Person {
  constructor(name,age,...address){
    this.name = name;
    this.age = age;
    this.address = new Address(...address);

  }
}


class Address{
  constructor(street,city,country,){
    this.street = street;
    this.city = city;
    this.country = country;

  }
}

const person1 = new Person("Peter",30,"1911 Dashmesh    Nagar,Amritsar")
const person2 = new Person("John",35,"1911 Dashmesh    Nagar,Amritsar")
const person3 = new Person("Lukus",38,"1911 Dashmesh    Nagar","Amritsar","India")

console.log(person2.address);