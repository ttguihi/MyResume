Promise.myAll = (promises) => {
    return new Promise((resolve, reject) => {
        const res = []
        let finished = 0
        const arr = Array.from(promises)
        if (arr.length === 0) resolve([])
        arr.forEach((item, index) => {
            Promise.resolve(item).then(value => {
                res[index] = value
                finished++
                if (finished === arr.length) resolve(res)
            }, reject)
        });
    })
}

Promise.myRace = (promises) => {
    return new Promise((resolve, reject) => {
        for (const promise of promises) {
            Promise.resolve(promise).then(resolve, reject)
        }
    })
}