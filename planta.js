

class Planta {
    #nombre = "def nombre";
    #estado = 0;

    getNombre() {
        return this.#nombre;
    }
    setNombre(nombre) {
        this.#nombre = nombre;
    }

    setEstado() {
        this.#estado = estado;
    }
    getEstado() {
        return this.#estado;

    }
    crecen(persona) {
        this.#estado++;
        if (this.#estado) {
            console.log(this.getNombre() + " creciendo " + this.getEstado());
            persona.seEmociona();
        }


    }

}
export {Planta};
/* module.exports = planta; */