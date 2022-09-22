const advices = [
    "You can totally do this.",
    "We can do anything we want to if we stick to it long enough.",
    "Impossible is for the unwilling.",
    "Once you choose hope, anything iss possible.",
    "There is no saint without a past, no sinner without a future.",
    "Good things happen to those who hustle.",
    "Whatever you are, be a good one.",
    "Do it with passion or not at all.",
    "If you are going through hell, keep going",
    "Persistence guarantees that results are inevitable",
    "The true success is the person who invented himself",
    "Be who you needed when you were young.",
    "If you are not confused, you are not paying attention",
    "The truth is not always beauty, but the hunger for it is",
    "If you do it for competition you are screwed. If you do it for love you have a chance.",
    "Do not raise your voice. Improve your argument.",
    "It is better to remain silent and be thought a fool than to open your mouth and remove all doubt.",
    "Stop overthinking. Planning is fine, but life gets better when you trust more.",
    "Life is short. Be patient with results and impatient with actions.",
    "You are not a drop in the ocean. You are the entire ocean in a drop.",
]

function newQuotes() {
    var randomNumber =Math.floor(Math.random() * (advices.length));
    document.getElementById('quotesDisplay').innerHTML = advices[randomNumber];
}