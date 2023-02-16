import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarMinisPage } from './registrar-minis.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarMinisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarMinisPageRoutingModule {}
