import { Component, OnInit } from '@angular/core';
import { InformacionGeneral } from 'src/app/models/informacion-general.model';
import { InformacionGeneralService } from 'src/app/services/informacion-general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-informacion-general',
  templateUrl: './add-informacion-general.component.html',
  styleUrls: ['./add-informacion-general.component.css']
})
export class AddInformacionGeneralComponent implements OnInit {

  informacion_general: InformacionGeneral = {
    nombre:'',
    apellido_paterno:'',
    apellido_materno:'',
    rfc:'',
    curp:'',
    sexo:''
  };
  submitted = false;

  constructor(private informacion_generalService: InformacionGeneralService, private router: Router) { }

  ngOnInit(): void {
  }

  saveInformacionGeneral(): void {
    const data = {
      nombre: this.informacion_general.nombre,
      apellido_materno: this.informacion_general.apellido_materno,
      apellido_paterno: this.informacion_general.apellido_paterno,
      rfc: this.informacion_general.rfc,
      curp: this.informacion_general.curp,
      sexo: this.informacion_general.sexo,
    };

    this.informacion_generalService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;

          // Después de guardar, redirige a la nueva ruta
          this.router.navigate(['/lugar_nacimiento-add']);
        },
        error: (e) => console.error(e)
      });
  }

  newInformacionGeneral(): void {
    this.submitted = false;
    this.informacion_general = {
      nombre: '',
      apellido_materno: '',
      apellido_paterno: '',
      rfc:'',
      curp:'',
      sexo:''
    };
  }
}
