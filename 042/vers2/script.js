const uluser = document.getElementById('result');
const filter = document.getElementById('filter')
let userarray = [];
getuser();
async function getuser() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const data = await res.json();
  uluser.innerHTML = ''
  data.results.forEach(user => {
          const userEl = document.createElement('li');
          userarray.push(userEl);
          userEl.innerHTML = `
             <img src="${user.picture.large}" alt="${user.name.first}">
             <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city},${user.location.country}</p>
              </div>
          `
          uluser.appendChild(userEl)
  });
}
filter.addEventListener('input',(e)=> makefilter(e.target.value))

function makefilter(value){
    userarray.forEach(item =>{
      console.log(item.innerText)
      if(item.innerText.toLowerCase().includes(value.toLowerCase())){
          item.classList.remove('hide')
       }
       else{
         item.classList.add('hide')
       }
    })
}
