function CarObsolete(engineVolume, color, productionYear) {
  this.engineVolume = engineVolume;
  this.color = color;
  this.productionYear = productionYear;

  this.drive = function () {
    console.log("Driving....");
  };

  this.break = function () {
    console.log("break....");
  };

  this.startEngine = function () {
    console.log(`Start engine ${this.engineVolume}...`);
  };

  this.slowBreak = function () {
    console.log("slowly stopping car...");
  };
}

const car = new CarObsolete("2000 cm3", "black", 1990);
const car2 = new CarObsolete("4500 cm3", "white", 2023);
const car3 = new CarObsolete("2300 cm3", "orange", 2019);

car.startEngine();
car.drive();
car.slowBreak();

// синтаксичний цукор

class Car {
  constructor(engineVolume: string, color: string, productionYear: number) {
    this.engineVolume = engineVolume;
    this.color = color;
    this.productionYear = productionYear;
  }

  engineVolume: string;
  color: string;
  productionYear: number;
  numberOfWheels: number = 4;

  drive() {
    console.log("Driving....");
  }

  break() {
    console.log("break....");
  }

  startEngine() {
    console.log(`Start engine ${this.engineVolume}...`);
  }

  slowBreak() {
    console.log("slowly stopping car...");
  }
}

const car4 = new Car("1200 cm3", "green", 2000);

console.log(car4.numberOfWheels);
car4.drive();
car4.break();
car4.drive();
car4.slowBreak();
