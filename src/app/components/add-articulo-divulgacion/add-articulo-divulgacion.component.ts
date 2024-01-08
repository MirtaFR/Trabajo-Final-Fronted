import { Component, OnInit } from '@angular/core';
import { ArticuloDivulgacion } from 'src/app/models/articulo-divulgacion.model';
import { ArticuloDivulgacionService } from 'src/app/services/articulo-divulgacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-articulo-divulgacion',
  templateUrl: './add-articulo-divulgacion.component.html',
  styleUrls: ['./add-articulo-divulgacion.component.css']
})
export class AddArticuloDivulgacionComponent implements OnInit {

  articulo_divulgacion: ArticuloDivulgacion = {
    titulo_articulo:'',
    autor:'',
    fecha_aceptado:'',
    fecha_publicado:'',
    nombre_revista: '',
    referencia: ''
  };
  submitted = false;

  constructor(private articulo_divulgacionService: ArticuloDivulgacionService, private router: Router) { }

  ngOnInit(): void {
  }

  saveArticuloDivulgacion(): void {
    const data = {
      titulo_articulo:this.articulo_divulgacion.titulo_articulo,
      autor:this.articulo_divulgacion.autor,
      fecha_aceptado:this.articulo_divulgacion.fecha_aceptado,
      fecha_publicado:this.articulo_divulgacion.fecha_publicado,
      nombre_revista:this.articulo_divulgacion.nombre_revista,
      referencia:this.articulo_divulgacion.referencia
    };

    this.articulo_divulgacionService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;

          // Después de guardar, redirige a la nueva ruta
          this.router.navigate(['/articulo-add']);
        },
        error: (e) => console.error(e)
      });
  }

  newArticuloDivulgacion(): void {
    this.submitted = false;
    this.articulo_divulgacion = {
      titulo_articulo:'',
      autor:'',
      fecha_aceptado:'',
      fecha_publicado:'',
      nombre_revista: '',
      referencia: ''
    };
  }
}
