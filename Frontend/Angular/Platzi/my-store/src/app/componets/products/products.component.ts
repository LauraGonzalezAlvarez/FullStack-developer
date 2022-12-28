import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';

import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

// Este es un componente padre 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = []; //Array de producto, inicializado en vacio para almacenar los productos agregados al carrito
  total = 0; // Variable que almacena el precio de los productos agregados al carrito
  products: Product[] = [];
  today = new Date(2019, 1,1); // Variable que almacena fecha
  date = new Date(2021, 1, 21) // Variable que almacea fecha

  constructor(
    private storeService: StoreService, // Servicio 
    private productsService: ProductsService // Servicio
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart(); // Variable myShoppingCart tiene los productos que agregué al carrito
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    });
  }

  onAddToShoppingCart(product: Product) { // Recibimos el producto 
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}
