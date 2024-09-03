const conainer=document.getElementById('container');
const SQUARES = 500;
const colors = ['#e74c3c','#8e44aed','#3498db','#e67e22','#2ecc71'];
    for(let i=0;i< 500;i++){
        const squr=document.createElement('div');
        squr.classList.add('square');
        squr.addEventListener('mouseover',()=> changecolor(squr));
        squr.addEventListener('mouseout',()=> removecolor(squr));
        conainer.appendChild(squr)
    }
function changecolor(elem){
   const color = getrandomcolor();
   elem.style.background = color;
   elem.style.boxShadow=`0 0 2px ${color},0 0 10px ${color}`
}

function removecolor(elem){
    elem.style.background = 'rgb(43, 42, 42)';
   elem.style.boxShadow=`rgb(0, 0, 0) 0px 0px 2px`
 }


function getrandomcolor(elem){
    return colors[Math.floor(Math.random() * colors.length)]
}