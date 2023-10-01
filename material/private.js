class User {
  name;
  age;
  email;
  #password;

  constructor(name, age, email, password) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.#password = password;
  }

  speak() {
    console.log(`${this.name} está falando`);
  }

  #encryptPassword() {
    return (this.#password = `*** - ${this.#password} - ***`);
  }

  get password() {
    return this.#password; //não recebe parâmetro. só retorna
  }

  set password(newPassword) {
    this.#password = newPassword; // tem que receber apenas um parâmentro
  }
}

const user1 = new User("Verônica", 43, "veronicahp@gmail.com", 123456);
console.log(user1.password);
// console.log(user1.name);
// console.log(user1.age);
// console.log(user1.email);
// console.log(user1.password);
