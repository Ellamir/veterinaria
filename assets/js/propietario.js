export default class Propietario{
    constructor(nombre, direccion, telefono){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(new_nombre){
        this._nombre = new_nombre;
    }

    get direccion(){
        return this._direccion;
    }
    set direccion(new_direccion){
        this._direccion = new_direccion;
    }

    get telefono(){
        return this._telefono;
    }
    set telefono(new_telefono){
        this._telefono = new_telefono;
    }


    datosPropietario(){
        console.log('datos propietario')
        
    }


}