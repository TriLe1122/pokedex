import { appState } from "../AppState.js"
import { pokemonsService } from "../Services/PokemonsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function drawPokemon() {
  let template = ''
  appState.pokemons.forEach(p => template += p.PokemonListTemplate)
  setHTML('pokemon', template)
}


export class PokemonsController {
  constructor() {
    appState.on('pokemons', drawPokemon)
    this.getPokemons()
  }

  async getPokemons() {
    try {
      await pokemonsService.getPokemons()
    } catch (error) {
      console.error('[get pokemons]', error);
      Pop.error(error)
    }
  }


  async getPokemonDetails(url) {
    try {
      await pokemonsService.getPokemonDetails(url)
    } catch (error) {
      console.error('[getPokemonDetails]', error);
      Pop.error(error)
    }
  }
}

