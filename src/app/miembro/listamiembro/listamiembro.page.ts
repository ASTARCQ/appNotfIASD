import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PersonasService } from 'src/app/services/servicio.service';
import { MiembroRegPage } from '../miembro-reg/miembro-reg.page';

@Component({
  selector: 'app-listamiembro',
  templateUrl: './listamiembro.page.html',
  styleUrls: ['./listamiembro.page.scss'],
})
export class ListamiembroPage implements OnInit {
  listamiembro=[];

  constructor(private authService:PersonasService,
              private modalControle:ModalController,) { }

  ngOnInit() {
    this.ListarMiembro();
    
  }
  ListarMiembro(){
    this.authService.ListaMiembros().subscribe((res: any)=>{
      console.log('lista miembro ',res);
      this.listamiembro= res;
    })
  }
  //eliminar usuario
  eliminarMiembro(elim: any){
    console.log('eliminar miembro ',elim);
    this.authService.EliminarMiembro(elim);
      //this.ListarMiembro();
  }
  async crear(){
   const modal= await this.modalControle.create({
      component: MiembroRegPage,
      componentProps:{
        title: 'Crear Miembro/Hermano'
      }
    })
    await modal.present();
    this.ListarMiembro();
  }
  async edit(id:string, estado:boolean){
    console.log(id);
    console.log(estado);
    
    const modal= await this.modalControle.create({
      component: MiembroRegPage,
      componentProps:{
        title: 'Editar Miembro',
        id_miembro:id,
        condicion_miembro:true
    }
  })
    await modal.present();
    this.ListarMiembro();
  }

}
