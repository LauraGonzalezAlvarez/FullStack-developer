import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { throwError, zip } from 'rxjs';

import { Product, CreateProductDTO, UpdateProductDTO } from './../models/product.model';
import { checkTime } from './../interceptors/time.interceptor';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = `${environment.API_URL}/api/products`;
    //  apiUrl Almacena la url del api

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(limit?: number, offset?: number) { // limit y offset opcionales, en caso de que no se envien muestre todos los productos de la base de datos
    let params = new HttpParams(); // Sirve para enviar parametros de forma dinámica 
    if (limit && offset) { // Si el limit y el offset bienen es decir, si son true, entonces vamos a configurar esos parametros
      params = params.set('limit', limit); // Quiero un parametro que sea limit y que tenga el valor de limit
      params = params.set('offset', limit); // Igual para este, el offset se va cambiando a medida que cambia el limit
    } // Si envio los parametros vamos a ir seteando dinámicamente estos parametros desde la URL, Esta es la forma de hacerlo dinámico con HttpParams
    return this.http.get<Product[]>(this.apiUrl, { params, context: checkTime() }) // enviamos los params 
    .pipe( // Con Angular podemos hacer la funcionalidad de reintentar varias veces la petición, le digo que quiero hacer una transformación 
      retry(3), // Me dice cuantas veces puedo reitenrtar la petición, con promesas seria muy complejo de hacer
      map(products => products.map(item => {
        return {
          ...item,
          taxes: .19 * item.price
        }
      }))
    );
  }

  fetchReadAndUpdate(id: string, dto: UpdateProductDTO) {
    return zip(
      this.getProduct(id),
      this.update(id, dto)
    );
  }
  // tiene siempre un return porque el objetivo es que en el componente hacer un suscribe para luego obtener la informacion
  getProduct(id: string) { // Para obtener solo un producto enviado el id
    return this.http.get<Product>(`${this.apiUrl}/${id}`) // `${this.apiUrl}/${id}` a apiUrl le estamos concatenando el id que nos llegue del producto para hacer la petición GET 
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Conflict) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('El producto no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No estas permitido');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }

  getProductsByPage(limit: number, offset: number) { // Método para paginar, parecido a getAllProducts pero este no es tan dinámico
    return this.http.get<Product[]>(`${this.apiUrl}`, { // Igual sería un get de productos 
      params: { limit, offset } // Enviamos los parametros por URL, enviamos las peticiones del limit y el offset y ya nuestro backen se encarga de el query de devolvernos esos elementos indicados que seria en el typescript 
    })
  }
// dto= data transfer object = es lo que enviamos a la api
  create(dto: CreateProductDTO) { // Método para crear un producto, tiene siempre un return porque el objetivo es que en el componente hacer un suscribe para luego obtener la informacion
    return this.http.post<Product>(this.apiUrl, dto); // Se retorna 
    // le enviamos a la api CreateProductDTO pero cuando nos responda nos envia un Product, tenemos esa flexibilidad gracias a typescript
  }

  update(id: string, dto: UpdateProductDTO) { //Esperamos un dto es la informacion de transferencia, id cual es ese producto que queremos editar 
    // Put, especialmente para enviar todo, pero dice el profe que normalmente se utiliza para todo
    return this.http.put<Product>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: string) { //llega un id para poder eliminarlo, la api devuelve un booleano para saber si fue satisfactorio o no
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
