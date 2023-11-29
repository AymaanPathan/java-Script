const mainDiv = document.querySelector(".main-div");
const colors = document.querySelectorAll(".colors");
const body = document.querySelector("body");

colors.forEach(function (btns) {
  console.log(btns);
  btns.addEventListener("click", (e) => {
    if (e.target.id === "white") {
      body.style.backgroundColor = "white";
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = "blue";
    }
    if (e.target.id === "red") {
      body.style.backgroundColor = "red";
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = "yellow";
    }
  });
});
