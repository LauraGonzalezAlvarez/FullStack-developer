/**
 * Función que recibe dos parámetros: cantidad y un arreglo de números.
 * Retorna un arreglo con la cantidad de números aleatorios que se solicita y valida que
 * dichos numeros no se repitan en el arreglo que se recibe (arr1).
 * @param {Number} cantidad
 * @param {Array} arr1
 */
let generarNumeroAleatorio = (cantidad, arr1) => {
    /**
     * @type {number} cantidadNumeros Corresponde a la cantidad de numeros aleatorios
     */
    let cantidadNumeros = 100;
    /**
     * @type {*[]} myArray Corresponde a un array con los numeros aleatorios
     */
    let myArray = [];
    /**
     * Ciclo que genera los numeros aleatorios
     */
    while (myArray.length < cantidad) {
        let numeroAleatorio = Math.ceil(Math.random() * cantidadNumeros);
        /**
         *
         * @type {boolean} existe Corresponde a una variable booleana que indica si el numero aleatorio ya existe en el array
         */
        let existe = false;
        /**
         * Función que valida si el numero aleatorio ya existe en  myArray
         */
        validarNumero(myArray, numeroAleatorio, existe);
        /**
         * Función que valida si el numero aleatorio ya existe en  arr1
         */
        validarNumeroArr1(arr1, numeroAleatorio, existe);
        /**
         * Si el numero aleatorio no existe en myArray y en arr1 se agrega
         */
        if (!existe) {
            myArray[myArray.length] = numeroAleatorio;
        }

    }
    /**
     * Imprime los numeros aleatorios
     */
   // document.write("números aleatorios : " + myArray);
    console.log({myArray});

}
/**
 * Función que valida si el numero aleatorio ya existe en  myArray
 * @param {Array} myArray Corresponde a un array con los numeros aleatorios
 * @param {number} numeroAleatorio Corresponde a un numero aleatorio
 * @param {boolean} existe Corresponde a una variable booleana que indica si el numero aleatorio ya existe en el array
 */
let validarNumero = (myArray, numeroAleatorio, existe) => {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray [i] === numeroAleatorio) {
            existe = true;
            break;
        }

    }
}

/**
 * Función que valida si el numero aleatorio ya existe en  arr1
 * @param {Array} arr1  Corresponde a un array con los numeros aleatorios que se digitan manualmente
 * @param {Number} numeroAleatorio Corresponde a un numero aleatorio
 * @param {boolean} existe Corresponde a una variable booleana que indica si el numero aleatorio ya existe en el array
 */
let validarNumeroArr1 = (arr1, numeroAleatorio, existe) => {
    for (let j = 0; j < arr1.length; j++) {
        if (arr1 [j] === numeroAleatorio) {
            existe = true;
            break;
        }
    }
}

/**
 * Llama a la función generarNumeroAleatorio, se le envia la cantidad de numeros a generar y el array arr1 que son los valores que no se deben repetir
 */
generarNumeroAleatorio(95, [72, 73, 74, 75, 77])