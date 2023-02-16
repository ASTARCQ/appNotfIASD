import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroMiemAsigPage } from './registro-miem-asig.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroMiemAsigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroMiemAsigPageRoutingModule {}
