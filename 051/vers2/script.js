const timer = document.getElementById('timer');
const plybtn=document.getElementById('play');
const resetbtn=document.getElementById('reset');
const root=document.querySelector(':Root')

let playing = false;
let settime = 60
let currenttime = settime;

const intervel=setInterval(run,1000)
plybtn.addEventListener('click',()=>{
       playing = !playing;
       plybtn.classList.toggle('bg-green-500');
       const plyicon=plybtn.querySelector('i');
       plyicon.classList.toggle('fa-play');
       plyicon.classList.toggle('fa-pause')


})


function run(){
   if(playing){
    currenttime -=1;
    if(currenttime <= 0){
        currenttime= 60
       clearInterval(intervel)  
    }
    let minutes = Math.floor(currenttime / 60);
    let seconds  = currenttime % 60;
    timer.innerHTML = `${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;
    root.style.setProperty('--degree',caldeg())
   }
}

function caldeg(){
    return `${360 -(currenttime/settime) * 360}deg`
}

resetbtn.addEventListener('click',()=>{
    playing = false
    plybtn.classList.remove('bg-green-500');
    const plyicon=plybtn.querySelector('i');
    plyicon.classList.add('fa-play');
    plyicon.classList.remove('fa-pause');
    root.style.setProperty('--degree',`0deg`)
    currenttime= 60
    timer.innerHTML = `00:00`;

})