/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const PokemonView = require("./PokemonView");

describe("PokemonView class tests", () => {
    beforeEach(() => {
        document.body.innerHTML = fs.readFileSync("./index.html");
    });
    
    
  test("display the data of the pokemon from the API", () => {
    // PokemonModel instance will look like this
    //{
    //     pokemonName: "",
    //     pokemonImg = "",
    //     setPokemonName: () => { },
    //     setPokemonImg: () => { }
    // }

    const doubleModel = {
      pokemonName: "",
      pokemonImg: "",
      setPokemonName: (string) => {
        doubleModel.pokemonName = string;
      },
      setPokemonImg: (string) => {
        doubleModel.pokemonImg = string;
        },
        getPokemonName: () => { return doubleModel.pokemonName },
        getPokemonImg: () => { return doubleModel.pokemonImg },
    };

    const mockPokemonClient = {
      fetchPokemonData: jest.fn(),
    };

    const mockPokemon = {
      pokemonName: "MockPokemon",
      imgString: "MockImg",
    };

    mockPokemonClient.fetchPokemonData.mockImplementationOnce(() => {
      return Promise.resolve(mockPokemon);
    });

    const pokemonView = new PokemonView(doubleModel, mockPokemonClient);

      pokemonView
        .loadPokemon("https://pokeapi.co/api/v2/pokemon/ditto")
        .then(() => {
          expect(document.querySelector("img").src).toContain("MockImg");
          expect(document.querySelector("p").textContent).toBe(
            "MockPokemon"
          );
        });
  });
});
