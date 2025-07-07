const arr1 = ["test", undefined, 11245];
const arr2 = new Array(100);

console.log(arr1[1]);
console.log(arr1[0]);
console.log(arr1[2]);

//for( of );
for (const i of arr2) {
}

// for (in)

const formData = {
  text: "this is my input",
  // search: "this is my search",
  // password: "asffsaf",
  email: "psp@gm.lame",
  url: "https://testr.com",
  tel: "0982324942",
};

const ibj = {
  a: "1",
  b: "2",
  ab: "34",
};

const { a, b, ab } = ibj;
console.log(a);

const arrayFromObject = Object.entries(formData);

console.log(arrayFromObject);
const stu = {};
const stuArr = [];

console.log(typeof stuArr);
console.log(typeof stu);

// const student = {
//     "1": 'Safonov',
//     'Last Name': 'Pavlo',
//     'major course': 'test automation'
// }

// function sayHi(){
//         console.log('Hello, my name is ' + this.firstName)
// }

function sayHi() {
  return this.firstName;
}

console.log(this);
this.myName = "Pavlo";

console.log(sayHi());

const student = {
  lastName: "Safonov",
  firstName: "Pavlo",
  course: "test automation",
  age: 35,
  id: "asfasf1212451",
  isActive: true,
  addresses: ["Kyiv Tarasa Shevchenko st, 36", "Odessa Lesi Ukrainky st, 59"],
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
  sayHi: sayHi,
  sayLoudHi() {
    console.log(`MY NAME IS ${this.firstName.toUpperCase()}`);
  },
  sayBye() {
    this.sayLoudHi();
    console.log(
      `Bye everyone! I"m going to my mother, her name is ${this.parents.mother.firstName}`
    );
  },
  sayAnything: function (phrase) {
    console.log(phrase);
  },
  walk: () => {
    console.log(this);
  },
  walk1: function () {
    console.log(this);
  },
};

student.walk();
student.walk1();

function Student(lastName, firstName, course, age) {
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
}

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

const stud0 = new Stud("afasfa", "Oles", "qa", 23);
stud0.sayLoudHi();

const student1 = new Student("Bandura", "Oles", "qa", 23);
const student2 = new Student("Krek", "Pek", "qa", 23);
const student3 = new Student("1215", "Oles", "qa", 23);
const student4 = new Student("Banduasfasra", "sdgsdg", "qa1", 23);
const student5 = new Student("Banduvxzvzxvra", "dcfvhdfh", "qa2", 23);

console.log(student1.sayHi());

student1.sayLoudHi();
student5.sayLoudHi();

student.sayLoudHi();
student.sayBye();

student.sayILoveTestAutomation = function () {
  console.log("ILoveTestAutomation");
};

student.sayAnything("hello my dear friends!!!!");
student.sayHi();
student.sayILoveTestAutomation();

const func = function () {};

console.log(func());
console.log(student.sayHi());

console.log(student.addresses[1]);
console.log(student.parents.father.firstName);

// CRUD

// отримання значення за ключем
console.log(student.lastName);
console.log(student.firstName);
console.log(student.course);

console.log(student["1"]);
console.log(student["Last Name"]);
console.log(student["major course"]);

// присвоєння властивості
student.gender = "male";
student["when last time visit lecture"] = new Date().getDay(-1);

console.log(student.gender);
console.log(student["when last time visit lecture"]);

// видалення властивостей
// delete student.age;
console.log(student);

// оновлення властивостей
student.age = 36;
console.log(student);

// поведінка обʼєкта або метод обʼєкта
