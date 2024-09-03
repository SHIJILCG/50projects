const container=document.getElementById('container');
const colors = ['#e74c3c','#8e44aed','#3498db','#e67e22','#2ecc71'];
const SQUARES=500;


for(let i=0;i< SQUARES;i++){
    const square=document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover',()=>setcolor(square));
    square.addEventListener('mouseout',()=>removecolor(square))
    container.append(square);
}
function setcolor(element){
    const color=randomcolor();
    element.style.background = color;
    element.style.boxShadow= `0 0 2px ${color},0 0 10px ${color}`
}

function removecolor(element){
    element.style.background = `#1d1d1d`;
    element.style.boxShadow= `0 0 2px #000`
}
function randomcolor(){
    return colors[Math.floor(Math.random() * colors.length)]
}