const tab1 = ["name1", "name3", "name2"];
function indexof(tablica, element) {
  for (let s = 0; s < tablica.length; s++) {
    if (tablica[s] == element) {
      return s;
    }
  }
  return -1;
}
let x = indexof(tab1, "name2");
console.log(x);
