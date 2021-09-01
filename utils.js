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


// sets and stringifies the pokedex in local storage
export function setPokedex(pokedex){
    const stringedDex = JSON.stringify(pokedex);
    localStorage.setItem('POKEDEX', stringedDex);
}
    
// retrieves and parses the pokedex in local storage
export function getPokedex(){
    
    const stringedDex = localStorage.getItem('POKEDEX');
    const finalDex = JSON.parse(stringedDex);

    if (!stringedDex) {
        return [];
    }
    return finalDex;
}

export function encounterPokemon(object){
    // getPokedex
    const encounteredPoke = getPokedex();
    const hasBeenEncountered = findById(encounteredPoke, object.id);

     // If the pokemon has been previously seen, just increment the times seen
    if (hasBeenEncountered) {
        hasBeenEncountered.encounters++;
    }

    // If this is the first time, make a new object with { id: 5, encountered: 1, caught: 0 }]
    else {
        const pokeObject = {
            id: object.id,
            encounters: 1,
            caught: 0 };
        encounteredPoke.push(pokeObject);
    }
    setPokedex(encounteredPoke);
}
    

export function catchPokemon(id){

    // getPokedex
    const caughtArray = getPokedex();
    const previouslyCaught = findById(caughtArray, id);

    // Increment the caught of this pokemon in local storage
    previouslyCaught.caught++;
    
    // setPokedex
    setPokedex(caughtArray);
}

export function findById(myArray, id) {
    for (let item of myArray) {
        if (item.id === Number(id)) {
            return item;
        }
    }
}
            