import { ActivePokemonController } from "./Controllers/ActivePokemonController.js";
import { PokemonsController } from "./Controllers/PokemonsController.js";
import { SandboxPokemonsController } from "./Controllers/SandboxPokemonsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  pokemonController = new PokemonsController()

  activePokemonController = new ActivePokemonController()

  sandboxPokemonsController = new SandboxPokemonsController()
}

window["app"] = new App();
