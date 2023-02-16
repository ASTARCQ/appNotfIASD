
/*export class Usuario {
  id:number;
  email : string;
}

export class ResponseUsuario extends Usuario{
  data : Usuario;
  message : string;
}*/
export class Usuario {
  email: string;
  id: number;
  name: string;
}
export class Miembro extends Usuario{
  idMiembro: number;
  iglesia: string;
  bautizo : number;
}
export class Ministerios {
  id:number;
  nombreRol: string;
}