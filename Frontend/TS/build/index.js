"use strict";
// Sintaxis, variables y estructuras de control
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cursos_mock_1 = require("./mock/cursos.mock");
const Persona_1 = require("./models/Persona");
const ITarea_1 = require("./models/interfaces/ITarea");
const Programar_1 = require("./models/interfaces/Programar");
const Curso_1 = require("./models/Curso");
const Estudiante_1 = require("./models/Estudiante");
// Imprimir en consola
console.log('Hola antonella');
// Declaracion de Variables
var nombre = "Martín";
console.log("hola, " + nombre);
console.log("qué tal", nombre, "?");
console.log(`¿Cómo han ido las vacaciones, ${nombre} ?`);
let email = "martin@imaginagroup.com"; // Variable ámbio local, orientado a crear variables dentro de funciones 
console.log(`el email de ${nombre} es ${email}`);
const PI = 3.1416; // Es una constante no puede reasignar el valor, asignamos valores a un espacio en concreto pero no pueden ser modificados
// En TS tenemos tipado debil, fuerto e inferido
// Js es de tipado inferido por eso el tipo de las variables puede cambiar dinamicamente 
// Tipado debil: no se especifica el tipo de dato de la variable
// Tipado fuerte: se especifica el tipo de dato de la variable
// No es obligatorio tipar pero si que es reocmendado 
// Si tipamos una variable ya no podrá cambiar su tipo
var nombre2 = "Martín";
var apellidos = "San José"; // Tipo any hace que la variable pueda cambiar de tipo, pero no es recomendable
apellidos = 3;
var error;
error = false;
console.log(`¿Hay error?: ${error}`);
//Instanciación múltiple de variables
let a, b, c; // Instancia 3 variables sin valor inicial
a = "TypesCript";
b = true;
c = 8.9;
// BuiltIn Types: number, string, boolean, void, null y undefined estos son los primitivos
// Tipos más complejos que los tipos primitivos, 
let listaTareas = ["Tarea 1", "Tarea 2"];
// Combinación de tipos en listas
let valores = [false, "Hola", true, 56]; // esta lista puede tener valores de tipo string, number o boolean
// Enumerados, por defecto inician en cero,pero si yo inicio en 7 sigue incrementando el valor a cada variable
// Tambien se les puede asignar letra en vez de numero
// "Completado" = 7
// "Completado" = "p"
var Estados;
(function (Estados) {
    Estados[Estados["Completado"] = 0] = "Completado";
    Estados[Estados["Incompleto"] = 1] = "Incompleto";
    Estados[Estados["Pendiente"] = 2] = "Pendiente";
})(Estados || (Estados = {}));
let estadoTarea = Estados.Pendiente;
// Dentro del estadar de código limpio es muy importante saber que esperar tipand
var PuestoCarrera;
(function (PuestoCarrera) {
    PuestoCarrera[PuestoCarrera["Primero"] = 1] = "Primero";
    PuestoCarrera[PuestoCarrera["Segundo"] = 2] = "Segundo";
    PuestoCarrera[PuestoCarrera["Tercero"] = 3] = "Tercero";
})(PuestoCarrera || (PuestoCarrera = {}));
let puestoMaraton = PuestoCarrera.Segundo;
// Podemos crear variables que sigan la interface Tarea
let tarea1 = {
    nombre: "Martín",
    estado: Estados.Completado,
    urgencia: 10
};
console.log(`tarea: ${tarea1.nombre}`);
// Asignación multiple de variables
let miTarea = {
    titulo: 'Mi tarea',
    estado: Estados.Completado,
    urgencia: 1
};
// Declaracion 1 a 1
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;
// Declaración con factor de propagación (Spred)
let { titulo, estado, urgencia } = miTarea;
// En listas
let listaCompraLunes = [] = ["Leche", "Patatas"];
let listaCompraMartes = [...listaCompraLunes, "Pan", "Huevos"]; // coge todos los valores de la lista de la compra del lunes y además le añade pan y huevos
let listaCompraMiercoles = ["Carne", "Pescado"];
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles];
// En Objetos
let estadoApp = {
    usuario: "Admin",
    session: 3,
    jwt: "Bearer2345345345"
};
//Cambiar un valor por propagación
let nuesvoEstado = Object.assign(Object.assign({}, estadoApp), { session: 4 });
// La diferencia entre una interface y los tipos es que los tipos son algo más complejo
let coche = {
    nombre: "Audi",
    precio: 45000,
    anio: 2010
};
// ** CONDICIONALES: 
// Operador Ternario 
// Si es true se ejecuta Coche: ${coche.nombre} es viejo
// Si es false se ejecuta Coche: ${coche.nombre} es nuevo
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`);
// If -else if -else
if (error == false) { // Esto no se maneja así sino como está abajo, queda mas profesional
    console.log("Hola");
}
//Los falsos, ceros, vacio, undefand, null se tratarán valores falsos 
// Mientras que si no serán verdadero 
// If -else if -else
if (error) {
    console.log("Hay un error");
}
else {
    console.log("No hay un error");
}
// If -else if -else
if (coche.anio < 2010) {
    console.log(`Coche: ${coche.nombre} es viejo`);
}
else if (coche.anio === 2010) {
    console.log(`Coche: ${coche.nombre} es 2010`);
}
else {
    `Coche: ${coche.nombre} es nuevo`;
}
// Switch
switch (tarea1.estado) {
    case Estados.Completado:
        console.log("Estado Completado");
        break;
    case Estados.Incompleto:
        console.log("Estado Incompleto");
        break;
    case Estados.Pendiente:
        console.log("Estado Pendiente");
        break;
    default:
        break;
}
// BUCLES
let listaTareasNuevas = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 0
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Completado,
        urgencia: 15
    }
];
// Formas de iterar, esto es un callback
// For each para iterar en listas
listaTareasNuevas.forEach((tarea, index) => {
    console.log(` ${index}- ${tarea.nombre}`);
});
// For in para objetos, cadenas de texto
for (const key in listaTareasNuevas) {
    if (Object.prototype.hasOwnProperty.call(listaTareasNuevas, key)) {
        const element = listaTareasNuevas[key];
    }
}
// while
while (tarea1.estado !== Estados.Completado) {
    tarea1.urgencia++;
    if (tarea1.urgencia == 5) {
        tarea1.estado = Estados.Completado;
        break;
    }
    else {
        tarea1.urgencia++;
    }
}
// Do while, se ejecuta al menos una vez
do {
    tarea1.urgencia++;
    tarea1.estado = Estados.Completado;
} while (tarea1.estado !== Estados.Completado);
//*********************************************************************************************** */
// Funciones: Bloque de codigo reutilizable e incluso podemos hacerlo generico en caso de TS que pueda obtener cualquier tipo de parametro que haga
// Algún tipo de ejecucción y que lo podamos reutilizar para obtener una respuesta en concreta 
// El nombre de la funcion debe ser en minuscula camelcase(mayus inicial) o snakecase (guion bajo) anmbas se pueden utilizar
/** */ //Para documentar
/**
 * Funcion que muestra saludo por consola
 */
function saludar() {
    let nombre = "Martín";
    console.log(`Hola ${nombre}`);
}
//Invocar la función
saludar();
/**
 * Función que muestra un saludo a una persona por consola
 * @param nombre Nombre de la persona a saludar
 */
function saludarPersona(nombre) {
    console.log(`Hola ${nombre}`);
}
const persona = "Martín";
saludarPersona(persona); // Paso por valor
saludarPersona("Juan");
function despedirPersona(nombre = "Pepe") {
    console.log(`Adios ${nombre}`);
}
despedirPersona(); // Si no le paso nada, me va a tomar el valor por defecto
despedirPersona("Juan"); // Si le paso un valor, me va a tomar el valor que le paso
function despedidaOpcional(nombre) {
    if (nombre) {
        console.log(`Adios ${nombre}`);
    }
    else {
        console.log("Adios");
    }
}
function despedidaOpcionalDos(nombre) {
    if (nombre) {
        console.log(`Adios ${nombre}`);
    }
    else {
        console.log("Adios");
    }
}
despedidaOpcional(); // Si no le paso nada, me va a tomar el valor por defecto
despedidaOpcional("Juanjo"); // Si le paso un valor, me va a tomar el valor que le paso
function variosParametros(nombre, apellido, edad = 18) {
    if (apellido) {
        console.log(`Hola ${nombre} ${apellido}  tiene ${edad} años`);
    }
    else {
        console.log(`Hola ${nombre}  tiene ${edad} años`);
    }
}
variosParametros("Martín", "Perez", 20); // Martín Perez tiene 20 años
variosParametros("Martín", "Perez"); // Martín Perez tiene 18 años
variosParametros("Martín"); // Martín tiene 18 años
variosParametros("Martín", undefined, 20); // Martín tiene 20 años
// variosParametros(nombre="Martín", apellido="Perez", edad=30); // Tambien se puede así, pero me marca error
function ejemploVariosTipos(a) {
    if (typeof a === "string") {
        console.log("Es un string");
    }
    else if (typeof a === "number") {
        console.log("Es un numero");
    }
    else {
        console.log("Es otra cosa");
        throw Error("No es un string ni un numero");
    }
    ejemploVariosTipos("Hola");
    ejemploVariosTipos(5);
    // Que retorna una funcion
    function ejemploReturn(nombre, apellido) {
        return 3;
    }
    const nombreCompleto = ejemploReturn("Martín", "Perez");
    console.log(nombreCompleto); // Marín Perez
    console.log(ejemploReturn("Martín", "San José")); // Marín Perez
    // Cuando no sabemos cuantos parametros vamos a recibir
    // Con los tres puntos le decimos que puede recibir cualquier cantidad de parametros
    function ejemploMultipleParams(...nombres) {
        nombres.forEach((nombre) => {
            console.log(nombre);
        });
    }
    // Las listas y objetos se pasan por referencia
    ejemploMultipleParams("Martín", "Juan", "Pedro", "Alba");
    ejemploMultipleParams("Martín");
    let empleadoMartín = {
        nombre: "Laura",
        apellidos: "Gonzalez",
        edad: 28
    };
    const mostrarEmpleado = (empleado) => `${empleado.nombre} tiene ${empleado.edad} años`; // :string devuelve un string
    //Llamamos a la función 
    mostrarEmpleado(empleadoMartín);
    const datosEmpleado = (empleado) => {
        if (empleado.edad > 70) {
            return `Empleado ${empleado.nombre} está en edad de jubilación`;
        }
        else {
            return `Empleado ${empleado.nombre}  está en edad laboral`;
        }
    };
    datosEmpleado(empleadoMartín); // Empleado Martín está en edad laboral
    // Estamos definiendo una función anonima () => `cobrar` como parametro de la función obtenerSalario
    const obtenerSalario = (empleado, cobrar) => {
        if (empleado.edad > 70) {
            return;
        }
        else {
            cobrar(); // Callback a ejecutar
        }
    };
    const cobrarEmpleado = (empleado) => {
        console.log(`Se ha cobrado al empleado ${empleado.nombre} su salario`);
        obtenerSalario(empleadoMartín, () => 'Cobrar Martín'); // Se ha cobrado al empleado Martín su salario
        // Async Funtions: En algun momento que este tarea se lleve a cabo, las funciones asincronas lo unico que hacen es estar esperando para completar una tarea para seguir a la siguiente linea
        function ejemploAsync() {
            return __awaiter(this, void 0, void 0, function* () {
                // Await: Si utilizamos esta palabra sin estar dentro de una funcion asincrona, nos va a marcar error
                yield console.log("Tarea pra completar antes de seguir con la secuencia de instrucciones ");
            });
        }
        ejemploAsync() // Quiero ejecutar esta funcion ejemploAsync de forma asincrona
            .then((respuesta) => {
            console.log("Respuesta", respuesta);
        }).catch(error => {
            console.log("Error", error);
        }).finally(() => "Todo ha terminado");
        //.then callback que se va a ejecutar cuando la promesa se resuelva
        //.catch para capturar los errores
        //.finally Si todo ha salido correctamente 
        // Funciones Generatoras: Pueden emitir nuevos valores y nosotros vamos a poder ir nutriendonos, el concepto de la funcion generadora
        // Es el mismo que los observables, que emiten valores yo los voy escuchando los voy recibiendo y los voy gestionando 
        function* ejemploGenerator() {
            // Yield: Sirve para emitir un nuevo valor o ejecutar una funcion, las funciones asincronas lo unico que hacen es estar esperando para completar una tarea para seguir a la siguiente linea
            // como un metodo de suscripcion
            let index = 0;
            while (index < 5) {
                //Emitimos un valor incrementado
                yield index++;
            }
        }
        // Guardamos la funcion generadora en una variable
        let generadora = ejemploGenerator();
        // Accedemos a los valroes emitidos
        console.log(generadora.next().value); // 0 con value estamos accediento al valor 
        console.log(generadora.next().value); // 1 
        console.log(generadora.next().value); // 2 
        console.log(generadora.next().value); // 3 
        console.log(generadora.next().value); // 4
        // Worker= se utiliza en Angular para gestionar el estado de la aplicacion, pongo a escuchar una funcion a determinado evento y entonces segun lo voy escuchando
        // pongo a trabajar a otras funciones asincronas hasta que termine
        // el watcher va a sesr el encargado de llamar al worker
        function* watcher(valor) {
            yield valor; // emitimos el valor inicial
            yield* worker(valor); // luego llamamos a las emisiones del worker para que emita otros valores
            yield valor + 4; // emitimos el valor final 10
        }
        function* worker(valor) {
            yield valor + 1;
            yield valor + 2;
            yield valor + 3;
        }
        let generatorSaga = watcher(0);
        console.log(generatorSaga.next().value); // 0 (lo ha hecho el watcher)
        console.log(generatorSaga.next().value); // 1 (lo ha hecho el worker)
        console.log(generatorSaga.next().value); // 2 (lo ha hecho el worker)
        console.log(generatorSaga.next().value); // 3 (lo ha hecho el worker)
        console.log(generatorSaga.next().value); // 4 (lo ha hecho el watcher)
        // Sobre carga de funciones
        // Esto especificamente se ve especialmente en metodos donde tenemos vaios metodos que se llaman igual pero  reciben parametros distintos hagan operaciones distintas
        // La utilizaremos cuando una misma funcion dependiendo del tipo de parametros que reciba haga una cosa u otra
        // function mostrarError(error: string){
        //     console.log("ha habido un error:", error);
        // }
        // function mostrarError(error: number){
        //     console.log("ha habido un error:", error);
        // }
        // La sobrecarga puede ser util en determinados casos pero habitualmente es mucho mas elegante y mas sencillo la siguiente solucion
        // con un dondicional le especificamos si es de un tipo o del otro hacer algo
        // Para evitar duplicidad de codigo y errores
        function mostrarError(error) {
            console.log("ha habido un error:", error);
        }
        // ---------------------------Eventos y persistencia de datos en el navegador---------------------------
        // En las aplicaciones requeremos de datos pueden venir de una base de datos, apirestFul, pero tambien hay informacion que queremos almacenar
        // en el navegador para no tener que solicitarlo constantemente, podemos almacenar objetos, listas, instancias,token, como queremos que muestre
        // la informacion al usuario
        /**
         * Persistencia de datos
         * 1. LocalStorage ---> Almacena los datos en el navegador (no se eliminan automáticamente)
         * 2. SessionStorage -> La diferencia radica en la sesión de navegador. Es decir, los datos se persisen en la sesión de navegador
         * 3. Cookies --------> Tienen una fecha de caducidad y tambien tienen un ámbito de URL
         */
        // LocalStorage
        // import{setCookie, deleteCookie, deleteAllCookies, getCookieValue } from 'cookies-utils';
        // https://www.npmjs.com/package/cookies-utils    --> direccion de donde se descargó la dependencia
        // Para importar una determinada funcion de un modulo
        //LocalStora y SessionStora
        function guardar() {
            //nombre es la clave y la propiedad valor seria la clave
            localStorage.set("nombre", "valor");
        }
        function leer() {
            //nombre es la clave y la propiedad valor seria la clave
            let nombre = localStorage.get("nombre"); // lo podemos guardar en una variable si queremos
            let nombreSession = sessionStorage.get("nombre");
            function borrarItem(item) {
                localStorage.removeItem(item);
                sessionStorage.removeItem(item);
            }
            function borrarTodas() {
                localStorage.clear();
                sessionStorage.clear();
            }
        }
        // cookie
        // Esto lo saque de la pagina  https://www.npmjs.com/package/cookies-utils
        // const cookieOptions = {
        //     name: "usuario", // string,
        //     value: "Martin", // string,
        //     expires: new Date(2099, 10, 1), // optional Date,
        //     path: "/", // optional string,
        // };
        // // Seteamos la Cookie
        // setCookie(cookieOptions);
        // // leer una Cookie
        // let cookieLeida = getCookieValue("usuario");
        // // eliminamos la cookie
        // deleteCookie("usuario");
        // Eliminar todas las Cookies
        // deleteAllCookies(cookieOptions);
        // Clase Temporizador
        // Las clases inician en mayus
        class Temporizador {
            empezar() {
                // Funcion que recibe un callback, que es este () => {}
                setTimeout(() => {
                    // El this especifica el ámbito de la clase 
                    // si no tenemos la funcion terminar
                    // Comprobar que exista la función terminar como callback
                    if (!this.terminar)
                        return; // si tengo una sola función la puedo poner en la misma linea
                    // Cuando haya pasado el tiempo, se ejecutará la función terminar
                    this.terminar(Date.now());
                }, 10000); // 10 segundos
            }
        }
        const miTemporizador = new Temporizador();
        //Definimos la función dle callback a ejecutar cuando termine el tiempo
        miTemporizador.terminar = (tiempo) => {
            console.log("Evento terminado en:", tiempo);
        };
        // Lanzamos el temporizador 
        miTemporizador.empezar(); // Se inicia el timeout y cuando termine, se ejecuta la funcion temrinar()
        // Propio de node.js
        setInterval(() => console.log("Tic"), 1000); // Imprimir Tic cada segundo por consola
        // Eliminar la ejecucción de la función
        delete miTemporizador.terminar;
        // El DOM es el HTML que se renderiza 
        // document.getElementById("boton-login").addEventListener("click", () => {
        //     console.log("Has hecho click en login");
        // }
        // -------------Clases y objetos-----------------
        // import { Curso } from "./models/Curso";
        // import { Estudiante } from "./models/Estudiante";
        // Creamos un curso
        // Este codigo está bien, si vamos a crear los cursos en esa misma clase
        // const cursoTS = new Curso("TypesCript", 15);
        // const cursoJS = new Curso("JavaScript", 20);
        // const listaCursos: Curso[] = [];
        // Usamos el mock = Son datos inventados 
        const listaCursos = cursos_mock_1.LISTA_CURSOS;
        // listaCursos.push(cursoTS, cursoJS); //[Lista de cursos]
        // Creamos un estudiante
        const martin = new Estudiante_1.Estudiante("Martin", listaCursos, "Gonzalez");
        console.log(`${martin.nombre} estudia:`);
        // Iteramos por cada uno de ellos
        martin.cursos.forEach((curso) => {
            console.log(`- ${curso.nombre} (${curso.horas}) `); // -Typescript (15 horas)
        });
        const cursoAngular = new Curso_1.Curso("Angular", 40);
        martin.cursos.push(cursoAngular); // Añadimos
        martin.horasEstudiadas;
        // Saber la instancia de un objeto/ variable
        // typeof sirve para saber el tipo de una variable 
        // instanceof sirve para saber si es la instancia de un tipo en concreto
        // Tratar de evitar los any
        // Si nosotros tipamos y documentamos bien no vamos a tener que usar mucho esas dos palabras
        // Conocer las horas de Estudiante
        let fechaNacimiento = new Date(1991, 10, 10);
        if (fechaNacimiento instanceof Date) {
            console.log("Es una instancia de Date");
        }
        if (martin instanceof Estudiante_1.Estudiante) {
            console.log("Martín es un Estudiante");
        }
        // --------------Herencia y polimorfismo-----------------
        let trabajador1 = new Persona_1.Trabajador("Martín", "San José", 3, 2000);
        let trabajador2 = new Persona_1.Trabajador("Pepé", "Garcia", 21, 1000);
        let trabajador3 = new Persona_1.Trabajador("Juan", "Gonzalez", 40, 3000);
        let jefe = new Persona_1.Jefe("Pablo", "garcia", 50, 3000);
        jefe.trabajadores.push(trabajador1, trabajador2, trabajador3);
        trabajador1.saludar(); // Especificado en Empleado
        jefe.saludar(); // Herencia de persona 
        // Recordar
        // this a la propia clase
        // Super al padre
        jefe.trabajadores.forEach((trabajador) => {
            trabajador.saludar(); // Especificado en Trajador
        });
        // Uso de interfaces
        let programar = {
            titulo: "Programar en TS",
            descripcion: "Practicar con Katas para aprender a desarrollar con TS",
            completada: false,
            urgencia: ITarea_1.Nivel.Urgente,
            resumen: function () {
                return `${this.titulo} - ${this.completada} - Nivel: ${this, urgencia}`;
            }
        };
        // Tarea de programación (Implementa ITarea)
        let programarTS = new Programar_1.Programar("TypeScript", "Tarea de programación en TS", false, ITarea_1.Nivel.Bloqueante);
        console.log(programarTS.resumen());
        // type: Una manera de definir un tipo propio y personalizado que no llega a la complejidad de una clase, que no requiere de crear instancias, constructores, metodos, simplemento son un almacen de datos un poco mas complejo que un string o un objeto normal poniendole una pequeña firma 
        // Clase: Seria la manera un poco de implementar esas interfaces ocuando intentamos crear objetos un poco mas complejos que los objetos naturales que podemos tener propio de TS
        // Interface: Se utilizaría para definir conceptos de valores, atributos, propiedades que queremos darle ademas de definir que deben de tener algunos métodos implementados si o si de forma obligatorio
        // --------------Decoradores-----------------
        // Son funciones declaradas a través de un simbolo @ y este nos permite trabajar o dar mas informacion, mas metadatos a nuestro codigo 
        // Decoradores experimentales ---> @
        /**
        * - Clases
        - Parámetros
        -Métodos
        -Propiedades
        */
        function Override(label) {
            return function (target, key) {
                Object.defineProperty(target, key, {
                    configurable: false,
                    get: () => label
                });
            };
        }
        // class PruebaDecorador {
        //     @Override('prueba') // LLamar a la función Override
        //     nombre: string = "Martin"
        // }
        // let prueba  = new PruebaDecorador();
        // console.log(prueba.nombre); // Prueba, siempre va a ser devuelto a través del get()
        // Otra función para usarla como decorador
        // function SoloLectura(target: any, key: string){
        //     Object.defineProperty(target, key,{
        //         writable: false
        //     })
        // }
        // class PruebaSoloLectura{
        //     @SoloLectura
        //     nombre: string = "";
        // }
        // // Decorador para parametros de un método
        // function mostrarPosicion(target: any, propertykey: string, parameterIndex: number){
        //     console.log("posicon: ",parameterIndex);
        // }
        // class PruebaMetodoDecorador{
        //     prueba(a:string,@mostarPosicion b:boolean){
        //         console.log(b);
        //     }
        // }
        // new PruebaMetodoDecorador().prueba('Hola', false);
        //------------------------------------------------------PATRONES DE DISEÑO--------------------------------
        // * PATRONES CREACIONALES
        //     const miPrimerSingleton = Singleton.getInstance();
        //     const miSegundoSingleton = Singleton.getInstance();
        //     // Compueba si ambos son iguales
        //     if (miPrimerSingleton === miSegundoSingleton) {
        //         console.log('Singleton funciona correctamente, ambas variables contienen la misma instancia.');
        //         miPrimerSingleton.mostrarPorConsola();
        //         miSegundoSingleton.mostrarPorConsola();
        //     } else {
        //         console.log('Error.');
        //     }
        // }
    };
}
//# sourceMappingURL=index.js.map