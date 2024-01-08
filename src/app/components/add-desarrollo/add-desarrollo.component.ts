import { Component, OnInit } from '@angular/core';
import { Desarrollo } from 'src/app/models/desarrollo.model';
import { DesarrolloService } from 'src/app/services/desarrollo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-desarrollo',
  templateUrl: './add-desarrollo.component.html',
  styleUrls: ['./add-desarrollo.component.css']
})
export class AddDesarrolloComponent implements OnInit {

  desarrollo: Desarrollo = {
    area:'',
    campo:'',
    disciplina:'',
    miembro:'',
    estudiante:'',
    programa:'',
    anio:''
  };
  submitted = false;

  constructor(private desarrolloService: DesarrolloService, private router: Router) { }

  ngOnInit(): void {
  }

  saveDesarrollo(): void {
    const data = {
      area: this.desarrollo.area,
      campo: this.desarrollo.campo,
      disciplina: this.desarrollo.disciplina,
      miembro: this.desarrollo.miembro,
      estudiante: this.desarrollo.estudiante,
      programa: this.desarrollo.programa,
      anio: this.desarrollo.anio
    };

    this.desarrolloService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;

          // Después de guardar, redirige a la nueva ruta
          this.router.navigate(['/menu-add']);
        },
        error: (e) => console.error(e)
      });
  }

  newDesarrollo(): void {
    this.submitted = false;
    this.desarrollo = {
      area:'',
      campo:'',
      disciplina:'',
      miembro:'',
      estudiante:'',
      programa:'',
      anio:''
    };
  }
}
