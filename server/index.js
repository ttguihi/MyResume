function Person(name) {

    this.name = name
}


function myNew(Constructor, ...args) {
    const obj = Object.create(Constructor.prototype)

    const res = Constructor.apply(obj, args)

    return res instanceof Object ? res : obj
}