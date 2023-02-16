import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroUsuPage } from './registro-usu.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroUsuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroUsuPageRoutingModule {}
