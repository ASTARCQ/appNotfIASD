import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUsuarioPage } from './create-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: CreateUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateUsuarioPageRoutingModule {}
