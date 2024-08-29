const inser=document.getElementById('insert')
window.addEventListener('keydown',(event)=>{

    inser.innerHTML =`

    <div class="key">
           ${event.key === '' ? 'Space' : event.key}
           <small>event.key</small>
       </div>
       <div class="key">
            ${event.keyCode}
           <small>event.keyCode</small>
       </div>
       <div class="key">
           ${event.code}
          <small>event.Code</small>
      </div>
      
`
})

