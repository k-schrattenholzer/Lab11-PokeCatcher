// IMPORT MODULES under test here:
import { getRandomPokemon, encounterPokemon, catchPokemon, setPokedex, getPokedex } from '../utils.js';

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

test('should take in an id and update localStorage reflecting an added encounter', (expect) => {
    const startDex = [
        {
            id: 2,
            encounters: 3,
            caught: 0,
            name:'ivysaur'
        },
        {
            id: 6,
            encounters: 2,
            caught: 1,
            name:'charmeleon'
        }
    ];

    const stringedDex = JSON.stringify(startDex);
    localStorage.setItem('POKEDEX', stringedDex);

    encounterPokemon(2);

    const finalDex = [
        {
            id: 2,
            encounters: 4,
            caught: 0,
            name:'ivysaur'
        },
        {
            id: 6,
            encounters: 2,
            caught: 1,
            name:'charmeleon'
        }
    ];

    const actual = JSON.parse(localStorage.getItem('POKEDEX'));

    expect.deepEqual(actual, finalDex);
});

test('should take in an id and update localStorage reflecting an added catch', (expect) => {
    const startDex = [
        {
            id: 2,
            encounters: 3,
            caught: 0,
            name:'ivysaur'
        },
    ];

    const stringedDex = JSON.stringify(startDex);
    localStorage.setItem('POKEDEX', stringedDex);

    catchPokemon(2);

    const finalDex = [
        {
            id: 2,
            encounters: 3,
            caught: 1,
            name:'ivysaur'
        },
    ];

    const actual = JSON.parse(localStorage.getItem('POKEDEX'));

    expect.deepEqual(actual, finalDex);
});

test('setPokedex should take an object and set that item in local storage', (expect) => {
    const expected = [{
        id: 4,
        quantity: 6,
    },
    {
        id: 7,
        quantity: 3,
    }
    ];

    const pokedex = [{
        id: 4,
        quantity: 6,
    },
    {
        id: 7,
        quantity: 3,
    }
    ];

    setPokedex(pokedex);

    const stringyDex = localStorage.getItem('POKEDEX');
    const actual = JSON.parse(stringyDex);
    expect.deepEqual(actual, expected);
});

test('getPokedex should take a string from local storage and return the parsed object', (expect) => {
    const expected = [{
        id: 4,
        quantity: 6,
    }];

    const expectedStringy = JSON.stringify(expected);

    localStorage.setItem('POKEDEX', expectedStringy);

    const actual = getPokedex();

    expect.deepEqual(actual, expected);
});
