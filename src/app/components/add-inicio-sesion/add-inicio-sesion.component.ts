import { Component, OnInit } from '@angular/core';
import { InicioSesion } from 'src/app/models/inicio-sesion.model';
import { InicioSesionService } from 'src/app/services/inicio-sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-inicio-sesion',
  templateUrl: './add-inicio-sesion.component.html',
  styleUrls: ['./add-inicio-sesion.component.css']
})
export class AddInicioSesionComponent implements OnInit {
  inicio_sesion: InicioSesion = {
    rfc:'',
    contraseña:'',
  };
  submitted = false;

  constructor(private inicio_sesionService: InicioSesionService, private router: Router) { }

  ngOnInit(): void {
  }

  saveInicioSesion(): void {
    const data = {
      rfc: this.inicio_sesion.rfc,
      contraseña: this.inicio_sesion.contraseña
    };

    this.inicio_sesionService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;

          // Después de guardar, redirige a la nueva ruta
          this.router.navigate(['/informacion_general-add']);
        },
        error: (e) => console.error(e)
      });
  }

  newInicioSesion(): void {
    this.submitted = false;
    this.inicio_sesion = {
      rfc: '',
      contraseña: '',
    };
  }

  redirectToRecuperacionPassword(): void {
    // Redirige a la ruta sin guardar datos
    this.router.navigate(['/recuperacion_password-add']);
  }

  redirectToRegisterUser(): void{
    this.router.navigate(['/user-add']);
  }
}
