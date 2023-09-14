class PokemonView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

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
        console.log(data)
      this.model.setPokemonName(data.pokemonName);
      this.model.setPokemonImg(data.imgString);
      this.displayPokemon();
    });
  }
}

module.exports = PokemonView;