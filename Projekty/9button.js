const button1 = document.querySelector("#message")
let x = 1
function add () {
    const somewords = document.querySelector("#hellowHTML")
    somewords.innerHTML = x
    x = x + 1
}

button1.addEventListener("click", add)