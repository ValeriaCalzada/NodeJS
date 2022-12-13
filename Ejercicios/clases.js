class Persona{
    nombre;

    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar () {
        setTimeout(() => {
            console.log('Hola soy ' + this.nombre)

        }, 100);
    }
}

const yo = new Persona('Francisco');
const pepe = new Persona('Jose');

pepe.saludar();
yo.saludar();