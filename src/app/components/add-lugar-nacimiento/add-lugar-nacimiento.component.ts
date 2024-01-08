import { Component, OnInit } from '@angular/core';
import { LugarNacimiento } from 'src/app/models/lugar-nacimiento.model';
import { LugarNacimientoService } from 'src/app/services/lugar-nacimiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-lugar-nacimiento',
  templateUrl: './add-lugar-nacimiento.component.html',
  styleUrls: ['./add-lugar-nacimiento.component.css']
})
export class AddLugarNacimientoComponent implements OnInit {
  lugar_nacimiento: LugarNacimiento = {
    pais:'',
    estado:'',
    ciudad:'',
    fecha_nacimiento:'',
    no_fm: ''
  };
  submitted = false;

  constructor(private lugar_nacimientoService: LugarNacimientoService, private router: Router) { }

  ngOnInit(): void {
  }

  saveLugarNacimiento(): void {
    const data = {
      pais: this.lugar_nacimiento.pais,
      estado: this.lugar_nacimiento.estado,
      ciudad: this.lugar_nacimiento.ciudad,
      fecha_nacimiento: this.lugar_nacimiento.fecha_nacimiento,
      no_fm: this.lugar_nacimiento.no_fm
    };

    this.lugar_nacimientoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;

          // Después de guardar, redirige a la nueva ruta
          this.router.navigate(['/domicilio_particular-add']);
        },
        error: (e) => console.error(e)
      });
  }

  newLugarNacimiento(): void {
    this.submitted = false;
    this.lugar_nacimiento = {
      pais:'',
      estado:'',
      ciudad:'',
      fecha_nacimiento:'',
      no_fm:''
    };
  }
}
