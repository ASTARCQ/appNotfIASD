import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-rollimpieza',
  templateUrl: './rollimpieza.page.html',
  styleUrls: ['./rollimpieza.page.scss'],
})
export class RollimpiezaPage implements OnInit {
  listaLimpiezaConsulta=[];

  constructor(private authService:PersonasService) { }

  ngOnInit() {
    this.LimpiezaListaCons();
  }
  LimpiezaListaCons(){
    console.log(this.listaLimpiezaConsulta);
    this.authService.ConsultaGeneral(1).subscribe(datos=>{
    console.log(datos);
    this.listaLimpiezaConsulta = datos;
    }, (error) => console.log(error));
  }
}
