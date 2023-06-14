function getRandomNumberForPokeAPI(){
    // The "808" is just a safe maximum for how many Pokemon are currently in the API.
    // When they add more Pokemon, that number should go up.
    let suitableNumber = Math.floor(Math.random() * 808)
    return suitableNumber
}
function showPokemonData(data) {
    // For now, just log the data
    console.log(data)
}

// function getPokemonData(){
//     // 1. update with the correct url for POKEAPI:
//     const POKEAPI = "https://pokeapi.co/api/v2/pokemon/"
//     const proxyUrl = "https://github.com/Rob--W/cors-anywhere/"
//     fetch((proxyUrl + POKEAPI) + getRandomNumberForPokeAPI)
//     .then(body => {return body.json()})
//     .then(data => {showPokemonData(data)})
//     // 2. use fetch to call the API
//     // and call showPokemonData with the data returned from the fetch
// }

const pokemon = "https://pokeapi.co/api/v2/pokemon/"
const proxyUrl = "https://cors-anywhere.herokuapp.com/"

async function getPokemonData(url=pokemon){
    // 1. update with the correct url for POKEAPI:
    const POKEAPI = await fetch((proxyUrl + pokemon) + getRandomNumberForPokeAPI())
    const data = await POKEAPI.json()
    const result = showPokemonData(data)
    // console.log(data["results"][2]["name"])
    console.log(data.name)
    // 2. use fetch to call the API
    // and call showPokemonData with the data returned from the fetch
}
getPokemonData()