import { appState } from "../AppState.js"
import { sandboxPokemonsService } from "../Services/SandboxPokemonsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"


function drawSandboxPokemons() {
  let template = ''
  appState.sandboxPokemons.forEach(p => template += p.ListTemplate)
  setHTML('your-pokemon', template)
  // TODO make div with yourteam id
  // setText('your-team', appState.sandboxPokemons.length)
}


export class SandboxPokemonsController {
  constructor() {
    this.getPokemons()
    appState.on('sandboxPokemons', drawSandboxPokemons)
  }
  async getPokemons() {
    try {
      await sandboxPokemonsService.getPokemons()
    } catch (error) {
      console.error('[gettingPokemons]', error);
      Pop.error(error)
    }
  }

  async addPokemon() {
    try {
      await sandboxPokemonsService.addPokemon()
      Pop.success('caught em!')

    } catch (error) {
      console.error('[addingPokemon]', error);
      Pop.error(error)
    }
  }
  async togglePokemonTeam(id) {
    try {
      await sandboxPokemonsService.togglePokemonTeam(id)
    } catch (error) {
      console.error('[toggleTeam]', error);
      Pop.error(error)
    }
  }

  async removePokemon(id) {
    try {
      const yes = await Pop.confirm('remove from pokedex?')
      if (!yes) { return }
      await sandboxPokemonsService.removePokemon(id)
    } catch (error) {
      console.error('[deletePokemon]', error);
    }
  }
}