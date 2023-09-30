export class Driver {
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
		Driver.drivers.push({ name, age });
		// this.constructor.drivers.push({ name, age }) // Podemos utilizar também dessa maneira
	}

	runDrive(amount) {
		this.amountEarned += amount;
		this.numberOfRides++;
	}

	static numberOfDrivers() {
		console.log(`A quantidade de motoristas cadastradas é ${Driver.drivers.length}.`)
	}
}