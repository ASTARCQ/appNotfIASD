import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiembroRegPageRoutingModule } from './miembro-reg-routing.module';

import { MiembroRegPage } from './miembro-reg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MiembroRegPageRoutingModule
  ],
  declarations: [MiembroRegPage]
})
export class MiembroRegPageModule {}
