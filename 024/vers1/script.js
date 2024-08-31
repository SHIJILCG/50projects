const header=document.getElementById('header');
const title=document.getElementById('title');
const excerpt=document.getElementById('excerpt');
const profile_img=document.getElementById('profile_img');
const name=document.getElementById('name');
const date=document.getElementById('date');

const animated_bag =document.querySelectorAll('.animated-bg');
const animated_bag_text =document.querySelectorAll('.animated-bg-text');
setTimeout(getdata,2500);
function getdata(){
    header.innerHTML = `<img src="img/Customer-img-Heineken-2x.webp" alt="">`;
    title.innerHTML = 'Lorem ipsum dolor sit amet consectetur';
     excerpt.innerHTML=`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae est magnam! Velit voluptas veniam alias magni saepe? Soluta, istinctio.`;
     profile_img.innerHTML = ` <img src="img/l (7).jpg" alt="">`;
     name.innerHTML=`John Doe`;
     date.innerHTML =`Oct 08,2020`;
     animated_bag.forEach(bg => bg.classList.remove('animated-bg'))
     animated_bag_text.forEach(bg => bg.classList.remove('animated-bg-text'))
}
