const PokemonModel = require("./PokemonModel");

describe("PokemonModel Tests", () => {
    test("setPokemonName sets the pokemon name", () => { 
        const pokemonModel = new PokemonModel();

        pokemonModel.setPokemonName("Pikachu");
        expect(pokemonModel.pokemonName).toEqual("Pikachu");
    });
    
    test("getPokemonName returns the pokemon name", () => {
        const pokemonModel = new PokemonModel();

        expect(pokemonModel.getPokemonName()).toEqual("");
        pokemonModel.setPokemonName("Pikachu");
        expect(pokemonModel.getPokemonName()).toEqual("Pikachu")
    });

    test("getPokemonImg returns the pokemon img string", () => { });
    
    test("setPokemonImg sets the pokemon img string", () => {});
})