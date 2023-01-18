class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, my name is " + this.name);
  }
}

const petras = new Person("Petras", 18);
const joana = new Person("Joana", 23);

class Admin extends Person {
  constructor(name, age, email) {
    super(name, age);
    console.log("admin", this.name);
    this.email = email;
  }
  greet() {
    console.log("Sir, my name is " + this.name);
  }

  giveContacts() {
    console.log("Here is my email: " + this.email);
  }
}

const jonasAdmin = new Admin("Jonas", 32, "jonas@company.com");
jonasAdmin.greet();
jonasAdmin.giveContacts();
