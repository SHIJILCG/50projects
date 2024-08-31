const button=document.getElementById('button');
const toasts=document.getElementById('toasts');

const message=['Message one','Message Two','Message Three','Message Four'];
const types = ['info','success','error']


button.addEventListener('click',()=> cratenotification())

function cratenotification(message = null , type = null){
    const toastsEl=document.createElement('div');
    toastsEl.classList.add('toast');
    toastsEl.classList.add(type ? type : getrandomtype())
    toastsEl.innerText= message ? message : getramommessage();
    toasts.appendChild(toastsEl)

    setTimeout(()=>{
        toastsEl.remove()
    },3000)
}


function getramommessage(){
    return message[Math.floor(Math.random() * message.length)]
}
function getrandomtype(){
    return types[Math.floor(Math.random() * types.length)]
}