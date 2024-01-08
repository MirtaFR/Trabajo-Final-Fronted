import { Component, OnInit } from '@angular/core';
import { Patente } from 'src/app/models/patente.model';
import { PatenteService } from 'src/app/services/patente.service';


@Component({
  selector: 'app-add-patente',
  templateUrl: './add-patente.component.html',
  styleUrls: ['./add-patente.component.css']
})
export class AddPatenteComponent implements OnInit {

    patente: Patente = {
    tipo:'',
    nombre_producto:'',
    numero_registro:'',
    fecha:'',
    referencia:''
  };
  submitted = false;
  constructor(private patenteService: PatenteService) { }

  ngOnInit(): void {
  }

  savePatente(): void {
    const data = {
      tipo:this.patente.tipo,
      nombre_producto:this.patente.nombre_producto,
      numero_registro:this.patente.numero_registro,
      fecha:this.patente.fecha,
      referencia:this.patente.referencia
    };

    this.patenteService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newPatente(): void {
    this.submitted = false;
    this.patente = {
      tipo:'',
      nombre_producto:'',
      numero_registro:'',
      fecha:'',
      referencia:''
    };
  }
}
