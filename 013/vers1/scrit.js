let tagsEl=document.getElementById('tags');
let textarea=document.querySelector('textarea');

textarea.focus()
textarea.addEventListener('keyup',(e)=>{
    creeatetags(e.target.value)
    if(e.key === 'Enter'){
        setTimeout(()=>{
            e.target.value=''
        },10)
        reamdomselect()
    }
})

function creeatetags(value){
     const tags = value.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
     tagsEl.innerHTML='';
     tags.forEach(tag => {
         const tagEl = document.createElement('span');
         tagEl.classList.add('tag')
         tagEl.innerHTML=tag;
         tagsEl.appendChild(tagEl)
     });
}
function reamdomselect(){
    const times=30;
    const interval = setInterval(() => {
        const randomTag = Pickrandomtag()
        highlight(randomTag)
        setTimeout(() => {
            unhighlight(randomTag)
        }, 100);
    }, 100);
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
              const randomTag= Pickrandomtag()
              highlight(randomTag);
        }, 100);
    }, times * 100);
}
function Pickrandomtag(){
    const tags =document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length
    )]
}
function highlight(tag){
    tag.classList.add('highlight');;
}
function unhighlight(tag){
    tag.classList.remove('highlight');;
}