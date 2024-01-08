import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  menu: Menu = {
    nombre:'',
    informacion_general:'',
    produccion:'',
    documento:'',
    guia: ''
  };
  submitted = false;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
  }

  saveMenu(): void {
    const data = {
      nombre:this.menu.nombre,
      informacion_general:this.menu.informacion_general,
      produccion:this.menu.produccion,
      documento:this.menu.documento,
      guia:this.menu.guia
    };

    this.menuService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newMenu(): void {
    this.submitted = false;
    this.menu = {
      nombre:'',
      informacion_general:'',
      produccion:'',
      documento:'',
      guia:''
   
    };
  }

}
