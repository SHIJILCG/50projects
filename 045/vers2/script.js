const openbtn=document.querySelector('.btn-open');
const closebtn=document.querySelector('.btn-close');
const nav=document.querySelectorAll('.nav')

openbtn.addEventListener('click',()=>{
     nav.forEach(nv=> nv.classList.add('visible'));
})
closebtn.addEventListener('click',()=>{
    nav.forEach(nv=> nv.classList.remove('visible'));
})