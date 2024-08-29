fetch('')
.then(response => response.json())
.then(data => console.log(data))

const jokeEl=document.getElementById('joke');
const jokenbtn=document.getElementById('jokeBtn')
jokenbtn.addEventListener('click',gerneratejoke)
gerneratejoke()

// function gerneratejoke(){
//     const config={
//         headers:{
//             'Accept':'application/json'
//         }
//     }   
//     fetch('https://icanhazdadjoke.com',config)
//     .then((response) => response.json())
//     .then((data) => {
//         jokeEl.innerHTML =data.joke
//     })
// }

async function gerneratejoke(){
    const config={
        headers:{
            'Accept':'application/json'
        }
    }   
   const res= await fetch('https://icanhazdadjoke.com',config)
   const data=await res.json()
   jokeEl.innerHTML =data.joke;
}