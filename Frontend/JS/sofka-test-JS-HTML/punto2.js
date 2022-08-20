//Define la cantidad de numeros aleatorios.
let cantidadNumeros = 100;
let myArray = []
while(myArray.length < cantidadNumeros ){
    let numeroAleatorio = Math.ceil(Math.random()*cantidadNumeros);
    let existe = false;
    for(let i=0;i<myArray.length;i++){
        if(myArray [i] === numeroAleatorio){
            existe = true;
            break;
        }
    }
    if(!existe){
        myArray[myArray.length] = numeroAleatorio;
    }

}
document.write("números aleatorios : " + myArray);

let randomFromListGenerator = function (list) {
    let position = 0;

    for (let i=0, l=list.length; i<l; i++) {
        let random = Math.floor((Math.random() * l));
        let aux = list[i];
        list[i] = list[random];
        list[random] = aux;
    }

    return function () {
        return list[position++ % list.length];
    }
}

let nextRandomFromList = randomFromListGenerator ([1,2,3,4,5,6,7,8,9,10]);

let newRandom = nextRandomFromList();
document.write("números aleatorios : " + newRandom);