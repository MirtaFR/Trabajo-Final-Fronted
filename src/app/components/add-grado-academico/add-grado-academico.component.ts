import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto.model';
import { ContactoService } from 'src/app/services/contacto.service';
import { Router } from '@angular/router';
import { GradoAcademico } from 'src/app/models/grado-academico.model';
import { GradoAcademicoService } from 'src/app/services/grado-academico.service';

@Component({
  selector: 'app-add-grado-academico',
  templateUrl: './add-grado-academico.component.html',
  styleUrls: ['./add-grado-academico.component.css']
})
export class AddGradoAcademicoComponent implements OnInit {

  
  grado_academico: GradoAcademico = {
    nivel:'',
    titulo:'',
    institucion:'',
    anio:''
  };
  submitted = false;

  constructor(private gradoacademicoService: GradoAcademicoService, private router: Router) { }

  ngOnInit(): void {
  }

  saveGradoAcademico(): void {
    const data = {
      nivel:this.grado_academico.nivel,
      titulo:this.grado_academico.titulo,
      institucion:this.grado_academico.institucion,
      anio:this.grado_academico.anio
    };

    this.gradoacademicoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;

          // Después de guardar, redirige a la nueva ruta
          this.router.navigate(['/grado-add']);
        },
        error: (e) => console.error(e)
      });
  }

  newGradoAcademico(): void {
    this.submitted = false;
    this.grado_academico = {
      nivel:'',
      titulo:'',
      institucion:'',
      anio:''
    };
  }
}