export function randColor(){
    var quotes = ["red", "yellow","green", "purple", "pink","lightblue"];
    document.getElementById("main").style.backgroundColor = quotes[Math.floor(Math.random()*quotes.length)];
}