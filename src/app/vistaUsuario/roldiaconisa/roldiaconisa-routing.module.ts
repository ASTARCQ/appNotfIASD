import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoldiaconisaPage } from './roldiaconisa.page';

const routes: Routes = [
  {
    path: '',
    component: RoldiaconisaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoldiaconisaPageRoutingModule {}
