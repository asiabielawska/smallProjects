// 1. Napisz funkcję, która zwróci promise
// - promise ma zrobić resolve/reject po losowym czasie pomiędzy 1 a 3 sek

const somePromise = () =>
  new Promise((resolve, reject) => {
    let time = Math.ceil(Math.random() * 3) * 1000;
    let posibilities = [() => resolve("sukces"), () => reject("error")];
    let result = posibilities[Math.floor(Math.random() * 2)];
    setTimeout(() => {
      result();
    }, time);
  });

// 2. Wykorzystać funkcję i wyświetlic w konsoli czy sie udało, a jeśli się nie udało to inną informację - then i catch
somePromise()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// 3. J.w. tylko z async/await

async function whatever() {
  try {
    const result = await somePromise();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
whatever();
