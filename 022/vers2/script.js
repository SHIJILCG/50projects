const canvas=document.getElementById('canvas');
const ctx= canvas.getContext('2d');
const incebtn=document.getElementById('increment')
const decebtn=document.getElementById('decrement')
const sizeEl=document.getElementById('size')
const colorEl=document.getElementById('color')
const clear=document.getElementById('clear')
 let color='black'
 let size = 10;
 let x;
 let y;
 let ispressed = false;
canvas.addEventListener('mousedown',(e)=>{
    ispressed = true;
     x= e.offsetX;
     y= e.offsetY;
})

canvas.addEventListener('mouseup',(e)=>{
    ispressed = false;
    x= undefined;
    y= undefined;
})

canvas.addEventListener('mousemove',(e)=>{
     if(ispressed){
        x2= e.offsetX;
        y2= e.offsetY;
        drawcircle(x2,y2);
        drawline(x,y,x2,y2);
        x = x2;
        y = y2;
     }
})

colorEl.addEventListener('change',(e)=>{
    color = e.target.value;
})
incebtn.addEventListener('click',()=>{
    size += 5;
    if(size > 50){
        size = 50;
    }
    updatesizeonsecreen()
})
decebtn.addEventListener('click',()=>{
    size -= 5;
    if(size < 5){
        size = 5;
    }
    updatesizeonsecreen()
})
clear.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})
function drawcircle(x,y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle=color;
    ctx.fill()
}
function drawline(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2;
    ctx.stroke()
}
function updatesizeonsecreen(){
    sizeEl.innerText = size; 
}
