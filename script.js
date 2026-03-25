function makeGreeter(greeting) {
    return function (name) {
        console.log(greeting + ', ' + name + '!')
    }
}

// 当 makeGreeter 执行完毕后 理论上他的作用域应该销毁
const sayHello = makeGreeter("Hello")
const sayHey = makeGreeter('Hey')

// 但是 sayHello 和 sayHey(闭包) 仍然能访问 "greeting"
sayHello('Alice')
sayHey('Bob')

// makeGreeter返回一个内部函数
// 内部函数记住了makeGreeter作用域的greeting
// sayHello,sayHey是被暴露的内部函数
// 它们形成了闭包，访问并保持了各自的greeting值


// 循环中的异步问题与闭包
for (var i = 0; i < 4; i++) {
    setTimeout(function () { console.log(i) }, 100) // 4 4 4 4 
}
// 定时器回调执行时 i已经是循环结束后的值


// 可以使用 立即执行函数(IIFE)Immediately Invoked Function Expression
// 为每次迭代创建新的作用域 将当前的i值作为参数"捕获"到新作用域
for (var i = 0; i < 4; i++) {
    ((index) => {                // 接收i 创建新作用域
        setTimeout(function () { // 定时器回调 闭包
            console.log(index)   // 访问捕获的index
        }, 1000)
    })(i)                        // 立即执行 传入当前的i
}

// 或直接使用let  let声明的变量具有块级作用域

// 注意事项 : 内存开销
// 引用的外部变量会一直保存在内存
// 直到闭包被垃圾回收

// 如果一个闭包占用内存过大 或者大量不再需要的闭包 就导致内存泄漏
// 内部函数持有了外部函数作用域的引用 导致外部函数变量即使在执行完之后也无法被释放


// 如何避免内存泄漏?? 确保不再需要的变量能够被垃圾回收机制识别为不可达

// 1. 手动解除引用
// function createLeakyClosure() {
//   let heavyData = new Array(1000000).fill('🚀'); // 占用大量内存
//   return function() {
//     console.log(heavyData.length);
//   };
// }

// let fn = createLeakyClosure();
// fn(); // 使用闭包

// // --- 关键一步 ---
// fn = null; // 切断引用，heavyData 现在可以被回收了


// 2.警惕DOM元素循环引用
// 3.使用块级作用域
// 4.慎用全局变量