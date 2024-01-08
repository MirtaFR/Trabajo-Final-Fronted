import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {
  user: User = {
    nombre:'',
    apellido_materno:'',
    apellido_paterno:'',
    rfc:'',
    email:'',
    password:''

  };
  submitted = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  saveUser(): void {
    const data = {
      nombre:this.user.nombre,
      apellido_materno:this.user.apellido_materno,
      apellido_paterno:this.user.apellido_paterno,
      rfc:this.user.rfc,
      email:this.user.email,
      password:this.user.password,
    };


    this.userService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.router.navigate(['/inicio_sesion-add']);
        },
        error: (e) => console.error(e)
      });
  }
  newUser(): void {
    this.submitted = false;
    this.user = {
      nombre: '',
      apellido_materno: '',
      apellido_paterno: '',
      rfc:'',
      email:'',
      password:''
    };
  }
  

}
