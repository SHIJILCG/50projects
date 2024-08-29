const counts=document.querySelectorAll('.count');

counts.forEach( elem =>{
    elem.innerHTML='0';
    const updatecounter=()=>{
       const targetvalue = +elem.getAttribute('data-target')
       const c = +elem.innerText;
       const incrementvalue= targetvalue / 2000;
       if( c < targetvalue ){
          elem.innerText =`${Math.ceil( c + incrementvalue)}`;
          setTimeout(updatecounter,1)

       }
    }
    updatecounter();
})