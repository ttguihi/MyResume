// function Person(name) {

//     this.name = name
// }

// const person = new Person("YangJiale")
// console.log(person)

// Person.prototype.sayHello = function () {
//     console.log(`Hello!${this.name}`)
// }

// person.sayHello()

// console.log(Object.__proto__.prototype)
// console.log(Function.__proto__)
// console.log(Person.prototype.__proto__ === Object.prototype)



const obj = Object.create({ x: 1, y: 2 })

console.log(obj.x)