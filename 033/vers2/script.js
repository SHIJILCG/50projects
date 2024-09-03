const add=document.getElementById('add');
const notes= JSON.parse(localStorage.getItem('notes'))
add.addEventListener('click',()=> createnotes());
if(notes){

    notes.forEach( note => createnotes(note))
}



function createnotes(text = ''){
    console.log(text)
    const note=document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
          <div class="tooles">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>

    `
    
    const editbtn = note.querySelector('.edit');
    const deletebtn = note.querySelector('.delete');
    const mainbtn = note.querySelector('.main');
    const textarea = note.querySelector('textarea');
    textarea.value = text;
    mainbtn.innerHTML = marked(text)
    deletebtn.addEventListener('click',()=> note.remove());
    editbtn.addEventListener('click',()=>{
        textarea.classList.toggle('hidden');
        mainbtn.classList.toggle('hidden')
    })
    textarea.addEventListener('input',(e)=>{
         const {value} = e.target;
         mainbtn.innerHTML = marked(value);
         updatLS();
    })
    document.body.appendChild(note);
   
}

function updatLS(){
    const notext = document.querySelectorAll('textarea');
    const array = [];
    notext.forEach( note =>{
         array.push(note.value);
    })
    localStorage.setItem('notes', JSON.stringify(array));
}