
/* const Persona = require("./Persona.js");
const planta = require("./Planta.js"); */

import { Persona } from "./persona.js";
import { Planta } from "./planta.js";

 
const maria = new Persona();
const plantas = new Planta();
plantas.setNombre("Margaritas");
maria.setNombre("maria");
maria.riegaLas(plantas);


