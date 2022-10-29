import { Component } from '@angular/core';
import {Product} from "./product.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
//Atributos de la clase
  title = 'my-store';
  name: string = 'Laura';
  age = 27;
  img = 'https://fshoq.com/uploads/repository/other3/other6/john-towner-UO02gAW3c0c-unsplash.jpg';
  btnDisabled = true;

  //Ejemplo para renderizar un objeto
  person = {
    name: 'Laura',
    age: 27,
    avatar: this.img
  }
//Array que permite valores tipo string y number
  names: (number | string)[] = [2, 'Juan', 'Pedro', 'Maria', 'Jose'];
  names2: string[] = ['Juan', 'Pedro', 'Maria', 'Jose'];

  //El array de products es de tipo Product, que es una interface
  products: Product[] = [
    {
      name:'Colección de albumes',
      price: 565,
      image: './assets/images/album.jpg',
      category: 'Música'
    },
    {
      name:'Bicicleta casi nueva',
      price: 565,
      image: './assets/images/bike.jpg'
    },
    {
      name:'Mis libros',
      price: 565,
      image: './assets/images/books.jpg'
    },
    {
      name:'Mis gafas',
      price: 565,
      image: './assets/images/glasses.jpg'
    },
    {
      name:'La mejor casa',
      price: 565,
      image: './assets/images/house.jpg'
    },
    {
      name:'El mejor juguete para niños',
      price: 565,
      image: './assets/images/toy.jpg'
    },
    ]
  newName = '';

  //Metodos
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  incrementAge() {
    this.person.age++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;//evento que se va a comportar como un elemento HTML
    console.log(element.scrollTop);
  }


  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    element.value;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
     this.newName = '';
  }
  deleteName(index: number) {
    this.names.splice(index, 1);
  }

}
