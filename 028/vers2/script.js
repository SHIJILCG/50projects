const APIURL = 'https://api.github.com/users/'
const form=document.getElementById('form');
const search=document.getElementById('search');
const container=document.getElementById('container');

async function getuser(name) {
    try{
        const {data} = await axios(APIURL + name);
        createuser(data)
        getrepos(name);
    }
    catch (err){
         console.log(err,"error!!!!")
         createerrorcard('No User In This Name');
    }

}
async function getrepos(name) {
    try{
        const {data} = await axios(APIURL + name + '/repos?sort=created');
        addrepostocard(data)
        
    }
    catch (err){
         console.log(err,"error!!!!");
         createerrorcard('Erro!! fetching repos faild');
    }

}


 function createuser(data){
     const cardEl=`

           <div class="card">
        <div>
            <img src="${data.avatar_url}" alt="">
        </div>
         <div class="user-info">
            <h1>${data.name}</h1>
            <p>${data.bio ? data.bio : 'No Bio for the user'}</p>
            <ul>
                <li>${data.followers} <strong>Follwers</strong></li>
                <li>${data.following} <strong>Follwing</strong></li>
                <li>${data.public_repos} <strong>repos</strong></li>
            </ul>
            <div id="repos">
            </div>
         </div>
      </div>

     `
     container.innerHTML = cardEl;
 }
function createerrorcard(msg){
    const cardEl=`

    <div class="card">
       <h1>${msg}</h1>
     </div>

     `
     container.innerHTML = cardEl;
}
function addrepostocard(data){
    const repos=document.getElementById('repos');
    data.slice(0,10).forEach( item => {
         const aEl=document.createElement('a');
         aEl.classList.add('repo');
         aEl.href = data.html_url
         aEl.target ='_blink'
         aEl.innerText = item.name;
         repos.appendChild(aEl);
    });
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
      let name = search.value;
      if(name){
          getuser(name);
          search.value = ''
      }
})