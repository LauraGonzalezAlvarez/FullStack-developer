"use strict";
/**
 * Genera una unica instancia
 */
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(); // Se crea la única instancia compartida a nivel de aplicación
        }
        return Singleton.instance; // devolvemos esa instancia
    }
    mostrarPorConsola() {
        console.log("Metodo del Singleton");
    }
}
//# sourceMappingURL=Singleton.js.map