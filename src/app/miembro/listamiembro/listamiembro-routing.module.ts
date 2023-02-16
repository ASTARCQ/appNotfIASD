import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListamiembroPage } from './listamiembro.page';

const routes: Routes = [
  {
    path: '',
    component: ListamiembroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListamiembroPageRoutingModule {}
