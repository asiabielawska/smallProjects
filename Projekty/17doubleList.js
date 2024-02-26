// 2. Napisz funkcje doubleList, ktora przyjmuje liczbe N jako argument i zwraca N kolejnych liczb podzielnych przez 2
// Przyklad: doubleList(2) -> [0, 2], doubleList(5) -> [0, 2, 4, 6, 8]

function doubleList (n) {
    const tab4 = []
    for (let s = 0; n > 0; s++) {
        if (s%2 === 0){
            tab4.push(s)
            n--
        }
    }
    return tab4
}
const z = doubleList(5)
console.log(z)


// function doubleList1(n) {
//     const tab4 = []
//     for (let s = 0; s < n; s++) {
//         tab4.push(s*2)   
//     }
//     return tab4
// }

// function doubleList2(n) {
//     const tab4 = []
//     let lastN = 0
//     for (let s = 0; s < n; s++) {
//         tab4.push(lastN)
//         lastN += 2   
//     }
//     return tab4
// }
