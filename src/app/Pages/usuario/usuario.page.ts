import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
//import { ResponseUsuario } from 'src/app/Model/Usuatio.model';
import { PersonasService } from 'src/app/services/servicio.service';
import { RegistroUsuPage } from '../registro-usu/registro-usu.page';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  usuarios=[];
  //registro:FormGroup;

  constructor(
    private usuarioSerice:PersonasService,
    private modalControle:ModalController,
    
  ) { 
  }

  ngOnInit() {
    console.log('hola mundo');
    
    this.list();
  }

  list(){
    this.usuarioSerice.listaUsuario().subscribe((data:any)=>{
      console.log('usuario: ',data);
      this.usuarios=data.data;
    })
  }
 async crear(){
   const modal= await this.modalControle.create({
      component: RegistroUsuPage,
      componentProps:{
        title: 'Crear Usuario'
      }
    })
    await modal.present(); 
    console.log('llamando lista');
    
    this.list();
  }
  async edit(id:string, estado:boolean){
    console.log(id);
    console.log(estado);
    
    const modal= await this.modalControle.create({
      component: RegistroUsuPage,
      componentProps:{
        title: 'Editar Usuario',
        id_usuario:id,
        condicion:true
      }
    })

     await modal.present();
    //  this.list();

  }

  EliminarUsuarios(elim: any){
    this.usuarioSerice.EliminarUsuario(elim);
    console.log('listar');
    this.list();
  }
}
