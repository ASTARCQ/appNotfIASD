import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PersonasService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-rolpredicador',
  templateUrl: './rolpredicador.page.html',
  styleUrls: ['./rolpredicador.page.scss'],
})
export class RolpredicadorPage implements OnInit {
  listaPredicadorConsulta=[];

  constructor(private authService:PersonasService,private diac:FormBuilder) { }

  ngOnInit() {
    this.listaPredicador();
  }
  listaPredicador(){
    console.log(this.listaPredicadorConsulta);
    this.authService.ConsultaGeneral(4).subscribe(datos=>{
    console.log(datos);
    this.listaPredicadorConsulta = datos;
    }, (error) => console.log(error));
  }
}
