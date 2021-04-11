// 1 Переменные 
// camelCase
// const firstName = 'Vladilen';
// const age = 26; // number
// const isProgrammer = true; // boolean

// const ~ = 'private';
// const $ = 'some value';

// const if = 'mkef' // err
// const withNums5 = '5';
// const 5withNums = 5; // err

// 2 мутирование 
// console.log('Name man: ' + firstName + ', mane age: ' + age);
// alert(firstName + ' ' + lastName);

// const lastName = prompt('Input last name');
// alert(firstName + ' ' + lastName);

// 3 Операторы 
// const currentYear = 2020;
// const birthYear = 1993;

// const age = currentYear + birthYear;
// console.log(age);

// const a =10;
// const b =5;

// let c = 32;
// c = c + a;
// c += a;
// c -= a;
// c *= a;
// c /= a;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(currentYear++);
// console.log(++currentYear);
// console.log(--currentYear);
// console.log(c);

// 4 Типы данных
// const isProgrammer = true;
// const name = 'Vladilen';
// const age = 26;
// let x;
// console.log(typeof isProgrammer);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof x);
// console.log(typeof null); // bag JS
// console.log(null);

// 5 Приоритет операторов
// const fullAge = 26;
// const birthYear = 1993;
// const currentYear = 2020;

// > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge; // 27>=26-->true
// console.log(isFullAge);

// 6 условные операторы 
// const courseStatus = 'pending'; // ready, fail, pending

// if(courseStatus === 'ready') {
//     console.log('Course allmoust ready');
// } else if(courseStatus === 'pending') {
//     console.log('Course pending about developer');
// } else {
//     console.log('Not to use');
// }

// const isReady = true;

// // if(isReady === true) { // (не использовать)
// if(isReady) {
//     console.log('All right');
// } else {
//     console.log('Not right');
// }

//operator ternary 
// isReady ? console.log('All right') : console.log('Not right');

// const num1 = 42;
// const num2 = '42';
// console.log(num1 == num2); // == проверяет равны ли два выражения
// // вне зависимости от типа данных (лучше не использовать)
// console.log(num1 === num2); // === проверяет строгое равно
// // двух выражений, включая тип данных 

// 7 boolian logic
// mdn logical operators - search in Google
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators

// 8 Functions

// function calculateAge(year) {
//     return 2020 - year;
// }

// const myAge = calculateAge(1993);
// console.log(myAge);
// console.log(calculateAge(1993));
// console.log(calculateAge(1990));
// console.log(calculateAge(1999));

// function logInfoAbout(name, year) {
//     const age = calculateAge(year);

//     if(age > 0) {
//         console.log("My name " + name + ' and age ' + age);
//     } else {
//         console.log('This is a futery');
//     }
// }

// logInfoAbout('Vladlen', 1993);
// logInfoAbout('Elena', 1995);
// logInfoAbout('Elena', 2022);

//9 Arrays
// const cars = ['Mazda', 'Mersedes', 'Ford'];
// const cars = new Array('Mazda', 'Mersedes', 'Ford');
// console.log(cars);

// console.log(cars.length);
// console.log(cars[1]);
// console.log(cars[0]);
// console.log(cars[3]);

// cars[0] = 'Porshe';
// cars[3] = 'Mazda';
// console.log(cars);
// console.log(cars.length);

// 10 Loops
// const cars = ['Mazda', 'Mersedes', 'Ford', 'Porshe'];

// for(let i=0; i < cars.length; i++) {
    // console.log(i);
    // console.log(cars[i]);
//     const car = cars[i];
//     console.log(car);
// }

// for(let car of cars) {
//     console.log(car);
// }

// 11 Objects
const person = {
    firstName: 'Vladilen',
    lastName: 'Minin',
    year: 1993,
    languages: ['Ru', 'En', 'De'],
    hasWife: false,
    greet: function() {
        console.log('greet from person');
    }
};

console.log(person.firstName);                          
console.log(person['lastName']);
// const key = 'languages';
const key = 'year';
console.log(person[key]);
person.hasWife = true;
console.log(person);
person.isProgrammer = true;
console.log(person);
person.greet();                       
