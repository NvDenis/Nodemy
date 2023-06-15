var images = document.querySelectorAll('.image img')
var close = document.querySelector('.close')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var galleryImg = document.querySelector('.gallery__inner img')
var gallery = document.querySelector('.gallery')

var currentIndex = 0;

function showGallery(){
    (currentIndex == 0) ? prev.classList.add('hide') : prev.classList.remove('hide');
    (currentIndex == images.length-1) ? next.classList.add('hide') : next.classList.remove('hide');

    galleryImg.src = images[currentIndex].src;
    gallery.classList.add('show');
}

images.forEach((img,index) =>{
    img.addEventListener('click',function(){
        currentIndex = index;
        showGallery();
    })
})

close.addEventListener('click',function(){
    gallery.classList.remove('show');
})

prev.addEventListener('click',function(){
    if(currentIndex > 0)
    {
        currentIndex--;
        showGallery();
    }
})

next.addEventListener('click',() => {
    if (currentIndex <images.length-1) currentIndex++ ;showGallery();
})

document.addEventListener('keydown',(e) =>{
    if (e.keyCode == 27)
    {
        gallery.classList.remove('show');
    }
})