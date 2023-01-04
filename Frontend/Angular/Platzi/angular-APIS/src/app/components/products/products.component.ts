import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs'; // zip nos permite enviar, adjuntar, comprimir dos observadores y recibir la respuesta de los dos al tiempo
import { switchMap } from 'rxjs/operators'; // switchMap permite hacer lo mismo que hariamos con el .then el las promesas para no concatenar un proceso dentro del otro y que se vuelva un callbackhell

import { Product, CreateProductDTO, UpdateProductDTO } from '../../models/product.model';

import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  showProductDetail = false; // Para mostrar u ocultar la ventana del detalle, en false significa que no va a estar mostrando ningun producto al inicio
  productChosen: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: '',
    },
    description: ''
  }; // Todo este es el estado inicial del producto el cual es muy buena practica


  limit = 10; // Para la paginación, muestra 10 elementos
  offset = 0; // Para la paginación, a partir de qué posición se muestra 
  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init'; //Para el manejo de errores, asigna unos valores posibles y un estado inicial INIT

  constructor(
    private storeService: StoreService, // Inyección de dependencias, acá nos estamos trayendo los dos servicios
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void { // Donde ponemos las cosas asincronas 
    this.productsService.getAllProducts(10, 0) // Dice que traiga 10 elementos desde la posición cero
    .subscribe(data => { // Se debe correr un subscribe para obtener toda la información, la guardamos en un array de productos 
      this.products = data;
      this.offset += this.limit;  // Para aumentar de manera dinámica la paginacion
    });
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() { 
    this.showProductDetail = !this.showProductDetail; // Cada vez que hagamos click cambie el estado
  }

  onShowDetail(id: string) {
    this.statusDetail = 'loading'; // Apenas haga la petición tenga un estado en loading 
    this.toggleProductDetail(); // Cuando recibamos la información accionar este metodo, independiente de si fue exitoso o no, si solo se quiero activar siempre y cuando sea exitoso se pondría debajo de .subscribe(data => { 
    this.productsService.getProduct(id) // Utilizando el servicio vamos hacia getProduct mandandole el identificador del producto
    .subscribe(data => { // Nos suscribimos y obtendriamos la data
      this.productChosen = data; // productChosen quí guardamos el producto seleccionado
      this.statusDetail = 'success'; // Si todo salio exitosamente asigna un estado success
    }, errorMsg => { 
      window.alert(errorMsg); // Para mostrar los errores del backend
      this.statusDetail = 'error'; // Pero si algo ocurrio mostrariamos un estado de error
      // Estamos traduciendo los errores que estan en el backend, manipulados por el servicio 
    })
  }

  readAndUpdate(id: string) { //Ejemplo de como ejecutar un request tras el otro en el caso de ser necesario
    this.productsService.getProduct(id) //Obtenemos el id del producto desde el servicio
    .pipe( //Pipe para utilizar un switchMap
      switchMap((product) => this.productsService.update(product.id, {title: 'change'})),
    )// Tenemos un product que retorna esta peticion this.productsService.update(...
    //Puedo llenar esto de switchMap donde la respuesta de una me va a dar la respuesta de otra
    // Esta sería la forma de hacerlo con promesas 
    // Esto se hace solo si tengo dependencias cuando necesito de un dato anterior para hacer una peticion nueva 
    .subscribe(data => {
      console.log(data);
    });
    // Ejemplo de si no tenemos dependencias y queremos correr varias promesas al mismo tiempo 
    this.productsService.fetchReadAndUpdate(id, {title: 'change'}) // fetchReadAndUpdate método en el servicio que realiza un zip para enviar peticiones al mismo tiempo, la abstracción o la logica lo tenemos contentrado en el servicio
    // No es bueno poner la logia en el componente sino en el servicio para poderlo reutilizar
    .subscribe(response => {
      const read = response[0]; // 
      const update = response[1];
    })
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'Nuevo producto',
      description: 'bla bla bla',
      images: [`https://placeimg.com/640/480/any?random=${Math.random()}`],
      price: 1000,
      categoryId: 2,
    }
    this.productsService.create(product)// Nos suscribimos y recibiriamos la informacion correspondiente
    .subscribe(data => {
      this.products.unshift(data); // Estamos insertando el producto al array en la primera posición
    });
  }

  updateProduct() { // En este caso se actualiza el titulo, lo almacenamos en una constante changes de tipo  UpdateProductDTO
    const changes: UpdateProductDTO = {
      title: 'change title',
    }
    const id = this.productChosen.id;
    this.productsService.update(id, changes)
    .subscribe(data => { // Nos suscribimos para recibir la información 
      // Esta parte es para mostrar en la interface grafica lo sucedido
      const productIndex = this.products.findIndex(item => item.id === this.productChosen.id); // findIndex Busca el indice, comparando los id del arreglo que sea igual al id del producto seleccionado
      this.products[productIndex] = data; // en este id especifico actualizamos la informacion 
      this.productChosen = data; // Tambien lo actualizamos en esta parte para que se muestre la actualización cuando tenemos la ventana lateral y le damos actualizar
    });
  }

  // Se elimina de la interface grafica y de la api
  deleteProduct() { // Para eliminar solo enviamos el id, esta api devuelve un booleano que indica si se eliminó o no correctamente el producto   
    const id = this.productChosen.id;
    this.productsService.delete(id)
    .subscribe(() => { // Para obtener la informacion, no necesito data, que seria el booleano, si devuelve con exito o no con eso será suficiente, mas adelante se explica la detección de errores
      const productIndex = this.products.findIndex(item => item.id === this.productChosen.id); // Para saber cual de esos productos del array vamos a remover 
      this.products.splice(productIndex, 1); // Método de eliminación y cuantos elementos a partir de esa posicion quiero eliminar 
      this.showProductDetail = false; // Después de eliminar el producto lo mejor seria cerrar el panel 
    });
  }

  loadMore() {  // Método para la paginación para cargar la siguiente página 
    this.productsService.getAllProducts(this.limit, this.offset) // Para obtener los productos inicandole la paginacion 
    .subscribe(data => {
      this.products = this.products.concat(data); // Está concatenando el array que le llegue de los nuevos productos, para no sobrescribirlo
      //concat es inmutable, es decir no modifica el array original por lo tanto this.products.concat(data) no funcionaria, se tendria que concatenar el array y asignarlo de nuevo
      this.offset += this.limit;  // Para incrementar la paginación de 10 en 10 
    });
  }

}
