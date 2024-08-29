const left=document.querySelector('.left');
const right=document.querySelector('.right');
const container=document.querySelector('.container');


left.addEventListener('mouseenter',()=> container.classList.add('show-hoverleft'));
left.addEventListener('mouseleave',()=> container.classList.remove('show-hoverleft'));

right.addEventListener('mouseenter',()=> container.classList.add('show-hoverright'));
right.addEventListener('mouseleave',()=> container.classList.remove('show-hoverright'));