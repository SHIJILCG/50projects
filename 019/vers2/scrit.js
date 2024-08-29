const toggle=document.getElementById('toggle');
const dateEl=document.querySelector('.date');
const timeEl=document.querySelector('.time');
const hourEl=document.querySelector('.hour');
const minuteEl=document.querySelector('.minutes');
const secondEl=document.querySelector('.seconds');

const days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Nov","Dec"]

toggle.addEventListener('click',()=>{
     const html=document.querySelector('html');
     if(html.classList.contains('active')){
        html.classList.remove('active');
        toggle.innerHTML='Light Mode'
     }else{
        html.classList.add('active')
        toggle.innerHTML='Dark Mode'
     }
})

function makeclock(){
    const time=new Date();
    const day=time.getDay();
    const month=time.getMonth();
    const date=time.getDate();
    const hour=time.getHours();
    const minute=time.getMinutes();
    const second=time.getSeconds();
    const hourin12= hour % 12;
    const amorpm= hour < 12 ? 'AM' : 'PM';
    hourEl.style.transform=`translate(-50%,-100%)rotate(${scale(hourin12,0,11,0,360)}deg)`;
    minuteEl.style.transform=`translate(-50%,-100%)rotate(${scale(minute,0,56,0,360)}deg)`;
    secondEl.style.transform=`translate(-50%,-100%)rotate(${scale(second,0,56,0,360)}deg)`;
    dateEl.innerHTML=`${days[day]} ${months[month]} <span id=circular>${date}</span>`;
    timeEl.innerHTML=`${hourin12 === 0 ? 12 : hourin12} : ${minute < 10 ? `0` : minute} ${amorpm}`

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
setInterval(makeclock,1000)