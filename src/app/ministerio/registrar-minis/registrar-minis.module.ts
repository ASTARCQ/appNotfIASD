import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarMinisPageRoutingModule } from './registrar-minis-routing.module';

import { RegistrarMinisPage } from './registrar-minis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegistrarMinisPageRoutingModule
  ],
  declarations: [RegistrarMinisPage]
})
export class RegistrarMinisPageModule {}
