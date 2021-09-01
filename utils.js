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

    
    // call encounterPokemon() on all 3 new pokemon

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
    const pokeDex = getPokedex();
    
    // If this is the first time, make a new object with { id: 5, encountered: 1, caught: 0 }]

    //do we need a findbyID here??
    if (!pokeDex) {
        let pokeArray = [];
        const unseenPokeObj = {
            id: object.id,
            encounters: 1,
            caught: 0
        };
        pokeArray.push(unseenPokeObj);
        setPokedex(pokeArray);
        return;
    }
    // If the pokemon has been previously seen, just increment the times seen
    pokeDex.forEach(item => {
        if (object.id === item.id){
            item.encounters += 1;
            return item;
        }
        setPokedex(pokeArray);
        return newPokeObj;
    });
    
    // setPokedex
}
    

export function catchPokemon(id){
    // getPokedex
    // no need to check if it's been encountered. If you got this far, it has been encountered.
    // Increment the caught of this pokemon in local storage
    // setPokedex
    return [];
}

export function findById(myArray, id) {
    for (let item of myArray) {
        if (item.id === id) {
            return item;
        }
    }
}