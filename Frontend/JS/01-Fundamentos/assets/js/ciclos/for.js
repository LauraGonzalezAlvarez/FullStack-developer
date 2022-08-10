const  heroes = ['Flash', 'Arrow', 'Superman', 'Batman', 'Robin'];

console.warn('For tradicional');

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}
//----------------------------------------------------------------------------------------------------------------------
console.warn('For in');
// este for es mejor que el anterior poque es mas corto

for (let i in heroes) {
    console.log(heroes[i]);
}
//----------------------------------------------------------------------------------------------------------------------
console.warn('For of');
// para tener referencia a los elementos del arreglo
for (let heroe of heroes) {
    console.log(heroe);
}   // el for of es mejor que el for in porque no necesita una variable para guardar el índice