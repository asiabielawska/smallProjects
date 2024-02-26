function multiply (n) {
    for (let y = 1; y <= n; y++) {
        for (let x = 1; x <= n; x++) {
            let z = x * y
            console.log(`${y} * ${x} = ${z}`)
        }
    }
}

multiply (4)