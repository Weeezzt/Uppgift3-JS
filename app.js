// Här använder jag querySelector som använder de id jag gett min button och h1 för att ge det värde till mina variabler. Man kan annars använda getElementById
const h1text = document.querySelector("#text");
const button =  document.querySelector("#button");
//Här använder jag mig av en eventlistener som lystnar efter ett click på min button och som sedan ändrar texten till Goodbye World.
button.addEventListener("click", function() {
    h1text.innerHTML = "Goodbye World"
});