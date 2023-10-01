class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name} está falando!`);
  }
}

class User extends Person {
  email;
  password;

  constructor(name, age, email, password) {
    super(name, age); // tem que ser a primeira coisa a ser chamada
    this.email = email;
    this.password = password;
  }

  speak() {
    // console.log(`A usuária ${this.name} está falando!`); //essa função sobrescreve a função do pai
    super.speak(); // chama primeiro o método da classe pai e depois continua rodando.
    console.log("Essa pessoa é uma usuária.");
  }
}

const user1 = new User("Verônica", 43, "veronica@gmail.com", 12345);
user1.speak();
console.log(user1);

console.log(user1 instanceof User);
console.log(user1 instanceof Person);
