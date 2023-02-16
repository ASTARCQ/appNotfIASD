import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PersonasService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-roldiaconisa',
  templateUrl: './roldiaconisa.page.html',
  styleUrls: ['./roldiaconisa.page.scss'],
})
export class RoldiaconisaPage implements OnInit {
  listataDiaconisaConsulta=[];

  constructor(private authService:PersonasService,private diac:FormBuilder) { }

  ngOnInit() {
    this.listaDiaconisa();
  }
  listaDiaconisa(){
      console.log(this.listataDiaconisaConsulta);
      this.authService.ConsultaGeneral(2).subscribe(datos=>{
      console.log(datos);
      this.listataDiaconisaConsulta = datos;
    }, (error) => console.log(error));
  }
}
