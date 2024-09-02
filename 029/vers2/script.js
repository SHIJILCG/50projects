const loveme=document.querySelector('.loveme');
const times=document.getElementById('times');
let counter=0;
let heartcoutnt = 0;
loveme.addEventListener('click',(e)=>{
      if(counter === 0) {
         counter = new Date().getTime();
      }else{
         if(new Date().getTime() - counter < 800){
             createheart(e);
             counter =0;
         }else{
            counter = new Date().getTime();
         }
      }
})


function createheart(e){
   const x = e.clientX;
   const y = e.clientY;
   const offsetY = e.target.offsetTop;
   const offsetX= e.target.offsetLeft;
   const xinside = x - offsetX;
   const yinside = y - offsetY
   const heart=document.createElement('i');
   heart.classList.add('fas');
   heart.classList.add('fa-heart');
   heart.style.top = `${yinside}px`;
   heart.style.left = `${xinside}px`;
   loveme.appendChild(heart);
   times.innerText = ++heartcoutnt;
   setTimeout(() => {
     heart.remove();
   }, 2000);
}