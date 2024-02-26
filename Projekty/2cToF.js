//Napisz funkcję zmieniającą stopnie celsjusza na fahrenheita

function cToF(C) {
  let F = C * 1.8 + 32;
  return F;
}

const x = cToF(10);
console.log(x);

if (x >= 212) {
  console.log("wrze");
} else {
  console.log("niewrze");
}

// let C = +prompt("Podaj temperaturę w C by zmienić ją w F")
// let F = 1.8 * C + 32
// alert (F)
