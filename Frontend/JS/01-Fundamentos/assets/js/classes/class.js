class PersonaNatural{
    nombre ='';
    codigo ='';
    frase ='';

    constructor(nombre='sin nombre', codigo='son codigo', frase='sin frase'){
       // console.log('Hola');
        this.codigo= 'código';
        this.nombre= 'nombre';
        this.frase= 'frase';

    }
    quienSoy(){
        console.log(`Soy ${this.nombre} mi identidad es ${this.codigo}`);
    }
    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new PersonaNatural('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
console.log(spiderman);
spiderman.quienSoy();
spiderman.miFrase();