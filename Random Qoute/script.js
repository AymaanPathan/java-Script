const quotescontainer = document.getElementById("quote-container")
const quotetext = document.querySelector(".quote-text")
const quoteAuthor = document.getElementById("author")
const button = document.getElementById("new-quote")
const twitteButton = document.getElementById("twitter")
const loader = document.getElementById("loader")


let apiQuotes = []


function loading() {
    loader.hidden=false;
    quotescontainer.hidden=true;
}


function loadingComplete() {
    loader.hidden=true;
    quotescontainer.hidden=false;
}


function newQuote () {
    loading()
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
    console.log(quote)
    
    if(!quote.author) {
        quoteAuthor.textContent = "Unknown"
    }
    else {
        quoteAuthor.textContent = quote.author;
    }
    if(quote.text.length > 120) {  // 120 means character
        quotetext.classList.add("long-text")
    }
    else {
        quotetext.classList.remove("long-text")
    }
    quotetext.textContent = quote.text;
    

    loadingComplete()
}


function twitter () {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quotetext.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl,'_blank')
}

button.addEventListener("click",newQuote);
twitteButton.addEventListener("click",twitter)

async function getQuotes () {
    loading();
    const apiUrl = "https://type.fit/api/quotes"
    try {
        const response = await fetch (apiUrl);
        apiQuotes = await response.json();
        newQuote()
        // twitter()

    } catch (error) {

    }
}


getQuotes()