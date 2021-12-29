export function randColor(){
    var quotes = ["lightsalmon","darkorchid","green", "pink","lightblue", "skyblue","darkgoldenrod","limegreen","olive","mediumaquamarine"]; //generates random color from a list to be used as background
    return quotes[Math.floor(Math.random()*quotes.length)];
}