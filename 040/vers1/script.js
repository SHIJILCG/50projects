const boxescontainer=document.getElementById('boxes');
const btn=document.getElementById('btn');
createBoxes()
function createBoxes(){
     for(let i=0;i < 4;i++){
         for(let j=0;j < 4;j++){
             const box=document.createElement('div');
             box.classList.add('box');
             box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
             boxescontainer.appendChild(box)
         }
     }
}
btn.addEventListener('click',()=> boxescontainer.classList.toggle('big'))