var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var removeAll = document.querySelector('.remove-all')

var tags = ['Nodejs','Reactjs']

function render(){
    content.innerHTML = ''
    for (var i = 0; i<tags.length; i++)
    {
        let tag = tags[i];
        content.innerHTML += ` <li>
        ${tag}
        <i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i>
    </li>`
    }
    content.appendChild(input);
    input.focus();
}

render();

input.addEventListener('keydown',e => {
    if(e.key =='Enter')
    {
        tags.push(input.value);
        render();
        input.value = '';
    }

})

function removeTag(index){
    tags.splice(index,1);
    render();
}

removeAll.addEventListener('click',function(){
    tags = [];
    render();
})