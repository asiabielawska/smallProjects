const buttonLetsStart = document.querySelector("#buttonStart")
const selectedNumbersArea = document.querySelector("#areaWithSelectedNumbers")
const resultOfGame = document.querySelector("#result")
const buttonaddOtherTickets = document.querySelector("#addTicket")

const tabWithTickets = []
const selectingNumbersByUser = () => {
    if (tabWithTickets.length > 7){
        return
    }
    let tabselected6Numbers = selectedNumbersArea.value.split(",")
    let changingToNumber
    for(changingToNumber = 0; changingToNumber<tabselected6Numbers.length; changingToNumber++){
        tabselected6Numbers[changingToNumber] = parseInt(tabselected6Numbers[changingToNumber])
    }
    if (tabselected6Numbers.length < 6){
        resultOfGame.innerHTML = "Za mało liczb"
        return
    } else if (tabselected6Numbers.length > 6){
        resultOfGame.innerHTML = "Za dużo liczb"
        return
    }
    for(let numbersInArray = 0; numbersInArray<tabselected6Numbers.length; numbersInArray++){
        if (tabselected6Numbers[numbersInArray] > 49 || tabselected6Numbers[numbersInArray] < 0){
            resultOfGame.innerHTML = "Wprowadzono liczbę wyższą niż 49 lub niższą niż 0"
            return
        }
    }
    let checking = [... new Set(tabselected6Numbers)]
    if (checking.length < tabselected6Numbers.length){
        resultOfGame.innerHTML = "Błąd! Liczyby się powtarzają"
        return
    }
    tabWithTickets.push(tabselected6Numbers)
    let content = "<ol>"
    for (let b = 0; b < tabWithTickets.length; b++){
        content = content + "<li>" + tabWithTickets[b] + "</li>"
        console.log(content)
    }
    content = content + "</ol>"
    console.log(content)
    otherTickets.innerHTML = content
}
buttonaddOtherTickets.addEventListener("click", selectingNumbersByUser)
const gamingResult = () => {
    // Losowanie wygranych liczb
    const tabWinningNumbers = []
    let winningNumber = Math.round(Math.random()*48+1)
    for (let draw = 0; draw < 6;){
        // Jesli liczba juz jest wylosowana, to wylosuj inna
        if (tabWinningNumbers.includes(winningNumber)){
            winningNumber = Math.round(Math.random()*48+1)
        } else {
        tabWinningNumbers.push(winningNumber)
        winningNumber = Math.round(Math.random()*48+1)
        draw++
        }
    }
    const allTabs = []
    for (let z  = 0; z < tabWithTickets.length; z++){
        const tabRepeatingNumbers = []
        for (let x = 0; x < 6; x++){
            for (let y = 0; y < 6; y++){
                if (tabWithTickets[z][x] === tabWinningNumbers[y]){
                    tabRepeatingNumbers.push(tabWithTickets[z][x])
                }
            }
        }
        allTabs.push(tabRepeatingNumbers)
    }
    let content = "<ol>"
    for (let b = 0; b < allTabs.length; b++){
        content = content + "<li>"
        if (allTabs[b].length > 0){
            content = content + `You hit ${allTabs[b].length}: ${allTabs[b]}! Your numbers: ${tabWithTickets[b]} Winning numbers: ${tabWinningNumbers} `
        } else {
            content = content + `Not this time! Your numbers: ${tabWithTickets[b]} Winning numbers: ${tabWinningNumbers} ` 
        }
        content = content + "</li>"
    }
    content = content + "</ol>"
    resultOfGame.innerHTML = content
}
buttonLetsStart.addEventListener("click", gamingResult)