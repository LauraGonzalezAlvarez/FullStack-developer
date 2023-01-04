import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {// Método para guardar el token de tipo string
    localStorage.setItem('token', token); // Utilizamos localStorage guarda la sección hasta que el usuario cierre sesion 
    // Si el backend tiene buena medida de seguridad, el token está encriptado y solo se puede desencriptar si se tiene la llave 
    // Lo almaceno en una variable llamada token 
  }

  getToken() { // Forma de obtener el token 
    const token = localStorage.getItem('token');// Voy al local storage y hago get
    return token;
  }
}
