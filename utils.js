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

export function encounterPokemon(id){
    const encounteredPoke = getPokedex();

    const pokesInDex = encounteredPoke
        .find(pokie => Number(pokie.id) === Number(id));

    if (pokesInDex) {
        pokesInDex.encounters++;
    } else {
        const newPoke = pokemonData.find(pokie => Number(pokie.id) === Number(id));
        encounteredPoke.push({
            id,
            encounters: 1,
            caught: 0,
            name: newPoke.pokemon
        });
    }

    setPokedex(encounteredPoke);
}
    

export function catchPokemon(id){

    // getPokedex
    const pokeDex = getPokedex();
    const previouslyCaught = findById(pokeDex, Number(id));
    console.log(previouslyCaught);
    // Increment the caught of this pokemon in local storage
    previouslyCaught.caught++;

    // setPokedex
    setPokedex(pokeDex);
}

export function findById(myArray, id) {
    for (let item of myArray) {
        if (Number(item.id) === Number(id)) {
            return item;
        }
    }
}
            