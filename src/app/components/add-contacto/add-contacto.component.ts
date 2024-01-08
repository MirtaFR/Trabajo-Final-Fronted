import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto.model';
import { ContactoService } from 'src/app/services/contacto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contacto',
  templateUrl: './add-contacto.component.html',
  styleUrls: ['./add-contacto.component.css']
})
export class AddContactoComponent implements OnInit {

  contacto: Contacto = {
    correo_particular:'',
    correo_institucional:'',
    telefono_principal:'',
    celular:'',
    institucion_laboral: '',
    adscripcion_especifica: ''
  };
  submitted = false;

  constructor(private contactoService: ContactoService, private router: Router) { }

  ngOnInit(): void {
  }

  saveContacto(): void {
    const data = {
      correo_particular: this.contacto.correo_particular,
      correo_institucional: this.contacto.correo_institucional,
      telefono_principal: this.contacto.telefono_principal,
      celular: this.contacto.celular,
      institucion_laboral: this.contacto.institucion_laboral,
      adscripcion_especifica: this.contacto.adscripcion_especifica
    };

    this.contactoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;

          // Después de guardar, redirige a la nueva ruta
          this.router.navigate(['/desarrollo-add']);
        },
        error: (e) => console.error(e)
      });
  }

  newContacto(): void {
    this.submitted = false;
    this.contacto = {
      correo_particular:'',
      correo_institucional:'',
      telefono_principal:'',
      celular:'',
      institucion_laboral: '',
      adscripcion_especifica: ''
    };
  }
}
