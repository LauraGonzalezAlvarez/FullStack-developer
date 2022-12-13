import { Injectable } from '@angular/core'; // Servicio que almacena la lógica de las compras para ser inyectado en componentes
import { BehaviorSubject } from 'rxjs'; // BehaviorSubject permite suscribirse para crear  una propiedad observable, a la cual tu componente pueda suscribirse y reaccionar ante ese cambio de estado.

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor() { }

  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }

  getShoppingCart() {
    return this.myShoppingCart;
  }

  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}