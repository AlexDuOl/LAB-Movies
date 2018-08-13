$(document).ready(function() {
    $('.collapsible').collapsible(); 
});

//*****MOSTRAR******//

$("#movies").click(function(collapsibleMovies){
    $(".collapsible").addClass("show-on-medium-and-up"); 
    console.log(collapsibleMovies);
      
});


//*****TEMPLATE******/
function collapsibleMovies(title, year, actors, plot, awards, director, website, poster) {
   
    const collapsibleMovies =
    `<li>
        <div class="row collapsible-header">
            <img class="col l2" src="${poster}"/>
            <p class="col l5 texto">${title}</p>          
            <p class="col l2 texto">Año: ${year}</p>
            <p class="col l3 texto">Director: ${director}</p> 
        </div>
        <div class="collapsible-body texto"><span>Actores: ${actors}</span></div>
        <div class="collapsible-body texto"><span>Trama: ${plot}</span></div>
        <div class="collapsible-body texto"><span>Premios: ${awards}</span></div>
        <div class="collapsible-body texto"><span>Sitio Web: ${website}</span></div>
    </li>`

    return collapsibleMovies
}


//*****OBTENIENDO DATA PARA TEMPLATE******//
$(document).ready(function() {
    dir = "http://www.omdbapi.com/?i=tt3896198&apikey=c7d395b9"

    $.ajax({
        url: dir,
        onError: function(err) {
            alert(err);
        }

    }).done(function(data) {
        console.log(data);

        let title = data.Title;
        let year = data.Year;
        let actors = data.Actors;
        let plot = data.Plot;
        let awards = data.Awards;
        let director = data.Director;
        let website = data.Website;
        let poster = data.Poster;


        $(".collapsible").append(collapsibleMovies(title, year, actors, plot, awards, director, website, poster));

    })
    
})





