const sounds=['applause', 'Boo', 'gaps', 'tada', 'victory', 'wrong'];
 

sounds.forEach(sound =>{
    const btn=document.createElement('button')
    btn.classList.add('btn');
    btn.innerText=sound
    btn.addEventListener('click',()=>{
        stopsongs()
        document.getElementById(sound).play()
    })
    document.getElementById('button').appendChild(btn)
})

function stopsongs(){
    sounds.forEach((elem)=>{
        const song=document.getElementById(elem)
        song.pause()
        song.currentTime=0;
    })
}