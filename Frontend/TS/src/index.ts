
// Sintaxis, variables y estructuras de control



// Imprimir en consola
console.log('Hola antonella');

// Declaracion de Variables
var nombre = "Martín";
console.log("hola, " + nombre);
console.log("qué tal", nombre, "?");
console.log(`¿Cómo han ido las vacaciones, ${nombre} ?`);

let email = "martin@imaginagroup.com" // Variable ámbio local, orientado a crear variables dentro de funciones 
console.log(`el email de ${nombre} es ${email}`)

const PI: number =3.1416; // Es una constante no puede reasignar el valor, asignamos valores a un espacio en concreto pero no pueden ser modificados

// En TS tenemos tipado debil, fuerto e inferido
// Js es de tipado inferido por eso el tipo de las variables puede cambiar dinamicamente 
// Tipado debil: no se especifica el tipo de dato de la variable
// Tipado fuerte: se especifica el tipo de dato de la variable
// No es obligatorio tipar pero si que es reocmendado 
// Si tipamos una variable ya no podrá cambiar su tipo
var nombre2: string = "Martín";

var apellidos:any = "San José"; // Tipo any hace que la variable pueda cambiar de tipo, pero no es recomendable
apellidos = 3;

var error: boolean;
error = false;

console.log(`¿Hay error?: ${error}`);

//Instanciación múltiple de variables

let a:string, b:boolean, c:number; // Instancia 3 variables sin valor inicial
a = "TypesCript";
b = true;
c = 8.9;

// BuiltIn Types: number, string, boolean, void, null y undefined estos son los primitivos

// Tipos más complejos que los tipos primitivos, 
let listaTareas: string[] = ["Tarea 1", "Tarea 2"]

// Combinación de tipos en listas
let valores: (string | number | boolean)[] = [false, "Hola", true, 56] // esta lista puede tener valores de tipo string, number o boolean

// Enumerados, por defecto inician en cero,pero si yo inicio en 7 sigue incrementando el valor a cada variable
// Tambien se les puede asignar letra en vez de numero
// "Completado" = 7
// "Completado" = "p"
enum Estados {
    "Completado",
    "Incompleto",
    "Pendiente"
}

let estadoTarea: Estados = Estados.Pendiente;

// Dentro del estadar de código limpio es muy importante saber que esperar tipand
enum PuestoCarrera{
    "Primero" = 1,
    "Segundo",
    "Tercero"
}
let puestoMaraton:PuestoCarrera = PuestoCarrera.Segundo;


// Interfaces
interface Tarea{
    nombre: string,
    estado: Estados,
    urgencia: number

}
// Podemos crear variables que sigan la interface Tarea
let tarea1: Tarea = {
    nombre: "Martín",
    estado: Estados.Completado,
    urgencia: 10
}
console.log(`tarea: ${tarea1.nombre}`);
//Types de TypeScript
type Producto = {
    precio: number,
    nombre: string,
    anio: number
}


// Asignación multiple de variables
let miTarea = {
    titulo: 'Mi tarea',
    estado: Estados.Completado,
    urgencia: 1
}

// Declaracion 1 a 1
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;


// Declaración con factor de propagación (Spred)
let {titulo, estado, urgencia} = miTarea;

// En listas
let listaCompraLunes: string[] =[] = ["Leche", "Patatas"]
let listaCompraMartes: string[] = [...listaCompraLunes, "Pan", "Huevos"]; // coge todos los valores de la lista de la compra del lunes y además le añade pan y huevos
let listaCompraMiercoles: string[] = ["Carne", "Pescado"]
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles]

// En Objetos
let estadoApp = {
    usuario: "Admin",
    session: 3,
    jwt: "Bearer2345345345"
}

//Cambiar un valor por propagación
let nuesvoEstado = { // Lo que hacemos es que sobre escribe 
    ...estadoApp,
    session: 4
}


// La diferencia entre una interface y los tipos es que los tipos son algo más complejo

let coche: Producto = {
    nombre: "Audi",
    precio: 45000, 
    anio: 2010
}

// ** CONDICIONALES: 

// Operador Ternario 
// Si es true se ejecuta Coche: ${coche.nombre} es viejo
// Si es false se ejecuta Coche: ${coche.nombre} es nuevo
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`);

// If -else if -else
if (error == false){ // Esto no se maneja así sino como está abajo, queda mas profesional
    console.log("Hola");
}

//Los falsos, ceros, vacio, undefand, null se tratarán valores falsos 
// Mientras que si no serán verdadero 

// If -else if -else
if(error){
    console.log("Hay un error");
} else {
    console.log("No hay un error");
}

// If -else if -else
if(coche.anio < 2010){
    console.log(`Coche: ${coche.nombre} es viejo`)
}else if (coche.anio === 2010){
    console.log(`Coche: ${coche.nombre} es 2010`)
}else {
    `Coche: ${coche.nombre} es nuevo`
}

// Switch
switch (tarea1.estado){
    case Estados.Completado:
        console.log("Estado Completado");
                break;
    case Estados.Incompleto:
        console.log("Estado Incompleto");
                break;
    case Estados.Pendiente:
        console.log("Estado Pendiente");
                break;
    default:
        break;

}

// BUCLES

let listaTareasNuevas: Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 0
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Completado,
        urgencia: 15
    }
]

// Formas de iterar, esto es un callback
// For each para iterar en listas
listaTareasNuevas.forEach(
    (tarea: Tarea, index: number) => {
        console.log(` ${index}- ${tarea.nombre}`);        
    }
 );

 // For in para objetos, cadenas de texto
for (const key in listaTareasNuevas) {
    if (Object.prototype.hasOwnProperty.call(listaTareasNuevas, key)) {
        const element = listaTareasNuevas[key];
        
    }
}

// while

 while (tarea1.estado !== Estados.Completado) {
     tarea1.urgencia ++;
     if(tarea1.urgencia == 5){
        tarea1.estado = Estados.Completado
        break;
     }else{
        tarea1.urgencia ++;
     }
 }

 // Do while, se ejecuta al menos una vez

 do {
    tarea1.urgencia ++;
    tarea1.estado = Estados.Completado;
 } while (tarea1.estado !== Estados.Completado);