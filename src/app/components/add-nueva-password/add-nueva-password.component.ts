import { Component, OnInit } from '@angular/core';
import { NuevaPassword } from 'src/app/models/nueva-password.model';
import { NuevaPasswordService } from 'src/app/services/nueva-password.service';

@Component({
  selector: 'app-add-nueva-password',
  templateUrl: './add-nueva-password.component.html',
  styleUrls: ['./add-nueva-password.component.css']
})
export class AddNuevaPasswordComponent implements OnInit {
  nueva_password: NuevaPassword = {
    nueva_contraseña:'',
    confirmar_contraseña:'',
  };
  submitted = false;
  constructor(private nueva_passwordService: NuevaPasswordService) { }

  ngOnInit(): void {
  }

  saveNuevaPassword(): void {
    const data = {
      nueva__contraseña:this.nueva_password.nueva_contraseña,
      confirmar_contraseña:this.nueva_password.confirmar_contraseña
    };

    this.nueva_passwordService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newNuevaPassword(): void {
    this.submitted = false;
    this.nueva_password = {
      nueva_contraseña:'',
      confirmar_contraseña:'',
   
    };
  }
}
