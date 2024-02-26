function toCamelCase(str) {
  if (str.length === 0) {
    return "";
  }
  let result = str
    .split(/[-_]/)
    .map((x) => x[0].toUpperCase() + x.substring(1))
    .join("");
  if (result[0] !== str[0]) {
    result = str[0] + result.substring(1);
  }
  return result;
}

console.log(toCamelCase("Hello-word_hello"));

////////////////////////////////////Generator Hashtagów/////////////////////////////////

function generateHashtag(str) {
  let result = str.trim();
  if (result === "") {
    return false;
  }
  result = result
    .split(" ")
    .filter((x) => x !== "")
    .map((x) => x[0].toUpperCase() + x.substring(1));
  result.unshift("#");
  result = result.join("");
  if (result.length > 140) {
    return false;
  }
  return result;
}

console.log(generateHashtag("Hello hello"));

/////////////////////Maksymalna i minimalna liczba//////////////////////////////////

function highAndLow(numbers) {
  let arr = numbers.split(" ");
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

console.log(highAndLow("1 9 3 4 -5"));

//////////////////////////Alfabet Morsa////////////////////////////////////////////

// const MORSE_CODE = {
//     '.-': 'A',
//     '-...': 'B',
//     '-.-.': 'C',
//     '-..': 'D',
//     '.': 'E',
//     '..-.': 'F',
//     '--.': 'G',
//     '....': 'H',
//     '..': 'I',
//     '.---': 'J',
//     '-.-': 'K',
//     '.-..': 'L',
//     '--': 'M',
//     '-.': 'N',
//     '---': 'O',
//     '.--.': 'P',
//     '--.-': 'Q',
//     '.-.': 'R',
//     '...': 'S',
//     '-': 'T',
//     '..-': 'U',
//     '.--': 'W',
//     '...-': 'V',
//     '-..-': 'X',
//     '-.--': 'Y',
//     '--..': 'Z',
//     '.----': '1',
//     '..--': '2',
//     '...--': '3',
//     '...-': '4',
//     '.....': '5',
//     '-....': '6',
//     '--...': '7',
//     '---..': '8',
//     '----.': '9',
//     '-----': '0',
// }
// decodeMorse = function (morseCode) {
//     let singleWords = morseCode.trim().split('   ')
//     let sentence = ''
//     for (const word of singleWords) {
//         const letters = word.split(' ')
//         for (const letter of letters) {
//             sentence = sentence + MORSE_CODE[letter]
//         }
//         sentence += ' '
//     }
//     return sentence.slice(0,-1)
// }

// console.log(decodeMorse('   .... . -.--   '))

///////////////////////////////Domena//////////////////////////////

function domainName(url) {
  let almostOnlyWord = url;
  if (url.search("http://") >= 0) {
    almostOnlyWord = almostOnlyWord.substring(7);
  }
  if (url.search("https://") >= 0) {
    almostOnlyWord = almostOnlyWord.substring(8);
  }
  if (url.search("www") >= 0) {
    almostOnlyWord = almostOnlyWord.substring(4);
  }
  let positionOfDot = almostOnlyWord.search("[.]");
  let onlyWord = almostOnlyWord.substring(0, positionOfDot);
  return onlyWord;
}

/////////Inny sposób//////////////////

// function domainName(url){
//     url = url.replace("https://", '');
//     url = url.replace("http://", '');
//     url = url.replace("www.", '');
//     return url.split('.')[0];
//   }

// console.log(domainName("http://www.youtube.com"))

///////////////////////Suma 2 liczb//////////////////

function sumPairs(ints, s) {
  let tabWithResults;
  let index;
  for (let i = 0; i < (index ?? ints.length); i++) {
    for (let j = i + 1; j < (index ?? ints.length); j++) {
      if (ints[i] + ints[j] === s && !(j > index && index !== undefined)) {
        tabWithResults = [ints[i], ints[j]];
        index = j;
      }
    }
  }
  return tabWithResults;
}

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));

//////////////////////////Fibo/////////////////////////////

function productFib(prod) {
  let firstNumber = 1;
  let secondNumber = 1;
  while (true) {
    if (firstNumber * secondNumber > prod) {
      return [firstNumber, secondNumber, false];
    }
    if (firstNumber * secondNumber === prod) {
      return [firstNumber, secondNumber, true];
    }
    let temp = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = temp;
  }
}

console.log(productFib(714));

//////////////////////////////0 to the end//////////////////////////////

function moveZeros(arr) {
  let tabWithoutZeros = arr.filter((x) => x !== 0);
  let tabWithZeros = arr.filter((x) => x === 0);
  return [...tabWithoutZeros, ...tabWithZeros];
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

///////////////////////firstNonRepeatingLetter/////////////////

function firstNonRepeatingLetter(s) {
  s = s.split("");
  for (const letter of s) {
    let afterFilter = s.filter(
      (comparing) => comparing.toLowerCase() === letter.toLowerCase()
    );
    if (afterFilter.length === 1) {
      return letter;
    }
  }
  return "";
}

console.log(firstNonRepeatingLetter("sTress"));
