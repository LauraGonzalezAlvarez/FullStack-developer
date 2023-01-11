"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jefe = exports.Trabajador = exports.Persona = void 0;
class Persona {
    // this hace referencia a la clase
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellidos} y tengo ${this.edad} años`);
    }
}
exports.Persona = Persona;
class Trabajador extends Persona {
    // super hace referencia  al constructor del padre
    // Siempre en los constructores de clase que heredan lo que van a tener es una llamada super al constructor
    constructor(nombre, apellidos, edad, sueldo) {
        super(nombre, apellidos, edad); // Llamada al constructor del padre
        this.sueldo = sueldo;
    }
    saludar() {
        // Estamos extendiendo el metodo saludar de la clase Persona
        super.saludar();
        console.log(`Mi sueldo es de ${this.sueldo} euros`);
    }
}
exports.Trabajador = Trabajador;
class Jefe extends Persona {
    constructor(nombre, apellidos, edad, sueldo) {
        super(nombre, apellidos, edad);
        this.trabajadores = [];
    }
}
exports.Jefe = Jefe;
//# sourceMappingURL=Persona.js.map