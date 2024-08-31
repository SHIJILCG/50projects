const slidercontainer=document.querySelector('.slider-container');
const slideleft=document.querySelector('.left-slide')
const slideright=document.querySelector('.right-slide')
const downbutt=document.querySelector('.down-button')
const upbutt=document.querySelector('.up-button')
const slideslength=slideright.querySelectorAll('div').length

let actibeslideindex=0;
slideleft.style.top=`-${(slideslength - 1) * 100}vh`

upbutt.addEventListener('click',()=> changeslide('up'))

downbutt.addEventListener('click',()=> changeslide('down'))

const changeslide = (dirextion)=>{
    const slideHeight = slidercontainer.clientHeight

    if(dirextion === 'up'){
        actibeslideindex++
        if(actibeslideindex > slideslength - 1){
            actibeslideindex = 0
        }
    }else if(dirextion === 'down'){
        actibeslideindex--
        if(actibeslideindex < 0){
            actibeslideindex = slideslength - 1
        }
    }
    slideright.style.transform=`translateY(-${actibeslideindex * slideHeight}px)`;
    slideleft.style.transform=`translateY(${actibeslideindex * slideHeight}px)`

}