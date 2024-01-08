import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro.model';
import { LibroService } from 'src/app/services/libro.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.css']
})
export class AddLibroComponent implements OnInit {

  libro: Libro = {
    titulo:'',
    autor:'',
    editorial:'',
    referencia:''
  };
  submitted = false;

  constructor(private libroService: LibroService, private router: Router) { }

  ngOnInit(): void {
  }

  saveLibro(): void {
    const data = {
      titulo:this.libro.titulo,
      autor:this.libro.autor,
      editorial:this.libro.editorial,
      referencia:this.libro.referencia
    };

    this.libroService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;

          // Después de guardar, redirige a la nueva ruta
          this.router.navigate(['/libro-add']);
        },
        error: (e) => console.error(e)
      });
  }

  newLibro(): void {
    this.submitted = false;
    this.libro = {
      titulo:'',
      autor:'',
      editorial:'',
      referencia:''
    };
  }
}
