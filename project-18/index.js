// RandomColrGenerator
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");

function randomColor() {
  let hex = "0123456789abcdef";
  let hash = "#";

  for (let i = 0; i < 6; i++) {
    hash += hex[Math.floor(Math.random() * 16)];
  }
  return hash;
}
console.log(randomColor());
let interValId;
const startChangingColor = () => {
  interValId = setInterval(bgColor, 100);
  function bgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = () => {
  clearInterval(interValId);
};

start.addEventListener("click", startChangingColor);
stop.addEventListener("click", stopChangingColor);
