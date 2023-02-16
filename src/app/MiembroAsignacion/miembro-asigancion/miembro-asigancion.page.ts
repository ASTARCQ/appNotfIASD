import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PersonasService } from 'src/app/services/servicio.service';
import { RegistroMiemAsigPage } from '../registro-miem-asig/registro-miem-asig.page';

@Component({
  selector: 'app-miembro-asigancion',
  templateUrl: './miembro-asigancion.page.html',
  styleUrls: ['./miembro-asigancion.page.scss'],
})
export class MiembroAsigancionPage implements OnInit {
  listaMiembroAsignacion=[];

  constructor(private authService:PersonasService,
              private modalControle:ModalController) { }

  ngOnInit() {
    this.ListarMiembroAsig();
  }
  ListarMiembroAsig(){
    this.authService.ListaAsigActv().subscribe((res: any)=>{
      this.listaMiembroAsignacion= res;
      console.log('lista asiganacion ',this.listaMiembroAsignacion);
    })
  }
  eliminarAsiganacion(eliasig: any){
    console.log('eliminar Miembro-asiganacion ',eliasig);
    this.authService.EleminarAsig(eliasig);
  }
  async crear(){
    const modal= await this.modalControle.create({
       component: RegistroMiemAsigPage,
       componentProps:{
         title: 'Crear Miembro/Asignacion'
       }
     })
     await modal.present();
     this.ListarMiembroAsig();
   }
}
