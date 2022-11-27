import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //Atributos de la clase
  widthImg = 10;
  name = 'Nicolas';
  age = 18;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;

  //Ejemplo para renderizar un objeto
  register = {
    name: '',
    email: '',
    password: '',
  };

  //Ejemplo para renderizar un objeto
  person = {
    name: 'Nicolas',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  };
  /* Vector de string llamado names */
  names: string[] = ['Nico', 'Juli', 'Santi'];
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red',
  };
  // El array de products es de tipo Product, que es una interface
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg',
    },
  ];

  //Metodos
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  // Metododos
  increaseAge() {
    this.person.age += 1;
  }

  // Metodo para detectar el evento de click
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  } 
  //target = objetivo,blanco 
  // Necesitamos el target es decir el elemento HTML as HTMLElement = como un elemento html ese sería el tipado
  // (Lo que dice el profesor de platzi)

  changeName(event: Event) {
    /* Event = Interface */
    const element = event.target as HTMLInputElement; // HTMLInputElement = Estamos leyendo un input
    // HTMLInputElement = Esta interface proporciona  propiedades y métodos para manipular elementos de entrada de tipo <input> en un documento HTML.
    this.person.name = element.value; // value = es el valor que tiene el input y lo guardo por el valor que tiene el input
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  onRegister() {
    console.log(this.register);
  }
}
