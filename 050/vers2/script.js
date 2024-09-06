const playbtn=document.getElementById('play-butt');
const screens=document.querySelectorAll('.screen');
const inssects=document.querySelectorAll('.choose-insect-btn');
const playarea=document.querySelector('.game-container');
const thetimer=document.getElementById('thetimer');
const scoreEl=document.getElementById('score');
const message=document.querySelector('.message')
let insectsdetails={}
let seconds = 0;
let score =0;
playbtn.addEventListener('click',()=>{
     screens[0].classList.add('up');
})

inssects.forEach( insect =>{
     insect.addEventListener('click',()=>{
         const img= insect.querySelector('img');
         const src=img.getAttribute('src')
         const alt=img.getAttribute('alt');
         insectsdetails = {src,alt}
        screens[1].classList.add('up');
        setTimeout(createinsects,1000);
        setTimeout(runthetimer,1000);
     })
})


function createinsects(){
    const insect=document.createElement('div');
    insect.classList.add('insect');
    let top = Math.random() * (window.innerHeight - 200) + 100;
    let  left = Math.random() * (window.innerWidth - 200) + 100;
    insect.style.top = `${top}px`;
    insect.style.left = `${left}px`;
    insect.innerHTML = `<img src="${insectsdetails.src}" alt="${insectsdetails.alt}">`
    insect.addEventListener('click',caughttheinsect)
    playarea.appendChild(insect)
}
function caughttheinsect(){
    score++
    if(score > 20){
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score:${score}`
    this.remove();
    setTimeout(createinsects,1000);
    setTimeout(createinsects,1500);
}

function runthetimer(){
    setInterval(() => {
        let m =Math.floor( seconds / 60);
        let s = seconds % 60;
        console.log(m,s)
        seconds++
        thetimer.innerHTML = `Time:${m < 10 ? `0${m}`:m}:${ s < 10 ? `0${s}`: s}`
    }, 1000);
    
}