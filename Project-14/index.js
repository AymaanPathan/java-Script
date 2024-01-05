//+++++++++++ 1st Method
// const redBox = document.querySelector(".box-1");
// const yellowBox = document.querySelector(".box-2");
// const blackBox = document.querySelector(".box-3");
// const blueBox = document.querySelector(".box-4");
// // Red
// redBox.addEventListener("click", () => {
//   document.body.style.backgroundColor = "red";
// });
// // Yellow
// yellowBox.addEventListener("click", () => {
//   document.body.style.backgroundColor = "yellow";
// });
// // Black
// blackBox.addEventListener("click", () => {
//   document.body.style.backgroundColor = "black";
// });
// // Blue
// blueBox.addEventListener("click", () => {
//   document.body.style.backgroundColor = "blue";
// });

//++++ 2nd Method

const btn = document.querySelectorAll("#btn");
const body = document.querySelector("body");

btn.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    if (e.target.className === "box-1") {
      body.style.backgroundColor = "red";
    }
    if (e.target.className === "box-2") {
      body.style.backgroundColor = "yellow";
    }
    if (e.target.className === "box-3") {
      body.style.backgroundColor = "black";
    }
    if (e.target.className === "box-4") {
      body.style.backgroundColor = "blue";
    }
  });
});
