/*  static = keyword that defines properties or methods that belong to a class itself rather than the objects created from that claass (class owns anything static, not the objects)
*/


class User {

  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }

  static getUserCount() {
    console.log(`There are ${User.userCount} user online`);
  }

  sayHello() {
    console.log(`Hello, My name is ${this.username}`);
  }

}


const user1 = new User("Spongebob")
const user2 = new User("Peter")
const user3 = new User("John")

user1.sayHello(); user2.sayHello(); user3.sayHello();
User.getUserCount()
