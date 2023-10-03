

class Persona {
    #nombre = "def nombre";
    #estado = 0;

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    getNombre() {
        return this.#nombre;
    }
    setEstado() {
        this.#estado = estado;
    }
    getEstado() {
        return this.#estado;

    }

    riegaLas(plantas) {
        console.log(this.getNombre() + " riega las " + plantas.getNombre());
        plantas.crecen(this);
    }

    seEmociona(){
    this.#estado++;
    if (this.#estado) {
        console.log( this.getNombre() + " se Alegra " );
    }
    
}



}
export {Persona};
/* module.exports = persona; */