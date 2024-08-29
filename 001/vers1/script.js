let allpanels=document.querySelectorAll('.panel');
allpanels.forEach(element => {
    element.addEventListener('click',()=>{
        removingaciveclass()
        element.classList.add('active')
    })
});
function removingaciveclass(){
    allpanels.forEach(element => {
            element.classList.remove('active');
        })
}