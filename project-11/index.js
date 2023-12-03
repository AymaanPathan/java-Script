const quote = document.querySelector("blockquote");
const author = document.querySelector("span");
const next = document.querySelector(".next");
const tweet = document.querySelector(".tweet");

const url = "https://api.quotable.io/random";

async function getData() {
  const response = await fetch(url);
  const data = await response.json();

  const img = document.createElement("img");
  img.src = "assets/poem.png"; // Set the src attribute separately
  img.classList.add("author-img");

  quote.innerHTML = data.content;
  author.appendChild(img); // Append the img element to the author element
  author.innerHTML = `✒️ ${data.author}`;
  console.log(data);

  next.addEventListener("click", () => {
    getData();
  });
}

tweet.addEventListener("click", () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "----by" +
      author.innerHTML,
    "Tweet Window",
    "width=600",
    "height=300"
  );
});

getData();
