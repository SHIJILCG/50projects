const slids=document.querySelectorAll('.slide');
const left=document.getElementById('left');
const right=document.getElementById('right');
const body=document.body;
let countet=0;
left.addEventListener('click',()=>{

     countet -- ;
     if(countet < 0){
        countet = slids.length - 1;
     }

        changebackground();
        changeslider()
})
right.addEventListener('click',()=>{
    
    countet ++ ;
    if(countet > slids.length - 1){
       countet = 0;
    }

       changebackground();
       changeslider()
})


function changebackground(){

    body.style.backgroundImage = slids[countet].style.backgroundImage;
}

function changeslider(){

    slids.forEach((slid,index)=>{
         if(index === countet){
            slid.classList.add('active');
         }else{
            slid.classList.remove('active')
        }
    })
}