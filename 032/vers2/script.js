const toggles=document.querySelectorAll('.toggle');
const cheap=document.querySelector('#cheap');
const good=document.querySelector('#good');
const fast=document.querySelector('#fast');

toggles.forEach( toggle =>{
    toggle.addEventListener('change',(e)=>{

        if(good.checked && cheap.checked && fast.checked ){
            if(good === e.target){
                cheap.checked = false;
            }
            if(cheap === e.target){
                fast.checked = false;
            }
            if(fast === e.target){
                good.checked = false;
            }
        }

    })
})