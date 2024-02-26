// Napisz funkcję getBoundedRand (n) i losuje liczby tak długo aż będzie większa od (n)

const getBoundedRand = (n) => {
    let r
    for (r = Math.random(); r < n; r = Math.random()) {
        console.log(r)
    }
    console.log(r)
}
getBoundedRand(0.5)

// const getBoundedRand = (n) => {
//     let r = Math.random()
//     while (r < n) {
//         console.log(r)
//         r = Math.random()
//     }
// }
// getBoundedRand(0.8)
