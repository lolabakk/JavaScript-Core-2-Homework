let quoteGen = document.getElementById("quoteGen");
let quoteButtons = document.getElementById("quoteButton");
let authorName = document.getElementById("author");
quoteButtons.addEventListener("click", function () {
    quoteGenerator();
});
let quoteGenerator = function () {
    let quoteRandom = pickFromArray(quotes);
    quoteGen.textContent = quoteRandom.quote;
    authorName.textContent = quoteRandom.author;
};
quoteGenerator();