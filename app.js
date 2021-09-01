import { getRandomPokemon, encounterPokemon, catchPokemon } from './utils.js';


let threePokeBabies = getRandomPokemon();
let pokeEncounters = 0;
const catchButton = document.getElementById('catch-button');


for (let pokies of threePokeBabies) {

    renderPokemon(pokies);
 
}
catchButton.addEventListener('click', (e) => {
    e.preventDefault();
    pokeEncounters++;
    let caughtPoke = document.querySelector('input[name="pokemons"]:checked').id;
    catchPokemon(caughtPoke);
});

function renderPokemon(pokeBaby) {

    const pokeContainer = document.getElementById('poke-section');
    const pokeDiv = document.createElement('div');
    const input = document.createElement('input');
    const img = document.createElement('img');
    const chooseTxt = document.createElement('p');
    const pokeID = pokeBaby.id;


    pokeDiv.classList.add('poke-div');
    input.setAttribute('name', 'pokemons');
    input.setAttribute('type', 'radio');
    input.setAttribute('class', 'selector');
    input.setAttribute('id', pokeID);
    img.src = pokeBaby.url_image;
    chooseTxt.textContent = `Choose ${pokeBaby.pokemon}`;

    pokeContainer.append(pokeDiv);
    pokeDiv.append(input, img, chooseTxt);
    encounterPokemon(pokeBaby.id);
}

