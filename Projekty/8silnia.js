function factorial (n) { 
    let s = 1 
    for (let x = 1; x <= n ; x++) {
        s = s*x
    }
    return s
}

let p = prompt("Enter a number between 5 and 10 to calculate its factorial")

if (p<5) {
    alert ("too small")
} else if (p>10) {
    alert ("too big")
} else {
    let i = factorial (p)
    alert (`${p}! = ${i}`)
}