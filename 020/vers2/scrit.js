const button=document.querySelectorAll('.butt');


button.forEach( butts =>{
    butts.addEventListener('click',function(e){
         const x= e.clientX;
         const y= e.clientY;
         const potop= e.target.offsetTop;
         const poleft=e.target.offsetLeft;
         const xInside= x- poleft;
         const yInside = y - potop;
         const circleA=document.createElement('span');
         circleA.classList.add('circle');
         circleA.style.top= yInside + 'px';
         circleA.style.left = xInside + 'px';
         this.appendChild(circleA);
    })
})