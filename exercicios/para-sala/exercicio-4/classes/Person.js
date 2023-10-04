export class Person {
  name;
  age;
  #amount = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get amount() {
    return this.#amount;
  }

  set amount(newAmount) {
    this.#amount = newAmount;
  }
}
