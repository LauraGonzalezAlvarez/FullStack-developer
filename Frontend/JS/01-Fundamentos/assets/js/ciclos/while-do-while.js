const carros =['Ford', 'Mazda', 'Honda', 'Honda', 'Toyota'];
let i = 0;

console.warn(' While')

while(i < carros.length){
    console.log(carros[i]);
    i++;
}

// Este es una forma mucho más compacta de escribir el while
while(carros[i]){
    console.log(carros[i]);
    i++;
}
//----------------------------------------------------------------------------------------------------------------------
// Este ciclo siempre entra la primera vez
console.warn('Do While')
let j = 0;
do{
    console.log(carros[j]);
    j++;
}while (carros[j]);