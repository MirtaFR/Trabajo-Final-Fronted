import { Component, OnInit } from '@angular/core';
import { DomicilioParticular } from 'src/app/models/domicilio-particular.model';
import { DomicilioParticularService } from 'src/app/services/domicilio-particular.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-domicilio-particular',
  templateUrl: './add-domicilio-particular.component.html',
  styleUrls: ['./add-domicilio-particular.component.css']
})
export class AddDomicilioParticularComponent implements OnInit {

  domicilio_particular: DomicilioParticular = {
    codigo_postal:'',
    calle:'',
    numero:'',
    colonia:'',
    municipio: '',
    estado: '',
    pais: ''
  };
  submitted = false;

  constructor(private domicilio_particularService: DomicilioParticularService, private router: Router) { }

  ngOnInit(): void {
  }

  saveDomicilioParticular(): void {
    const data = {
      codigo_postal: this.domicilio_particular.codigo_postal,
      calle: this.domicilio_particular.calle,
      numero: this.domicilio_particular.numero,
      colonia: this.domicilio_particular.colonia,
      municipio: this.domicilio_particular.municipio,
      estado: this.domicilio_particular.estado,
      pais: this.domicilio_particular.pais
    };

    this.domicilio_particularService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;

          // Después de guardar, redirige a la nueva ruta
          this.router.navigate(['/contacto-add']);
        },
        error: (e) => console.error(e)
      });
  }

  newDomicilioParticular(): void {
    this.submitted = false;
    this.domicilio_particular = {
      codigo_postal:'',
      calle:'',
      numero:'',
      colonia:'',
      municipio: '',
      estado: '',
      pais: ''
    };
  }
}
