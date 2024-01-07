const form = document.getElementById('form');
const passwordEl1 = document.getElementById('password1');
const passwordEl2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passMatch  = false
const validateForm = function(){
    isValid = form.checkValidity();

    if(!isValid) {
        message.textContent = 'Please Enter Valid Information';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return
    }
    // Check If password was Match
    if(passwordEl1.value===passwordEl2.value) {
        passMatch = true;
        message.style.color = 'green';
        passwordEl1.style.borderColor = 'green'
        passwordEl2.style.borderColor = 'green'
        
    }
    else {
        passMatch = false;
        message.textContent = 'Make Sure Password Is Matched';
        message.style.color = 'red';
        messageContainer.style.border = 'red';
        passwordEl1.style.borderColor = 'red';
        passwordEl2.style.borderColor = 'red';
        return;
    }
    // If Form is Valid
    if(isValid && passMatch) {
        message.textContent = "Successfully Register!";
        message.style.color = 'green';
        message.style.borderColor = 'green';
        passwordEl1.style.borderColor = 'green';
        passwordEl2.style.borderColor = 'green';
    }
}

// Store Data

const storeUserData = function(){
    const data = {
        name:form.name.value,
        phone:form.phone.value,
        Website:form.url.value,
        email:form.email.value,
        password:form.Password.value
    };
    console.log(data)
}

const processFormData = function(e){
    e.preventDefault();
    validateForm();
    if(isValid && passMatch) {
        storeUserData();
    }
}

// Event Listener
form.addEventListener('submit',processFormData)