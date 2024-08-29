let previousValue=0
let textarea=document.getElementById('textarea-1');
let patentdiv=document.querySelector('.mainplace');
textarea.addEventListener("keydown", (e)=> {
     creatingspan(e.target.value)
     if(e.key === 'Enter'){
       setTimeout(()=>{
          e.target.value = ''
       },10)
       randomselect()
     }
});


function creatingspan(value){
   const tags=value.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
   patentdiv.innerHTML='';
   tags.forEach( tag => {
        const tagEl=document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerHTML = tag;
        patentdiv.appendChild(tagEl)
   });
}

function randomselect(){
   const time = 30;
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
         const randomTag = Pickrandomtag()
         highlight(randomTag)
      }, 100);
   }, time * 100 );
}

function Pickrandomtag(){
   const tags=document.querySelectorAll('.tag');
   return tags[Math.floor(Math.random() * tags.length)]
}

function highlight(tag){
    tag.classList.add('highlight');
}

function unhighlight(tag){
   tag.classList.remove('highlight');
}
