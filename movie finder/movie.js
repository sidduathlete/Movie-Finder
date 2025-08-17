let input = document.getElementById("movie-input");
let btn = document.getElementById("search-btn");
let poster = document.getElementById("movie-poster");
let movietitle = document.getElementById("movie-title");
let rating = document.getElementById("movie-rating");
let moviedescription = document.getElementById("movie-description");
let hero = document.getElementById("movie-hero");
let director = document.getElementById("movie-director");
let producer = document.getElementById("movie-producer");
let collection = document.getElementById("movie-collection");
let card = document.getElementById("movie-card");

btn.onclick = async function() {
    let url = `https://www.omdbapi.com/?t=${input.value}&apikey=60294be7`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    if (data.Response === "True") {
        poster.src = data.Poster;
        movietitle.textContent = data.Title;
        rating.textContent = `⭐ ${data.imdbRating}`;
        moviedescription.textContent = data.Plot;
        hero.textContent = data.Actors;
        director.textContent = data.Director;
        producer.textContent = data.Production;
        collection.textContent = data.BoxOffice || "N/A";
        document.querySelector(".movie-card").style.display = "block";
    } else {
        alert("Movie not found!");
    }

}