const PokemonClient = require("./PokemonClient");

require("jest-fetch-mock").enableMocks();

describe("PokemonClient tests", () => {
    test("When the response comes back from the server, it should get formatted into an object with a pokemonName and a pokemonImgString property", (done) => {
        // 1. Instantiate the class
        const pokemonClient = new PokemonClient();

        // 2. We mock the response from `fetch`
        // The mocked result will depend on what your API
        // normally returns — you want your mocked response
        // to "look like" as the real response as closely as
        // possible (it should have the same fields).
        fetch.mockResponseOnce(JSON.stringify({
            name: "Pokemon",
            sprites: { front_shiny: "img string" }
        }))

        // 3. We call the method, giving a callback function.
        // When the HTTP response is received, the callback will be called.
        // We then use `expect` to assert the data from the server contain
        // what it should.
        // {pokemonName: "", imgString: ""}
        pokemonClient
          .fetchPokemonData("https://pokeapi.co/api/v2/pokemon/ditto")
          .then((formattedData) => {
            expect(formattedData.pokemonName).toBe("Pokemon");
            expect(formattedData.imgString).toBe("img string");
            done();
          });
    })
})