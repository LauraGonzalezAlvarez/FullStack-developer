import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../services/store.service'
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  profile: User | null = null; //El perfil puede ser de tipo user y que permito que inice en null

  constructor( // Se inyectan los servicios 
    private storeService: StoreService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  login() {
    // this.authService.login('sebas@mail.com', '1212') 
    // .subscribe(rta => {
    //   this.token = rta.access_token;
    //   console.log(this.token); // Cuando obtengo el token hago el get profile
    //   this.getProfile(); // Aquí habia una mala practica de callback hell, algo que se está corriendo dentro de un otro subscribe
    // });
    this.authService.loginAndGet('sebas@mail.com', '1212')
    .subscribe(user => {
      this.profile = user;
    });
  }

}
