Function.prototype.myCall = function (ctx, ...args) {
    ctx = (ctx === null || ctx === undefined) ? globalThis : Object(ctx)
    const fnKey = Symbol('fnKey')
    ctx[fnKey] = this
    const res = ctx[fnKey](...args)
    delete ctx[fnKey]
    return res
}

