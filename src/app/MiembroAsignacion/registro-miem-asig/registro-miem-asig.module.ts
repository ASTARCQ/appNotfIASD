import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroMiemAsigPageRoutingModule } from './registro-miem-asig-routing.module';

import { RegistroMiemAsigPage } from './registro-miem-asig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegistroMiemAsigPageRoutingModule
  ],
  declarations: [RegistroMiemAsigPage]
})
export class RegistroMiemAsigPageModule {}
