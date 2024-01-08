import { Component, OnInit } from '@angular/core';
import { Sni } from 'src/app/models/sni.model';
import { SniService } from 'src/app/services/sni.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sni',
  templateUrl: './add-sni.component.html',
  styleUrls: ['./add-sni.component.css']
})
export class AddSniComponent implements OnInit {

  sni: Sni = {
    anio:'',
    nivel:'',
    acciones:''

  };
  submitted = false;

  constructor(private sniService: SniService, private router: Router) { }

  ngOnInit(): void {
  }

  saveSni(): void {
    const data = {
      anio:this.sni.anio,
      nivel:this.sni.nivel,
      acciones:this.sni.acciones

    };


    this.sniService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.router.navigate(['/sni-add']);
        },
        error: (e) => console.error(e)
      });
  }
  newSni(): void {
    this.submitted = false;
    this.sni = {
      anio:'',
      nivel:'',
      acciones:''
    };
  }
  

}
