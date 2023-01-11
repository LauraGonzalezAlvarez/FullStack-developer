"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Programar = void 0;
// La interface la podemos utilizar para objetos o para clases
class Programar {
    // En el constructor solo se inicializan los valores no se puede hacer ningun tipo de operacion
    constructor(titulo, descripcion, completada, urgencia) {
        this.resumen = () => {
            return `Tarea de Programación: ${this.titulo} - ${this.completada}`;
        };
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completada = completada;
        this.urgencia = urgencia;
    }
}
exports.Programar = Programar;
//# sourceMappingURL=Programar.js.map