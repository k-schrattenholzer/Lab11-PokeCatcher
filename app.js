import { getRandomPokemon, encounterPokemon, catchPokemon } from './utils.js';


let threePokeBabies = getRandomPokemon();
let pokeEncounters = 0;
const pokeContainer = document.getElementById('poke-section');

const catchButton = document.getElementById('catch-button');

for (let pokies of threePokeBabies) {
    renderPokemon(pokies);
}

catchButton.addEventListener('click', () => {
    // console.log(pokeEncounters);
    pokeEncounters = pokeEncounters + 1;
    let caughtPoke = document.querySelector('input[name="pokemons"]:checked');

    catchPokemon(Number(caughtPoke.value));
    if (pokeEncounters > 10) {
        window.location.href = './results/index.html';
    } else {
        pokeContainer.innerHTML = '';
        threePokeBabies = getRandomPokemon();
        console.log(threePokeBabies);
        for (let pokies of threePokeBabies) {
            renderPokemon(pokies);
        }
    }
});

function renderPokemon(pokeBaby) {

    const pokeContainer = document.getElementById('poke-section');
    const pokeDiv = document.createElement('div');
    const selectedLabel = document.createElement('label');
    const input = document.createElement('input');
    const img = document.createElement('img');
    const chooseTxt = document.createElement('p');
    const pokeID = pokeBaby.id;


    pokeDiv.classList.add('poke-div');
    input.setAttribute('name', 'pokemons');
    input.setAttribute('type', 'radio');
    input.setAttribute('class', 'selector');
    input.setAttribute('value', pokeID);
    img.src = pokeBaby.url_image;
    chooseTxt.textContent = `Choose ${pokeBaby.pokemon}`;


    pokeContainer.append(pokeDiv);
    pokeDiv.append(selectedLabel);
    selectedLabel.append(input, img, chooseTxt);
    encounterPokemon(pokeBaby.id);
}

