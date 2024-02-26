//Napisz funkcję, która będzie dodawać kolejne liczby następujące po sobie.

function suma(n) {
  let s = 0;
  for (let i = 1; i <= n; i++) {
    s += i;
  }
  return s;
}

const x = suma(10);
console.log(x);
