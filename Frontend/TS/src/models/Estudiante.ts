import { Curso } from "./Curso";

export class Estudiante {

    // Propiedades de clase
    nombre: string;
    apellidos?: string;
    cursos: Curso[]; // Array de objetos de tipo Curso

    // Propiedad privada, no va a ser accesible, tendriamos que generar un get
    // Solo desde el ámbito de la clase 
    // Está encapsulado dentro de la clase   
    private ID: string = '1234';

    // Constructor
    // Los opcionales siempre se ponen al final
    constructor(nombre: string, cursos: Curso[], apellidos?: string) {
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
    get horasEstudiadas(): number{
        let horasEstudiadas = 0;
        this.cursos.forEach((curso: Curso) => {
            horasEstudiadas += curso.horas;

        })
        return horasEstudiadas;
    }

    get ID_Estudiante(): string{       
        return this.ID;

}
}
