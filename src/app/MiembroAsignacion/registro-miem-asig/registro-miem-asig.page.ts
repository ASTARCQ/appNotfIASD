import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Usuario } from 'src/app/Model/Usuatio.model';
import { PersonasService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-registro-miem-asig',
  templateUrl: './registro-miem-asig.page.html',
  styleUrls: ['./registro-miem-asig.page.scss'],
})
export class RegistroMiemAsigPage implements OnInit {
  registroMiemAsignacion:FormGroup;
  usuario: Usuario = new Usuario;
  listausuarios=[];
  @Input() title:string;
  @Input() id_miembro_Asig:string=null;
  @Input() condicion_miembro_Asig:boolean=false;
  estado:boolean;
  constructor(private authService:PersonasService,
              private miembAsig:FormBuilder,
              public activarModal:ModalController,) { }

  ngOnInit() {
    this.getListaUsuarios();
  }
  getListaUsuarios(){
    this.authService.listaUsuario().subscribe((res: any)=>{
      console.log(res);
      this.listausuarios=res.data;
    })
  }

}
