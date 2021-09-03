import { setPokedex, getPokedex } from '../utils.js';

const test = QUnit.test;

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
