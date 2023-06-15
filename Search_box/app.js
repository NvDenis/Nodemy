var btnSearch = document.querySelector('.search_box__btn');

btnSearch.addEventListener('click',function(){
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus();
})