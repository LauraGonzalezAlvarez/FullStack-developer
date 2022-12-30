import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product = {
    id: '',
    price: 0, // Es muy importante siempre dar un estado inicial para evitar errores 
    images: [],
    title: '',
    category: { // Objeto category
      id: '',
      name: '',
    },
    description: ''
  };
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>(); // showProduct Para comunicarlo con el padre

  constructor() { }

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

  onShowDetail() { // Una vez leido este evento se lo comunicamos al padre
    this.showProduct.emit(this.product.id); // Envia solo el id del producto al cual hicimos click, a su padre products
  }

}
