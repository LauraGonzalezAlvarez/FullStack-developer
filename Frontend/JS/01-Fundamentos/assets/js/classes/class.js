class PersonaNatural{
    nombre ='';
    codigo ='';
    frase ='';

    constructor(nombre='sin nombre', codigo='son codigo', frase='sin frase'){
       // console.log('Hola');
        this.codigo= 'codigo';
        this.nombre= 'nombre';
        this.frase= 'frase';

    }
}

const spiderman = new PersonaNatural('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
console.log(spiderman);