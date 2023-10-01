export class Driver {
  name;
  age;
  numberOfRides = 0;
  amountEarned = 0;

  static drivers = [];

  constructor(name, age) {
    if (age < 18) {
      return new Error(
        "É necessário ter mais de 18 anos para ser um motorista"
      );
    }
    this.name = name;
    this.age = age;
    this.constructor.drivers.push({ name, age });
  }

  runDrive(amount) {
    this.amountEarned += amount;
    this.numberOfRides++;
  }

  static numberOfDrivers() {
    console.log(
      `A quantidade de motorista cadastradas é ${Driver.drivers.length}`
    );
  }

  static ageAverage() {
    const totalOfDrivers = Driver.drivers.length;

    if (totalOfDrivers === 0) return;

    const sumOfAges = Driver.drivers.reduce(
      (total, driver) => total + driver.age,
      0
    );
    const ageAverage = (sumOfAges / totalOfDrivers).toFixed(2);
    console.log(`A média da idade das motorista é ${ageAverage}`);
  }
}
