import { Driver } from "./Driver.js";

export class Passenger {
  name;
  age;
  #password;
  #amountSpent = 0;

  static passengers = [];

  constructor(name, age, password) {
    this.name = name;
    this.age = age;
    this.#password = password;
    this.constructor.passengers.push({ name: name, age: age });
  }

  get amountSpent() {
    return this.#amountSpent;
  }

  set amountSpent(newAmountSpent) {
    this.#amountSpent = newAmountSpent;
  }

  requestDrive(driver, amount, password) {
    if (!(driver instanceof Driver)) {
      console.log("Motorista inválido!");
      return;
    }
    if (password !== this.#password) {
      console.log(`${this.name}, sua senha está incorreta!`);
      return;
    }
    this.#amountSpent -= amount;
    driver.runDrive(amount);
  }

  static numberOfPassengers() {
    console.log(
      `O total de passageiras cadastradas é: ${this.passengers.length}`
    );
  }

  static ageAverage() {
    const totalOfPassengers = this.passengers.length;

    if (totalOfPassengers === 0) return;

    const ageSum = this.passengers.reduce((total, next) => total + next.age, 0);
    const ageAverage = (ageSum / totalOfPassengers).toFixed(2);
    console.log(`A média de idade das passageiras é de: ${ageAverage}`);
  }

  changePassword(oldPassword, newPassword) {
    if (oldPassword === this.#password) {
      this.#password = newPassword;
      console.log("Senha alterada com sucesso!");
    } else {
      console.log("Senha incorreta! Tente novamente.");
    }
  }
}

// const passageira1 = new Passenger("Lais", 17, 1111);
// console.log(passageira1);

// passageira1.changePassword(1111, 2222);
// console.log(passageira1.password);
