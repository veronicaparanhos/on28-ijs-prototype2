class Animal {
  type;
  name;
  age;
  hungry;

  static animals = []; // não pode ser acessado pela instância do objeto

  constructor(type, name, age, hungry) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.hungry = hungry;
    this.constructor.animals.push({ name, type, hungry }); // para acessar dentro do construtor tenho que chamar assim
    // Animal.animals.push(name); também pode ser usado dessa maneira.
  }

  eat(value) {
    console.log(`O animal ${this.name} está comendo`);
    this.hungry -= value;

    const indexFounded = Animal.animals.findIndex(
      (animal) => animal.name === this.name
    );

    if (indexFounded === -1) {
      console.log("Animal não enconstrado");
      return;
    }

    Animal.animals[indexFounded].hungry = this.hungry;
  }

  static nextToEat() {
    const sortedAnimals = Animal.animals.sort((a, b) => b.hungry - a.hungry);
    console.log(
      `O próximo animal que precisa comer é ${sortedAnimals[0].name}`
    );
  }
}

const animal1 = new Animal("gato", "Zion", 5, 50);
const animal2 = new Animal("gato", "Cleo", 3, 100);
const animal3 = new Animal("cachorro", "Nick", 2, 40);

animal1.eat(10);
animal2.eat(80);
animal3.eat(15);

// console.log(animal1); //para acessar atributos estáticos eu coloco o nome da classe antes
// console.log(animal2);
// console.log(animal3);
console.log(Animal.animals);
Animal.nextToEat();
