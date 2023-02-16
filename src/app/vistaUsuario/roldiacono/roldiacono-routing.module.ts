import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoldiaconoPage } from './roldiacono.page';

const routes: Routes = [
  {
    path: '',
    component: RoldiaconoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoldiaconoPageRoutingModule {}
