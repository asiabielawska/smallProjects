// function alphabetPosition(text) {
//     text = text.toLowerCase().split('')
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     let newText = []
//     for (let t = 0; t < text.length; t++){
//         for (let i = 0; i < alphabet.length; i++){
//             if(text[t] === alphabet[i]){
//                 newText.push(i + 1)
//             }
//         }
//     }
//     return newText.join(" ");
// }

// console.log(alphabetPosition("The narwhal bacons at midnight."))

/////////////////////////////////Inny sposób////////////////////////////////////////

// function alphabetPosition(text) {
//     text = text.toLowerCase().split('')
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     let newText = []
//     for(const letter of text) {
//         const index = alphabet.indexOf(letter)
//         if(index >= 0) {
//             newText.push(index + 1)
//         }
//     }
//     return newText.join(" ");
// }
// console.log(alphabetPosition("The narwhal bacons at midnight."))

////////////////////////////////////Inny sposób//////////////////////////////////

function alphabetPosition(text){
    let result = ""
    for(const letter of text){
        let x = letter.toLowerCase().charCodeAt()
        if(x >= 97 && x <= 122){
            result += x - 96 + " "
        }
    }
    return result
}

console.log(alphabetPosition("The narwhal bacons at midnight."))