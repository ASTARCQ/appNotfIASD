import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { PersonasService } from 'src/app/services/servicio.service';
import { RegistrarMinisPage } from '../registrar-minis/registrar-minis.page';

@Component({
  selector: 'app-lista-minis',
  templateUrl: './lista-minis.page.html',
  styleUrls: ['./lista-minis.page.scss'],
})
export class ListaMinisPage implements OnInit {
listaMinisterio=[];
  //modalControle: any;

  constructor(private authService:PersonasService,
              private min:FormBuilder,
              private modalControle:ModalController,) { }

  ngOnInit() {
    this.ListadoMinisterios();
  }
  ListadoMinisterios(){
    this.authService.listaMinisterio().subscribe((res: any)=>{
      this.listaMinisterio= res.data;
      console.log('lista ministerio',this.listaMinisterio);
    })
  }

  async edit(id:string, estado:boolean){
    console.log(id);
    console.log(estado);
    
    const modal= await this.modalControle.create({
      component: RegistrarMinisPage,
      componentProps:{
        title: 'Editar Ministerio',
        id_ministerio:id,
        condicion_mini:true
    }
  })
    await modal.present();
    this.ListadoMinisterios();
  }

  //eliminar ministerio
  EliminarMinisterio(elim: any){
    console.log('eliminar ',elim);
    this.authService.eliminarMinisterio(elim);
  }
  //title
  async crear(){
    // console.log('dfsdf');

   const modal= await this.modalControle.create({
      component: RegistrarMinisPage,
      componentProps:{
        title: 'Crear ministerio'
      }
    })

     await modal.present();
     this.ListadoMinisterios();
    
  }
}
