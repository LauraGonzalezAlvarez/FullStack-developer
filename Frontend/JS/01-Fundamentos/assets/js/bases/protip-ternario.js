const elMayor =  (a,b) => { // funcion que devuelve el mayor de dos numeros
    return a > b ? a : b;
}
console.log(elMayor(10,15));


// Simplificación de la función anterior

const elMayor2 =  (a,b) => (a > b ) ? a : b;
console.log(elMayor2(10,15));

//----------------------------------------------------------------------------------------------------------------------
const tiendaMembresia =  (miembro) => (miembro) ? '2 Dólares' : '10 Dólares';
console.log(tiendaMembresia(true));

//----------------------------------------------------------------------------------------------------------------------
const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Bruce',
    amigo ? 'Thor' : 'loki', // Si amigo es true, entonces Thor, sino, loki
    elMayor(5,2)
];

console.log(amigosArr);
//----------------------------------------------------------------------------------------------------------------------
// Este es un if muy simplificado
const  nota = 65;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  : 'F'; // Si la nota es mayor o igual a 95, entonces A+, sino, si es mayor o igual a 90, entonces A, sino, si es mayor o igual a 85, entonces B+, sino, si es mayor o igual a 80, ent
// onces B, sino, F
console.log({nota, grado});