function isValidWalk(walk) {
  let xdirection = 0;
  let ydirection = 0;
  if (walk.length !== 10) {
    return false;
  }
  for (const direction of walk) {
    if (direction === "n") {
      ydirection += 1;
    } else if (direction === "s") {
      ydirection -= 1;
    } else if (direction === "e") {
      xdirection += 1;
    } else if (direction === "w") {
      xdirection -= 1;
    }
  }
  return xdirection === 0 && ydirection === 0;
}

console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));

// function isValidWalk(walk) {
//     if (walk.length !== 10){
//         return false
//     }
//     let ndirection = walk.filter(x => x === 'n')
//     let sdirection = walk.filter(x => x === 's')
//     let edirection = walk.filter(x => x === 'e')
//     let wdirection = walk.filter(x => x === 'w')
//     return ndirection.length === sdirection.length && edirection.length === wdirection.length
// }

// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))
