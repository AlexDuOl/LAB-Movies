$(document).ready(function() {
    $('.collapsible').collapsible(); 
});


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


        $(".collapsible").append(collapsibleMovies(title, year, actors, plot, awards, director, website));

    })
    
})

//*****MOSTRAR******//

$("#movies").click(function(){
    $(".collapsible").removeClass(".hiden").addClass(".show-on-large");   
});


//*****TEMPLATE******//
function collapsibleMovies(title, year, actors, plot, awards, director, website) {
   
    const collapsibleMovies =
    `<li>
        <div class="row collapsible-header">
            <p class="col l4">${title}</p>          
            <p class="col l4">Año: ${year}</p>
            <p class="col l4">Director: ${director}</p>                
        </div>
        <div class="collapsible-body"><span>Actores: ${actors}</span></div>
        <div class="collapsible-body"><span>Trama: ${plot}</span></div>
        <div class="collapsible-body"><span>Premios: ${awards}</span></div>
        <div class="collapsible-body"><span>Sitio Web: ${website}</span></div>
    </li>`

    return collapsibleMovies
}



