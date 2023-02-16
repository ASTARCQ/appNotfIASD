import { Component, OnInit } from '@angular/core';
//import { ResponseUsuario } from '../Model/Usuatio.model';
import { Storage } from '@ionic/storage-angular';
import { PersonasService } from '../services/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  rol:string=null;
  //prueba:string='hola';
  perf:string=null;
  nameUsu:string=null;

  roles=[];
  constructor(
    //private rolSerice:PersonasService,
    private rolserice:Storage,
    private rolesService:PersonasService,
  ) {
  
  //  console.log('admin: ',this.rol);
  //  console.log('perfil: ',this.perf);
   
  this.roles=this.rolesService.asignacionRol();
  console.log('prueba: ',this.roles);
}
async ngOnInit() {
  this.rol= await this.rolserice.get('role');
  // this.perf= await this.rolserice.get('perfil');
  // this.nameUsu= await this.rolserice.get('name');
    
}
}
