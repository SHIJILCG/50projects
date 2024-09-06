const resetbtn=document.getElementById('reset');
const playbtn=document.getElementById('play');
const timerEl=document.getElementById('timer');
const root=document.querySelector(':root');


const totalseconds = 60;
let playing = false;
let currentseconds = totalseconds;
timerEl.innerText = formatTimer(totalseconds);
const timerintervel=setInterval(run, 1000);

function formatTimer(seconds){
    const minutes = Math.floor(seconds / 60);
    const second= seconds % 60;
    return `${minutes < 10 ? `0${minutes}`:minutes}:${second < 10 ? `0${second}`:second}`;
    
}

playbtn.addEventListener('click',()=>{
       playing = !playing;
       playbtn.classList.toggle('play');
       playbtn.classList.toggle('bg-green-500');
       const playicons = playbtn.querySelector('i');
       playicons.classList.toggle('fa-play');
       playicons.classList.toggle('fa-pause');

}) 
resetbtn.addEventListener('click', resetall)

function run(){
    if(playing){
        currentseconds -= 1;
        if(currentseconds <= 0){
            clearInterval(timerintervel);
            resetall();
        }
        timerEl.innerText = formatTimer(currentseconds);
        root.style.setProperty('--degrees',calcDEg())
    }
}
function calcDEg(){
    return `${360 - (currentseconds / totalseconds) * 360}deg`;
}

function resetall(){
    playing = false;
    playbtn.classList.remove('play');
    playbtn.classList.remove('bg-green');
    const playicons = playbtn.querySelector('i');
    playicons.classList.add('fa-play');
    playicons.classList.remove('fa-pause')
    currentseconds = 60;
    timerEl.innerText = formatTimer(totalseconds);
    root.style.setProperty('--degrees','0deg');
}
