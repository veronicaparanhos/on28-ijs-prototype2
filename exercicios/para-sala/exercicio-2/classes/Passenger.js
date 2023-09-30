export class Passenger {
	name;
	age;
	password;
	amountSpent = 0;

	static passengers = [];

	constructor(name, age, password) {
		this.name = name;
		this.age = age;
		this.password = password;
		Passenger.passengers.push({ name, age })
		// this.constructor.passengers.push({ name, age }) // Podemos utilizar também dessa maneira
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
		console.log(`A quantidade de passageiras cadastradas é ${Passenger.passengers.length}`)
	}
}