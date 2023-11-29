const input = document.querySelector(".add-todo");
const addBtn = document.querySelector(".add-btn");
const ul = document.querySelector(".all-items");
const error = document.querySelector(".error-msg");
const boxDiv = document.querySelector(".box-div");
const li = document.querySelector("li");

// Getting user item
const addTask = () => {
  // Empty input
  if (input.value === "") {
    alert("error");
  }
  // User Input item
  else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    span.addEventListener("click", () => {
      ul.removeChild(li);
    });
  }
  input.value = "";
};

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

addBtn.addEventListener("click", () => {
  addTask();
});
