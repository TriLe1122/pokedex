
export class Pokemon {

  constructor(data) {
    this.name = data.name
    this.url = data.url
  }


  get PokemonListTemplate() {
    return /*html*/`
    <div class="selectable no-select text-light p-3" onclick="app.pokemonController.getPokemonDetails('${this.url}')">
      <p class="mb-0"><b>${this.name}</b></p>
    </div>
    `
  }
}
