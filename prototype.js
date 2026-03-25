function Person(name) {
    this.name = name
}


Person.prototype.sayHello = () => {
    console.log('Hello!')
}

Person.prototype.name = "yjl"
const obj = {}
Object.setPrototypeOf(obj, Person.prototype)
console.log(Object.getPrototypeOf(obj))
console.log(Person.prototype)


const obj2 = Object.create(Person.prototype,
    //给obj2添加的属性
    {
        age: {
            value: 1,      // 属性值
            writable: true,      // 可修改
            enumerable: true,    // 可枚举（for...in）
            configurable: true   // 可删除/重定义
        },

    })

console.log(obj2.age)

console.log(Object.getPrototypeOf(obj2))


















