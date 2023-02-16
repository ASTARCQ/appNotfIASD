import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiembroAsigancionPageRoutingModule } from './miembro-asigancion-routing.module';

import { MiembroAsigancionPage } from './miembro-asigancion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MiembroAsigancionPageRoutingModule
  ],
  declarations: [MiembroAsigancionPage]
})
export class MiembroAsigancionPageModule {}
