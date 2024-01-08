import { Component, OnInit } from '@angular/core';
import { Estancias } from 'src/app/models/estancias.model';
import { EstanciasService } from 'src/app/services/estancias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-estancias',
  templateUrl: './add-estancias.component.html',
  styleUrls: ['./add-estancias.component.css']
})
export class AddEstanciasComponent implements OnInit {

  estancias: Estancias = {
    institucion:'',
    proyecto:'',
    fecha_inicio:'',
    fecha_termino:'',
    acciones: ''              
  };
  submitted = false;

  constructor(private estanciasService: EstanciasService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEstancias(): void {
    const data = {
      institucion:this.estancias.institucion,
      proyecto:this.estancias.proyecto,
      fecha_inicio:this.estancias.fecha_inicio,
      fecha_termino:this.estancias.fecha_termino,
      acciones:this.estancias.acciones 
    };

    this.estanciasService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;

          // Después de guardar, redirige a la nueva ruta
          this.router.navigate(['/estancias-add']);
        },
        error: (e) => console.error(e)
      });
  }

  newEstancias(): void {
    this.submitted = false;
    this.estancias = {
    institucion:'',
    proyecto:'',
    fecha_inicio:'',
    fecha_termino:'',
    acciones: ''  
    };
  }
}
