// Este archivo es para explicar porqué Angular trabaja con observable y no con promesas 
const { Observable } = require('rxjs'); // Esta la librería que utilizamos para manejar este patrón 
const { filter } = require('rxjs/operators'); // Utilizamos este filtro para  los observable

// Ejemplo con promis: En la promesa solo podemos emitir un dato
// Para peticiones esto puede ser normal porque al final simplemente quiero hacer un request y obtener la devolucion inmediata y se acabó mientras que el observable me permite hacer varias iteraciones 
const doSomething = () => { // Funcion que retorna una promesa, una promesa tiene dos estados o se resulve o se rechaza 
  return new Promise((resolve) => {// Les estoy diciendo que apenas creamos la promesa la voy a resolver 
    setTimeout(() => {// 
      resolve('valor 3'); // Le digo que quiero el valor 3, con la promesa no puedo emitir varios valores, ejecuta lo que tiene que ejecutar y ya, no es un String constante de datos
    }, 3000) // Una promesa solo se ejecuta una vez, Se demora 3s y luego entrega el resolv
  });
}
(async () => { // La promesa tenemos que correrlo en un contexto asincrono, se crea una función que se autollama 
  const rta = await doSomething(); // Await para ejecutar la promis
  console.log(rta); // Imprimimos la respuesta
})();

// Conclusión: Una promesa me entrega un valor único, solo se ejecuta una vez mientras que un observable me entrega constante comunicación de datos

// Ejemplo con observable, se indica con signo pesos 
const doSomething$ = () => { 
  return new Observable(observer => {// al crear un obervable, no da un objeto llamado observer y con este podríamos emitir valores 
    observer.next('valor 1 $'); // Con el método next emitimos un valor, signo pesos para saber que viene de un observable 
    observer.next('valor 2 $'); //Beneficios del observador: Podemos emitir varios valores porque es un string continuo de datos 
    observer.next('valor 3 $'); // Podemos emitir varios String de datos porque el .suscribe estaría pendiente de ello
    observer.next(null);
    setTimeout(() => {
      observer.next('valor 4 $');
    }, 5000) // Emite un valor después de 5s
    setTimeout(() => {
      observer.next(null);
    }, 8000)
    setTimeout(() => {
      observer.next('valor 5 $');
    }, 10000)
  });
}

// Contexto ejecutable para el observable
(() => {
  const obs$ = doSomething$(); // Creo el observable mediante esta función 
  obs$ // 
  .pipe( // Escojo un pipe para hacer transfaromaciones 
    filter(value => value !== null) // Filtro los valores que no sean null, de esta manera el suscribe solo recibe los datos que cumplen con esta validación
  )
  .subscribe(rta => { // Aquí no suscribimos donde obtenemos el valor de la respuesta 
    console.log(rta); // Imprimimos la respuesta
  })
})();
