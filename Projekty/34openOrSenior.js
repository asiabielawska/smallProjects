// function openOrSenior(data){
//     let categories = []
//     for (const person of data){
//         if (person[0] >= 55 && person[1] > 7){
//             categories.push("Senior")
//         } else {
//             categories.push("Open")
//         }
//     }
//     return categories
//   }
  
// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))

//////////////////////////////////////////

// function openOrSenior(data){
//     let categories = []
//     for (const person of data){
//         categories.push(person[0] >= 55 && person[1] > 7 ? "Senior" : "Open")
//     }
//     return categories
// }  
  
// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))

//////////////////////////////////////////

function openOrSenior(data){
    return data.map(element => element[0] >= 55 && element[1] > 7 ? "Senior" : "Open")
} 
console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))



///////
function openOrSenior(data){
    return data.map(([age, score]) => age >= 55 && score > 7 ? "Senior" : "Open")
}  
openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])