const ratings=document.querySelectorAll('.rating');
const ratingscontainer=document.querySelector('.rating-container');
const send=document.querySelector('#send')
const panel=document.querySelector('#panel');


ratingscontainer.addEventListener('click',(e)=>{
    if(e.target.parentNode.classList.contains('rating')){
        removeactive()
         e.target.parentNode.classList.add('active');
         selectedRating = e.target.nextElementSibling.innerHTML;
         console.log(selectedRating)
    }
})

send.addEventListener('click',(e)=>{
      panel.innerHTML = `
         <I class="fas fa-heart"></i>
         <strong>Thank you!<strong>
         <br>
         <strong>Feedback: ${selectedRating}</strong>
         <p>We'll use your feedback to improve our coustomer support</p>
      `
})

function removeactive(){
    for(let i=0; i < ratings.length; i++){
        ratings[i].classList.remove('active')
    }
}