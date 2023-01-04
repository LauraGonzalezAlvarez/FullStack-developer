import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenService } from './../services/token.service'; // el servicio para adminitrar el token 

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.addToken(request); // Enviamos el request original antes de que se responda sino hay token simplemente nos devuelve lo mismo 
    return next.handle(request);
  }

  private addToken(request: HttpRequest<unknown>) { // Este metodo se encarga de agregar el token 
    const token = this.tokenService.getToken(); // devuelveme el token 
    if (token) { // Si hay un token 
      const authReq = request.clone({ // Clonamos la peticion 
        headers: request.headers.set('Authorization', `Bearer ${token}`) // Le vamos a cambiar los headers, esto es lo que queremos modificar 'Authorization', `Bearer ${token}`
      });
      return authReq; // Retorna el request clonado y con los headers modificados 
    }
    return request; // si no tenemos un token podemos retornar el request tal cual 
  }
}
