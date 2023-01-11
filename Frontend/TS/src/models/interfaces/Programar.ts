import { ITarea, Nivel } from "./ITarea";

// La interface la podemos utilizar para objetos o para clases
export class Programar implements ITarea {
  titulo: string;
  descripcion: string;
  completada: boolean;
  urgencia: Nivel;
 

  // En el constructor solo se inicializan los valores no se puede hacer ningun tipo de operacion
  constructor(
    titulo: string,
    descripcion: string,
    completada: boolean,
    urgencia: Nivel
  ) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.completada = completada;
    this.urgencia = urgencia;

  }

  resumen = () => {
    return `Tarea de Programación: ${this.titulo} - ${this.completada}`;
  };
}
