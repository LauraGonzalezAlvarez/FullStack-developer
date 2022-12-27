import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Se importa para hacer peticiones asincronas como por ejemplo a una api 

import { Product } from './../models/product.model'; // Es el tipado del arreglo de objetos 

@Injectable({ // Decorador que indica que es un servicio
  providedIn: 'root' // viene por defecto
})
export class ProductsService { // Aquí va toda la lógica del servicio

  constructor( // constructar que inicializa la variable http de tipo HttpClient
    private http: HttpClient
  ) { }

  getAllProducts() { // Método para obtener todos los productos, haciendo una petición get a la api
    return this.http.get<Product[]>('https://fakestoreapi.com/products'); // Hace petición a la api para traer los productos
  }
}
