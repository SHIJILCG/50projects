const textEl=document.getElementById('text');
const speedEl = document.getElementById('speed');

const text ='This is a moving text';

let speed = 300 / speedEl.value;
let idx = 1;
movingtext()
function movingtext(){
    
    if(idx > text.length){
        idx = 0
    }

   let textslice = text.slice(0,idx);
   textEl.innerText = textslice;
   idx ++
   setTimeout(movingtext,speed);
   
}

speedEl.addEventListener('input',(e)=> speed = 300 / e.target.value)