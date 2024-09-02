const loveme=document.querySelector('.loveme');
const times = document.querySelector('#times');

let counter = 0;
let timesclicked = 0
loveme.addEventListener('click',(e)=>{
    
     if(counter === 0){
        counter = new Date().getTime()
     }else{
        if((new Date().getTime() - counter < 800)){
            createheart(e);
            counter =0
        }else{
            counter = new Date().getTime()
        }
     }
})

function createheart(e){
    const heart=document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');
    const x= e.clientX;
    const y= e.clientY;
    const offesetleft=e.target.offsetLeft;
    const offesettop=e.target.offsetTop;

    const xinside = x - offesetleft
    const yinside = y - offesettop
    console.log(xinside,yinside)
    heart.style.top = `${yinside}px` ;
    heart.style.left = `${xinside}px` ;
    loveme.appendChild(heart)
    times.innerHTML = ++timesclicked;
    setTimeout(() => heart.remove(), 5000);
}