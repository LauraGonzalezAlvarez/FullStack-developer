import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../services/store.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;

  constructor(
    private storeService: StoreService // Inyectamos el servicio SoreService gracias al patron de inyección de dependencias
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => { //myCart$ es un observable,  .subcribe significa que me suscribo para que me notifique cada vez que cambie (Se creó en Store.service)
      this.counter = products.length; // Cada vez que se agrega un elemento a la lista lo actualizamos el counter, en la vista lo renderizo
    });
  }

  toggleMenu() { // Metodo para mostrar y ocultar el menú 
    this.activeMenu = !this.activeMenu;
  }

}