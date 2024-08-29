const button=document.querySelectorAll('.ripple');
button.forEach(butt =>{
    butt.addEventListener('click',function(e){
        const x= e.clientX;
        const y= e.clientY;
        const buttonTop=e.target.offsetTop;
        const buttonLsft=e.target.offsetLeft;
        const xInside= x - buttonLsft;
        const yInside= y - buttonTop;
        const circleA =document.createElement('span');
        circleA.classList.add('circle')
        circleA.style.top=yInside + 'px';
        circleA.style.left= xInside + 'px';
        this.appendChild(circleA);
        setTimeout(()=> circleA.remove(),500)
    })
})