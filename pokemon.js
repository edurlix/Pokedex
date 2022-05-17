'use strict'
var input = document.querySelector('#pokemon');
var button = document.querySelector('#submit');

button.addEventListener('click',()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
    .then(data => data.json())
    .then(data => {
        var pokemon = data
        console.log(pokemon);

        var name = document.querySelector('#name');
        var type = document.querySelector('#type');
        var ability1 = document.querySelector('#ability1');
        var ability2 = document.querySelector('#ability2');
        var image = document.querySelector('#images').src = pokemon.sprites.front_default;
        var image = document.querySelector('#images1').src = pokemon.sprites.back_default;
        name.innerHTML = pokemon.name;
        type.innerHTML = pokemon.types[0].type.name;
        ability1.innerHTML = pokemon.abilities[0].ability.name;
        ability2.innerHTML = pokemon.abilities[1].ability.name;

    });

});

