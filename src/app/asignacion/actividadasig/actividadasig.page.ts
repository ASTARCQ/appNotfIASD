import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Miembro, Ministerios } from 'src/app/Model/Usuatio.model';
import { PersonasService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-actividadasig',
  templateUrl: './actividadasig.page.html',
  styleUrls: ['./actividadasig.page.scss'],
})
export class ActividadasigPage implements OnInit {
  @Input() title:string;
  @Input() id_asiganacion:string=null;
  @Input() condicion_asiganacion:boolean=false;
  estado:boolean;
  registrarasignacion:FormGroup;
  //lista ministerio
  listaMinisterios=[];
  ministerio: Ministerios = new Ministerios;
  //Miembros
  listaMiembros=[];
  miembro: Miembro = new Miembro;

  constructor(private authService:PersonasService,private asig:FormBuilder,
              public activarModal:ModalController,   ) { }

  /*ngOnInit() {
    this.registrarasignacion=this.asig.group({
      idministerio:[0,Validators.required],
      idmiembro:[0,Validators.required],
      fechaInicio:['',Validators.required],
      fechaFinal:['',Validators.required]
    });
    this.ListadoMinisterios();
    this.listaMi();
  }*/

  /*regisAsiag(as:FormGroup){
    console.log(as.value);
    
    this.authService.RegistroAsignacion(this.ministerio.id, this.miembro.idMiembro, 
                                        as.value.fechaInicio, as.value.fechaFinal).subscribe(data=>{
     console.log("llega estosss:",data),(error) => console.log('el error es',error)
    });
  }*/
  //lista ministerio
  ListadoMinisterios(){
    this.authService.listaMinisterio().subscribe((res: any)=>{
      this.listaMinisterios= res.data;
      console.log(res);
    });
  }
  // SELECCION DE MINISTERIO
  seleccionado(minis){
    this.ministerio = minis.detail.value;
    console.log("seleccionado", minis.target.value);
    console.log(this.ministerio);
  }
  //-------------miembro----------
  //lista miembros bautizados echo en consulta
  listaMi(){
    this.authService.consuttaMiem().subscribe((rest:any)=>{
      this.listaMiembros=rest;
      console.log(rest);
    })
  }
  seleccionMiembro(evey){
    this.miembro = evey.detail.value;
    console.log("seleccionado miembro", evey.detail.value);
    console.log(this.miembro);
  }
  //------------------ deste aqui----------------------
  ngOnInit(){
    this.ListadoMinisterios();
    this.listaMi();
    this.estado=!this.condicion_asiganacion;
              console.log('estado: ',this.estado);             
              console.log(this.title);
              console.log(this.id_asiganacion);
              console.log(this.condicion_asiganacion);
              if(this.condicion_asiganacion){
                this.authService.getEdiAsigPrueba(this.id_asiganacion,'BuscarAsignacion').subscribe( (datas:any)=>{
                  console.log('esto llega',datas);
                  this.registrarasignacion.patchValue({
                    idministerio:datas.data.idministerio,
                    idmiembro:datas.data.idmiembro,
                    fechaInicio:datas.data.fechaInicio,
                    fechaFinal:datas.data.fechaFinal,
                  });
                  
                });
              }
              this.RegisterAsiganacion();
              /*this.ListadoMinisterios();
              this.listaMi();*/
  }
  RegisterAsiganacion() {
    this.registrarasignacion=this.asig.group({
      idministerio:['',[Validators.required]],
      idmiembro:['',[Validators.required]],
      fechaInicio:['',[Validators.required]],
      fechaFinal:['',[Validators.required]]
    });
  }
  onSubmit(form:any){
    console.log(form);
       if(this.condicion_asiganacion){
         console.log(this.id_asiganacion);
         console.log(form);
         this.authService.EditarAsigPrueba(this.id_asiganacion,form).subscribe(data=>{
          console.log("estollega Editar prueba:",data);
           this.activarModal.dismiss();
         })
      }
       else{
        //console.log(form);
        
         this.authService.RegistroAsignacion(form.idministerio,form.idmiembro,form.fechaInicio,
                                             form.fechaFinal).subscribe(data=>{
          console.log(data);
          this.registrarasignacion.reset();
          this.activarModal.dismiss();
  
         })
      }
    }
}