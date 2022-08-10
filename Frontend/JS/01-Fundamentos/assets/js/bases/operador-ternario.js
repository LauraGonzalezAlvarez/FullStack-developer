/**
 * Dias de semana abrimos a las 11
 *  pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si está abierto hoy
const dia = 0; // 1 = lunes, 2 = martes, 3 = miercoles, 4 = jueves, 5 = viernes, 6 = sabado, 0 = domingo
const horaActual = 10;

let horaApertura;
let mensaje; // está abierto, está cerrado , hoy abrimos a las xx

if (dia === 0 || dia === 6) { // si es domingo o sábado
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    horaApertura = 11;
}
console.log({horaApertura});
//------------------------------------------------------
if (horaActual >= horaApertura) {
    mensaje = 'Está abierto';
}else{
   // mensaje = 'Está cerrado hoy abrimos a las ' + horaApertura; //  ---> esta forma de concatenar ya no se utiliza
    mensaje = `Está cerrado hoy abrimos a las  ${horaApertura}`; // Es mejor trabajar con Backticks
}

console.log({horaApertura, mensaje});

//----------------------------------------------------------------------------------------------------------------------
//Otra forma de hacerlo mas sencillo

if ([0,6].includes(dia)) { // si es domingo o sábado
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    horaApertura = 11;
}
console.log({horaApertura});
//----------------------------------------------------------------------------------------------------------------------
// Esto se puede reducir mucho más con el operador ternario, esta es una forma más resumida que las anteriores

horaApertura = ([0,6].includes(dia) )? 9 : 11; // Si dentro del arreglo existe el dia, entonces se asigna 9, sino 11
mensaje = (horaActual >= horaApertura) ? 'Está abierto operador terniario' : `Está cerrado  Operador terniario hoy abrimos a las ${horaApertura}`;
console.log({horaApertura, mensaje});