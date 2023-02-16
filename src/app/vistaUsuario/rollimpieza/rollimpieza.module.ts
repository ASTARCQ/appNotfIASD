import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RollimpiezaPageRoutingModule } from './rollimpieza-routing.module';

import { RollimpiezaPage } from './rollimpieza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RollimpiezaPageRoutingModule
  ],
  declarations: [RollimpiezaPage]
})
export class RollimpiezaPageModule {}
