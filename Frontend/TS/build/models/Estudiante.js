"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
class Estudiante {
    // Constructor
    // Los opcionales siempre se ponen al final
    constructor(nombre, cursos, apellidos) {
        // Propiedad privada, no va a ser accesible, tendriamos que generar un get
        // Solo desde el ámbito de la clase 
        // Está encapsulado dentro de la clase   
        this.ID = '1234';
        // Inicializamos las propiedades
        // this es la referencia a la propia clasee a la instancia de la clase 
        this.nombre = nombre;
        // Como apellido es opcional hay dos maneras de trabajar:
        // 1. Con el operador ternario
        this.apellidos = apellidos ? apellidos : undefined;
        // La otra manera es esta
        if (apellidos) {
            this.apellidos = apellidos;
        }
        this.cursos = cursos;
    }
    // esto es una propiedad
    // get para obtener nuevos parametros 
    get horasEstudiadas() {
        let horasEstudiadas = 0;
        this.cursos.forEach((curso) => {
            horasEstudiadas += curso.horas;
        });
        return horasEstudiadas;
    }
    get ID_Estudiante() {
        return this.ID;
    }
}
exports.Estudiante = Estudiante;
//# sourceMappingURL=Estudiante.js.map