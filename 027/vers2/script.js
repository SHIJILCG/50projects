const butt=document.getElementById('butt');
const toasts=document.getElementById('toasts');

const messages=['First message','Second message','Third message','Four message'];
const type = ['won','draw','loss']

butt.addEventListener('click',()=> cratenotification())

function cratenotification(){
    const toastsEl=document.createElement('div');
    toastsEl.classList.add('toast');
    toastsEl.classList.add(getrandomtype());
    toastsEl.innerText= getrandommessage();
    toasts.appendChild(toastsEl)
    setTimeout(()=>{
        toastsEl.remove()
    },3000)
}

function getrandommessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}
function getrandomtype(){
    return type[Math.floor(Math.random() * type.length)]
}