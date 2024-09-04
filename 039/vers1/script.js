const bckimg = document.getElementById('background');
const input = document.getElementById('password');


input.addEventListener('input',(e)=>{
    const input= e.target.value;
    length = input.length;
    const blurvalue = 20 - length * 2;
    bckimg.style.filter =`blur(${blurvalue}px)`
})