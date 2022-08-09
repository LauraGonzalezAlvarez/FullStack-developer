const regresaTrue =  () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log(true);
//console.log(!true); // Negación

console.log(!regresaFalse());// Negación de la función
console.warn('And');// Negación de la función
//console.log(true && true);// And true
//console.log(true && false);// And false

console.log('Ejemplo del orden si importa');
console.log(regresaFalse() && regresaTrue());// Solo ejecuta regresaFalse()

console.log(regresaTrue()  && regresaFalse());// Este regresa los dos métodos

console.warn('Or');// True
//console.log(true || false);// True
console.log(regresaFalse() || regresaTrue()); // Imprime to do y regresa falso


// Pro tip Asignación con operadores

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

//const a1 = true && 'Hola mundo';// Solo está evaluando el último valor
const a2 = 'Hola' && 'Mundo'; // Muestra solo el último
const a3 = soyFalse || 'Yo no soy falso'; // Como la primera tiene un valor falso muestra la frase 'Ya no soy falso?
console.log({ a2, a3});
