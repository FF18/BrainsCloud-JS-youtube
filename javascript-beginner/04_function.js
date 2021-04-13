// 1 Function
// Function Declaration
// function greet(name) {
//     console.log('Privet - ', name);
// }

// Function Expression
// const greet2 = function greet2(name) {
//     console.log('Privet 2 - ', name);
// };

// greet('Lena');
// greet2('Lena');

// console.log(typeof greet);
// console.dir(greet);

// 2 Anonymous functions
// let counter =0;

// const interval = setInterval(function() {
//     if(counter === 5) {
//         clearInterval(interval);
//     } else {
//         console.log(++counter);
//     }
// }, 1000);

// 3 Стрелочные функции
function greet(name) {
    console.log('Privet - ', name);
}

const arrow = (name, age) => {
    console.log('Privet - ', name, age);
};

arrow('Vladilen');

const arrow2 = name => console.log('Privet - ', name);

arrow2('Vladilen2');

const pow2 = num => num ** 2;

console.log(pow2(5));

// 4 Параметры по умолчанию
// const sum = (a, b) => a + b;
// console.log(sum(41, 1));

const sum = (a = 40, b = a * 2) => a + b;
console.log(sum(41, 1));
console.log(sum());

// function sumAll(...all) {
//     console.log(all);
// }

function sumAll(...all) {
   let result = 0;
   for(let num of all) {
       result += num;
   }
   return result;
}

const res = sumAll(1, 2, 3, 4, 5);
console.log(res);

// 5 Замыкания 
function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Vladilen')
console.log(logWithLastName('Minin'))
console.log(logWithLastName('Kuznezov'))