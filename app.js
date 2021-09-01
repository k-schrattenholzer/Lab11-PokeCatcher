import { getRandomPokemon, encounterPokemon, catchPokemon } from './utils.js';


let threePokeBabies = getRandomPokemon();
let pokeCaught = 0;
const catchButton = document.getElementById('catch-button');

catchButton.addEventListener('click', (e) => {
    e.preventDefault();
    pokeCaught++;
    const caughtPoke = document.querySelectorAll('pokemons');
    caughtPoke.checked = true;
    catchPokemon(caughtPoke.id);
});

function renderPokemon(pokeArray) {

  //grab & create needed elements
    const pokeContainer = document.getElementById('poke-section');
    const pokeDiv = document.createElement('div');
    const input = document.createElement('input');
    const img = document.createElement('img');
    const chooseTxt = document.createElement('p');

  //update created elements
    pokeDiv.classList.add('poke-div');
    input.setAttribute('name', 'pokemons');
    input.setAttribute('type', 'radio');
    input.setAttribute('class', 'selector');
    img.src = pokeArray.url_image;
    chooseTxt.textContent = `Choose ${pokeArray.pokemon}`;

  //display all
    pokeContainer.append(pokeDiv);
    pokeDiv.append(input, img, chooseTxt);
    encounterPokemon(pokeArray);
}

for (let pokies of threePokeBabies) {

    renderPokemon(pokies);
   
}
