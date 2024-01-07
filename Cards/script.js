const panel = document.querySelectorAll(".panel")

for(const panels of panel) {
    panels.addEventListener("click",function() {
        panelIn()
        panels.classList.add("active")
    })
}



const panelIn = function() {
    for(const pa of panel) {
        pa.classList.remove("active")
    }
}