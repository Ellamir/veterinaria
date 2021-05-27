import Animal from './animal.js';

export default class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, petName, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._petName = petName;
        this._enfermedad = enfermedad;
    }
}