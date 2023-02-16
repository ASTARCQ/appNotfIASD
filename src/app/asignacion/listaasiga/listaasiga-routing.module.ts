import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaasigaPage } from './listaasiga.page';

const routes: Routes = [
  {
    path: '',
    component: ListaasigaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaasigaPageRoutingModule {}
