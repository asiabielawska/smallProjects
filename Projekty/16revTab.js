// 1. Napisz funkcje revTab ktora odwraca tablice
// Przyklad: revTab([1, 2, 3]) -> [3, 2, 1], revTab(['a', 'b', 'c']) -> ['c', 'b', 'a']

const tab1 = [1, 2, 3]
function revTab (tablica) {
    return tablica.reverse()
}
const x = revTab (tab1)
console.log(x)


// const tab2 = ["a", "b", "c"]
// function revTab (tablica) {
//     const tab3 = []
//     for (let s = tablica.length-1; s >= 0; s--){
//         tab3.push(tablica[s])
//     }
//     return tab3
// }
// const y = revTab (tab2)
// console.log(y)