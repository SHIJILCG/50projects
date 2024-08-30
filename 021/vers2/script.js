const fill=document.querySelector('.fill');
const emptys = document.querySelectorAll('.empty');;

 fill.addEventListener('dragstart',dragstart);
 fill.addEventListener('dragend',dragEnd)
 
  for(let empty of emptys){
      empty.addEventListener('dragover',dragOver);
      empty.addEventListener('dragenter',dragEnter);
      empty.addEventListener('dragleave',dragLeave);
      empty.addEventListener('drop',dragDrop)
  }
 function dragstart(){
    this.className +=' hold';
    setTimeout(() => this.className='visiible');
 }

 function dragEnd(){
   this.className ='fill'
 }
 function dragOver(e){
   e.preventDefault()
 }
 function dragEnter(e){
   e.preventDefault()
   this.className += ' hovered11'
 }

 function dragLeave(){
   this.className = 'empty';
 }

 function dragDrop(){
    this.className = 'empty';
    this.append(fill)
 }
