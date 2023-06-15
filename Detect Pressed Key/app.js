var eAlert = document.querySelector('.alert')
var eBox = document.querySelector('.box')
var Ekey = document.querySelector('.card.key p:last-child')
var eLocation = document.querySelector('.card.location p:last-child')
var eWhich = document.querySelector('.card.which p:last-child')
var eCode = document.querySelector('.card.code p:last-child')
var result = document.querySelector('.result')

document.addEventListener('keydown',e =>{
    let keyname = e.keyCode === 32 ? 'space' : e.key;
    Ekey.innerHTML = keyname
    eLocation.innerHTML = e.location;
    eWhich.innerHTML = e.which;
    eCode.innerHTML = e.code;
    result.innerHTML = e.which






    eAlert.classList.add('hide')
    eBox.classList.remove('hide')
})