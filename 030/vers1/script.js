const textEl=document.getElementById('text');
const speedEl=document.getElementById('speed');
const txt='we love programming'
let idx=1;
let speed = 300 /speedEl.value;

writetext()
function writetext(){
   textEl.innerText = txt.slice(0, idx);
   idx++
   if(idx > txt.length){
      idx = 1
   }
   setTimeout(writetext, speed)
}

speedEl.addEventListener('input',(e) => speed = 300 / e.target.value)