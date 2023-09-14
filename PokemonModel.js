class PokemonModel { 
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
}

module.exports = PokemonModel;