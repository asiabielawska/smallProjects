const result = document.querySelector("#result");
const button1 = document.querySelector("#one");
const button2 = document.querySelector("#two");
const button3 = document.querySelector("#three");
const button4 = document.querySelector("#four");
const button5 = document.querySelector("#five");
const button6 = document.querySelector("#six");
const button7 = document.querySelector("#seven");
const button8 = document.querySelector("#eight");
const button9 = document.querySelector("#nine");
const button0 = document.querySelector("#zero");
const buttonaddition = document.querySelector("#addition");
const buttonsubtraction = document.querySelector("#subtraction");
const buttonmultiplication = document.querySelector("#multiplication");
const buttondivision = document.querySelector("#division");
const buttonequal = document.querySelector("#equal");
const buttonclear = document.querySelector("#clear");

let firstNumber = "";
let operation;
let secondNumber = "";

function storeNumber(numberAsString) {
  if (operation === undefined) {
    firstNumber += numberAsString;
    result.innerHTML = firstNumber;
  } else {
    secondNumber += numberAsString;
    result.innerHTML = secondNumber;
  }
}

function storeOperator(operator) {
  if (firstNumber !== undefined) {
    operation = operator;
    result.innerHTML = operation;
  }
}

function equal() {
  if (firstNumber !== undefined && secondNumber !== undefined) {
    let operationResult;
    if (operation === "+") {
      operationResult = Number(firstNumber) + Number(secondNumber);
    } else if (operation === "-") {
      operationResult = Number(firstNumber) - Number(secondNumber);
    } else if (operation === "*") {
      operationResult = Number(firstNumber) * Number(secondNumber);
    } else if (operation === "/") {
      operationResult = Number(firstNumber) / Number(secondNumber);
    }
    result.innerHTML = operationResult.toFixed(1);
    firstNumber = operationResult;
    secondNumber = "";
  }
}
function clear() {
  result.innerHTML = "";
  firstNumber = "";
  secondNumber = "";
  operation = undefined;
}

button1.addEventListener("click", () => storeNumber("1"));
button2.addEventListener("click", () => storeNumber("2"));
button3.addEventListener("click", () => storeNumber("3"));
button4.addEventListener("click", () => storeNumber("4"));
button5.addEventListener("click", () => storeNumber("5"));
button6.addEventListener("click", () => storeNumber("6"));
button7.addEventListener("click", () => storeNumber("7"));
button8.addEventListener("click", () => storeNumber("8"));
button9.addEventListener("click", () => storeNumber("9"));
button0.addEventListener("click", () => storeNumber("0"));
buttonaddition.addEventListener("click", () => storeOperator("+"));
buttonsubtraction.addEventListener("click", () => storeOperator("-"));
buttonmultiplication.addEventListener("click", () => storeOperator("*"));
buttondivision.addEventListener("click", () => storeOperator("/"));
buttonequal.addEventListener("click", equal);
buttonclear.addEventListener("click", clear);
