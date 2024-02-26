// function leapYear (n) {
//     if (n%4 === 0 && n%100 !== 0) {
//         alert ("true")
//     } else if (n%400 === 0) {
//         alert ("true")
//     } else {
//         alert ("false")
//     }
// }

// leapYear (+prompt())

function leapYear (n) {
    return (n%4 === 0 && n%100 !== 0) || n%400 === 0  
}
let y = leapYear(+prompt())
console.log (y)