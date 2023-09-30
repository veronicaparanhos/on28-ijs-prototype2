class FullName {
  firstName;
  lastName;
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Animal {
  type;
  name;
  age;
  constructor(type, name, age) {
    if (name instanceof FullName) {
      this.type = type;
      this.name = name;
      this.age = age;
    } else {
      console.log("Nome precisa ser instância de FullName");
      return;
    }
  }

  eat() {
    console.log("O animal está comendo!");
  }
}

const fullName1 = new FullName("Zion", "Henrique");

const animal1 = new Animal("gato", "Zion", 5);
console.log(animal1);
