export function randColor(){
    var quotes = ["red","green", "pink","lightblue", "royalblue"]; //generates random color from a list to be used as background
    return quotes[Math.floor(Math.random()*quotes.length)];
}