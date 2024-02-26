let randomNumber = Math.round(Math.random() * 10);
let checkingNumber = parseInt(prompt("Wpisz liczbę od 1 do 10"));

for (;;) {
  if (checkingNumber === randomNumber) {
    alert("Well done");
    break;
  } else if (checkingNumber < randomNumber) {
    alert("Your number is too small");
    checkingNumber = parseInt(prompt());
  } else if (checkingNumber > randomNumber) {
    alert("Your number is too big");
    checkingNumber = parseInt(prompt());
  } else {
    alert("Please, provide a number!");
    checkingNumber = parseInt(prompt());
  }
}

//////////////////////////////////////////////////////////////////

// let x = Math.round(Math.random()*10)
// console.log(x)

// let y = parseInt(prompt())
// while (x !== y){
//     if (x > y){
//         alert ("toosmall")
//     } else if (x < y){
//         alert ("toohigh")
//     }
//     y = parseInt(prompt())
// }

// if (x === y){
//     alert("welldone")
// }

//////////////////////////////////////////////////////////////////

// const x = Math.round(Math.random()*z)
// console.log(x)
// for( let y = parseInt(prompt()); x !== y; y = parseInt(prompt())){
//     if (x > y){
//         alert("toosmall")
//     } else if (x < y){
//         alert("toohigh")
//     }
// }
// alert("welldone")

////////////////////////////////////////////////////////////////////
