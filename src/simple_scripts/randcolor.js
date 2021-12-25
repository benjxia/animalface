export function randColor(){
    var quotes = ["red", "yellow","green", "purple", "pink","lightblue"];
    return quotes[Math.floor(Math.random()*quotes.length)];
}