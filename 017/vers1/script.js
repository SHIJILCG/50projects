const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
const form=document.getElementById('form')
const search=document.getElementById('search');
const main=document.getElementById('main')
getMovie(API_URL)
async function getMovie(url) {
    const res=await fetch(url)
    const data=await res.json();
    showmovies(data.results)
}

function showmovies(movies){
    main.innerHTML='';
    movies.forEach((movie) => {
        const {title,poster_path,vote_average,overview}=movie

        const movieEl=document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML=`
            <img src="${IMG_PATH + poster_path}" alt="">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getclassbyRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>overview</h3>
                ${overview}
            </div>
       `;
        main.appendChild(movieEl)
    });
}
function getclassbyRate(vote){
   if(vote >= 8){
      return 'green'
   }else if( vote >= 5){
       return 'orange'
   }else{
     return 'red'
   }
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const serchTerm=search.value;
    if(serchTerm && serchTerm !== ''){
        getMovie(SEARCH_API + serchTerm)
        search.value=''
    }else{
        window.location.reload();

    }

})