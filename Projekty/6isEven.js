//Napisz funkcję sprawdzającą, czy liczba jest parzysta

const isEven = (checkingNumber) => {
  if (checkingNumber % 2 === 0) {
    return `${checkingNumber} jest parzysta`;
  } else if (checkingNumber % 2 !== 0) {
    return `${checkingNumber} jest nieparzysta`;
  }
};

console.log(isEven(4));
