// const name = 'Vladilen';
// const age = 26;

// function getAge() {
//     return age;
// }

// const output = ('My name is ' + name + ' and my age is ' + age + ' years old');
// const output = `My name is ${name} and my age is ${getAge()} years old`;
// const output = `My name is ${name} and my age is ${age < 30 ? 'A' : 'B'} years old`;
// const output = `
//     <div>This is div</div>
//     <p>This is p</p>
// `;

// console.log(output);

// const name = 'Vladilen';
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.charAt(2));
// console.log(name.indexOf('len'));
// console.log(name.toLowerCase().startsWith('vlad'));
// console.log(name.startsWith('Vlad'));
// console.log(name.endsWith('en'));
// console.log(name.repeat(3));
// const string = '    password      ';
// console.log(string);
// console.log(string.trim());
// console.log(string.trimLeft());
// console.log(string.trimRight());

function logPerson(s, name, age) {
    // console.log(s, name, age);
    if(age < 0) {
        age = 'Not was born yet';
    }
    // return 'Info about Person';
    return `${s[0]}${s[1]}${age}${s[2]}`;
}

const personName = 'Vladilen';
const personName2 = 'Maksim';
const personAge = 26;
const personAge2 = -10;

const output = logPerson`Name: ${personName}, Age: ${personAge}`;
const output2 = logPerson`Name: ${personName2}, Age: ${personAge2}`;

console.log(output);
console.log(output2);