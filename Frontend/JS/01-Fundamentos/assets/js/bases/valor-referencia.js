// Son  primitivos En este ejemplo estamos pasando la información por Valor.
let a = 10;
let b = a;
    a = 30;

console.log({a, b});

//----------------------------------------------------------------------------------------------------------------------/
// Son objetos y siempre se pasan por referencia.

let juan    = {nombre: 'Juan'};
let ana     =  {...juan}; // Operador Spread sirver para separar las propiedades de un objeto
ana.nombre = 'Ana';

console.log({juan, ana});

//const cambiarNombre = (...persona) => {// Parámetro rest : Une todos los argumentos en una variable y lo transforma como un arreglo
const cambiarNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony  = cambiarNombre(peter);

console.log({peter, tony});


// Arreglos----------------------------------------------------------------------------------------------------------------------/
// En este ejemplo vemos que agregé limon a otrasFrutas pero tambien se añadió a frutas y no lo queremos
const frutas3 = ['Manzana', 'Pera', 'Naranja'];
const otraFrutas2 = frutas3;
otraFrutas2.push('Limon');
console.table({frutas3, otraFrutas2});

//----------------------------------------------------------------------------------------------------------------------/
// Utilizamos el spread para romper dicha relación anterior
// tambien se puede utilizar frutas.slice para romper la relación
const frutas = ['Manzana', 'Pera', 'Naranja'];
const otraFrutas = [...frutas];
otraFrutas.push('Limon');
console.table({frutas, otraFrutas});

//----------------------------------------------------------------------------------------------------------------------/
// Funcion para medir el rendimiento de algo

console.time('slice');
const otraFrutass = frutas.slice();
console.timeEnd('slice');