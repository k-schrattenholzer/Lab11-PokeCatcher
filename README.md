## Making a plan

# Catcher page
User should be able to select one of 3 DIFFERENT pokemon and click the catch button.
Then show the user 3 more (different) pokemon.
After 10 pokemon are caught, redirect to the results page.

## HTML Setup --
Button
3 divs with images to show the pokemon
Radio buttons (hidden like in the rock paper scissors app)

## State
How many times has the user caught a pokemon

let pokeCaught = 0

STRETCH: we could derive this from our other data, just counting how many total pokemon the user has already caught: howManyCaughtSoFar()

## Local Storage
Pokemon seen
Pokemon caught

## Events
User loads the page
    call renderNewPokemon()

User clicks catch button
    increment: pokeCaught++
    We figure out the id of the pokemon that was captured.
    call catchPokemon(id) with this id
    now, if pokeCaught > 10, redirect to the results page
    call renderNewPokemon()

## Functions
renderNewPokemon()
    We need to find three unique pokemon to show the user
        getRandomPokemon()
        Whenever we find 3 new pokemon, we need to track that they have now been "seen"
        call encounterPokemon() on all 3 new pokemon

getRandomPokemon()
    does the hard work of finding three unique and random pokemon from our raw data
    returns an array of three random pokemon

setPokedex(pokedex)
    takes in a pokedex, stringifies it and puts it into local storage

getPokedex()
    retrieves and parses the pokedex in local storage

encounterPokemon(id)
    getPokedex
    If the pokemon has been previously seen, just increment the times seen
    If this is the first time, make a new object with { id: 5, encoutered: 1, caught: 0 }
    setPokedex

catchPokemon(id)
    getPokedex
    no need to check if it's been encountered. If you got this far, it has been encountered.
    Increment the caught of this pokemon in local storage
    setPokedex


# Results page
User should be able to see the pokemon they caught, how many times they caught them, and how many times they encountered them.
    Grab your data from local storage
    Render a table of values showing "caught" and "encountered" for each pokemon in your pokedex

