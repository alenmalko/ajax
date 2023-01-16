const url = 'http://www.omdbapi.com/?apikey=83256d1f&s=star%20wars&type=movie';
const fetchBtn = document.getElementById('fetch-btn');
fetchBtn.addEventListener('click', fetchData);

async function fetchData() {
    try {
        const response = await fetch(url);
        console.log(response);

        if (!response.ok) {
            throw new Error('HTTP Error! status: ' + response.status);
        }
        const movies = await response.json();
        console.log(movies);

        let displayMoviesHtml = "";
        for (let movie of movies.Search) {
            displayMoviesHtml += `
            <article>
                <img src="${movie.Poster}">
                <h2>${movie.Title}</h2>
                <i>${movie.Year}</i>
            </article>
            `;
        }
        document.getElementById('movie-list').innerHTML = displayMoviesHtml;


    } catch (error) {
        console.log(error);
    }
}