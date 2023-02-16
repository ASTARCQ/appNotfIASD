import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadasigPage } from './actividadasig.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadasigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadasigPageRoutingModule {}
