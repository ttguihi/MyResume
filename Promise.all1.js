Promise.myAll = function (promises) {
    return new Promise((resolve, rej) => {
        const res = []
        let finished = 0
        if (promises.length === 0) resolve([])
        promises.forEach((item, index) => {
            Promise.resolve(item).then(value => {
                res[index] = value
                finished++
                if (finished === promises.length) resolve(res)
            }, rej)
        });
    })
}

// langgraph -> 原因 
// 前端网络安全
// 极致的用户体验 
// AI agent
// 

const promise1 = new Promise((resolve, _) => {
    setTimeout(() => {
        console.log(1)
        resolve()
    }, 0)
})

const promise2 = new Promise((resolve, _) => {
    setTimeout(() => {
        console.log(2)
        resolve()
    }, 100)
})

const promises = [promise1, promise2]

Promise.myAll(promises)