let counts=document.querySelectorAll('.count');


counts.forEach( counter =>{
    counter.innerHTML ='0'
    const updatecounter=()=>{
        const target=+counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 2000;
        if(c <target){
            counter.innerText=`${Math.ceil(c + increment)}`
            setTimeout(updatecounter,1)
        }
    }
    updatecounter()
})