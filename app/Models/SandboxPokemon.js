import { PokemonDetail } from "./PokemonDetail.js";


export class SandboxPokemon extends PokemonDetail {
  constructor(data) {
    super(data);
    this.is_default = data.is_default || false
  }


  get ListTemplate() {
    return /*html*/`
    <div class="no-select text-light p-3 ">
      <p class="mb-0 d-flex align-items-center justify-content-between"> 
      <!-- TRIGGERS PUT REQUEST -->
        <input type="checkbox" ${this.is_default ? 'checked' : ''} onchange="app.sandboxPokemonsController.togglePokemonTeam('${this.id}')" >
        <b>${this.name}</b>
        <i class="mdi mdi-delete-forever on-hover" onclick="app.sandboxPokemonsController.removePokemon('${this.id}')"></i>
      </p>
    </div>
    `
  }
}


// TODO add sandboxpokemon togglepokemon and delete pokemon
