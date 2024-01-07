const radioContainer = document.querySelectorAll('.radio-container');
const radioInput = document.querySelectorAll('input')
const form = document.getElementById('start-form')
const countdown = document.querySelector('.countdown')
const countdownPage = document.getElementById('countdown-page')
const caption = document.querySelector('.caption')
const startBtn = document.querySelector('.strt-btn')

let QuestionAmount = 0

// Selected Function
radioContainer.addEventListener("click",function(){
    radioContainer.forEach((selected)=>{
        selected.classList.remove('selected')
        if(selected.children[1].checked)
        selected.classList.add('selected')
    })
})

// countDown
function CountdownStart(){
    // 3
    setTimeout(()=>{
        countdown.textContent = "3";
    },10);
    // 2
    setTimeout(()=>{
        countdown.textContent = "2";
    },2000)
    // 1
    setTimeout(()=>{
        countdown.textContent = "1";
    },3000)
    // GO
    setTimeout(()=>{
        countdown.textContent = "GO!";
    },4000)
}
CountdownStart();



form.addEventListener('submit',(e)=>{
    e.preventDefault();
        form.hidden = true;
        countdownPage.hidden = false;
});

// Question Amount
function getRadioValue(){
    let radiovalue
    radioInput.forEach((click)=>{
        if(click.checked){
            radiovalue = click.value
        }
    })
    return radiovalue
}

function selectQuestionAmount(e){
    e.preventDefault();
    QuestionAmount = getRadioValue();
    console.log('Question Amount',QuestionAmount)
}


form.addEventListener('click',selectQuestionAmount)