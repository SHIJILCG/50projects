const imgcon = document.querySelector(".img-container");
const leftbtn = document.getElementById("left");
const rightbtn = document.getElementById("right");
const allimages = document.querySelectorAll(".img-container img");
let indx = 1;

let intervel = setInterval(run,2000)
function stopintervel(){
    clearInterval(intervel);
    intervel= setInterval(run,2000)
}
function changeimg() {
  if (indx > allimages.length - 1) {
    indx = 0;
  } else if (indx < 0) {
    indx = allimages.length - 1;
  }

  imgcon.style.transform = `translateX(${-indx * 500}px)`;
}


function run(){
    indx++;
    changeimg();
}

leftbtn.addEventListener('click',()=>{
    indx--;
    changeimg();
    stopintervel();
})
rightbtn.addEventListener('click',()=>{
    indx++;
    changeimg();
    stopintervel();
})