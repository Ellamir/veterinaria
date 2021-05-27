import Propietario from './propietario.js';
import Animal from './animal.js';
import Mascota from './mascota.js';

let nombre = 'Viki';
let direccion = 'calle1234'
let telefono = '333 1111'
let petName = 'Camilo';
let enfermedad = 'feo';

let viki = new Propietario (nombre, direccion, telefono)
let perro = new Animal (nombre, direccion, telefono, tipo)
let camilo = new Mascota (nombre, direccion, telefono, tipo, petName, enfermedad)



console.log(viki);
console.log(perro);
console.log(camilo);


