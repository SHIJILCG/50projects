const imgd=document.getElementById('img');
const leftbtn=document.getElementById('left');
const rightbtn=document.getElementById('right');
const img=document.querySelectorAll('#img img');

let idx = 0;

let intervel = setInterval(run,2000);


function run(){
    idx++
    cahangeimg()
}

function cahangeimg(){
   if(idx > img.length - 1) {
       idx = 0
   }else if(idx < 0){
     idx = img.length - 1;
   }
   imgd.style.transform = `translatex(${-idx * 500}px)`
}
function resetinterval(){
    clearInterval(intervel);
    intervel = setInterval(run, 2000)
}
leftbtn.addEventListener('click',()=>{
    idx--;
    cahangeimg()
    resetinterval()
})
rightbtn.addEventListener('click',()=>{
    idx++;
    cahangeimg()
    resetinterval()
})