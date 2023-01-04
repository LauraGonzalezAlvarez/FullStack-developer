import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { Auth } from './../models/auth.model';
import { User } from './../models/user.model';
import { TokenService } from './../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}/api/auth`;// El enpont de auth maneja las opciones de autenticacion y el perfil 

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login(email: string, password: string) { //Método de login, necesitamos solo esos dos campos 
    return this.http.post<Auth>(`${this.apiUrl}/login`, {email, password}) // Hacemos nuestro request, por el metodo post enviamos la url
    .pipe(
      tap(response => this.tokenService.saveToken(response.access_token)) // El tap tiene el respnse del login así que una vez ya tenga esa repuesta quiero ir a llamar al servicio y guardar el token 
    );
  }

  getProfile() { // Sesión del perfil 
    // const headers = new HttpHeaders();
    // headers.set('Authorization',  `Bearer ${token}`);
    return this.http.get<User>(`${this.apiUrl}/profile`, { // Para obtener el perfil con el token que nos hayan asignado
      // headers: { // Acá no enviamos el toquen ya que deberia enviarlo el interceptor de forma automatica 
      //   Authorization: `Bearer ${token}`,
      //   // 'Content-type': 'application/json'
      // } // enviamos peticion y por allá un interceptor se va a encargar de agregar ese token a los headers de la petición 
    });
  }

  loginAndGet(email: string, password: string) {
    return this.login(email, password)
    .pipe( 
      switchMap(() => this.getProfile()),
    )
  }
}
