const smallcups=document.querySelectorAll('.cup-small');
const litters=document.getElementById('liters');
const percetage=document.getElementById('percetage');
const remained=document.getElementById('remained');
updatebigcup()
smallcups.forEach((cup,indx) =>{
    cup.addEventListener('click',()=> Highlightcups(indx))
})

function Highlightcups(idx){
    if(smallcups[idx].classList.contains('full') && !smallcups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }
    smallcups.forEach((cup,indx2) =>{
           if(indx2 <= idx){
              cup.classList.add('full')
           }else{
            cup.classList.remove('full')

           }
    }) 
    updatebigcup()
}

function updatebigcup(){
    const fullcups=document.querySelectorAll('.cup-small.full').length;
    const totalcup=smallcups.length
    if(fullcups === 0){
        percetage.style.visibility='hidden'
        percetage.style.height=0;
    }
    else{
        percetage.style.visibility='visible';
        percetage.style.height=`${fullcups / totalcup * 330}px`;
        percetage.innerText= `${fullcups / totalcup * 100}%`;
    }
    if(fullcups === totalcup){
        remained.style.visibility='hidden';
        remained.style.height =0;
    }else{
        remained.style.visibility='visible';
        litters.innerHTML=`${ (250 * (totalcup-fullcups))/1000}L`
    }
}