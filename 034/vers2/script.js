const nums=document.querySelectorAll('.count span');
const counter = document.querySelector('.counter');
const final=document.querySelector('.final');
const reload=document.getElementById('reload')

runAnimation()
function reloadtheanimarion(){
    counter.classList.remove('hide');
    final.classList.remove('show');
    nums.forEach(num =>{
        num.classList.remove('in');
        num.classList.remove('out');
    })
    nums[0].classList.add('in')
}
function runAnimation(){
    nums.forEach((num,indx) => {
        const last=nums.length - 1;
        num.addEventListener('animationend', (e)=>{
            
            if(e.animationName === 'in' && indx !== last){
                
               num.classList.remove('in');
               num.classList.add('out');
            }else if(e.animationName === 'out' && num.nextElementSibling){
                
                 num.nextElementSibling.classList.add('in');
            }else{
                console.log("jgkfjgfkjg")
               counter.classList.add('hide');
               final.classList.add('show');
            }
        })
   })
}
reload.addEventListener('click',()=> reloadtheanimarion())