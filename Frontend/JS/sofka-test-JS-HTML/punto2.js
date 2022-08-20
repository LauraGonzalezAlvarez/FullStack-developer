/**
 * Función que recibe 4 parámetros y realiza validaciones
 * @param {String} nombre Recibe el nombre, debe contener al menos 3 palabras e iniciar con Mayuscula
 * @param {Number} cedula Recibe el numero de cedula, debe ser mayor a 1000000000.
 * @param {Number} telefono Recibe el numero de telefono debe iniciar por 3 y debe tener una longitud de 10 dígitos.
 * @param {String} email Recibe el correo  el cual debe ser válido
  */
const datosUsuario = (nombre, cedula, telefono, email) => {

    /**
     * @type {string[]}  El nombre es almacenado en un arreglo
     */
    const myArray = nombre.split(" ");
    /**
     * Valida si hay al menos 3 palabras en el nombre
     */
    (myArray[2]) ? console.log(JSON.stringify([myArray, ' compuesto po 3 o mas palabras'])) : console.log(JSON.stringify([myArray, 'no está compuesto por 3 palabras']));
    /**
     * Valida si el nombre inicia con mayuscula
     */
    for (let myArrayElement of myArray) {
        (myArrayElement === myArrayElement.charAt(0).toUpperCase() + myArrayElement.slice(1)) ? console.log(JSON.stringify([myArrayElement, 'inicia con mayuscula'])) : console.log(JSON.stringify([myArrayElement, ' no inicia con mayuscula']));
    }
    /**
     * Valida si el numero de cedula es mayor a 1000000000
     */
    (cedula > 1000000000) ? console.log(JSON.stringify([cedula, ' es mayor a 1000000000'])) : console.log(JSON.stringify([cedula, ' es menor a 1000000000']));
    /**
     * Valida si el numero de telefono inicia por 3 y tiene una longitud de 10 dígitos
     */
    (telefono.charAt(0) === '3' && telefono.charAt(9)) ? console.log(JSON.stringify([telefono, ' inicia en 3 y tiene 10 digitos'])) : console.log(JSON.stringify([telefono, '  no inicia en 3 o no tiene 10 digitos']));

    /**
     * Expresión regular para validar el correo
     * @type {RegExp}
     */
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    /**
     * Confirma si el correo es valido
     */
    if (emailRegex.test(email)) {
        console.log(JSON.stringify([email, 'valido']));
    } else {
        console.log(JSON.stringify([email, 'no  valido']));
    }
}



datosUsuario('Carmen Santiago', '123450000067', '3234560007', 'lhagonzalezagmail.com');