// Створення масиву з різними типами даних
const arr1 = ["test", undefined, 11245];
// Створення пустого масиву з 100 елементів
const arr2 = new Array(100);

// Виведення елементів масиву за індексами
console.log(arr1[1]); // undefined
console.log(arr1[0]); // 'test'
console.log(arr1[2]); // 11245

// Цикл for...of для ітерації по масиву
for (const i of arr2) {
}

// Створення пустого об'єкта двома способами
const stu = {}; // літеральний синтаксис
const stuArr = []; // пустий масив

// Перевірка типів даних
console.log(typeof stuArr); // 'object' - масив є об'єктом
console.log(typeof stu); // 'object'

// Приклад об'єкта з різними типами ключів (закоментований)
// const student = {
//     "1": 'Safonov',              // числовий ключ як рядок
//     'Last Name': 'Pavlo',        // ключ з пробілом
//     'major course': 'test automation'
// }

// Базова функція для роботи з this
function sayHi() {
  return this.firstName; // this вказує на контекст виклику
}

// Виведення глобального об'єкта та додавання властивості
console.log(this);
this.myName = "Pavlo";

console.log(sayHi());

// Створення складного об'єкта student з різними типами властивостей та методів
const student = {
  // Базові властивості
  lastName: "Safonov",
  firstName: "Pavlo",
  course: "test automation",
  age: 35,
  id: "asfasf1212451",
  isActive: true,

  // Масив як властивість
  addresses: ["Kyiv Tarasa Shevchenko st, 36", "Odessa Lesi Ukrainky st, 59"],

  // Вкладений об'єкт
  parents: {
    mother: {
      firstName: "Tatyana",
      lastName: "Safonova",
    },
    father: {
      firstName: "Vitaliy",
      lastName: "Safonov",
    },
  },

  // Різні способи визначення методів
  sayHi: sayHi, // Посилання на зовнішню функцію
  sayLoudHi() {
    // Метод, визначений через скорочений синтаксис
    console.log(`MY NAME IS ${this.firstName.toUpperCase()}`);
  },
  sayBye() {
    // Метод з використанням інших методів об'єкта
    this.sayLoudHi();
    console.log(
      `Bye everyone! I"m going to my mother, her name is ${this.parents.mother.firstName}`
    );
  },
  sayAnything: function (phrase) {
    // Метод, визначений через function expression
    console.log(phrase);
  },
  walk: () => {
    // Стрілкова функція - this не буде прив'язаний до об'єкта
    console.log(this);
  },
  walk1: function () {
    // Звичайна функція - this прив'язаний до об'єкта
    console.log(this);
  },
};

// Демонстрація різниці між звичайною та стрілковою функціями
student.walk();
student.walk1();

// Конструктор для створення об'єктів студентів
function Student(lastName, firstName, course, age) {
  // Ініціалізація властивостей
  this.lastName = lastName;
  this.firstName = firstName;
  this.course = course;
  this.age = age;

  // Додавання методів
  this.sayHi = sayHi;
  this.sayLoudHi = function () {
    console.log(`MY NAME IS ${this.firstName.toUpperCase()}`);
  };
  this.sayBye = function () {
    this.sayLoudHi();
    console.log(
      `Bye everyone! I"m going to my mother, her name is ${this.parents.mother.firstName}`
    );
  };
  this.sayAnything = function (phrase) {
    console.log(phrase);
  };
}

// Спроба створення конструктора через стрілкову функцію (не рекомендовано)
const Stud = (lastName, firstName, course, age) => {
  this.lastName = lastName;
  this.firstName = firstName;
  this.course = course;
  this.age = age;
  this.sayHi = sayHi;
  this.sayLoudHi = function () {
    console.log(`MY NAME IS ${this.firstName.toUpperCase()}`);
  };
  this.sayBye = function () {
    this.sayLoudHi();
    console.log(
      `Bye everyone! I"m going to my mother, her name is ${this.parents.mother.firstName}`
    );
  };
  this.sayAnything = function (phrase) {
    console.log(phrase);
  };
};

// Створення екземпляра через стрілкову функцію-конструктор (не працюватиме коректно)
const stud0 = new Stud("afasfa", "Oles", "qa", 23);
stud0.sayLoudHi();

// Створення кількох екземплярів через правильний конструктор
const student1 = new Student("Bandura", "Oles", "qa", 23);
const student2 = new Student("Krek", "Pek", "qa", 23);
const student3 = new Student("1215", "Oles", "qa", 23);
const student4 = new Student("Banduasfasra", "sdgsdg", "qa1", 23);
const student5 = new Student("Banduvxzvzxvra", "dcfvhdfh", "qa2", 23);

// Виклик методів на різних екземплярах
console.log(student1.sayHi());
student1.sayLoudHi();
student5.sayLoudHi();

// Виклик методів на оригінальному об'єкті
student.sayLoudHi();
student.sayBye();

// Динамічне додавання методу до об'єкта
student.sayILoveTestAutomation = function () {
  console.log("ILoveTestAutomation");
};

// Виклик різних методів
student.sayAnything("hello my dear friends!!!!");
student.sayHi();
student.sayILoveTestAutomation();

// Приклад порожньої функції та її виклику
const func = function () {};
console.log(func());
console.log(student.sayHi());

// Доступ до вкладених властивостей
console.log(student.addresses[1]);
console.log(student.parents.father.firstName);

// CRUD операції з властивостями об'єкта

// READ - отримання значення за ключем
console.log(student.lastName);
console.log(student.firstName);
console.log(student.course);

// Альтернативний синтаксис доступу до властивостей
console.log(student["1"]);
console.log(student["Last Name"]);
console.log(student["major course"]);

// CREATE - присвоєння нової властивості
student.gender = "male";
student["when last time visit lecture"] = new Date().getDay(-1);

console.log(student.gender);
console.log(student["when last time visit lecture"]);

// DELETE - видалення властивостей (закоментовано)
// delete student.age;
console.log(student);

// UPDATE - оновлення властивостей
student.age = 36;
console.log(student);
