function getJSON(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
    })
    .catch(function (error) {
        console.log(error);
    })
}

function fetchPokemon() {
    var url = "https://pokeapi.co/api/v2/pokemon/";
    getJSON(url).then(function (data) {
        console.log(data);
        var results = data.results;

        var pokeListElement = document.getElementById('pokeList');

        pokeListElement.innerHTML = "";

        results.forEach (function(pokemon) {

            var newItem = document.createElement('li');
            var newLink = document.createElement('a');

            newLink.setAttribute('href', pokemon.url);

            newLink.innerHTML = pokemon.name;

            newLink.addEventListener("click", function(event){
                event.preventDefault();
                getPokemonDetails(pokemon.url);

            });

            newItem.appendChild(newLink);
            pokeListElement.appendChild(newItem);

        });

    });
}

function getPokemonDetails(url) {
    getJSON(url).then(function (data) {
        console.log(data);

        var pokeName = document.querySelector('.name');
        var pokeNumber = document.querySelector('.number');
        var pokeType = document.querySelector('.type');

        pokeName.innerHTML = data.name;
        pokeNumber.innerHTML = data.order;
         data.types.forEach (function(type) {
             pokeType.innerHTML = type.type.name;

        });
    });
}

fetchPokemon();
