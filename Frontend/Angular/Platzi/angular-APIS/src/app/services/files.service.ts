import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { tap, map } from 'rxjs/operators';

import { environment } from './../../environments/environment';

interface File {
  originalname: string;
  filename: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private apiUrl = `${environment.API_URL}/api/files`;

  constructor(
    private http: HttpClient
  ) { }

  getFile(name: string, url: string, type: string) { // Método para obtener un archivo de forma programatica 
    return this.http.get(url, {responseType: 'blob'}) // Con este get obtendriamos el contenido pero no un archivo descargable 
    .pipe( // con el tap le decimos que en cualquier momento cuando el observable nos envie el contenido de la peticion podamos ejecutar algo de logica
      tap(content => { // recibimos el contenido 
        const blob = new Blob([content], {type});// Creamos un nuevo archivo de tipo blob, el contenido es lo que me haya dado http luego le tengo que decir que tipo es que es el que me envien desde el metodo 
        saveAs(blob, name); // ejecutams el método saveAs, 
      }),
      map(() => true)// Una vez descargado el archivo me devuelva un true, con map transformo la peticion 
    );
  }

  uploadFile(file: Blob) { //Metodo para subir archivo, por definicion los archivos son de tipo blob
    const dto = new FormData(); // FormData objeto nativo de html para enviar este tipo de campos 
    dto.append('file', file); // agregamos el archivo 
    return this.http.post<File>(`${this.apiUrl}/upload`, dto, { // consumimos el enpoind directo que seria upload y enviariamos el dto 
      // headers: { // en algunas ocaciones, dependiento del backend se debe enviar un headers 
      //   'Content-type': "multipart/form-data"
      // }
    })
  }
}
