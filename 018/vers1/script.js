const body=document.body;
const slides=document.querySelectorAll('.slide');
const left=document.getElementById('left');
const right=document.getElementById('right');

let activeslide=0;

 left.addEventListener('click',()=>{
    activeslide --;
    if(activeslide < 0){
         activeslide = slides.length - 1;
    }
    setbgTobody()
    setactiveslides()
 })

 right.addEventListener('click',()=>{
    activeslide ++;
    if(activeslide > slides.length - 1){
         activeslide = 0;
    }
    setbgTobody()
    setactiveslides()
 })
setbgTobody()
function setbgTobody(){
    body.style.backgroundImage = slides[activeslide].style.backgroundImage;
}

function setactiveslides(){
    slides.forEach(element => {
         element.classList.remove('active')
    });
    slides[activeslide].classList.add('active')
}