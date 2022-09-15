import { appState } from "../AppState.js";
import { SandboxPokemon } from "../Models/SandboxPokemon.js";
import { SandboxServer } from "./AxiosService.js";

class SandboxPokemonsService {

  async addPokemon() {
    if (!appState.activePokemon) { return }

    // @ts-ignore
    const alreadyCaught = appState.sandboxPokemons.find(p => p.name == appState.activePokemon.name)
    if (alreadyCaught) {
      throw new Error('you already have this pokemon, lets get a new one')
    }
    const res = await SandboxServer.post(`/api/${appState.user}/pokemon`, appState.activePokemon)
    const newPokemon = new SandboxPokemon(res.data)
    appState.sandboxPokemons = [...appState.sandboxPokemons, newPokemon]
  }

  async togglePokemonTeam(id) {
    const pokemon = appState.sandboxPokemons.find(p => p.id == id)
    if (!pokemon) {
      throw new Error('bad id')
    }

    pokemon.is_default = !pokemon.is_default
    await SandboxServer.put(`/api/${appState.user}/pokemon/${id}`, pokemon)
    appState.emit('sandboxPokemons')
  }


  async removePokemon(id) {
    await SandboxServer.delete(`/api/${appState.user}/pokemon/${id}`)
    appState.sandboxPokemons = appState.sandboxPokemons.filter(p => p.id != id)
  }

  async getPokemons() {
    const res = await SandboxServer.get(`/api/${appState.user}/pokemon`)
    appState.sandboxPokemons = res.data.map(p => new SandboxPokemon(p))
  }

}

export const sandboxPokemonsService = new SandboxPokemonsService()