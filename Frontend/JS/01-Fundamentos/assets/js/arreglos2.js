let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];
console.log({primero, ultimo});

juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

let nuevaLongitud = juegos.push('F-Zero'); // Colocar un elemento al final del arreglo
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Fire Emblem'); // Colocar un elemento al inicio del arreglo
console.log({nuevaLongitud, juegos});

juegos.pop(); // Elimina el ultimo elemento del arreglo, para verlo creo una variable y imprimo el arreglo

let pos = 1;
juegos.splice(pos, 2);

let metroidIndex = juegos.indexOf('Metroid'); // Dice que posición tiene ese elemento
console.log({metroidIndex});