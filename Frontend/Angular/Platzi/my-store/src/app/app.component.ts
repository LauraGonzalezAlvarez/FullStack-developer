import { Component } from '@angular/core';

import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = ''; // Variable que se utiliza para comunicar el padre con el hijo
  showImg = true;


  onLoaded(img: string) { // Este evento se crea para para el uso de Output, se utiliza en app.component, recibe una imagen de tipo string
    console.log('log padre', img);// Imprime la imagen y log padre
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}