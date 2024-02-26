// function createPhoneNumber(numbers){
//   let first3Numbers = ''
//   let second3Numbers = ''
//   let last4Numbers = ''
//   for(let i = 0; i < 3; i++){
//     first3Numbers += numbers[i].toString()
//   }
//   for (let i = 3; i < 6; i++){
//       second3Numbers += numbers[i].toString()
//     }
//   for (let i = 6; i < 10; i++){
//       last4Numbers += numbers[i].toString()
//     }
//   return `(${first3Numbers}) ${second3Numbers}-${last4Numbers}`
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

////////////////////////////inny sposób/////////////////////////////////////

// function abc(numbers) {
//   const first = `(${numbers[0]}${numbers[1]}${numbers[2]}) `
//   const second = ` ${number[3]}${number[4]}${number[5]}`
//   const third = ` ${number[3]}${number[4]}${number[5]}`

//   return first + second + third
// }

//////////////////////////////inny sposób//////////////////////////////////

function createPhoneNumber(numbers) {
  let oneString = numbers.join("");
  return (
    "(" +
    oneString.substring(0, 3) +
    ")" +
    oneString.substring(3, 6) +
    "-" +
    oneString.substring(6)
  );
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
