/**
 * 1. Napisz funkcję `weatherStats`, która generuje statystyki z pogodowe z X dni.
 * Funkcja przyjmuje jeden argument `weatherReports`, który jest tablicą obiektów opisujących stan pogody w różnych dniach.
 * Funkcja ma zwrócić obiekt z następującymi informacjami:
 * 1. Maksymalna i minimalna temperatura
 * 2. Średnia wilgotność
 * 3. Liczba dni, w których była burza - zakładamy, że burza występuje zawsze kiedy temperatura > 25°C oraz wilgotność > 75%
 * 
 * Przykład:
 * weatherStats([{temperature: 22.3, humidity: 0.21}, {temperature: 27.1, humidity: 0.87}, {temperature: 17.8, humidity: 0.22}]) -> 
 * {
 *      maxTemperature: 27.1,
 *      minTemperature: 17.8,
 *      avgHumidity: 0.43,
 *      daysWithStorm: 1
 * }
*/
const weatherReports = [
    {temperature: 17.8, humidity: 0.21}, 
    {temperature: 27.1, humidity: 0.87}, 
    {temperature: 22.3, humidity: 0.22}
]

const weatherStats = (tabWeatherOfSomeDays) => {
    let maxTemperature = tabWeatherOfSomeDays[0].temperature
    let minTemperature = tabWeatherOfSomeDays[0].temperature
    let humidity = tabWeatherOfSomeDays[0].humidity
    let daysWithStorm = 0
    for (let i = 1; i < tabWeatherOfSomeDays.length; i++){
        humidity += tabWeatherOfSomeDays[i].humidity
        if (maxTemperature < tabWeatherOfSomeDays[i].temperature){
            maxTemperature = tabWeatherOfSomeDays[i].temperature
        } else if (tabWeatherOfSomeDays[i].temperature < minTemperature){
            minTemperature = tabWeatherOfSomeDays[i].temperature
        }
    }
    for (let s = 0; s < tabWeatherOfSomeDays.length; s++){
        if (tabWeatherOfSomeDays[s].temperature > 25 && tabWeatherOfSomeDays[s].humidity > 0.75){
            daysWithStorm += 1
        }
    }
    return {
        maxTemperature,
        minTemperature,
        humidity: humidity/tabWeatherOfSomeDays.length,
        daysWithStorm 
    }
}

const resultWeatherStats = weatherStats(weatherReports)
console.log(resultWeatherStats)
