import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PersonasService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-roldiacono',
  templateUrl: './roldiacono.page.html',
  styleUrls: ['./roldiacono.page.scss'],
})
export class RoldiaconoPage implements OnInit {
  listaConsultaDiacono=[];

  constructor(private authService:PersonasService,private diac:FormBuilder) { }

  ngOnInit() {
    this.listaDiaconos();
  }
  listaDiaconos(){
    console.log(this.listaConsultaDiacono);
    this.authService.ConsultaGeneral(3).subscribe(datos=>{
    console.log(datos);
    this.listaConsultaDiacono = datos;
    }, (error) => console.log(error));
  }
}
