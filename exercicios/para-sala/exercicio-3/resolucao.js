class Driver {
	name;
	age;
	numberOfRides = 0;
	amountEarned = 0;

  static drivers = [];

	constructor(name, age) {
		if (age < 18) {
			return new Error(
				'É necessário ter mais de 18 anos para ser um motorista'
			);
		}
		this.name = name;
		this.age = age;
    this.constructor.drivers.push({ name: name, age: age });
	}

	runDrive(amount) {
		this.amountEarned += amount;
		this.numberOfRides++;
	}

  static numberOfDrivers(drivers) {
		console.log(`O total de motoristas cadastradas é: ${drivers.length}`);
	}

	static ageAverage(drivers) {
		const totalOfDrivers = drivers.length;

    if(totalOfDrivers === 0) return;

		const ageSum = drivers.reduce((total, next) => total + next.age, 0);
		const ageAverage = (ageSum / totalOfDrivers).toFixed(2);
		console.log(`A média de idade das motoristas é de: ${ageAverage}`);
	}
}

class Passenger {
	name;
	age;
	password;
	amountSpent = 0;

  static passengers = [];

	constructor(name, age, password) {
		this.name = name;
		this.age = age;
		this.password = password;
    this.constructor.passengers.push({ name: name, age: age });
	}

	requestDrive(driver, amount, password) {
		if (!(driver instanceof Driver)) {
			console.log('Motorista inválido!');
			return;
		}
		if (password !== this.password) {
			console.log(`${this.name}, sua senha está incorreta!`);
			return;
		}
		this.amountSpent -= amount;
		driver.runDrive(amount);
	}

  static numberOfPassengers() {
		console.log(`O total de passageiras cadastradas é: ${this.passengers.length}`);
	}

	static ageAverage() {
		const totalOfPassengers = this.passengers.length;

    if(totalOfPassengers === 0) return;

		const ageSum = this.passengers.reduce((total, next) => total + next.age, 0);
		const ageAverage = (ageSum / totalOfPassengers).toFixed(2);
		console.log(`A média de idade das passageiras é de: ${ageAverage}`);
	}
}
