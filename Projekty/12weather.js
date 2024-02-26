const weatherbutton = document.querySelector ("#actualWeather")
const option = document.querySelector ("#select")
function actualAlert () {
    if (option.value == "świeci słońce") {
        alert ("Pamiętaj o filtrze z wysoką ochroną przeciwsłoneczną!")
    } else if (option.value == "pada deszcz") {
        alert ("Nie zapomnij o parasolce!")
    } else if (option.value == "pada śnieg") {
        alert ("Ubierz się ciepło!")
    } else if (option.value == "wieje bardzo silny wiatr") {
        alert ("Zabezpiecz przedmoity, które może porwać wiatr")
    }
}
weatherbutton.addEventListener("click", actualAlert)