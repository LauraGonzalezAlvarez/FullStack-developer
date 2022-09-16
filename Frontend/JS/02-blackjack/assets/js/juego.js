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
let puntosJugador = 0,
    puntosComputadora = 0;

//Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const puntosHtml = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');


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
   // console.log(deck);
   // console.log(carta); // Carta debe salir de la baraja
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
// const valor = valorCarta (pedirCarta());
// console.log({valor});

// Turno de la computadora
const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHtml[1].innerText = puntosComputadora;
        // Crear una imagen
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugador.append(imgCarta);
        if (puntosMinimos > 21) {
            break;
        }
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    setTimeout(() => {// permite que se ejecute el codigo despues de un tiempo
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana');
        } else if (puntosComputadora > 21) {
            alert('Jugador gana');
        } else {
            alert('Computadora gana');
        }
    }, 10);
}

//Eventos
btnPedir.addEventListener('click', () =>{//la funcion  es un callback porque se envia como argumento a otra función
const carta = pedirCarta();
puntosJugador = puntosJugador + valorCarta(carta);
puntosHtml[0].innerText = puntosJugador;
const imgCarta = document.createElement('img');// Se crea la tarjeta pero está en memoria
    imgCarta.src = `assets/cartas/${carta}.png`;// Se le asigna la ruta de la imagen
    imgCarta.classList.add('carta');// Se le asigna la clase carta que es el estilo de la imagen de css
    divCartasJugador.append(imgCarta);// Se agrega la imagen al div
//Esto maneja el puntaje del jugador
    if (puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
    }else if (puntosJugador === 21) {
        console.warn('21, genial');
        btnPedir.disabled = true;
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click', () => {
    console.clear();
    deck = [];
    deck = crearDeck();
    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHtml[0].innerText = 0;
    puntosHtml[1].innerText = 0;
    divCartasJugador.innerHTML = '';
    btnPedir.disabled = false;
    btnDetener.disabled = false;
}