$(document).ready(function() {
    $('.collapsible').collapsible();
});

//*****MOSTRAR******//

$("#movies").click(function(collapsibleMovies) {
    $(".collapsible").addClass("show-on-medium-and-up");
    console.log(collapsibleMovies);

});


//*****TEMPLATE******/
function collapsibleMovies(poster_path, title, release_date, overview, popularity) {

    const collapsibleMovies =
        `<li>
        <div class="row collapsible-header">   
            <img class="col l2" src="${poster_path}"/>
            <div class="row">
            <h4 class="col l8 offset-l3">${title}</h4> 
            <p class="col l8 texto">Fecha de lanzamiento</p>          
            <p class="col l4 texto">${release_date}</p> 
            </div> 
        </div>  
        <div class="collapsible-body texto"><span>${overview}</span></div>
        <div class="collapsible-body texto"><span>Popularidad:   ${popularity}%</span></div>
    </li>`

    return collapsibleMovies
}

//*****OBTENIENDO LA DATA******/
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3ebb69eca51521a30088e0d37d49aa2c')
    .then(function(response) {
        if (response.ok) {
            return response.json();
        }
    })
    .then(function(data) {
        console.log(data);

        for (var i = 0; i < data.results.length; i++) {
            var poster_path = "https://image.tmdb.org/t/p/w780" + data.results[i].poster_path;
            var title = data.results[i].title;
            var release_date = data.results[i].release_date;
            var overview = data.results[i].overview;
            var popularity = data.results[i].popularity;

            do {
                $(".collapsible").append(collapsibleMovies(poster_path, title, release_date, overview, popularity));
            } while (i === data.results.length);
        }
    })
    .catch(function(error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
    });