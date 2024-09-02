const APIURL = 'https://api.github.com/users/'
const form=document.getElementById('form');
const search=document.getElementById('search');
const main=document.getElementById('main');

async function getuser(username){

    try{
        const {data} = await  axios(APIURL + username);
        crateusercard(data)
        getrepos(username)
    }catch(err){
        if(err.response.status == 404){
            createerrorcard('No Profile With The User Name');
        }
        
    }
    
     
}
async function getrepos(username){

    try{
        const {data} = await  axios(APIURL + username + '/repos?sort=created');
        addrepostocard(data)
    }catch(err){
        if(err.response.status == 404){
            createerrorcard('Problem fetching repos');
        }
        
    }
    
     
}
function crateusercard(user){
     const cardHTML=`
                   <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul>
                    <li> ${user.followers} <strong>Flollowers</strong></li>
                    <li> ${user.following} <strong>Flollowing</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>
                <div id="repos">
                </div>
            </div>
        </div>
     `
     main.innerHTML = cardHTML;
}
function createerrorcard(msg){
     const cardHTML =`
       <div class="card">
           <h1>${msg}</h1>
       </div>
     `
     main.innerHTML = cardHTML;
}
function addrepostocard(repos){
   const reposEl=document.getElementById('repos')
   repos.slice(0,10).forEach( repo => {
        const repoElem=document.createElement('a');
        repoElem.classList.add('repos');
        repoElem.href = repo.html_url
        repoElem.target ='_blink'
        repoElem.innerText = repo.name;
        reposEl.appendChild(repoElem);
   });
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const user=search.value;
    if(user){
        getuser(user);
        search.value ='';
    }
})
