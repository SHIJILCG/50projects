const hourEL=document.querySelector('.hour')
const minuteEL=document.querySelector('.minute')
const secondEL=document.querySelector('.second')
const timeEl=document.querySelector('.time')
const dateEl=document.querySelector('.date')
const toggleEl=document.querySelector('.toggle')

const days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Nov","Dec"]


toggleEl.addEventListener('click',(e)=>{
    const html = document.querySelector('html');
     if(html.classList.contains('dark')){
        html.classList.remove('dark');
        e.target.innerHTML='Dark mode';
     }else{
        html.classList.add('dark');
        e.target.innerHTML='Light mode';
     }
})

function setTime(){
    const time=new Date();
    const mont=time.getMonth();
    const day=time.getDay();
    const date=time.getDate();
    const hours=time.getHours();
     const hoursforclock=hours % 12;
     const minutes=time.getMinutes();
     const second=time.getSeconds();
     const ampm = hours >=12 ? 'PM' : 'AM'
     hourEL.style.transform =`translate(-50%,-100%) rotate(${scale(hoursforclock,0,11,0,360)}deg)`;
     minuteEL.style.transform =`translate(-50%,-100%) rotate(${scale(minutes,0,59,0,360)}deg)`;
     secondEL.style.transform =`translate(-50%,-100%) rotate(${scale(second,0,59,0,360)}deg)`;
    timeEl.innerHTML=`${hoursforclock === 0 ? 12: hoursforclock}:${minutes < 10 ?`0${minutes}`:minutes} ${ampm}`
    dateEl.innerHTML=`${days[day]},${months[mont]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
setTime()
setInterval(setTime,1000)