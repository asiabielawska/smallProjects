//Napisz funkcję wyliczającą średnią

const average = (arrWithNumbers) => {
  let s = 0;
  for (let i = 0; i < arrWithNumbers.length; i++) {
    s = s + arrWithNumbers[i];
  }
  return s / arrWithNumbers.length;
};

const resultOfAverage = average([2, 3, 5, 9, 21]);
console.log(resultOfAverage);
