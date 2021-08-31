import pokemonData from './data.js';

function randomIndex() {
    return Math.floor(Math.random() * pokemonData.length);
}

export function getRandomPokemon() {
    let randomPoke1 = randomIndex();
    let randomPoke2 = randomIndex();
    let randomPoke3 = randomIndex();

    while (randomPoke1 === randomPoke2 
        || randomPoke2 === randomPoke3 
        || randomPoke1 === randomPoke3) {
        randomPoke1 = randomIndex();
        randomPoke2 = randomIndex();
        randomPoke3 = randomIndex();
    } 
    return [pokemonData[randomPoke1], pokemonData[randomPoke2], pokemonData[randomPoke3]];   
}

    // Whenever we find 3 new pokemon, we need to track that they have now been "seen"
    // call encounterPokemon() on all 3 new pokemon

export function setPokedex(pokedex){
    localStorage.setItem('SEEN', JSON.stringify(pokedex));
}
    

export function getPokedex(){
    // retrieves and parses the pokedex in local storage
    return [];
}

export function encounterPokemon(id){
    return [];
    // getPokedex
    // If the pokemon has been previously seen, just increment the times seen
    // If this is the first time, make a new object with { id: 5, encoutered: 1, caught: 0 }
    // setPokedex
}
    

export function catchPokemon(id){
    // getPokedex
    // no need to check if it's been encountered. If you got this far, it has been encountered.
    // Increment the caught of this pokemon in local storage
    // setPokedex
    return [];
}
   