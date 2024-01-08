import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {
  proyecto: Proyecto = {
    referencia:'',
    usuarios:'',
    monto_financiamiento:'',
    institucion_principal:'',
    instituciones_asociadas: '',
    fiente_financiamiento: '',
    productos_derivados: '',
    fecha_inicio: '',
    fecha_termino: '', 
    titulo: '',
    participacion: '',
    Area: ''

  };
  submitted = false;

  constructor(private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  saveProyecto(): void {
    const data = {
      referencia:this.proyecto.referencia,
      usuarios:this.proyecto.usuarios,
      monto_financiamiento:this.proyecto.monto_financiamiento,
      institucion_principal:this.proyecto.institucion_principal,
      instituciones_asociadas:this.proyecto.instituciones_asociadas,
      fiente_financiamiento:this.proyecto.fiente_financiamiento,
      productos_derivados:this.proyecto.productos_derivados,
      fecha_inicio:this.proyecto.fecha_inicio,
      fecha_termino:this.proyecto.fecha_termino, 
      titulo:this.proyecto.titulo,
      participacion:this.proyecto.participacion,
      Area:this.proyecto.Area
    };


    this.proyectoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.router.navigate(['/proyecto-add']);
        },
        error: (e) => console.error(e)
      });
  }
  newProyecto(): void {
    this.submitted = false;
    this.proyecto = {
      referencia: '',
      usuarios:'',
      monto_financiamiento:'',
      institucion_principal:'',
      instituciones_asociadas: '',
      fiente_financiamiento: '',
      productos_derivados: '',
      fecha_inicio: '',
      fecha_termino: '', 
      titulo: '',
      participacion: '',
      Area: ''
    };
  }
  

}
