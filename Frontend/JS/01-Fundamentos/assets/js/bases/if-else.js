
let a = 5;

if (a < 10) { // undefined, null , una asignación
    console.log('a es menor a 10');
} else {
    console.log('a es mayor a 10');
}
console.log('Fin del programa');


const hoy = new Date(); //new para crear un objeto
let dia = hoy.getDay(); //getDay para obtener el día de la semana
console.log(dia);

if (dia === 0) {
    console.log('Domingo');
}else{
    if (dia === 1) {
        console.log('Lunes');
    } else {
        if (dia === 2) {
            console.log('Martes');
        } else {
            if (dia === 3) {
                console.log('Miercoles');
            } else {
                if (dia === 4) {
                    console.log('Jueves');
                } else {
                    if (dia === 5) {
                        console.log('Viernes');
                    } else {
                        if (dia === 6) {
                            console.log('Sabado');
                        } else {
                            console.log('Error');
                        }
                    }
                }
            }
        }
    }
}

// Una forma más corta de escribir el if-else
if(dia ===0){
    console.log('Domingo');
} else if(dia ===1){
    console.log('Lunes');
}else if(dia ===2){
    console.log('Martes');
}

// Sin usar el if-else, o switch únicamente objetos
const diasLetras ={
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
}

//dia de la semana
console.log(diasLetras[dia] || 'Error dia no definido');

// Otro ejemplo para ver el funcionamiento con funciones de flecha
const otroEjemplo ={
    0:()=> 'Domingo -0',
    1:()=> 'Lunes-0',
    2:()=> 'Martes-0',
    3:()=> 'Miercoles-0',
    4:()=> 'Jueves-0',
    5:()=> 'Viernes-0',
    6:()=> 'Sabado-0'
}

//dia de la semana
console.log(otroEjemplo[dia]()) ;

// Este sería otro ejemplo con arreglos el código se ve más limpio,
const diasLetras2 = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
console.log(diasLetras2[dia] || 'Error dia no definido');