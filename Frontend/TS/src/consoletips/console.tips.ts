
// console log

console.log("Hola")

let lista = ["Uno", "Dos", "Tres"];
lista.forEach(() => console.log); // Para recorrer la lista e irla mostrando

let nombre = "Juan";
console.log(`Hola, ${nombre}`); // Para concatenar	


// Concole Clear
console.clear(); // Para limpiar la consola

// Console Assert
var a: number = 100;
console.assert(a ==1000, "Mensaje", `Otro mensaje: ${a}`); // Operador ternario, imprime Mesaje siento V y Otro mensaje siendo F

// Console Count
function contador(texto: string){
    console.count(texto);
}
 
contador("Hola"); // 1
contador("Adiós"); // 2
contador("Hola");// 1
console.countReset(); //reseteo del contador

// Console Info, Warn o Error
console.info("Texto informativo");
console.warn("Texto aviso");
console.error("Texto error");

// Console Trace
function uno(){
    dos();
}
function dos(){
    tres();
}
function tres(){
    console.trace(); // Trazar por donde se ha ido ejecutando para llegar a este punto
}

uno(); // inicia el trace por consola

// Console DIR --> Mostrar Valroes de objetos de manera bonita

let coche ={
    nombre: "Audi",
    matricula: "1234",
    especificaciones: [
        {
            motor: "1.6",
            potencia: "100cv"
        }
    ]
}
console.dir(coche);


// Console Table --> Mostrar objetos o listas en tablas
console.table(coche);

//Console.time --> Contabilizar el tiempo de ejecución

function espera(){
    for(let index = 0; index < 1000; index++){
        //...
    }
}

console.time(); // inicial el cronometro
espera();
console.timeEnd(); // finaliza el contablizar el tiempo que ha pasado


//console.group Agrupaciones de console

console.group();
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.groupEnd();
