/**
 * Genera una unica instancia
 */
class Singleton {
    private static instance: Singleton;

    
    private constructor() { }

    
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(); // Se crea la única instancia compartida a nivel de aplicación
        }

        return Singleton.instance; // devolvemos esa instancia
    }

    public mostrarPorConsola() {
      console.log ("Metodo del Singleton");
    }
}

