// // lesson 7 - array
// const cars = ['Mazda', 'Ford', 'BMV', 'Mersedes']

// console.log(cars)


// recursiya
function fac(num) {
    if(num < 0) return
    if(num === 1) return num
    return num * fac(num - 1)
}

console.log(fac(5))

// filter
const filterThis = [2, 3, 5, 1, 4, 9]

// some
const someOfThis = ['Java', 'JavaScript', 'Python']

// map
const mapMe = [1000, 800, 2400, 500]