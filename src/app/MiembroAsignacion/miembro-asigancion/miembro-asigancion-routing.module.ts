import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiembroAsigancionPage } from './miembro-asigancion.page';

const routes: Routes = [
  {
    path: '',
    component: MiembroAsigancionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiembroAsigancionPageRoutingModule {}
