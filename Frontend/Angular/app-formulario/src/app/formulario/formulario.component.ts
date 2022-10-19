import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  frmFormulario: FormGroup;
  hola: string;

  constructor() {
    this.hola = 'nombre';
    this.frmFormulario = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      apellido: new FormControl(),
      email: new FormControl(null, [Validators.required, Validators.email]),
      edad: new FormControl(null, [
        Validators.required,
        Validators.min(18),
        Validators.max(60),
        // Validators.pattern('/(^\d+$)/'),
        Validators.pattern(new RegExp(/(^\d+$)/)),
      ]),
    });
  }

  enviarInformacion(): void {
    // console.log('formulario', this.frmFormulario);
    // console.log('pristine', this.frmFormulario.pristine);
    // console.log(this.frmFormulario.status);
    console.log(this.frmFormulario.getRawValue());
  }

}
