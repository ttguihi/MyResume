function myInstanceof(obj, Constructor) {
    if (obj === null || typeof obj !== 'object') return false
    let proto = Object.getPrototypeOf(obj)
    while (proto) {
        if (proto === Constructor.prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
    return false
}

function myNew(Constructor, ...args) {
    const obj = Object.create(Constructor.prototype)

    const res = Constructor.apply(obj, args)


    return myInstanceof(res, Object) ? res : obj
}



function Person(name) {
    this.name = name
}

Person.prototype.sayHello = function () {
    console.log(this.name)
}
const person = myNew(Person, "Yangjiale")


console.log(person)


console.log(myInstanceof(person, Person))

person.sayHello()
