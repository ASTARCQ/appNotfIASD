import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolpredicadorPage } from './rolpredicador.page';

const routes: Routes = [
  {
    path: '',
    component: RolpredicadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolpredicadorPageRoutingModule {}
