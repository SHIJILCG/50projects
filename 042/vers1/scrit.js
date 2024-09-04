const result=document.getElementById('result');
const filter=document.getElementById('Filter');

const listitems=[];
getdata()
async function getdata() {
    const res = await fetch('https://randomuser.me/api?results=50');
    const data= await res.json();
    result.innerHTML = '';
    data.results.forEach( user => {
          const userEl =document.createElement('li');
          listitems.push(userEl);
          userEl.innerHTML = `
             <img src="${user.picture.large}" alt="${user.name.first}">
             <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city},${user.location.country}</p>
              </div>
          `
          result.appendChild(userEl)
    });
}

filter.addEventListener('input',(e)=> filterdata(e.target.value))



function filterdata(value){
    listitems.forEach(item => {
        console.log(item.innerText)
        if(item.innerText.toLowerCase().includes(value.toLowerCase())){
              item.classList.remove('hide')
        }else{
            item.classList.add('hide')

        }
    })
}