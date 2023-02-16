import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolpredicadorPageRoutingModule } from './rolpredicador-routing.module';

import { RolpredicadorPage } from './rolpredicador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RolpredicadorPageRoutingModule
  ],
  declarations: [RolpredicadorPage]
})
export class RolpredicadorPageModule {}
