// IMPORT MODULES under test here:
import { getRandomPokemon, renderPokemon } from '../utils.js';

const test = QUnit.test;

test('getRandomPokemon should return an array with three items, that are pokemon and that have different IDs', (expect) => {

    const actual = getRandomPokemon();
    //check that there are three things in this array
    expect.equal(actual.length, 3, 'there should be three objects in the array');

    //check that all three have a .pokemon property
    expect.equal(!!actual[0].pokemon, true, 'the first item should be a pokemon');
    expect.equal(!!actual[1].pokemon, true, 'the second item should be a pokemon');
    expect.equal(!!actual[2].pokemon, true, 'the third item should be a pokemon');

    //check that all IDs are not the same
    expect.equal(actual[0].id !== actual[1].id, true, 'the first and second pokes should have different ids');
    expect.equal(actual[1].id !== actual[2].id, true, 'the second and third pokes should have different ids');
    expect.equal(actual[2].id !== actual[0].id, true, 'the third and first pokes should have different ids');
});

test('renderPokemon should take in an array of three pokemon and return the correct HTML elements', (expect) => {

    const expected = 
    `<div class="poke-div"><input type="radio" name="poke"><img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"><p>'Choose bulbasaur'</p><input type="radio" name="poke"><img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"><p>'Choose ivysaur'</p><input type="radio" name="poke"><img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"><p>'Choose charmander'</p></div>`;

    const actual = renderPokemon();

    expect.equal(actual.outerHTML, expected);
});
