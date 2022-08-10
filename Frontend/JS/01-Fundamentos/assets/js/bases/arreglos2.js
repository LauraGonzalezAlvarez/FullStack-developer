let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo: ', juegos.length);// El largo de un arreglo

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];
console.log({primero, ultimo});

juegos.forEach((elemento, indice, arr) => {// Imprime el índice y el valor de cada elemento del arreglo y el areglo
    console.log({elemento, indice, arr});
});

let nuevaLongitud = juegos.push('F-Zero'); // Colocar un elemento al final del arreglo
console.log({nuevaLongitud, juegos});// Juego imprime el nuevo largo del arreglo

nuevaLongitud = juegos.unshift('Fire Emblem'); // Colocar un elemento al inicio del arreglo
console.log({nuevaLongitud, juegos});

juegos.pop(); // Elimina el ultimo elemento del arreglo, para verlo creo una variable e imprimo el arreglo, ejemplo en la línea de abajo
let juegoEliminado = juegos.pop();
console.log(juegoEliminado, juegos);

let pos = 1;
juegos.splice(pos, 2); // Elimina 2 elementos del arreglo, en la posición 1

let metroidIndex = juegos.indexOf('Metroid'); // Dice que posición tiene ese elemento, es CaseSensitive
console.log({metroidIndex});