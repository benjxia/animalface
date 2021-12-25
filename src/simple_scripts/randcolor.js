export function randColor(){
    var quotes = ["red", "yellow","green", "purple", "pink","lightblue"]; //generates random color from a list to be used as background
    return quotes[Math.floor(Math.random()*quotes.length)];
}