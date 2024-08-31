const heder=document.getElementById('header');
const title=document.getElementById('title');
const cardexcert=document.getElementById('card-excert');
const profile_img=document.getElementById('profile_img');
const name=document.getElementById('name');
const date=document.getElementById('date');
const animb=document.querySelectorAll('.animated-bg');
const animbtext=document.querySelectorAll('.animated-bg-text')

setTimeout(setitem,2500)
function setitem(){
    heder.innerHTML=` <img src="img/Customer-img-Heineken-2x.webp" alt="">`;
    title.innerHTML=`Lorem ipsum dolor, sit amet consectetur`;
    cardexcert.innerHTML=` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ducimus sed minus at unde praesentium accusantium`;
    profile_img.innerHTML=` <img src="img/l (7).jpg" alt="">`;
    name.innerHTML=`John De`;
    date.innerHTML=`Oct 08,2020`;
     animb.forEach( ani => ani.classList.remove('animated-bg'))
     animbtext.forEach( ani => ani.classList.remove('animated-bg-text'))
}
