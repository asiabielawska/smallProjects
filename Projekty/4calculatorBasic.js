const firstNumber = parseInt(prompt("Wpisz pierwszą liczbę"));
const sing = prompt("Wpisz symbol działania matematycznego: + - * /");
const secondNumber = parseInt(prompt("Wpisz drugą licznę"));

if (sing === "+") {
  console.log(firstNumber + secondNumber);
} else if (sing === "-") {
  console.log(firstNumber - secondNumber);
} else if (sing === "*") {
  console.log(firstNumber * secondNumber);
} else if (sing === "/") {
  console.log(firstNumber / secondNumber);
} else console.log("błąd");
