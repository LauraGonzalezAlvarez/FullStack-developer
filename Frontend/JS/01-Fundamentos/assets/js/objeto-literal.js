let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

console.log( personaje );
console.log('Nombre: ', personaje.nombre);
console.log('Nombre: ', personaje['nombre']);
console.log('Edad: ', personaje.edad);
console.log('coors: ', personaje.coords.lat); // Concatena
console.log('No. Trajes: ', personaje.trajes.length);
console.log('Ultimo traje: ', personaje.trajes[personaje.trajes.length-1]); // imprime el ultimo valor de esa parte del arreglo


const x = 'vivo';
console.log('Vivo ', personaje[x]);

//'ultima-pelicula': 'Infinity War'// a mi no me da

// Mas detalles

delete personaje.edad;
console.log(personaje);

const entriesPares = Object.entries( personaje ); // convertir el objeto en un arreglo
console.log( entriesPares );

personaje.casado = true; // Agregar propiedades al objeto

Object.freeze( personaje ); // Bloquea el agregar propiedades nuevas al objeto, tampoco deja cambiar los existentes, pero si deja cambiar lo atributos por ejemplo la cambiar la direccion

const propiedades = Object.getOwnPropertyNames( personaje );
console.log({entriesPares});

const valores = Object.values( personaje );


