export class Passenger {
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
		driver.runDrive(amount);
	}
}