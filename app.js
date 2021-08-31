import { getRandomPokemon, setPokedex } from './utils.js';


let currentPokes = getRandomPokemon();
const catchButton = document.getElementById('catch-button');

catchButton.addEventListener('click', () => {
    alert(`You chose that one for sure`);
      //setPokedex()
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
    input.setAttribute("name", "pokemons");
    input.setAttribute('type', 'radio');
    img.src = pokeArray.url_image;
    chooseTxt.textContent = `Choose ${pokeArray.pokemon}`;

  //display all
    pokeContainer.append(pokeDiv);
    pokeDiv.append(input, img, chooseTxt);
}

for (let pokies of currentPokes) {
    renderPokemon(pokies);
    setPokedex(currentPokes);
}
