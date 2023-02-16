import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RollimpiezaPage } from './rollimpieza.page';

const routes: Routes = [
  {
    path: '',
    component: RollimpiezaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RollimpiezaPageRoutingModule {}
