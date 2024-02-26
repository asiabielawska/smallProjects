// 6. Napisz funkcję która przyjmuje objekt, zakładamy że jest klucz name: i powinna wyświetlić Hello i name

const person = {
  name: "name1",
};

function hello(obj) {
  if (obj.name !== undefined) {
    return `Hello ${obj.name}`;
  } else {
    return "No data";
  }
}

let x = hello(person);
console.log(x);
