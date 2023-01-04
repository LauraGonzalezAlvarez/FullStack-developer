import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //HttpClient porque necesitamos hacer peticiones

import { environment } from './../../environments/environment';
import { User, CreateUserDTO } from './../models/user.model'; // Se importa la interface User y CreateUserDTO que se encuentra en user.model
// Este servicio es para 

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = `${environment.API_URL}/api/users`; //Necesitamos la API de nuestro backend , el cual nos permite conectarnos y tener dinamismo

  constructor(
    private http: HttpClient
  ) { }

  create(dto: CreateUserDTO) {
    return this.http.post<User>(this.apiUrl, dto); // Creamos con un post le enviamos la url y luego enviamos el dto, esperamos un usuario de tipo User
  }

  getAll() {
    return this.http.get<User[]>(this.apiUrl); // Para retornar todos los usuarios 
  }
}
