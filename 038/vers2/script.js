const contents=document.querySelectorAll('.content');
const listitem=document.querySelectorAll('nav ul li');

listitem.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        remoceallshowclass();
        remocveallactiveclass();
        item.classList.add('active');
        contents[index].classList.add('show')
    })
})

function remoceallshowclass(){
    contents.forEach( content =>{
          content.classList.remove('show');
    })
    
}

function remocveallactiveclass(){
    listitem.forEach( item =>{
          item.classList.remove('active')
    })
}