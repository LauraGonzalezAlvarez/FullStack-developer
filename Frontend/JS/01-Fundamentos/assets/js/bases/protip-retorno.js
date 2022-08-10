function crearPersona( nombre, apellido){
    return{
        nombre: nombre,
        apellido: apellido
    }
}

const persona = crearPersona ('Fernando', 'Herrera');
console.log(persona);
//__________________________________________________//

function crearPersona1( nombre, apellido){// Si el nombre de la variable es igual al argumento no es necesario ponerlo
    return{nombre, apellido }
}
const persona1 = crearPersona1 ('Fernando', 'Herrera');
console.log(persona1);

//__________________________________________________//

const crearPersona2 =  ( nombre, apellido) => ({nombre, apellido}) // Con funcion de flecha   

const persona2 = crearPersona2 ('Fernando', 'Herrera');
console.log(persona2);
//__________________________________________________//

const imprimeArgumentos = (...args) => {// Imprime todos los argumentos, puede tener cualquier nombre no necesariamente args, se llama parametro rest
    console.log(args);
}
imprimeArgumentos(10, true, fale, 'Fernando', 'Hola');
//__________________________________________________//

const imprimeArgumentos1 = (edad,...args) => {// Si necesito que me tome edad indepentiende y luego lo otro 
    console.log({edad, args});
}
imprimeArgumentos1(10, true, fale, 'Fernando', 'Hola');
//__________________________________________________//

const imprimeArgumentos2 = (edad,...args) => {// Si necesito que me tome edad indepentiende y luego lo otro 
    //console.log({edad, args});
    return args;
}

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, fale, 'Fernando', 'Hola'); // Le estoy diciento que cada posición va a tener ese nombre
console.log({casado, vivo, nombre, saludo}); // Imprimo los pares 
//__________________________________________________//

const imprimeArgumentos3 = (edad,...args) => {// Si necesito que me tome edad indepentiende y luego lo otro 
    //console.log({edad, args});
    return args;
}

const {apellido: nuevoApellido}= imprimeArgumentos3(10, true, fale, 'Fernando', 'Hola'); // Que solo me imprima el apellido, tambien se le puede cambiar el nombre a la variable
console.log({nuevoApellido}); // Imprimo unicamente el apellido

//_____DesEstructuracion  de argumentos_______________________________//

const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,    
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = ({nombre, codeName, vivo, edad = 14, trajes}) =>{ // si no viene ninguna edad va a ser de 15
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes}); // Todo este código evita
    console.log('Trajes', persona.trajes); 

}