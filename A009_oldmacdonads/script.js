"use strict";
/*
      Aufgabe: <Aufgabe 9 Oldmacdonalds>
      Name: <Alexander Holstein>
      Matrikel: <271466>
      Datum: <23.05.23>
      Quellen: Inverted classroom, Lektionsarbeit,
      */
var oldmacdonalds;
(function (oldmacdonalds) {
    // Definiere die Tierklasse
    class Animal {
        name;
        type;
        food;
        foodAmount;
        sound;
        constructor(name, type, food, foodAmount, sound) {
            this.name = name;
            this.type = type;
            this.food = food;
            this.foodAmount = foodAmount;
            this.sound = sound;
        }
        sing() {
            console.log(`Old MacDonald had a farm, E-I-E-I-O.`);
            console.log(`And on that farm he had a ${this.type}, E-I-E-I-O.`);
            console.log(`With a ${this.sound} ${this.sound} here, and a ${this.sound} ${this.sound} there,`);
            console.log(`Here a ${this.sound}, there a ${this.sound}, everywhere a ${this.sound} ${this.sound}.`);
            console.log(`Old MacDonald had a farm, E-I-E-I-O.`);
        }
        eat(foodAmount) {
            if (this.foodAmount >= foodAmount) {
                this.foodAmount -= foodAmount;
                console.log(`${this.name} ate ${foodAmount} units of ${this.food}. ${this.foodAmount} units left.`);
            }
            else {
                console.log(`Not enough ${this.food} for ${this.name}.`);
            }
        }
    }
    // Definiere die Farmklasse
    class Farm {
        animals;
        constructor() {
            this.animals = [];
        }
        addAnimal(animal) {
            this.animals.push(animal);
        }
        simulateDay() {
            for (const animal of this.animals) {
                console.log(`\n${animal.name}'s turn:`);
                animal.sing();
                animal.eat(1);
            }
        }
    }
    // Erstelle die Tiere
    const cow = new Animal('Betsy', 'Cow', 'Grass', 5, 'Moo');
    const chicken = new Animal('Clucky', 'Chicken', 'Grains', 3, 'Gack');
    const dog = new Animal('Spot', 'Dog', 'Meat', 2, 'Woof');
    const horse = new Animal('Dobbin', 'Horse', 'Grass', 4, 'Neigh');
    const pig = new Animal('Porky', 'Pig', 'Junk', 1, 'Oink');
    const donkey = new Animal('Donnie', 'Donkey', 'Grains', 3, 'Hee-haw');
    // Erstelle die Farm
    const farm = new Farm();
    farm.addAnimal(cow);
    farm.addAnimal(chicken);
    farm.addAnimal(dog);
    farm.addAnimal(horse);
    farm.addAnimal(pig);
    farm.addAnimal(donkey);
    // Simuliere einen Tag auf der Farm
    farm.simulateDay();
})(oldmacdonalds || (oldmacdonalds = {}));
//# sourceMappingURL=script.js.map