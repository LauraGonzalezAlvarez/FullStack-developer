/**
 * 2c = two of clubs
 * 2d = two of diamonds
 * 2h = two of hearts
 * 2s = two of spades
 * https://underscorejs.org/#each Se utiliza de esta libreria  shuffle para barajar el deck
 */

//Definición de variables y constates para el juego
let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['J', 'Q', 'K', 'A'];


// Esta función crea una baraja de cartas
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }
    deck = _.shuffle(deck); // shuffle baraja el deck
    console.log(deck);
    return deck;
}
crearDeck();


// ESta función sirve para pedir una carta de la baraja
const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en la deck';
    }
    const carta = deck.pop();
    console.log(deck);
    console.log(carta); // Carta debe salir de la baraja
    return carta;

}
//deck = []; Sirve para probar que el deck este vacía



// Valor de cada carta
//const valorCarta = (carta) => {
//    const valor = carta.substring(0, carta.length - 1); // Elimina la letra
//    let puntos = 0;
//    if (isNaN(valor)) { // Si el valor no es un numero
//        puntos = (valor === 'A') ? 11 : 10; // Si no es un numero asigna esos valores
//    } else {
//        puntos = valor * 1; // Si es un numero lo multiplica por 1, para que sea un numero porque es un string
//    }
//    console.log(puntos);
//}
//valorCarta('KC');


// Valor de cada carta mucho mas simplificado con una función ternaria
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}
const valor = valorCarta (pedirCarta());
console.log({valor});