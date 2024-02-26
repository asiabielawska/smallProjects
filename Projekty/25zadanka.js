// 1. Napisz generator funkcję `genPassword`, która tworzy hasła.

const genPassword = (number) => {
  const lettersAndNumbers = "123456789qwertyuiopasdfghjklzxcvbnm!*?";
  let password =
    lettersAndNumbers[Math.floor(Math.random() * lettersAndNumbers.length)];
  for (let s = 0; s < number - 1; s++) {
    password +=
      lettersAndNumbers[Math.floor(Math.random() * lettersAndNumbers.length)];
  }
  return password;
};
const showPassword = genPassword(8);
console.log(showPassword);

//  2. Stwórz funkcję `separateSign`, która rozdziela liczby w tablicy na ujemne oraz dodatnie i zero.

// const myTab = [-11, 3, -86, 52, 7, 0]
// const separateSign = (someTab) => {
//     let separatedNumbers = {
//         negative: [],
//         nonNegative: []
//     }
//     for (let i = 0; i < someTab.length; i++){
//         if (someTab[i] < 0){
//             separatedNumbers.negative.push(someTab[i])
//         } else {
//             separatedNumbers.nonNegative.push(someTab[i])
//         }
//     }
//     return separatedNumbers
// }
// const resultOfSeparation = separateSign(myTab)
// console.log(resultOfSeparation)

///////////////////////////////////////////////

const separateSign1 = (someTab) => {
  const negative = [];
  const nonNegative = [];
  for (let i = 0; i < someTab.length; i++) {
    if (someTab[i] < 0) {
      negative.push(someTab[i]);
    } else {
      nonNegative.push(someTab[i]);
    }
  }
  return {
    negative,
    nonNegative,
  };
};

// 3. Stwórz funkcję `capitalize`, która sprawia że wyraz zaczyna się od wielkiej litery.

const capitalize = (word) => {
  let newWord = word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    newWord += word[i];
  }
  return newWord;
};

let wordWithBigLetter = capitalize("hejka");
console.log(wordWithBigLetter);

// 4. Napisz funkcje, ktora przyjmuje tablice obiektow, kazdy obiekt ma klucz { name: 'jakies imie'}, masz
// zwrocic tablice z tymi namami.
// Czyli twojaFunkcja([{name: 'Name1'}, {name: 'name2'}, {name: 'name3'}]) -> ['Name1', 'name2', 'name3']

const tab1 = [{ name: "Name1" }, { name: "name2" }, { name: "name3" }];
const searchingNames = (tab) => {
  return tab.map((x) => x.name);
};
console.log(searchingNames(tab1));

// 5. Napisz funkcję `merger``, która jako argumenty przyjmuje:
// 1. Tablicę `tab: number[]`
// 2. Funkcję `fn1: (arg: number) => number`
// 3. Funkcję `fn2: (arg: number) => number`
// Funkcja ma zwrócić tablicę liczb, gdzie kazda liczba jest obliczona na podstawie
// `f(x) = fn1(x) + fn2(x)`
// Przykład uzycia:
// merger([1,2,3], (n: number) => n + 1, (n: number) => n / 2)
// zwraca:
// [2.5, 4, 5.5]

const tabOfNumbers = [1, 2, 3];

function addingOne(a) {
  return a + 1;
}

function divisionByTwo(d) {
  return d / 2;
}

function subtractionOne(s) {
  return s - 1;
}

function multiplyByTwo(m) {
  return m * 2;
}

function merger(tab, fn1, fn2) {
  let resultTab = tab.map((element) => fn1(element) + fn2(element));
  console.log(resultTab);
  return resultTab;
}

merger(tabOfNumbers, addingOne, divisionByTwo);
