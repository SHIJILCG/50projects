const background=document.getElementById('background');
const password = document.getElementById('password');


password.addEventListener('input',(e)=>{
      const value = e.target.value;
      const length = value.length;
      const blurvlaue = 20 - length * 2;
      background.style.filter = `blur(${blurvlaue}px)`;
})