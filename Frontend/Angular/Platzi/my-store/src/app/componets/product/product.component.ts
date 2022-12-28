import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';// Importo la interface Product

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

// Este componente es hijo, products es el componente padre

  @Input() product: Product = { // Para comunicar un array del padre al hijo
    id: '',
    price: 0,
    image: '',
    title: '',
    category: '',
    description: ''
  };
  @Output() addedProduct = new EventEmitter<Product>();// La envio un objeto de productos al componente padre

  constructor() { }

  onAddToCart() { // Este método representa la acción para emitir el producto
    this.addedProduct.emit(this.product);
  }

}
