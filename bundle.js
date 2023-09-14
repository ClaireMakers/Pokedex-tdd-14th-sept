(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // PokemonModel.js
  var require_PokemonModel = __commonJS({
    "PokemonModel.js"(exports, module) {
      var PokemonModel2 = class {
        constructor() {
          this.pokemonName = "";
          this.pokemonImg = "";
        }
        getPokemonName() {
          return this.pokemonName;
        }
        setPokemonName(string) {
          this.pokemonName = string;
        }
        getPokemonImg() {
          return this.pokemonImg;
        }
        setPokemonImg(string) {
          this.pokemonImg = string;
        }
      };
      module.exports = PokemonModel2;
    }
  });

  // PokemonView.js
  var require_PokemonView = __commonJS({
    "PokemonView.js"(exports, module) {
      var PokemonView2 = class {
        constructor(model2, client2) {
          this.model = model2;
          this.client = client2;
        }
        displayPokemon() {
          let pokemonImg = document.createElement("img");
          let pokemonName = document.createElement("p");
          let container = document.querySelector("#main-container");
          container.appendChild(pokemonImg);
          container.appendChild(pokemonName);
          pokemonName.textContent = this.model.getPokemonName();
          pokemonImg.src = this.model.getPokemonImg();
        }
        loadPokemon(url) {
          return this.client.fetchPokemonData(url).then((data) => {
            console.log(data);
            this.model.setPokemonName(data.pokemonName);
            this.model.setPokemonImg(data.imgString);
            this.displayPokemon();
          });
        }
      };
      module.exports = PokemonView2;
    }
  });

  // PokemonClient.js
  var require_PokemonClient = __commonJS({
    "PokemonClient.js"(exports, module) {
      var PokemonClient2 = class {
        fetchPokemonData(url) {
          return fetch(url).then((response) => {
            return response.json();
          }).then((data) => {
            const pokemon = {
              pokemonName: data.name,
              imgString: data.sprites.front_shiny
            };
            return pokemon;
          });
        }
      };
      module.exports = PokemonClient2;
    }
  });

  // index.js
  var PokemonModel = require_PokemonModel();
  var PokemonView = require_PokemonView();
  var PokemonClient = require_PokemonClient();
  var model = new PokemonModel();
  var client = new PokemonClient();
  console.log(client);
  var pokemonView = new PokemonView(model, client);
  pokemonView.loadPokemon("https://pokeapi.co/api/v2/pokemon/ditto");
})();
