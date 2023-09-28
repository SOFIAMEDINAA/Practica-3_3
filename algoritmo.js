class persona {
    riegaLas(plantas) {
        console.log("riego las " + plantas.getNombre());
    }
}

class planta {
    #nombre = "def nombre";
    
    getNombre() {
        return this.#nombre;
    }
    setNombre(nombre) {
        this.#nombre = nombre;
    }
}



const maria = new persona();
const plantas = new planta();
plantas.setNombre("Margaritas");
maria.riegaLas(plantas);

