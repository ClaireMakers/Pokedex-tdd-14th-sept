const PokemonModel = require("./PokemonModel");
const PokemonView = require("./PokemonView");
const PokemonClient = require("./PokemonClient");

let model = new PokemonModel();
const client = new PokemonClient();
console.log(client)
const pokemonView = new PokemonView(model, client);

pokemonView.loadPokemon("https://pokeapi.co/api/v2/pokemon/ditto");