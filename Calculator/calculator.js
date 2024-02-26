const result = document.querySelector ("#result")
const button1 = document.querySelector ("#one")
const button2 = document.querySelector ("#two")
const button3 = document.querySelector ("#three")
const button4 = document.querySelector ("#four")
const button5 = document.querySelector ("#five")
const button6 = document.querySelector ("#six")
const button7 = document.querySelector ("#seven")
const button8 = document.querySelector ("#eight")
const button9 = document.querySelector ("#nine")
const button0 = document.querySelector ("#zero")
const buttonaddition = document.querySelector ("#addition")
const buttonsubtraction = document.querySelector ("#subtraction")
const buttonmultiplication = document.querySelector ("#multiplication")
const buttondivision = document.querySelector ("#division")
const buttonequal = document.querySelector ("#equal")
const buttonclear = document.querySelector ("#clear")
let x
let y
let z
function test1 () {
    if (x === undefined) {
        x = 1
        result.innerHTML = x
    } else {
        z = 1
        result.innerHTML = z
    }
}
function test2 () {
    if (x === undefined) {
        x = 2
        result.innerHTML = x
    } else {
    z = 2
    result.innerHTML = z
    }
}
function test3 () {
    if (x === undefined) {
        x = 3
        result.innerHTML = x
    } else {
    z = 3
    result.innerHTML = z
    }
}
function test4 () {
    if (x === undefined) {
        x = 4
        result.innerHTML = x
    } else {
    z = 4
    result.innerHTML = z
    }
}
function test5 () {
    if (x === undefined) {
        x = 5
        result.innerHTML = x
    } else {
    z = 5
    result.innerHTML = z
    }
}
function test6 () {
    if (x === undefined) {
        x = 6
        result.innerHTML = x
    } else {
    z = 6
    result.innerHTML = z
    }
}
function test7 () {
    if (x === undefined) {
        x = 7
        result.innerHTML = x
    } else {
    z = 7
    result.innerHTML = z
    }
}
function test8 () {
    if (x === undefined) {
        x = 8
        result.innerHTML = x
    } else {
    z = 8
    result.innerHTML = z
    }
}
function test9 () {
    if (x === undefined) {
        x = 9
        result.innerHTML = x
    } else {
    z = 9
    result.innerHTML = z
    }
}
function test0 () {
    if (x === undefined) {
        x = 0
        result.innerHTML = x
    } else {
    z = 0
    result.innerHTML = z
    }
}
function addition () {
    if (x !== undefined) {
    y = "+"
    result.innerHTML = y
    }
}
function subtraction () {
    if (x !== undefined) {
    y = "-"
    result.innerHTML = y
    }
}
function multiplication () {
    if (x !== undefined) {
    y = "*"
    result.innerHTML = y
    }
}
function division () {
    if (x !== undefined) {
    y = "/"
    result.innerHTML = y
    }
}
function equal () {
    if (x !== undefined && z !== undefined) {
        let r
        if (y === "+") {
            r = x+z
        } else if (y === "-") {
            r = x-z
        } else if (y === "*") {
            r = x*z
        } else if (y === "/") {
            r = x/z
        }
        result.innerHTML = r.toFixed(3)
        x = r
    }
}
function clear () {
    result.innerHTML = ""
    x = undefined
}

button1.addEventListener ("click", test1)
button2.addEventListener ("click", test2)
button3.addEventListener ("click", test3)
button4.addEventListener ("click", test4)
button5.addEventListener ("click", test5)
button6.addEventListener ("click", test6)
button7.addEventListener ("click", test7)
button8.addEventListener ("click", test8)
button9.addEventListener ("click", test9)
button0.addEventListener ("click", test0)
buttonaddition.addEventListener ("click", addition)
buttonsubtraction.addEventListener ("click", subtraction)
buttonmultiplication.addEventListener ("click", multiplication)
buttondivision.addEventListener ("click", division)
buttonequal.addEventListener ("click", equal)
buttonclear.addEventListener ("click", clear)