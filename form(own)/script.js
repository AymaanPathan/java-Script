const form = document.getElementById('form');
const passwordEl1 = document.getElementById('Password1');
const passwordEl2 = document.getElementById('Password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');
const btn = document.querySelector('button');






const rules =function(e){
    e.preventDefault()
    let data = form.checkValidity();
    if(!data) {
        passwordEl1.style.borderColor = 'red';
        passwordEl2.style.borderColor = 'red';
        message.textContent = 'NO Valid Information'
        message.style.color = 'red'
    }

    if(data) {
        passwordEl1.style.borderColor = 'green';
        passwordEl2.style.borderColor = 'green';
        message.textContent = 'Successfully Registered'
        message.style.color = 'green';
    }
    if(!passwordEl1===passwordEl2) {
        passwordEl1.style.borderColor = 'red';
        passwordEl2.style.borderColor = 'red';
        message.textContent = 'Password is Not Matching'
    }
    if(passwordEl1===passwordEl2) {
        passwordEl1.style.borderColor = 'green';
        passwordEl2.style.borderColor = 'green';
    }
    

    const store = {
    
        name:form.name.value,
        Phone:form.phone.value,
        Email:form.email.value,
        passWord:form.pass.value,
    }
    console.log(store)
}





form.addEventListener('submit',rules)