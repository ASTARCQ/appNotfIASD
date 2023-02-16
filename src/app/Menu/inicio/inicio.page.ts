import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirector: string;
  role?:any[];
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componente: Componente[]=[
    {
      icon: 'person-add',
      name:'RegistroUsuario',
      redirector:'/student',
      role:['administrador']
    },
    {
      icon: 'create-sharp',
      name:'RegistroMinisterio',
      redirector:'/usuario',
      role:["administrador"]
    },
    {
      icon: 'people-sharp',
      name:'RegistroMiembro',
      redirector:'/usuario',
      role:["administrador"]
    },
    {
      icon: 'people-sharp',
      name:'RegistroActividad',
      redirector:'/usuario',
      role:["administradors"]
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}

