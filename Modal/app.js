var btnOpen = document.querySelector('.open_modal_btn');
var modal = document.querySelector('.modal');
var btnIcon = document.querySelector('.modal__header i');
var btnClose = document.querySelector('.modal__footer button');

function toggleModal(){
    modal.classList.toggle('hide');
}
modal.addEventListener('click',function(e){
    if(e.target == e.currentTarget)
    {
        toggleModal();
    }
});

btnOpen.addEventListener('click',toggleModal);
btnIcon.addEventListener('click',toggleModal);
btnClose.addEventListener('click',toggleModal);
