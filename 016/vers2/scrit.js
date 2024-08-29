const smallcups=document.querySelectorAll('.cup-small');
const percetage=document.getElementById('percetage');
const remanied=document.getElementById('remained');

fillthebigcup()
smallcups.forEach((cup,index)=>{
    cup.addEventListener('click',()=> makefull(index))
})

function makefull(index){
    if(smallcups[index].classList.contains('full') && !smallcups[index].nextElementSibling.classList.contains('full')){
        index --
    }
    smallcups.forEach((cup,index2)=>{
        if(index2 <= index){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    }) 

 fillthebigcup()
}

function fillthebigcup(){
    const filledcups=document.querySelectorAll('.cup-small.full').length;
    const allcups=smallcups.length;
    if(filledcups === 0){
        percetage.style.visibility ='hidden';
        percetage.style.height = 0;
    }else{
        percetage.style.visibility ='visible';
        percetage.style.height = `${ filledcups / allcups * 330}px`;
        percetage.innerText=`${ filledcups / allcups * 100}%`;
    }
    if(filledcups === allcups){
        remanied.style.visibility ='hidden';
        remanied.style.height = 0;
    }else{
        remanied.style.visibility ='visible';
        Litters.innerText= `${250 * (allcups -filledcups)/1000 }L`;
    }
}