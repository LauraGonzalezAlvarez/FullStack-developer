/**
 * 2c = two of clubs
 * 2d = two of diamonds
 * 2h = two of hearts
 * 2s = two of spades
 * https://underscorejs.org/#each Se utiliza de esta libreria  shuffle para barajar el deck
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['J', 'Q', 'K', 'A'];

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

    console.log(deck);
    deck = _.shuffle(deck); // shuffle baraja el deck
    console.log(deck);
    return deck;

}

crearDeck();