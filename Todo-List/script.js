const input = document.querySelector('.input');
const addBtn = document.querySelector('.add-btn');
const item1 = document.querySelector('.item-1')
const container = document.querySelector('.container')
const listContainer = document.querySelector('.list-container')
const error = document.querySelector('.error-message')

addBtn.addEventListener('click',()=>{
    if(input.value === "") {
        error.classList.remove('hidden');
        setTimeout(()=>{
            error.classList.add('hidden');
       },600)
    }
    else{
       Item1();
       input.value = ""
    }
    saveData();
    
})


// if(input.value>=1) {
//     input.addEventListener('keydown',(e)=>{
//         if(e.key==='Enter'){
//             Item1()
//             input.value = ""
//         }
//     })
// }




// Update DOM


// Item 1 Display
function Item1(){
    // List
    const li = document.createElement('li');
    li.classList.add('list');
     // Checkbox
     const checkBox = document.createElement('input');
     checkBox.type = "checkbox"
     checkBox.classList.add('ui-checkbox')
     // Item - Name
     const p = document.createElement('p');
     p.innerHTML= input.value;
     const span = document.createElement('span');
     span.classList.add('cross')
     span.innerHTML = "\u00d7"
    //  Append
     li.append(checkBox)
     li.appendChild(p);
     li.append(span)
     listContainer.append(li);
    //  Task Complete
    checkBox.addEventListener('click',()=>{
        p.classList.toggle('checked')
    })
    // Delete Item
    span.addEventListener('click',()=>{
        li.remove();
    })
}

function showItem (){
   listContainer.innerHTML = localStorage.getItem("items")
}


function saveData(){
    localStorage.setItem("items",listContainer.innerHTML);
}    


// showItem()