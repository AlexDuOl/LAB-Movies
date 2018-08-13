$(document).ready(function() {
    $('.dropdown-trigger').dropdown();
    $('.collapsible').collapsible();
});

//*****TEMPLATE******//
function templateMovies(title, year, actors) {
    const templateMovies =
        `<ul class="row listContainer">
            <li class="col s9 m9 l9 offset-l1">
                <a href="#collapsible">${title}</a>
                <p class="col s2 m2 l2">${title}</p>
                <p class="col s6 m6 l6 offset-l1">${actors}</p>

            </li>
        </ul>`

    return templateMovies
}

function collapsibleMovies(title, year, actors, plot) {
    const collapsibleMovies =
        `<li>
            <div class="collapsible-header">
                <p>${title}</p>
            </div>
            <div class="collapsible-header">
                <p>${year}</p>
            </div>
        </li>
        <li>
            <div class="collapsible-header">
                <p>${actors}</p>
            </div>
            <div class="collapsible-body"><span>${plot}</span></div>
        </li> `

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
        console.log(title, year);

        $(".container").append(templateMovies(title, year, actors));
        $(".collapsible").append(collapsibleMovies(title, year, actors, plot));

    })
})