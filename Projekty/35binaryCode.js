// const binaryCode = (n) => {
//     let binary = []
//     while (n > 0){
//         if (n%2 === 0){
//             binary.push(0)
//             n = n/2
//         } else {
//             binary.push(1)
//             n = (n-1)/2
//         }
//     }
//     let numberOne = binary.filter(x => x === 1)
//     return numberOne.length
// }
// console.log(binaryCode(21))


// const binaryCode = (n) => {
//     if (n === 1) {
//         return '1'
//     } else if (n === 0){
//         return '0'
//     }
//     return n%2 === 0? binaryCode(n/2) + String(n%2) : binaryCode((n-1)/2) + String(n%2)
// };
// console.log(binaryCode(1234))

/////////////////////////wersja z dodawaniem 1////////////////////////////////

// const binaryCode = (n) => {
//     if (n === 1) {
//         return 1
//     } else if (n === 0){
//         return 0
//     }
//     return n%2 === 0? binaryCode(n/2) + n%2 : binaryCode((n-1)/2) + n%2
// };
// console.log(binaryCode(1234))

const binaryCode = (n) => {
    let counter = 0
    while (n > 0){
        if (n%2 === 1){
            n--
            counter++
        }
        n = n/2 
    }
    return counter
}
console.log(binaryCode(21))