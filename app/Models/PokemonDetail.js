export class PokemonDetail {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.img = data.img || data.sprites.front_default
    this.types = data.types
    this.order = data.order
  }



  get CardTemplate() {
    return /*html*/`
      <div class="card">
        <div class="card-body">
          <h3>${this.name} - ${this.order}</h3>
            <div>
            
            <img src="${this.img}" alt="" class="pokemon">
            ${this.types[0].type.name}
            </div>
          </div>
        <div class="card-footer">
          
          <button class="btn btn-secondary" onclick="app.sandboxPokemonsController.addPokemon()">Add to Pokemon Team</button>
        </div>
      </div>
    `

  }



}