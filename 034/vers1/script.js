const nums=document.querySelectorAll('.nums span');
const counter=document.querySelector('.counter');
const final=document.querySelector('.final');
const replay=document.getElementById('replay');

runAnimation();
function restDom(){
    counter.classList.remove('hide');
    final.classList.remove('show');
    nums.forEach((num)=>{
        num.classList.value = ''
    })
    nums[0].classList.add('in')
}
function runAnimation(){
    nums.forEach((num, indx)=>{
         const nextlast = nums.length - 1;
         num.addEventListener('animationend', (e)=>{
             if(e.animationName === 'goin' && indx !== nextlast){
                    num.classList.remove('in');
                    num.classList.add('out');
             }else if(e.animationName === 'goout' && num.nextElementSibling){
                   num.nextElementSibling.classList.add('in');
             }else{
                counter.classList.add('hide');
                final.classList.add('show')
             }
         })
    })
}
replay.addEventListener('click',()=> restDom())