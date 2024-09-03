const toggles=document.querySelectorAll('.toggle')

const good=document.getElementById('good');
const Cheap=document.getElementById('Cheap');
const fast=document.getElementById('fast');

toggles.forEach(toggle => toggle.addEventListener('change',(e)=> dotthetrick(e.target)))

function dotthetrick(theclickedone){
    
    if(good.checked && Cheap.checked &&  fast.checked){
       if(good === theclickedone){
          fast.checked = false
       }
       if(Cheap === theclickedone){
          
          good.checked = false
       }
       if(fast === theclickedone){
        Cheap.checked = false
       }
    }
}