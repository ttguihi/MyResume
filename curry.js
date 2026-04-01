const fn = (x, y, z) => x + y + z

function curry(fn, ...args) {
    return fn.length <= args.length
        ? fn(...args)
        : (...afterArgs) => curry(fn, ...args, ...afterArgs)
}

const add = curry(fn)

console.log(add(1)(2, 4))

