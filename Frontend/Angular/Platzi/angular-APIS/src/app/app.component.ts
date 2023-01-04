import { Component } from '@angular/core';

import { UsersService } from './services/users.service'; //Servicio para crear usuarios
import { FilesService } from './services/files.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  token = ''; // Variable para almacenar token en memoria 
  imgRta = '';

  constructor( // Inyectamos los servicios en el constructor
    private usersService: UsersService,
    private filesService: FilesService
  ) {

  }


  onLoaded(img: string) {
    console.log('log padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

  createUser() { //Acción crear usuario
    this.usersService.create({ // Vamos a userServices y le damos un create, nos pide nuestro DTo,le enviamos los siguientes atributos 
      name: 'Sebas',
      email: 'sebas@mail.com',
      password: '1212'
    })
    .subscribe(rta => {// para recibir la respuesta
      console.log(rta);
    });
  }



  downloadPdf() {
    this.filesService.getFile('my.pdf', 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf') // queremos obtener un archivo, el nombre con el cual lo quiero descargar, luego la url que puede ser local o desde internet y finalmente le digo de que tipo es 
    .subscribe() // nos suscribimos
  }

  onUpload(event: Event) { // Para recibir un tipo de arhivo desde html 
    const element = event.target as HTMLInputElement; // Quiero el elemento que hizo ese evento
    const file = element.files?.item(0); // el elemento que hizo el evento tiene un archivo adjuntos, el item 0 es el primer archivo que se adjunto
    if (file) { // si hay un archivo
      this.filesService.uploadFile(file) // mediante el servicio le enviamos el archivo 
      .subscribe(rta => { // recibimos la respuesta
        this.imgRta = rta.location;// renderiza la imagen 
      }); // el tipo file en typescript tambien es de tipo blob 
    }

  }
}
