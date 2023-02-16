import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { PersonasService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-registrar-minis',
  templateUrl: './registrar-minis.page.html',
  styleUrls: ['./registrar-minis.page.scss'],
})
export class RegistrarMinisPage implements OnInit {
  registroMinisterios: FormGroup;

  @Input() title:string;
  @Input() id_ministerio:string=null;
  @Input() condicion_mini:boolean=false;

  estado:boolean;

  constructor(private authService:PersonasService,
              private min:FormBuilder,
              private alertController: AlertController,
             public activarModal:ModalController,
             private navController:NavController) { }

  ngOnInit(){
    this.estado=!this.condicion_mini;
              console.log('estado: ',this.estado);             
              console.log(this.title);
              console.log(this.id_ministerio);
              console.log(this.condicion_mini);
              if(this.condicion_mini){
                this.authService.getIdMinisterio(this.id_ministerio,'ministerio').subscribe( (datas:any)=>{
                  console.log('esto llega',datas);
                  this.registroMinisterios.patchValue({
                    nombreRol:datas.data.nombreRol
                  });
                  
                });
              }
              this.registro();
  }
  registro(){
    this.registroMinisterios=this.min.group({
      nombreRol:['',[Validators.required]]
    })
  }
  onSubmit(form:any){
    if(this.condicion_mini){
      console.log(this.id_ministerio);
      console.log(form);
      
      this.authService.EditarMinisterio(this.id_ministerio,form).subscribe(data=>{
        //this.activarModal.dismiss(this.ListadoMinisterios());
        this.activarModal.dismiss();
        //this.navController.navigateRoot('/lista-minis');
        //this.presentAlert('EXITO','Actualizado correctamente');

      })
    }
    else{

      this.authService.registroMinisterio(form.nombreRol).subscribe(data=>{
       console.log(data);
       //this.presentAlert('EXITO','SU USUARIO CREADO');
       this.registroMinisterios.reset();
      })
      }
  }
  /*ListadoMinisterios(){
    this.authService.listaMinisterio().subscribe((res: any)=>{
      console.log('usuario: ',res);
    })
  }*/
  //alerta de registro
  /*async presentAlert(titulo:string, mensage:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensage,
      buttons: ['OK'],
    });

    await alert.present();
  }*/
  /*ngOnInit() {
    this.registroMinisterios=this.min.group({
      nombreRol:['',Validators.required]
    })
  }*/
  /*registro(Minist:FormGroup){

    this.authService.registroMinisterio(Minist.value.nombreRol).subscribe(data=>{
      console.log(data);
    })
  }*/
}
