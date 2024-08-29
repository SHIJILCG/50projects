const butts=document.querySelectorAll('.faq-toggle');
const cards=document.querySelectorAll('.card ')
const buttitem1=document.querySelectorAll('.fa-chevron-down');
const buttitem2=document.querySelectorAll('.fa-times');

butts.forEach((butt,index)=>{
    butt.addEventListener('click',()=>{
    cards[index].classList.toggle('mycard')
})
})