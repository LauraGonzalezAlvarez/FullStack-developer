let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'], // Esta coma es opcional
}; // Las llaves se asocian a un objeto literal

console.log( personaje ); // El punto y coma significa que termina ahí
console.log('Nombre: ', personaje.nombre);// Imprime el nombre del personaje
console.log('Nombre: ', personaje['nombre']); // Imprime el nombre del personaje
console.log('Edad: ', personaje.edad);
console.log('coors: ', personaje.coords.lat); // Concatena
console.log('No. Trajes: ', personaje.trajes.length); // Imprime el número de trajes
console.log('Ultimo traje: ', personaje.trajes[personaje.trajes.length-1]); // imprime el ultimo valor de esa parte del arreglo, es mejor hacer los calulos en el arreglo


const x = 'vivo';
console.log('Vivo ', personaje[x]);

//'ultima-pelicula': 'Infinity War'// a mi no me da

// Mas detalles

delete personaje.edad;  // Elimina la propiedad edad
console.log(personaje);

const entriesPares = Object.entries( personaje ); // convertir el objeto en un arreglo
console.log( entriesPares );

personaje.casado = true; // Agregar propiedades al objeto

Object.freeze( personaje ); // Bloquea el agregar propiedades nuevas al objeto, tampoco deja cambiar los existentes, pero si deja cambiar lo atributos por ejemplo la cambiar la direccion

const propiedades = Object.getOwnPropertyNames( personaje );
console.log({entriesPares});

const valores = Object.values( personaje );


