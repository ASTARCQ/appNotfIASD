import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Miembro, Usuario } from 'src/app/Model/Usuatio.model';
import { PersonasService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-miembro-reg',
  templateUrl: './miembro-reg.page.html',
  styleUrls: ['./miembro-reg.page.scss'],
})
export class MiembroRegPage implements OnInit {
  registroMiembro:FormGroup;
  usuario: Usuario = new Usuario;
  miembro: Miembro = new Miembro;
  listausuarios=[];
  //dete aqui-------------
  @Input() title:string;
  @Input() id_miembro:string=null;
  @Input() condicion_miembro:boolean=false;
  estado:boolean;
  //aqui-------------
  bautizos = [{
    id: 1,
    name: 'Si',
    type: '1',
  },
  {
    id: 0,
    name: 'No',
    type: '0',
  }]

  constructor(private authService:PersonasService,
              private miemb:FormBuilder,
              public activarModal:ModalController,) { }

  /*ngOnInit() {
    this.registroMiembro=this.miemb.group({
      iduser:[0,Validators.required],
      iglesia:['',Validators.required],
      bautizo:['',Validators.required]
    });
    this.getListaUsuarios();
  }*/
  /*registroMiembross(form:FormGroup){
    console.log(form.value);
    //console.log(this.miembro);
    this.authService.RegistroMiembro(this.usuario.id,form.value.iglesia, this.miembro.bautizo).subscribe(
      data=>     console.log(data),
      (error) => console.log(error))
  }*/
  //listar usuario
  getListaUsuarios(){
    this.authService.listaUsuario().subscribe((res: any)=>{
      console.log(res);
      this.listausuarios=res.data;
    })
  }
  // seleccionar usuario
  seleccionado(usuarios){
    console.log(usuarios.detail.value);
    this.usuario= usuarios.detail.value;
    console.log("seleccionado", usuarios.target.value);
    console.log(this.usuario);
  }
  // seleccion de bautizo
  selectBautizo(event){
    this.miembro.bautizo = event;
    console.log(event);
  }
  //---------------------------abanse de nuevo----------------------------
  ngOnInit(){
    this.getListaUsuarios();
    this.estado=!this.condicion_miembro;
    console.log('estado: ',this.estado);             
    console.log(this.title);
    console.log(this.id_miembro);
    console.log(this.condicion_miembro);
    if(this.condicion_miembro){
      this.authService.getEdiMiembro(this.id_miembro,'miembro').subscribe( datas=>{
        console.log('esto llega',datas);
        this.registroMiembro.patchValue({
          iduser:datas.data.iduser,
          iglesia:datas.data.iglesia,
          bautizo:datas.data.bautizo
        });
        
      });
    }
    this.RegisterMiembro();
  }
  RegisterMiembro() {
    this.registroMiembro=this.miemb.group({
      iduser:['',[Validators.required]],
      iglesia:['',[Validators.required]],
      bautizo:['',[Validators.required]]
    });
  }
  onSubmit(form:any){
  console.log(form);
     if(this.condicion_miembro){
       console.log(this.id_miembro);
       console.log(form);
       this.authService.EditarMiembro(this.id_miembro,form).subscribe(data=>{
        console.log("estollega Editar:",data);
         this.activarModal.dismiss();
       })
    }
     else{
      
       this.authService.RegistroMiembro(form.iduser,form.iglesia,form.bautizo).subscribe(data=>{
        console.log(data);
        this.registroMiembro.reset();
        this.activarModal.dismiss();

       })
    }
  }
  /*prueba(pru:any){
    console.log(pru);
    
  }*/
}
