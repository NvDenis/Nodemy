var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var form = document.querySelector('form')
function showError(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = ''

}

function showSussces(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''

}

function emptyCheck(LissInput){
    let isEmptyError = false;
    LissInput.forEach(input => {
        input.value = input.value.trim();
        if(!input.value)
        {
            isEmptyError = true;
            showError(input,'khong duoc de trong');
        }
        else
        {
            showSussces(input);
        }
    });
    return isEmptyError;
}

function checkEmail(){
    const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim();
    let isEmailError = !regexEmail.test(input.value);
    if(regexEmail.test(input.value))
    {
        showSussces();
    }
    else{
        showError(input,'Email Invalid')
    }
    return isEmailError;
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    let isEmptyError =  emptyCheck([username, email, password, confirmPassword])
    
})

