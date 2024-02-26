// 1. Collatz - doprowadzenie liczby do 1:
// a) jeśli liczba jest równa 1, przerwij
// b) jeśli liczba jest parzysta - n/2
// c) jeśli liczba jest nieparzysta - (3*n+1)
// d) by policzyć w ilu krokach dana liczba doprowadzana jest do liczbt jeden - +1

const collatz = (n) => {
  if (n === 1) {
    return 0;
  }
  return n % 2 === 0 ? collatz(n / 2) + 1 : collatz(3 * n + 1) + 1;
};
console.log(`Ilość kroków potrzebna do uzyskania 1: ${collatz(21)}`);

// const collatz = (n) => {
//     let steps = 0
//     let actualNumber
//     for (actualNumber = n; actualNumber > 1;) {
//         if (actualNumber % 2 === 0){
//             actualNumber = (actualNumber/2)
//             steps = steps + 1
//         } else if (actualNumber % 2 !== 0) {
//             actualNumber = (3*actualNumber+1)
//             steps = steps + 1
//         }
//     }
//     if (actualNumber === 1){
//         return steps
//     }
// }
// console.log(collatz(21))

// 2. Silnia

const silnia = (n) => {
  if (n === 0) {
    return 1;
  }
  return silnia(n - 1) * n;
};
console.log(silnia(6));

////////////////////////////////////////

// const silnia = (n) => {
//     return n === 0? 1:silnia(n-1)*n
// }

// const result = silnia(4)
// console.log(result)

// 3. Ciąg Fibonacciego

const fibo = (n) => {
  if (n <= 1) {
    return 1;
  }
  return fibo(n - 1) + fibo(n - 2);
};
console.log(fibo(5));
