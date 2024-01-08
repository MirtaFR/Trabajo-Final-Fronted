import { Component, OnInit } from '@angular/core';
import { RecuperacionPassword } from 'src/app/models/recuperacion-password.model';
import { RecuperacionPasswordService } from 'src/app/services/recuperacion-password.service';

@Component({
  selector: 'app-add-recuperacion-password',
  templateUrl: './add-recuperacion-password.component.html',
  styleUrls: ['./add-recuperacion-password.component.css']
})
export class AddRecuperacionPasswordComponent implements OnInit {

  recuperacion_password: RecuperacionPassword = {
    correo:'',
    codigo:'',
  };
  submitted = false;
  constructor(private recuperacion_passwordservice: RecuperacionPasswordService) { }

  ngOnInit(): void {
  }

  saveRecuperacionPassword(): void {
    const data = {
      correo:this.recuperacion_password.correo,
      codigo:this.recuperacion_password.codigo
    };

    this.recuperacion_passwordservice.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newRecuperacionPassword(): void {
    this.submitted = false;
    this.recuperacion_password = {
      correo:'',
      codigo:'',
   
    };
  }
}
