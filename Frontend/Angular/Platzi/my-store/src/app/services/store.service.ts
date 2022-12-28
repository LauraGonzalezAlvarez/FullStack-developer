import { Injectable } from '@angular/core'; // Servicio que almacena la lógica de las compras para ser inyectado en componentes
import { BehaviorSubject } from 'rxjs'; // BehaviorSubject permite suscribirse para crear  una propiedad observable, a la cual tu componente pueda suscribirse y reaccionar ante ese cambio de estado.

import { Product } from '../models/product.model'; // Se importa la interface producto para establecer la estructura y el tipado del objeto

@Injectable({
  // Decorador que indica que es un servicio
  providedIn: 'root', // 'root' que determina el scope del servicio, o sea, determina que el mismo estará disponible en toda el módulo de tu aplicación por default.
})
export class StoreService {
  //Aquí agrego la lógica del servicio

  private myShoppingCart: Product[] = []; // Se inicializa en vacio el vector de objetos de tipo product
  private myCart = new BehaviorSubject<Product[]>([]); // Crea un objeto "BehaviorSubject" llamado myCart le asigna un valor en vacio de tipo product
  //Un BehaviorSubject es un tipo de objeto de "subject" en RxJS, que es una librería de programación reactiva para JavaScript. Un subject es un tipo de observable que también puede actuar como un observador, lo que significa que puede enviar (o "publicar") valores a sus suscriptores.
  // Cualquier componente que se suscriba a myCart recibirá inicialmente un arreglo vacío de Product
  //Además, cualquier componente que envíe un valor al myCart reemplazará el valor actual del BehaviorSubject con ese nuevo valor.
  myCart$ = this.myCart.asObservable();
  // La presencia del símbolo $ al final del nombre de la variable suele indicar que esta variable es un "observable", que es un tipo de objeto que se utiliza para notificar a otros componentes o módulos de cambios en una aplicación.
  // . El método asObservable es un método que se encuentra en la librería de observables de JavaScript, y convierte un objeto en un observable.
  // Observable = Escuchar activamente cambios
  constructor() {} //constructor vacio

  addProduct(product: Product) {
    // Método addProduct para agregar al carrito de compras de tipado Product
    this.myShoppingCart.push(product); // Agregamos un producto a la lista
    this.myCart.next(this.myShoppingCart); // con .next transmitimos la lista de productos a los suscriptores, nav component es el que se suscribe
    // this.myCart es un objeto que está siendo referenciado usando la palabra clave this. La palabra clave this hace referencia al objeto que está siendo usado en el contexto actual.
    // next es un método que se encuentra en la librería de observables de JavaScript. Este método se utiliza para enviar un nuevo valor a los componentes o módulos que se hayan suscrito a un observable.
    //  this.myShoppingCart es una variable que contiene el valor que se está enviando a los componentes o módulos suscritos al observable.
    // En resumen, este código está utilizando el método next del objeto this.myCart para enviar el valor de this.myShoppingCart a los componentes o módulos que se hayan suscrito a este objeto. Esto significa que cualquier componente o módulo que se haya suscrito a this.myCart recibirá una notificación de que el valor de this.myShoppingCart ha cambiado.
  }


  getShoppingCart() { // Método para acceder a los productos agregados al carrito
    return this.myShoppingCart;
  }

  getTotal() {
    // Método que retorna el precio total
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
    // return es una palabra clave que se utiliza para indicar que una función debe devolver un valor. Todo lo que venga después de la palabra clave return será el valor que se devuelve cuando se llame a la función.
    // reduce es un método que se encuentra en la librería de observables de JavaScript. Este método se utiliza para reducir un arreglo a un solo valor.
    // La función de reducción se aplica a cada elemento del arreglo de izquierda a derecha, y el resultado se va acumulando en un acumulador. El valor inicial es el valor del acumulador al inicio de la reducción.
    //sum es el acumulador y item es el elemento actual del arreglo. La función devuelve la suma del acumulador y el precio del elemento actual.
    // El valor inicial que se está pasando a reduce es 0.
    // Esto significa que la función está sumando los precios de todos los elementos de la lista y devolviendo el resultado final. Por ejemplo, si this.myShoppingCart es una lista de objetos que tienen una propiedad price, entonces la función devolverá la suma de todos los precios de los elementos de la lista.
  }

}