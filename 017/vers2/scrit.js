const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
const form=document.getElementById('form');
const search=document.getElementById('search');
const main=document.getElementById('main')
getmovie(API_URL)
async function getmovie(url) {
    const c = await fetch(url);
    const data = await c.json();
    createmovies(data.results)
}
function createmovies(movies){
    main.innerHTML=''
    movies.forEach((movie) => {
        const{title,poster_path,vote_average,overview}=movie;
        const mainEl=document.createElement('div');
        mainEl.classList.add('movie');
        mainEl.innerHTML=`
                <img src="${ IMG_PATH + poster_path}" alt="">
                <div class="movie-info">
                   <h3>${title}</h3>
                   <span class="${makecolorforrating(vote_average)}">${vote_average}</span>
                </div>
                <div class="overview">
                   <h2>overview</h2>
                   ${overview}
                </div>
        `
        main.appendChild(mainEl)
    });
}

function makecolorforrating(rating){
    if(rating >= 8){
        return 'green'
    }else if(rating >= 5){
        return 'green'
    }else{
        return 'red'
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchterm=search.value;
    if(searchterm && searchterm !== ''){
        getmovie( SEARCH_API + searchterm);
        search.value=''
    }else{
        window.location.reload();
    }
})