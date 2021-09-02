import rawPokeData from './data.js';

function randomIndex() {
    return Math.floor(Math.random() * rawPokeData.length);
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
    return [rawPokeData[randomPoke1], rawPokeData[randomPoke2], rawPokeData[randomPoke3]];   
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

    const pokesInDex = findById(encounteredPoke, id);
    
    const pokieName = findById(rawPokeData, Number(id));

    if (pokesInDex) {
        pokesInDex.encounters++;
    } else {
        const newPoke = { id, encounters: 1, caught: 0, name: pokieName.pokemon };
        encounteredPoke.push(newPoke);
    }

    setPokedex(encounteredPoke);
}
    

export function catchPokemon(id){

    const caughtArray = getPokedex();

    const previouslyCaught = findById(caughtArray, Number(id));

    previouslyCaught.caught++;

    setPokedex(caughtArray);
}

export function findById(myArray, id) {
    for (let item of myArray) {
        if (Number(item.id) === Number(id)) {
            return item;
        }
    }
}
            