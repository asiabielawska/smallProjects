const whatdayistoday = document.querySelector("#data")
let teraz = new Date()
whatdayistoday.innerHTML = teraz
console.log(teraz.getHours())

let greeting 

if (teraz.getHours() < 12 ) {
  greeting = "Good morning"
} else if (teraz.getHours() < 18 ) {
  greeting = "Good afternoon"
} else if (teraz.getHours() > 18 || teraz.getHours() <= 23  ) {
  greeting = "Good evening"
} else if (teraz.getHours() > 23  ) {
  greeting = "Good night"
} else {
  greeting = "impossile"
}

const somegreeting = document.querySelector("#greeting")
somegreeting.innerHTML = greeting