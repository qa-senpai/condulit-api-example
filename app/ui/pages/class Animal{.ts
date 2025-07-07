class Animal {
  color() {}
  walk() {}
  makeSound() {}
  sleep() {}
  legNumber;
  eyeColor;
  tailLength;
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark Bark Bark");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meaw Meaw Meaw");
  }
}

const cat = new Cat();
const dog = new Dog();

cat.makeSound();
dog.makeSound();
