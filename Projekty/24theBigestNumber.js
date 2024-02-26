const myArr = [23, 1, 5, 8, 19, 28, 2, 29]

const checkingTheBigestNumber = (tabWithNumbers) => {
    let checking = tabWithNumbers[0]
    for (let i = 1; i < tabWithNumbers.length; i++){
        if (tabWithNumbers[i] > checking){
            checking = tabWithNumbers[i]
        }
    }
    return checking
}

const x = checkingTheBigestNumber(myArr)
console.log(x)

// const tab1 = [1, 2, 3, 3, 0.5, 7, 8, 2, 1, 9]
// let u = tab1[0]
// for (let s = 0; s < tab1.length; s++){
//     if (u < tab1[s]) {
//         u = tab1[s]
//     }
// }
// console.log(u)