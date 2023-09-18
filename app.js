const h1text = document.querySelector("#text");
const button =  document.querySelector("#button");

button.addEventListener("click", function() {
    h1text.innerHTML = "Goodbye World"
});