const time = document.querySelector(".clock");
const h2 = document.querySelector("h2");

setInterval(() => {
  const data = new Date();
  h2.textContent = data.toLocaleTimeString();
});
