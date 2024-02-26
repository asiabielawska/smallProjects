// 1. Napisz funkcję walk, która śledzi przemieszczanie się człowieka na podstawie jego ruchów.
//    Na wejściu funkcja przyjmuje argument moves typu <string[]>, który opisuje kolejne kierunki ruchu człowieka.
//    Na wyjściu oczekujemy obiektu, który zawiera końcowe współrzędne człowieka {x: number; y: number}

//     Na początku człowiek jest w pozycji {x: 0, y: 0}. Ruch w górę i dół zmienia wartość y, ruch w prawo i lewo zmienia wartość x.

//     Przykład:
//     walk(['N', 'N', 'E', 'W', 'S', 'W']) -> {x: -1, y: 1 }

const walk = (moves) => {
    const coordinates = {
        x: 0,
        y: 0
    }
    for (let i = 0; i < moves.length; i++){
        if (moves[i] === "N") {
            coordinates.y = coordinates.y + 1
        } else if (moves[i] === "S") {
            coordinates.y = coordinates.y - 1
        } else if (moves[i] === "E") {
            coordinates.x = coordinates.x + 1
        } else if (moves[i] === "W") {
            coordinates.x = coordinates.x - 1
        }
    }
    return coordinates
}

const coordinatesOfHuman = walk(['N', 'N', 'E', 'W', 'S', 'W'])
console.log(coordinatesOfHuman)