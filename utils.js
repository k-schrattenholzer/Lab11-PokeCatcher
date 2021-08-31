import { pokemonData } from "./data.js";

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
    return [pokemonData[randomPoke1], pokemonData[randomPoke2], pokemonData[randomPoke3],];   
}