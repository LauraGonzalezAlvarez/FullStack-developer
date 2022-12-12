import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';// Importo la interface Product

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product = { // Para comunicar un array del padre al hijo
    id: '',
    price: 0,
    image: '',
    title: '',
    category: '',
    description: ''
  };
  @Output() addedProduct = new EventEmitter<Product>();// La envio un arreglo de productos al componente padre

  constructor() { }

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

}
