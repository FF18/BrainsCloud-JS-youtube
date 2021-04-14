// // создание класса по старому ES5
// const Animal = function(options) { //Animal - это клас 
//     this.name = options.name // options - это объект 
//     this.color = options.color // name, color - поля

//     // this.voice = function() {
//     //     console.log('Base voice from ', this.name)
//     // }
// }

// // создаем методы через прототипы 
// Animal.prototype.voice = function() {
//     console.log('Base voice from ', this.name)
// }

// // console.log(Animal.prototype)
// // создаем экземпляр класса Animal - создаем объект, а поля создаем через конструктор
// const dog = new Animal({name: 'Rex', color: '#fff'})
// // const dog = {name: 'Rex', color: '#fff'}

// // dog.voice() // мыполучили новый метод voice() у нашего объекта dog класса Animal

// const Cat = function(options) {
//     Animal.apply(this, arguments)
//     this.hasTail = options.hasTail
//     this.type = 'cat'
// }

// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.constructor = Cat

// Animal.prototype.voice = function() {
//     console.log('This sound goes from ', this.name)
// }

// Cat.prototype.voice = function() {
//     Animal.prototype.voice.apply(this, arguments)
//     console.log(this.name + ' says myau')
// }

// const cat = new Cat({name: 'Murzik', color: '#000', hasTail: true})
// console.log(cat)

