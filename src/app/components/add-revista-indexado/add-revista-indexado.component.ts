import { Component, OnInit } from '@angular/core';
import { RevistaIndexado } from 'src/app/models/revista-indexado.model';
import { RevistaIndexadoService } from 'src/app/services/revista-indexado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-revista-indexado',
  templateUrl: './add-revista-indexado.component.html',
  styleUrls: ['./add-revista-indexado.component.css']
})
export class AddRevistaIndexadoComponent implements OnInit {
  revista: RevistaIndexado = {
    tipo:'',
    nombre_producto:'',
    no_registro:'',
    fecha_registro:'',
    referencia: ''

  };
  submitted = false;

  constructor(private revistaindexadaService: RevistaIndexadoService, private router: Router) { }

  ngOnInit(): void {
  }

  saveRevistaIndexado(): void {
    const data = {
      tipo:this.revista.tipo,
      nombre_producto:this.revista.nombre_producto,
      no_registro:this.revista.no_registro,
      fecha_registro:this.revista.fecha_registro,
      referencia:this.revista.referencia
    };


    this.revistaindexadaService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.router.navigate(['/revista-add']);
        },
        error: (e) => console.error(e)
      });
  }
  newRevistaIndexado(): void {
    this.submitted = false;
    this.revista = {
      tipo:'',
      nombre_producto:'',
      no_registro:'',
      fecha_registro:'',
      referencia: ''
    };
  }
  

}
