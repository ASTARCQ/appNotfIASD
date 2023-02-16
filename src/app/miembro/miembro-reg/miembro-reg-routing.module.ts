import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiembroRegPage } from './miembro-reg.page';

const routes: Routes = [
  {
    path: '',
    component: MiembroRegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiembroRegPageRoutingModule {}
