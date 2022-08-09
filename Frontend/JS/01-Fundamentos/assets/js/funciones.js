function saludar(){ // Muy tradicional pero no es lo conveniente
    console.log('Hola Mundo');
}

saludar(); // Ejecuta la funcion

const saludar2 = function (){ // Funcion anonima, medida de seguiridad de que no se puede reescribir
    console.log('Hola Mundo');
}
saludar2();


function saludar3( nombre ){ // Muy tradicional pero no es lo conveniente
    console.log('Hola Mundo ' + nombre);
}
saludar3( 'Fernando' ); // le envio el nombre a la funcion de arriba


const saludarFlecha = () =>{ // Función flecha,
    console.log('Hola flecha');

}

saludarFlecha();

const saludarFlecha2 =  (nombre)  =>{ // Función flecha  con parametro, los parenteis son opcionales, pero es buena practica dejarlos 
    console.log('Hola flecha' + nombre);

}

saludarFlecha2('Melissa');

// Retorno de las funciones


function sumar ( a, b ){
    return a + b;
}

console.log( sumar(1,2));


const sumar2 = ( a, b ) => { // Si solo tengo una linea se puede simplificar como está abajo (sumar3)
    return a + b;
}
console.log( sumar2(1,2));

const sumar3 = ( a, b ) =>  a + b;// Funcion de flecha simplificado
console.log( sumar3(2,2));

function getAleatorio(){
    return Math.random();
}
console.log( getAleatorio() );

const getAleatorio2 =  () => Math.random();  // Con la funcion de flecha, es constante porque no se va a cambiar el valor  

console.log( getAleatorio2() );