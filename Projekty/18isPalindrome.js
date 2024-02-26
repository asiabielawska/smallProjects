// Napisz funkcje isPalindrome, ktora sprawdza czy ciag znakow jest palindromem np. kajak, zakaz, sedes, anna

function isPalindrome (n) {
    let t = n.split("").reverse().join("")
    return n === t
}

const letsCheck = isPalindrome("oko")
console.log(letsCheck)