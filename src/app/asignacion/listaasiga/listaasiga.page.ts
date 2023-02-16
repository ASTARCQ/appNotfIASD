import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PersonasService } from 'src/app/services/servicio.service';
import { ActividadasigPage } from '../actividadasig/actividadasig.page';

@Component({
  selector: 'app-listaasiga',
  templateUrl: './listaasiga.page.html',
  styleUrls: ['./listaasiga.page.scss'],
})
export class ListaasigaPage implements OnInit {
  listadoAsigancions=[];
  listaAsigPrueva=[];

  constructor(private authService:PersonasService,
              private modalControle:ModalController, ) { }

  ngOnInit() {
    //this.ListaAsicgaciones();
    this.ListaAsigPrueva();
  }
  /*ListaAsicgaciones(){
    this.authService.ListaAsigActv().subscribe((res: any)=>{
      this.listadoAsigancions= res;
      console.log('lista asiganacion ',this.listadoAsigancions);
    })
  }
  eliminarAsiganacion(eliasig: any){
    console.log('eliminar asiganacion ',eliasig);
    this.authService.EleminarAsig(eliasig);
  }*/
  //----------- deste aqui -----------------------
  async crear(){
    const modal= await this.modalControle.create({
       component: ActividadasigPage,
       componentProps:{
         title: 'Crear Actividad/Asiganacion'
       }
     })
     await modal.present();
     this.ListaAsigPrueva();
  }
  async edit(id:string, estado:boolean){
    console.log(id);
    console.log(estado);
    
    const modal= await this.modalControle.create({
      component:  ActividadasigPage,
      componentProps:{
        title: 'Editar Asiganacion/Actividad',
        id_asiganacion:id,
        condicion_asiganacion:true
    }
  })
    await modal.present();
    this.ListaAsigPrueva();
  }
  //prueba de listado de muestra cob ides y no nombre
  ListaAsigPrueva(){
    this.authService.ListarAsiganacionPrueva().subscribe((res: any)=>{
      this.listaAsigPrueva= res.data;
      console.log('lista asiganacion prueba: ',this.listaAsigPrueva);
    })
  }
  eliminarAsiganacionPrueba(eliasigP: any){
    console.log('eliminar asiganacion prueba ',eliasigP);
    this.authService.EliminarAsigPrueba(eliasigP);
  }
}
