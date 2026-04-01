function retry(fn, times) {
    return fn().catch(err => {
        if (times <= 0) throw err
        return retry(fn, times - 1)
    }
    )
}

function timeoutControl(fn, timeout) {
    const newPromsie = new Promise((_, rej) => {
        setTimeout(() => {
            rej()
        }, timeout)
    })

    return Promise.race([newPromsie, fn])
}


function retry_with_timeout(fn, times, timeout) {
    return retry(() => { timeoutControl(fn, timeout) }, times)
}