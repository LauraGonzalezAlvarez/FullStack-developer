import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContext,
  HttpContextToken,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; // el operador tap nos deja correr un proceso sin tener que modificar la respuesta que nos envie el observable 

const CHECK_TIME = new HttpContextToken<boolean>(() => false); // Es un contexto en el cual le decimos cuando debe correr el interceptor, el booleano es para decirle si lo corro o no lo corro, inicializado en false
// Creamos una isntancia de  HttpContextToken
// Constante en mayuscula porque la vamos a importar de otro lado

export function checkTime(){ // Funcion para exportar y utilizarla en otros servicios 
  return new HttpContext().set(CHECK_TIME, true) // retornariamos un HttpContext y hariamos un set, esta es la funcion que habilita o no en timeintercetpr
}

@Injectable() // Los interceptores tambien son inyectados, sin embargo no tiene el root porque hay que inyectarlo de una forma especial 
export class TimeInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.context.get(CHECK_TIME)) { // Preguntamos si el request tiene el contexto encendido, si tenemos que ejecutar la logica de negocio o no
      const start = performance.now(); // Para que evalue el tiempo inicial 
      return next
      .handle(request) // Es un observable, así que una vez termine de hacerlo vamos a correr un pipe
      .pipe(
        tap(() => {
          const time = (performance.now() - start) + 'ms'; // Para obtener el momento en que acabó - la hora de inicio, a esto lo concatenamos en milisegundos 
          console.log(request.url, time); // imprimimos el request que era la petición que estabamos haciendo y el tiempo que duró 
        })
      );
    }
    return next.handle(request); // Una forma apropiada de saber si agregamos a no esa logica 
  }
}
