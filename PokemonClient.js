class PokemonClient {
    
  fetchPokemonData(url) {
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const pokemon = {
          pokemonName: data.name,
          imgString: data.sprites.front_shiny,
        };
        return pokemon;
      });
  }
}

module.exports = PokemonClient;