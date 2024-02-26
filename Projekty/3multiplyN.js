function multiply (n) {
    let m = 1
    for (let i = 1; i <= n; i++){
        m = m*i
    }
        return m
}

const x = multiply (3)
console.log(x)
