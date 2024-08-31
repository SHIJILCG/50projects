const container=document.querySelector('.container');
const leftside=document.querySelector('.left-slide');
const rightside=document.querySelector('.right-slide');
const downbutton=document.querySelector('.downbutton');
const upbutton=document.querySelector('.upbutton');
const slidelegth=rightside.querySelectorAll('div').length;

leftside.style.top=`-${ (slidelegth - 1) * 100}vh`;
let theindexvalue=0;

upbutton.addEventListener('click', () => makechange('up'));

downbutton.addEventListener('click', () => makechange('down'))



function makechange(value){
    const slideHeight=container.clientHeight
   if(value === 'up'){
       theindexvalue++
       if(theindexvalue > slidelegth -1){
           theindexvalue = 0
       }

   }else if(value === 'down'){
     theindexvalue--
    if(theindexvalue < 0){
        theindexvalue = slidelegth - 1;
    }
   }
   rightside.style.transform=`translateY(-${theindexvalue * slideHeight}px)`;
   leftside.style.transform=`translateY(${theindexvalue * slideHeight}px)`;
}