const next = document.getElementById("Next")
const progress = document.querySelector(".progress")
const circle = document.querySelectorAll(".circle")
const prev = document.getElementById("Prev");


let current = 1;

next.addEventListener("click" , function() {
    current++;
    if(current>circle.length) {
        current=circle.length;
    }
    update()
})


prev.addEventListener("click" , function() {
    current--;
    if(current<1) {
        current=1;
    }
    update()

})



// const update = function() {
//     let index = 0;
//     for(const circles of circle) {
//         if(index<current) {
//             current.classList.add("active")
//         }
//         else{
//             current.classList.remove("active") 
//         }
//     }
//     index++;
// }


function update() {
    let idx = 0;
    for (const circles of circle) {
      if (idx < current) {
        circles.classList.add("active");
      } else {
        circles.classList.remove("active");
      }
      idx++;
    }
    const actives = document.querySelectorAll(".active")
    progress.style.width = (actives.length-1) /(circle.length-1)*100+"%"


    if(current===1) {
        prev.disabled=true
    }
    else if(current===circle.length) {
        next.disabled=true
    } else {
        prev.disabled=false;
        next.disabled=false;
    }
  }
  

