const ratingcontainer=document.querySelector('.rating-container');
const ratings=document.querySelectorAll('.rating')
const panel=document.getElementById('panel')
const snd=document.getElementById('btn')
let thevalue = 'satisfied';
ratingcontainer.addEventListener('click',(e)=>{
    if(e.target.parentNode.classList.contains('rating')){
        removetheactiveclass()
        e.target.parentNode.classList.add('active');
        thevalue=e.target.nextElementSibling.innerHTML;
    }
})
function removetheactiveclass(){
     for(let i=0;i< ratings.length;i++){
          ratings[i].classList.remove('active');
     }
}


snd.addEventListener('click',()=>{
    panel.innerHTML=`
    <I class="fas fa-heart"></i>
      <strong>Thank you!<strong>
      <br>
      <strong>Feedback: ${thevalue}</strong>
      <p>We'll use your feedback to improve our coustomer support</p>
 `
})

    