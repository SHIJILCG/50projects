const canvas=document.getElementById('canvas');
const increasebutt=document.getElementById('increase');
const decreasebutt=document.getElementById('decrease');
const sizeelement=document.getElementById('size');
const colorelemt=document.getElementById('color');
const clearEl=document.getElementById('clear');
const ctx= canvas.getContext('2d');
let size = 10;
let color='black'
let x ;
let y;
let ispressed = false;
canvas.addEventListener('mousedown',(e)=>{
      ispressed = true;  
      x=e.offsetX;
      y=e.offsetY; 
})
canvas.addEventListener('mouseup',(e)=>{
    ispressed = false;  
    x=undefined;
    y=undefined; 
})
canvas.addEventListener('mousemove',(e)=>{
    if(ispressed){
        x2=e.offsetX;
        y2=e.offsetY; 
        drawcircle(x2,y2)
        drawline(x,y,x2,y2)
        x = x2;
        y = y2
    }
})
function drawcircle(x,y){
     ctx.beginPath();
     ctx.arc(x,y,size,0,Math.PI * 2)
     ctx.fillStyle=color;
     ctx.fill()
}
function drawline(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle= color
    ctx.lineWidth = size * 2;
    ctx.stroke()
}
function updatesizeonsecreen(){
    sizeelement.innerText = size ;
}
colorelemt.addEventListener('change',(e)=>{
    color = e.target.value
})
increasebutt.addEventListener('click',()=>{

    size += 5
    if( size > 50){
        size = 50
    }
    updatesizeonsecreen()
})
decreasebutt.addEventListener('click',()=>{

    size -= 5
    if( size < 5){
        size = 5
    }
    updatesizeonsecreen()
})
clearEl.addEventListener('click',()=> ctx.clearRect(0,0,canvas.width,canvas.height))