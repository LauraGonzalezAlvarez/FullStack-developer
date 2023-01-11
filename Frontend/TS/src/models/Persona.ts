export class Persona {

nombre: string;
apellidos: string;
edad: number;

// this hace referencia a la clase
constructor(nombre: string, apellidos: string, edad: number){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
}

saludar(): void{
    console.log(`Hola, me llamo ${this.nombre} ${this.apellidos} y tengo ${this.edad} años`);
}

}

export class Trabajador extends Persona{
    sueldo: number;

    // super hace referencia  al constructor del padre
    // Siempre en los constructores de clase que heredan lo que van a tener es una llamada super al constructor
    constructor(nombre: string, apellidos: string, edad: number, sueldo: number){
        super(nombre, apellidos, edad); // Llamada al constructor del padre
        this.sueldo = sueldo;
    }

    saludar(): void {
        // Estamos extendiendo el metodo saludar de la clase Persona
        super.saludar();
        console.log(`Mi sueldo es de ${this.sueldo} euros`)
    }
}

export class Jefe extends Persona{
    trabajadores: Trabajador[] = [];

    constructor(nombre: string, apellidos: string, edad: number, sueldo: number){
        super(nombre, apellidos, edad);
    }
}