const contents=document.querySelectorAll('.content');
const listitem=document.querySelectorAll('nav ul li');

listitem.forEach((item,index)=>{
    remoceallshowclass();
    remocveallactiveclass();
})

function remoceallshowclass(){
    contents.forEach( content =>{
          content.classList.remove('show')
    })
}