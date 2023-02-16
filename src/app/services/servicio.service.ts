import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LoadingController, NavController } from "@ionic/angular";
import { environment } from "src/environments/environment";
import { Storage } from "@ionic/storage-angular";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';


const Url=environment.Url;
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // Authorization: 'my-auth-token'
    })
  };

@Injectable({
    providedIn: 'root'
})
export class PersonasService{
    rol:string=null;
    token:string=null;
    //-----perfil--------
    perf:string=null;//nombre ministerio
    nameUsu:string=null;// nombre de usaurio
    //-------hasta qui perfil----
    //storage: any;

    rolesAsignado=[];

    constructor(private http: HttpClient,
                private router: Router,private loadingCtrl: LoadingController,
                private storage:Storage,
                //private navControler:NavController,
                ){

                }

    Roles(){
        return this.rol;
    } 
    Perfil(){
      return this.perf;
    }

    EditarUser(id: any, payload: any): Observable<any> {
        return this.http.put(`${Url}/usuario/${id}`, payload, httpOptions).pipe(
          map((body: any) => {

            return body;
          })
        );
    }
    EditarMinisterio(id:any, payloads :any):Observable<any>{
      return this.http.put(`${Url}/EditarMinisterio/${id}`,payloads,httpOptions).pipe(
        map((body:any)=>{
          console.log("llega bisy",body);
          return body;
        })
      );
    }
    EditarMiembro(id:any, payloads: any):Observable<any>{
      return this.http.put(`${Url}/EditarMiembro/${id}`,payloads,httpOptions).pipe(
        map((body:any)=>{
          return body;
        })
      )
    }
    EditarAsigPrueba(id:any, payloads: any):Observable<any>{
      return this.http.put(`${Url}/EditarAsignacion/${id}`,payloads,httpOptions).pipe(
        map((body:any)=>{
          return body;
        })
      )
    }
    //---------------captar el nombre todo al logearse-------
    asignarRol(role:string){
        this.rol=role;
    }
    asignarPerfil(perfil:string){
      this.perf=perfil;
    }
    asignarPerfilName(name:string){
      this.nameUsu=name;
    }
    //--------hasta qui

    getById(id: string,ruta:string): Observable<any> {
      
        return this.http.get(`${Url}/${ruta}/${id}`).pipe(
          map((body: any) => {
            return body;
          })
        );
      }

      //minsterio editar
      getIdMinisterio(id: string,ruta:string):Observable<any>{
        return this.http.get(`${Url}/${ruta}/${id}`).pipe(
          map((body: any)=>{
            return body;
          })
        );
      }

      //ministerio editar
      getEdiMiembro(id: string, ruta:string):Observable<any>{
        return this.http.get(`${Url}/${ruta}/${id}`).pipe(
          map((body:any)=>{
            return body;
          })
        )
      }
      //editar asiganacion---
      getEdiAsigPrueba(id: string, rutaaa:string):Observable<any>{
        return this.http.get(`${Url}/${rutaaa}/${id}`).pipe(
          map((body:any)=>{
            return body;
          })
        )
      }

      asignacionRol(){
        return this.rolesAsignado;
      }
    //Login
    login(email:string, password:string){
          //console.log('hola');
          // this.presentLoading();//logaut inicia
          const datas ={email,password};
          this.http.post(`${Url}/login`,datas).subscribe(async resp=>{
            
            console.log('respuesta ',resp);

            this.rolesAsignado=resp['perfil'];
            console.log(this.rolesAsignado);
            
            

            const user =resp['data'];
            const perfi = resp['perfil'];
            const nameUsuario= resp['perfil'];

            console.log('pruebas perfil name',nameUsuario);
            this.rol=user.roles[0].name;
            this.perf=perfi[0].nombreRol;
            this.nameUsu=nameUsuario[0].name;

            this.asignarRol(user.roles[0].name);
            this.asignarPerfil(perfi[0].nombreRol);
            this.asignarPerfilName(nameUsuario[0].name);
                console.log('RED',this.rol);
                console.log('BLANCO',this.perf);
                console.log('Nombre: ',this.nameUsu)
            await this.guardarToken(resp['accessToken']);
            console.log(user);
            this.loadingCtrl.dismiss();//logaut termina
                this.router.navigate(['/home']);
        },
        error=>{
            // this.token=null;
            // this.storage.clear();
            console.log(error.error);
            
        }
        );
    }
    async guardarToken(token:string){
        this.token=token;
        await this.storage.set('token',token);
        await this.storage.set('role',this.rol);
        await this.storage.set('perfil',this.perf);//guardar perfil
        await this.storage.set('nombreUsuario',this.nameUsu)//nombre usuario
    }
    //loading
    async presentLoading(){
        const loading = await this.loadingCtrl.create({
          message: 'Iniciando sesion...',
        });
        return await loading.present();
    }
    //registrar usuario
    registroUsua(name:string,email:string,password:string){
        return this.http.post(Url+'/registroUsuario',{name,email,password})
    }
    //listar usuario
    listaUsuario(){
        return this.http.get(`${Url}/listadousuario`);
    }
    //delete Usuario
    EliminarUsuario(id:any){
        return this.http.delete(`${Url}/Deleteusuario/`+id).subscribe(dato=>{
            console.log(dato);           
        })
    }

    //-------------ministerio-----------
    //Lista de Ministerio---------------
    listaMinisterio(){
        return this.http.get(Url+'/ListaMinisterio');
    }
    // registrar ministerio
    registroMinisterio(nombreRol:string){
        return this.http.post(Url+'/RegistroMinisterio',{nombreRol});
    }
    // delete eliminar ministerio
    eliminarMinisterio(id:any){
      console.log('id: ',id);
        
      return this.http.delete(`${Url}/Deleteministerio/`+id).subscribe(data =>{
        console.log(data);
      });
      //this.listaMinisterio();
    }
    //------------miembro-------------
    //registro miembro
    RegistroMiembro(iduser:number,iglesia:string,bautizo:number){
        console.log(iduser, iglesia, bautizo);
        return this.http.post(Url+'/Registromiembro',{iduser,iglesia,bautizo});
    }
    //lista de miembros registrado
    ListaMiembros(){
        return this.http.get(Url+'/miembroiglesia');
    }
    EliminarMiembro(id:any){
        return this.http.delete(`${Url}/Deletemiembro/`+id).subscribe(dat=>{
            console.log(dat);
            
        });
        //this.ListaMiembros();
    }
    //---------Asiganacion-----------
    // registro asignacion
    RegistroAsignacion(idministerio:number,idmiembro:number,fechaInicio:Date,fechaFinal:Date){
        return this.http.post(Url+'/Registrarasignacion',{idministerio,idmiembro,fechaInicio,fechaFinal});
    }
    //lustar asigancion muestra solo con los id sin nombre
    ListarAsiganacionPrueva(){
      return this.http.get(Url+'/listadoasignacion');
    }
    //-eLIMINAR ASIGANACION
    EliminarAsigPrueba(id:any){
      return this.http.delete(`${Url}/Deleteasignacion/`+id).subscribe(datos=>{
        console.log('elimino asiganacion prueba:',datos);
      })
    }
    //-------------miembro asigancion-------------
        //lista de miembro asigancion con mosbres y no miuestra los ide nomas asiganacion
    ListaAsigActv(){
      return this.http.get(Url+'/Asiganacionconsulta');
    }
    EleminarAsig(id:any){
      return this.http.delete(`${Url}/ministerioasig/`+id).subscribe(dat=>{
        console.log("eleminado asignacion",dat);
      });
    }
    //registrar Miembro Asigancion
    RegistroMiembroAsignacion(iduser:number,idasignacionrol:number){
      return this.http.post(Url+'/RegistroMinisterioasig',{iduser,idasignacionrol});
  }
    //consulta de hermanos bautizados
    consuttaMiem(){
        return this.http.get(Url+'/ConMiembroLista');
    }
    //-------------Consulta de vista general
    ConsultaGeneral(id:number):Observable<any>{
        return this.http.get(Url+'/ConsultaGeneral/'+id);
    }
}