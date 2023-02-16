import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./Menu/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./Pages/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'create-usuario',
    loadChildren: () => import('./create-usuario/create-usuario.module').then( m => m.CreateUsuarioPageModule)
  },
  {
    path: 'registro-usu',
    loadChildren: () => import('./Pages/registro-usu/registro-usu.module').then( m => m.RegistroUsuPageModule)
  },
  {
    path: 'lista-minis',
    loadChildren: () => import('./ministerio/lista-minis/lista-minis.module').then( m => m.ListaMinisPageModule)
  },
  {
    path: 'registrar-minis',
    loadChildren: () => import('./ministerio/registrar-minis/registrar-minis.module').then( m => m.RegistrarMinisPageModule)
  },
  {
    path: 'listamiembro',
    loadChildren: () => import('./miembro/listamiembro/listamiembro.module').then( m => m.ListamiembroPageModule)
  },
  {
    path: 'miembro-reg',
    loadChildren: () => import('./miembro/miembro-reg/miembro-reg.module').then( m => m.MiembroRegPageModule)
  },
  {
    path: 'actividadasig',
    loadChildren: () => import('./asignacion/actividadasig/actividadasig.module').then( m => m.ActividadasigPageModule)
  },
  {
    path: 'roldiacono',
    loadChildren: () => import('./vistaUsuario/roldiacono/roldiacono.module').then( m => m.RoldiaconoPageModule)
  },
  {
    path: 'roldiaconisa',
    loadChildren: () => import('./vistaUsuario/roldiaconisa/roldiaconisa.module').then( m => m.RoldiaconisaPageModule)
  },
  {
    path: 'rolpredicador',
    loadChildren: () => import('./vistaUsuario/rolpredicador/rolpredicador.module').then( m => m.RolpredicadorPageModule)
  },
  {
    path: 'rollimpieza',
    loadChildren: () => import('./vistaUsuario/rollimpieza/rollimpieza.module').then( m => m.RollimpiezaPageModule)
  },
  {
    path: 'listaasiga',
    loadChildren: () => import('./asignacion/listaasiga/listaasiga.module').then( m => m.ListaasigaPageModule)
  }, 
  /*{
    path: 'miembro-asignacion',
    loadChildren: () => import('./miembro-asignacion/miembro-asignacion.module').then( m => m.MiembroAsignacionPageModule)
  {*/
  { 
    path: 'miembro-asigancion',
    loadChildren: () => import('./MiembroAsignacion/miembro-asigancion/miembro-asigancion.module').then( m => m.MiembroAsigancionPageModule)
  },
  {
    path: 'registro-miem-asig',
    loadChildren: () => import('./MiembroAsignacion/registro-miem-asig/registro-miem-asig.module').then( m => m.RegistroMiemAsigPageModule)
  }
  
  /*  path: 'listamiembro',
    loadChildren: () => import('./miembro/listamiembro/listamiembro.module').then( m => m.ListamiembroPageModule)
  }*/
 /* {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
