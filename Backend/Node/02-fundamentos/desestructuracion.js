const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'regeneracion',
    //getNombre: function(){ // Esta linea se simplifica abajo
     getNombre () {
        return `${ this.nombre } ${ this.apellido} ${ this.poder}`
    }

}

console.log(deadpool.getNombre() );

//Esta es la desestructuracion
// const nombre   = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder    = deadpool.poder;
console.log(nombre, apellido, poder);


