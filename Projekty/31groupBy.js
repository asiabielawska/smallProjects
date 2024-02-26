// 5. Napisz funkcję groupBy, która:
//   1. Na wejściu dostaje dwie tablice liczb A oraz B
//   2. Na wyjściu zwraca 3 tablice liczb:
//     a) W pierwszej tablicy są liczby występujące TYLKO w tablicy A
//     b) W drugiej tablicy są liczby występujące TYLKO w tablicy B
//     c) W trzeciej tablicy są liczby występujące w OBU tablicach

//   Przykład:
//     groupBy([1,2,3,4,5], [4,5,6,7,8]) -> {
//       only1: [1,2,3],
//       only2`: [6,7,8],
//       shared: [4,5]
//     }

const groupBy = (arr1, arr2) => {
    const only1 = []
    const only2 = []
    const shared = []
    let maxLength = Math.max(arr1.length, arr2.length)
    for (let i = 0; i < maxLength ; i++){
        if(typeof arr1[i] !== 'undefined') {
            if (arr2.includes(arr1[i]) && !shared.includes(arr1[i])){
                shared.push(arr1[i])
            }
            if (!arr2.includes(arr1[i]) && !only1.includes(arr1[i])){
                only1.push(arr1[i])
            }
        }
        if(typeof arr2[i] !== 'undefined') {
            if (!arr1.includes(arr2[i]) && !only2.includes(arr2[i])){
                only2.push(arr2[i])
            }
        }
    }
    return {
        only1,
        only2,
        shared
    }
}
console.log(groupBy([1,2,3,4,5], [4,5,6,7,8,9]))

////////////////////////////Inny sposób//////////////////////////////////////////

function fn(tab1, tab2) {
    const group1 = tab1.filter((n) => !tab2.includes(n));
    const group2 = tab2.filter((n) => !tab1.includes(n));
    const shared = [...tab1, ...tab2].filter((n) => tab1.includes(n) && tab2.includes(n));

    return {
        group1,
        group2,
        shared: [...new Set(shared)]
    }
}

console.log(fn([1,2,3,4,5], [4,5,6,7,8,9]))
