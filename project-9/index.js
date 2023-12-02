const noteContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".create-btn");
let notes = document.querySelector(".input-box");
const save = document.querySelector(".save");

const showNotes = () => {
  noteContainer.innerHTML = localStorage.getItem("notes");
};

showNotes();

const updateStorage = () => {
  localStorage.setItem("notes", noteContainer.innerHTML);
};

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let deleteImg = document.createElement("img");

  deleteImg.classList.add("del-img");
  deleteImg.src = "assets/delete.png";

  inputBox.setAttribute("contenteditable", "true");
  inputBox.classList.add("input-box");

  noteContainer.appendChild(inputBox).appendChild(deleteImg);
});

noteContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.addEventListener("keyup", () => {
        updateStorage();
      });
    });
  }
});
