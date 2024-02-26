function squareDigits(num){
    return Number(num.toString().split('').map( x => Number(x)**2).join(''))
}

console.log(squareDigits(3212))
