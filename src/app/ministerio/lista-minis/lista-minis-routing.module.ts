import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaMinisPage } from './lista-minis.page';

const routes: Routes = [
  {
    path: '',
    component: ListaMinisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaMinisPageRoutingModule {}
