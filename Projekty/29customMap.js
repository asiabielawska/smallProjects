// 1.  Napisz funkcje customMap, ktora bedzie wykonywala mapowanie po tablicy.
//     funkcja przyjmuje 2 argumenty:
//     a) tab <int[]> ktora jest tablica liczb
//     b) fn ktora jest funkcja ktora przyjmuje <number> i zwraca <number>

//     Funkcja powinna:
//         stworzyc nowa tablice z liczbami, ktore powstaly na podstawie wywolania funkcji fn() na kazdej z liczb w tablicy tab

//     Przyklad uzycia:
//     customMap([1, 2, 3], (x) => x * 2) -> [2, 4, 6]

const addOne = (someNumber) => {
  return someNumber + 1;
};

// const double = x => x * 2;

// const customMap = (tab, fn) => {
//     const newTab = []
//     for (let i = 0; i < tab.length; i++) {
//         newTab.push(fn(tab[i]))
//     }
//     return newTab
// }

////////////////////lub z forEach/////////////////////

const customMap = (tab, fn) => {
  const newTab = [];
  tab.forEach((element) => {
    newTab.push(fn(element));
  });
  return newTab;
};

const result = customMap([1, 2, 3], addOne);
console.log(result);

///////////////////////////////////////////////////////

// const someTab = [1, 2, 3].map(x => x + 1)
// console.log(someTab)
