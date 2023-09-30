export class Driver {
	name;
	age;
	numberOfRides = 0;
	amountEarned = 0;

	constructor(name, age) {
		if (age < 18) {
			return new Error(
				'É necessário ter mais de 18 anos para ser um motorista'
			);
		}
		this.name = name;
		this.age = age;
	}

	runDrive(amount) {
		this.amountEarned += amount;
		this.numberOfRides++;
	}
}