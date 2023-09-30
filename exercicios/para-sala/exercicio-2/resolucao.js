class Driver {
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

	getDrive(amount) {
		this.amountEarned += amount;
		this.numberOfRides++;
	}
}

class Passenger {
	name;
	age;
	password;
	amountSpent = 0;

	constructor(name, age, password) {
		this.name = name;
		this.age = age;
		this.password = password;
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
		driver.getDrive(amount);
	}
}
