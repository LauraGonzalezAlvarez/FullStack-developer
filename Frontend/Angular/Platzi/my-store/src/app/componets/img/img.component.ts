
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';
// Input para comunicar info del padre al hijo 
// Output y EventEmitter para comunicar info del hijo al padre
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = ''; //img de tipo string inicializado en vacio como ejemplo para input y output
  //@Input() img2: string = 'valor init'; //Ejemplo para comunicar info del padre al hijo 
 // App.component es el padre de los componentes que creamos 
  
  @Input('img')//('img') tambien es una forma de cambiarle el nombre al input,  el decorador Input permite cambiar información desde el padre hacia el hijo
  set changeImg(newImg: string) { //Cada vez que se envia un valor al input se ejecutará la función changeImg que recibe como parametro el valor que se haya digitado o enviado
    this.img = newImg;
    console.log('change just img  =>' ,this.img);// imprime en la consola la imagen
    // code
  }
  @Input() alt: string = ''; // Para comunicar info del padre al hijo
  @Output() loaded = new EventEmitter<string>();// permite enviar info del hijo al padre declarando un eventEmitter, loaded como se llama el evento, creando una instancia de eventEmitter, tipado de string que indica que eso es lo que enviará
  imageDefault = './assets/images/default.png'; // Imagen por defecto si existe problemas para mostrar una imagen
  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    // before render
    // NO async -- once time
    console.log('constructor', 'imgValue =>', this.img); // this.img El valor de la propiedad "img" del objeto actual
  }

  ngOnChanges(changes: SimpleChanges) {
    // before - during render
    // changes inputs -- multiples times
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);
    // if (changes.) {
    //   // code
    // }
  }

  ngOnInit(): void {
    // before render
    // async - fetch -- once time
    console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000);
  }

  ngAfterViewInit() {
    // after render
    // handler children -- once time
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // delete -- once time
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  imgError() { // Si hay un error pon la imagen por defecto
    this.img = this.imageDefault; 
  }

  imgLoaded() {
    console.log('log hijo'); // Este es el hijo y emite la img al padre
    this.loaded.emit(this.img);// muestra la imagen, dice este evento (loaded) lo vamos a emitir, el hijo le está enviando información al padre, en app.componet lo escuchamos
  }

}